// src/services/activeSerial.js
let currentSerial = null;
let currentView = null;

export function setActiveContext(serial, view) {
  currentSerial = serial;
  currentView = view;
  console.log(`🟢 Contexto activo: serial=${serial}, vista=${view}`);
}

export function clearActiveContext() {
  currentSerial = null;
  currentView = null;
  console.log('🔴 Contexto activo limpiado');
}

export function getActiveSerial() {
  return currentSerial;
}

export function getActiveView() {
  return currentView;
}

export function isSerialActive(serial) {
  return serial === currentSerial;
}