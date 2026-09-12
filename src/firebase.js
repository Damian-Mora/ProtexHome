
// src/firebase.js
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  deleteUser
} from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove
} from 'firebase/database';

import { getFunctions, httpsCallable } from 'firebase/functions';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Configurar Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

// ==============================================
// REGISTRO CON EMAIL (CON VERIFICACIÓN)
// ==============================================
export async function registerWithEmail(email, password, userData) {
  try {
    console.log('📝 Iniciando registro para:', email);

    // 1. Crear usuario en Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('✅ Usuario creado en Auth:', user.uid);

    // 2. Guardar datos en Realtime Database
    try {

      const userRef = ref(db, 'US/' + user.uid);
      await set(userRef, {
        N: (userData.name || '') + ' ' + (userData.lastName || ''),
        E: email,
        M: { // Inicialmente vacío, se llenará cuando agregue dispositivos
        }
      });

      console.log('✅ Datos guardados en Realtime Database');

    } catch (dbError) {
      console.warn('⚠️ No se pudieron guardar datos adicionales:', dbError.message);
    }

    // 3. Enviar email de verificación
    try {
      // Sin actionCodeSettings para desarrollo
      await sendEmailVerification(user);
      console.log('📧 Email de verificación enviado a:', email);

    } catch (emailError) {
      console.warn('⚠️ No se pudo enviar email de verificación:', emailError.message);
    }

    return {
      success: true,
      user,
      needsVerification: true,
      message: 'Registro exitoso. Por favor verifica tu correo electrónico para continuar.'
    };

  } catch (error) {
    console.error('❌ Error en registro:', error);

    let errorMessage = 'Error al registrarse';

    switch (error.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Este correo electrónico ya está registrado.';
        break;
      case 'auth/invalid-email':
        errorMessage = 'El correo electrónico no es válido.';
        break;
      case 'auth/weak-password':
        errorMessage = 'La contraseña debe tener al menos 6 caracteres.';
        break;
      default:
        errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage
    };
  }
}

// ==============================================
// LOGIN CON EMAIL (VERIFICA EMAIL)
// ==============================================
export async function loginWithEmail(email, password, rememberMe = false) {
  try {
    console.log('🔑 Iniciando sesión para:', email);

    await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    console.log('✅ Sesión iniciada:', user.email);

    // VERIFICAR SI EL EMAIL ESTÁ VERIFICADO
    if (!user.emailVerified) {
      console.warn('⚠️ Email no verificado');

      // Cerrar sesión porque no está verificado
      await signOut(auth);

      return {
        success: false,
        needsVerification: true,
        error: 'Debes verificar tu correo electrónico antes de iniciar sesión.',
        email: email
      };
    }

    // Actualizar último login
    try {
      const userRef = ref(db, 'US/' + user.uid);
      await update(userRef, {
        lastLogin: new Date().toISOString(),
        emailVerified: true
      });
    } catch (error) {
      console.warn('⚠️ No se pudo actualizar último login');
    }

    return {
      success: true,
      user
    };

  } catch (error) {
    console.error('❌ Error en login:', error);

    let errorMessage = 'Error al iniciar sesión';

    switch (error.code) {
      case 'auth/user-not-found':
        errorMessage = 'No se encontró una cuenta con este correo.';
        break;
      case 'auth/wrong-password':
        errorMessage = 'Contraseña incorrecta.';
        break;
      case 'auth/invalid-credential':
        errorMessage = 'Credenciales inválidas.';
        break;
      case 'auth/too-many-requests':
        errorMessage = 'Demasiados intentos. Intenta más tarde.';
        break;
      default:
        errorMessage = error.message;
    }

    return {
      success: false,
      error: errorMessage
    };
  }
}

// ==============================================
// REENVIAR VERIFICACIÓN DE EMAIL
// ==============================================
export async function resendVerificationEmail() {
  try {
    const user = auth.currentUser;

    if (!user) {
      return {
        success: false,
        error: 'No hay usuario activo. Inicia sesión nuevamente.'
      };
    }

    if (user.emailVerified) {
      return {
        success: false,
        error: 'Tu correo ya está verificado.'
      };
    }

    const actionCodeSettings = {
      url: window.location.origin + '/email-verified',
      handleCodeInApp: true
    };

    await sendEmailVerification(user, actionCodeSettings);
    console.log('📧 Email de verificación reenviado a:', user.email);

    return {
      success: true,
      message: 'Correo de verificación reenviado. Revisa tu bandeja de entrada.'
    };

  } catch (error) {
    console.error('Error al reenviar verificación:', error);

    return {
      success: false,
      error: 'Error al reenviar el correo de verificación.'
    };
  }
}

// ==============================================
// VERIFICAR ESTADO DEL EMAIL
// ==============================================
export async function checkEmailVerification() {
  try {
    const user = auth.currentUser;

    if (!user) {
      return {
        success: false,
        error: 'No hay usuario activo.'
      };
    }

    // Recargar el usuario para obtener el estado actualizado
    await user.reload();

    if (user.emailVerified) {
      // Actualizar en la base de datos
      try {
        const userRef = ref(db, 'US/' + user.uid);
        await update(userRef, {
          emailVerified: true,
          updatedAt: new Date().toISOString()
        });
      } catch (error) {
        console.warn('⚠️ No se pudo actualizar estado de verificación');
      }

      return {
        success: true,
        verified: true,
        message: '¡Correo verificado exitosamente!'
      };
    }

    return {
      success: true,
      verified: false,
      message: 'El correo aún no ha sido verificado.'
    };

  } catch (error) {
    console.error('Error al verificar email:', error);

    return {
      success: false,
      error: 'Error al verificar el estado del correo.'
    };
  }
}

