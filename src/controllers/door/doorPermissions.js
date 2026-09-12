// src/controllers/door/doorPermissions.js

// Aplicar visibilidad de botones según rol
export function applyDoorPermissions(controller, userRole) {
    const isOwner = userRole === 'PRO';
    const isAdmin = userRole === 'ADM';
    const canManage = isOwner || isAdmin;

    // Botón compartir: solo PRO/ADM
    const shareBtn = document.getElementById('share-device-btn');
    if (shareBtn) shareBtn.style.display = canManage ? 'flex' : 'none';

    // Editar nombre del sitio: siempre permitido
    const editInput = document.getElementById('edit-device-name');
    if (editInput) editInput.disabled = false;

    // Editar nombres de puertas: siempre visible
    const editDoor1 = document.getElementById('edit-door1');
    const editDoor2 = document.getElementById('edit-door2');
    if (editDoor1) editDoor1.style.display = 'inline';
    if (editDoor2) editDoor2.style.display = 'inline';

    return { isOwner, isAdmin, canManage };
}