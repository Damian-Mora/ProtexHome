import{D as ye}from"./deviceController-CO525Kih.js";import{f as ee,c as be,g as fe,r as p,o as $,b as k,s as b,u as ve}from"./index-Dziw9fSA.js";const ge=`<!-- Vista Alarma DSC -->\r
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
        <!-- Pestañas Historial / Zonas (orden cambiado) -->\r
        <div class="dsc-tabs">\r
            <button class="dsc-tab active" id="tab-historial">Historial</button>\r
            <button class="dsc-tab" id="tab-zonas">Zonas</button>\r
        </div>\r
\r
        <!-- Contenedor de Historial (visible por defecto) -->\r
        <div id="panel-historial" class="dsc-panel">\r
            <div id="history-list" class="history-list">\r
                <p style="color:var(--text-light);text-align:center;">Cargando historial...</p>\r
            </div>\r
        </div>\r
\r
        <!-- Contenedor de Zonas (oculto por defecto) -->\r
        <div id="panel-zonas" class="dsc-panel" style="display:none;">\r
            <div id="zones-list" class="zones-list">\r
                <p style="color:var(--text-light);text-align:center;">Cargando zonas...</p>\r
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
</div>`;async function Ee(ne,d,te){var H,U,V,q,W,G,Q,Y,J,K,X;const ae=document.getElementById("main-content");ae.innerHTML=ge;const A=new ye(ne,d),E=await A.loadDeviceData();if(!E){alert("Dispositivo no encontrado"),ee();return}be(d,"device");const se=await A.getUserRole();document.getElementById("device-name").textContent=E.name,document.getElementById("info-serial").textContent=E.serial,document.getElementById("edit-device-name").value=E.name,document.getElementById("info-role").textContent=se;const T=e=>{const t=document.getElementById("device-status-badge"),n=t==null?void 0:t.querySelector(".status-dot"),a=t==null?void 0:t.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),a&&(a.textContent=e==="online"?"En línea":"Sin conexión")};T(E.status);const D=[],oe=A.listenOnlineStatus(T);D.push(oe);const u=fe();let l=1,z=[];const y=[];let C=!1;function Z(){const e=document.getElementById("partition-select"),t=document.getElementById("partition-selector-container");e.innerHTML="",y.forEach(n=>{const a=document.createElement("option");a.value=n,a.textContent=`Partición ${n}`,n===l&&(a.selected=!0),e.appendChild(a)}),y.length<=1?(t.style.display="none",l=y[0]||1):(t.style.display="flex",y.includes(l)||(l=y[0],e.value=l)),R(),_(),C||(C=!0,setTimeout(()=>{var a;const n=document.getElementById("dsc-loading-overlay");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),400)),(a=document.getElementById("dsc-content"))==null||a.classList.add("ready")},1500))}function R(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${l}`)}function _(){z.forEach(n=>{typeof n=="function"&&n()}),z=[];const e=p(u,`P/${d}/E${l}`),t=$(e,n=>{const a=n.exists()?Number(n.val()):0;le(a)});z.push(t)}const re=p(u,`P/${d}`),ie=$(re,e=>{if(!e.exists()){y.length=0,Z();return}const t=e.val();y.length=0;for(let n=1;n<=8;n++)t[`P${n}`]===2&&y.push(n);Z()});D.push(ie),(H=document.getElementById("partition-select"))==null||H.addEventListener("change",e=>{l=Number(e.target.value),R(),_(),N(),P()});function le(e){const t=document.getElementById("partition-state"),n=document.getElementById("partition-led"),a=document.getElementById("btn-arm-away"),i=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),o={0:{text:"Desconocido",led:"dsc-led disarmed"},1:{text:"Listo para armar",led:"dsc-led ready"},2:{text:"Listo con zonas abiertas",led:"dsc-led not-ready"},3:{text:"No listo",led:"dsc-led not-ready"},4:{text:"Armado en Casa",led:"dsc-led armed-home"},5:{text:"Armado Ausente",led:"dsc-led armed-away"},6:{text:"Armado sin entrada",led:"dsc-led armed-away"},9:{text:"Armado sin entrada",led:"dsc-led armed-away"},22:{text:"Armado sin entrada",led:"dsc-led armed-away"},7:{text:"Falla al armar",led:"dsc-led not-ready"},8:{text:"Tiempo de salida",led:"dsc-led armed-away"},11:{text:"Salida rápida",led:"dsc-led armed-away"},12:{text:"Retardo de entrada",led:"dsc-led armed-home"},13:{text:"Retardo después de alarma",led:"dsc-led armed-home"},17:{text:"Área en alarma",led:"dsc-led not-ready"},18:{text:"Armado con zonas anuladas",led:"dsc-led armed-away"},21:{text:"Armado con zonas anuladas",led:"dsc-led armed-away"},25:{text:"Memoria de alarma",led:"dsc-led disarmed"}},s=o[e]||o[0];t&&(t.textContent=s.text),n&&(n.className=`dsc-led ${s.led}`),de(e,a,i,r)}function de(e,t,n,a){if(t.disabled=!1,n.disabled=!1,a.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(t.classList.add("blink"),n.classList.add("blink")):(t.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(t.disabled=!1,n.disabled=!1,a.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(t.disabled=!0,n.disabled=!0,a.disabled=!1),[8,11].includes(e)||(t.classList.remove("blink"),n.classList.remove("blink"))}let f=null,v=null,F={},M={},I=null,L="";function ce(){f&&(f(),f=null),v&&(v(),v=null);const e=p(u,`M/${d}/W/Z`);f=$(e,n=>{F=n.exists()?n.val():{},N()});const t=p(u,`M/${d}/W/NZ`);v=$(t,n=>{M=n.exists()?n.val():{},N()})}function N(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(F||{}).filter(([a,i])=>i.A===l&&i.E!==void 0);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas para esta partición</p>';return}n.sort((a,i)=>Number(a[0])-Number(i[0])),e.innerHTML=n.map(([a,i])=>{const r=M[a]||{},o=r.A===l&&r.N?r.N:`Zona ${a}`,s=i.E===1,c=i.B===1,m=c?"Anulada":s?"Abierta":"Cerrada",x=s?"door_open":"door_front",h=c?"Quitar anulación":"Anular zona",w=String(a).padStart(2,"0");return`
          <div class="zone-item">
            <div class="zone-info">
              <span class="zone-icon ${s?"open":"closed"}">
                <span class="material-symbols-outlined">${x}</span>
              </span>
              <div style="display:flex; flex-direction:column; gap:2px; flex:1;">
                <p style="margin:0; font-size:0.9rem; font-weight:600; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
                  <span>Zona ${w}</span>
                  <span class="zone-status ${c?"bypassed":""}" style="font-weight:400; font-size:0.8rem; color:var(--text-light);">
                    ${m}
                  </span>
                </p>
                <div style="display:flex; align-items:center; gap:6px; cursor:pointer;" onclick="window.editZone('${a}')">
                  <p style="margin:0; font-size:0.85rem; color:var(--text-secondary);">${o}</p>
                  <span class="material-symbols-outlined" style="font-size:16px; color:var(--primary);">edit</span>
                </div>
              </div>
            </div>
            <button class="btn-bypass" 
                    style="white-space: nowrap; flex-shrink: 0;"
                    data-zone="${a}" 
                    data-current-bypass="${c?1:0}">
              ${h}
            </button>
          </div>
        `}).join(""),e.querySelectorAll(".btn-bypass").forEach(a=>{a.addEventListener("click",async()=>{const i=a.dataset.zone,o=Number(a.dataset.currentBypass)===1?0:1;await k(p(u,`M/${d}/W/Z/${i}/B`),o),b(o===1?"✅ Zona anulada":"✅ Zona restaurada","success")})}),window.editZone=ue}function ue(e){if(!e)return;I=e;const t=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),a=document.getElementById("save-zone-name-btn"),i=M[e]||{};L=i.A===l&&i.N?i.N:"",n.value=L,a.style.display="none";const r=()=>{const o=n.value.trim(),s=o!==L&&o.length>0;a.style.display=s?"flex":"none"};n.addEventListener("input",r),t._cleanupListener=()=>n.removeEventListener("input",r),t.style.display="flex",n.focus(),n.select(),setTimeout(r,50)}function B(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",I=null,document.getElementById("save-zone-name-btn").style.display="none"}async function O(){if(!I)return;const t=document.getElementById("edit-zone-name-input").value.trim();if(!t){b("⚠️ El nombre no puede estar vacío","error");return}if(t===L){b("ℹ️ El nombre no ha cambiado","info"),B();return}try{await ve(p(u,`M/${d}/W/NZ/${I}`),{A:l,N:t}),b("✅ Nombre actualizado correctamente","success"),B()}catch(n){console.error("Error al guardar nombre:",n),b("❌ Error al guardar el nombre","error")}}(U=document.getElementById("save-zone-name-btn"))==null||U.addEventListener("click",O),(V=document.getElementById("close-zone-modal"))==null||V.addEventListener("click",B),(q=document.getElementById("edit-zone-modal"))==null||q.addEventListener("click",e=>{e.target===e.currentTarget&&B()}),(W=document.getElementById("edit-zone-name-input"))==null||W.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),document.getElementById("save-zone-name-btn").style.display!=="none"&&O()),e.key==="Escape"&&B()});let g=null,j={};function me(){g&&(g(),g=null);const e=p(u,`M/${d}/H`);g=$(e,t=>{j=t.exists()?t.val():{},P()})}function P(){const e=document.getElementById("history-list");if(!e)return;const n=Object.entries(j||{}).filter(([r,o])=>o.A===l||o.A===9);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">No hay eventos para esta partición</p>';return}n.sort((r,o)=>{const[s,c]=r,[m,x]=o,h=new Date(c.F.replace(/\//g,"-").replace(" ","T")+":00"),w=new Date(x.F.replace(/\//g,"-").replace(" ","T")+":00");return w-h!==0?w-h:m.localeCompare(s)});function a(r){const o=r.E,s=r.D||0,c=r.N||"Usuario",m=String(s).padStart(2,"0");switch(o){case 1:return`Alarma en Zona ${m}`;case 2:return`Restauración de alarma en Zona ${m}`;case 3:return`Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[s]||`Falla (código ${s})`}`;case 4:return`Restauración de falla: ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[s]||`Falla restaurada (código ${s})`}`;case 5:return`Apertura por usuario ${m} (${c})`;case 6:return`Cierre por usuario ${m} (${c})`;case 7:return`${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[s]||`Alarma (código ${s})`}`;default:return`Evento ${o}`}}function i(r){const o=r.E,s=r.D||0;switch(o){case 1:return{bg:"#fee2e2",text:"#dc2626",icon:"warning"};case 2:return{bg:"#dcfce7",text:"#16a34a",icon:"check_circle"};case 3:return{bg:"#fef3c7",text:"#d97706",icon:"error"};case 4:return{bg:"#fef9c3",text:"#a16207",icon:"restart_alt"};case 5:return{bg:"#dcfce7",text:"#16a34a",icon:"lock_open"};case 6:return{bg:"#ede9fe",text:"#7c3aed",icon:"lock"};case 7:return s===0?{bg:"#fecaca",text:"#b91c1c",icon:"fire"}:s===1?{bg:"#fca5a5",text:"#991b1b",icon:"medical_services"}:s===2?{bg:"#f87171",text:"#7f1d1d",icon:"warning"}:{bg:"#fee2e2",text:"#dc2626",icon:"warning"};default:return{bg:"#f3f4f6",text:"#6b7280",icon:"info"}}}e.innerHTML=n.map(([r,o])=>{const s=i(o),c=a(o),m=o.F||"";return`
          <div class="history-item" style="background: ${s.bg}; border-left: 4px solid ${s.text};">
            <div class="history-icon" style="color: ${s.text};">
              <span class="material-symbols-outlined">${s.icon}</span>
            </div>
            <div class="history-info">
              <p class="history-text" style="color: ${s.text};">
                ${c}
              </p>
              <p class="history-meta">${m}</p>
            </div>
          </div>
        `}).join("")}me();function S(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").style.display=e==="zonas"?"block":"none",document.getElementById("panel-historial").style.display=e==="historial"?"block":"none",e==="historial"&&P()}setTimeout(()=>{S("historial")},100),(G=document.getElementById("tab-zonas"))==null||G.addEventListener("click",()=>S("zonas")),(Q=document.getElementById("tab-historial"))==null||Q.addEventListener("click",()=>S("historial")),(Y=document.getElementById("btn-arm-away"))==null||Y.addEventListener("click",async()=>{await k(p(u,`M/${d}/DSC/P${l}/CMD`),1),b("🔒 Armado ausente","success")}),(J=document.getElementById("btn-arm-home"))==null||J.addEventListener("click",async()=>{await k(p(u,`M/${d}/DSC/P${l}/CMD`),2),b("🏠 Armado en casa","success")}),(K=document.getElementById("btn-disarm"))==null||K.addEventListener("click",async()=>{await k(p(u,`M/${d}/DSC/P${l}/CMD`),0),b("🔓 Desarmado","success")});const pe=()=>{D.forEach(e=>{typeof e=="function"&&e()}),z.forEach(e=>{typeof e=="function"&&e()}),f&&(f(),f=null),v&&(v(),v=null),g&&(g(),g=null),ee()};(X=document.getElementById("back-to-dashboard"))==null||X.addEventListener("click",()=>{pe(),te()}),setTimeout(()=>{var t;const e=document.getElementById("dsc-loading-overlay");e&&!C&&(C=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),ce()}export{Ee as openAlarmDscView};
