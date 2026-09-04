import{D as ve,H as be}from"./historyController-WS-GNibk.js";import{e as Y,b as fe,g as ge,r as m,o as C,f as L,s as p,u as he}from"./index-Rw0hZkkS.js";const Ee=`<!-- Vista Alarma DSC -->\r
\r
<!-- OVERLAY DE CARGA (SPINNER) con ESTILOS INLINE para garantizar que se vea -->\r
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
  gap: 20px;\r
  z-index: 99999;\r
  transition: opacity 0.4s ease;\r
">\r
  <div class="spinner" style="\r
    width: 48px;\r
    height: 48px;\r
    border: 4px solid #e0e0e0;\r
    border-top: 4px solid #007bff;\r
    border-radius: 50%;\r
    animation: spin 0.8s linear infinite;\r
  "></div>\r
  <p style="color: #333; font-size: 1rem; font-weight: 500; margin: 0;">Cargando alarma DSC...</p>\r
</div>\r
\r
<!-- Definición de la animación -->\r
<style>\r
  @keyframes spin {\r
    to { transform: rotate(360deg); }\r
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
            <span class="dsc-led" id="partition-led"></span>\r
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
        <!-- Pestañas Zonas / Historial -->\r
        <div class="dsc-tabs">\r
            <button class="dsc-tab active" id="tab-zonas">Zonas</button>\r
            <button class="dsc-tab" id="tab-historial">Historial</button>\r
        </div>\r
\r
        <!-- Contenedor de Zonas -->\r
        <div id="panel-zonas" class="dsc-panel">\r
            <div id="zones-list" class="zones-list">\r
                <p style="color:var(--text-light);text-align:center;">Cargando zonas...</p>\r
            </div>\r
        </div>\r
\r
        <!-- Contenedor de Historial -->\r
        <div id="panel-historial" class="dsc-panel" style="display:none;">\r
            <div id="history-list" class="history-list">\r
                <p style="color:var(--text-light);text-align:center;">Cargando historial...</p>\r
            </div>\r
        </div>\r
    </div>\r
\r
    <!-- Modal Configuración (existente) -->\r
    <div class="modal-overlay" id="device-settings-modal" style="display:none;">\r
        <div class="modal-content">\r
            <h3>Configuración</h3>\r
            <div class="modal-input-group">\r
                <label>Nombre del dispositivo</label>\r
                <input type="text" id="edit-device-name" class="modal-input">\r
            </div>\r
            <div class="device-info-mini">\r
                <p><strong>Serial:</strong> <span id="info-serial">--</span></p>\r
                <p><strong>Tipo:</strong> Alarma DSC</p>\r
                <p><strong>Rol:</strong> <span id="info-role">--</span></p>\r
            </div>\r
            <button class="modal-btn primary" id="save-device-name">\r
                <span class="material-symbols-outlined">save</span>\r
                Guardar Cambios\r
            </button>\r
            <button class="modal-btn" id="share-device-btn">\r
                <span class="material-symbols-outlined">share</span>\r
                Compartir Sitio\r
            </button>\r
            <button class="modal-btn" id="unsubscribe-btn">\r
                <span class="material-symbols-outlined">notifications_off</span>\r
                Quitar notificaciones\r
            </button>\r
            <button class="modal-btn danger" id="delete-device-btn">\r
                <span class="material-symbols-outlined">delete_forever</span>\r
                Eliminar Dispositivo\r
            </button>\r
            <button class="modal-btn cancel" id="close-settings-modal">Cancelar</button>\r
        </div>\r
    </div>\r
\r
    <!-- Modal Compartir (existente) -->\r
    <div class="modal-overlay" id="share-modal" style="display:none;">\r
        <div class="modal-content">\r
            <h3>Compartir Sitio</h3>\r
            <div id="shared-list" style="margin-bottom:15px;max-height:200px;overflow-y:auto;">\r
                <p style="color:var(--text-light);text-align:center;">Cargando...</p>\r
            </div>\r
            <div style="border-top:1px solid var(--border-color);padding-top:12px;margin-top:5px;">\r
                <input type="email" id="share-email" placeholder="correo@ejemplo.com" class="modal-input">\r
                <select id="share-role" class="modal-input">\r
                    <option value="INV">Invitado (solo ver)</option>\r
                    <option value="ADM">Administrador (control total)</option>\r
                </select>\r
                <button class="modal-btn primary" id="confirm-share">\r
                    <span class="material-symbols-outlined">person_add</span>\r
                    Compartir\r
                </button>\r
            </div>\r
            <button class="modal-btn cancel" id="close-share-modal">Cerrar</button>\r
        </div>\r
    </div>\r
\r
    <!-- ========== NUEVO MODAL PARA EDITAR NOMBRE DE ZONA ========== -->\r
    <div class="modal-overlay" id="edit-zone-modal" style="display:none;">\r
        <div class="modal-content">\r
            <h3>Editar nombre de zona</h3>\r
            <div class="modal-input-group">\r
                <label>Nombre de la zona</label>\r
                <input type="text" id="edit-zone-name-input" class="modal-input" placeholder="Ej: Puerta principal">\r
            </div>\r
            <div style="display:flex; gap:10px; margin-top:15px;">\r
                <button class="modal-btn primary" id="save-zone-name-btn">\r
                    <span class="material-symbols-outlined">save</span>\r
                    Guardar\r
                </button>\r
                <button class="modal-btn cancel" id="close-zone-modal">Cancelar</button>\r
            </div>\r
        </div>\r
    </div>\r
\r
</div>`;async function Ie(J,i,K){var O,_,H,V,U,j,q,W,G,F,Q;const X=document.getElementById("main-content");X.innerHTML=Ee;const w=new ve(J,i),f=await w.loadDeviceData();if(!f){alert("Dispositivo no encontrado"),Y();return}fe(i,"device");const N=await w.getUserRole(),ee=N==="PRO"||N==="ADM";document.getElementById("device-name").textContent=f.name,document.getElementById("info-serial").textContent=f.serial,document.getElementById("edit-device-name").value=f.name,document.getElementById("info-role").textContent=N;const A=e=>{const t=document.getElementById("device-status-badge"),n=t==null?void 0:t.querySelector(".status-dot"),a=t==null?void 0:t.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),a&&(a.textContent=e==="online"?"En línea":"Sin conexión")};A(f.status);const h=[],ne=w.listenOnlineStatus(A);h.push(ne);const E=new be(i),te=await E.loadHistory(20),$=ee;E.renderHistory(te,"history-list",$);const ae=E.listenNewEvents(e=>{E.renderHistory(e,"history-list",$)});h.push(ae);const l=ge();let o=1,x=[];const u=[];let B=!1;function k(){const e=document.getElementById("partition-select"),t=document.getElementById("partition-selector-container");e.innerHTML="",u.forEach(n=>{const a=document.createElement("option");a.value=n,a.textContent=`Partición ${n}`,n===o&&(a.selected=!0),e.appendChild(a)}),u.length<=1?(t.style.display="none",o=u[0]||1):(t.style.display="flex",u.includes(o)||(o=u[0],e.value=o)),S(),M(),B||(B=!0,setTimeout(()=>{var a;const n=document.getElementById("dsc-loading-overlay");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),400)),(a=document.getElementById("dsc-content"))==null||a.classList.add("ready")},1500))}function S(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${o}`)}function M(){x.forEach(n=>{typeof n=="function"&&n()}),x=[];const e=m(l,`P/${i}/E${o}`),t=C(e,n=>{const a=n.exists()?Number(n.val()):0;ie(a)});x.push(t)}const se=m(l,`P/${i}`),oe=C(se,e=>{if(!e.exists()){u.length=0,k();return}const t=e.val();u.length=0;for(let n=1;n<=8;n++)t[`P${n}`]===2&&u.push(n);k()});h.push(oe),(O=document.getElementById("partition-select"))==null||O.addEventListener("change",e=>{o=Number(e.target.value),S(),M(),P()});function ie(e){const t=document.getElementById("partition-state"),n=document.getElementById("partition-led"),a=document.getElementById("btn-arm-away"),s=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),d={0:{text:"Desconocido",led:"dsc-led disarmed"},1:{text:"Listo para armar",led:"dsc-led ready"},2:{text:"Listo con zonas abiertas",led:"dsc-led not-ready"},3:{text:"No listo",led:"dsc-led not-ready"},4:{text:"Armado en Casa",led:"dsc-led armed-home"},5:{text:"Armado Ausente",led:"dsc-led armed-away"},6:{text:"Armado sin entrada",led:"dsc-led armed-away"},9:{text:"Armado sin entrada",led:"dsc-led armed-away"},22:{text:"Armado sin entrada",led:"dsc-led armed-away"},7:{text:"Falla al armar",led:"dsc-led not-ready"},8:{text:"Tiempo de salida",led:"dsc-led armed-away"},11:{text:"Salida rápida",led:"dsc-led armed-away"},12:{text:"Retardo de entrada",led:"dsc-led armed-home"},13:{text:"Retardo después de alarma",led:"dsc-led armed-home"},17:{text:"Área en alarma",led:"dsc-led not-ready"},18:{text:"Armado con zonas anuladas",led:"dsc-led armed-away"},21:{text:"Armado con zonas anuladas",led:"dsc-led armed-away"},25:{text:"Memoria de alarma",led:"dsc-led disarmed"}},c=d[e]||d[0];t&&(t.textContent=c.text),n&&(n.className=`dsc-led ${c.led}`),re(e,a,s,r)}function re(e,t,n,a){if(t.disabled=!1,n.disabled=!1,a.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(t.classList.add("blink"),n.classList.add("blink")):(t.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(t.disabled=!1,n.disabled=!1,a.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(t.disabled=!0,n.disabled=!0,a.disabled=!1),[8,11].includes(e)||(t.classList.remove("blink"),n.classList.remove("blink"))}let y=null,v=null,Z={},D={},I=null,z="";function le(){y&&(y(),y=null),v&&(v(),v=null);const e=m(l,`M/${i}/W/Z`);y=C(e,n=>{Z=n.exists()?n.val():{},P()});const t=m(l,`M/${i}/W/NZ`);v=C(t,n=>{D=n.exists()?n.val():{},P()})}function P(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(Z||{}).filter(([a,s])=>s.A===o&&s.E!==void 0);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas para esta partición</p>';return}n.sort((a,s)=>Number(a[0])-Number(s[0])),e.innerHTML=n.map(([a,s])=>{const r=D[a]||{},d=r.A===o&&r.N?r.N:`Zona ${a}`,c=s.E===1,b=s.B===1,me=b?"Anulada":c?"Abierta":"Cerrada",ue=c?"door_open":"door_front",pe=b?"Quitar anulación":"Anular zona",ye=String(a).padStart(2,"0");return`
          <div class="zone-item">
            <div class="zone-info">
              <span class="zone-icon ${c?"open":"closed"}">
                <span class="material-symbols-outlined">${ue}</span>
              </span>
              <div style="display:flex; flex-direction:column; gap:2px; flex:1;">
                <p style="margin:0; font-size:0.9rem; font-weight:600; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                  <span>Zona ${ye}</span>
                  <span class="zone-status ${b?"bypassed":""}" style="font-weight:400; font-size:0.8rem; color:var(--text-light);">
                    ${me}
                  </span>
                </p>
                <div style="display:flex; align-items:center; gap:6px; cursor:pointer;" onclick="window.editZone('${a}')">
                  <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">${d}</p>
                  <span class="material-symbols-outlined" style="font-size:16px; color:var(--primary);">edit</span>
                </div>
              </div>
            </div>
            <button class="btn-bypass" 
                    style="white-space: nowrap; flex-shrink: 0;"
                    data-zone="${a}" 
                    data-current-bypass="${b?1:0}">
              ${pe}
            </button>
          </div>
        `}).join(""),e.querySelectorAll(".btn-bypass").forEach(a=>{a.addEventListener("click",async()=>{const s=a.dataset.zone,d=Number(a.dataset.currentBypass)===1?0:1;await L(m(l,`M/${i}/W/Z/${s}/B`),d),p(d===1?"✅ Zona anulada":"✅ Zona restaurada","success")})}),window.editZone=de}function de(e){if(!e)return;I=e;const t=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),a=document.getElementById("save-zone-name-btn"),s=D[e]||{};z=s.A===o&&s.N?s.N:"",n.value=z,a.style.display="none";const r=()=>{const c=n.value.trim(),b=c!==z&&c.length>0;a.style.display=b?"flex":"none"};n.addEventListener("input",r);const d=()=>{n.removeEventListener("input",r)};t._cleanupListener=d,t.style.display="flex",n.focus(),n.select(),setTimeout(()=>{r()},50)}function g(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",I=null,document.getElementById("save-zone-name-btn").style.display="none"}async function T(){if(!I)return;const t=document.getElementById("edit-zone-name-input").value.trim();if(!t){p("⚠️ El nombre no puede estar vacío","error");return}if(t===z){p("ℹ️ El nombre no ha cambiado","info"),g();return}try{await he(m(l,`M/${i}/W/NZ/${I}`),{A:o,N:t}),p("✅ Nombre actualizado correctamente","success"),g()}catch(n){console.error("Error al guardar nombre:",n),p("❌ Error al guardar el nombre","error")}}(_=document.getElementById("save-zone-name-btn"))==null||_.addEventListener("click",T),(H=document.getElementById("close-zone-modal"))==null||H.addEventListener("click",g),(V=document.getElementById("edit-zone-modal"))==null||V.addEventListener("click",e=>{e.target===e.currentTarget&&g()}),(U=document.getElementById("edit-zone-name-input"))==null||U.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),document.getElementById("save-zone-name-btn").style.display!=="none"&&T()),e.key==="Escape"&&g()});function R(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").style.display=e==="zonas"?"block":"none",document.getElementById("panel-historial").style.display=e==="historial"?"block":"none"}(j=document.getElementById("tab-zonas"))==null||j.addEventListener("click",()=>R("zonas")),(q=document.getElementById("tab-historial"))==null||q.addEventListener("click",()=>R("historial")),(W=document.getElementById("btn-arm-away"))==null||W.addEventListener("click",async()=>{await L(m(l,`M/${i}/DSC/P${o}/CMD`),1),p("🔒 Armado ausente","success")}),(G=document.getElementById("btn-arm-home"))==null||G.addEventListener("click",async()=>{await L(m(l,`M/${i}/DSC/P${o}/CMD`),2),p("🏠 Armado en casa","success")}),(F=document.getElementById("btn-disarm"))==null||F.addEventListener("click",async()=>{await L(m(l,`M/${i}/DSC/P${o}/CMD`),0),p("🔓 Desarmado","success")});const ce=()=>{h.forEach(e=>{typeof e=="function"&&e()}),x.forEach(e=>{typeof e=="function"&&e()}),y&&(y(),y=null),v&&(v(),v=null),Y()};(Q=document.getElementById("back-to-dashboard"))==null||Q.addEventListener("click",()=>{ce(),K()}),setTimeout(()=>{var t;const e=document.getElementById("dsc-loading-overlay");e&&!B&&(B=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),le()}export{Ie as openAlarmDscView};
