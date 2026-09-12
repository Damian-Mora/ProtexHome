// src/controllers/deviceController.js
import { getDatabase, ref, set, get, onValue, update } from 'firebase/database';
import { readOnlineStatus, listenOnlineStatus, pingDevice } from '../services/onlineStatus.js';

export class DeviceController {
  constructor(user, serial) {
    this.user = user;
    this.serial = serial;
    this.db = getDatabase();
  }

  async loadDeviceData() {
    const deviceRef = ref(this.db, 'US/' + this.user.uid + '/M/' + this.serial);

    try {
      const deviceSnapshot = await get(deviceRef);

      if (deviceSnapshot.exists()) {
        const data = deviceSnapshot.val();
        const isOnline = await readOnlineStatus(this.serial);

        return {
          serial: this.serial,
          name: data.N || 'Sin nombre',
          type: data.T || 1,
          role: data.U || 'INV',
          status: isOnline ? 'online' : 'offline'
        };
      }
    } catch (error) {
      console.error('Error al cargar dispositivo:', error);
    }

    return null;
  }

  // ========== ROLES ==========
  async getUserRole() {
    const deviceRef = ref(this.db, 'US/' + this.user.uid + '/M/' + this.serial);
    const snapshot = await get(deviceRef);
    if (snapshot.exists()) {
      return snapshot.val().U || 'INV';
    }
    return 'INV';
  }

  async isOwner() {
    return (await this.getUserRole()) === 'PRO';
  }

  async isAdmin() {
    const role = await this.getUserRole();
    return role === 'ADM' || role === 'PRO';
  }

  // ========== ONLINE/OFFLINE (usa servicio centralizado) ==========
  listenOnlineStatus(callback) {
    return listenOnlineStatus(this.serial, callback);
  }

  pingDevice() {
    return pingDevice(this.serial);
  }

  async isDeviceOnline() {
    return await readOnlineStatus(this.serial);
  }

  // ========== COMANDOS DE PUERTA ==========
  async sendDoorCommand(doorNumber, callback) {
    const doorKey = 'S' + doorNumber;
    const stateRef = ref(this.db, 'M/' + this.serial + '/X/' + doorKey);

    try {
      const snapshot = await get(stateRef);
      const currentData = snapshot.exists() ? snapshot.val() : { E: 1, R: 0 };
      const currentState = currentData.E || 1;
      const newState = currentState === 1 ? 2 : 1;

      await set(stateRef, { E: newState, R: 0 });
      console.log('📤 Enviado comando puerta', doorNumber, ':', currentState, '→', newState, '(R=0)');

      const maxWait = 10000;
      const startTime = Date.now();

      const checkConfirmation = setInterval(async () => {
        const checkSnapshot = await get(stateRef);
        const checkData = checkSnapshot.exists() ? checkSnapshot.val() : {};
        const response = checkData.R || 0;

        if (response === newState) {
          clearInterval(checkConfirmation);
          console.log('✅ Confirmado puerta', doorNumber, ':', response);
          if (callback) callback(true, newState);
        } else if (Date.now() - startTime > maxWait) {
          clearInterval(checkConfirmation);
          console.log('⏰ Timeout puerta', doorNumber, '- ESP32 no respondió');
          if (callback) callback(false, currentState);
        }
      }, 500);
    } catch (error) {
      console.error('Error en comando de puerta:', error);
      if (callback) callback(false, 0);
    }
  }

  // ========== ESTADO DE PUERTAS (Z) ==========
  listenDoorPosition(callback) {
    const z1Ref = ref(this.db, 'M/' + this.serial + '/W/Z/1/E');
    const z2Ref = ref(this.db, 'M/' + this.serial + '/W/Z/2/E');

    const unsub1 = onValue(z1Ref, (snap) => {
      const state = snap.exists() ? snap.val() : 0;
      callback(1, state);
    });

    const unsub2 = onValue(z2Ref, (snap) => {
      const state = snap.exists() ? snap.val() : 0;
      callback(2, state);
    });

    // Retornar función de limpieza que cancela ambos listeners
    return () => {
      unsub1();
      unsub2();
    };
  }

  // ========== NOMBRES DE PUERTAS ==========
  async loadDoorNames() {
    const n1Ref = ref(this.db, 'M/' + this.serial + '/W/NPG/1/N');
    const n2Ref = ref(this.db, 'M/' + this.serial + '/W/NPG/2/N');

    try {
      const [snap1, snap2] = await Promise.all([get(n1Ref), get(n2Ref)]);
      return {
        door1: snap1.exists() ? snap1.val() : 'Puerta 1',
        door2: snap2.exists() ? snap2.val() : 'Puerta 2'
      };
    } catch (error) {
      return { door1: 'Puerta 1', door2: 'Puerta 2' };
    }
  }

  async saveDoorName(doorNumber, name) {
    const nameRef = ref(this.db, 'M/' + this.serial + '/W/NPG/' + doorNumber + '/N');
    try {
      await set(nameRef, name);
      return true;
    } catch (error) {
      console.error('Error al guardar nombre:', error);
      return false;
    }
  }

