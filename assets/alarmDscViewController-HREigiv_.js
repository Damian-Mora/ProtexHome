import{D as ie,H as oe}from"./historyController-D-ONLO_A.js";import{b as re,g as de,r as m,o as E,f as g,s as r,u as le,c as ce,e as x}from"./index-BXm6UbzL.js";const me=`<!-- Vista Alarma DSC -->\r
<div class="device-container fade-in">\r
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
    <!-- Modal Configuración -->\r
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
    <!-- Modal Compartir -->\r
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
                </select>dsc-partition-card\r
                <button class="modal-btn primary" id="confirm-share">\r
                    <span class="material-symbols-outlined">person_add</span>\r
                    Compartir\r
                </button>\r
            </div>\r
            <button class="modal-btn cancel" id="close-share-modal">Cerrar</button>\r
        </div>\r
    </div>\r
</div>`;async function ve(I,o,f){var D,A,M,z,N,T,H,R,Z,U,_,O,j,F,V;const B=document.getElementById("main-content");B.innerHTML='<div class="loading-screen-dash"><div class="spinner"></div><p>Cargando alarma DSC...</p></div>';const d=new ie(I,o),u=await d.loadDeviceData();if(!u){alert("Dispositivo no encontrado");return}re(o,"device"),B.innerHTML=me;const h=await d.getUserRole(),C=h==="PRO"||h==="ADM";document.getElementById("device-name").textContent=u.name,document.getElementById("info-serial").textContent=u.serial,document.getElementById("edit-device-name").value=u.name,document.getElementById("info-role").textContent=h;const L=e=>{const n=document.getElementById("device-status-badge"),t=n==null?void 0:n.querySelector(".status-dot"),a=n==null?void 0:n.querySelector("span:last-child");t&&(t.className=`status-dot ${e==="online"?"online":"offline"}`),a&&(a.textContent=e==="online"?"En línea":"Sin conexión")};L(u.status);const y=[],G=d.listenOnlineStatus(L);y.push(G);const w=C,b=new oe(o),J=await b.loadHistory(20);b.renderHistory(J,"history-list",w);const K=b.listenNewEvents(e=>{b.renderHistory(e,"history-list",w)});y.push(K);const l=de();let s=1,p=[];const c=[];function S(){const e=document.getElementById("partition-select"),n=document.getElementById("partition-selector-container");e.innerHTML="",c.forEach(t=>{const a=document.createElement("option");a.value=t,a.textContent=`Partición ${t}`,t===s&&(a.selected=!0),e.appendChild(a)}),c.length<=1?(n.style.display="none",s=c[0]||1):(n.style.display="flex",c.includes(s)||(s=c[0],e.value=s)),$(),k()}function $(){const e=document.getElementById("partition-name");e&&(e.textContent=`Partición ${s}`)}function k(){p.forEach(t=>{typeof t=="function"&&t()}),p=[];const e=m(l,`P/${o}/E${s}`),n=E(e,t=>{const a=t.exists()?Number(t.val()):0;Y(a)});p.push(n)}const W=m(l,`P/${o}`),X=E(W,e=>{if(!e.exists()){c.length=0,S();return}const n=e.val();c.length=0;for(let t=1;t<=8;t++)n[`P${t}`]===2&&c.push(t);S()});y.push(X),(D=document.getElementById("partition-select"))==null||D.addEventListener("change",e=>{s=Number(e.target.value),$(),k()});function Y(e){const n=document.getElementById("partition-state"),t=document.getElementById("partition-led"),a=document.getElementById("btn-arm-away"),i=document.getElementById("btn-arm-home"),q=document.getElementById("btn-disarm"),v={0:{text:"Desconocido",led:"dsc-led disarmed"},1:{text:"Listo para armar",led:"dsc-led ready"},2:{text:"Listo con zonas abiertas",led:"dsc-led not-ready"},3:{text:"No listo",led:"dsc-led not-ready"},4:{text:"Armado en Casa",led:"dsc-led armed-home"},5:{text:"Armado Ausente",led:"dsc-led armed-away"},6:{text:"Armado sin entrada",led:"dsc-led armed-away"},9:{text:"Armado sin entrada",led:"dsc-led armed-away"},22:{text:"Armado sin entrada",led:"dsc-led armed-away"},7:{text:"Falla al armar",led:"dsc-led not-ready"},8:{text:"Tiempo de salida",led:"dsc-led armed-away"},11:{text:"Salida rápida",led:"dsc-led armed-away"},12:{text:"Retardo de entrada",led:"dsc-led armed-home"},13:{text:"Retardo después de alarma",led:"dsc-led armed-home"},17:{text:"Área en alarma",led:"dsc-led not-ready"},18:{text:"Armado con zonas anuladas",led:"dsc-led armed-away"},21:{text:"Armado con zonas anuladas",led:"dsc-led armed-away"},25:{text:"Memoria de alarma",led:"dsc-led disarmed"}},Q=v[e]||v[0];n&&(n.textContent=Q.text),t&&(t.className=`dsc-led ${Q.led}`),ee(e,a,i,q)}function ee(e,n,t,a){if(n.disabled=!1,t.disabled=!1,a.disabled=!1,[0,7,8,11].includes(e)){e===8||e===11?(n.classList.add("blink"),t.classList.add("blink")):(n.classList.remove("blink"),t.classList.remove("blink"));return}[1,2,3,25].includes(e)?(n.disabled=!1,t.disabled=!1,a.disabled=!0):([4,12,13].includes(e)||[5,6,9,22,18,21].includes(e)||e===17)&&(n.disabled=!0,t.disabled=!0,a.disabled=!1),[8,11].includes(e)||(n.classList.remove("blink"),t.classList.remove("blink"))}function te(e){const n=document.getElementById("zones-list");if(!n)return;const t=Object.entries(e||{});if(!t.length){n.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas</p>';return}n.innerHTML=t.map(([a,i])=>`
      <div class="zone-item">
        <div class="zone-info">
          <span class="zone-icon ${i.E===1?"open":"closed"}">
            <span class="material-symbols-outlined">${i.E===1?"door_open":"door_closed"}</span>
          </span>
          <div>
            <p class="zone-name">${i.N||`Zona ${a}`}</p>
            <p class="zone-status ${i.A===1?"bypassed":""}">${i.A===1?"Anulada":i.E===1?"Abierta":"Cerrada"}</p>
          </div>
        </div>
        <button class="btn-bypass" data-zone="${a}" data-current="${i.A||0}">
          ${i.A===1?"Quitar anulación":"Anular zona"}
        </button>
      </div>
    `).join(""),n.querySelectorAll(".btn-bypass").forEach(a=>{a.addEventListener("click",async()=>{const i=a.dataset.zone,v=Number(a.dataset.current)===1?0:1;await g(m(l,`M/${o}/DSC/P${s}/ZONAS/${i}/A`),v),r(v===1?"✅ Zona anulada":"✅ Zona restaurada","success")})})}const ne=m(l,`M/${o}/DSC/P${s}/ZONAS`),ae=E(ne,e=>{te(e.exists()?e.val():{})});p.push(ae);function P(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").style.display=e==="zonas"?"block":"none",document.getElementById("panel-historial").style.display=e==="historial"?"block":"none"}(A=document.getElementById("tab-zonas"))==null||A.addEventListener("click",()=>P("zonas")),(M=document.getElementById("tab-historial"))==null||M.addEventListener("click",()=>P("historial")),(z=document.getElementById("btn-arm-away"))==null||z.addEventListener("click",async()=>{await g(m(l,`M/${o}/DSC/P${s}/CMD`),1),r("🔒 Armado ausente","success")}),(N=document.getElementById("btn-arm-home"))==null||N.addEventListener("click",async()=>{await g(m(l,`M/${o}/DSC/P${s}/CMD`),2),r("🏠 Armado en casa","success")}),(T=document.getElementById("btn-disarm"))==null||T.addEventListener("click",async()=>{await g(m(l,`M/${o}/DSC/P${s}/CMD`),0),r("🔓 Desarmado","success")}),(H=document.getElementById("device-menu-btn"))==null||H.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="flex"}),(R=document.getElementById("close-settings-modal"))==null||R.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(Z=document.getElementById("save-device-name"))==null||Z.addEventListener("click",async()=>{const e=document.getElementById("edit-device-name").value;if(!e)return alert("Ingresa un nombre");await le(m(l,`US/${I.uid}/M/${o}`),{N:e}),document.getElementById("device-name").textContent=e,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),(U=document.getElementById("share-device-btn"))==null||U.addEventListener("click",async()=>{if(!C)return r("❌ No tienes permisos","error");document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const e=await d.loadSharedUsers(),n=document.getElementById("shared-list");n&&(n.innerHTML=e.length===0?'<p style="color:var(--text-light);text-align:center;">No has compartido este sitio</p>':e.map(t=>`
          <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-color);">
            <div>
              <p style="font-weight:600;margin:0;">${t.name}</p>
              <p style="font-size:0.7rem;color:var(--text-light);margin:0;">${t.email} • ${t.role}</p>
            </div>
            <button class="btn-remove-user" data-uid="${t.uid}" style="background:none;border:none;color:var(--error);">🗑️</button>
          </div>
        `).join(""),n.querySelectorAll(".btn-remove-user").forEach(t=>{t.addEventListener("click",async()=>{var a;confirm("¿Eliminar usuario?")&&(await d.removeSharedUser(t.dataset.uid),r("✅ Usuario eliminado","success"),(a=document.getElementById("share-device-btn"))==null||a.click())})}))}),(_=document.getElementById("close-share-modal"))==null||_.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(O=document.getElementById("confirm-share"))==null||O.addEventListener("click",async()=>{var a;const e=document.getElementById("share-email").value,n=document.getElementById("share-role").value;if(!e)return r("⚠️ Ingresa un correo","error");const t=await d.shareDevice(e,n);t.success?(r("✅ "+t.message,"success"),document.getElementById("share-email").value="",(a=document.getElementById("share-device-btn"))==null||a.click()):r("❌ "+t.error,"error")}),(j=document.getElementById("unsubscribe-btn"))==null||j.addEventListener("click",async()=>{if(confirm("¿Desactivar notificaciones?")){const e=await ce(o);r(e.success?"✅ Notificaciones desactivadas":"❌ Error",e.success?"success":"error")}}),(F=document.getElementById("delete-device-btn"))==null||F.addEventListener("click",async()=>{await d.getUserRole()==="PRO"?confirm("¿Eliminar sitio para todos?")&&(await d.deleteDeviceForAll()).success&&(x(),r("✅ Sitio eliminado","success"),setTimeout(()=>f(),1e3)):confirm("¿Eliminar de tu cuenta?")&&(await d.removeDeviceFromMyAccount()).success&&(x(),r("✅ Sitio eliminado","success"),setTimeout(()=>f(),1e3))});const se=()=>{y.forEach(e=>{typeof e=="function"&&e()}),p.forEach(e=>{typeof e=="function"&&e()}),x()};(V=document.getElementById("back-to-dashboard"))==null||V.addEventListener("click",()=>{se(),f()})}export{ve as openAlarmDscView};
