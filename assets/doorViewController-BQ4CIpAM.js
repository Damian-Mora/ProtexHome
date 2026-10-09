import{D as Q}from"./deviceController-a85H8M6T.js";import{g as S,r as b,a as I,o as Z,e as v,s as w,b as u,c as j,d as Y,f as J,h as V,u as K,i as z,j as X}from"./index-Cfdlob0H.js";const ee=`\r
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
        <span class="door-card-icon material-symbols-outlined" aria-hidden="true">door_front</span>\r
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
        <span class="door-card-icon material-symbols-outlined" aria-hidden="true">door_front</span>\r
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
              <p class="device-settings-name" id="current-device-name">Puerta Motorizada</p>\r
            </div>\r
          </div>\r
          <button class="device-settings-close" id="close-settings-modal" type="button" aria-label="Cerrar ajustes">\r
            <span class="material-symbols-outlined" aria-hidden="true">close</span>\r
          </button>\r
        </header>\r
\r
        <div class="device-settings-scroll">\r
          <section class="settings-section">\r
            <p class="settings-section-title">Configuración del dispositivo</p>\r
            <div class="settings-group">\r
              <button class="settings-btn" id="open-change-name-btn" type="button">\r
                <span class="material-symbols-outlined" aria-hidden="true">edit</span>\r
                <span class="settings-btn-text">\r
                  <span class="settings-btn-title">Cambiar nombre del sitio</span>\r
                  <span class="settings-btn-subtitle">Personaliza cómo identificas este sitio</span>\r
                </span>\r
                <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
              </button>\r
            </div>\r
          </section>\r
\r
          <section class="settings-section wifi-credentials" id="wifi-credentials-section" hidden>\r
            <p class="settings-section-title">Redes Wi-Fi configuradas</p>\r
            <div class="settings-group">\r
              <div class="device-info-mini settings-device-info">\r
                <p><span>Red principal (SP)</span><strong id="wifi-primary-name">Cargando...</strong></p>\r
                <p><span>Clave principal (PP)</span><strong id="wifi-primary-password">Cargando...</strong></p>\r
                <p><span>Red de respaldo (SR)</span><strong id="wifi-backup-name">Cargando...</strong></p>\r
                <p><span>Clave de respaldo (PR)</span><strong id="wifi-backup-password">Cargando...</strong></p>\r
              </div>\r
            </div>\r
          </section>\r
\r
          <section class="settings-section">\r
            <p class="settings-section-title">Acceso</p>\r
            <div class="settings-group">\r
              <button class="settings-btn manager-only" id="share-device-btn" type="button">\r
                <span class="material-symbols-outlined" aria-hidden="true">share</span>\r
                <span class="settings-btn-text">\r
                  <span class="settings-btn-title">Compartir sitio</span>\r
                  <span class="settings-btn-subtitle">Administrar las personas con acceso</span>\r
                </span>\r
                <span class="material-symbols-outlined arrow" aria-hidden="true">chevron_right</span>\r
              </button>\r
            </div>\r
          </section>\r
\r
          <section class="settings-section">\r
            <p class="settings-section-title">Información</p>\r
            <div class="settings-group device-info-mini settings-device-info">\r
              <p><span>Serial</span><strong id="info-serial">--</strong></p>\r
              <p><span>Tipo</span><strong>Puerta motorizada</strong></p>\r
              <p><span>Tu rol</span><strong id="info-role">--</strong></p>\r
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
                  <span class="settings-btn-subtitle" id="delete-device-subtitle">Esta acción es irreversible</span>\r
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
</div>`;class te{constructor(t){this.serial=t,this.db=S()}async loadHistory(t=50){const s=b(this.db,"M/"+this.serial+"/H");try{const a=await I(s);if(a.exists()){const e=a.val(),o=[];for(const c of Object.keys(e)){const i=e[c];o.push({id:c,accion:i.A||0,dispositivo:i.D||0,evento:i.E||0,fecha:i.F||"",nombre:i.N||"",serial:i.S||this.serial})}return o.reverse(),o.slice(0,t)}}catch(a){console.error("Error al cargar historial:",a)}return[]}listenNewEvents(t){const s=b(this.db,"M/"+this.serial+"/H");return Z(s,a=>{if(a.exists()){const e=a.val(),o=[];for(const c of Object.keys(e)){const i=e[c];o.push({id:c,accion:i.A||0,dispositivo:i.D||0,evento:i.E||0,fecha:i.F||"",nombre:i.N||"",serial:i.S||this.serial})}o.reverse(),t(o.slice(0,50))}})}getEventDescription(t){return{1:{text:"Puerta abierta",icon:"door_open",className:"event-1",colorClass:"dsc-event-open"},2:{text:"Puerta cerrada",icon:"door_closed",className:"event-2",colorClass:"dsc-event-closed"},3:{text:"Alarma activada",icon:"alarm_on",className:"event-3",colorClass:"dsc-event-alarm"},4:{text:"Alarma desactivada",icon:"alarm_off",className:"event-4",colorClass:"dsc-event-restored"},5:{text:"Acceso permitido",icon:"check_circle",className:"event-5",colorClass:"dsc-event-restored"},6:{text:"Acceso denegado",icon:"block",className:"event-6",colorClass:"dsc-event-alarm"},7:{text:"Dispositivo conectado",icon:"link",className:"event-7",colorClass:"dsc-event-restored"},8:{text:"Dispositivo desconectado",icon:"link_off",className:"event-8",colorClass:"dsc-event-fault"},21:{text:"Comando: Abrir",icon:"send",className:"event-21",colorClass:"dsc-event-open"},22:{text:"Comando: Cerrar",icon:"send",className:"event-22",colorClass:"dsc-event-closed"}}[t]||{text:"Evento "+t,icon:"info",className:"event-default",colorClass:"dsc-event-neutral"}}async renderHistory(t,s="history-list",a=!1){const e=document.getElementById(s);if(!e)return;if(t.length===0){e.innerHTML='<p class="history-empty">Sin eventos registrados</p>';return}const o=await this.loadDoorNames();e.innerHTML=t.map(c=>{const i=this.getEventDescription(c.evento),m=c.dispositivo===1?o.door1:c.dispositivo===2?o.door2:"";let g=i.text;return`
    <div class="history-item dsc-event ${i.colorClass}">
      <div class="history-icon ${i.className}">
        <span class="material-symbols-outlined">${i.icon}</span>
      </div>
      <div class="history-info">
        <p class="history-text">${v(m)} - ${v(g)}</p>
        <p class="history-meta">${v(c.nombre)} • ${v(c.fecha)}</p>
      </div>
        ${a?`
          <button class="btn-delete-event" type="button" data-id="${v(c.id)}"
            aria-label="Eliminar evento" title="Eliminar evento">
            <span class="material-symbols-outlined" aria-hidden="true">delete</span>
          </button>
        `:""}
    </div>`}).join(""),a&&e.querySelectorAll(".btn-delete-event").forEach(c=>{c.addEventListener("click",async i=>{if(i.stopPropagation(),await w("¿Eliminar este evento del historial?","Eliminar evento"))if((await this.deleteEvent(c.dataset.id)).success){u("✅ Evento eliminado","success");const g=await this.loadHistory(50);this.renderHistory(g,s,a)}else u("❌ Error al eliminar","error")})})}async deleteEvent(t){try{const s=b(this.db,"M/"+this.serial+"/H/"+t);return await j(s,null),{success:!0}}catch(s){return console.error("Error al eliminar evento:",s),{success:!1,error:"Error al eliminar"}}}async loadDoorNames(){const t=b(this.db,"M/"+this.serial+"/W/NPG/1/N"),s=b(this.db,"M/"+this.serial+"/W/NPG/2/N");try{const[a,e]=await Promise.all([I(t),I(s)]);return{door1:a.exists()?a.val():"Puerta 1",door2:e.exists()?e.val():"Puerta 2"}}catch{return{door1:"Puerta 1",door2:"Puerta 2"}}}async addCommandEvent(t,s,a){try{const e=new Date,o=e.getFullYear(),c=String(e.getMonth()+1).padStart(2,"0"),i=String(e.getDate()).padStart(2,"0"),m=String(e.getHours()).padStart(2,"0"),g=String(e.getMinutes()).padStart(2,"0"),p=`${o}/${c}/${i} ${m}:${g}`,f=s==="open"?21:22,x=b(this.db,"M/"+this.serial+"/H/"+Date.now());return await j(x,{A:1,D:t,E:f,F:p,N:a||"Usuario",S:this.serial}),!0}catch(e){return console.error("Error al guardar comando:",e),!1}}}function q(l){const t=document.getElementById("device-status-badge");if(!t)return;const s=t.querySelector(".status-dot"),a=t.querySelector("span:last-child");l==="online"?(s.className="status-dot online",a.textContent="En línea"):(s.className="status-dot offline",a.textContent="Sin conexión")}function ne(l,t){const s=document.getElementById("btn-door"+l),a=document.getElementById("door"+l+"-icon"),e=document.getElementById("door"+l+"-text"),o=document.getElementById("door"+l+"-status-badge");!s||!a||!e||(t===1?(s.classList.remove("open"),a.textContent="lock_open",e.textContent="Abrir Puerta",o&&(o.textContent="Cerrada",o.classList.remove("open"))):(s.classList.add("open"),a.textContent="lock",e.textContent="Cerrar Puerta",o&&(o.textContent="Abierta",o.classList.add("open"))))}function se(l){const t=l==="PRO",s=l==="ADM",a=t||s,e=document.getElementById("share-device-btn");e&&(e.style.display=a?"flex":"none");const o=document.getElementById("edit-door1"),c=document.getElementById("edit-door2");return o&&(o.style.display="inline"),c&&(c.style.display="inline"),{isOwner:t,isAdmin:s,canManage:a}}function F(l,t,s,a,e){const o=document.getElementById("btn-door"+e);o&&o.addEventListener("click",async()=>{if(!navigator.onLine){u("⚠️ Sin conexión a internet");return}if(!await l.isDeviceOnline()){u("⚠️ El dispositivo está sin conexión");return}const i=b(S(),`M/${a}/W/Z/${e}/E`),m=await I(i),p=m.exists()&&m.val()===1?"close":"open";o.disabled=!0,o.classList.add("waiting");const f=o.querySelector("#door"+e+"-text");f.textContent="Enviando...",l.sendDoorCommand(e,async(x,P)=>{if(o.classList.remove("waiting"),o.disabled=!1,x){const E=s.name||s.email||"Usuario";await t.addCommandEvent(e,p,E),f.textContent="Comando enviado"}else f.textContent="Sin respuesta",setTimeout(async()=>{const E=b(S(),`M/${a}/W/Z/${e}/E`),B=await I(E),A=B.exists()&&B.val()===1;f.textContent=A?"Cerrar Puerta":"Abrir Puerta"},2500)})})}async function re(l,t,s){var k,L,M,$,H,R,O,_,U,T;const a=document.getElementById("main-content");a.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const e=new Q(l,t),o=await e.loadDeviceData();if(!o){await Y("No se encontró el dispositivo solicitado.","Dispositivo no encontrado");return}J(t,"device"),a.innerHTML=ee;const c=await e.getUserRole(),{canManage:i}=se(c);document.getElementById("device-name").textContent=o.name,document.getElementById("info-serial").textContent=o.serial,document.getElementById("info-role").textContent=c;const m=document.getElementById("wifi-credentials-section");m&&(m.hidden=!i),q(o.status);const g=c==="PRO"||c==="ADM",p=new te(t),f=await p.loadHistory(20);p.renderHistory(f,"history-list",g);const x=p.listenNewEvents(r=>{p.renderHistory(r,"history-list",g)}),P=await e.loadDoorNames();document.getElementById("door1-title").textContent=P.door1,document.getElementById("door2-title").textContent=P.door2,i&&((k=document.getElementById("edit-door1"))==null||k.addEventListener("click",()=>W(1,e)),(L=document.getElementById("edit-door2"))==null||L.addEventListener("click",()=>W(2,e)));const E=[],B=e.listenOnlineStatus(r=>{const n=z();n===t?q(r):console.log(`⛔ Ignorada actualización de estado para ${t} (serial activo ${n})`)});E.push(B);const A=e.listenDoorPosition((r,n)=>{const d=z();if(d!==t){console.log(`⛔ Ignorada posición de puerta ${r} de ${t} (serial activo ${d})`);return}ne(r,n===1?2:1);const h=document.getElementById("btn-door"+r),C=document.getElementById("door"+r+"-text");h&&C&&(C.textContent=n===1?"Cerrar Puerta":"Abrir Puerta");const N=document.getElementById("door"+r+"-status-badge");N&&(N.textContent=n===1?"Abierta":"Cerrada",N.classList.toggle("open",n===1))});E.push(A),E.push(x),F(e,p,l,t,1),F(e,p,l,t,2);const D=()=>{E.forEach(r=>{typeof r=="function"&&r()}),X()};(M=document.getElementById("back-to-dashboard"))==null||M.addEventListener("click",()=>{D(),typeof s=="function"&&s()}),($=document.getElementById("device-menu-btn"))==null||$.addEventListener("click",async()=>{const r=document.getElementById("device-name").textContent;document.getElementById("current-device-name").textContent=r;const n=document.getElementById("door-danger-section");n&&(n.style.display="block"),document.getElementById("delete-device-title").textContent=i?"Liberar sitio para todos":"Quitar sitio de mi cuenta",document.getElementById("delete-device-subtitle").textContent=i?"Desvincular el módulo de todas las cuentas":"Los demás usuarios conservarán el acceso",document.getElementById("device-settings-modal").style.display="flex",i&&await G()});async function G(){const r={"wifi-primary-name":"SP","wifi-primary-password":"PP","wifi-backup-name":"SR","wifi-backup-password":"PR"};Object.keys(r).forEach(n=>{document.getElementById(n).textContent="Cargando..."});try{const n=await e.loadWifiConfiguration();Object.entries(r).forEach(([d,y])=>{const h=n[y];document.getElementById(d).textContent=h==null||h===""?"No configurada":String(h)})}catch(n){console.error("Error cargando la configuración Wi-Fi:",n),Object.keys(r).forEach(d=>{document.getElementById(d).textContent="No se pudo cargar"}),u("❌ No se pudo cargar la configuración Wi-Fi","error")}}(H=document.getElementById("close-settings-modal"))==null||H.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(R=document.getElementById("open-change-name-btn"))==null||R.addEventListener("click",async()=>{const r=document.getElementById("device-name").textContent,n=await V("Ingresa el nuevo nombre del sitio.",r,"Cambiar nombre del sitio");if(!(!(n!=null&&n.trim())||n.trim()===r))try{await K(b(S(),`US/${l.uid}/M/${t}`),{N:n.trim()}),document.getElementById("device-name").textContent=n.trim(),document.getElementById("current-device-name").textContent=n.trim(),document.getElementById("device-settings-modal").style.display="none",u("✅ Nombre actualizado","success")}catch(d){console.error("Error actualizando nombre del sitio:",d),u("❌ No se pudo actualizar el nombre","error")}}),(O=document.getElementById("delete-device-btn"))==null||O.addEventListener("click",async()=>{const r=await e.getUserRole();if(r==="PRO"||r==="ADM"){if(!await w("El módulo se desvinculará de todas las cuentas y quedará libre para asociarlo nuevamente.","Liberar sitio para todos")||!await w("Esta acción no se puede deshacer. ¿Continuar?","Confirmación final"))return;const n=await e.deleteDeviceForAll();n.success?(D(),u("✅ Módulo liberado para todos","success"),setTimeout(()=>s(),1e3)):u("❌ "+n.error,"error")}else if(await w("¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.","Quitar sitio")){const n=await e.removeDeviceFromMyAccount();n.success?(D(),u("✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>s(),1e3)):u("❌ "+n.error,"error")}}),(_=document.getElementById("share-device-btn"))==null||_.addEventListener("click",async()=>{if(!i){u("❌ No tienes permisos para ver usuarios","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const r=await e.loadSharedUsers(),n=document.getElementById("shared-list");n&&(r.length===0?n.innerHTML='<p class="shared-list-message">No has compartido este sitio</p>':(n.innerHTML=r.map(d=>`
  <div class="shared-user-row">
    <div class="shared-user-info">
      <p class="shared-user-name">${v(d.name)}</p>
      <p class="shared-user-email">${v(d.email)}</p>
    </div>
    <select class="role-select" data-uid="${v(d.uid)}">
      <option value="INV" ${d.role==="INV"?"selected":""}>Invitado</option>
      <option value="ADM" ${d.role==="ADM"?"selected":""}>Admin</option>
    </select>
    <button class="btn-remove-user" data-uid="${v(d.uid)}" aria-label="Eliminar ${v(d.name)}" title="Eliminar usuario">🗑️</button>
  </div>`).join(""),i&&n.querySelectorAll(".role-select").forEach(d=>{d.addEventListener("change",async y=>{y.stopPropagation(),await w("¿Cambiar el rol de este usuario?","Cambiar permisos")&&await ae(d.dataset.uid,d.value,e)})}),n.querySelectorAll(".btn-remove-user").forEach(d=>{d.addEventListener("click",async y=>{var h;if(y.stopPropagation(),await w("¿Eliminar este usuario del sitio?","Quitar usuario")){const C=await e.removeSharedUser(d.dataset.uid);C.success?(u(C.message||"✅ Usuario eliminado","success"),(h=document.getElementById("share-device-btn"))==null||h.click()):u("❌ "+C.error,"error")}})})))}),(U=document.getElementById("close-share-modal"))==null||U.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(T=document.getElementById("confirm-share"))==null||T.addEventListener("click",async()=>{var y;if(!i){u("❌ No tienes permisos para compartir","error");return}const r=document.getElementById("share-email").value,n=document.getElementById("share-role").value;if(!r){u("⚠️ Ingresa un correo","error");return}const d=await e.shareDevice(r,n);d.success?(u("✅ "+d.message,"success"),document.getElementById("share-email").value="",(y=document.getElementById("share-device-btn"))==null||y.click()):u("❌ "+d.error,"error")}),document.querySelectorAll(".modal-overlay").forEach(r=>{r.addEventListener("click",function(n){n.target===this&&(this.style.display="none")})})}async function W(l,t){const s=document.getElementById("door"+l+"-title"),a=s.textContent,e=await V("Escribe el nuevo nombre de la puerta.",a,"Editar nombre");e&&e.trim()&&e!==a&&(await t.saveDoorName(l,e.trim())?(s.textContent=e.trim(),u("✅ Nombre guardado","success")):u("❌ Error al guardar","error"))}async function ae(l,t,s){var e;(await s.updateSharedUserRole(l,t)).success?(u("✅ Rol actualizado","success"),(e=document.getElementById("share-device-btn"))==null||e.click()):u("❌ Error al actualizar","error")}export{re as openDoorView};
