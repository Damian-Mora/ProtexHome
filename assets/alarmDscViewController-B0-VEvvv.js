const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Di4jevkp.js","assets/index-C7x-J8lV.css"])))=>i.map(i=>d[i]);
import{f as Ae,c as Ke,g as Ye,r as f,o as v,s as d,u as T,a as Te,_ as Je}from"./index-Di4jevkp.js";import{D as en}from"./deviceController-DiJeSy8M.js";const nn=`<!-- Vista Alarma DSC -->\r
\r
<!-- OVERLAY DE CARGA (Loader tipo Facebook) -->\r
<div id="dsc-loading-overlay" style="\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  width: 100%;\r
  height: 100%;\r
  background: #ffffff;\r
  display: flex;\r
  flex-direction: column;\r
  align-items: center;\r
  justify-content: center;\r
  z-index: 99999;\r
  transition: opacity 0.4s ease;\r
">\r
    <!-- Loader de 3 puntos estilo Facebook -->\r
    <div class="facebook-loader" style="\r
    display: flex;\r
    gap: 8px;\r
    align-items: center;\r
    justify-content: center;\r
  ">\r
        <div class="dot" style="\r
      width: 12px;\r
      height: 12px;\r
      background: #1877f2;\r
      border-radius: 50%;\r
      animation: bounce 1.4s infinite ease-in-out both;\r
    "></div>\r
        <div class="dot" style="\r
      width: 12px;\r
      height: 12px;\r
      background: #1877f2;\r
      border-radius: 50%;\r
      animation: bounce 1.4s infinite ease-in-out both;\r
      animation-delay: 0.16s;\r
    "></div>\r
        <div class="dot" style="\r
      width: 12px;\r
      height: 12px;\r
      background: #1877f2;\r
      border-radius: 50%;\r
      animation: bounce 1.4s infinite ease-in-out both;\r
      animation-delay: 0.32s;\r
    "></div>\r
    </div>\r
</div>\r
\r
<!-- Definición de la animación -->\r
<style>\r
    @keyframes bounce {\r
\r
        0%,\r
        80%,\r
        100% {\r
            transform: scale(0);\r
            opacity: 0.5;\r
        }\r
\r
        40% {\r
            transform: scale(1);\r
            opacity: 1;\r
        }\r
    }\r
</style>\r
\r
<!-- CONTENIDO PRINCIPAL (oculto hasta que se cargue) -->\r
<div id="dsc-content" class="device-container fade-in" style="opacity:0;">\r
\r
    <!-- Header -->\r
    <div class="device-header">\r
        <button class="dash-icon-btn" id="back-to-dashboard">\r
            <span class="material-symbols-outlined">arrow_back</span>\r
        </button>\r
        <h2 id="device-name">Alarma DSC</h2>\r
        <div class="device-header-actions">\r
            <div class="device-status-badge" id="device-status-badge">\r
                <span class="status-dot online"></span>\r
                <span>En línea</span>\r
            </div>\r
            <button class="dash-icon-btn" id="device-menu-btn">\r
                <span class="material-symbols-outlined">more_vert</span>\r
            </button>\r
        </div>\r
    </div>\r
\r
    <!-- Contenido -->\r
    <div class="device-body">\r
\r
        <!-- Selector de partición -->\r
        <div class="dsc-partition-selector" id="partition-selector-container">\r
            <label for="partition-select">Partición</label>\r
            <select id="partition-select" class="dsc-select">\r
                <option value="1" selected>Partición 1</option>\r
                <option value="2">Partición 2</option>\r
                <option value="3">Partición 3</option>\r
                <option value="4">Partición 4</option>\r
                <option value="5">Partición 5</option>\r
                <option value="6">Partición 6</option>\r
                <option value="7">Partición 7</option>\r
                <option value="8">Partición 8</option>\r
            </select>\r
        </div>\r
\r
        <!-- Estado de partición -->\r
        <div class="dsc-partition-card compact">\r
            <div class="dsc-partition-header">\r
                <span class="material-symbols-outlined">security</span>\r
                <div>\r
                    <h3 id="partition-name">Partición 1</h3>\r
                    <p id="partition-state">Desarmado</p>\r
                </div>\r
            </div>\r
            <span class="partition-status-icon" id="partition-status-icon">\r
                <span class="material-symbols-outlined" id="partition-status-icon-glyph">lock_open</span>\r
            </span>\r
        </div>\r
\r
        <!-- Botones de control -->\r
        <div class="dsc-controls-row">\r
            <button class="dsc-action-btn dsc-away" id="btn-arm-away">\r
                <span class="material-symbols-outlined">lock_person</span>\r
                <span class="dsc-action-label">Ausente</span>\r
            </button>\r
            <button class="dsc-action-btn dsc-home" id="btn-arm-home">\r
                <span class="material-symbols-outlined">home</span>\r
                <span class="dsc-action-label">En Casa</span>\r
            </button>\r
            <button class="dsc-action-btn dsc-disarm" id="btn-disarm">\r
                <span class="material-symbols-outlined">lock_open</span>\r
                <span class="dsc-action-label">Desarmar</span>\r
            </button>\r
        </div>\r
\r
        <!-- Pestañas Historial / Zonas (orden cambiado) -->\r
        <div class="dsc-tabs">\r
            <button class="dsc-tab active" id="tab-historial">Historial</button>\r
            <button class="dsc-tab" id="tab-zonas">Zonas</button>\r
        </div>\r
\r
        <!-- Contenedor de Historial (visible por defecto) -->\r
        <div id="panel-historial" class="dsc-panel active">\r
            <div id="history-list" class="history-list">\r
                <p style="color:var(--text-light);text-align:center;">Cargando historial...</p>\r
            </div>\r
        </div>\r
\r
        <!-- Contenedor de Zonas (oculto por defecto) -->\r
        <div id="panel-zonas" class="dsc-panel">\r
            <div id="zones-list" class="zones-list">\r
                <p style="color:var(--text-light);text-align:center;">Cargando zonas...</p>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Modal Configuración -->\r
    <div class="modal-overlay" id="device-settings-modal" style="display:none;">\r
        <div class="modal-content modal-settings">\r
            <h3>Configuración</h3>\r
\r
            <!-- ======== DISPOSITIVO ======== -->\r
            <div class="settings-section">\r
                <p class="settings-section-title">Dispositivo</p>\r
\r
                <button class="settings-btn" id="open-change-name-btn">\r
                    <span class="material-symbols-outlined">edit</span>\r
                    <div class="settings-btn-text">\r
                        <span class="settings-btn-title">Cambiar nombre del sitio</span>\r
                        <span class="settings-btn-subtitle" id="current-device-name">--</span>\r
                    </div>\r
                    <span class="material-symbols-outlined arrow">chevron_right</span>\r
                </button>\r
\r
                <button class="settings-btn" id="change-pin-btn">\r
                    <span class="material-symbols-outlined">key</span>\r
                    <div class="settings-btn-text">\r
                        <span class="settings-btn-title">Cambiar clave de acceso</span>\r
                        <span class="settings-btn-subtitle">Clave para ingresar al sitio</span>\r
                    </div>\r
                    <span class="material-symbols-outlined arrow">chevron_right</span>\r
                </button>\r
\r
                <button class="settings-btn" id="change-wifi-btn">\r
                    <span class="material-symbols-outlined">wifi</span>\r
                    <div class="settings-btn-text">\r
                        <span class="settings-btn-title">Configurar WiFi</span>\r
                        <span class="settings-btn-subtitle">Cambiar red del ESP32</span>\r
                    </div>\r
                    <span class="material-symbols-outlined arrow">chevron_right</span>\r
                </button>\r
            </div>\r
\r
            <!-- ======== COMPARTIR ======== -->\r
            <div class="settings-section">\r
                <p class="settings-section-title">Compartir</p>\r
\r
                <button class="settings-btn" id="share-device-btn">\r
                    <span class="material-symbols-outlined">share</span>\r
                    <div class="settings-btn-text">\r
                        <span class="settings-btn-title">Compartir sitio</span>\r
                        <span class="settings-btn-subtitle">Invita a otros usuarios</span>\r
                    </div>\r
                    <span class="material-symbols-outlined arrow">chevron_right</span>\r
                </button>\r
\r
                <button class="settings-btn" id="unsubscribe-btn">\r
                    <span class="material-symbols-outlined">notifications_off</span>\r
                    <div class="settings-btn-text">\r
                        <span class="settings-btn-title">Quitar notificaciones</span>\r
                        <span class="settings-btn-subtitle">Deja de recibir alertas</span>\r
                    </div>\r
                    <span class="material-symbols-outlined arrow">chevron_right</span>\r
                </button>\r
            </div>\r
\r
            <!-- ======== INFO ======== -->\r
            <div class="settings-section">\r
                <p class="settings-section-title">Información</p>\r
                <div class="device-info-mini">\r
                    <p><strong>Serial:</strong> <span id="info-serial">--</span></p>\r
                    <p><strong>Tipo:</strong> Alarma DSC</p>\r
                    <p><strong>Rol:</strong> <span id="info-role">--</span></p>\r
                </div>\r
            </div>\r
\r
            <!-- ======== ZONA PELIGROSA ======== -->\r
            <div class="settings-section danger-zone" id="danger-section" style="display:none;">\r
                <p class="settings-section-title">Zona peligrosa</p>\r
\r
                <button class="settings-btn danger" id="delete-device-btn">\r
                    <span class="material-symbols-outlined">delete_forever</span>\r
                    <div class="settings-btn-text">\r
                        <span class="settings-btn-title">Eliminar dispositivo</span>\r
                        <span class="settings-btn-subtitle">Esta acción es irreversible</span>\r
                    </div>\r
                    <span class="material-symbols-outlined arrow">chevron_right</span>\r
                </button>\r
            </div>\r
\r
            <button class="modal-btn cancel" id="close-settings-modal">Cerrar</button>\r
        </div>\r
    </div>\r
\r
    <!-- Modal Cambiar Nombre -->\r
    <div class="modal-overlay" id="change-name-modal" style="display:none;">\r
        <div class="modal-content">\r
            <h3>Cambiar nombre del sitio</h3>\r
            <div class="modal-input-group">\r
                <label>Nuevo nombre</label>\r
                <input type="text" id="change-name-input" class="modal-input" placeholder="Ej: Casa Principal">\r
            </div>\r
            <div class="pin-error" id="change-name-error"></div>\r
            <div style="display:flex; gap:10px; margin-top:15px;">\r
                <button class="modal-btn primary" id="save-change-name-btn">Guardar</button>\r
                <button class="modal-btn cancel" id="close-change-name-modal">Cancelar</button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- ========== MODAL PARA EDITAR NOMBRE DE ZONA ========== -->\r
    <div class="modal-overlay" id="edit-zone-modal" style="display:none;">\r
        <div class="modal-content">\r
            <h3>Editar nombre de zona</h3>\r
            <div class="modal-input-group">\r
                <label>Nombre de la zona</label>\r
                <input type="text" id="edit-zone-name-input" class="modal-input" placeholder="Ej: Puerta principal">\r
            </div>\r
            <div style="display:flex; gap:10px; margin-top:15px;">\r
                <button class="modal-btn primary" id="save-zone-name-btn" style="display:none;">\r
                    <span class="material-symbols-outlined">save</span>\r
                    Guardar\r
                </button>\r
                <button class="modal-btn cancel" id="close-zone-modal">Cancelar</button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Modal WiFi -->\r
    <div class="modal-overlay" id="wifi-modal" style="display:none;">\r
        <div class="modal-content modal-wifi">\r
            <h3>📶 Configurar WiFi</h3>\r
\r
            <!-- Estado actual -->\r
            <div class="wifi-status" id="wifi-status">\r
                <span class="material-symbols-outlined">wifi</span>\r
                <div class="wifi-status-text">\r
                    <p class="wifi-status-title" id="wifi-connected-name">Cargando...</p>\r
                    <p class="wifi-status-subtitle" id="wifi-connected-info">--</p>\r
                </div>\r
            </div>\r
\r
            <!-- Botón escanear -->\r
            <button class="modal-btn primary" id="scan-wifi-btn">\r
                <span class="material-symbols-outlined">refresh</span>\r
                Escanear redes disponibles\r
            </button>\r
\r
            <!-- Lista de redes -->\r
            <div class="wifi-list" id="wifi-list" style="display:none;">\r
                <p class="wifi-list-title">Redes encontradas:</p>\r
                <div id="wifi-networks"></div>\r
            </div>\r
\r
            <!-- Formulario de conexión (oculto hasta seleccionar red) -->\r
            <div class="wifi-form" id="wifi-form" style="display:none;">\r
                <p class="wifi-form-title">Conectar a: <strong id="wifi-selected-ssid"></strong></p>\r
\r
                <div class="modal-input-group">\r
                    <label>Contraseña</label>\r
                    <input type="password" id="wifi-password" class="modal-input" placeholder="Contraseña de la red">\r
                </div>\r
\r
                <div class="modal-input-group">\r
                    <label>Tipo de red</label>\r
                    <select id="wifi-target" class="modal-input">\r
                        <option value="P">Red Principal</option>\r
                        <option value="R">Red Respaldo</option>\r
                    </select>\r
                </div>\r
\r
                <div class="pin-error" id="wifi-error"></div>\r
\r
                <div style="display:flex; gap:10px; margin-top:15px;">\r
                    <button class="modal-btn primary" id="connect-wifi-btn">Conectar</button>\r
                    <button class="modal-btn cancel" id="cancel-wifi-connect">Cancelar</button>\r
                </div>\r
            </div>\r
\r
            <button class="modal-btn cancel" id="close-wifi-modal">Cerrar</button>\r
        </div>\r
    </div>\r
\r
</div>`;async function sn(y,m,U,q){var ae,se,ie,oe,re,ce,le,de,me,ue,pe,fe,be,ge,ye,ve,Ee,he,xe,we,Be,Ie,Ce,Le,ke,Ne,$e,Se;const ze=document.getElementById("main-content");ze.innerHTML=nn;const E=new en(y,m),L=await E.loadDeviceData();if(!L){alert("Dispositivo no encontrado"),Ae();return}Ke(m,"device");const C=await E.getUserRole(),Me=(y==null?void 0:y.name)||(y==null?void 0:y.displayName)||(y==null?void 0:y.email)||"Usuario";document.getElementById("device-name").textContent=L.name,document.getElementById("info-serial").textContent=L.serial,document.getElementById("info-role").textContent=C;const j=e=>{const t=document.getElementById("device-status-badge"),n=t==null?void 0:t.querySelector(".status-dot"),a=t==null?void 0:t.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),a&&(a.textContent=e==="online"?"En línea":"Sin conexión")};j(L.status);const k=[],Pe=E.listenOnlineStatus(j);k.push(Pe);const p=Ye();let N=0;const De=f(p,`P/${m}/L`),_e=v(De,e=>{N=e.exists()?Number(e.val()):0,console.log(`📶 P/${m}/L = ${N}`)});k.push(_e);let W={};const Re=f(p,`M/${m}/X/D`),Oe=v(Re,e=>{W=e.exists()?e.val():{}});k.push(Oe);let b=1,z=[];const h=[];let M=!1;function V(){const e=document.getElementById("partition-select"),t=document.getElementById("partition-selector-container");e.innerHTML="",h.forEach(n=>{const a=document.createElement("option");a.value=n,a.textContent=`Partición ${n}`,n===b&&(a.selected=!0),e.appendChild(a)}),h.length<=1?(t.style.display="none",b=h[0]||1):(t.style.display="flex",h.includes(b)||(b=h[0],e.value=b)),G(),X(),M||(M=!0,setTimeout(()=>{var a;const n=document.getElementById("dsc-loading-overlay");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),400)),(a=document.getElementById("dsc-content"))==null||a.classList.add("ready")},1500))}function G(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${b}`)}function X(){z.forEach(n=>{typeof n=="function"&&n()}),z=[];const e=f(p,`P/${m}/E${b}`),t=v(e,n=>{const a=n.exists()?Number(n.val()):0;He(a)});z.push(t)}const Fe=f(p,`P/${m}`),Ze=v(Fe,e=>{if(!e.exists()){h.length=0,V();return}const t=e.val();h.length=0;for(let n=1;n<=8;n++)t[`P${n}`]===2&&h.push(n);V()});k.push(Ze),(ae=document.getElementById("partition-select"))==null||ae.addEventListener("change",e=>{b=Number(e.target.value),G(),X(),F(),Z()});function He(e){Q=Number(e);const t=document.getElementById("partition-state"),n=document.getElementById("partition-status-icon"),a=document.getElementById("partition-status-icon-glyph"),s=document.getElementById("btn-arm-away"),o=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),i={0:{text:"Desconocido",icon:"help",className:"disarmed"},1:{text:"Listo para armar",icon:"check_circle",className:"ready"},2:{text:"Listo con zonas abiertas",icon:"error",className:"not-ready"},3:{text:"No listo",icon:"error",className:"not-ready"},4:{text:"Armado en Casa",icon:"lock",className:"armed"},5:{text:"Armado Ausente",icon:"lock",className:"armed"},6:{text:"Armado sin entrada",icon:"lock",className:"armed"},9:{text:"Armado sin entrada",icon:"lock",className:"armed"},22:{text:"Armado sin entrada",icon:"lock",className:"armed"},7:{text:"Falla al armar",icon:"error",className:"not-ready"},8:{text:"Tiempo de salida",icon:"schedule",className:"pending"},11:{text:"Salida rápida",icon:"schedule",className:"pending"},12:{text:"Retardo de entrada",icon:"schedule",className:"pending"},13:{text:"Retardo después de alarma",icon:"schedule",className:"pending"},17:{text:"Área en alarma",icon:"warning",className:"armed"},18:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},21:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},25:{text:"Memoria de alarma",icon:"history",className:"disarmed"}},c=i[e]||i[0];t&&(t.textContent=c.text),a&&(a.textContent=c.icon),n&&(n.className=`partition-status-icon ${c.className}`),Ue(e,s,o,r)}function Ue(e,t,n,a){if(t.disabled=!1,n.disabled=!1,a.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(t.classList.add("blink"),n.classList.add("blink")):(t.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(t.disabled=!1,n.disabled=!1,a.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(t.disabled=!0,n.disabled=!0,a.disabled=!1),[8,11].includes(e)||(t.classList.remove("blink"),n.classList.remove("blink"))}let Q=0;function qe(){return[4,5,6,9,17,18,21,22].includes(Q)}async function P(e,t={}){const{toggleBase:n=4,zone:a=null}=t;if(!N||N<=0)return d("⚠️ El módulo no está en línea","error"),console.warn(`⛔ Comando bloqueado: P/${m}/L = ${N}`),!1;let s=W;try{const l=await Te(f(p,`M/${m}/X/D`));s=l.exists()?l.val():{}}catch(l){console.warn("⚠️ No se pudo releer X/D, usando cache:",l)}const o=n*10+n,i=(Number(s.L)||n)===n?o:n,c={A:Number(b),C:Number(e),D:Number(s.D??0),L:Number(i),N:Me,V:s.V??0,Z:Number(a!==null?a:s.Z??0)};try{return await T(f(p,`M/${m}/X/D`),c),!0}catch{return d("❌ Error al enviar comando","error"),!1}}let $=null;function je(e,t){const a=o=>{o.target.closest(".btn-bypass")||(e.classList.add("pressing"),$=setTimeout(()=>{$=null,e.classList.remove("pressing"),navigator.vibrate&&navigator.vibrate(50),t()},600))},s=()=>{$&&(clearTimeout($),$=null),e.classList.remove("pressing")};e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",s),e.addEventListener("touchmove",s),e.addEventListener("touchcancel",s),e.addEventListener("mousedown",a),e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s)}function We(e){if(!e)return;const t=S[e]||{},n=t.A===b&&t.N?t.N:`Zona ${e}`,a=String(e).padStart(2,"0");let s=document.getElementById("zone-action-sheet");s||(s=document.createElement("div"),s.id="zone-action-sheet",s.className="action-sheet-overlay",s.innerHTML=`
      <div class="action-sheet">
        <div class="action-sheet-header" id="action-sheet-title"></div>
        <button class="action-sheet-btn" id="action-edit-name">
          <span class="material-symbols-outlined">edit</span>
          Editar nombre
        </button>
        <button class="action-sheet-btn cancel" id="action-cancel">
          Cancelar
        </button>
      </div>
    `,document.body.appendChild(s),s.addEventListener("click",o=>{o.target===s&&O()})),s.querySelector("#action-sheet-title").textContent=`Zona ${a} · ${n}`,s.querySelector("#action-edit-name").onclick=()=>{O(),setTimeout(()=>Y(e),150)},s.querySelector("#action-cancel").onclick=O,s.style.display="flex"}function O(){const e=document.getElementById("zone-action-sheet");e&&(e.style.display="none")}let w=null,B=null,K={},S={},D=null,_="";function Ve({accion:e,zoneNumber:t,nombre:n}){return new Promise(a=>{const s=e==="anular",o=document.createElement("div");o.className="confirm-modal-overlay",o.innerHTML=`
            <div class="confirm-modal">
                <div class="confirm-modal-icon ${s?"danger":"success"}">
                    <span class="material-symbols-outlined">
                        ${s?"gpp_bad":"verified_user"}
                    </span>
                </div>

                <h3 class="confirm-modal-title">
                    ${s?"Anular Zona "+t:"Restaurar Zona "+t}
                </h3>

                <p class="confirm-modal-name">${n}</p>

                <p class="confirm-modal-desc">
                    ${s?"⚠️ Esta zona quedará vulnerable. ¿Deseas continuar?":"La zona volverá a estar activa y protegida."}
                </p>

                <div class="confirm-modal-actions">
                    <button class="confirm-btn cancel" id="confirm-cancel">Cancelar</button>
                    <button class="confirm-btn ${s?"danger":"primary"}" id="confirm-ok">
                        ${s?"Anular":"Restaurar"}
                    </button>
                </div>
            </div>
        `,document.body.appendChild(o);const r=o.querySelector("#confirm-cancel"),i=o.querySelector("#confirm-ok"),c=l=>{o.style.opacity="0",setTimeout(()=>{o.remove(),a(l)},200)};r.addEventListener("click",()=>c(!1)),i.addEventListener("click",()=>c(!0)),o.addEventListener("click",l=>{l.target===o&&c(!1)}),o.addEventListener("keydown",l=>{l.key==="Escape"&&c(!1)}),setTimeout(()=>r.focus(),150)})}function Ge(){w&&(w(),w=null),B&&(B(),B=null);const e=f(p,`M/${m}/W/Z`);w=v(e,n=>{K=n.exists()?n.val():{},F()});const t=f(p,`M/${m}/W/NZ`);B=v(t,n=>{S=n.exists()?n.val():{},F()})}function F(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(K||{}).filter(([a,s])=>s.A===b&&s.E!==void 0);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas para esta partición</p>';return}n.sort((a,s)=>Number(a[0])-Number(s[0])),e.innerHTML=n.map(([a,s])=>{const o=S[a]||{},r=o.A===b&&o.N?o.N:`Zona ${a}`,i=s.E===1,c=s.B===1,l=String(a).padStart(2,"0");let g,u,x;return c?(g="Anulada",u={bg:"#fef2f2",border:"#ef4444",text:"#b91c1c",iconBg:"#fee2e2"},x="block"):i?(g="Abierta",u={bg:"#f5f3ff",border:"#8b5cf6",text:"#6d28d9",iconBg:"#ede9fe"},x="door_open"):(g="Cerrada",u={bg:"#eff6ff",border:"#3b82f6",text:"#1d4ed8",iconBg:"#dbeafe"},x="door_front"),`
      <div class="zone-item" data-zone-id="${a}" style="
        background: ${u.bg};
        border-left: 4px solid ${u.border};
      ">
        <div class="zone-info">
          <span class="zone-icon" style="
            background: ${u.iconBg};
            color: ${u.text};
          ">
            <span class="material-symbols-outlined">${x}</span>
          </span>
          <div style="display:flex; flex-direction:column; gap:2px; flex:1; min-width:0;">
            <p style="
              margin:0;
              font-size:0.9rem;
              font-weight:600;
              color:${u.text};
              display:flex;
              align-items:center;
              gap:8px;
            ">
              <span>Zona ${l}</span>
              <span style="
                font-weight:500;
                font-size:0.78rem;
                color:${u.text};
                opacity:0.8;
              ">
                ${g}
              </span>
            </p>
            <p style="
              margin:0;
              font-size:0.85rem;
              color:${u.text};
              opacity:0.9;
              overflow:hidden;
              text-overflow:ellipsis;
              white-space:nowrap;
            ">
              ${r}
            </p>
          </div>
        </div>
        <button class="btn-bypass" 
                style="
                  white-space: nowrap;
                  flex-shrink: 0;
                  background: ${u.iconBg};
                  color: ${u.text};
                "
                data-zone="${a}" 
                data-current-bypass="${c?1:0}">
          ${c?"Quitar anulación":"Anular zona"}
        </button>
      </div>
    `}).join(""),e.querySelectorAll(".btn-bypass").forEach(a=>{a.addEventListener("click",async s=>{s.stopPropagation();const o=a.dataset.zone,r=Number(a.dataset.currentBypass),i=S[o]||{},c=i.A===b&&i.N?i.N:`Zona ${o}`,l=String(o).padStart(2,"0"),g=r===1?"restaurar":"anular";if(qe()){d("🔒 No se puede anular con el sistema armado","error"),console.warn("⛔ Anulación bloqueada: partición armada");return}if(!await Ve({accion:g,zoneNumber:l,nombre:c}))return;await P(U,{toggleBase:3,zone:o})&&d(g==="anular"?"✅ Solicitud de anulación enviada":"✅ Solicitud de restauración enviada","success")})}),e.querySelectorAll(".zone-item").forEach(a=>{je(a,()=>{We(a.dataset.zoneId)})}),window.editZone=Y}function Y(e){if(!e)return;D=e;const t=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),a=document.getElementById("save-zone-name-btn"),s=S[e]||{};_=s.A===b&&s.N?s.N:"",n.value=_,a.style.display="none";const o=()=>{const r=n.value.trim(),i=r!==_&&r.length>0;a.style.display=i?"flex":"none"};n.addEventListener("input",o),t._cleanupListener=()=>n.removeEventListener("input",o),t.style.display="flex",n.focus(),n.select(),setTimeout(o,50)}function A(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",D=null,document.getElementById("save-zone-name-btn").style.display="none"}async function J(){if(!D)return;const t=document.getElementById("edit-zone-name-input").value.trim();if(!t){d("⚠️ El nombre no puede estar vacío","error");return}if(t===_){d("ℹ️ El nombre no ha cambiado","info"),A();return}try{await T(f(p,`M/${m}/W/NZ/${D}`),{A:b,N:t}),d("✅ Nombre actualizado correctamente","success"),A()}catch(n){console.error("Error al guardar nombre:",n),d("❌ Error al guardar el nombre","error")}}(se=document.getElementById("save-zone-name-btn"))==null||se.addEventListener("click",J),(ie=document.getElementById("close-zone-modal"))==null||ie.addEventListener("click",A),(oe=document.getElementById("edit-zone-modal"))==null||oe.addEventListener("click",e=>{e.target===e.currentTarget&&A()}),(re=document.getElementById("edit-zone-name-input"))==null||re.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),document.getElementById("save-zone-name-btn").style.display!=="none"&&J()),e.key==="Escape"&&A()});let I=null,ee={};function Xe(){I&&(I(),I=null);const e=f(p,`M/${m}/H`);I=v(e,t=>{ee=t.exists()?t.val():{},Z()})}function Z(){const e=document.getElementById("history-list");if(!e)return;const n=Object.entries(ee||[]).filter(([o,r])=>r.A===b||r.A===9);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">No hay eventos para esta partición</p>';return}n.sort((o,r)=>{const[i,c]=o,[l,g]=r,u=new Date(c.F.replace(/\//g,"-").replace(" ","T")+":00"),x=new Date(g.F.replace(/\//g,"-").replace(" ","T")+":00");return x-u!==0?x-u:l.localeCompare(i)});function a(o){const r=o.E,i=o.D||0,c=o.N||"Usuario",l=String(i).padStart(2,"0");switch(r){case 1:return`Alarma en Zona ${l}`;case 2:return`Restauración de alarma en Zona ${l}`;case 3:return`Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[i]||`Falla (código ${i})`}`;case 4:return`Restauración de falla: ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[i]||`Falla restaurada (código ${i})`}`;case 5:return`Apertura por usuario ${l} (${c})`;case 6:return`Cierre por usuario ${l} (${c})`;case 7:return`${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[i]||`Alarma (código ${i})`}`;default:return`Evento ${r}`}}function s(o){const r=Number(o.E),i=Number(o.D)||0;switch(r){case 1:return{bg:"#fef2f2",border:"#ef4444",text:"#b91c1c",icon:"warning",iconBg:"#fee2e2"};case 2:return{bg:"#f0fdf4",border:"#22c55e",text:"#15803d",icon:"check_circle",iconBg:"#dcfce7"};case 3:return{bg:"#fffbeb",border:"#f59e0b",text:"#b45309",icon:"error",iconBg:"#fef3c7"};case 4:return{bg:"#fefce8",border:"#eab308",text:"#a16207",icon:"restart_alt",iconBg:"#fef9c3"};case 5:return{bg:"#eff6ff",border:"#3b82f6",text:"#1d4ed8",icon:"lock_open",iconBg:"#dbeafe"};case 6:return{bg:"#f5f3ff",border:"#8b5cf6",text:"#6d28d9",icon:"lock",iconBg:"#ede9fe"};case 7:return i===0?{bg:"#fef2f2",border:"#dc2626",text:"#991b1b",icon:"local_fire_department",iconBg:"#fee2e2"}:i===1?{bg:"#fef2f2",border:"#e11d48",text:"#9f1239",icon:"medical_services",iconBg:"#ffe4e6"}:i===2?{bg:"#fff7ed",border:"#ea580c",text:"#9a3412",icon:"warning",iconBg:"#ffedd5"}:{bg:"#fef2f2",border:"#dc2626",text:"#991b1b",icon:"warning",iconBg:"#fee2e2"};default:return{bg:"#f9fafb",border:"#9ca3af",text:"#4b5563",icon:"info",iconBg:"#f3f4f6"}}}e.innerHTML=n.map(([o,r])=>{const i=s(r),c=a(r),l=r.F||"";return`
            <div class="history-item" style="
                background: ${i.bg};
                border-left: 4px solid ${i.border};
            ">
                <div class="history-icon" style="
                    color: ${i.text};
                    background: ${i.iconBg};
                ">
                    <span class="material-symbols-outlined">${i.icon}</span>
                </div>
                <div class="history-info">
                    <p class="history-text" style="color: ${i.text};">
                        ${c}
                    </p>
                    <p class="history-meta">${l}</p>
                </div>
            </div>
        `}).join("")}Xe();function H(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").classList.toggle("active",e==="zonas"),document.getElementById("panel-historial").classList.toggle("active",e==="historial"),e==="historial"&&Z()}if(setTimeout(()=>{H("historial")},100),(ce=document.getElementById("tab-zonas"))==null||ce.addEventListener("click",()=>H("zonas")),(le=document.getElementById("tab-historial"))==null||le.addEventListener("click",()=>H("historial")),(de=document.getElementById("btn-arm-away"))==null||de.addEventListener("click",async()=>{await P(-5)&&d("🔒 Comando Armado Ausente enviado","success")}),(me=document.getElementById("btn-arm-home"))==null||me.addEventListener("click",async()=>{await P(-4)&&d("🏠 Comando Armado En Casa enviado","success")}),(ue=document.getElementById("btn-disarm"))==null||ue.addEventListener("click",async()=>{await P(U)&&d("🔓 Comando Desarmado enviado","success")}),C==="PRO"){const e=document.getElementById("danger-section");e&&(e.style.display="block")}const ne=document.getElementById("current-device-name");ne&&(ne.textContent=L.name),(pe=document.getElementById("device-menu-btn"))==null||pe.addEventListener("click",()=>{const e=document.getElementById("current-device-name");e&&(e.textContent=document.getElementById("device-name").textContent),document.getElementById("device-settings-modal").style.display="flex"}),(fe=document.getElementById("close-settings-modal"))==null||fe.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(be=document.getElementById("open-change-name-btn"))==null||be.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none";const e=document.getElementById("change-name-input"),t=document.getElementById("device-name").textContent;e.value=t,e.dataset.original=t,document.getElementById("change-name-error").textContent="",document.getElementById("change-name-modal").style.display="flex",setTimeout(()=>{e.focus(),e.select()},150)}),(ge=document.getElementById("close-change-name-modal"))==null||ge.addEventListener("click",()=>{document.getElementById("change-name-modal").style.display="none"}),(ye=document.getElementById("save-change-name-btn"))==null||ye.addEventListener("click",async()=>{const e=document.getElementById("change-name-input"),t=document.getElementById("change-name-error"),n=e.value.trim();if(!n){t.textContent="⚠️ El nombre no puede estar vacío";return}if(n===e.dataset.original){t.textContent="ℹ️ El nombre no ha cambiado";return}try{await T(f(p,`US/${y.uid}/M/${m}`),{N:n}),document.getElementById("device-name").textContent=n;const a=document.getElementById("current-device-name");a&&(a.textContent=n),document.getElementById("change-name-modal").style.display="none",d("✅ Nombre actualizado","success")}catch(a){console.error("Error actualizando nombre:",a),t.textContent="❌ Error al guardar. Intenta de nuevo."}}),(ve=document.getElementById("change-name-input"))==null||ve.addEventListener("keydown",e=>{var t;e.key==="Enter"&&((t=document.getElementById("save-change-name-btn"))==null||t.click()),e.key==="Escape"&&(document.getElementById("change-name-modal").style.display="none")}),(Ee=document.getElementById("change-pin-btn"))==null||Ee.addEventListener("click",async()=>{document.getElementById("device-settings-modal").style.display="none";let e=null;try{const t=await Te(f(p,`US/${y.uid}/M/${m}/C`));e=t.exists()?t.val():null}catch(t){console.error("Error leyendo clave:",t),d("❌ No se pudo leer la clave","error");return}window.dispatchEvent(new CustomEvent("openChangePinModal",{detail:{serial:m,currentKey:e}}))}),(he=document.getElementById("change-wifi-btn"))==null||he.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none",window.dispatchEvent(new CustomEvent("openWifiModal",{detail:{serial:m}}))}),(xe=document.getElementById("share-device-btn"))==null||xe.addEventListener("click",async()=>{if(C==="INV"){d("❌ No tienes permisos para compartir","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const e=document.getElementById("shared-list");e.innerHTML='<p style="color:var(--text-light);text-align:center;">Cargando...</p>';try{const t=await E.loadSharedUsers();t.length===0?e.innerHTML='<p style="color:var(--text-light);text-align:center;padding:10px;">No has compartido este sitio</p>':(e.innerHTML=t.map(n=>`
                <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border-color);">
                    <div style="flex:1;">
                        <p style="font-weight:600;margin:0;font-size:0.9rem;">${n.name}</p>
                        <p style="font-size:0.7rem;color:var(--text-light);margin:2px 0 0;">${n.email}</p>
                    </div>
                    <select class="role-select" data-uid="${n.uid}" ${C!=="PRO"?"disabled":""} style="font-size:0.75rem;padding:4px 8px;border-radius:6px;border:1px solid var(--border-color);margin-right:8px;">
                        <option value="INV" ${n.role==="INV"?"selected":""}>Invitado</option>
                        <option value="ADM" ${n.role==="ADM"?"selected":""}>Admin</option>
                    </select>
                    <button class="btn-remove-user" data-uid="${n.uid}" style="background:none;border:none;color:var(--error);cursor:pointer;font-size:16px;">🗑️</button>
                </div>
            `).join(""),C==="PRO"&&e.querySelectorAll(".role-select").forEach(n=>{n.addEventListener("change",async a=>{if(confirm("¿Cambiar el rol de este usuario?")){const s=await E.updateSharedUserRole(n.dataset.uid,n.value);s.success?d("✅ Rol actualizado","success"):d("❌ "+s.error,"error")}})}),e.querySelectorAll(".btn-remove-user").forEach(n=>{n.addEventListener("click",async()=>{var a;if(confirm("¿Eliminar este usuario del sitio?")){const s=await E.removeSharedUser(n.dataset.uid);s.success?(d("✅ Usuario eliminado","success"),(a=document.getElementById("share-device-btn"))==null||a.click()):d("❌ "+s.error,"error")}})}))}catch(t){console.error("Error cargando usuarios:",t),e.innerHTML='<p style="color:var(--error);text-align:center;">Error al cargar usuarios</p>'}}),(we=document.getElementById("close-share-modal"))==null||we.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(Be=document.getElementById("confirm-share"))==null||Be.addEventListener("click",async()=>{var a;const e=document.getElementById("share-email").value.trim(),t=document.getElementById("share-role").value;if(!e){d("⚠️ Ingresa un correo","error");return}const n=await E.shareDevice(e,t);n.success?(d("✅ "+n.message,"success"),document.getElementById("share-email").value="",(a=document.getElementById("share-device-btn"))==null||a.click()):d("❌ "+n.error,"error")}),(Ie=document.getElementById("unsubscribe-btn"))==null||Ie.addEventListener("click",async()=>{if(!confirm("¿Desactivar notificaciones de este sitio?"))return;const{unsubscribeFromSerial:e}=await Je(async()=>{const{unsubscribeFromSerial:n}=await import("./index-Di4jevkp.js").then(a=>a.n);return{unsubscribeFromSerial:n}},__vite__mapDeps([0,1])),t=await e(m);t.success?(d("✅ Notificaciones desactivadas","success"),document.getElementById("device-settings-modal").style.display="none"):d("❌ "+(t.error||"Error al desactivar"),"error")}),(Ce=document.getElementById("delete-device-btn"))==null||Ce.addEventListener("click",async()=>{if(C==="PRO"&&confirm(`⚠️ Eres el propietario.

