import{D as Q}from"./deviceController-DuTASral.js";import{g as k,r as p,a as w,o as Z,s as b,b as u,c as q,d as z,e as Y,u as J,f as B,h as K,i as X,j as F,k as ee}from"./index-tHFbVeK9.js";const te=`\r
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
              <button class="settings-btn manager-only" id="share-device-btn" type="button">\r
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
                  <span class="settings-btn-title" id="delete-device-title">Eliminar sitio</span>\r
                  <span class="settings-btn-subtitle" id="delete-device-subtitle">Esta acción no se puede deshacer</span>\r
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
</div>`;class ne{constructor(t){this.serial=t,this.db=k()}async loadHistory(t=50){const n=p(this.db,"M/"+this.serial+"/H");try{const i=await w(n);if(i.exists()){const e=i.val(),s=[];for(const d of Object.keys(e)){const o=e[d];s.push({id:d,accion:o.A||0,dispositivo:o.D||0,evento:o.E||0,fecha:o.F||"",nombre:o.N||"",serial:o.S||this.serial})}return s.reverse(),s.slice(0,t)}}catch(i){console.error("Error al cargar historial:",i)}return[]}listenNewEvents(t){const n=p(this.db,"M/"+this.serial+"/H");return Z(n,i=>{if(i.exists()){const e=i.val(),s=[];for(const d of Object.keys(e)){const o=e[d];s.push({id:d,accion:o.A||0,dispositivo:o.D||0,evento:o.E||0,fecha:o.F||"",nombre:o.N||"",serial:o.S||this.serial})}s.reverse(),t(s.slice(0,50))}})}getEventDescription(t){return{1:{text:"Puerta abierta",icon:"door_open",className:"event-1"},2:{text:"Puerta cerrada",icon:"door_closed",className:"event-2"},3:{text:"Alarma activada",icon:"alarm_on",className:"event-3"},4:{text:"Alarma desactivada",icon:"alarm_off",className:"event-4"},5:{text:"Acceso permitido",icon:"check_circle",className:"event-5"},6:{text:"Acceso denegado",icon:"block",className:"event-6"},7:{text:"Dispositivo conectado",icon:"link",className:"event-7"},8:{text:"Dispositivo desconectado",icon:"link_off",className:"event-8"},21:{text:"Comando: Abrir",icon:"send",className:"event-21"},22:{text:"Comando: Cerrar",icon:"send",className:"event-22"}}[t]||{text:"Evento "+t,icon:"info",className:"event-default"}}async renderHistory(t,n="history-list",i=!1){const e=document.getElementById(n);if(!e)return;if(t.length===0){e.innerHTML='<p class="history-empty">Sin eventos registrados</p>';return}const s=await this.loadDoorNames();e.innerHTML=t.map(d=>{const o=this.getEventDescription(d.evento),m=d.dispositivo===1?s.door1:d.dispositivo===2?s.door2:"";let v=o.text;return`
    <div class="history-item">
      <div class="history-icon ${o.className}">
        <span class="material-symbols-outlined">${o.icon}</span>
      </div>
      <div class="history-info">
        <p class="history-text">${m} - ${v}</p>
        <p class="history-meta">${d.nombre} • ${d.fecha}</p>
      </div>
      ${i?`<button class="btn-delete-event" data-id="${d.id}">🗑️</button>`:""}
    </div>`}).join(""),i&&e.querySelectorAll(".btn-delete-event").forEach(d=>{d.addEventListener("click",async o=>{if(o.stopPropagation(),await b("¿Eliminar este evento del historial?","Eliminar evento"))if((await this.deleteEvent(d.dataset.id)).success){u("✅ Evento eliminado","success");const v=await this.loadHistory(50);this.renderHistory(v,n,i)}else u("❌ Error al eliminar","error")})})}async deleteEvent(t){try{const n=p(this.db,"M/"+this.serial+"/H/"+t);return await q(n,null),{success:!0}}catch(n){return console.error("Error al eliminar evento:",n),{success:!1,error:"Error al eliminar"}}}async loadDoorNames(){const t=p(this.db,"M/"+this.serial+"/W/NPG/1/N"),n=p(this.db,"M/"+this.serial+"/W/NPG/2/N");try{const[i,e]=await Promise.all([w(t),w(n)]);return{door1:i.exists()?i.val():"Puerta 1",door2:e.exists()?e.val():"Puerta 2"}}catch{return{door1:"Puerta 1",door2:"Puerta 2"}}}async addCommandEvent(t,n,i){try{const e=new Date,s=e.getFullYear(),d=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),m=String(e.getHours()).padStart(2,"0"),v=String(e.getMinutes()).padStart(2,"0"),f=`${s}/${d}/${o} ${m}:${v}`,g=n==="open"?21:22,h=p(this.db,"M/"+this.serial+"/H/"+Date.now());return await q(h,{A:1,D:t,E:g,F:f,N:i||"Usuario",S:this.serial}),!0}catch(e){return console.error("Error al guardar comando:",e),!1}}}function V(l){const t=document.getElementById("device-status-badge");if(!t)return;const n=t.querySelector(".status-dot"),i=t.querySelector("span:last-child");l==="online"?(n.className="status-dot online",i.textContent="En línea"):(n.className="status-dot offline",i.textContent="Sin conexión")}function se(l,t){const n=document.getElementById("btn-door"+l),i=document.getElementById("door"+l+"-icon"),e=document.getElementById("door"+l+"-text"),s=document.getElementById("door"+l+"-status-badge");!n||!i||!e||(t===1?(n.style.background="var(--bg-light)",n.style.color="var(--text-primary)",n.style.borderColor="var(--border-color)",i.textContent="lock_open",e.textContent="Abrir Puerta",s&&(s.textContent="Cerrada",s.style.background="var(--success-bg)",s.style.color="var(--success)")):(n.style.background="#fef2f2",n.style.color="#991b1b",n.style.borderColor="#fecaca",i.textContent="lock",e.textContent="Cerrar Puerta",s&&(s.textContent="Abierta",s.style.background="#fef2f2",s.style.color="#991b1b")))}function ae(l,t){const n=t==="PRO",i=t==="ADM",e=n||i,s=document.getElementById("share-device-btn");s&&(s.style.display=e?"flex":"none");const d=document.getElementById("edit-device-name");d&&(d.disabled=!1);const o=document.getElementById("edit-door1"),m=document.getElementById("edit-door2");return o&&(o.style.display="inline"),m&&(m.style.display="inline"),{isOwner:n,isAdmin:i,canManage:e}}function G(l,t,n,i,e){const s=document.getElementById("btn-door"+e);s&&s.addEventListener("click",async()=>{if(!navigator.onLine){u("⚠️ Sin conexión a internet");return}if(!await l.isDeviceOnline()){u("⚠️ El dispositivo está sin conexión");return}const o=p(k(),`M/${i}/W/Z/${e}/E`),m=await w(o),f=m.exists()&&m.val()===1?"close":"open";s.disabled=!0,s.classList.add("waiting");const g=s.querySelector("#door"+e+"-text");g.textContent="Enviando...",l.sendDoorCommand(e,async(h,E)=>{if(s.classList.remove("waiting"),s.disabled=!1,h){const I=n.name||n.email||"Usuario";await t.addCommandEvent(e,f,I),g.textContent="Comando enviado"}else g.textContent="Sin respuesta",setTimeout(async()=>{const I=p(k(),`M/${i}/W/Z/${e}/E`),D=await w(I),x=D.exists()&&D.val()===1;g.textContent=x?"Cerrar Puerta":"Abrir Puerta"},2500)})})}async function de(l,t,n){var N,P,L,M,$,H,_,R,U,O,T,j;const i=document.getElementById("main-content");i.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const e=new Q(l,t),s=await e.loadDeviceData();if(!s){await z("No se encontró el dispositivo solicitado.","Dispositivo no encontrado");return}Y(t,"device"),i.innerHTML=te;const d=await e.getUserRole(),{canManage:o}=ae(e,d);document.getElementById("device-name").textContent=s.name,document.getElementById("info-serial").textContent=s.serial,document.getElementById("edit-device-name").value=s.name,document.getElementById("info-role").textContent=d,V(s.status);const m=d==="PRO"||d==="ADM",v=new ne(t),f=await v.loadHistory(20);v.renderHistory(f,"history-list",m);const g=v.listenNewEvents(a=>{v.renderHistory(a,"history-list",m)}),h=await e.loadDoorNames();document.getElementById("door1-title").textContent=h.door1,document.getElementById("door2-title").textContent=h.door2,o&&((N=document.getElementById("edit-door1"))==null||N.addEventListener("click",()=>W(1,e)),(P=document.getElementById("edit-door2"))==null||P.addEventListener("click",()=>W(2,e)));const E=[],I=e.listenOnlineStatus(a=>{const r=F();r===t?V(a):console.log(`⛔ Ignorada actualización de estado para ${t} (serial activo ${r})`)});E.push(I);const D=e.listenDoorPosition((a,r)=>{const c=F();if(c!==t){console.log(`⛔ Ignorada posición de puerta ${a} de ${t} (serial activo ${c})`);return}se(a,r===1?2:1);const S=document.getElementById("btn-door"+a),C=document.getElementById("door"+a+"-text");S&&C&&(C.textContent=r===1?"Cerrar Puerta":"Abrir Puerta");const A=document.getElementById("door"+a+"-status-badge");A&&(A.textContent=r===1?"Abierta":"Cerrada",A.style.background=r===1?"#fef2f2":"var(--success-bg)",A.style.color=r===1?"#991b1b":"var(--success)")});E.push(D),E.push(g),G(e,v,l,t,1),G(e,v,l,t,2);const x=()=>{E.forEach(a=>{typeof a=="function"&&a()}),ee()};(L=document.getElementById("back-to-dashboard"))==null||L.addEventListener("click",()=>{x(),typeof n=="function"&&n()}),(M=document.getElementById("device-menu-btn"))==null||M.addEventListener("click",()=>{const a=document.getElementById("device-name").textContent;document.getElementById("door-settings-name").textContent=a,document.getElementById("edit-device-name").value=a,document.getElementById("edit-device-name").dataset.original=a;const r=document.getElementById("save-device-name");r&&(r.style.display="none");const c=document.getElementById("door-danger-section");c&&(c.style.display="block"),document.getElementById("delete-device-title").textContent=o?"Liberar sitio para todos":"Quitar sitio de mi cuenta",document.getElementById("delete-device-subtitle").textContent=o?"Desvincular el módulo de todas las cuentas":"Los demás usuarios conservarán el acceso",document.getElementById("device-settings-modal").style.display="flex"}),($=document.getElementById("edit-device-name"))==null||$.addEventListener("input",()=>{const a=document.getElementById("edit-device-name"),r=document.getElementById("save-device-name"),c=a.dataset.original||"";r.style.display=a.value!==c?"flex":"none"}),(H=document.getElementById("close-settings-modal"))==null||H.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(_=document.getElementById("save-device-name"))==null||_.addEventListener("click",async()=>{const a=document.getElementById("edit-device-name").value.trim();if(!a){await z("Ingresa un nombre para el sitio.","Nombre requerido");return}const r=k();await J(p(r,"US/"+l.uid+"/M/"+t),{N:a}),document.getElementById("device-name").textContent=a,document.getElementById("door-settings-name").textContent=a,document.getElementById("edit-device-name").dataset.original=a,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),(R=document.getElementById("delete-device-btn"))==null||R.addEventListener("click",async()=>{const a=await e.getUserRole();if(a==="PRO"||a==="ADM"){if(!await b("El módulo se desvinculará de todas las cuentas y quedará libre para asociarlo nuevamente.","Liberar sitio para todos")||!await b("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final"))return;const r=await e.deleteDeviceForAll();r.success?(x(),u("✅ Módulo liberado para todos","success"),setTimeout(()=>n(),1e3)):u("❌ "+r.error,"error")}else if(await b("¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.","Quitar sitio")){const r=await e.removeDeviceFromMyAccount();r.success?(x(),u("✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>n(),1e3)):u("❌ "+r.error,"error")}}),(U=document.getElementById("share-device-btn"))==null||U.addEventListener("click",async()=>{if(!o){u("❌ No tienes permisos para ver usuarios","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const a=await e.loadSharedUsers(),r=document.getElementById("shared-list");r&&(a.length===0?r.innerHTML='<p class="shared-list-message">No has compartido este sitio</p>':(r.innerHTML=a.map(c=>`
  <div class="shared-user-row">
    <div class="shared-user-info">
      <p class="shared-user-name">${B(c.name)}</p>
      <p class="shared-user-email">${B(c.email)}</p>
    </div>
    <select class="role-select" data-uid="${B(c.uid)}">
      <option value="INV" ${c.role==="INV"?"selected":""}>Invitado</option>
      <option value="ADM" ${c.role==="ADM"?"selected":""}>Admin</option>
    </select>
    <button class="btn-remove-user" data-uid="${B(c.uid)}" aria-label="Eliminar ${B(c.name)}" title="Eliminar usuario">🗑️</button>
  </div>`).join(""),o&&r.querySelectorAll(".role-select").forEach(c=>{c.addEventListener("change",async y=>{y.stopPropagation(),await b("¿Cambiar el rol de este usuario?","Cambiar permisos")&&await ie(c.dataset.uid,c.value,e)})}),r.querySelectorAll(".btn-remove-user").forEach(c=>{c.addEventListener("click",async y=>{var S;if(y.stopPropagation(),await b("¿Eliminar este usuario del sitio?","Quitar usuario")){const C=await e.removeSharedUser(c.dataset.uid);C.success?(u("✅ Usuario eliminado","success"),(S=document.getElementById("share-device-btn"))==null||S.click()):u("❌ "+C.error,"error")}})})))}),(O=document.getElementById("close-share-modal"))==null||O.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(T=document.getElementById("confirm-share"))==null||T.addEventListener("click",async()=>{var y;if(!o){u("❌ No tienes permisos para compartir","error");return}const a=document.getElementById("share-email").value,r=document.getElementById("share-role").value;if(!a){u("⚠️ Ingresa un correo","error");return}const c=await e.shareDevice(a,r);c.success?(u("✅ "+c.message,"success"),document.getElementById("share-email").value="",(y=document.getElementById("share-device-btn"))==null||y.click()):u("❌ "+c.error,"error")}),(j=document.getElementById("unsubscribe-btn"))==null||j.addEventListener("click",async()=>{if(await b("¿Desactivar las notificaciones de este sitio?","Desactivar notificaciones")){const a=await K(t);a.success?u("✅ Notificaciones desactivadas","success"):u("❌ "+(a.error||"Error al desactivar"),"error")}}),document.querySelectorAll(".modal-overlay").forEach(a=>{a.addEventListener("click",function(r){r.target===this&&(this.style.display="none")})})}async function W(l,t){const n=document.getElementById("door"+l+"-title"),i=n.textContent,e=await X("Escribe el nuevo nombre de la puerta.",i,"Editar nombre");e&&e.trim()&&e!==i&&(await t.saveDoorName(l,e.trim())?(n.textContent=e.trim(),u("✅ Nombre guardado","success")):u("❌ Error al guardar","error"))}async function ie(l,t,n){var e;(await n.updateSharedUserRole(l,t)).success?(u("✅ Rol actualizado","success"),(e=document.getElementById("share-device-btn"))==null||e.click()):u("❌ Error al actualizar","error")}export{de as openDoorView};
