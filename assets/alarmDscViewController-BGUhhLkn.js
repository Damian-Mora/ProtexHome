import{D as ge}from"./deviceController-DLA9wdYc.js";import{f as ae,c as he,g as Ee,r as p,o as N,b as k,s as y,u as xe}from"./index-CJeEeR09.js";const Be=`<!-- Vista Alarma DSC -->\r
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
</div>`;async function Ne(oe,u,se){var V,W,G,Q,Y,J,K,X,ee,ne,te;const ie=document.getElementById("main-content");ie.innerHTML=Be;const S=new ge(oe,u),B=await S.loadDeviceData();if(!B){alert("Dispositivo no encontrado"),ae();return}he(u,"device");const re=await S.getUserRole();document.getElementById("device-name").textContent=B.name,document.getElementById("info-serial").textContent=B.serial,document.getElementById("edit-device-name").value=B.name,document.getElementById("info-role").textContent=re;const _=e=>{const a=document.getElementById("device-status-badge"),n=a==null?void 0:a.querySelector(".status-dot"),t=a==null?void 0:a.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),t&&(t.textContent=e==="online"?"En línea":"Sin conexión")};_(B.status);const D=[],ce=S.listenOnlineStatus(_);D.push(ce);const m=Ee();let l=1,C=[];const v=[];let z=!1;function R(){const e=document.getElementById("partition-select"),a=document.getElementById("partition-selector-container");e.innerHTML="",v.forEach(n=>{const t=document.createElement("option");t.value=n,t.textContent=`Partición ${n}`,n===l&&(t.selected=!0),e.appendChild(t)}),v.length<=1?(a.style.display="none",l=v[0]||1):(a.style.display="flex",v.includes(l)||(l=v[0],e.value=l)),F(),O(),z||(z=!0,setTimeout(()=>{var t;const n=document.getElementById("dsc-loading-overlay");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),400)),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready")},1500))}function F(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${l}`)}function O(){C.forEach(n=>{typeof n=="function"&&n()}),C=[];const e=p(m,`P/${u}/E${l}`),a=N(e,n=>{const t=n.exists()?Number(n.val()):0;ue(t)});C.push(a)}const le=p(m,`P/${u}`),de=N(le,e=>{if(!e.exists()){v.length=0,R();return}const a=e.val();v.length=0;for(let n=1;n<=8;n++)a[`P${n}`]===2&&v.push(n);R()});D.push(de),(V=document.getElementById("partition-select"))==null||V.addEventListener("change",e=>{l=Number(e.target.value),F(),O(),P(),T()});function ue(e){const a=document.getElementById("partition-state"),n=document.getElementById("partition-status-icon"),t=document.getElementById("partition-status-icon-glyph"),o=document.getElementById("btn-arm-away"),i=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),s={0:{text:"Desconocido",icon:"help",className:"disarmed"},1:{text:"Listo para armar",icon:"check_circle",className:"ready"},2:{text:"Listo con zonas abiertas",icon:"error",className:"not-ready"},3:{text:"No listo",icon:"error",className:"not-ready"},4:{text:"Armado en Casa",icon:"lock",className:"armed"},5:{text:"Armado Ausente",icon:"lock",className:"armed"},6:{text:"Armado sin entrada",icon:"lock",className:"armed"},9:{text:"Armado sin entrada",icon:"lock",className:"armed"},22:{text:"Armado sin entrada",icon:"lock",className:"armed"},7:{text:"Falla al armar",icon:"error",className:"not-ready"},8:{text:"Tiempo de salida",icon:"schedule",className:"pending"},11:{text:"Salida rápida",icon:"schedule",className:"pending"},12:{text:"Retardo de entrada",icon:"schedule",className:"pending"},13:{text:"Retardo después de alarma",icon:"schedule",className:"pending"},17:{text:"Área en alarma",icon:"warning",className:"armed"},18:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},21:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},25:{text:"Memoria de alarma",icon:"history",className:"disarmed"}},d=s[e]||s[0];a&&(a.textContent=d.text),t&&(t.textContent=d.icon),n&&(n.className=`partition-status-icon ${d.className}`),me(e,o,i,r)}function me(e,a,n,t){if(a.disabled=!1,n.disabled=!1,t.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(a.classList.add("blink"),n.classList.add("blink")):(a.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(a.disabled=!1,n.disabled=!1,t.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(a.disabled=!0,n.disabled=!0,t.disabled=!1),[8,11].includes(e)||(a.classList.remove("blink"),n.classList.remove("blink"))}let $=null;function pe(e,a){const t=i=>{i.target.closest(".btn-bypass")||(e.classList.add("pressing"),$=setTimeout(()=>{$=null,e.classList.remove("pressing"),navigator.vibrate&&navigator.vibrate(50),a()},600))},o=()=>{$&&(clearTimeout($),$=null),e.classList.remove("pressing")};e.addEventListener("touchstart",t,{passive:!0}),e.addEventListener("touchend",o),e.addEventListener("touchmove",o),e.addEventListener("touchcancel",o),e.addEventListener("mousedown",t),e.addEventListener("mouseup",o),e.addEventListener("mouseleave",o)}function fe(e){if(!e)return;const a=I[e]||{},n=a.A===l&&a.N?a.N:`Zona ${e}`,t=String(e).padStart(2,"0");let o=document.getElementById("zone-action-sheet");o||(o=document.createElement("div"),o.id="zone-action-sheet",o.className="action-sheet-overlay",o.innerHTML=`
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
    `,document.body.appendChild(o),o.addEventListener("click",i=>{i.target===o&&M()})),o.querySelector("#action-sheet-title").textContent=`Zona ${t} · ${n}`,o.querySelector("#action-edit-name").onclick=()=>{M(),setTimeout(()=>H(e),150)},o.querySelector("#action-cancel").onclick=M,o.style.display="flex"}function M(){const e=document.getElementById("zone-action-sheet");e&&(e.style.display="none")}let g=null,h=null,j={},I={},A=null,w="";function be(){g&&(g(),g=null),h&&(h(),h=null);const e=p(m,`M/${u}/W/Z`);g=N(e,n=>{j=n.exists()?n.val():{},P()});const a=p(m,`M/${u}/W/NZ`);h=N(a,n=>{I=n.exists()?n.val():{},P()})}function P(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(j||{}).filter(([t,o])=>o.A===l&&o.E!==void 0);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas para esta partición</p>';return}n.sort((t,o)=>Number(t[0])-Number(o[0])),e.innerHTML=n.map(([t,o])=>{const i=I[t]||{},r=i.A===l&&i.N?i.N:`Zona ${t}`,s=o.E===1,d=o.B===1,f=String(t).padStart(2,"0");let b,c,x;return d?(b="Anulada",c={bg:"#fef2f2",border:"#ef4444",text:"#b91c1c",iconBg:"#fee2e2"},x="block"):s?(b="Abierta",c={bg:"#f5f3ff",border:"#8b5cf6",text:"#6d28d9",iconBg:"#ede9fe"},x="door_open"):(b="Cerrada",c={bg:"#eff6ff",border:"#3b82f6",text:"#1d4ed8",iconBg:"#dbeafe"},x="door_front"),`
      <div class="zone-item" data-zone-id="${t}" style="
        background: ${c.bg};
        border-left: 4px solid ${c.border};
      ">
        <div class="zone-info">
          <span class="zone-icon" style="
            background: ${c.iconBg};
            color: ${c.text};
          ">
            <span class="material-symbols-outlined">${x}</span>
          </span>
          <div style="display:flex; flex-direction:column; gap:2px; flex:1; min-width:0;">
            <p style="
              margin:0;
              font-size:0.9rem;
              font-weight:600;
              color:${c.text};
              display:flex;
              align-items:center;
              gap:8px;
            ">
              <span>Zona ${f}</span>
              <span style="
                font-weight:500;
                font-size:0.78rem;
                color:${c.text};
                opacity:0.8;
              ">
                ${b}
              </span>
            </p>
            <p style="
              margin:0;
              font-size:0.85rem;
              color:${c.text};
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
                  background: ${c.iconBg};
                  color: ${c.text};
                "
                data-zone="${t}" 
                data-current-bypass="${d?1:0}">
          ${d?"Quitar anulación":"Anular zona"}
        </button>
      </div>
    `}).join(""),e.querySelectorAll(".btn-bypass").forEach(t=>{t.addEventListener("click",async o=>{o.stopPropagation();const i=t.dataset.zone,s=Number(t.dataset.currentBypass)===1?0:1;await k(p(m,`M/${u}/W/Z/${i}/B`),s),y(s===1?"✅ Zona anulada":"✅ Zona restaurada","success")})}),e.querySelectorAll(".zone-item").forEach(t=>{pe(t,()=>{fe(t.dataset.zoneId)})}),e.querySelectorAll(".btn-bypass").forEach(t=>{t.addEventListener("click",async()=>{const o=t.dataset.zone,r=Number(t.dataset.currentBypass)===1?0:1;await k(p(m,`M/${u}/W/Z/${o}/B`),r),y(r===1?"✅ Zona anulada":"✅ Zona restaurada","success")})}),window.editZone=H}function H(e){if(!e)return;A=e;const a=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),t=document.getElementById("save-zone-name-btn"),o=I[e]||{};w=o.A===l&&o.N?o.N:"",n.value=w,t.style.display="none";const i=()=>{const r=n.value.trim(),s=r!==w&&r.length>0;t.style.display=s?"flex":"none"};n.addEventListener("input",i),a._cleanupListener=()=>n.removeEventListener("input",i),a.style.display="flex",n.focus(),n.select(),setTimeout(i,50)}function L(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",A=null,document.getElementById("save-zone-name-btn").style.display="none"}async function q(){if(!A)return;const a=document.getElementById("edit-zone-name-input").value.trim();if(!a){y("⚠️ El nombre no puede estar vacío","error");return}if(a===w){y("ℹ️ El nombre no ha cambiado","info"),L();return}try{await xe(p(m,`M/${u}/W/NZ/${A}`),{A:l,N:a}),y("✅ Nombre actualizado correctamente","success"),L()}catch(n){console.error("Error al guardar nombre:",n),y("❌ Error al guardar el nombre","error")}}(W=document.getElementById("save-zone-name-btn"))==null||W.addEventListener("click",q),(G=document.getElementById("close-zone-modal"))==null||G.addEventListener("click",L),(Q=document.getElementById("edit-zone-modal"))==null||Q.addEventListener("click",e=>{e.target===e.currentTarget&&L()}),(Y=document.getElementById("edit-zone-name-input"))==null||Y.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),document.getElementById("save-zone-name-btn").style.display!=="none"&&q()),e.key==="Escape"&&L()});let E=null,U={};function ye(){E&&(E(),E=null);const e=p(m,`M/${u}/H`);E=N(e,a=>{U=a.exists()?a.val():{},T()})}function T(){const e=document.getElementById("history-list");if(!e)return;const n=Object.entries(U||{}).filter(([i,r])=>r.A===l||r.A===9);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">No hay eventos para esta partición</p>';return}n.sort((i,r)=>{const[s,d]=i,[f,b]=r,c=new Date(d.F.replace(/\//g,"-").replace(" ","T")+":00"),x=new Date(b.F.replace(/\//g,"-").replace(" ","T")+":00");return x-c!==0?x-c:f.localeCompare(s)});function t(i){const r=i.E,s=i.D||0,d=i.N||"Usuario",f=String(s).padStart(2,"0");switch(r){case 1:return`Alarma en Zona ${f}`;case 2:return`Restauración de alarma en Zona ${f}`;case 3:return`Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[s]||`Falla (código ${s})`}`;case 4:return`Restauración de falla: ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[s]||`Falla restaurada (código ${s})`}`;case 5:return`Apertura por usuario ${f} (${d})`;case 6:return`Cierre por usuario ${f} (${d})`;case 7:return`${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[s]||`Alarma (código ${s})`}`;default:return`Evento ${r}`}}function o(i){const r=Number(i.E),s=Number(i.D)||0;switch(r){case 1:return{bg:"#fef2f2",border:"#ef4444",text:"#b91c1c",icon:"warning",iconBg:"#fee2e2"};case 2:return{bg:"#f0fdf4",border:"#22c55e",text:"#15803d",icon:"check_circle",iconBg:"#dcfce7"};case 3:return{bg:"#fffbeb",border:"#f59e0b",text:"#b45309",icon:"error",iconBg:"#fef3c7"};case 4:return{bg:"#fefce8",border:"#eab308",text:"#a16207",icon:"restart_alt",iconBg:"#fef9c3"};case 5:return{bg:"#eff6ff",border:"#3b82f6",text:"#1d4ed8",icon:"lock_open",iconBg:"#dbeafe"};case 6:return{bg:"#f5f3ff",border:"#8b5cf6",text:"#6d28d9",icon:"lock",iconBg:"#ede9fe"};case 7:return s===0?{bg:"#fef2f2",border:"#dc2626",text:"#991b1b",icon:"local_fire_department",iconBg:"#fee2e2"}:s===1?{bg:"#fef2f2",border:"#e11d48",text:"#9f1239",icon:"medical_services",iconBg:"#ffe4e6"}:s===2?{bg:"#fff7ed",border:"#ea580c",text:"#9a3412",icon:"warning",iconBg:"#ffedd5"}:{bg:"#fef2f2",border:"#dc2626",text:"#991b1b",icon:"warning",iconBg:"#fee2e2"};default:return{bg:"#f9fafb",border:"#9ca3af",text:"#4b5563",icon:"info",iconBg:"#f3f4f6"}}}e.innerHTML=n.map(([i,r])=>{const s=o(r),d=t(r),f=r.F||"";return`
            <div class="history-item" style="
                background: ${s.bg};
                border-left: 4px solid ${s.border};
            ">
                <div class="history-icon" style="
                    color: ${s.text};
                    background: ${s.iconBg};
                ">
                    <span class="material-symbols-outlined">${s.icon}</span>
                </div>
                <div class="history-info">
                    <p class="history-text" style="color: ${s.text};">
                        ${d}
                    </p>
                    <p class="history-meta">${f}</p>
                </div>
            </div>
        `}).join("")}ye();function Z(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").classList.toggle("active",e==="zonas"),document.getElementById("panel-historial").classList.toggle("active",e==="historial"),e==="historial"&&T()}setTimeout(()=>{Z("historial")},100),(J=document.getElementById("tab-zonas"))==null||J.addEventListener("click",()=>Z("zonas")),(K=document.getElementById("tab-historial"))==null||K.addEventListener("click",()=>Z("historial")),(X=document.getElementById("btn-arm-away"))==null||X.addEventListener("click",async()=>{await k(p(m,`M/${u}/DSC/P${l}/CMD`),1),y("🔒 Armado ausente","success")}),(ee=document.getElementById("btn-arm-home"))==null||ee.addEventListener("click",async()=>{await k(p(m,`M/${u}/DSC/P${l}/CMD`),2),y("🏠 Armado en casa","success")}),(ne=document.getElementById("btn-disarm"))==null||ne.addEventListener("click",async()=>{await k(p(m,`M/${u}/DSC/P${l}/CMD`),0),y("🔓 Desarmado","success")});const ve=()=>{D.forEach(e=>{typeof e=="function"&&e()}),C.forEach(e=>{typeof e=="function"&&e()}),g&&(g(),g=null),h&&(h(),h=null),E&&(E(),E=null),ae()};(te=document.getElementById("back-to-dashboard"))==null||te.addEventListener("click",()=>{ve(),se()}),setTimeout(()=>{var a;const e=document.getElementById("dsc-loading-overlay");e&&!z&&(z=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(a=document.getElementById("dsc-content"))==null||a.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),be()}export{Ne as openAlarmDscView};
