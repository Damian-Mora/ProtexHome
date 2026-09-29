import{D as W}from"./deviceController-D3lGhex6.js";import{g as A,r as p,a as C,o as Z,s as b,b as u,c as j,d as q,e as Q,u as Y,f as J,h as K,i as z,j as X}from"./index-DOPKJj-Y.js";const ee=`\r
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
    <div class="modal-overlay device-settings-overlay" id="device-settings-modal">\r
      <section class="modal-content modal-settings device-settings-panel" role="dialog" aria-modal="true" aria-labelledby="door-settings-heading">\r
        <header class="device-settings-header">\r
          <div class="device-settings-heading">\r
            <span class="material-symbols-outlined device-settings-heading-icon" aria-hidden="true">tune</span>\r
            <div>\r
              <h3 id="door-settings-heading">Ajustes del sitio</h3>\r
              <p class="device-settings-name" id="door-settings-name">Puerta Motorizada</p>\r
            </div>\r
          </div>\r
          <button class="device-settings-close" id="close-settings-modal" type="button" aria-label="Cerrar ajustes">\r
            <span class="material-symbols-outlined" aria-hidden="true">close</span>\r
          </button>\r
        </header>\r
\r
        <div class="device-settings-scroll">\r
          <section class="settings-section">\r
            <p class="settings-section-title">Dispositivo</p>\r
            <div class="settings-group">\r
              <div class="settings-field">\r
                <label for="edit-device-name">Nombre del sitio</label>\r
                <div class="settings-name-row">\r
                  <input type="text" id="edit-device-name" class="modal-input" autocomplete="off">\r
                  <button class="settings-save-button" id="save-device-name" type="button" aria-label="Guardar nombre">\r
                    <span class="material-symbols-outlined" aria-hidden="true">save</span>\r
                  </button>\r
                </div>\r
              </div>\r
              <div class="device-info-mini settings-device-info">\r
                <p><span>Serial</span><strong id="info-serial">--</strong></p>\r
                <p><span>Tipo</span><strong>Puerta motorizada</strong></p>\r
                <p><span>Tu rol</span><strong id="info-role">--</strong></p>\r
              </div>\r
            </div>\r
          </section>\r
\r
          <section class="settings-section">\r
            <p class="settings-section-title">Acceso y notificaciones</p>\r
            <div class="settings-group">\r
              <button class="settings-btn" id="unsubscribe-btn" type="button">\r
                <span class="material-symbols-outlined" aria-hidden="true">notifications_off</span>\r
                <span class="settings-btn-text">\r
                  <span class="settings-btn-title">Desactivar notificaciones</span>\r
                  <span class="settings-btn-subtitle">Dejar de recibir alertas de este sitio</span>\r
                </span>\r
                <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
              </button>\r
              <button class="settings-btn" id="share-device-btn" type="button">\r
                <span class="material-symbols-outlined" aria-hidden="true">group_add</span>\r
                <span class="settings-btn-text">\r
                  <span class="settings-btn-title">Compartir sitio</span>\r
                  <span class="settings-btn-subtitle">Administrar las personas con acceso</span>\r
                </span>\r
                <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
              </button>\r
            </div>\r
          </section>\r
\r
          <section class="settings-section danger-zone" id="door-danger-section">\r
            <p class="settings-section-title">Zona de riesgo</p>\r
            <div class="settings-group">\r
              <button class="settings-btn danger" id="delete-device-btn" type="button">\r
                <span class="material-symbols-outlined" aria-hidden="true">delete_forever</span>\r
                <span class="settings-btn-text">\r
                  <span class="settings-btn-title">Eliminar sitio</span>\r
                  <span class="settings-btn-subtitle">Esta acción no se puede deshacer</span>\r
                </span>\r
                <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
              </button>\r
            </div>\r
          </section>\r
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
        <!-- Lista de personas compartidas -->\r
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
  </div>\r
</div>`;class te{constructor(t){this.serial=t,this.db=A()}async loadHistory(t=50){const n=p(this.db,"M/"+this.serial+"/H");try{const a=await C(n);if(a.exists()){const e=a.val(),s=[];for(const d of Object.keys(e)){const r=e[d];s.push({id:d,accion:r.A||0,dispositivo:r.D||0,evento:r.E||0,fecha:r.F||"",nombre:r.N||"",serial:r.S||this.serial})}return s.reverse(),s.slice(0,t)}}catch(a){console.error("Error al cargar historial:",a)}return[]}listenNewEvents(t){const n=p(this.db,"M/"+this.serial+"/H");return Z(n,a=>{if(a.exists()){const e=a.val(),s=[];for(const d of Object.keys(e)){const r=e[d];s.push({id:d,accion:r.A||0,dispositivo:r.D||0,evento:r.E||0,fecha:r.F||"",nombre:r.N||"",serial:r.S||this.serial})}s.reverse(),t(s.slice(0,50))}})}getEventDescription(t){return{1:{text:"Puerta abierta",icon:"door_open",className:"event-1"},2:{text:"Puerta cerrada",icon:"door_closed",className:"event-2"},3:{text:"Alarma activada",icon:"alarm_on",className:"event-3"},4:{text:"Alarma desactivada",icon:"alarm_off",className:"event-4"},5:{text:"Acceso permitido",icon:"check_circle",className:"event-5"},6:{text:"Acceso denegado",icon:"block",className:"event-6"},7:{text:"Dispositivo conectado",icon:"link",className:"event-7"},8:{text:"Dispositivo desconectado",icon:"link_off",className:"event-8"},21:{text:"Comando: Abrir",icon:"send",className:"event-21"},22:{text:"Comando: Cerrar",icon:"send",className:"event-22"}}[t]||{text:"Evento "+t,icon:"info",className:"event-default"}}async renderHistory(t,n="history-list",a=!1){const e=document.getElementById(n);if(!e)return;if(t.length===0){e.innerHTML='<p class="history-empty">Sin eventos registrados</p>';return}const s=await this.loadDoorNames();e.innerHTML=t.map(d=>{const r=this.getEventDescription(d.evento),m=d.dispositivo===1?s.door1:d.dispositivo===2?s.door2:"";let v=r.text;return`
    <div class="history-item">
      <div class="history-icon ${r.className}">
        <span class="material-symbols-outlined">${r.icon}</span>
      </div>
      <div class="history-info">
        <p class="history-text">${m} - ${v}</p>
        <p class="history-meta">${d.nombre} • ${d.fecha}</p>
      </div>
      ${a?`<button class="btn-delete-event" data-id="${d.id}">🗑️</button>`:""}
    </div>`}).join(""),a&&e.querySelectorAll(".btn-delete-event").forEach(d=>{d.addEventListener("click",async r=>{if(r.stopPropagation(),await b("¿Eliminar este evento del historial?","Eliminar evento"))if((await this.deleteEvent(d.dataset.id)).success){u("✅ Evento eliminado","success");const v=await this.loadHistory(50);this.renderHistory(v,n,a)}else u("❌ Error al eliminar","error")})})}async deleteEvent(t){try{const n=p(this.db,"M/"+this.serial+"/H/"+t);return await j(n,null),{success:!0}}catch(n){return console.error("Error al eliminar evento:",n),{success:!1,error:"Error al eliminar"}}}async loadDoorNames(){const t=p(this.db,"M/"+this.serial+"/W/NPG/1/N"),n=p(this.db,"M/"+this.serial+"/W/NPG/2/N");try{const[a,e]=await Promise.all([C(t),C(n)]);return{door1:a.exists()?a.val():"Puerta 1",door2:e.exists()?e.val():"Puerta 2"}}catch{return{door1:"Puerta 1",door2:"Puerta 2"}}}async addCommandEvent(t,n,a){try{const e=new Date,s=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0"),m=String(e.getHours()).padStart(2,"0"),v=String(e.getMinutes()).padStart(2,"0"),f=`${s}/${d}/${r} ${m}:${v}`,g=n==="open"?21:22,h=p(this.db,"M/"+this.serial+"/H/"+Date.now());return await j(h,{A:1,D:t,E:g,F:f,N:a||"Usuario",S:this.serial}),!0}catch(e){return console.error("Error al guardar comando:",e),!1}}}function F(l){const t=document.getElementById("device-status-badge");if(!t)return;const n=t.querySelector(".status-dot"),a=t.querySelector("span:last-child");l==="online"?(n.className="status-dot online",a.textContent="En línea"):(n.className="status-dot offline",a.textContent="Sin conexión")}function ne(l,t){const n=document.getElementById("btn-door"+l),a=document.getElementById("door"+l+"-icon"),e=document.getElementById("door"+l+"-text"),s=document.getElementById("door"+l+"-status-badge");!n||!a||!e||(t===1?(n.style.background="var(--bg-light)",n.style.color="var(--text-primary)",n.style.borderColor="var(--border-color)",a.textContent="lock_open",e.textContent="Abrir Puerta",s&&(s.textContent="Cerrada",s.style.background="var(--success-bg)",s.style.color="var(--success)")):(n.style.background="#fef2f2",n.style.color="#991b1b",n.style.borderColor="#fecaca",a.textContent="lock",e.textContent="Cerrar Puerta",s&&(s.textContent="Abierta",s.style.background="#fef2f2",s.style.color="#991b1b")))}function se(l,t){const n=t==="PRO",a=t==="ADM",e=n||a,s=document.getElementById("share-device-btn");s&&(s.style.display=e?"flex":"none");const d=document.getElementById("edit-device-name");d&&(d.disabled=!1);const r=document.getElementById("edit-door1"),m=document.getElementById("edit-door2");return r&&(r.style.display="inline"),m&&(m.style.display="inline"),{isOwner:n,isAdmin:a,canManage:e}}function V(l,t,n,a,e){const s=document.getElementById("btn-door"+e);s&&s.addEventListener("click",async()=>{if(!navigator.onLine){u("⚠️ Sin conexión a internet");return}if(!await l.isDeviceOnline()){u("⚠️ El dispositivo está sin conexión");return}const r=p(A(),`M/${a}/W/Z/${e}/E`),m=await C(r),f=m.exists()&&m.val()===1?"close":"open";s.disabled=!0,s.classList.add("waiting");const g=s.querySelector("#door"+e+"-text");g.textContent="Enviando...",l.sendDoorCommand(e,async(h,E)=>{if(s.classList.remove("waiting"),s.disabled=!1,h){const I=n.name||n.email||"Usuario";await t.addCommandEvent(e,f,I),g.textContent="Comando enviado"}else g.textContent="Sin respuesta",setTimeout(async()=>{const I=p(A(),`M/${a}/W/Z/${e}/E`),B=await C(I),x=B.exists()&&B.val()===1;g.textContent=x?"Cerrar Puerta":"Abrir Puerta"},2500)})})}async function re(l,t,n){var P,k,N,M,L,$,H,R,O,_,U,T;const a=document.getElementById("main-content");a.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const e=new W(l,t),s=await e.loadDeviceData();if(!s){await q("No se encontró el dispositivo solicitado.","Dispositivo no encontrado");return}Q(t,"device"),a.innerHTML=ee;const d=await e.getUserRole(),{canManage:r}=se(e,d);document.getElementById("device-name").textContent=s.name,document.getElementById("info-serial").textContent=s.serial,document.getElementById("edit-device-name").value=s.name,document.getElementById("info-role").textContent=d,F(s.status);const m=d==="PRO"||d==="ADM",v=new te(t),f=await v.loadHistory(20);v.renderHistory(f,"history-list",m);const g=v.listenNewEvents(i=>{v.renderHistory(i,"history-list",m)}),h=await e.loadDoorNames();document.getElementById("door1-title").textContent=h.door1,document.getElementById("door2-title").textContent=h.door2,r&&((P=document.getElementById("edit-door1"))==null||P.addEventListener("click",()=>G(1,e)),(k=document.getElementById("edit-door2"))==null||k.addEventListener("click",()=>G(2,e)));const E=[],I=e.listenOnlineStatus(i=>{const o=z();o===t?F(i):console.log(`⛔ Ignorada actualización de estado para ${t} (serial activo ${o})`)});E.push(I);const B=e.listenDoorPosition((i,o)=>{const c=z();if(c!==t){console.log(`⛔ Ignorada posición de puerta ${i} de ${t} (serial activo ${c})`);return}ne(i,o===1?2:1);const D=document.getElementById("btn-door"+i),w=document.getElementById("door"+i+"-text");D&&w&&(w.textContent=o===1?"Cerrar Puerta":"Abrir Puerta");const S=document.getElementById("door"+i+"-status-badge");S&&(S.textContent=o===1?"Abierta":"Cerrada",S.style.background=o===1?"#fef2f2":"var(--success-bg)",S.style.color=o===1?"#991b1b":"var(--success)")});E.push(B),E.push(g),V(e,v,l,t,1),V(e,v,l,t,2);const x=()=>{E.forEach(i=>{typeof i=="function"&&i()}),X()};(N=document.getElementById("back-to-dashboard"))==null||N.addEventListener("click",()=>{x(),typeof n=="function"&&n()}),(M=document.getElementById("device-menu-btn"))==null||M.addEventListener("click",()=>{const i=document.getElementById("device-name").textContent;document.getElementById("door-settings-name").textContent=i,document.getElementById("edit-device-name").value=i,document.getElementById("edit-device-name").dataset.original=i;const o=document.getElementById("save-device-name");o&&(o.style.display="none");const c=document.getElementById("door-danger-section");c&&(c.style.display=d==="PRO"?"block":"none"),document.getElementById("device-settings-modal").style.display="flex"}),(L=document.getElementById("edit-device-name"))==null||L.addEventListener("input",()=>{const i=document.getElementById("edit-device-name"),o=document.getElementById("save-device-name"),c=i.dataset.original||"";o.style.display=i.value!==c?"flex":"none"}),($=document.getElementById("close-settings-modal"))==null||$.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(H=document.getElementById("save-device-name"))==null||H.addEventListener("click",async()=>{const i=document.getElementById("edit-device-name").value.trim();if(!i){await q("Ingresa un nombre para el sitio.","Nombre requerido");return}const o=A();await Y(p(o,"US/"+l.uid+"/M/"+t),{N:i}),document.getElementById("device-name").textContent=i,document.getElementById("door-settings-name").textContent=i,document.getElementById("edit-device-name").dataset.original=i,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),(R=document.getElementById("delete-device-btn"))==null||R.addEventListener("click",async()=>{if(await e.getUserRole()==="PRO"){if(await b("Eres el propietario. El sitio se eliminará para todos los usuarios.","Eliminar sitio para todos")&&await b("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final")){const o=await e.deleteDeviceForAll();o.success?(x(),u("✅ Sitio eliminado","success"),setTimeout(()=>n(),1e3)):u("❌ "+o.error,"error")}}else if(await b("¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.","Quitar sitio")){const o=await e.removeDeviceFromMyAccount();o.success?(x(),u("✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>n(),1e3)):u("❌ "+o.error,"error")}}),(O=document.getElementById("share-device-btn"))==null||O.addEventListener("click",async()=>{if(!r){u("❌ No tienes permisos para ver usuarios","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const i=await e.loadSharedUsers(),o=document.getElementById("shared-list");o&&(i.length===0?o.innerHTML='<p class="shared-list-message">No has compartido este sitio</p>':(o.innerHTML=i.map(c=>`
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
  </div>`).join(""),d==="PRO"&&o.querySelectorAll(".role-select").forEach(c=>{c.addEventListener("change",async y=>{y.stopPropagation(),await b("¿Cambiar el rol de este usuario?","Cambiar permisos")&&await ae(c.dataset.uid,c.value,e)})}),o.querySelectorAll(".btn-remove-user").forEach(c=>{c.addEventListener("click",async y=>{var D;if(y.stopPropagation(),await b("¿Eliminar este usuario del sitio?","Quitar usuario")){const w=await e.removeSharedUser(c.dataset.uid);w.success?(u("✅ Usuario eliminado","success"),(D=document.getElementById("share-device-btn"))==null||D.click()):u("❌ "+w.error,"error")}})})))}),(_=document.getElementById("close-share-modal"))==null||_.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(U=document.getElementById("confirm-share"))==null||U.addEventListener("click",async()=>{var y;if(!r){u("❌ No tienes permisos para compartir","error");return}const i=document.getElementById("share-email").value,o=document.getElementById("share-role").value;if(!i){u("⚠️ Ingresa un correo","error");return}const c=await e.shareDevice(i,o);c.success?(u("✅ "+c.message,"success"),document.getElementById("share-email").value="",(y=document.getElementById("share-device-btn"))==null||y.click()):u("❌ "+c.error,"error")}),(T=document.getElementById("unsubscribe-btn"))==null||T.addEventListener("click",async()=>{if(await b("¿Desactivar las notificaciones de este sitio?","Desactivar notificaciones")){const i=await J(t);i.success?u("✅ Notificaciones desactivadas","success"):u("❌ "+(i.error||"Error al desactivar"),"error")}}),document.querySelectorAll(".modal-overlay").forEach(i=>{i.addEventListener("click",function(o){o.target===this&&(this.style.display="none")})})}async function G(l,t){const n=document.getElementById("door"+l+"-title"),a=n.textContent,e=await K("Escribe el nuevo nombre de la puerta.",a,"Editar nombre");e&&e.trim()&&e!==a&&(await t.saveDoorName(l,e.trim())?(n.textContent=e.trim(),u("✅ Nombre guardado","success")):u("❌ Error al guardar","error"))}async function ae(l,t,n){var e;(await n.updateSharedUserRole(l,t)).success?(u("✅ Rol actualizado","success"),(e=document.getElementById("share-device-btn"))==null||e.click()):u("❌ Error al actualizar","error")}export{re as openDoorView};
