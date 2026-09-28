import{D as G}from"./deviceController-CaDN7QBB.js";import{g as A,r as p,a as C,o as Q,s as b,b as u,c as z,d as q,e as Z,u as Y,f as J,h as K,i as j,j as X}from"./index-BUr7hRho.js";const ee=`\r
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
</div>`;class te{constructor(t){this.serial=t,this.db=A()}async loadHistory(t=50){const n=p(this.db,"M/"+this.serial+"/H");try{const s=await C(n);if(s.exists()){const e=s.val(),o=[];for(const d of Object.keys(e)){const a=e[d];o.push({id:d,accion:a.A||0,dispositivo:a.D||0,evento:a.E||0,fecha:a.F||"",nombre:a.N||"",serial:a.S||this.serial})}return o.reverse(),o.slice(0,t)}}catch(s){console.error("Error al cargar historial:",s)}return[]}listenNewEvents(t){const n=p(this.db,"M/"+this.serial+"/H");return Q(n,s=>{if(s.exists()){const e=s.val(),o=[];for(const d of Object.keys(e)){const a=e[d];o.push({id:d,accion:a.A||0,dispositivo:a.D||0,evento:a.E||0,fecha:a.F||"",nombre:a.N||"",serial:a.S||this.serial})}o.reverse(),t(o.slice(0,50))}})}getEventDescription(t){return{1:{text:"Puerta abierta",icon:"door_open",color:"#16a34a"},2:{text:"Puerta cerrada",icon:"door_closed",color:"#1a73e8"},3:{text:"Alarma activada",icon:"alarm_on",color:"#dc2626"},4:{text:"Alarma desactivada",icon:"alarm_off",color:"#888888"},5:{text:"Acceso permitido",icon:"check_circle",color:"#16a34a"},6:{text:"Acceso denegado",icon:"block",color:"#dc2626"},7:{text:"Dispositivo conectado",icon:"link",color:"#16a34a"},8:{text:"Dispositivo desconectado",icon:"link_off",color:"#f59e0b"},21:{text:"Comando: Abrir",icon:"send",color:"#f59e0b"},22:{text:"Comando: Cerrar",icon:"send",color:"#f59e0b"}}[t]||{text:"Evento "+t,icon:"info",color:"#888888"}}async renderHistory(t,n="history-list",s=!1){const e=document.getElementById(n);if(!e)return;if(t.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin eventos registrados</p>';return}const o=await this.loadDoorNames();e.innerHTML=t.map(d=>{const a=this.getEventDescription(d.evento),m=d.dispositivo===1?o.door1:d.dispositivo===2?o.door2:"";let v=a.text;return`
    <div class="history-item">
      <div class="history-icon" style="background:${a.color}20;color:${a.color};">
        <span class="material-symbols-outlined">${a.icon}</span>
      </div>
      <div class="history-info">
        <p class="history-text">${m} - ${v}</p>
        <p class="history-meta">${d.nombre} • ${d.fecha}</p>
      </div>
      ${s?`<button class="btn-delete-event" data-id="${d.id}">🗑️</button>`:""}
    </div>`}).join(""),s&&e.querySelectorAll(".btn-delete-event").forEach(d=>{d.addEventListener("click",async a=>{if(a.stopPropagation(),await b("¿Eliminar este evento del historial?","Eliminar evento"))if((await this.deleteEvent(d.dataset.id)).success){u("✅ Evento eliminado","success");const v=await this.loadHistory(50);this.renderHistory(v,n,s)}else u("❌ Error al eliminar","error")})})}async deleteEvent(t){try{const n=p(this.db,"M/"+this.serial+"/H/"+t);return await z(n,null),{success:!0}}catch(n){return console.error("Error al eliminar evento:",n),{success:!1,error:"Error al eliminar"}}}async loadDoorNames(){const t=p(this.db,"M/"+this.serial+"/W/NPG/1/N"),n=p(this.db,"M/"+this.serial+"/W/NPG/2/N");try{const[s,e]=await Promise.all([C(t),C(n)]);return{door1:s.exists()?s.val():"Puerta 1",door2:e.exists()?e.val():"Puerta 2"}}catch{return{door1:"Puerta 1",door2:"Puerta 2"}}}async addCommandEvent(t,n,s){try{const e=new Date,o=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),m=String(e.getHours()).padStart(2,"0"),v=String(e.getMinutes()).padStart(2,"0"),h=`${o}/${d}/${a} ${m}:${v}`,y=n==="open"?21:22,f=p(this.db,"M/"+this.serial+"/H/"+Date.now());return await z(f,{A:1,D:t,E:y,F:h,N:s||"Usuario",S:this.serial}),!0}catch(e){return console.error("Error al guardar comando:",e),!1}}}function F(l){const t=document.getElementById("device-status-badge");if(!t)return;const n=t.querySelector(".status-dot"),s=t.querySelector("span:last-child");l==="online"?(n.className="status-dot online",s.textContent="En línea"):(n.className="status-dot offline",s.textContent="Sin conexión")}function ne(l,t){const n=document.getElementById("btn-door"+l),s=document.getElementById("door"+l+"-icon"),e=document.getElementById("door"+l+"-text"),o=document.getElementById("door"+l+"-status-badge");!n||!s||!e||(t===1?(n.style.background="var(--bg-light)",n.style.color="var(--text-primary)",n.style.borderColor="var(--border-color)",s.textContent="lock_open",e.textContent="Abrir Puerta",o&&(o.textContent="Cerrada",o.style.background="var(--success-bg)",o.style.color="var(--success)")):(n.style.background="#fef2f2",n.style.color="#991b1b",n.style.borderColor="#fecaca",s.textContent="lock",e.textContent="Cerrar Puerta",o&&(o.textContent="Abierta",o.style.background="#fef2f2",o.style.color="#991b1b")))}function oe(l,t){const n=t==="PRO",s=t==="ADM",e=n||s,o=document.getElementById("share-device-btn");o&&(o.style.display=e?"flex":"none");const d=document.getElementById("edit-device-name");d&&(d.disabled=!1);const a=document.getElementById("edit-door1"),m=document.getElementById("edit-door2");return a&&(a.style.display="inline"),m&&(m.style.display="inline"),{isOwner:n,isAdmin:s,canManage:e}}function V(l,t,n,s,e){const o=document.getElementById("btn-door"+e);o&&o.addEventListener("click",async()=>{if(!navigator.onLine){u("⚠️ Sin conexión a internet");return}if(!await l.isDeviceOnline()){u("⚠️ El dispositivo está sin conexión");return}const a=p(A(),`M/${s}/W/Z/${e}/E`),m=await C(a),h=m.exists()&&m.val()===1?"close":"open";o.disabled=!0,o.classList.add("waiting");const y=o.querySelector("#door"+e+"-text");y.textContent="Enviando...",l.sendDoorCommand(e,async(f,E)=>{if(o.classList.remove("waiting"),o.disabled=!1,f){const x=n.name||n.email||"Usuario";await t.addCommandEvent(e,h,x),y.textContent="Comando enviado"}else y.textContent="Sin respuesta",setTimeout(async()=>{const x=p(A(),`M/${s}/W/Z/${e}/E`),B=await C(x),I=B.exists()&&B.val()===1;y.textContent=I?"Cerrar Puerta":"Abrir Puerta"},2500)})})}async function ie(l,t,n){var k,P,M,L,$,H,N,R,O,U,T,_;const s=document.getElementById("main-content");s.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const e=new G(l,t),o=await e.loadDeviceData();if(!o){await q("No se encontró el dispositivo solicitado.","Dispositivo no encontrado");return}Z(t,"device"),s.innerHTML=ee;const d=await e.getUserRole(),{canManage:a}=oe(e,d);document.getElementById("device-name").textContent=o.name,document.getElementById("info-serial").textContent=o.serial,document.getElementById("edit-device-name").value=o.name,document.getElementById("info-role").textContent=d,F(o.status);const m=d==="PRO"||d==="ADM",v=new te(t),h=await v.loadHistory(20);v.renderHistory(h,"history-list",m);const y=v.listenNewEvents(r=>{v.renderHistory(r,"history-list",m)}),f=await e.loadDoorNames();document.getElementById("door1-title").textContent=f.door1,document.getElementById("door2-title").textContent=f.door2,a&&((k=document.getElementById("edit-door1"))==null||k.addEventListener("click",()=>W(1,e)),(P=document.getElementById("edit-door2"))==null||P.addEventListener("click",()=>W(2,e)));const E=[],x=e.listenOnlineStatus(r=>{const i=j();i===t?F(r):console.log(`⛔ Ignorada actualización de estado para ${t} (serial activo ${i})`)});E.push(x);const B=e.listenDoorPosition((r,i)=>{const c=j();if(c!==t){console.log(`⛔ Ignorada posición de puerta ${r} de ${t} (serial activo ${c})`);return}ne(r,i===1?2:1);const S=document.getElementById("btn-door"+r),w=document.getElementById("door"+r+"-text");S&&w&&(w.textContent=i===1?"Cerrar Puerta":"Abrir Puerta");const D=document.getElementById("door"+r+"-status-badge");D&&(D.textContent=i===1?"Abierta":"Cerrada",D.style.background=i===1?"#fef2f2":"var(--success-bg)",D.style.color=i===1?"#991b1b":"var(--success)")});E.push(B),E.push(y),V(e,v,l,t,1),V(e,v,l,t,2);const I=()=>{E.forEach(r=>{typeof r=="function"&&r()}),X()};(M=document.getElementById("back-to-dashboard"))==null||M.addEventListener("click",()=>{I(),typeof n=="function"&&n()}),(L=document.getElementById("device-menu-btn"))==null||L.addEventListener("click",()=>{const r=document.getElementById("device-name").textContent;document.getElementById("edit-device-name").value=r,document.getElementById("edit-device-name").dataset.original=r;const i=document.getElementById("save-device-name");i&&(i.style.display="none"),document.getElementById("device-settings-modal").style.display="flex"}),($=document.getElementById("edit-device-name"))==null||$.addEventListener("input",()=>{const r=document.getElementById("edit-device-name"),i=document.getElementById("save-device-name"),c=r.dataset.original||"";i.style.display=r.value!==c?"flex":"none"}),(H=document.getElementById("close-settings-modal"))==null||H.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(N=document.getElementById("save-device-name"))==null||N.addEventListener("click",async()=>{const r=document.getElementById("edit-device-name").value.trim();if(!r){await q("Ingresa un nombre para el sitio.","Nombre requerido");return}const i=A();await Y(p(i,"US/"+l.uid+"/M/"+t),{N:r}),document.getElementById("device-name").textContent=r,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),(R=document.getElementById("delete-device-btn"))==null||R.addEventListener("click",async()=>{if(await e.getUserRole()==="PRO"){if(await b("Eres el propietario. El sitio se eliminará para todos los usuarios.","Eliminar sitio para todos")&&await b("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final")){const i=await e.deleteDeviceForAll();i.success?(I(),u("✅ Sitio eliminado","success"),setTimeout(()=>n(),1e3)):u("❌ "+i.error,"error")}}else if(await b("¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.","Quitar sitio")){const i=await e.removeDeviceFromMyAccount();i.success?(I(),u("✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>n(),1e3)):u("❌ "+i.error,"error")}}),(O=document.getElementById("share-device-btn"))==null||O.addEventListener("click",async()=>{if(!a){u("❌ No tienes permisos para ver usuarios","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const r=await e.loadSharedUsers(),i=document.getElementById("shared-list");i&&(r.length===0?i.innerHTML='<p style="color:var(--text-light);text-align:center;padding:10px;">No has compartido este sitio</p>':(i.innerHTML=r.map(c=>`
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border-color);">
    <div style="flex:1;">
      <p style="font-weight:600;margin:0;font-size:0.9rem;">${c.name}</p>
      <p style="font-size:0.7rem;color:var(--text-light);margin:2px 0 0;">${c.email}</p>
    </div>
    <select class="role-select" data-uid="${c.uid}" ${d!=="PRO"?"disabled":""} style="font-size:0.75rem;padding:4px 8px;border-radius:6px;border:1px solid var(--border-color);margin-right:8px;">
      <option value="INV" ${c.role==="INV"?"selected":""}>Invitado</option>
      <option value="ADM" ${c.role==="ADM"?"selected":""}>Admin</option>
    </select>
    <button class="btn-remove-user" data-uid="${c.uid}" style="background:none;border:none;color:var(--error);cursor:pointer;font-size:16px;">🗑️</button>
  </div>`).join(""),d==="PRO"&&i.querySelectorAll(".role-select").forEach(c=>{c.addEventListener("change",async g=>{g.stopPropagation(),await b("¿Cambiar el rol de este usuario?","Cambiar permisos")&&await se(c.dataset.uid,c.value,e)})}),i.querySelectorAll(".btn-remove-user").forEach(c=>{c.addEventListener("click",async g=>{var S;if(g.stopPropagation(),await b("¿Eliminar este usuario del sitio?","Quitar usuario")){const w=await e.removeSharedUser(c.dataset.uid);w.success?(u("✅ Usuario eliminado","success"),(S=document.getElementById("share-device-btn"))==null||S.click()):u("❌ "+w.error,"error")}})})))}),(U=document.getElementById("close-share-modal"))==null||U.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(T=document.getElementById("confirm-share"))==null||T.addEventListener("click",async()=>{var g;if(!a){u("❌ No tienes permisos para compartir","error");return}const r=document.getElementById("share-email").value,i=document.getElementById("share-role").value;if(!r){u("⚠️ Ingresa un correo","error");return}const c=await e.shareDevice(r,i);c.success?(u("✅ "+c.message,"success"),document.getElementById("share-email").value="",(g=document.getElementById("share-device-btn"))==null||g.click()):u("❌ "+c.error,"error")}),(_=document.getElementById("unsubscribe-btn"))==null||_.addEventListener("click",async()=>{if(await b("¿Desactivar las notificaciones de este sitio?","Desactivar notificaciones")){const r=await J(t);r.success?u("✅ Notificaciones desactivadas","success"):u("❌ "+(r.error||"Error al desactivar"),"error")}}),document.querySelectorAll(".modal-overlay").forEach(r=>{r.addEventListener("click",function(i){i.target===this&&(this.style.display="none")})})}async function W(l,t){const n=document.getElementById("door"+l+"-title"),s=n.textContent,e=await K("Escribe el nuevo nombre de la puerta.",s,"Editar nombre");e&&e.trim()&&e!==s&&(await t.saveDoorName(l,e.trim())?(n.textContent=e.trim(),u("✅ Nombre guardado","success")):u("❌ Error al guardar","error"))}async function se(l,t,n){var e;(await n.updateSharedUserRole(l,t)).success?(u("✅ Rol actualizado","success"),(e=document.getElementById("share-device-btn"))==null||e.click()):u("❌ Error al actualizar","error")}export{ie as openDoorView};
