import{D as ze}from"./deviceController-CQMZ9msZ.js";import{f as re,c as Ae,g as Ie,r as v,o as L,s as y,u as ce,a as we}from"./index-CfilX4kP.js";const Se=`<!-- Vista Alarma DSC -->\r
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
</div>`;async function Te(f,m,F,le){var Q,Y,J,K,ee,ne,te,ae,oe,se,ie;const de=document.getElementById("main-content");de.innerHTML=Se;const T=new ze(f,m),N=await T.loadDeviceData();if(!N){alert("Dispositivo no encontrado"),re();return}Ae(m,"device");const ue=await T.getUserRole(),me=(f==null?void 0:f.name)||(f==null?void 0:f.displayName)||(f==null?void 0:f.email)||"Usuario";document.getElementById("device-name").textContent=N.name,document.getElementById("info-serial").textContent=N.serial,document.getElementById("edit-device-name").value=N.name,document.getElementById("info-role").textContent=ue;const O=e=>{const t=document.getElementById("device-status-badge"),n=t==null?void 0:t.querySelector(".status-dot"),a=t==null?void 0:t.querySelector("span:last-child");n&&(n.className=`status-dot ${e==="online"?"online":"offline"}`),a&&(a.textContent=e==="online"?"En línea":"Sin conexión")};O(N.status);const $=[],pe=T.listenOnlineStatus(O);$.push(pe);const b=Ie();let k=0;const fe=v(b,`P/${m}/L`),be=L(fe,e=>{k=e.exists()?Number(e.val()):0,console.log(`📶 P/${m}/L = ${k}`)});$.push(be);let q={};const ve=v(b,`M/${m}/X/D`),ye=L(ve,e=>{q=e.exists()?e.val():{}});$.push(ye);let u=1,I=[];const g=[];let w=!1;function H(){const e=document.getElementById("partition-select"),t=document.getElementById("partition-selector-container");e.innerHTML="",g.forEach(n=>{const a=document.createElement("option");a.value=n,a.textContent=`Partición ${n}`,n===u&&(a.selected=!0),e.appendChild(a)}),g.length<=1?(t.style.display="none",u=g[0]||1):(t.style.display="flex",g.includes(u)||(u=g[0],e.value=u)),j(),V(),w||(w=!0,setTimeout(()=>{var a;const n=document.getElementById("dsc-loading-overlay");n&&(n.style.opacity="0",setTimeout(()=>n.remove(),400)),(a=document.getElementById("dsc-content"))==null||a.classList.add("ready")},1500))}function j(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${u}`)}function V(){I.forEach(n=>{typeof n=="function"&&n()}),I=[];const e=v(b,`P/${m}/E${u}`),t=L(e,n=>{const a=n.exists()?Number(n.val()):0;Ee(a)});I.push(t)}const ge=v(b,`P/${m}`),he=L(ge,e=>{if(!e.exists()){g.length=0,H();return}const t=e.val();g.length=0;for(let n=1;n<=8;n++)t[`P${n}`]===2&&g.push(n);H()});$.push(he),(Q=document.getElementById("partition-select"))==null||Q.addEventListener("change",e=>{u=Number(e.target.value),j(),V(),Z(),R()});function Ee(e){const t=document.getElementById("partition-state"),n=document.getElementById("partition-status-icon"),a=document.getElementById("partition-status-icon-glyph"),o=document.getElementById("btn-arm-away"),s=document.getElementById("btn-arm-home"),r=document.getElementById("btn-disarm"),i={0:{text:"Desconocido",icon:"help",className:"disarmed"},1:{text:"Listo para armar",icon:"check_circle",className:"ready"},2:{text:"Listo con zonas abiertas",icon:"error",className:"not-ready"},3:{text:"No listo",icon:"error",className:"not-ready"},4:{text:"Armado en Casa",icon:"lock",className:"armed"},5:{text:"Armado Ausente",icon:"lock",className:"armed"},6:{text:"Armado sin entrada",icon:"lock",className:"armed"},9:{text:"Armado sin entrada",icon:"lock",className:"armed"},22:{text:"Armado sin entrada",icon:"lock",className:"armed"},7:{text:"Falla al armar",icon:"error",className:"not-ready"},8:{text:"Tiempo de salida",icon:"schedule",className:"pending"},11:{text:"Salida rápida",icon:"schedule",className:"pending"},12:{text:"Retardo de entrada",icon:"schedule",className:"pending"},13:{text:"Retardo después de alarma",icon:"schedule",className:"pending"},17:{text:"Área en alarma",icon:"warning",className:"armed"},18:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},21:{text:"Armado con zonas anuladas",icon:"lock",className:"armed"},25:{text:"Memoria de alarma",icon:"history",className:"disarmed"}},l=i[e]||i[0];t&&(t.textContent=l.text),a&&(a.textContent=l.icon),n&&(n.className=`partition-status-icon ${l.className}`),xe(e,o,s,r)}function xe(e,t,n,a){if(t.disabled=!1,n.disabled=!1,a.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(t.classList.add("blink"),n.classList.add("blink")):(t.classList.remove("blink"),n.classList.remove("blink"));return}[1,2,3,25].includes(e)?(t.disabled=!1,n.disabled=!1,a.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(t.disabled=!0,n.disabled=!0,a.disabled=!1),[8,11].includes(e)||(t.classList.remove("blink"),n.classList.remove("blink"))}async function S(e,t={}){const{toggleBase:n=4,zone:a=null}=t;if(!k||k<=0)return y("⚠️ El módulo no está en línea","error"),console.warn(`⛔ Comando bloqueado: P/${m}/L = ${k}`),!1;let o=q;try{const c=await we(v(b,`M/${m}/X/D`));o=c.exists()?c.val():{}}catch(c){console.warn("⚠️ No se pudo releer X/D, usando cache:",c)}const s=n*10+n,i=(Number(o.L)||n)===n?s:n,l={A:Number(u),C:Number(e),D:Number(o.D??0),L:Number(i),N:me,V:o.V??0,Z:Number(a!==null?a:o.Z??0)};try{return await ce(v(b,`M/${m}/X/D`),l),!0}catch{return y("❌ Error al enviar comando","error"),!1}}let C=null;function Be(e,t){const a=s=>{s.target.closest(".btn-bypass")||(e.classList.add("pressing"),C=setTimeout(()=>{C=null,e.classList.remove("pressing"),navigator.vibrate&&navigator.vibrate(50),t()},600))},o=()=>{C&&(clearTimeout(C),C=null),e.classList.remove("pressing")};e.addEventListener("touchstart",a,{passive:!0}),e.addEventListener("touchend",o),e.addEventListener("touchmove",o),e.addEventListener("touchcancel",o),e.addEventListener("mousedown",a),e.addEventListener("mouseup",o),e.addEventListener("mouseleave",o)}function Le(e){if(!e)return;const t=z[e]||{},n=t.A===u&&t.N?t.N:`Zona ${e}`,a=String(e).padStart(2,"0");let o=document.getElementById("zone-action-sheet");o||(o=document.createElement("div"),o.id="zone-action-sheet",o.className="action-sheet-overlay",o.innerHTML=`
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
    `,document.body.appendChild(o),o.addEventListener("click",s=>{s.target===o&&M()})),o.querySelector("#action-sheet-title").textContent=`Zona ${a} · ${n}`,o.querySelector("#action-edit-name").onclick=()=>{M(),setTimeout(()=>G(e),150)},o.querySelector("#action-cancel").onclick=M,o.style.display="flex"}function M(){const e=document.getElementById("zone-action-sheet");e&&(e.style.display="none")}let E=null,x=null,U={},z={},D=null,P="";function Ne({accion:e,zoneNumber:t,nombre:n}){return new Promise(a=>{const o=e==="anular",s=document.createElement("div");s.className="confirm-modal-overlay",s.innerHTML=`
            <div class="confirm-modal">
                <div class="confirm-modal-icon ${o?"danger":"success"}">
                    <span class="material-symbols-outlined">
                        ${o?"gpp_bad":"verified_user"}
                    </span>
                </div>

                <h3 class="confirm-modal-title">
                    ${o?"Anular Zona "+t:"Restaurar Zona "+t}
                </h3>

                <p class="confirm-modal-name">${n}</p>

                <p class="confirm-modal-desc">
                    ${o?"⚠️ Esta zona quedará vulnerable. ¿Deseas continuar?":"La zona volverá a estar activa y protegida."}
                </p>

                <div class="confirm-modal-actions">
                    <button class="confirm-btn cancel" id="confirm-cancel">Cancelar</button>
                    <button class="confirm-btn ${o?"danger":"primary"}" id="confirm-ok">
                        ${o?"Anular":"Restaurar"}
                    </button>
                </div>
            </div>
        `,document.body.appendChild(s);const r=s.querySelector("#confirm-cancel"),i=s.querySelector("#confirm-ok"),l=c=>{s.style.opacity="0",setTimeout(()=>{s.remove(),a(c)},200)};r.addEventListener("click",()=>l(!1)),i.addEventListener("click",()=>l(!0)),s.addEventListener("click",c=>{c.target===s&&l(!1)}),s.addEventListener("keydown",c=>{c.key==="Escape"&&l(!1)}),setTimeout(()=>r.focus(),150)})}function $e(){E&&(E(),E=null),x&&(x(),x=null);const e=v(b,`M/${m}/W/Z`);E=L(e,n=>{U=n.exists()?n.val():{},Z()});const t=v(b,`M/${m}/W/NZ`);x=L(t,n=>{z=n.exists()?n.val():{},Z()})}function Z(){const e=document.getElementById("zones-list");if(!e)return;const n=Object.entries(U||{}).filter(([a,o])=>o.A===u&&o.E!==void 0);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas para esta partición</p>';return}n.sort((a,o)=>Number(a[0])-Number(o[0])),e.innerHTML=n.map(([a,o])=>{const s=z[a]||{},r=s.A===u&&s.N?s.N:`Zona ${a}`,i=o.E===1,l=o.B===1,c=String(a).padStart(2,"0");let p,d,h;return l?(p="Anulada",d={bg:"#fef2f2",border:"#ef4444",text:"#b91c1c",iconBg:"#fee2e2"},h="block"):i?(p="Abierta",d={bg:"#f5f3ff",border:"#8b5cf6",text:"#6d28d9",iconBg:"#ede9fe"},h="door_open"):(p="Cerrada",d={bg:"#eff6ff",border:"#3b82f6",text:"#1d4ed8",iconBg:"#dbeafe"},h="door_front"),`
      <div class="zone-item" data-zone-id="${a}" style="
        background: ${d.bg};
        border-left: 4px solid ${d.border};
      ">
        <div class="zone-info">
          <span class="zone-icon" style="
            background: ${d.iconBg};
            color: ${d.text};
          ">
            <span class="material-symbols-outlined">${h}</span>
          </span>
          <div style="display:flex; flex-direction:column; gap:2px; flex:1; min-width:0;">
            <p style="
              margin:0;
              font-size:0.9rem;
              font-weight:600;
              color:${d.text};
              display:flex;
              align-items:center;
              gap:8px;
            ">
              <span>Zona ${c}</span>
              <span style="
                font-weight:500;
                font-size:0.78rem;
                color:${d.text};
                opacity:0.8;
              ">
                ${p}
              </span>
            </p>
            <p style="
              margin:0;
              font-size:0.85rem;
              color:${d.text};
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
                  background: ${d.iconBg};
                  color: ${d.text};
                "
                data-zone="${a}" 
                data-current-bypass="${l?1:0}">
          ${l?"Quitar anulación":"Anular zona"}
        </button>
      </div>
    `}).join(""),e.querySelectorAll(".btn-bypass").forEach(a=>{a.addEventListener("click",async o=>{o.stopPropagation();const s=a.dataset.zone,r=Number(a.dataset.currentBypass),i=z[s]||{},l=i.A===u&&i.N?i.N:`Zona ${s}`,c=String(s).padStart(2,"0"),p=r===1?"restaurar":"anular";if(!await Ne({accion:p,zoneNumber:c,nombre:l})){console.log("⏹️ Anulación cancelada por el usuario");return}await S(F,{toggleBase:3,zone:s})&&y(p==="anular"?"✅ Solicitud de anulación enviada":"✅ Solicitud de restauración enviada","success")})}),e.querySelectorAll(".zone-item").forEach(a=>{Be(a,()=>{Le(a.dataset.zoneId)})}),window.editZone=G}function G(e){if(!e)return;D=e;const t=document.getElementById("edit-zone-modal"),n=document.getElementById("edit-zone-name-input"),a=document.getElementById("save-zone-name-btn"),o=z[e]||{};P=o.A===u&&o.N?o.N:"",n.value=P,a.style.display="none";const s=()=>{const r=n.value.trim(),i=r!==P&&r.length>0;a.style.display=i?"flex":"none"};n.addEventListener("input",s),t._cleanupListener=()=>n.removeEventListener("input",s),t.style.display="flex",n.focus(),n.select(),setTimeout(s,50)}function A(){const e=document.getElementById("edit-zone-modal");e._cleanupListener&&(e._cleanupListener(),e._cleanupListener=null),e.style.display="none",D=null,document.getElementById("save-zone-name-btn").style.display="none"}async function X(){if(!D)return;const t=document.getElementById("edit-zone-name-input").value.trim();if(!t){y("⚠️ El nombre no puede estar vacío","error");return}if(t===P){y("ℹ️ El nombre no ha cambiado","info"),A();return}try{await ce(v(b,`M/${m}/W/NZ/${D}`),{A:u,N:t}),y("✅ Nombre actualizado correctamente","success"),A()}catch(n){console.error("Error al guardar nombre:",n),y("❌ Error al guardar el nombre","error")}}(Y=document.getElementById("save-zone-name-btn"))==null||Y.addEventListener("click",X),(J=document.getElementById("close-zone-modal"))==null||J.addEventListener("click",A),(K=document.getElementById("edit-zone-modal"))==null||K.addEventListener("click",e=>{e.target===e.currentTarget&&A()}),(ee=document.getElementById("edit-zone-name-input"))==null||ee.addEventListener("keydown",e=>{e.key==="Enter"&&(e.preventDefault(),document.getElementById("save-zone-name-btn").style.display!=="none"&&X()),e.key==="Escape"&&A()});let B=null,W={};function ke(){B&&(B(),B=null);const e=v(b,`M/${m}/H`);B=L(e,t=>{W=t.exists()?t.val():{},R()})}function R(){const e=document.getElementById("history-list");if(!e)return;const n=Object.entries(W||[]).filter(([s,r])=>r.A===u||r.A===9);if(n.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">No hay eventos para esta partición</p>';return}n.sort((s,r)=>{const[i,l]=s,[c,p]=r,d=new Date(l.F.replace(/\//g,"-").replace(" ","T")+":00"),h=new Date(p.F.replace(/\//g,"-").replace(" ","T")+":00");return h-d!==0?h-d:c.localeCompare(i)});function a(s){const r=s.E,i=s.D||0,l=s.N||"Usuario",c=String(i).padStart(2,"0");switch(r){case 1:return`Alarma en Zona ${c}`;case 2:return`Restauración de alarma en Zona ${c}`;case 3:return`Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[i]||`Falla (código ${i})`}`;case 4:return`Restauración de falla: ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[i]||`Falla restaurada (código ${i})`}`;case 5:return`Apertura por usuario ${c} (${l})`;case 6:return`Cierre por usuario ${c} (${l})`;case 7:return`${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[i]||`Alarma (código ${i})`}`;default:return`Evento ${r}`}}function o(s){const r=Number(s.E),i=Number(s.D)||0;switch(r){case 1:return{bg:"#fef2f2",border:"#ef4444",text:"#b91c1c",icon:"warning",iconBg:"#fee2e2"};case 2:return{bg:"#f0fdf4",border:"#22c55e",text:"#15803d",icon:"check_circle",iconBg:"#dcfce7"};case 3:return{bg:"#fffbeb",border:"#f59e0b",text:"#b45309",icon:"error",iconBg:"#fef3c7"};case 4:return{bg:"#fefce8",border:"#eab308",text:"#a16207",icon:"restart_alt",iconBg:"#fef9c3"};case 5:return{bg:"#eff6ff",border:"#3b82f6",text:"#1d4ed8",icon:"lock_open",iconBg:"#dbeafe"};case 6:return{bg:"#f5f3ff",border:"#8b5cf6",text:"#6d28d9",icon:"lock",iconBg:"#ede9fe"};case 7:return i===0?{bg:"#fef2f2",border:"#dc2626",text:"#991b1b",icon:"local_fire_department",iconBg:"#fee2e2"}:i===1?{bg:"#fef2f2",border:"#e11d48",text:"#9f1239",icon:"medical_services",iconBg:"#ffe4e6"}:i===2?{bg:"#fff7ed",border:"#ea580c",text:"#9a3412",icon:"warning",iconBg:"#ffedd5"}:{bg:"#fef2f2",border:"#dc2626",text:"#991b1b",icon:"warning",iconBg:"#fee2e2"};default:return{bg:"#f9fafb",border:"#9ca3af",text:"#4b5563",icon:"info",iconBg:"#f3f4f6"}}}e.innerHTML=n.map(([s,r])=>{const i=o(r),l=a(r),c=r.F||"";return`
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
                        ${l}
                    </p>
                    <p class="history-meta">${c}</p>
                </div>
            </div>
        `}).join("")}ke();function _(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").classList.toggle("active",e==="zonas"),document.getElementById("panel-historial").classList.toggle("active",e==="historial"),e==="historial"&&R()}setTimeout(()=>{_("historial")},100),(ne=document.getElementById("tab-zonas"))==null||ne.addEventListener("click",()=>_("zonas")),(te=document.getElementById("tab-historial"))==null||te.addEventListener("click",()=>_("historial")),(ae=document.getElementById("btn-arm-away"))==null||ae.addEventListener("click",async()=>{await S(-5)&&y("🔒 Comando Armado Ausente enviado","success")}),(oe=document.getElementById("btn-arm-home"))==null||oe.addEventListener("click",async()=>{await S(-4)&&y("🏠 Comando Armado En Casa enviado","success")}),(se=document.getElementById("btn-disarm"))==null||se.addEventListener("click",async()=>{await S(F)&&y("🔓 Comando Desarmado enviado","success")});const Ce=()=>{$.forEach(e=>{typeof e=="function"&&e()}),I.forEach(e=>{typeof e=="function"&&e()}),E&&(E(),E=null),x&&(x(),x=null),B&&(B(),B=null),re()};(ie=document.getElementById("back-to-dashboard"))==null||ie.addEventListener("click",()=>{Ce(),le()}),setTimeout(()=>{var t;const e=document.getElementById("dsc-loading-overlay");e&&!w&&(w=!0,e.style.opacity="0",setTimeout(()=>e.remove(),300),(t=document.getElementById("dsc-content"))==null||t.classList.add("ready"),console.warn("⚠️ Overlay ocultado por timeout de seguridad"))},5e3),$e()}export{Te as openAlarmDscView};
