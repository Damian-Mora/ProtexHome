import { ProtexHomeApp } from './app.js';
export { setupDashboardEvents } from './app.js';

console.log('🟢 Iniciando ProtexHome...');
const app = new ProtexHomeApp();
document.querySelector('main')._app = app;
window._app = app;