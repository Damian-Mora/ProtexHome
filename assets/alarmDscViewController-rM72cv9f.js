const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Dnf7e_sP.js","assets/index-FEi-vLt_.css"])))=>i.map(i=>d[i]);
import{d as tn,k as Pe,e as an,g as sn,r as p,o as f,b as l,u as T,a as _e,f as z,s as L,_ as on}from"./index-Dnf7e_sP.js";import{D as rn}from"./deviceController-BjF83n_k.js";const cn=`<!-- Vista Alarma DSC -->\r
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
                        <button class="settings-btn manager-only" id="share-device-btn" type="button">\r
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
</div>`;async function mn(b,m,W,V){var ce,le,de,me,ue,pe,ve,ge,be,ye,fe,Ee,he,we,Ie,Be,Ce,Ne,Le,ke,xe,Se,Ae,$e,Me,Te,ze,De;const Re=document.getElementById("main-content");Re.innerHTML=cn;const E=new rn(b,m),k=await E.loadDeviceData();if(!k){await tn("No se encontró el dispositivo solicitado.","Dispositivo no encontrado"),Pe();return}an(m,"device");const Z=await E.getUserRole(),h=Z==="PRO"||Z==="ADM",Fe=(b==null?void 0:b.name)||(b==null?void 0:b.displayName)||(b==null?void 0:b.email)||"Usuario";document.getElementById("device-name").textContent=k.name,document.getElementById("info-serial").textContent=k.serial,document.getElementById("info-role").textContent=Z;const G=e=>{const t=document.getElementById("device-status-badge"),n=t==null?void 0:t.querySelector(".status-dot"),a=t==null?void 0:t.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),a&&(a.textContent=e==="online"?"En línea":"Sin conexión")};G(k.status);const x=[],Oe=E.listenOnlineStatus(G);x.push(Oe);const u=sn();let S=0;const Ze=p(u,`P/${m}/L`),He=f(Ze,e=>{S=e.exists()?Number(e.val()):0,console.log(`📶 P/${m}/L = ${S}`)});x.push(He);let Q={};const qe=p(u,`M/${m}/X/D`),Ue=f(qe,e=>{Q=e.exists()?e.val():{}});x.push(Ue);let v=1,D=[];const w=[];let P=!1;function X(){const e=document.getElementById("partition-select"),t=document.getElementById("partition-selector-container");e.innerHTML="",w.forEach(n=>{const a=document.createElement("option");a.value=n,a.textContent=`Partición ${n}`,n===v&&(a.selected=!0),e.appendChild(a)}),w.length<=1?(t.style.display="none",v=w[0]||1):(t.style.display="flex",w.includes(v)||(v=w[0],e.value=v)),K(),Y(),P||(P=!0,setTimeout(()=>{var a;const n=document.getElementById("dsc-loading-overlay");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),400)),(a=document.getElementById("dsc-content"))==null||a.classList.add("ready")},1500))}function K(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${v}`)}function Y(){D.forEach(n=>{typeof n=="function"&&n()}),D=[];const e=p(u,`P/${m}/E${v}`),t=f(e,n=>{const a=n.exists()?Number(n.val()):0;Ve(a)});D.push(t)}const je=p(u,`P/${m}`),We=f(je,e=>{if(!e.exists()){w.length=0,X();return}const t=e.val();w.length=0;for(let n=1;n<=8;n++)t[`P${n}`]===2&&w.push(n);X()});x.push(We),(ce=document.getElementById("partition-select"))==null||ce.addEventListener("change",e=>{v=Number(e.target.value),K(),Y(),q(),U()});function Ve(e){J=Number(e);const t=document.getElementById("partition-state"),n=document.getElementById("partition-status-icon"),a=document.getElementById("partition-status-icon-glyph"),s=document.getElementById("btn-arm-away"),i=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),o={0:{text:"Desconocido",icon:"help",className:"disarmed"},1:{text:"Listo para armar",icon:"check_circle",className:"ready"},2:{text:"Listo con zonas abiertas",icon:"error",className:"not-ready"},3:{text:"No listo",icon:"error",className:"not-ready"},4:{text:"Armado en Casa",icon:"lock",className:"armed"},5:{text:"Armado Ausente",icon:"lock",className:"armed"},6:{text:"Armado sin entrada",icon:"lock",className:"armed"},9:{text:"Armado sin entrada",icon:"lock",className:"armed"},22:{text:"Armado sin entrada",icon:"lock",className:"armed"},7:{text:"Falla al armar",icon:"error",className:"not-ready"},8:{text:"Tiempo de salida",icon:"schedule",className:"pending"},11:{text:"Salida rápida",icon:"schedule",className:"pending"},12:{text:"Retardo de entrada",icon:"schedule",className:"pending"},13:{text:"Retardo después de alarma",icon:"schedule",className:"pending"},17:{text:"Área en alarma",icon:"warning",className:"armed"},18:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},21:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},25:{text:"Memoria de alarma",icon:"history",className:"disarmed"}},c=o[e]||o[0];t&&(t.textContent=c.text),a&&(a.textContent=c.icon),n&&(n.className=`partition-status-icon ${c.className}`),Ge(e,s,i,r)}function Ge(e,t,n,a){if(t.disabled=!1,n.disabled=!1,a.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(t.classList.add("blink"),n.classList.add("blink")):(t.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(t.disabled=!1,n.disabled=!1,a.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(t.disabled=!0,n.disabled=!0,a.disabled=!1),[8,11].includes(e)||(t.classList.remove("blink"),n.classList.remove("blink"))}let J=0;function Qe(){return[4,5,6,9,17,18,21,22].includes(J)}async function _(e,t={}){const{toggleBase:n=4,zone:a=null}=t;if(!S||S<=0)return l("⚠️ El módulo no está en línea","error"),console.warn(`⛔ Comando bloqueado: P/${m}/L = ${S}`),!1;let s=Q;try{const d=await _e(p(u,`M/${m}/X/D`));s=d.exists()?d.val():{}}catch(d){console.warn("⚠️ No se pudo releer X/D, usando cache:",d)}const i=n*10+n,o=(Number(s.L)||n)===n?i:n,c={A:Number(v),C:Number(e),D:Number(s.D??0),L:Number(o),N:Fe,V:s.V??0,Z:Number(a!==null?a:s.Z??0)};try{return await T(p(u,`M/${m}/X/D`),c),!0}catch{return l("❌ Error al enviar comando","error"),!1}}let A=null;function Xe(e,t){const a=i=>{i.target.closest(".btn-bypass")||(e.classList.add("pressing"),A=setTimeout(()=>{A=null,e.classList.remove("pressing"),navigator.vibrate&&navigator.vibrate(50),t()},600))},s=()=>{A&&(clearTimeout(A),A=null),e.classList.remove("pressing")};e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",s),e.addEventListener("touchmove",s),e.addEventListener("touchcancel",s),e.addEventListener("mousedown",a),e.addEventListener("mouseup",s),e.addEventListener("mouseleave",s)}function Ke(e){if(!e)return;const t=$[e]||{},n=t.A===v&&t.N?t.N:`Zona ${e}`,a=String(e).padStart(2,"0");let s=document.getElementById("zone-action-sheet");s||(s=document.createElement("div"),s.id="zone-action-sheet",s.className="action-sheet-overlay",s.innerHTML=`
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
    `,document.body.appendChild(s),s.addEventListener("click",i=>{i.target===s&&H()})),s.querySelector("#action-sheet-title").textContent=`Zona ${a} · ${n}`,s.querySelector("#action-edit-name").onclick=()=>{H(),setTimeout(()=>ne(e),150)},s.querySelector("#action-cancel").onclick=H,s.style.display="flex"}function H(){const e=document.getElementById("zone-action-sheet");e&&(e.style.display="none")}let B=null,C=null,ee={},$={},R=null,F="";function Ye({accion:e,zoneNumber:t,nombre:n}){return new Promise(a=>{const s=e==="anular",i=document.createElement("div");i.className="confirm-modal-overlay",i.innerHTML=`
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
        `,document.body.appendChild(i);const r=i.querySelector("#confirm-cancel"),o=i.querySelector("#confirm-ok"),c=d=>{i.style.opacity="0",setTimeout(()=>{i.remove(),a(d)},200)};r.addEventListener("click",()=>c(!1)),o.addEventListener("click",()=>c(!0)),i.addEventListener("click",d=>{d.target===i&&c(!1)}),i.addEventListener("keydown",d=>{d.key==="Escape"&&c(!1)}),setTimeout(()=>r.focus(),150)})}function Je(){B&&(B(),B=null),C&&(C(),C=null);const e=p(u,`M/${m}/W/Z`);B=f(e,n=>{ee=n.exists()?n.val():{},q()});const t=p(u,`M/${m}/W/NZ`);C=f(t,n=>{$=n.exists()?n.val():{},q()})}function q(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(ee||{}).filter(([a,s])=>s.A===v&&s.E!==void 0);if(n.length===0){e.innerHTML='<p class="empty-state-message">Sin zonas configuradas para esta partición</p>';return}n.sort((a,s)=>Number(a[0])-Number(s[0])),e.innerHTML=n.map(([a,s])=>{const i=$[a]||{},r=i.A===v&&i.N?i.N:`Zona ${a}`,o=Number(s.E)===1,c=Number(s.B)===1,d=String(a).padStart(2,"0");let g,y,I;return c?(g="Anulada",y="zone-bypassed",I="block"):o?(g="Abierta",y="zone-open",I="door_open"):(g="Cerrada",y="zone-closed",I="door_front"),`
      <div class="zone-item ${y}" data-zone-id="${a}">
        <div class="zone-info">
          <span class="zone-icon">
            <span class="material-symbols-outlined">${I}</span>
          </span>
          <div class="zone-copy">
            <p class="zone-heading">
              <span>Zona ${d}</span>
              <span class="zone-state">
                ${g}
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
    `}).join(""),e.querySelectorAll(".btn-bypass").forEach(a=>{a.addEventListener("click",async s=>{s.stopPropagation();const i=a.dataset.zone,r=Number(a.dataset.currentBypass),o=$[i]||{},c=o.A===v&&o.N?o.N:`Zona ${i}`,d=String(i).padStart(2,"0"),g=r===1?"restaurar":"anular";if(Qe()){l("🔒 No se puede anular con el sistema armado","error"),console.warn("⛔ Anulación bloqueada: partición armada");return}if(!await Ye({accion:g,zoneNumber:d,nombre:c}))return;await _(W,{toggleBase:3,zone:i})&&l(g==="anular"?"✅ Solicitud de anulación enviada":"✅ Solicitud de restauración enviada","success")})}),e.querySelectorAll(".zone-item").forEach(a=>{Xe(a,()=>{Ke(a.dataset.zoneId)})}),window.editZone=ne}function ne(e){if(!e)return;R=e;const t=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),a=document.getElementById("save-zone-name-btn"),s=$[e]||{};F=s.A===v&&s.N?s.N:"",n.value=F,a.style.display="none";const i=()=>{const r=n.value.trim(),o=r!==F&&r.length>0;a.style.display=o?"flex":"none"};n.addEventListener("input",i),t._cleanupListener=()=>n.removeEventListener("input",i),t.style.display="flex",n.focus(),n.select(),setTimeout(i,50)}function M(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",R=null,document.getElementById("save-zone-name-btn").style.display="none"}async function te(){if(!R)return;const t=document.getElementById("edit-zone-name-input").value.trim();if(!t){l("⚠️ El nombre no puede estar vacío","error");return}if(t===F){l("ℹ️ El nombre no ha cambiado","info"),M();return}try{await T(p(u,`M/${m}/W/NZ/${R}`),{A:v,N:t}),l("✅ Nombre actualizado correctamente","success"),M()}catch(n){console.error("Error al guardar nombre:",n),l("❌ Error al guardar el nombre","error")}}(le=document.getElementById("save-zone-name-btn"))==null||le.addEventListener("click",te),(de=document.getElementById("close-zone-modal"))==null||de.addEventListener("click",M),(me=document.getElementById("edit-zone-modal"))==null||me.addEventListener("click",e=>{e.target===e.currentTarget&&M()}),(ue=document.getElementById("edit-zone-name-input"))==null||ue.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();const t=document.getElementById("save-zone-name-btn");getComputedStyle(t).display!=="none"&&te()}e.key==="Escape"&&M()});let N=null,ae={};function en(){N&&(N(),N=null);const e=p(u,`M/${m}/H`);N=f(e,t=>{ae=t.exists()?t.val():{},U()})}function U(){const e=document.getElementById("history-list");if(!e)return;const n=Object.entries(ae||[]).filter(([i,r])=>r.A===v||r.A===9);if(n.length===0){e.innerHTML='<p class="empty-state-message">No hay eventos para esta partición</p>';return}n.sort((i,r)=>{const[o,c]=i,[d,g]=r,y=new Date(c.F.replace(/\//g,"-").replace(" ","T")+":00"),I=new Date(g.F.replace(/\//g,"-").replace(" ","T")+":00");return I-y!==0?I-y:d.localeCompare(o)});function a(i){const r=i.E,o=i.D||0,c=i.N||"Usuario",d=String(o).padStart(2,"0");switch(r){case 1:return`Alarma en Zona ${d}`;case 2:return`Restauración de alarma en Zona ${d}`;case 3:return`Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[o]||`Falla (código ${o})`}`;case 4:return`Restauración de falla: ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[o]||`Falla restaurada (código ${o})`}`;case 5:return`Apertura por usuario ${d} (${c})`;case 6:return`Cierre por usuario ${d} (${c})`;case 7:return`${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[o]||`Alarma (código ${o})`}`;default:return`Evento ${r}`}}function s(i){const r=Number(i.E),o=Number(i.D)||0;switch(r){case 1:return{className:"dsc-event-alarm",icon:"warning"};case 2:return{className:"dsc-event-restored",icon:"check_circle"};case 3:return{className:"dsc-event-fault",icon:"error"};case 4:return{className:"dsc-event-fault-restored",icon:"restart_alt"};case 5:return{className:"dsc-event-open",icon:"lock_open"};case 6:return{className:"dsc-event-closed",icon:"lock"};case 7:return o===0?{className:"dsc-event-fire",icon:"local_fire_department"}:o===1?{className:"dsc-event-medical",icon:"medical_services"}:o===2?{className:"dsc-event-panic",icon:"warning"}:{className:"dsc-event-alarm",icon:"warning"};default:return{className:"dsc-event-neutral",icon:"info"}}}e.innerHTML=n.map(([i,r])=>{const o=s(r),c=a(r),d=r.F||"";return`
            <div class="history-item dsc-event ${o.className}">
                <div class="history-icon">
                    <span class="material-symbols-outlined">${o.icon}</span>
                </div>
                <div class="history-info">
                    <p class="history-text">
                        ${c}
                    </p>
                    <p class="history-meta">${d}</p>
                </div>
            </div>
        `}).join("")}en();function j(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").classList.toggle("active",e==="zonas"),document.getElementById("panel-historial").classList.toggle("active",e==="historial"),e==="historial"&&U()}setTimeout(()=>{j("historial")},100),(pe=document.getElementById("tab-zonas"))==null||pe.addEventListener("click",()=>j("zonas")),(ve=document.getElementById("tab-historial"))==null||ve.addEventListener("click",()=>j("historial")),(ge=document.getElementById("btn-arm-away"))==null||ge.addEventListener("click",async()=>{await _(-5)&&l("🔒 Comando Armado Ausente enviado","success")}),(be=document.getElementById("btn-arm-home"))==null||be.addEventListener("click",async()=>{await _(-4)&&l("🏠 Comando Armado En Casa enviado","success")}),(ye=document.getElementById("btn-disarm"))==null||ye.addEventListener("click",async()=>{await _(W)&&l("🔓 Comando Desarmado enviado","success")});const se=document.getElementById("danger-section");se&&(se.style.display="block");const ie=document.getElementById("share-device-btn");ie&&(ie.style.display=h?"flex":"none"),h?(document.getElementById("delete-device-title").textContent="Liberar sitio para todos",document.getElementById("delete-device-subtitle").textContent="Desvincular el módulo de todas las cuentas"):(document.getElementById("delete-device-title").textContent="Quitar sitio de mi cuenta",document.getElementById("delete-device-subtitle").textContent="Los demás usuarios conservarán el acceso");const oe=document.getElementById("current-device-name");oe&&(oe.textContent=k.name),(fe=document.getElementById("device-menu-btn"))==null||fe.addEventListener("click",()=>{const e=document.getElementById("current-device-name");e&&(e.textContent=document.getElementById("device-name").textContent),document.getElementById("device-settings-modal").style.display="flex"}),(Ee=document.getElementById("close-settings-modal"))==null||Ee.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(he=document.getElementById("open-change-name-btn"))==null||he.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none";const e=document.getElementById("change-name-input"),t=document.getElementById("device-name").textContent;e.value=t,e.dataset.original=t,document.getElementById("change-name-error").textContent="",document.getElementById("change-name-modal").style.display="flex",setTimeout(()=>{e.focus(),e.select()},150)}),(we=document.getElementById("close-change-name-modal"))==null||we.addEventListener("click",()=>{document.getElementById("change-name-modal").style.display="none"}),(Ie=document.getElementById("save-change-name-btn"))==null||Ie.addEventListener("click",async()=>{const e=document.getElementById("change-name-input"),t=document.getElementById("change-name-error"),n=e.value.trim();if(!n){t.textContent="⚠️ El nombre no puede estar vacío";return}if(n===e.dataset.original){t.textContent="ℹ️ El nombre no ha cambiado";return}try{await T(p(u,`US/${b.uid}/M/${m}`),{N:n}),document.getElementById("device-name").textContent=n;const a=document.getElementById("current-device-name");a&&(a.textContent=n),document.getElementById("change-name-modal").style.display="none",l("✅ Nombre actualizado","success")}catch(a){console.error("Error actualizando nombre:",a),t.textContent="❌ Error al guardar. Intenta de nuevo."}}),(Be=document.getElementById("change-name-input"))==null||Be.addEventListener("keydown",e=>{var t;e.key==="Enter"&&((t=document.getElementById("save-change-name-btn"))==null||t.click()),e.key==="Escape"&&(document.getElementById("change-name-modal").style.display="none")}),(Ce=document.getElementById("change-pin-btn"))==null||Ce.addEventListener("click",async()=>{document.getElementById("device-settings-modal").style.display="none";let e=null;try{const t=await _e(p(u,`US/${b.uid}/M/${m}/C`));e=t.exists()?t.val():null}catch(t){console.error("Error leyendo clave:",t),l("❌ No se pudo leer la clave","error");return}window.dispatchEvent(new CustomEvent("openChangePinModal",{detail:{serial:m,currentKey:e}}))}),(Ne=document.getElementById("change-wifi-btn"))==null||Ne.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none",window.dispatchEvent(new CustomEvent("openWifiModal",{detail:{serial:m}}))}),(Le=document.getElementById("share-device-btn"))==null||Le.addEventListener("click",async()=>{if(!h){l("❌ No tienes permisos para compartir","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const e=document.getElementById("shared-list");e.innerHTML='<p class="shared-list-message">Cargando...</p>';try{const t=await E.loadSharedUsers();t.length===0?e.innerHTML='<p class="shared-list-message">No has compartido este sitio</p>':(e.innerHTML=t.map(n=>`
                <div class="shared-user-row">
                    <div class="shared-user-info">
                        <p class="shared-user-name">${z(n.name)}</p>
                        <p class="shared-user-email">${z(n.email)}</p>
                    </div>
                    <select class="role-select" data-uid="${z(n.uid)}">
                        <option value="INV" ${n.role==="INV"?"selected":""}>Invitado</option>
                        <option value="ADM" ${n.role==="ADM"?"selected":""}>Admin</option>
                    </select>
                    <button class="btn-remove-user" data-uid="${z(n.uid)}" aria-label="Eliminar ${z(n.name)}" title="Eliminar usuario">🗑️</button>
                </div>
            `).join(""),h&&e.querySelectorAll(".role-select").forEach(n=>{n.addEventListener("change",async a=>{if(await L("¿Cambiar el rol de este usuario?","Cambiar permisos")){const s=await E.updateSharedUserRole(n.dataset.uid,n.value);s.success?l("✅ Rol actualizado","success"):l("❌ "+s.error,"error")}})}),e.querySelectorAll(".btn-remove-user").forEach(n=>{n.addEventListener("click",async()=>{var a;if(await L("¿Eliminar este usuario del sitio?","Quitar usuario")){const s=await E.removeSharedUser(n.dataset.uid);s.success?(l("✅ Usuario eliminado","success"),(a=document.getElementById("share-device-btn"))==null||a.click()):l("❌ "+s.error,"error")}})}))}catch(t){console.error("Error cargando usuarios:",t),e.innerHTML='<p class="shared-list-message error">Error al cargar usuarios</p>'}}),(ke=document.getElementById("close-share-modal"))==null||ke.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(xe=document.getElementById("confirm-share"))==null||xe.addEventListener("click",async()=>{var a;if(!h){l("❌ No tienes permisos para compartir","error");return}const e=document.getElementById("share-email").value.trim(),t=document.getElementById("share-role").value;if(!e){l("⚠️ Ingresa un correo","error");return}const n=await E.shareDevice(e,t);n.success?(l("✅ "+n.message,"success"),document.getElementById("share-email").value="",(a=document.getElementById("share-device-btn"))==null||a.click()):l("❌ "+n.error,"error")}),(Se=document.getElementById("unsubscribe-btn"))==null||Se.addEventListener("click",async()=>{if(!await L("¿Desactivar las notificaciones de este sitio?","Desactivar notificaciones"))return;const{unsubscribeFromSerial:e}=await on(async()=>{const{unsubscribeFromSerial:n}=await import("./index-Dnf7e_sP.js").then(a=>a.n);return{unsubscribeFromSerial:n}},__vite__mapDeps([0,1])),t=await e(m);t.success?(l("✅ Notificaciones desactivadas","success"),document.getElementById("device-settings-modal").style.display="none"):l("❌ "+(t.error||"Error al desactivar"),"error")}),(Ae=document.getElementById("delete-device-btn"))==null||Ae.addEventListener("click",async()=>{if(h){if(!await L("El módulo se desvinculará de todas las cuentas y quedará libre para asociarlo nuevamente.","Liberar sitio para todos")||!await L("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final"))return}else if(!await L("¿Quitar este sitio de tu cuenta? Los demás usuarios conservarán el acceso.","Quitar sitio"))return;const e=h?await E.deleteDeviceForAll():await E.removeDeviceFromMyAccount();e.success?(re(),l(h?"✅ Módulo liberado para todos":"✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>V(),1e3)):l("❌ "+e.error,"error")}),document.querySelectorAll(".modal-overlay").forEach(e=>{e.addEventListener("click",t=>{t.target===e&&(e.style.display="none")})});let O=null;($e=document.getElementById("close-wifi-modal"))==null||$e.addEventListener("click",()=>{document.getElementById("wifi-modal").style.display="none",O&&(O(),O=null)});function nn(){const e=p(u,`M/${m}/CONF/WF/ST`);O=f(e,t=>{const n=t.exists()?t.val():{},a=document.getElementById("wifi-connected-name"),s=document.getElementById("wifi-connected-info");a&&(a.textContent=n.CONNECTED||"Sin conexión"),s&&(s.textContent=n.IP?`IP: ${n.IP} • ${n.RSSI||"--"} dBm`:"--")})}(Me=document.getElementById("scan-wifi-btn"))==null||Me.addEventListener("click",async()=>{const e=document.getElementById("wifi-networks"),t=document.getElementById("wifi-list");e.innerHTML='<p class="wifi-feedback">Buscando redes...</p>',t.style.display="block";try{await T(p(u,`M/${m}/CONF/WF/CMD`),{ACTION:"SCAN",STATUS:1,MSG:"Solicitando escaneo..."});const n=p(u,`M/${m}/CONF/WF/SCAN`),a=f(n,s=>{if(!s.exists())return;const i=s.val(),r=Object.entries(i).filter(([o])=>o!=="LAST");if(r.length===0){e.innerHTML='<p class="wifi-feedback">No se encontraron redes</p>';return}r.sort((o,c)=>Number(c[1])-Number(o[1])),e.innerHTML=r.map(([o,c])=>{const d=Number(c),g=d>-60?"signal_wifi_4_bar":d>-75?"network_wifi_3_bar":"network_wifi_2_bar";return`
                    <div class="wifi-network" data-ssid="${o}">
                        <span class="material-symbols-outlined">${g}</span>
                        <div class="wifi-network-info">
                            <p class="wifi-network-ssid">${o}</p>
                            <p class="wifi-network-signal">${d} dBm</p>
                        </div>
                    </div>
                `}).join(""),e.querySelectorAll(".wifi-network").forEach(o=>{o.addEventListener("click",()=>{const c=o.dataset.ssid;document.getElementById("wifi-selected-ssid").textContent=c,document.getElementById("wifi-form").style.display="block",document.getElementById("wifi-password").value="",document.getElementById("wifi-password").focus()})})});setTimeout(()=>{a&&a()},15e3)}catch(n){console.error("Error escaneando:",n),e.innerHTML='<p class="wifi-feedback error">Error al escanear</p>'}}),(Te=document.getElementById("cancel-wifi-connect"))==null||Te.addEventListener("click",()=>{document.getElementById("wifi-form").style.display="none"}),(ze=document.getElementById("connect-wifi-btn"))==null||ze.addEventListener("click",async()=>{const e=document.getElementById("wifi-selected-ssid").textContent,t=document.getElementById("wifi-password").value,n=document.getElementById("wifi-target").value,a=document.getElementById("wifi-error");if(!t){a.textContent="⚠️ Ingresa la contraseña";return}a.textContent="";try{await T(p(u,`M/${m}/CONF/WF/CMD`),{ACTION:"CHANGE",TARGET:n,SSID:e,PASS:t,STATUS:1,MSG:"Solicitando cambio de red..."}),l("📡 Solicitud enviada. El ESP32 se conectará en breve.","info"),document.getElementById("wifi-form").style.display="none",document.getElementById("wifi-list").style.display="none";const s=p(u,`M/${m}/CONF/WF/CMD`),i=f(s,r=>{if(!r.exists())return;const o=r.val();o.STATUS===3?(l("✅ "+(o.MSG||"Conectado exitosamente"),"success"),i()):o.STATUS===2&&l("🔄 Conectando...","info")});setTimeout(()=>i(),3e4)}catch(s){console.error("Error conectando:",s),a.textContent="❌ Error al enviar solicitud"}}),window.addEventListener("wifiModalReady",()=>{nn()},{once:!0});const re=()=>{x.forEach(e=>{typeof e=="function"&&e()}),D.forEach(e=>{typeof e=="function"&&e()}),B&&(B(),B=null),C&&(C(),C=null),N&&(N(),N=null),Pe()};(De=document.getElementById("back-to-dashboard"))==null||De.addEventListener("click",()=>{re(),V()}),setTimeout(()=>{var t;const e=document.getElementById("dsc-loading-overlay");e&&!P&&(P=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),Je()}export{mn as openAlarmDscView};
