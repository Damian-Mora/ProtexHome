import{D as sn}from"./deviceController-a85H8M6T.js";import{d as on,j as _e,f as rn,g as cn,r as p,o as w,e as g,b as c,s as k,c as ln,u as P,a as Fe}from"./index-Cfdlob0H.js";const dn=`<!-- Vista Alarma DSC -->\r
\r
<!-- OVERLAY DE CARGA (Loader tipo Facebook) -->\r
<div id="dsc-loading-overlay" class="dsc-loading-overlay">\r
    <div class="spinner"></div>\r
    <p>Cargando dispositivo...</p>\r
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
                <div class="settings-section wifi-credentials" id="wifi-credentials-section" hidden>\r
                    <p class="settings-section-title">Redes Wi-Fi configuradas</p>\r
                    <div class="settings-group">\r
                        <div class="device-info-mini settings-device-info">\r
                            <p><span>Red principal (SP)</span><strong id="wifi-primary-name">Cargando...</strong></p>\r
                            <p><span>Clave principal (PP)</span><strong id="wifi-primary-password">Cargando...</strong></p>\r
                            <p><span>Red de respaldo (SR)</span><strong id="wifi-backup-name">Cargando...</strong></p>\r
                            <p><span>Clave de respaldo (PR)</span><strong id="wifi-backup-password">Cargando...</strong></p>\r
                        </div>\r
                    </div>\r
                </div>\r
\r
                <!-- ======== COMPARTIR ======== -->\r
                <div class="settings-section">\r
                    <p class="settings-section-title">Acceso</p>\r
                    <div class="settings-group">\r
                        <button class="settings-btn manager-only" id="share-device-btn" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">share</span>\r
                            <span class="settings-btn-text">\r
                                <span class="settings-btn-title">Compartir sitio</span>\r
                                <span class="settings-btn-subtitle">Administrar las personas con acceso</span>\r
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
                                <span class="settings-btn-title" id="delete-device-title">Eliminar sitio</span>\r
                                <span class="settings-btn-subtitle" id="delete-device-subtitle">Esta acción es irreversible</span>\r
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
    <!-- Modal Compartir -->\r
    <div class="modal-overlay device-settings-overlay" id="share-modal">\r
        <section class="modal-content modal-settings device-settings-panel share-settings-panel" role="dialog" aria-modal="true" aria-labelledby="share-settings-heading">\r
            <header class="device-settings-header">\r
                <div class="device-settings-heading">\r
                    <span class="material-symbols-outlined device-settings-heading-icon" aria-hidden="true">group_add</span>\r
                    <div>\r
                        <h3 id="share-settings-heading">Compartir sitio</h3>\r
                        <p class="device-settings-name">Gestiona quién puede acceder</p>\r
                    </div>\r
                </div>\r
                <button class="device-settings-close" id="close-share-modal" type="button" aria-label="Cerrar compartir">\r
                    <span class="material-symbols-outlined" aria-hidden="true">close</span>\r
                </button>\r
            </header>\r
\r
            <div class="device-settings-scroll">\r
                <section class="settings-section">\r
                    <p class="settings-section-title">Personas con acceso</p>\r
                    <div id="shared-list" class="shared-users-list">\r
                        <p class="loading-placeholder">Cargando...</p>\r
                    </div>\r
                </section>\r
\r
                <section class="settings-section">\r
                    <p class="settings-section-title">Invitar a una persona</p>\r
                    <div class="settings-group share-invite-form">\r
                        <label for="share-email">Correo electrónico</label>\r
                        <input type="email" id="share-email" placeholder="correo@ejemplo.com" class="modal-input" autocomplete="email">\r
                        <label for="share-role">Nivel de acceso</label>\r
                        <select id="share-role" class="modal-input">\r
                            <option value="INV">Invitado · Solo consulta</option>\r
                            <option value="ADM">Administrador · Control y ajustes</option>\r
                        </select>\r
                        <button class="modal-btn primary" id="confirm-share" type="button">\r
                            <span class="material-symbols-outlined" aria-hidden="true">person_add</span>\r
                            Invitar\r
                        </button>\r
                    </div>\r
                </section>\r
            </div>\r
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
</div>`;async function pn(y,m,H,V){var me,ue,pe,ve,ge,fe,ye,be,Ee,he,we,Ie,Ce,Be,Ne,Le,ke,Se,xe,Ae,$e,Me,Te,ze,Pe,De,Re;const G=document.getElementById("main-content");G.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const h=new sn(y,m),S=await h.loadDeviceData();if(!S){await on("No se encontró el dispositivo solicitado.","Dispositivo no encontrado"),_e();return}G.innerHTML=dn,rn(m,"device");const x=await h.getUserRole(),b=x==="PRO"||x==="ADM",Oe=(y==null?void 0:y.name)||(y==null?void 0:y.displayName)||(y==null?void 0:y.email)||"Usuario";document.getElementById("device-name").textContent=S.name,document.getElementById("info-serial").textContent=S.serial,document.getElementById("info-role").textContent=x;const Q=e=>{const t=document.getElementById("device-status-badge"),n=t==null?void 0:t.querySelector(".status-dot"),s=t==null?void 0:t.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),s&&(s.textContent=e==="online"?"En línea":"Sin conexión")};Q(S.status);const A=[],Ze=h.listenOnlineStatus(Q);A.push(Ze);const u=cn();let $=0;const He=p(u,`P/${m}/L`),qe=w(He,e=>{$=e.exists()?Number(e.val()):0,console.log(`📶 P/${m}/L = ${$}`)});A.push(qe);let X={};const je=p(u,`M/${m}/X/D`),Ue=w(je,e=>{X=e.exists()?e.val():{}});A.push(Ue);let v=1,D=[];const I=[];let R=!1;function K(){var n;const e=document.getElementById("partition-select"),t=document.getElementById("partition-selector-container");if(e.innerHTML="",I.forEach(s=>{const a=document.createElement("option");a.value=s,a.textContent=`Partición ${s}`,s===v&&(a.selected=!0),e.appendChild(a)}),I.length<=1?(t.style.display="none",v=I[0]||1):(t.style.display="flex",I.includes(v)||(v=I[0],e.value=v)),Y(),J(),!R){R=!0;const s=document.getElementById("dsc-loading-overlay");s&&(s.style.opacity="0",setTimeout(()=>s.remove(),400)),(n=document.getElementById("dsc-content"))==null||n.classList.add("ready")}}function Y(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${v}`)}function J(){D.forEach(n=>{typeof n=="function"&&n()}),D=[];const e=p(u,`P/${m}/E${v}`),t=w(e,n=>{const s=n.exists()?Number(n.val()):0;Ge(s)});D.push(t)}const We=p(u,`P/${m}`),Ve=w(We,e=>{if(!e.exists()){I.length=0,K();return}const t=e.val();I.length=0;for(let n=1;n<=8;n++)t[`P${n}`]===2&&I.push(n);K()});A.push(Ve),(me=document.getElementById("partition-select"))==null||me.addEventListener("change",e=>{v=Number(e.target.value),Y(),J(),j(),U()});function Ge(e){ee=Number(e);const t=document.getElementById("partition-state"),n=document.getElementById("partition-status-icon"),s=document.getElementById("partition-status-icon-glyph"),a=document.getElementById("btn-arm-away"),i=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),o={0:{text:"Desconocido",icon:"help",className:"disarmed"},1:{text:"Listo para armar",icon:"check_circle",className:"ready"},2:{text:"Listo con zonas abiertas",icon:"error",className:"not-ready"},3:{text:"No listo",icon:"error",className:"not-ready"},4:{text:"Armado en Casa",icon:"lock",className:"armed"},5:{text:"Armado Ausente",icon:"lock",className:"armed"},6:{text:"Armado sin entrada",icon:"lock",className:"armed"},9:{text:"Armado sin entrada",icon:"lock",className:"armed"},22:{text:"Armado sin entrada",icon:"lock",className:"armed"},7:{text:"Falla al armar",icon:"error",className:"not-ready"},8:{text:"Tiempo de salida",icon:"schedule",className:"pending"},11:{text:"Salida rápida",icon:"schedule",className:"pending"},12:{text:"Retardo de entrada",icon:"schedule",className:"pending"},13:{text:"Retardo después de alarma",icon:"schedule",className:"pending"},17:{text:"Área en alarma",icon:"warning",className:"armed"},18:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},21:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},25:{text:"Memoria de alarma",icon:"history",className:"disarmed"}},l=o[e]||o[0];t&&(t.textContent=l.text),s&&(s.textContent=l.icon),n&&(n.className=`partition-status-icon ${l.className}`),Qe(e,a,i,r)}function Qe(e,t,n,s){if(t.disabled=!1,n.disabled=!1,s.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(t.classList.add("blink"),n.classList.add("blink")):(t.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(t.disabled=!1,n.disabled=!1,s.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(t.disabled=!0,n.disabled=!0,s.disabled=!1),[8,11].includes(e)||(t.classList.remove("blink"),n.classList.remove("blink"))}let ee=0;function Xe(){return[4,5,6,9,17,18,21,22].includes(ee)}async function _(e,t={}){const{toggleBase:n=4,zone:s=null}=t;if(!$||$<=0)return c("⚠️ El módulo no está en línea","error"),console.warn(`⛔ Comando bloqueado: P/${m}/L = ${$}`),!1;let a=X;try{const d=await Fe(p(u,`M/${m}/X/D`));a=d.exists()?d.val():{}}catch(d){console.warn("⚠️ No se pudo releer X/D, usando cache:",d)}const i=n*10+n,o=(Number(a.L)||n)===n?i:n,l={A:Number(v),C:Number(e),D:Number(a.D??0),L:Number(o),N:Oe,V:a.V??0,Z:Number(s!==null?s:a.Z??0)};try{return await P(p(u,`M/${m}/X/D`),l),!0}catch{return c("❌ Error al enviar comando","error"),!1}}let M=null;function Ke(e,t){const s=i=>{i.target.closest(".btn-bypass")||(e.classList.add("pressing"),M=setTimeout(()=>{M=null,e.classList.remove("pressing"),navigator.vibrate&&navigator.vibrate(50),t()},600))},a=()=>{M&&(clearTimeout(M),M=null),e.classList.remove("pressing")};e.addEventListener("touchstart",s,{passive:!0}),e.addEventListener("touchend",a),e.addEventListener("touchmove",a),e.addEventListener("touchcancel",a),e.addEventListener("mousedown",s),e.addEventListener("mouseup",a),e.addEventListener("mouseleave",a)}function Ye(e){if(!e)return;const t=T[e]||{},n=t.A===v&&t.N?t.N:`Zona ${e}`,s=String(e).padStart(2,"0");let a=document.getElementById("zone-action-sheet");a||(a=document.createElement("div"),a.id="zone-action-sheet",a.className="action-sheet-overlay",a.innerHTML=`
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
    `,document.body.appendChild(a),a.addEventListener("click",i=>{i.target===a&&q()})),a.querySelector("#action-sheet-title").textContent=`Zona ${s} · ${n}`,a.querySelector("#action-edit-name").onclick=()=>{q(),setTimeout(()=>te(e),150)},a.querySelector("#action-cancel").onclick=q,a.style.display="flex"}function q(){const e=document.getElementById("zone-action-sheet");e&&(e.style.display="none")}let B=null,N=null,ne={},T={},F=null,O="";function Je({accion:e,zoneNumber:t,nombre:n}){return new Promise(s=>{const a=e==="anular",i=document.createElement("div");i.className="confirm-modal-overlay",i.innerHTML=`
            <div class="confirm-modal">
                <div class="confirm-modal-icon ${a?"danger":"success"}">
                    <span class="material-symbols-outlined">
                        ${a?"gpp_bad":"verified_user"}
                    </span>
                </div>

                <h3 class="confirm-modal-title">
                    ${a?"Anular Zona "+g(t):"Restaurar Zona "+g(t)}
                </h3>

                <p class="confirm-modal-name">${g(n)}</p>

                <p class="confirm-modal-desc">
                    ${a?"⚠️ Esta zona quedará vulnerable. ¿Deseas continuar?":"La zona volverá a estar activa y protegida."}
                </p>

                <div class="confirm-modal-actions">
                    <button class="confirm-btn cancel" id="confirm-cancel">Cancelar</button>
                    <button class="confirm-btn ${a?"danger":"primary"}" id="confirm-ok">
                        ${a?"Anular":"Restaurar"}
                    </button>
                </div>
            </div>
        `,document.body.appendChild(i);const r=i.querySelector("#confirm-cancel"),o=i.querySelector("#confirm-ok"),l=d=>{i.style.opacity="0",setTimeout(()=>{i.remove(),s(d)},200)};r.addEventListener("click",()=>l(!1)),o.addEventListener("click",()=>l(!0)),i.addEventListener("click",d=>{d.target===i&&l(!1)}),i.addEventListener("keydown",d=>{d.key==="Escape"&&l(!1)}),setTimeout(()=>r.focus(),150)})}function en(){B&&(B(),B=null),N&&(N(),N=null);const e=p(u,`M/${m}/W/Z`);B=w(e,n=>{ne=n.exists()?n.val():{},j()});const t=p(u,`M/${m}/W/NZ`);N=w(t,n=>{T=n.exists()?n.val():{},j()})}function j(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(ne||{}).filter(([s,a])=>a.A===v&&a.E!==void 0);if(n.length===0){e.innerHTML='<p class="empty-state-message">Sin zonas configuradas para esta partición</p>';return}n.sort((s,a)=>Number(s[0])-Number(a[0])),e.innerHTML=n.map(([s,a])=>{const i=T[s]||{},r=i.A===v&&i.N?i.N:`Zona ${s}`,o=Number(a.E)===1,l=Number(a.B)===1,d=String(s).padStart(2,"0");let f,E,C;return l?(f="Anulada",E="zone-bypassed",C="block"):o?(f="Abierta",E="zone-open",C="door_open"):(f="Cerrada",E="zone-closed",C="door_front"),`
      <div class="zone-item ${E}" data-zone-id="${g(s)}">
        <div class="zone-info">
          <span class="zone-icon">
            <span class="material-symbols-outlined">${C}</span>
          </span>
          <div class="zone-copy">
            <p class="zone-heading">
              <span>Zona ${d}</span>
              <span class="zone-state">
                ${f}
              </span>
            </p>
            <p class="zone-name">
              ${g(r)}
            </p>
          </div>
        </div>
        <button class="btn-bypass" data-zone="${g(s)}" data-current-bypass="${l?1:0}">
          ${l?"Quitar anulación":"Anular zona"}
        </button>
      </div>
    `}).join(""),e.querySelectorAll(".btn-bypass").forEach(s=>{s.addEventListener("click",async a=>{a.stopPropagation();const i=s.dataset.zone,r=Number(s.dataset.currentBypass),o=T[i]||{},l=o.A===v&&o.N?o.N:`Zona ${i}`,d=String(i).padStart(2,"0"),f=r===1?"restaurar":"anular";if(Xe()){c("🔒 No se puede anular con el sistema armado","error"),console.warn("⛔ Anulación bloqueada: partición armada");return}if(!await Je({accion:f,zoneNumber:d,nombre:l}))return;await _(H,{toggleBase:3,zone:i})&&c(f==="anular"?"✅ Solicitud de anulación enviada":"✅ Solicitud de restauración enviada","success")})}),e.querySelectorAll(".zone-item").forEach(s=>{Ke(s,()=>{Ye(s.dataset.zoneId)})}),window.editZone=te}function te(e){if(!e)return;F=e;const t=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),s=document.getElementById("save-zone-name-btn"),a=T[e]||{};O=a.A===v&&a.N?a.N:"",n.value=O,s.style.display="none";const i=()=>{const r=n.value.trim(),o=r!==O&&r.length>0;s.style.display=o?"flex":"none"};n.addEventListener("input",i),t._cleanupListener=()=>n.removeEventListener("input",i),t.style.display="flex",n.focus(),n.select(),setTimeout(i,50)}function z(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",F=null,document.getElementById("save-zone-name-btn").style.display="none"}async function ae(){if(!F)return;const t=document.getElementById("edit-zone-name-input").value.trim();if(!t){c("⚠️ El nombre no puede estar vacío","error");return}if(t===O){c("ℹ️ El nombre no ha cambiado","info"),z();return}try{await P(p(u,`M/${m}/W/NZ/${F}`),{A:v,N:t}),c("✅ Nombre actualizado correctamente","success"),z()}catch(n){console.error("Error al guardar nombre:",n),c("❌ Error al guardar el nombre","error")}}(ue=document.getElementById("save-zone-name-btn"))==null||ue.addEventListener("click",ae),(pe=document.getElementById("close-zone-modal"))==null||pe.addEventListener("click",z),(ve=document.getElementById("edit-zone-modal"))==null||ve.addEventListener("click",e=>{e.target===e.currentTarget&&z()}),(ge=document.getElementById("edit-zone-name-input"))==null||ge.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();const t=document.getElementById("save-zone-name-btn");getComputedStyle(t).display!=="none"&&ae()}e.key==="Escape"&&z()});let L=null,se={};function nn(){L&&(L(),L=null);const e=p(u,`M/${m}/H`);L=w(e,t=>{se=t.exists()?t.val():{},U()})}function U(){const e=document.getElementById("history-list");if(!e)return;const n=Object.entries(se||[]).filter(([i,r])=>r.A===v||r.A===9);if(n.length===0){e.innerHTML='<p class="empty-state-message">No hay eventos para esta partición</p>';return}n.sort((i,r)=>{const[o,l]=i,[d,f]=r,E=new Date(l.F.replace(/\//g,"-").replace(" ","T")+":00"),C=new Date(f.F.replace(/\//g,"-").replace(" ","T")+":00");return C-E!==0?C-E:d.localeCompare(o)});function s(i){const r=i.E,o=i.D||0,l=i.N||"Usuario",d=String(o).padStart(2,"0");switch(r){case 1:return`Alarma en Zona ${d}`;case 2:return`Restauración de alarma en Zona ${d}`;case 3:return`Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[o]||`Falla (código ${o})`}`;case 4:return`Restauración de falla: ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[o]||`Falla restaurada (código ${o})`}`;case 5:return`Apertura por usuario ${d} (${l})`;case 6:return`Cierre por usuario ${d} (${l})`;case 7:return`${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[o]||`Alarma (código ${o})`}`;default:return`Evento ${r}`}}function a(i){const r=Number(i.E),o=Number(i.D)||0;switch(r){case 1:return{className:"dsc-event-alarm",icon:"warning"};case 2:return{className:"dsc-event-restored",icon:"check_circle"};case 3:return{className:"dsc-event-fault",icon:"error"};case 4:return{className:"dsc-event-fault-restored",icon:"restart_alt"};case 5:return{className:"dsc-event-open",icon:"lock_open"};case 6:return{className:"dsc-event-closed",icon:"lock"};case 7:return o===0?{className:"dsc-event-fire",icon:"local_fire_department"}:o===1?{className:"dsc-event-medical",icon:"medical_services"}:o===2?{className:"dsc-event-panic",icon:"warning"}:{className:"dsc-event-alarm",icon:"warning"};default:return{className:"dsc-event-neutral",icon:"info"}}}e.innerHTML=n.map(([i,r])=>{const o=a(r),l=s(r),d=r.F||"";return`
            <div class="history-item dsc-event ${o.className}">
                <div class="history-icon">
                    <span class="material-symbols-outlined">${o.icon}</span>
                </div>
                <div class="history-info">
                    <p class="history-text">
                        ${g(l)}
                    </p>
                    <p class="history-meta">${g(d)}</p>
                </div>
                ${b?`
                  <button class="btn-delete-event" type="button" data-id="${g(i)}"
                    aria-label="Eliminar evento" title="Eliminar evento">
                    <span class="material-symbols-outlined" aria-hidden="true">delete</span>
                  </button>
                `:""}
            </div>
                `}).join(""),b&&e.querySelectorAll(".btn-delete-event").forEach(i=>{i.addEventListener("click",async r=>{if(r.stopPropagation(),!!await k("¿Eliminar este evento del historial?","Eliminar evento"))try{await ln(p(u,`M/${m}/H/${i.dataset.id}`),null),c("✅ Evento eliminado","success")}catch(o){console.error("Error eliminando evento del historial:",o),c("❌ No se pudo eliminar el evento","error")}})})}nn();function W(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").classList.toggle("active",e==="zonas"),document.getElementById("panel-historial").classList.toggle("active",e==="historial"),e==="historial"&&U()}setTimeout(()=>{W("historial")},100),(fe=document.getElementById("tab-zonas"))==null||fe.addEventListener("click",()=>W("zonas")),(ye=document.getElementById("tab-historial"))==null||ye.addEventListener("click",()=>W("historial")),(be=document.getElementById("btn-arm-away"))==null||be.addEventListener("click",async()=>{await _(-5)&&c("🔒 Comando Armado Ausente enviado","success")}),(Ee=document.getElementById("btn-arm-home"))==null||Ee.addEventListener("click",async()=>{await _(-4)&&c("🏠 Comando Armado En Casa enviado","success")}),(he=document.getElementById("btn-disarm"))==null||he.addEventListener("click",async()=>{await _(H)&&c("🔓 Comando Desarmado enviado","success")});const ie=document.getElementById("danger-section");ie&&(ie.style.display="block");const oe=document.getElementById("share-device-btn");oe&&(oe.style.display=b?"flex":"none");const re=document.getElementById("wifi-credentials-section");re&&(re.hidden=!b);const ce=document.getElementById("change-wifi-btn");ce&&(ce.style.display=x==="INV"?"none":"flex"),b?(document.getElementById("delete-device-title").textContent="Liberar sitio para todos",document.getElementById("delete-device-subtitle").textContent="Desvincular el módulo de todas las cuentas"):(document.getElementById("delete-device-title").textContent="Quitar sitio de mi cuenta",document.getElementById("delete-device-subtitle").textContent="Los demás usuarios conservarán el acceso");const le=document.getElementById("current-device-name");le&&(le.textContent=S.name),(we=document.getElementById("device-menu-btn"))==null||we.addEventListener("click",async()=>{const e=document.getElementById("current-device-name");e&&(e.textContent=document.getElementById("device-name").textContent),document.getElementById("device-settings-modal").style.display="flex",b&&await tn()});async function tn(){const e={"wifi-primary-name":"SP","wifi-primary-password":"PP","wifi-backup-name":"SR","wifi-backup-password":"PR"};Object.keys(e).forEach(t=>{document.getElementById(t).textContent="Cargando..."});try{const t=await h.loadWifiConfiguration();Object.entries(e).forEach(([n,s])=>{const a=t[s];document.getElementById(n).textContent=a==null||a===""?"No configurada":String(a)})}catch(t){console.error("Error cargando la configuración Wi-Fi:",t),Object.keys(e).forEach(n=>{document.getElementById(n).textContent="No se pudo cargar"}),c("❌ No se pudo cargar la configuración Wi-Fi","error")}}(Ie=document.getElementById("close-settings-modal"))==null||Ie.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(Ce=document.getElementById("open-change-name-btn"))==null||Ce.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none";const e=document.getElementById("change-name-input"),t=document.getElementById("device-name").textContent;e.value=t,e.dataset.original=t,document.getElementById("change-name-error").textContent="",document.getElementById("change-name-modal").style.display="flex",setTimeout(()=>{e.focus(),e.select()},150)}),(Be=document.getElementById("close-change-name-modal"))==null||Be.addEventListener("click",()=>{document.getElementById("change-name-modal").style.display="none"}),(Ne=document.getElementById("save-change-name-btn"))==null||Ne.addEventListener("click",async()=>{const e=document.getElementById("change-name-input"),t=document.getElementById("change-name-error"),n=e.value.trim();if(!n){t.textContent="⚠️ El nombre no puede estar vacío";return}if(n===e.dataset.original){t.textContent="ℹ️ El nombre no ha cambiado";return}try{await P(p(u,`US/${y.uid}/M/${m}`),{N:n}),document.getElementById("device-name").textContent=n;const s=document.getElementById("current-device-name");s&&(s.textContent=n),document.getElementById("change-name-modal").style.display="none",c("✅ Nombre actualizado","success")}catch(s){console.error("Error actualizando nombre:",s),t.textContent="❌ Error al guardar. Intenta de nuevo."}}),(Le=document.getElementById("change-name-input"))==null||Le.addEventListener("keydown",e=>{var t;e.key==="Enter"&&((t=document.getElementById("save-change-name-btn"))==null||t.click()),e.key==="Escape"&&(document.getElementById("change-name-modal").style.display="none")}),(ke=document.getElementById("change-pin-btn"))==null||ke.addEventListener("click",async()=>{document.getElementById("device-settings-modal").style.display="none";let e=null;try{const t=await Fe(p(u,`US/${y.uid}/M/${m}/C`));e=t.exists()?t.val():null}catch(t){console.error("Error leyendo clave:",t),c("❌ No se pudo leer la clave","error");return}window.dispatchEvent(new CustomEvent("openChangePinModal",{detail:{serial:m,currentKey:e,onPinChanged:t=>{H=t}}}))}),(Se=document.getElementById("change-wifi-btn"))==null||Se.addEventListener("click",()=>{if(x==="INV"){c("❌ No tienes permisos para configurar Wi-Fi","error");return}document.getElementById("device-settings-modal").style.display="none",window.dispatchEvent(new CustomEvent("openWifiModal",{detail:{serial:m}}))}),(xe=document.getElementById("share-device-btn"))==null||xe.addEventListener("click",async()=>{if(!b){c("❌ No tienes permisos para compartir","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const e=document.getElementById("shared-list");e.innerHTML='<p class="shared-list-message">Cargando...</p>';try{const t=await h.loadSharedUsers();t.length===0?e.innerHTML='<p class="shared-list-message">No has compartido este sitio</p>':(e.innerHTML=t.map(n=>`
                <div class="shared-user-row">
                    <div class="shared-user-info">
                        <p class="shared-user-name">${g(n.name)}</p>
                        <p class="shared-user-email">${g(n.email)}</p>
                    </div>
                    <select class="role-select" data-uid="${g(n.uid)}">
                        <option value="INV" ${n.role==="INV"?"selected":""}>Invitado</option>
                        <option value="ADM" ${n.role==="ADM"?"selected":""}>Admin</option>
                    </select>
                    <button class="btn-remove-user" data-uid="${g(n.uid)}" aria-label="Eliminar ${g(n.name)}" title="Eliminar usuario">🗑️</button>
                </div>
            `).join(""),b&&e.querySelectorAll(".role-select").forEach(n=>{n.addEventListener("change",async s=>{if(await k("¿Cambiar el rol de este usuario?","Cambiar permisos")){const a=await h.updateSharedUserRole(n.dataset.uid,n.value);a.success?c("✅ Rol actualizado","success"):c("❌ "+a.error,"error")}})}),e.querySelectorAll(".btn-remove-user").forEach(n=>{n.addEventListener("click",async()=>{var s;if(await k("¿Eliminar este usuario del sitio?","Quitar usuario")){const a=await h.removeSharedUser(n.dataset.uid);a.success?(c(a.message||"✅ Usuario eliminado","success"),(s=document.getElementById("share-device-btn"))==null||s.click()):c("❌ "+a.error,"error")}})}))}catch(t){console.error("Error cargando usuarios:",t),e.innerHTML='<p class="shared-list-message error">Error al cargar usuarios</p>'}}),(Ae=document.getElementById("close-share-modal"))==null||Ae.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),($e=document.getElementById("confirm-share"))==null||$e.addEventListener("click",async()=>{var s;if(!b){c("❌ No tienes permisos para compartir","error");return}const e=document.getElementById("share-email").value.trim(),t=document.getElementById("share-role").value;if(!e){c("⚠️ Ingresa un correo","error");return}const n=await h.shareDevice(e,t);n.success?(c("✅ "+n.message,"success"),document.getElementById("share-email").value="",(s=document.getElementById("share-device-btn"))==null||s.click()):c("❌ "+n.error,"error")}),(Me=document.getElementById("delete-device-btn"))==null||Me.addEventListener("click",async()=>{if(b){if(!await k("El módulo se desvinculará de todas las cuentas y quedará libre para asociarlo nuevamente.","Liberar sitio para todos")||!await k("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final"))return}else if(!await k("¿Quitar este sitio de tu cuenta? Los demás usuarios conservarán el acceso.","Quitar sitio"))return;const e=b?await h.deleteDeviceForAll():await h.removeDeviceFromMyAccount();e.success?(de(),c(b?"✅ Módulo liberado para todos":"✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>V(),1e3)):c("❌ "+e.error,"error")}),document.querySelectorAll(".modal-overlay").forEach(e=>{e.addEventListener("click",t=>{t.target===e&&(e.style.display="none")})});let Z=null;(Te=document.getElementById("close-wifi-modal"))==null||Te.addEventListener("click",()=>{document.getElementById("wifi-modal").style.display="none",Z&&(Z(),Z=null)});function an(){const e=p(u,`M/${m}/CONF/WF/ST`);Z=w(e,t=>{const n=t.exists()?t.val():{},s=document.getElementById("wifi-connected-name"),a=document.getElementById("wifi-connected-info");s&&(s.textContent=n.CONNECTED||"Sin conexión"),a&&(a.textContent=n.IP?`IP: ${n.IP} • ${n.RSSI||"--"} dBm`:"--")})}(ze=document.getElementById("scan-wifi-btn"))==null||ze.addEventListener("click",async()=>{const e=document.getElementById("wifi-networks"),t=document.getElementById("wifi-list");e.innerHTML='<p class="wifi-feedback">Buscando redes...</p>',t.style.display="block";try{await P(p(u,`M/${m}/CONF/WF/CMD`),{ACTION:"SCAN",STATUS:1,MSG:"Solicitando escaneo..."});const n=p(u,`M/${m}/CONF/WF/SCAN`),s=w(n,a=>{if(!a.exists())return;const i=a.val(),r=Object.entries(i).filter(([o])=>o!=="LAST");if(r.length===0){e.innerHTML='<p class="wifi-feedback">No se encontraron redes</p>';return}r.sort((o,l)=>Number(l[1])-Number(o[1])),e.innerHTML=r.map(([o,l])=>{const d=Number(l),f=d>-60?"signal_wifi_4_bar":d>-75?"network_wifi_3_bar":"network_wifi_2_bar";return`
                    <div class="wifi-network" data-ssid="${g(o)}">
                        <span class="material-symbols-outlined">${f}</span>
                        <div class="wifi-network-info">
                            <p class="wifi-network-ssid">${g(o)}</p>
                            <p class="wifi-network-signal">${d} dBm</p>
                        </div>
                    </div>
                `}).join(""),e.querySelectorAll(".wifi-network").forEach(o=>{o.addEventListener("click",()=>{const l=o.dataset.ssid;document.getElementById("wifi-selected-ssid").textContent=l,document.getElementById("wifi-form").style.display="block",document.getElementById("wifi-password").value="",document.getElementById("wifi-password").focus()})})});setTimeout(()=>{s&&s()},15e3)}catch(n){console.error("Error escaneando:",n),e.innerHTML='<p class="wifi-feedback error">Error al escanear</p>'}}),(Pe=document.getElementById("cancel-wifi-connect"))==null||Pe.addEventListener("click",()=>{document.getElementById("wifi-form").style.display="none"}),(De=document.getElementById("connect-wifi-btn"))==null||De.addEventListener("click",async()=>{const e=document.getElementById("wifi-selected-ssid").textContent,t=document.getElementById("wifi-password").value,n=document.getElementById("wifi-target").value,s=document.getElementById("wifi-error");if(!t){s.textContent="⚠️ Ingresa la contraseña";return}s.textContent="";try{await P(p(u,`M/${m}/CONF/WF/CMD`),{ACTION:"CHANGE",TARGET:n,SSID:e,PASS:t,STATUS:1,MSG:"Solicitando cambio de red..."}),c("📡 Solicitud enviada. El ESP32 se conectará en breve.","info"),document.getElementById("wifi-form").style.display="none",document.getElementById("wifi-list").style.display="none";const a=p(u,`M/${m}/CONF/WF/CMD`),i=w(a,r=>{if(!r.exists())return;const o=r.val();o.STATUS===3?(c("✅ "+(o.MSG||"Conectado exitosamente"),"success"),i()):o.STATUS===2&&c("🔄 Conectando...","info")});setTimeout(()=>i(),3e4)}catch(a){console.error("Error conectando:",a),s.textContent="❌ Error al enviar solicitud"}}),window.addEventListener("wifiModalReady",()=>{an()},{once:!0});const de=()=>{A.forEach(e=>{typeof e=="function"&&e()}),D.forEach(e=>{typeof e=="function"&&e()}),B&&(B(),B=null),N&&(N(),N=null),L&&(L(),L=null),_e()};(Re=document.getElementById("back-to-dashboard"))==null||Re.addEventListener("click",()=>{de(),V()}),setTimeout(()=>{var t;const e=document.getElementById("dsc-loading-overlay");e&&!R&&(R=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),en()}export{pn as openAlarmDscView};
