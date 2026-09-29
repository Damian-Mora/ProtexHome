const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DOPKJj-Y.js","assets/index-fcLxrqaN.css"])))=>i.map(i=>d[i]);
import{d as Ye,j as Te,e as Je,g as en,r as p,o as y,b as d,u as T,a as ze,s as z,_ as nn}from"./index-DOPKJj-Y.js";import{D as tn}from"./deviceController-D3lGhex6.js";const an=`<!-- Vista Alarma DSC -->\r
\r
<!-- OVERLAY DE CARGA (Loader tipo Facebook) -->\r
<div id="dsc-loading-overlay" class="dsc-loading-overlay">\r
    <!-- Loader de 3 puntos estilo Facebook -->\r
    <div class="facebook-loader">\r
        <div class="dot"></div>\r
        <div class="dot"></div>\r
        <div class="dot"></div>\r
    </div>\r
</div>\r
\r
<!-- CONTENIDO PRINCIPAL (oculto hasta que se cargue) -->\r
<div id="dsc-content" class="device-container fade-in">\r
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
                <p class="loading-placeholder">Cargando historial...</p>\r
            </div>\r
        </div>\r
\r
        <!-- Contenedor de Zonas (oculto por defecto) -->\r
        <div id="panel-zonas" class="dsc-panel">\r
            <div id="zones-list" class="zones-list">\r
                <p class="loading-placeholder">Cargando zonas...</p>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Modal Configuración -->\r
    <div class="modal-overlay device-settings-overlay" id="device-settings-modal">\r
        <section class="modal-content modal-settings device-settings-panel" role="dialog" aria-modal="true" aria-labelledby="dsc-settings-heading">\r
            <header class="device-settings-header">\r
                <div class="device-settings-heading">\r
                    <span class="material-symbols-outlined device-settings-heading-icon" aria-hidden="true">tune</span>\r
                    <div>\r
                        <h3 id="dsc-settings-heading">Ajustes del sitio</h3>\r
                        <p class="device-settings-name" id="current-device-name">--</p>\r
                    </div>\r
                </div>\r
                <button class="device-settings-close" id="close-settings-modal" type="button" aria-label="Cerrar ajustes">\r
                    <span class="material-symbols-outlined" aria-hidden="true">close</span>\r
                </button>\r
            </header>\r
\r
            <div class="device-settings-scroll">\r
                <!-- ======== DISPOSITIVO ======== -->\r
                <div class="settings-section">\r
                    <p class="settings-section-title">Configuración del dispositivo</p>\r
                    <div class="settings-group">\r
                        <button class="settings-btn" id="open-change-name-btn" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">edit</span>\r
                            <span class="settings-btn-text">\r
                                <span class="settings-btn-title">Cambiar nombre del sitio</span>\r
                                <span class="settings-btn-subtitle">Personaliza cómo identificas este sitio</span>\r
                            </span>\r
                            <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
                        </button>\r
\r
                        <button class="settings-btn" id="change-pin-btn" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">key</span>\r
                            <span class="settings-btn-text">\r
                                <span class="settings-btn-title">Clave de acceso</span>\r
                                <span class="settings-btn-subtitle">Actualizar la clave de ingreso al sitio</span>\r
                            </span>\r
                            <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
                        </button>\r
\r
                        <button class="settings-btn" id="change-wifi-btn" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">wifi</span>\r
                            <span class="settings-btn-text">\r
                                <span class="settings-btn-title">Conexión Wi-Fi</span>\r
                                <span class="settings-btn-subtitle">Administrar las redes del dispositivo</span>\r
                            </span>\r
                            <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <!-- ======== COMPARTIR ======== -->\r
                <div class="settings-section">\r
                    <p class="settings-section-title">Acceso y notificaciones</p>\r
                    <div class="settings-group">\r
                        <button class="settings-btn" id="share-device-btn" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">share</span>\r
                            <span class="settings-btn-text">\r
                                <span class="settings-btn-title">Compartir sitio</span>\r
                                <span class="settings-btn-subtitle">Administrar las personas con acceso</span>\r
                            </span>\r
                            <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
                        </button>\r
\r
                        <button class="settings-btn" id="unsubscribe-btn" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">notifications_off</span>\r
                            <span class="settings-btn-text">\r
                                <span class="settings-btn-title">Desactivar notificaciones</span>\r
                                <span class="settings-btn-subtitle">Dejar de recibir alertas de este sitio</span>\r
                            </span>\r
                            <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
                        </button>\r
                    </div>\r
                </div>\r
\r
                <!-- ======== INFORMACIÓN ======== -->\r
                <div class="settings-section">\r
                    <p class="settings-section-title">Información</p>\r
                    <div class="settings-group device-info-mini settings-device-info">\r
                        <p><span>Serial</span><strong id="info-serial">--</strong></p>\r
                        <p><span>Tipo</span><strong>Alarma DSC</strong></p>\r
                        <p><span>Tu rol</span><strong id="info-role">--</strong></p>\r
                    </div>\r
                </div>\r
\r
                <!-- ======== ZONA PELIGROSA ======== -->\r
                <div class="settings-section danger-zone" id="danger-section">\r
                    <p class="settings-section-title">Zona de riesgo</p>\r
                    <div class="settings-group">\r
                        <button class="settings-btn danger" id="delete-device-btn" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">delete_forever</span>\r
                            <span class="settings-btn-text">\r
                                <span class="settings-btn-title">Eliminar sitio</span>\r
                                <span class="settings-btn-subtitle">Esta acción es irreversible</span>\r
                            </span>\r
                            <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
                        </button>\r
                    </div>\r
                </div>\r
            </div>\r
\r
        </section>\r
    </div>\r
\r
    <!-- Modal Cambiar Nombre -->\r
    <div class="modal-overlay" id="change-name-modal">\r
        <div class="modal-content">\r
            <h3>Cambiar nombre del sitio</h3>\r
            <div class="modal-input-group">\r
                <label>Nuevo nombre</label>\r
                <input type="text" id="change-name-input" class="modal-input" placeholder="Ej: Casa Principal">\r
            </div>\r
            <div class="pin-error" id="change-name-error"></div>\r
            <div class="modal-action-row">\r
                <button class="modal-btn primary" id="save-change-name-btn">Guardar</button>\r
                <button class="modal-btn cancel" id="close-change-name-modal">Cancelar</button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- ========== MODAL PARA EDITAR NOMBRE DE ZONA ========== -->\r
    <div class="modal-overlay" id="edit-zone-modal">\r
        <div class="modal-content">\r
            <h3>Editar nombre de zona</h3>\r
            <div class="modal-input-group">\r
                <label>Nombre de la zona</label>\r
                <input type="text" id="edit-zone-name-input" class="modal-input" placeholder="Ej: Puerta principal">\r
            </div>\r
            <div class="modal-action-row">\r
                <button class="modal-btn primary" id="save-zone-name-btn">\r
                    <span class="material-symbols-outlined">save</span>\r
                    Guardar\r
                </button>\r
                <button class="modal-btn cancel" id="close-zone-modal">Cancelar</button>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Modal WiFi -->\r
    <div class="modal-overlay" id="wifi-modal">\r
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
            <div class="wifi-list" id="wifi-list">\r
                <p class="wifi-list-title">Redes encontradas:</p>\r
                <div id="wifi-networks"></div>\r
            </div>\r
\r
            <!-- Formulario de conexión (oculto hasta seleccionar red) -->\r
            <div class="wifi-form" id="wifi-form">\r
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
                <div class="modal-action-row">\r
                    <button class="modal-btn primary" id="connect-wifi-btn">Conectar</button>\r
                    <button class="modal-btn cancel" id="cancel-wifi-connect">Cancelar</button>\r
                </div>\r
            </div>\r
\r
            <button class="modal-btn cancel" id="close-wifi-modal">Cerrar</button>\r
        </div>\r
    </div>\r
\r
</div>`;async function rn(g,m,q,j){var se,ie,oe,re,ce,le,de,me,ue,pe,ve,be,ge,fe,ye,Ee,he,we,Ie,Be,Ne,Ce,Le,ke,Se,xe,Ae,$e;const Me=document.getElementById("main-content");Me.innerHTML=an;const E=new tn(g,m),L=await E.loadDeviceData();if(!L){await Ye("No se encontró el dispositivo solicitado.","Dispositivo no encontrado"),Te();return}Je(m,"device");const C=await E.getUserRole(),Pe=(g==null?void 0:g.name)||(g==null?void 0:g.displayName)||(g==null?void 0:g.email)||"Usuario";document.getElementById("device-name").textContent=L.name,document.getElementById("info-serial").textContent=L.serial,document.getElementById("info-role").textContent=C;const W=e=>{const t=document.getElementById("device-status-badge"),n=t==null?void 0:t.querySelector(".status-dot"),a=t==null?void 0:t.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),a&&(a.textContent=e==="online"?"En línea":"Sin conexión")};W(L.status);const k=[],De=E.listenOnlineStatus(W);k.push(De);const u=en();let S=0;const _e=p(u,`P/${m}/L`),Re=y(_e,e=>{S=e.exists()?Number(e.val()):0,console.log(`📶 P/${m}/L = ${S}`)});k.push(Re);let V={};const Oe=p(u,`M/${m}/X/D`),Fe=y(Oe,e=>{V=e.exists()?e.val():{}});k.push(Fe);let v=1,M=[];const h=[];let P=!1;function G(){const e=document.getElementById("partition-select"),t=document.getElementById("partition-selector-container");e.innerHTML="",h.forEach(n=>{const a=document.createElement("option");a.value=n,a.textContent=`Partición ${n}`,n===v&&(a.selected=!0),e.appendChild(a)}),h.length<=1?(t.style.display="none",v=h[0]||1):(t.style.display="flex",h.includes(v)||(v=h[0],e.value=v)),X(),Q(),P||(P=!0,setTimeout(()=>{var a;const n=document.getElementById("dsc-loading-overlay");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),400)),(a=document.getElementById("dsc-content"))==null||a.classList.add("ready")},1500))}function X(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${v}`)}function Q(){M.forEach(n=>{typeof n=="function"&&n()}),M=[];const e=p(u,`P/${m}/E${v}`),t=y(e,n=>{const a=n.exists()?Number(n.val()):0;Ue(a)});M.push(t)}const Ze=p(u,`P/${m}`),He=y(Ze,e=>{if(!e.exists()){h.length=0,G();return}const t=e.val();h.length=0;for(let n=1;n<=8;n++)t[`P${n}`]===2&&h.push(n);G()});k.push(He),(se=document.getElementById("partition-select"))==null||se.addEventListener("change",e=>{v=Number(e.target.value),X(),Q(),Z(),H()});function Ue(e){K=Number(e);const t=document.getElementById("partition-state"),n=document.getElementById("partition-status-icon"),a=document.getElementById("partition-status-icon-glyph"),s=document.getElementById("btn-arm-away"),i=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),o={0:{text:"Desconocido",icon:"help",className:"disarmed"},1:{text:"Listo para armar",icon:"check_circle",className:"ready"},2:{text:"Listo con zonas abiertas",icon:"error",className:"not-ready"},3:{text:"No listo",icon:"error",className:"not-ready"},4:{text:"Armado en Casa",icon:"lock",className:"armed"},5:{text:"Armado Ausente",icon:"lock",className:"armed"},6:{text:"Armado sin entrada",icon:"lock",className:"armed"},9:{text:"Armado sin entrada",icon:"lock",className:"armed"},22:{text:"Armado sin entrada",icon:"lock",className:"armed"},7:{text:"Falla al armar",icon:"error",className:"not-ready"},8:{text:"Tiempo de salida",icon:"schedule",className:"pending"},11:{text:"Salida rápida",icon:"schedule",className:"pending"},12:{text:"Retardo de entrada",icon:"schedule",className:"pending"},13:{text:"Retardo después de alarma",icon:"schedule",className:"pending"},17:{text:"Área en alarma",icon:"warning",className:"armed"},18:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},21:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},25:{text:"Memoria de alarma",icon:"history",className:"disarmed"}},c=o[e]||o[0];t&&(t.textContent=c.text),a&&(a.textContent=c.icon),n&&(n.className=`partition-status-icon ${c.className}`),qe(e,s,i,r)}function qe(e,t,n,a){if(t.disabled=!1,n.disabled=!1,a.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(t.classList.add("blink"),n.classList.add("blink")):(t.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(t.disabled=!1,n.disabled=!1,a.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(t.disabled=!0,n.disabled=!0,a.disabled=!1),[8,11].includes(e)||(t.classList.remove("blink"),n.classList.remove("blink"))}let K=0;function je(){return[4,5,6,9,17,18,21,22].includes(K)}async function D(e,t={}){const{toggleBase:n=4,zone:a=null}=t;if(!S||S<=0)return d("⚠️ El módulo no está en línea","error"),console.warn(`⛔ Comando bloqueado: P/${m}/L = ${S}`),!1;let s=V;try{const l=await ze(p(u,`M/${m}/X/D`));s=l.exists()?l.val():{}}catch(l){console.warn("⚠️ No se pudo releer X/D, usando cache:",l)}const i=n*10+n,o=(Number(s.L)||n)===n?i:n,c={A:Number(v),C:Number(e),D:Number(s.D??0),L:Number(o),N:Pe,V:s.V??0,Z:Number(a!==null?a:s.Z??0)};try{return await T(p(u,`M/${m}/X/D`),c),!0}catch{return d("❌ Error al enviar comando","error"),!1}}let x=null;function We(e,t){const a=i=>{i.target.closest(".btn-bypass")||(e.classList.add("pressing"),x=setTimeout(()=>{x=null,e.classList.remove("pressing"),navigator.vibrate&&navigator.vibrate(50),t()},600))},s=()=>{x&&(clearTimeout(x),x=null),e.classList.remove("pressing")};e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",s),e.addEventListener("touchmove",s),e.addEventListener("touchcancel",s),e.addEventListener("mousedown",a),e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s)}function Ve(e){if(!e)return;const t=A[e]||{},n=t.A===v&&t.N?t.N:`Zona ${e}`,a=String(e).padStart(2,"0");let s=document.getElementById("zone-action-sheet");s||(s=document.createElement("div"),s.id="zone-action-sheet",s.className="action-sheet-overlay",s.innerHTML=`
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
    `,document.body.appendChild(s),s.addEventListener("click",i=>{i.target===s&&F()})),s.querySelector("#action-sheet-title").textContent=`Zona ${a} · ${n}`,s.querySelector("#action-edit-name").onclick=()=>{F(),setTimeout(()=>J(e),150)},s.querySelector("#action-cancel").onclick=F,s.style.display="flex"}function F(){const e=document.getElementById("zone-action-sheet");e&&(e.style.display="none")}let I=null,B=null,Y={},A={},_=null,R="";function Ge({accion:e,zoneNumber:t,nombre:n}){return new Promise(a=>{const s=e==="anular",i=document.createElement("div");i.className="confirm-modal-overlay",i.innerHTML=`
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
        `,document.body.appendChild(i);const r=i.querySelector("#confirm-cancel"),o=i.querySelector("#confirm-ok"),c=l=>{i.style.opacity="0",setTimeout(()=>{i.remove(),a(l)},200)};r.addEventListener("click",()=>c(!1)),o.addEventListener("click",()=>c(!0)),i.addEventListener("click",l=>{l.target===i&&c(!1)}),i.addEventListener("keydown",l=>{l.key==="Escape"&&c(!1)}),setTimeout(()=>r.focus(),150)})}function Xe(){I&&(I(),I=null),B&&(B(),B=null);const e=p(u,`M/${m}/W/Z`);I=y(e,n=>{Y=n.exists()?n.val():{},Z()});const t=p(u,`M/${m}/W/NZ`);B=y(t,n=>{A=n.exists()?n.val():{},Z()})}function Z(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(Y||{}).filter(([a,s])=>s.A===v&&s.E!==void 0);if(n.length===0){e.innerHTML='<p class="empty-state-message">Sin zonas configuradas para esta partición</p>';return}n.sort((a,s)=>Number(a[0])-Number(s[0])),e.innerHTML=n.map(([a,s])=>{const i=A[a]||{},r=i.A===v&&i.N?i.N:`Zona ${a}`,o=s.E===1,c=s.B===1,l=String(a).padStart(2,"0");let b,f,w;return c?(b="Anulada",f="zone-bypassed",w="block"):o?(b="Abierta",f="zone-open",w="door_open"):(b="Cerrada",f="zone-closed",w="door_front"),`
      <div class="zone-item ${f}" data-zone-id="${a}">
        <div class="zone-info">
          <span class="zone-icon">
            <span class="material-symbols-outlined">${w}</span>
          </span>
          <div class="zone-copy">
            <p class="zone-heading">
              <span>Zona ${l}</span>
              <span class="zone-state">
                ${b}
              </span>
            </p>
            <p class="zone-name">
              ${r}
            </p>
          </div>
        </div>
        <button class="btn-bypass" data-zone="${a}" data-current-bypass="${c?1:0}">
          ${c?"Quitar anulación":"Anular zona"}
        </button>
      </div>
    `}).join(""),e.querySelectorAll(".btn-bypass").forEach(a=>{a.addEventListener("click",async s=>{s.stopPropagation();const i=a.dataset.zone,r=Number(a.dataset.currentBypass),o=A[i]||{},c=o.A===v&&o.N?o.N:`Zona ${i}`,l=String(i).padStart(2,"0"),b=r===1?"restaurar":"anular";if(je()){d("🔒 No se puede anular con el sistema armado","error"),console.warn("⛔ Anulación bloqueada: partición armada");return}if(!await Ge({accion:b,zoneNumber:l,nombre:c}))return;await D(q,{toggleBase:3,zone:i})&&d(b==="anular"?"✅ Solicitud de anulación enviada":"✅ Solicitud de restauración enviada","success")})}),e.querySelectorAll(".zone-item").forEach(a=>{We(a,()=>{Ve(a.dataset.zoneId)})}),window.editZone=J}function J(e){if(!e)return;_=e;const t=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),a=document.getElementById("save-zone-name-btn"),s=A[e]||{};R=s.A===v&&s.N?s.N:"",n.value=R,a.style.display="none";const i=()=>{const r=n.value.trim(),o=r!==R&&r.length>0;a.style.display=o?"flex":"none"};n.addEventListener("input",i),t._cleanupListener=()=>n.removeEventListener("input",i),t.style.display="flex",n.focus(),n.select(),setTimeout(i,50)}function $(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",_=null,document.getElementById("save-zone-name-btn").style.display="none"}async function ee(){if(!_)return;const t=document.getElementById("edit-zone-name-input").value.trim();if(!t){d("⚠️ El nombre no puede estar vacío","error");return}if(t===R){d("ℹ️ El nombre no ha cambiado","info"),$();return}try{await T(p(u,`M/${m}/W/NZ/${_}`),{A:v,N:t}),d("✅ Nombre actualizado correctamente","success"),$()}catch(n){console.error("Error al guardar nombre:",n),d("❌ Error al guardar el nombre","error")}}(ie=document.getElementById("save-zone-name-btn"))==null||ie.addEventListener("click",ee),(oe=document.getElementById("close-zone-modal"))==null||oe.addEventListener("click",$),(re=document.getElementById("edit-zone-modal"))==null||re.addEventListener("click",e=>{e.target===e.currentTarget&&$()}),(ce=document.getElementById("edit-zone-name-input"))==null||ce.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();const t=document.getElementById("save-zone-name-btn");getComputedStyle(t).display!=="none"&&ee()}e.key==="Escape"&&$()});let N=null,ne={};function Qe(){N&&(N(),N=null);const e=p(u,`M/${m}/H`);N=y(e,t=>{ne=t.exists()?t.val():{},H()})}function H(){const e=document.getElementById("history-list");if(!e)return;const n=Object.entries(ne||[]).filter(([i,r])=>r.A===v||r.A===9);if(n.length===0){e.innerHTML='<p class="empty-state-message">No hay eventos para esta partición</p>';return}n.sort((i,r)=>{const[o,c]=i,[l,b]=r,f=new Date(c.F.replace(/\//g,"-").replace(" ","T")+":00"),w=new Date(b.F.replace(/\//g,"-").replace(" ","T")+":00");return w-f!==0?w-f:l.localeCompare(o)});function a(i){const r=i.E,o=i.D||0,c=i.N||"Usuario",l=String(o).padStart(2,"0");switch(r){case 1:return`Alarma en Zona ${l}`;case 2:return`Restauración de alarma en Zona ${l}`;case 3:return`Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[o]||`Falla (código ${o})`}`;case 4:return`Restauración de falla: ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[o]||`Falla restaurada (código ${o})`}`;case 5:return`Apertura por usuario ${l} (${c})`;case 6:return`Cierre por usuario ${l} (${c})`;case 7:return`${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[o]||`Alarma (código ${o})`}`;default:return`Evento ${r}`}}function s(i){const r=Number(i.E),o=Number(i.D)||0;switch(r){case 1:return{className:"dsc-event-alarm",icon:"warning"};case 2:return{className:"dsc-event-restored",icon:"check_circle"};case 3:return{className:"dsc-event-fault",icon:"error"};case 4:return{className:"dsc-event-fault-restored",icon:"restart_alt"};case 5:return{className:"dsc-event-open",icon:"lock_open"};case 6:return{className:"dsc-event-closed",icon:"lock"};case 7:return o===0?{className:"dsc-event-fire",icon:"local_fire_department"}:o===1?{className:"dsc-event-medical",icon:"medical_services"}:o===2?{className:"dsc-event-panic",icon:"warning"}:{className:"dsc-event-alarm",icon:"warning"};default:return{className:"dsc-event-neutral",icon:"info"}}}e.innerHTML=n.map(([i,r])=>{const o=s(r),c=a(r),l=r.F||"";return`
            <div class="history-item ${o.className}">
                <div class="history-icon">
                    <span class="material-symbols-outlined">${o.icon}</span>
                </div>
                <div class="history-info">
                    <p class="history-text">
                        ${c}
                    </p>
                    <p class="history-meta">${l}</p>
                </div>
            </div>
        `}).join("")}Qe();function U(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").classList.toggle("active",e==="zonas"),document.getElementById("panel-historial").classList.toggle("active",e==="historial"),e==="historial"&&H()}if(setTimeout(()=>{U("historial")},100),(le=document.getElementById("tab-zonas"))==null||le.addEventListener("click",()=>U("zonas")),(de=document.getElementById("tab-historial"))==null||de.addEventListener("click",()=>U("historial")),(me=document.getElementById("btn-arm-away"))==null||me.addEventListener("click",async()=>{await D(-5)&&d("🔒 Comando Armado Ausente enviado","success")}),(ue=document.getElementById("btn-arm-home"))==null||ue.addEventListener("click",async()=>{await D(-4)&&d("🏠 Comando Armado En Casa enviado","success")}),(pe=document.getElementById("btn-disarm"))==null||pe.addEventListener("click",async()=>{await D(q)&&d("🔓 Comando Desarmado enviado","success")}),C==="PRO"){const e=document.getElementById("danger-section");e&&(e.style.display="block")}const te=document.getElementById("current-device-name");te&&(te.textContent=L.name),(ve=document.getElementById("device-menu-btn"))==null||ve.addEventListener("click",()=>{const e=document.getElementById("current-device-name");e&&(e.textContent=document.getElementById("device-name").textContent),document.getElementById("device-settings-modal").style.display="flex"}),(be=document.getElementById("close-settings-modal"))==null||be.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(ge=document.getElementById("open-change-name-btn"))==null||ge.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none";const e=document.getElementById("change-name-input"),t=document.getElementById("device-name").textContent;e.value=t,e.dataset.original=t,document.getElementById("change-name-error").textContent="",document.getElementById("change-name-modal").style.display="flex",setTimeout(()=>{e.focus(),e.select()},150)}),(fe=document.getElementById("close-change-name-modal"))==null||fe.addEventListener("click",()=>{document.getElementById("change-name-modal").style.display="none"}),(ye=document.getElementById("save-change-name-btn"))==null||ye.addEventListener("click",async()=>{const e=document.getElementById("change-name-input"),t=document.getElementById("change-name-error"),n=e.value.trim();if(!n){t.textContent="⚠️ El nombre no puede estar vacío";return}if(n===e.dataset.original){t.textContent="ℹ️ El nombre no ha cambiado";return}try{await T(p(u,`US/${g.uid}/M/${m}`),{N:n}),document.getElementById("device-name").textContent=n;const a=document.getElementById("current-device-name");a&&(a.textContent=n),document.getElementById("change-name-modal").style.display="none",d("✅ Nombre actualizado","success")}catch(a){console.error("Error actualizando nombre:",a),t.textContent="❌ Error al guardar. Intenta de nuevo."}}),(Ee=document.getElementById("change-name-input"))==null||Ee.addEventListener("keydown",e=>{var t;e.key==="Enter"&&((t=document.getElementById("save-change-name-btn"))==null||t.click()),e.key==="Escape"&&(document.getElementById("change-name-modal").style.display="none")}),(he=document.getElementById("change-pin-btn"))==null||he.addEventListener("click",async()=>{document.getElementById("device-settings-modal").style.display="none";let e=null;try{const t=await ze(p(u,`US/${g.uid}/M/${m}/C`));e=t.exists()?t.val():null}catch(t){console.error("Error leyendo clave:",t),d("❌ No se pudo leer la clave","error");return}window.dispatchEvent(new CustomEvent("openChangePinModal",{detail:{serial:m,currentKey:e}}))}),(we=document.getElementById("change-wifi-btn"))==null||we.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none",window.dispatchEvent(new CustomEvent("openWifiModal",{detail:{serial:m}}))}),(Ie=document.getElementById("share-device-btn"))==null||Ie.addEventListener("click",async()=>{if(C==="INV"){d("❌ No tienes permisos para compartir","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const e=document.getElementById("shared-list");e.innerHTML='<p class="shared-list-message">Cargando...</p>';try{const t=await E.loadSharedUsers();t.length===0?e.innerHTML='<p class="shared-list-message">No has compartido este sitio</p>':(e.innerHTML=t.map(n=>`
                <div class="shared-user-row">
                    <div class="shared-user-info">
                        <p class="shared-user-name">${n.name}</p>
                        <p class="shared-user-email">${n.email}</p>
                    </div>
                    <select class="role-select" data-uid="${n.uid}" ${C!=="PRO"?"disabled":""}>
                        <option value="INV" ${n.role==="INV"?"selected":""}>Invitado</option>
                        <option value="ADM" ${n.role==="ADM"?"selected":""}>Admin</option>
                    </select>
                    <button class="btn-remove-user" data-uid="${n.uid}" aria-label="Eliminar ${n.name}" title="Eliminar usuario">🗑️</button>
                </div>
            `).join(""),C==="PRO"&&e.querySelectorAll(".role-select").forEach(n=>{n.addEventListener("change",async a=>{if(await z("¿Cambiar el rol de este usuario?","Cambiar permisos")){const s=await E.updateSharedUserRole(n.dataset.uid,n.value);s.success?d("✅ Rol actualizado","success"):d("❌ "+s.error,"error")}})}),e.querySelectorAll(".btn-remove-user").forEach(n=>{n.addEventListener("click",async()=>{var a;if(await z("¿Eliminar este usuario del sitio?","Quitar usuario")){const s=await E.removeSharedUser(n.dataset.uid);s.success?(d("✅ Usuario eliminado","success"),(a=document.getElementById("share-device-btn"))==null||a.click()):d("❌ "+s.error,"error")}})}))}catch(t){console.error("Error cargando usuarios:",t),e.innerHTML='<p class="shared-list-message error">Error al cargar usuarios</p>'}}),(Be=document.getElementById("close-share-modal"))==null||Be.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(Ne=document.getElementById("confirm-share"))==null||Ne.addEventListener("click",async()=>{var a;const e=document.getElementById("share-email").value.trim(),t=document.getElementById("share-role").value;if(!e){d("⚠️ Ingresa un correo","error");return}const n=await E.shareDevice(e,t);n.success?(d("✅ "+n.message,"success"),document.getElementById("share-email").value="",(a=document.getElementById("share-device-btn"))==null||a.click()):d("❌ "+n.error,"error")}),(Ce=document.getElementById("unsubscribe-btn"))==null||Ce.addEventListener("click",async()=>{if(!await z("¿Desactivar las notificaciones de este sitio?","Desactivar notificaciones"))return;const{unsubscribeFromSerial:e}=await nn(async()=>{const{unsubscribeFromSerial:n}=await import("./index-DOPKJj-Y.js").then(a=>a.n);return{unsubscribeFromSerial:n}},__vite__mapDeps([0,1])),t=await e(m);t.success?(d("✅ Notificaciones desactivadas","success"),document.getElementById("device-settings-modal").style.display="none"):d("❌ "+(t.error||"Error al desactivar"),"error")}),(Le=document.getElementById("delete-device-btn"))==null||Le.addEventListener("click",async()=>{if(C==="PRO"&&await z("Eres el propietario. El sitio se eliminará para todos los usuarios.","Eliminar sitio para todos")&&await z("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final")){const e=await E.deleteDeviceForAll();e.success?(ae(),d("✅ Sitio eliminado","success"),setTimeout(()=>j(),1e3)):d("❌ "+e.error,"error")}});let O=null;(ke=document.getElementById("close-wifi-modal"))==null||ke.addEventListener("click",()=>{document.getElementById("wifi-modal").style.display="none",O&&(O(),O=null)});function Ke(){const e=p(u,`M/${m}/CONF/WF/ST`);O=y(e,t=>{const n=t.exists()?t.val():{},a=document.getElementById("wifi-connected-name"),s=document.getElementById("wifi-connected-info");a&&(a.textContent=n.CONNECTED||"Sin conexión"),s&&(s.textContent=n.IP?`IP: ${n.IP} • ${n.RSSI||"--"} dBm`:"--")})}(Se=document.getElementById("scan-wifi-btn"))==null||Se.addEventListener("click",async()=>{const e=document.getElementById("wifi-networks"),t=document.getElementById("wifi-list");e.innerHTML='<p class="wifi-feedback">Buscando redes...</p>',t.style.display="block";try{await T(p(u,`M/${m}/CONF/WF/CMD`),{ACTION:"SCAN",STATUS:1,MSG:"Solicitando escaneo..."});const n=p(u,`M/${m}/CONF/WF/SCAN`),a=y(n,s=>{if(!s.exists())return;const i=s.val(),r=Object.entries(i).filter(([o])=>o!=="LAST");if(r.length===0){e.innerHTML='<p class="wifi-feedback">No se encontraron redes</p>';return}r.sort((o,c)=>Number(c[1])-Number(o[1])),e.innerHTML=r.map(([o,c])=>{const l=Number(c),b=l>-60?"signal_wifi_4_bar":l>-75?"network_wifi_3_bar":"network_wifi_2_bar";return`
                    <div class="wifi-network" data-ssid="${o}">
                        <span class="material-symbols-outlined">${b}</span>
                        <div class="wifi-network-info">
                            <p class="wifi-network-ssid">${o}</p>
                            <p class="wifi-network-signal">${l} dBm</p>
                        </div>
                    </div>
                `}).join(""),e.querySelectorAll(".wifi-network").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.ssid;document.getElementById("wifi-selected-ssid").textContent=c,document.getElementById("wifi-form").style.display="block",document.getElementById("wifi-password").value="",document.getElementById("wifi-password").focus()})})});setTimeout(()=>{a&&a()},15e3)}catch(n){console.error("Error escaneando:",n),e.innerHTML='<p class="wifi-feedback error">Error al escanear</p>'}}),(xe=document.getElementById("cancel-wifi-connect"))==null||xe.addEventListener("click",()=>{document.getElementById("wifi-form").style.display="none"}),(Ae=document.getElementById("connect-wifi-btn"))==null||Ae.addEventListener("click",async()=>{const e=document.getElementById("wifi-selected-ssid").textContent,t=document.getElementById("wifi-password").value,n=document.getElementById("wifi-target").value,a=document.getElementById("wifi-error");if(!t){a.textContent="⚠️ Ingresa la contraseña";return}a.textContent="";try{await T(p(u,`M/${m}/CONF/WF/CMD`),{ACTION:"CHANGE",TARGET:n,SSID:e,PASS:t,STATUS:1,MSG:"Solicitando cambio de red..."}),d("📡 Solicitud enviada. El ESP32 se conectará en breve.","info"),document.getElementById("wifi-form").style.display="none",document.getElementById("wifi-list").style.display="none";const s=p(u,`M/${m}/CONF/WF/CMD`),i=y(s,r=>{if(!r.exists())return;const o=r.val();o.STATUS===3?(d("✅ "+(o.MSG||"Conectado exitosamente"),"success"),i()):o.STATUS===2&&d("🔄 Conectando...","info")});setTimeout(()=>i(),3e4)}catch(s){console.error("Error conectando:",s),a.textContent="❌ Error al enviar solicitud"}}),window.addEventListener("wifiModalReady",()=>{Ke()},{once:!0});const ae=()=>{k.forEach(e=>{typeof e=="function"&&e()}),M.forEach(e=>{typeof e=="function"&&e()}),I&&(I(),I=null),B&&(B(),B=null),N&&(N(),N=null),Te()};($e=document.getElementById("back-to-dashboard"))==null||$e.addEventListener("click",()=>{ae(),j()}),setTimeout(()=>{var t;const e=document.getElementById("dsc-loading-overlay");e&&!P&&(P=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),Xe()}export{rn as openAlarmDscView};
