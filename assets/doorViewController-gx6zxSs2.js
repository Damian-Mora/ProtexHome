import{D as j,H as F}from"./historyController-DY3G_hr2.js";import{s as c,r as w,g as D,a as z,b as W,u as Z,c as G,d as N,e as Q}from"./index-DcGEaaWs.js";const J=`\r
 <!-- Vista Puerta Motorizada -->\r
<div class="device-container fade-in">\r
\r
  <!-- Header -->\r
  <div class="device-header">\r
    <button class="dash-icon-btn" id="back-to-dashboard">\r
      <span class="material-symbols-outlined">arrow_back</span>\r
    </button>\r
    <h2 id="device-name">Puerta Motorizada</h2>\r
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
    <!-- Botones de control - DOS PUERTAS -->\r
    <div class="door-card">\r
      <div class="door-card-header">\r
        <span class="door-card-icon">🚗</span>\r
        <span class="door-card-title" id="door1-title">Puerta 1</span>\r
        <button class="btn-edit-name" id="edit-door1">✏️</button>\r
        <span class="door-card-status" id="door1-status-badge">Cerrada</span>\r
      </div>\r
      <button class="btn-door-action" id="btn-door1">\r
        <span class="material-symbols-outlined" id="door1-icon">lock</span>\r
        <span id="door1-text">Abrir Puerta</span>\r
      </button>\r
    </div>\r
\r
    <div class="door-card">\r
      <div class="door-card-header">\r
        <span class="door-card-icon">🚗</span>\r
        <span class="door-card-title" id="door2-title">Puerta 2</span>\r
        <button class="btn-edit-name" id="edit-door2">✏️</button>\r
        <span class="door-card-status" id="door2-status-badge">Cerrada</span>\r
      </div>\r
      <button class="btn-door-action" id="btn-door2">\r
        <span class="material-symbols-outlined" id="door2-icon">lock</span>\r
        <span id="door2-text">Abrir Puerta</span>\r
      </button>\r
    </div>\r
\r
    <!-- Historial -->\r
    <div class="history-section">\r
      <h4 class="history-title">Historial de Eventos</h4>\r
      <div id="history-list" class="history-list">\r
        <p style="color:var(--text-light);text-align:center;">Cargando...</p>\r
      </div>\r
    </div>\r
\r
    <!-- Modal de Configuración -->\r
    <div class="modal-overlay" id="device-settings-modal" style="display:none;">\r
      <div class="modal-content">\r
        <h3>Configuración</h3>\r
\r
        <button class="modal-btn" id="unsubscribe-btn">\r
          <span class="material-symbols-outlined">notifications_off</span>\r
          Quitar notificaciones de este sitio\r
        </button>\r
\r
        <div class="modal-input-group">\r
          <label>Nombre del dispositivo</label>\r
          <input type="text" id="edit-device-name" class="modal-input">\r
        </div>\r
\r
        <div class="device-info-mini">\r
          <p><strong>Serial:</strong> <span id="info-serial">--</span></p>\r
          <p><strong>Tipo:</strong> Puerta Motorizada</p>\r
          <p><strong>Rol:</strong> <span id="info-role">--</span></p>\r
        </div>\r
\r
        <button class="modal-btn primary" id="save-device-name">\r
          <span class="material-symbols-outlined">save</span>\r
          Guardar Cambios\r
        </button>\r
        <button class="modal-btn" id="share-device-btn">\r
          <span class="material-symbols-outlined">share</span>\r
          Compartir Sitio\r
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
\r
        <!-- Lista de personas compartidas -->\r
        <div id="shared-list" style="margin-bottom:15px;max-height:200px;overflow-y:auto;">\r
          <p style="color:var(--text-light);text-align:center;">Cargando...</p>\r
        </div>\r
\r
        <!-- Agregar nuevo -->\r
        <div style="border-top:1px solid var(--border-color);padding-top:12px;margin-top:5px;">\r
          <p style="font-size:0.85rem;color:var(--text-light);margin-bottom:8px;font-weight:600;">\r
            Agregar persona\r
          </p>\r
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
\r
        <button class="modal-btn cancel" id="close-share-modal">Cerrar</button>\r
      </div>\r
    </div>\r
  </div>\r
</div>`;function q(i){const o=document.getElementById("device-status-badge");if(!o)return;const s=o.querySelector(".status-dot"),d=o.querySelector("span:last-child");i==="online"?(s.className="status-dot online",d.textContent="En línea"):(s.className="status-dot offline",d.textContent="Sin conexión")}function K(i,o){const s=document.getElementById("btn-door"+i),d=document.getElementById("door"+i+"-icon"),e=document.getElementById("door"+i+"-text"),a=document.getElementById("door"+i+"-status-badge");!s||!d||!e||(o===1?(s.style.background="var(--bg-light)",s.style.color="var(--text-primary)",s.style.borderColor="var(--border-color)",d.textContent="lock_open",e.textContent="Abrir Puerta",a&&(a.textContent="Cerrada",a.style.background="var(--success-bg)",a.style.color="var(--success)")):(s.style.background="#fef2f2",s.style.color="#991b1b",s.style.borderColor="#fecaca",d.textContent="lock",e.textContent="Cerrar Puerta",a&&(a.textContent="Abierta",a.style.background="#fef2f2",a.style.color="#991b1b")))}function X(i,o){const s=o==="PRO",d=o==="ADM",e=s||d,a=document.getElementById("share-device-btn");a&&(a.style.display=e?"flex":"none");const l=document.getElementById("edit-device-name");l&&(l.disabled=!1);const m=document.getElementById("edit-door1"),u=document.getElementById("edit-door2");return m&&(m.style.display="inline"),u&&(u.style.display="inline"),{isOwner:s,isAdmin:d,canManage:e}}function V(i,o,s,d,e){const a=document.getElementById("btn-door"+e);a&&a.addEventListener("click",async()=>{if(!navigator.onLine){c("⚠️ Sin conexión a internet");return}if(!await i.isDeviceOnline()){c("⚠️ El dispositivo está sin conexión");return}const m=w(D(),`M/${d}/W/Z/${e}/E`),u=await z(m),C=u.exists()&&u.val()===1?"close":"open";a.disabled=!0,a.classList.add("waiting");const y=a.querySelector("#door"+e+"-text");y.textContent="Enviando...",i.sendDoorCommand(e,async(h,g)=>{if(a.classList.remove("waiting"),a.disabled=!1,h){const b=s.name||s.email||"Usuario";await o.addCommandEvent(e,C,b),y.textContent="Comando enviado"}else y.textContent="Sin respuesta",setTimeout(async()=>{const b=w(D(),`M/${d}/W/Z/${e}/E`),x=await z(b),f=x.exists()&&x.val()===1;y.textContent=f?"Cerrar Puerta":"Abrir Puerta"},2500)})})}async function ne(i,o,s){var S,k,A,L,P,M,O,$,U,H,R,T;const d=document.getElementById("main-content");d.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const e=new j(i,o),a=await e.loadDeviceData();if(!a){alert("Dispositivo no encontrado");return}W(o,"device"),d.innerHTML=J;const l=await e.getUserRole(),{canManage:m}=X(e,l);document.getElementById("device-name").textContent=a.name,document.getElementById("info-serial").textContent=a.serial,document.getElementById("edit-device-name").value=a.name,document.getElementById("info-role").textContent=l,q(a.status);const u=l==="PRO"||l==="ADM",v=new F(o),C=await v.loadHistory(20);v.renderHistory(C,"history-list",u);const y=v.listenNewEvents(t=>{v.renderHistory(t,"history-list",u)}),h=await e.loadDoorNames();document.getElementById("door1-title").textContent=h.door1,document.getElementById("door2-title").textContent=h.door2,m&&((S=document.getElementById("edit-door1"))==null||S.addEventListener("click",()=>_(1,e)),(k=document.getElementById("edit-door2"))==null||k.addEventListener("click",()=>_(2,e)));const g=[],b=e.listenOnlineStatus(t=>{const n=N();n===o?q(t):console.log(`⛔ Ignorada actualización de estado para ${o} (serial activo ${n})`)});g.push(b);const x=e.listenDoorPosition((t,n)=>{const r=N();if(r!==o){console.log(`⛔ Ignorada posición de puerta ${t} de ${o} (serial activo ${r})`);return}K(t,n===1?2:1);const I=document.getElementById("btn-door"+t),E=document.getElementById("door"+t+"-text");I&&E&&(E.textContent=n===1?"Cerrar Puerta":"Abrir Puerta");const B=document.getElementById("door"+t+"-status-badge");B&&(B.textContent=n===1?"Abierta":"Cerrada",B.style.background=n===1?"#fef2f2":"var(--success-bg)",B.style.color=n===1?"#991b1b":"var(--success)")});g.push(x),g.push(y),V(e,v,i,o,1),V(e,v,i,o,2);const f=()=>{g.forEach(t=>{typeof t=="function"&&t()}),Q()};(A=document.getElementById("back-to-dashboard"))==null||A.addEventListener("click",()=>{f(),typeof s=="function"&&s()}),(L=document.getElementById("device-menu-btn"))==null||L.addEventListener("click",()=>{const t=document.getElementById("device-name").textContent;document.getElementById("edit-device-name").value=t,document.getElementById("edit-device-name").dataset.original=t;const n=document.getElementById("save-device-name");n&&(n.style.display="none"),document.getElementById("device-settings-modal").style.display="flex"}),(P=document.getElementById("edit-device-name"))==null||P.addEventListener("input",()=>{const t=document.getElementById("edit-device-name"),n=document.getElementById("save-device-name"),r=t.dataset.original||"";n.style.display=t.value!==r?"flex":"none"}),(M=document.getElementById("close-settings-modal"))==null||M.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(O=document.getElementById("save-device-name"))==null||O.addEventListener("click",async()=>{const t=document.getElementById("edit-device-name").value;if(!t)return alert("Ingresa un nombre");const n=D();await Z(w(n,"US/"+i.uid+"/M/"+o),{N:t}),document.getElementById("device-name").textContent=t,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),($=document.getElementById("delete-device-btn"))==null||$.addEventListener("click",async()=>{if(await e.getUserRole()==="PRO"){if(confirm(`Eres el Propietario.

¿Eliminar el sitio para TODOS los usuarios?`)&&confirm("Esta acción no se puede deshacer. ¿Continuar?")){const n=await e.deleteDeviceForAll();n.success?(f(),c("✅ Sitio eliminado","success"),setTimeout(()=>s(),1e3)):c("❌ "+n.error,"error")}}else if(confirm("¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.")){const n=await e.removeDeviceFromMyAccount();n.success?(f(),c("✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>s(),1e3)):c("❌ "+n.error,"error")}}),(U=document.getElementById("share-device-btn"))==null||U.addEventListener("click",async()=>{if(!m){c("❌ No tienes permisos para ver usuarios","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const t=await e.loadSharedUsers(),n=document.getElementById("shared-list");n&&(t.length===0?n.innerHTML='<p style="color:var(--text-light);text-align:center;padding:10px;">No has compartido este sitio</p>':(n.innerHTML=t.map(r=>`
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border-color);">
    <div style="flex:1;">
      <p style="font-weight:600;margin:0;font-size:0.9rem;">${r.name}</p>
      <p style="font-size:0.7rem;color:var(--text-light);margin:2px 0 0;">${r.email}</p>
    </div>
    <select class="role-select" data-uid="${r.uid}" ${l!=="PRO"?"disabled":""} style="font-size:0.75rem;padding:4px 8px;border-radius:6px;border:1px solid var(--border-color);margin-right:8px;">
      <option value="INV" ${r.role==="INV"?"selected":""}>Invitado</option>
      <option value="ADM" ${r.role==="ADM"?"selected":""}>Admin</option>
    </select>
    <button class="btn-remove-user" data-uid="${r.uid}" style="background:none;border:none;color:var(--error);cursor:pointer;font-size:16px;">🗑️</button>
  </div>`).join(""),l==="PRO"&&n.querySelectorAll(".role-select").forEach(r=>{r.addEventListener("change",async p=>{p.stopPropagation(),confirm("¿Cambiar el rol de este usuario?")&&await Y(r.dataset.uid,r.value,e)})}),n.querySelectorAll(".btn-remove-user").forEach(r=>{r.addEventListener("click",async p=>{var I;if(p.stopPropagation(),confirm("¿Eliminar este usuario del sitio?")){const E=await e.removeSharedUser(r.dataset.uid);E.success?(c("✅ Usuario eliminado","success"),(I=document.getElementById("share-device-btn"))==null||I.click()):c("❌ "+E.error,"error")}})})))}),(H=document.getElementById("close-share-modal"))==null||H.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(R=document.getElementById("confirm-share"))==null||R.addEventListener("click",async()=>{var p;if(!m){c("❌ No tienes permisos para compartir","error");return}const t=document.getElementById("share-email").value,n=document.getElementById("share-role").value;if(!t){c("⚠️ Ingresa un correo","error");return}const r=await e.shareDevice(t,n);r.success?(c("✅ "+r.message,"success"),document.getElementById("share-email").value="",(p=document.getElementById("share-device-btn"))==null||p.click()):c("❌ "+r.error,"error")}),(T=document.getElementById("unsubscribe-btn"))==null||T.addEventListener("click",async()=>{if(confirm("¿Desactivar notificaciones de este sitio?")){const t=await G(o);t.success?c("✅ Notificaciones desactivadas","success"):c("❌ "+(t.error||"Error al desactivar"),"error")}}),document.querySelectorAll(".modal-overlay").forEach(t=>{t.addEventListener("click",function(n){n.target===this&&(this.style.display="none")})})}async function _(i,o){const s=document.getElementById("door"+i+"-title"),d=s.textContent,e=prompt("Nombre de la puerta:",d);e&&e.trim()&&e!==d&&(await o.saveDoorName(i,e.trim())?(s.textContent=e.trim(),c("✅ Nombre guardado","success")):c("❌ Error al guardar","error"))}async function Y(i,o,s){var e;(await s.updateSharedUserRole(i,o)).success?(c("✅ Rol actualizado","success"),(e=document.getElementById("share-device-btn"))==null||e.click()):c("❌ Error al actualizar","error")}export{ne as openDoorView};