  // ========== COMPARTIR ==========
  async shareDevice(email, role) {
    try {
      const usRef = ref(this.db, 'US');
      const snapshot = await get(usRef);

      if (snapshot.exists()) {
        const users = snapshot.val();
        let targetUid = null;
        let targetName = '';

        for (const uid of Object.keys(users)) {
          if (users[uid].E === email) {
            targetUid = uid;
            targetName = users[uid].N || email;
            break;
          }
        }

        if (!targetUid) {
          return { success: false, error: 'Usuario no encontrado. Debe estar registrado en la app.' };
        }

        if (targetUid === this.user.uid) {
          return { success: false, error: 'No puedes compartir contigo mismo' };
        }

        const myRole = await this.getUserRole();
        if (myRole !== 'PRO' && myRole !== 'ADM') {
          return { success: false, error: 'No tienes permisos para compartir' };
        }

        if (role === 'PRO' && myRole !== 'PRO') {
          return { success: false, error: 'Solo el Propietario puede asignar este rol' };
        }

        await set(ref(this.db, 'M/' + this.serial + '/US/' + targetUid), {
          E: email,
          U: role,
          N: targetName
        });

        const deviceSnapshot = await get(ref(this.db, 'US/' + this.user.uid + '/M/' + this.serial));
        const deviceData = deviceSnapshot.val();

        await set(ref(this.db, 'US/' + targetUid + '/M/' + this.serial), {
          N: deviceData.N || 'Dispositivo compartido',
          T: deviceData.T || 1,
          U: role,
          C: deviceData.C || '****'
        });

        return { success: true, message: 'Compartido con ' + targetName };
      }

      return { success: false, error: 'No se encontraron usuarios' };
    } catch (error) {
      console.error('Error al compartir:', error);
      return { success: false, error: 'Error al compartir' };
    }
  }

  async loadSharedUsers() {
    const shareRef = ref(this.db, 'M/' + this.serial + '/US');

    try {
      const snapshot = await get(shareRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.entries(data).map(([uid, info]) => ({
          uid: uid,
          email: info.E || '',
          name: info.N || 'Sin nombre',
          role: info.U || 'INV'
        }));
      }
    } catch (error) {
      console.error('Error al cargar usuarios compartidos:', error);
    }

    return [];
  }

  async removeSharedUser(targetUid) {
    try {
      const myRole = await this.getUserRole();
      if (myRole !== 'PRO' && myRole !== 'ADM') {
        return { success: false, error: 'No tienes permisos para eliminar usuarios' };
      }

      const targetRef = ref(this.db, 'M/' + this.serial + '/US/' + targetUid);
      const targetSnap = await get(targetRef);
      if (targetSnap.exists() && targetSnap.val().U === 'PRO') {
        return { success: false, error: 'No se puede eliminar al Propietario' };
      }

      await set(targetRef, null);
      await set(ref(this.db, 'US/' + targetUid + '/M/' + this.serial), null);
      return { success: true, message: 'Usuario eliminado' };
    } catch (error) {
      console.error('Error al eliminar usuario compartido:', error);
      return { success: false, error: 'Error al eliminar' };
    }
  }

  async updateSharedUserRole(targetUid, newRole) {
    try {
      const myRole = await this.getUserRole();
      if (myRole !== 'PRO') {
        return { success: false, error: 'Solo el Propietario puede cambiar roles' };
      }

      const targetRef = ref(this.db, 'M/' + this.serial + '/US/' + targetUid);
      const targetSnap = await get(targetRef);
      if (targetSnap.exists() && targetSnap.val().U === 'PRO') {
        return { success: false, error: 'No se puede cambiar el rol del Propietario' };
      }

      await update(targetRef, { U: newRole });
      await update(ref(this.db, 'US/' + targetUid + '/M/' + this.serial), { U: newRole });

      return { success: true };
    } catch (error) {
      console.error('Error al actualizar rol:', error);
      return { success: false, error: 'Error al actualizar' };
    }
  }

  // ========== ELIMINAR DISPOSITIVO ==========
  async deleteDeviceForAll() {
    try {
      const myRole = await this.getUserRole();
      if (myRole !== 'PRO') {
        return { success: false, error: 'Solo el Propietario puede eliminar este sitio' };
      }

      const sharedSnapshot = await get(ref(this.db, 'M/' + this.serial + '/US'));
      if (sharedSnapshot.exists()) {
        const sharedUsers = sharedSnapshot.val();
        for (const uid of Object.keys(sharedUsers)) {
          await set(ref(this.db, 'US/' + uid + '/M/' + this.serial), null);
        }
      }

      await set(ref(this.db, 'US/' + this.user.uid + '/M/' + this.serial), null);
      await set(ref(this.db, 'M/' + this.serial + '/US'), null);
      await set(ref(this.db, 'M/' + this.serial + '/X'), null);
      await set(ref(this.db, 'M/' + this.serial + '/W'), null);
      await set(ref(this.db, 'M/' + this.serial + '/H'), null);
      await set(ref(this.db, 'P/' + this.serial), null);

      return { success: true, message: 'Dispositivo eliminado para todos' };
    } catch (error) {
      console.error('Error al eliminar dispositivo:', error);
      return { success: false, error: 'Error al eliminar' };
    }
  }
}