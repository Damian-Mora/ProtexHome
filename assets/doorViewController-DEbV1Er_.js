import{D as G}from"./deviceController-DpAouRwO.js";import{g as A,r as p,a as w,o as Q,s as b,b as m,c as q,d as F,e as Z,u as Y,f as J,h as K,i as V,j as X}from"./index-CLC9GgdE.js";const ee=`\r
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
        <p class="loading-placeholder">Cargando...</p>\r
      </div>\r
    </div>\r
\r
    <!-- Modal de Configuración -->\r
    <div class="modal-overlay" id="device-settings-modal">\r
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
    <div class="modal-overlay" id="share-modal">\r
      <div class="modal-content">\r
        <h3>Compartir Sitio</h3>\r
\r
        <!-- Lista de personas compartidas -->\r
        <div id="shared-list" class="shared-users-list">\r
          <p class="loading-placeholder">Cargando...</p>\r
        </div>\r
\r
        <!-- Agregar nuevo -->\r
        <div class="share-add-section">\r
          <p class="share-add-title">\r
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
</div>`;class te{constructor(t){this.serial=t,this.db=A()}async loadHistory(t=50){const n=p(this.db,"M/"+this.serial+"/H");try{const o=await w(n);if(o.exists()){const e=o.val(),s=[];for(const d of Object.keys(e)){const i=e[d];s.push({id:d,accion:i.A||0,dispositivo:i.D||0,evento:i.E||0,fecha:i.F||"",nombre:i.N||"",serial:i.S||this.serial})}return s.reverse(),s.slice(0,t)}}catch(o){console.error("Error al cargar historial:",o)}return[]}listenNewEvents(t){const n=p(this.db,"M/"+this.serial+"/H");return Q(n,o=>{if(o.exists()){const e=o.val(),s=[];for(const d of Object.keys(e)){const i=e[d];s.push({id:d,accion:i.A||0,dispositivo:i.D||0,evento:i.E||0,fecha:i.F||"",nombre:i.N||"",serial:i.S||this.serial})}s.reverse(),t(s.slice(0,50))}})}getEventDescription(t){return{1:{text:"Puerta abierta",icon:"door_open",className:"event-1"},2:{text:"Puerta cerrada",icon:"door_closed",className:"event-2"},3:{text:"Alarma activada",icon:"alarm_on",className:"event-3"},4:{text:"Alarma desactivada",icon:"alarm_off",className:"event-4"},5:{text:"Acceso permitido",icon:"check_circle",className:"event-5"},6:{text:"Acceso denegado",icon:"block",className:"event-6"},7:{text:"Dispositivo conectado",icon:"link",className:"event-7"},8:{text:"Dispositivo desconectado",icon:"link_off",className:"event-8"},21:{text:"Comando: Abrir",icon:"send",className:"event-21"},22:{text:"Comando: Cerrar",icon:"send",className:"event-22"}}[t]||{text:"Evento "+t,icon:"info",className:"event-default"}}async renderHistory(t,n="history-list",o=!1){const e=document.getElementById(n);if(!e)return;if(t.length===0){e.innerHTML='<p class="history-empty">Sin eventos registrados</p>';return}const s=await this.loadDoorNames();e.innerHTML=t.map(d=>{const i=this.getEventDescription(d.evento),u=d.dispositivo===1?s.door1:d.dispositivo===2?s.door2:"";let v=i.text;return`
    <div class="history-item">
      <div class="history-icon ${i.className}">
        <span class="material-symbols-outlined">${i.icon}</span>
      </div>
      <div class="history-info">
        <p class="history-text">${u} - ${v}</p>
        <p class="history-meta">${d.nombre} • ${d.fecha}</p>
      </div>
      ${o?`<button class="btn-delete-event" data-id="${d.id}">🗑️</button>`:""}
    </div>`}).join(""),o&&e.querySelectorAll(".btn-delete-event").forEach(d=>{d.addEventListener("click",async i=>{if(i.stopPropagation(),await b("¿Eliminar este evento del historial?","Eliminar evento"))if((await this.deleteEvent(d.dataset.id)).success){m("✅ Evento eliminado","success");const v=await this.loadHistory(50);this.renderHistory(v,n,o)}else m("❌ Error al eliminar","error")})})}async deleteEvent(t){try{const n=p(this.db,"M/"+this.serial+"/H/"+t);return await q(n,null),{success:!0}}catch(n){return console.error("Error al eliminar evento:",n),{success:!1,error:"Error al eliminar"}}}async loadDoorNames(){const t=p(this.db,"M/"+this.serial+"/W/NPG/1/N"),n=p(this.db,"M/"+this.serial+"/W/NPG/2/N");try{const[o,e]=await Promise.all([w(t),w(n)]);return{door1:o.exists()?o.val():"Puerta 1",door2:e.exists()?e.val():"Puerta 2"}}catch{return{door1:"Puerta 1",door2:"Puerta 2"}}}async addCommandEvent(t,n,o){try{const e=new Date,s=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),u=String(e.getHours()).padStart(2,"0"),v=String(e.getMinutes()).padStart(2,"0"),h=`${s}/${d}/${i} ${u}:${v}`,y=n==="open"?21:22,f=p(this.db,"M/"+this.serial+"/H/"+Date.now());return await q(f,{A:1,D:t,E:y,F:h,N:o||"Usuario",S:this.serial}),!0}catch(e){return console.error("Error al guardar comando:",e),!1}}}function j(l){const t=document.getElementById("device-status-badge");if(!t)return;const n=t.querySelector(".status-dot"),o=t.querySelector("span:last-child");l==="online"?(n.className="status-dot online",o.textContent="En línea"):(n.className="status-dot offline",o.textContent="Sin conexión")}function ne(l,t){const n=document.getElementById("btn-door"+l),o=document.getElementById("door"+l+"-icon"),e=document.getElementById("door"+l+"-text"),s=document.getElementById("door"+l+"-status-badge");!n||!o||!e||(t===1?(n.style.background="var(--bg-light)",n.style.color="var(--text-primary)",n.style.borderColor="var(--border-color)",o.textContent="lock_open",e.textContent="Abrir Puerta",s&&(s.textContent="Cerrada",s.style.background="var(--success-bg)",s.style.color="var(--success)")):(n.style.background="#fef2f2",n.style.color="#991b1b",n.style.borderColor="#fecaca",o.textContent="lock",e.textContent="Cerrar Puerta",s&&(s.textContent="Abierta",s.style.background="#fef2f2",s.style.color="#991b1b")))}function se(l,t){const n=t==="PRO",o=t==="ADM",e=n||o,s=document.getElementById("share-device-btn");s&&(s.style.display=e?"flex":"none");const d=document.getElementById("edit-device-name");d&&(d.disabled=!1);const i=document.getElementById("edit-door1"),u=document.getElementById("edit-door2");return i&&(i.style.display="inline"),u&&(u.style.display="inline"),{isOwner:n,isAdmin:o,canManage:e}}function z(l,t,n,o,e){const s=document.getElementById("btn-door"+e);s&&s.addEventListener("click",async()=>{if(!navigator.onLine){m("⚠️ Sin conexión a internet");return}if(!await l.isDeviceOnline()){m("⚠️ El dispositivo está sin conexión");return}const i=p(A(),`M/${o}/W/Z/${e}/E`),u=await w(i),h=u.exists()&&u.val()===1?"close":"open";s.disabled=!0,s.classList.add("waiting");const y=s.querySelector("#door"+e+"-text");y.textContent="Enviando...",l.sendDoorCommand(e,async(f,E)=>{if(s.classList.remove("waiting"),s.disabled=!1,f){const I=n.name||n.email||"Usuario";await t.addCommandEvent(e,h,I),y.textContent="Comando enviado"}else y.textContent="Sin respuesta",setTimeout(async()=>{const I=p(A(),`M/${o}/W/Z/${e}/E`),B=await w(I),x=B.exists()&&B.val()===1;y.textContent=x?"Cerrar Puerta":"Abrir Puerta"},2500)})})}async function ie(l,t,n){var k,N,P,M,L,$,H,R,O,U,T,_;const o=document.getElementById("main-content");o.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const e=new G(l,t),s=await e.loadDeviceData();if(!s){await F("No se encontró el dispositivo solicitado.","Dispositivo no encontrado");return}Z(t,"device"),o.innerHTML=ee;const d=await e.getUserRole(),{canManage:i}=se(e,d);document.getElementById("device-name").textContent=s.name,document.getElementById("info-serial").textContent=s.serial,document.getElementById("edit-device-name").value=s.name,document.getElementById("info-role").textContent=d,j(s.status);const u=d==="PRO"||d==="ADM",v=new te(t),h=await v.loadHistory(20);v.renderHistory(h,"history-list",u);const y=v.listenNewEvents(a=>{v.renderHistory(a,"history-list",u)}),f=await e.loadDoorNames();document.getElementById("door1-title").textContent=f.door1,document.getElementById("door2-title").textContent=f.door2,i&&((k=document.getElementById("edit-door1"))==null||k.addEventListener("click",()=>W(1,e)),(N=document.getElementById("edit-door2"))==null||N.addEventListener("click",()=>W(2,e)));const E=[],I=e.listenOnlineStatus(a=>{const r=V();r===t?j(a):console.log(`⛔ Ignorada actualización de estado para ${t} (serial activo ${r})`)});E.push(I);const B=e.listenDoorPosition((a,r)=>{const c=V();if(c!==t){console.log(`⛔ Ignorada posición de puerta ${a} de ${t} (serial activo ${c})`);return}ne(a,r===1?2:1);const S=document.getElementById("btn-door"+a),C=document.getElementById("door"+a+"-text");S&&C&&(C.textContent=r===1?"Cerrar Puerta":"Abrir Puerta");const D=document.getElementById("door"+a+"-status-badge");D&&(D.textContent=r===1?"Abierta":"Cerrada",D.style.background=r===1?"#fef2f2":"var(--success-bg)",D.style.color=r===1?"#991b1b":"var(--success)")});E.push(B),E.push(y),z(e,v,l,t,1),z(e,v,l,t,2);const x=()=>{E.forEach(a=>{typeof a=="function"&&a()}),X()};(P=document.getElementById("back-to-dashboard"))==null||P.addEventListener("click",()=>{x(),typeof n=="function"&&n()}),(M=document.getElementById("device-menu-btn"))==null||M.addEventListener("click",()=>{const a=document.getElementById("device-name").textContent;document.getElementById("edit-device-name").value=a,document.getElementById("edit-device-name").dataset.original=a;const r=document.getElementById("save-device-name");r&&(r.style.display="none"),document.getElementById("device-settings-modal").style.display="flex"}),(L=document.getElementById("edit-device-name"))==null||L.addEventListener("input",()=>{const a=document.getElementById("edit-device-name"),r=document.getElementById("save-device-name"),c=a.dataset.original||"";r.style.display=a.value!==c?"flex":"none"}),($=document.getElementById("close-settings-modal"))==null||$.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(H=document.getElementById("save-device-name"))==null||H.addEventListener("click",async()=>{const a=document.getElementById("edit-device-name").value.trim();if(!a){await F("Ingresa un nombre para el sitio.","Nombre requerido");return}const r=A();await Y(p(r,"US/"+l.uid+"/M/"+t),{N:a}),document.getElementById("device-name").textContent=a,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),(R=document.getElementById("delete-device-btn"))==null||R.addEventListener("click",async()=>{if(await e.getUserRole()==="PRO"){if(await b("Eres el propietario. El sitio se eliminará para todos los usuarios.","Eliminar sitio para todos")&&await b("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final")){const r=await e.deleteDeviceForAll();r.success?(x(),m("✅ Sitio eliminado","success"),setTimeout(()=>n(),1e3)):m("❌ "+r.error,"error")}}else if(await b("¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.","Quitar sitio")){const r=await e.removeDeviceFromMyAccount();r.success?(x(),m("✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>n(),1e3)):m("❌ "+r.error,"error")}}),(O=document.getElementById("share-device-btn"))==null||O.addEventListener("click",async()=>{if(!i){m("❌ No tienes permisos para ver usuarios","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const a=await e.loadSharedUsers(),r=document.getElementById("shared-list");r&&(a.length===0?r.innerHTML='<p class="shared-list-message">No has compartido este sitio</p>':(r.innerHTML=a.map(c=>`
  <div class="shared-user-row">
    <div class="shared-user-info">
      <p class="shared-user-name">${c.name}</p>
      <p class="shared-user-email">${c.email}</p>
    </div>
    <select class="role-select" data-uid="${c.uid}" ${d!=="PRO"?"disabled":""}>
      <option value="INV" ${c.role==="INV"?"selected":""}>Invitado</option>
      <option value="ADM" ${c.role==="ADM"?"selected":""}>Admin</option>
    </select>
    <button class="btn-remove-user" data-uid="${c.uid}" aria-label="Eliminar ${c.name}" title="Eliminar usuario">🗑️</button>
  </div>`).join(""),d==="PRO"&&r.querySelectorAll(".role-select").forEach(c=>{c.addEventListener("change",async g=>{g.stopPropagation(),await b("¿Cambiar el rol de este usuario?","Cambiar permisos")&&await oe(c.dataset.uid,c.value,e)})}),r.querySelectorAll(".btn-remove-user").forEach(c=>{c.addEventListener("click",async g=>{var S;if(g.stopPropagation(),await b("¿Eliminar este usuario del sitio?","Quitar usuario")){const C=await e.removeSharedUser(c.dataset.uid);C.success?(m("✅ Usuario eliminado","success"),(S=document.getElementById("share-device-btn"))==null||S.click()):m("❌ "+C.error,"error")}})})))}),(U=document.getElementById("close-share-modal"))==null||U.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(T=document.getElementById("confirm-share"))==null||T.addEventListener("click",async()=>{var g;if(!i){m("❌ No tienes permisos para compartir","error");return}const a=document.getElementById("share-email").value,r=document.getElementById("share-role").value;if(!a){m("⚠️ Ingresa un correo","error");return}const c=await e.shareDevice(a,r);c.success?(m("✅ "+c.message,"success"),document.getElementById("share-email").value="",(g=document.getElementById("share-device-btn"))==null||g.click()):m("❌ "+c.error,"error")}),(_=document.getElementById("unsubscribe-btn"))==null||_.addEventListener("click",async()=>{if(await b("¿Desactivar las notificaciones de este sitio?","Desactivar notificaciones")){const a=await J(t);a.success?m("✅ Notificaciones desactivadas","success"):m("❌ "+(a.error||"Error al desactivar"),"error")}}),document.querySelectorAll(".modal-overlay").forEach(a=>{a.addEventListener("click",function(r){r.target===this&&(this.style.display="none")})})}async function W(l,t){const n=document.getElementById("door"+l+"-title"),o=n.textContent,e=await K("Escribe el nuevo nombre de la puerta.",o,"Editar nombre");e&&e.trim()&&e!==o&&(await t.saveDoorName(l,e.trim())?(n.textContent=e.trim(),m("✅ Nombre guardado","success")):m("❌ Error al guardar","error"))}async function oe(l,t,n){var e;(await n.updateSharedUserRole(l,t)).success?(m("✅ Rol actualizado","success"),(e=document.getElementById("share-device-btn"))==null||e.click()):m("❌ Error al actualizar","error")}export{ie as openDoorView};
