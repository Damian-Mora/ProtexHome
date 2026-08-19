// src/utils/navigation.js

export async function openDeviceView(app, serial, type) {
    app.stopActiveView();
    app.activeView = 'device';

    if (type === 1 || type === '1') {
        const { openDoorView } = await import('../controllers/doorViewController.js');
        openDoorView(app.currentUser, serial, () => {
            app.activeView = 'dashboard';
            app.showDashboard(app.currentUser);
        });
    } else {
        alert(`Vista para tipo ${type} en desarrollo`);
    }
}