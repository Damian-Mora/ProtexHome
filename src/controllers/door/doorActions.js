// src/controllers/door/doorActions.js

import { getDatabase, ref, get } from 'firebase/database';
import { showToast } from '../../utils/helpers.js';

// Configurar eventos de puertas
export function setupDoorActions(controller, historyController, user, serial, doorNumber) {
    const btn = document.getElementById('btn-door' + doorNumber);
    if (!btn) return;

    btn.addEventListener('click', async () => {
        // Validaciones
        if (!navigator.onLine) {
            showToast('⚠️ Sin conexión a internet');
            return;
        }

        const deviceOnline = await controller.isDeviceOnline();
        if (!deviceOnline) {
            showToast('⚠️ El dispositivo está sin conexión');
            return;
        }

        // Capturar estado real de la puerta
        const doorStateRef = ref(getDatabase(), `M/${serial}/W/Z/${doorNumber}/E`);
        const doorSnapshot = await get(doorStateRef);
        const doorIsOpen = doorSnapshot.exists() && doorSnapshot.val() === 1;

        // Acción a ejecutar
        const action = doorIsOpen ? 'close' : 'open';

        // UI de "Enviando..."
        btn.disabled = true;
        btn.classList.add('waiting');
        const textEl = btn.querySelector('#door' + doorNumber + '-text');
        textEl.textContent = 'Enviando...';

        // Enviar comando
        controller.sendDoorCommand(doorNumber, async (success, newState) => {
            btn.classList.remove('waiting');
            btn.disabled = false;

            if (success) {
                const userName = user.name || user.email || 'Usuario';
                await historyController.addCommandEvent(doorNumber, action, userName);
                textEl.textContent = 'Comando enviado';
            } else {
                textEl.textContent = 'Sin respuesta';
                setTimeout(async () => {
                    const refState = ref(getDatabase(), `M/${serial}/W/Z/${doorNumber}/E`);
                    const snap = await get(refState);
                    const state = snap.exists() && snap.val() === 1;
                    textEl.textContent = state ? 'Cerrar Puerta' : 'Abrir Puerta';
                }, 2500);
            }
        });
    });
}