import{D as W,H as X}from"./historyController-D2Vta94w.js";import{b as Y,g as ee,r as p,o as U,f as v,s as o,u as ne,c as te,e as h}from"./index-BnFyACWh.js";const se=`<!-- Vista Alarma DSC -->\r
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
        <div class="dsc-partition-selector">\r
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
        <div class="dsc-partition-card">\r
            <div class="dsc-partition-header">\r
                <span class="material-symbols-outlined">security</span>\r
                <div>\r
                    <h3 id="partition-name">Partición 1</h3>\r
                    <p id="partition-state">Desarmado</p>\r
                </div>\r
            </div>\r
            <div class="dsc-partition-status">\r
                <span class="dsc-led" id="partition-led"></span>\r
                <span id="partition-status-text">Listo para armar</span>\r
            </div>\r
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
                </select>\r
                <button class="modal-btn primary" id="confirm-share">\r
                    <span class="material-symbols-outlined">person_add</span>\r
                    Compartir\r
                </button>\r
            </div>\r
            <button class="modal-btn cancel" id="close-share-modal">Cerrar</button>\r
        </div>\r
    </div>\r
</div>`;async function re(E,r,y){var w,A,D,L,S,k,$,M,z,N,H,P,T,Z,_;const f=document.getElementById("main-content");f.innerHTML='<div class="loading-screen-dash"><div class="spinner"></div><p>Cargando alarma DSC...</p></div>';const i=new W(E,r),l=await i.loadDeviceData();if(!l){alert("Dispositivo no encontrado");return}Y(r,"device"),f.innerHTML=se;let b=1;(w=document.getElementById("partition-select"))==null||w.addEventListener("change",e=>{b=Number(e.target.value),document.getElementById("partition-name").textContent=`Partición ${b}`,console.log("Partición seleccionada:",b)});const g=await i.getUserRole(),I=g==="PRO"||g==="ADM";document.getElementById("device-name").textContent=l.name,document.getElementById("info-serial").textContent=l.serial,document.getElementById("edit-device-name").value=l.name,document.getElementById("info-role").textContent=g;const x=e=>{const n=document.getElementById("device-status-badge"),t=n==null?void 0:n.querySelector(".status-dot"),s=n==null?void 0:n.querySelector("span:last-child");t&&(t.className=`status-dot ${e==="online"?"online":"offline"}`),s&&(s.textContent=e==="online"?"En línea":"Sin conexión")};x(l.status);const d=[],R=i.listenOnlineStatus(x);d.push(R);const C=I,c=new X(r),j=await c.loadHistory(20);c.renderHistory(j,"history-list",C);const V=c.listenNewEvents(e=>{c.renderHistory(e,"history-list",C)});d.push(V);const m=ee(),u=p(m,`M/${r}/DSC/MODO`),q=p(m,`M/${r}/DSC/ZONAS`),F=e=>{const n=document.getElementById("alarm-icon"),t=document.getElementById("partition-state"),s=document.getElementById("partition-status-text"),a=document.getElementById("partition-led");e===1?(n&&(n.textContent="lock_person"),t&&(t.textContent="Armado Ausente"),s&&(s.textContent="Todas las zonas vigiladas"),a&&(a.className="dsc-led armed-away")):e===2?(n&&(n.textContent="home"),t&&(t.textContent="Armado en Casa"),s&&(s.textContent="Zonas perimetrales vigiladas"),a&&(a.className="dsc-led armed-home")):(n&&(n.textContent="shield_lock"),t&&(t.textContent="Desarmado"),s&&(s.textContent="Sistema sin vigilancia"),a&&(a.className="dsc-led disarmed"))},Q=U(u,e=>{F(e.exists()?e.val():0)});d.push(Q);const G=e=>{const n=document.getElementById("zones-list");if(!n)return;const t=Object.entries(e||{});if(!t.length){n.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin zonas configuradas</p>';return}n.innerHTML=t.map(([s,a])=>`
      <div class="zone-item">
        <div class="zone-info">
          <span class="zone-icon ${a.E===1?"open":"closed"}">
            <span class="material-symbols-outlined">${a.E===1?"door_open":"door_closed"}</span>
          </span>
          <div>
            <p class="zone-name">${a.N||`Zona ${s}`}</p>
            <p class="zone-status ${a.A===1?"bypassed":""}">${a.A===1?"Anulada":a.E===1?"Abierta":"Cerrada"}</p>
          </div>
        </div>
        <button class="btn-bypass" data-zone="${s}" data-current="${a.A||0}">
          ${a.A===1?"Quitar anulación":"Anular zona"}
        </button>
      </div>
    `).join(""),n.querySelectorAll(".btn-bypass").forEach(s=>{s.addEventListener("click",async()=>{const a=s.dataset.zone,O=Number(s.dataset.current)===1?0:1;await v(p(m,`M/${r}/DSC/ZONAS/${a}/A`),O),o(O===1?"✅ Zona anulada":"✅ Zona restaurada","success")})})},J=U(q,e=>{G(e.exists()?e.val():{})});d.push(J),(A=document.getElementById("tab-zonas"))==null||A.addEventListener("click",()=>B("zonas")),(D=document.getElementById("tab-historial"))==null||D.addEventListener("click",()=>B("historial"));function B(e){document.getElementById("tab-zonas").classList.toggle("active",e==="zonas"),document.getElementById("tab-historial").classList.toggle("active",e==="historial"),document.getElementById("panel-zonas").style.display=e==="zonas"?"block":"none",document.getElementById("panel-historial").style.display=e==="historial"?"block":"none"}(L=document.getElementById("btn-arm-away"))==null||L.addEventListener("click",async()=>{await v(u,1),o("🔒 Armado ausente activado","success")}),(S=document.getElementById("btn-arm-home"))==null||S.addEventListener("click",async()=>{await v(u,2),o("🏠 Armado en casa activado","success")}),(k=document.getElementById("btn-disarm"))==null||k.addEventListener("click",async()=>{await v(u,0),o("🔓 Desarmado","success")}),($=document.getElementById("device-menu-btn"))==null||$.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="flex"}),(M=document.getElementById("close-settings-modal"))==null||M.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(z=document.getElementById("save-device-name"))==null||z.addEventListener("click",async()=>{const e=document.getElementById("edit-device-name").value;if(!e)return alert("Ingresa un nombre");await ne(p(m,`US/${E.uid}/M/${r}`),{N:e}),document.getElementById("device-name").textContent=e,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),(N=document.getElementById("share-device-btn"))==null||N.addEventListener("click",async()=>{if(!I)return o("❌ No tienes permisos","error");document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const e=await i.loadSharedUsers(),n=document.getElementById("shared-list");n&&(n.innerHTML=e.length===0?'<p style="color:var(--text-light);text-align:center;">No has compartido este sitio</p>':e.map(t=>`
          <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-color);">
            <div>
              <p style="font-weight:600;margin:0;">${t.name}</p>
              <p style="font-size:0.7rem;color:var(--text-light);margin:0;">${t.email} • ${t.role}</p>
            </div>
            <button class="btn-remove-user" data-uid="${t.uid}" style="background:none;border:none;color:var(--error);">🗑️</button>
          </div>
        `).join(""),n.querySelectorAll(".btn-remove-user").forEach(t=>{t.addEventListener("click",async()=>{var s;confirm("¿Eliminar usuario?")&&(await i.removeSharedUser(t.dataset.uid),o("✅ Usuario eliminado","success"),(s=document.getElementById("share-device-btn"))==null||s.click())})}))}),(H=document.getElementById("close-share-modal"))==null||H.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(P=document.getElementById("confirm-share"))==null||P.addEventListener("click",async()=>{var s;const e=document.getElementById("share-email").value,n=document.getElementById("share-role").value;if(!e)return o("⚠️ Ingresa un correo","error");const t=await i.shareDevice(e,n);t.success?(o("✅ "+t.message,"success"),document.getElementById("share-email").value="",(s=document.getElementById("share-device-btn"))==null||s.click()):o("❌ "+t.error,"error")}),(T=document.getElementById("unsubscribe-btn"))==null||T.addEventListener("click",async()=>{if(confirm("¿Desactivar notificaciones?")){const e=await te(r);o(e.success?"✅ Notificaciones desactivadas":"❌ Error",e.success?"success":"error")}}),(Z=document.getElementById("delete-device-btn"))==null||Z.addEventListener("click",async()=>{await i.getUserRole()==="PRO"?confirm("¿Eliminar sitio para todos?")&&(await i.deleteDeviceForAll()).success&&(h(),o("✅ Sitio eliminado","success"),setTimeout(()=>y(),1e3)):confirm("¿Eliminar de tu cuenta?")&&(await i.removeDeviceFromMyAccount()).success&&(h(),o("✅ Sitio eliminado","success"),setTimeout(()=>y(),1e3))});const K=()=>{d.forEach(e=>{typeof e=="function"&&e()}),h()};(_=document.getElementById("back-to-dashboard"))==null||_.addEventListener("click",()=>{K(),y()})}export{re as openAlarmDscView};