¿Eliminar el sitio para TODOS los usuarios?`)&&confirm("Esta acción no se puede deshacer. ¿Continuar?")){const e=await E.deleteDeviceForAll();e.success?(te(),d("✅ Sitio eliminado","success"),setTimeout(()=>q(),1e3)):d("❌ "+e.error,"error")}});let R=null;(Le=document.getElementById("close-wifi-modal"))==null||Le.addEventListener("click",()=>{document.getElementById("wifi-modal").style.display="none",R&&(R(),R=null)});function Qe(){const e=f(p,`M/${m}/CONF/WF/ST`);R=v(e,t=>{const n=t.exists()?t.val():{},a=document.getElementById("wifi-connected-name"),s=document.getElementById("wifi-connected-info");a&&(a.textContent=n.CONNECTED||"Sin conexión"),s&&(s.textContent=n.IP?`IP: ${n.IP} • ${n.RSSI||"--"} dBm`:"--")})}(ke=document.getElementById("scan-wifi-btn"))==null||ke.addEventListener("click",async()=>{const e=document.getElementById("wifi-networks"),t=document.getElementById("wifi-list");e.innerHTML='<p style="color:var(--text-light);text-align:center;">Buscando redes...</p>',t.style.display="block";try{await T(f(p,`M/${m}/CONF/WF/CMD`),{ACTION:"SCAN",STATUS:1,MSG:"Solicitando escaneo..."});const n=f(p,`M/${m}/CONF/WF/SCAN`),a=v(n,s=>{if(!s.exists())return;const o=s.val(),r=Object.entries(o).filter(([i])=>i!=="LAST");if(r.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">No se encontraron redes</p>';return}r.sort((i,c)=>Number(c[1])-Number(i[1])),e.innerHTML=r.map(([i,c])=>{const l=Number(c),g=l>-60?"signal_wifi_4_bar":l>-75?"network_wifi_3_bar":"network_wifi_2_bar";return`
                    <div class="wifi-network" data-ssid="${i}">
                        <span class="material-symbols-outlined">${g}</span>
                        <div class="wifi-network-info">
                            <p class="wifi-network-ssid">${i}</p>
                            <p class="wifi-network-signal">${l} dBm</p>
                        </div>
                    </div>
                `}).join(""),e.querySelectorAll(".wifi-network").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.ssid;document.getElementById("wifi-selected-ssid").textContent=c,document.getElementById("wifi-form").style.display="block",document.getElementById("wifi-password").value="",document.getElementById("wifi-password").focus()})})});setTimeout(()=>{a&&a()},15e3)}catch(n){console.error("Error escaneando:",n),e.innerHTML='<p style="color:var(--alert);text-align:center;">Error al escanear</p>'}}),(Ne=document.getElementById("cancel-wifi-connect"))==null||Ne.addEventListener("click",()=>{document.getElementById("wifi-form").style.display="none"}),($e=document.getElementById("connect-wifi-btn"))==null||$e.addEventListener("click",async()=>{const e=document.getElementById("wifi-selected-ssid").textContent,t=document.getElementById("wifi-password").value,n=document.getElementById("wifi-target").value,a=document.getElementById("wifi-error");if(!t){a.textContent="⚠️ Ingresa la contraseña";return}a.textContent="";try{await T(f(p,`M/${m}/CONF/WF/CMD`),{ACTION:"CHANGE",TARGET:n,SSID:e,PASS:t,STATUS:1,MSG:"Solicitando cambio de red..."}),d("📡 Solicitud enviada. El ESP32 se conectará en breve.","info"),document.getElementById("wifi-form").style.display="none",document.getElementById("wifi-list").style.display="none";const s=f(p,`M/${m}/CONF/WF/CMD`),o=v(s,r=>{if(!r.exists())return;const i=r.val();i.STATUS===3?(d("✅ "+(i.MSG||"Conectado exitosamente"),"success"),o()):i.STATUS===2&&d("🔄 Conectando...","info")});setTimeout(()=>o(),3e4)}catch(s){console.error("Error conectando:",s),a.textContent="❌ Error al enviar solicitud"}}),window.addEventListener("wifiModalReady",()=>{Qe()},{once:!0});const te=()=>{k.forEach(e=>{typeof e=="function"&&e()}),z.forEach(e=>{typeof e=="function"&&e()}),w&&(w(),w=null),B&&(B(),B=null),I&&(I(),I=null),Ae()};(Se=document.getElementById("back-to-dashboard"))==null||Se.addEventListener("click",()=>{te(),q()}),setTimeout(()=>{var t;const e=document.getElementById("dsc-loading-overlay");e&&!M&&(M=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),Ge()}export{sn as openAlarmDscView};