// ==============================================
// LOGIN CON GOOGLE (YA VIENE VERIFICADO)
// ==============================================
export async function loginWithGoogle() {
  try {
    console.log('🔑 Iniciando sesión con Google...');

    await setPersistence(auth, browserLocalPersistence);
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    console.log('✅ Google login exitoso:', user.email);

    // Google ya verifica el email automáticamente

    try {
      const userRef = ref(db, 'US/' + user.uid);
      const snapshot = await get(userRef);

      if (!snapshot.exists()) {
        // En loginWithGoogle, si es usuario nuevo:
        const names = (user.displayName || '').split(' ');
        const firstName = names[0] || '';
        const lastName = names.slice(1).join(' ') || '';

        await set(userRef, {
          N: user.displayName || '',
          E: user.email,
          M: {}
        });

        return {
          success: true,
          user,
          isNewUser: true,
          message: '¡Bienvenido a SecureHome!'
        };
      } else {
        await update(userRef, {
          lastLogin: new Date().toISOString(),
          photoURL: user.photoURL || '',
          emailVerified: true
        });
      }

    } catch (dbError) {
      console.warn('⚠️ Error con Realtime Database:', dbError.message);
    }

    return {
      success: true,
      user,
      isNewUser: false
    };

  } catch (error) {
    console.error('❌ Error en login con Google:', error);

    let errorMessage = 'Error al iniciar sesión con Google';

    if (error.code === 'auth/popup-closed-by-user') {
      errorMessage = 'Ventana de inicio cerrada. Intenta de nuevo.';
    } else if (error.code === 'auth/unauthorized-domain') {
      errorMessage = 'Dominio no autorizado. Verifica en Firebase Console.';
    }

    return {
      success: false,
      error: errorMessage
    };
  }
}

// ==============================================
// CERRAR SESIÓN
// ==============================================
export async function logoutUser() {
  try {
    await signOut(auth);
    console.log('👋 Sesión cerrada');
    return { success: true };
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    return { success: false, error: 'Error al cerrar sesión' };
  }
}

// ==============================================
// RECUPERAR CONTRASEÑA
// ==============================================
export async function resetPassword(email) {
  try {
    const actionCodeSettings = {
      url: window.location.origin + '/reset-password',
      handleCodeInApp: true
    };

    await sendPasswordResetEmail(auth, email, actionCodeSettings);
    console.log('📧 Email de recuperación enviado a:', email);

    return {
      success: true,
      message: 'Revisa tu correo para restablecer la contraseña.'
    };
  } catch (error) {
    console.error('Error en recuperación:', error);

    let errorMessage = 'Error al enviar el correo de recuperación.';

    if (error.code === 'auth/user-not-found') {
      errorMessage = 'No se encontró una cuenta con este correo.';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'El correo electrónico no es válido.';
    }

    return {
      success: false,
      error: errorMessage
    };
  }
}

// ==============================================
// OBSERVAR CAMBIOS DE AUTENTICACIÓN
// ==============================================
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log('👤 Usuario autenticado:', user.email);
      console.log('📧 Email verificado:', user.emailVerified);

      try {
        const userRef = ref(db, 'US/' + user.uid);
        const snapshot = await get(userRef);

        if (snapshot.exists()) {
          const userData = snapshot.val();
          callback({ ...user, ...userData });
        } else {
          callback(user);
        }
      } catch (error) {
        console.warn('⚠️ Error al leer Realtime Database');
        callback(user);
      }
    } else {
      console.log('👤 Sin usuario');
      callback(null);
    }
  });
}

// ==============================================
// OBTENER DATOS DEL USUARIO
// ==============================================
export async function getCurrentUserData() {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    const userRef = ref(db, 'US/' + user.uid);
    const snapshot = await get(userRef);
    return snapshot.exists() ? snapshot.val() : null;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return null;
  }
}

// ==============================================
// ELIMINAR CUENTA
// ==============================================
export async function deleteAccount(uid) {
  const auth = getAuth();
  const user = auth.currentUser;

  try {
    // Eliminar datos en Realtime Database
    const userRef = ref(db, 'US/' + uid);
    await remove(userRef);

    // Eliminar cuenta de Auth
    if (user) {
      await deleteUser(user);
    }

    return { success: true };
  } catch (error) {
    console.error('Error al eliminar cuenta:', error);

    // Si el error es por sesión antigua, forzar logout
    if (error.code === 'auth/requires-recent-login') {
      await signOut(auth);
      return { success: false, error: 'Inicia sesión nuevamente para eliminar la cuenta.' };
    }

    return { success: false, error: error.message };
  }
}

// ==============================================
// UTILIDADES DE VALIDACIÓN
// ==============================================
export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validatePassword(password) {
  return password.length >= 6;
}

export function validateName(name) {
  return name.length >= 2;
}

export { app };
