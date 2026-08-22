import{g as D,r as i,a as v,o as M,s as p,b as h,u as R,d as z,c as _}from"./index-CVxTTHvt.js";const W=`\r
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
</div>`;class T{constructor(s){this.serial=s,this.db=D()}async loadHistory(s=50){const t=i(this.db,"M/"+this.serial+"/H");try{const n=await v(t);if(n.exists()){const e=n.val(),r=[];for(const a of Object.keys(e)){const o=e[a];r.push({id:a,accion:o.A||0,dispositivo:o.D||0,evento:o.E||0,fecha:o.F||"",nombre:o.N||"",serial:o.S||this.serial})}return r.reverse(),r.slice(0,s)}}catch(n){console.error("Error al cargar historial:",n)}return[]}listenNewEvents(s){const t=i(this.db,"M/"+this.serial+"/H");return M(t,n=>{if(n.exists()){const e=n.val(),r=[];for(const a of Object.keys(e)){const o=e[a];r.push({id:a,accion:o.A||0,dispositivo:o.D||0,evento:o.E||0,fecha:o.F||"",nombre:o.N||"",serial:o.S||this.serial})}r.reverse(),s(r.slice(0,50))}})}getEventDescription(s){return{1:{text:"Puerta abierta",icon:"door_open",color:"#16a34a"},2:{text:"Puerta cerrada",icon:"door_closed",color:"#1a73e8"},3:{text:"Alarma activada",icon:"alarm_on",color:"#dc2626"},4:{text:"Alarma desactivada",icon:"alarm_off",color:"#888888"},5:{text:"Acceso permitido",icon:"check_circle",color:"#16a34a"},6:{text:"Acceso denegado",icon:"block",color:"#dc2626"},7:{text:"Dispositivo conectado",icon:"link",color:"#16a34a"},8:{text:"Dispositivo desconectado",icon:"link_off",color:"#f59e0b"},21:{text:"Comando: Abrir",icon:"send",color:"#f59e0b"},22:{text:"Comando: Cerrar",icon:"send",color:"#f59e0b"}}[s]||{text:"Evento "+s,icon:"info",color:"#888888"}}async renderHistory(s,t="history-list",n=!1){const e=document.getElementById(t);if(!e)return;if(s.length===0){e.innerHTML='<p style="color:var(--text-light);text-align:center;">Sin eventos registrados</p>';return}const r=await this.loadDoorNames();e.innerHTML=s.map(a=>{const o=this.getEventDescription(a.evento),m=a.dispositivo===1?r.door1:a.dispositivo===2?r.door2:"";let f=o.text;return`
    <div class="history-item">
      <div class="history-icon" style="background:${o.color}20;color:${o.color};">
        <span class="material-symbols-outlined">${o.icon}</span>
      </div>
      <div class="history-info">
        <p class="history-text">${m} - ${f}</p>
        <p class="history-meta">${a.nombre} • ${a.fecha}</p>
      </div>
      ${n?`<button class="btn-delete-event" data-id="${a.id}">🗑️</button>`:""}
    </div>`}).join(""),n&&e.querySelectorAll(".btn-delete-event").forEach(a=>{a.addEventListener("click",async o=>{if(o.stopPropagation(),confirm("¿Eliminar este evento?"))if((await this.deleteEvent(a.dataset.id)).success){p("✅ Evento eliminado","success");const f=await this.loadHistory(50);this.renderHistory(f,t,n)}else p("❌ Error al eliminar","error")})})}async deleteEvent(s){try{const t=i(this.db,"M/"+this.serial+"/H/"+s);return await h(t,null),{success:!0}}catch(t){return console.error("Error al eliminar evento:",t),{success:!1,error:"Error al eliminar"}}}async loadDoorNames(){const s=i(this.db,"M/"+this.serial+"/W/NPG/1/N"),t=i(this.db,"M/"+this.serial+"/W/NPG/2/N");try{const[n,e]=await Promise.all([v(s),v(t)]);return{door1:n.exists()?n.val():"Puerta 1",door2:e.exists()?e.val():"Puerta 2"}}catch{return{door1:"Puerta 1",door2:"Puerta 2"}}}async addCommandEvent(s,t,n){try{const e=new Date,r=e.getFullYear(),a=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0"),m=String(e.getHours()).padStart(2,"0"),f=String(e.getMinutes()).padStart(2,"0"),b=`${r}/${a}/${o} ${m}:${f}`,y=t==="open"?21:22,E=i(this.db,"M/"+this.serial+"/H/"+Date.now());return await h(E,{A:1,D:s,E:y,F:b,N:n||"Usuario",S:this.serial}),!0}catch(e){return console.error("Error al guardar comando:",e),!1}}}class j{constructor(s,t){this.user=s,this.serial=t,this.db=D()}async loadDeviceData(){const s=i(this.db,"US/"+this.user.uid+"/M/"+this.serial),t=i(this.db,"P/"+this.serial+"/L");try{const r=await v(s),a=await v(t);if(r.exists()){const o=r.val();return{serial:this.serial,name:o.N||"Sin nombre",type:o.T||1,role:o.U||"INV",status:a.val()===1?"online":"offline"}}}catch(r){console.error("Error al cargar dispositivo:",r)}const n=new T(serial),e=await n.loadHistory(20);return n.renderHistory(e),null}async getUserRole(){const s=i(this.db,"US/"+this.user.uid+"/M/"+this.serial),t=await v(s);return t.exists()&&t.val().U||"INV"}async isOwner(){return await this.getUserRole()==="PRO"}async isAdmin(){const s=await this.getUserRole();return s==="ADM"||s==="PRO"}listenOnlineStatus(s){const t=i(this.db,"P/"+this.serial+"/L");let n=null;return M(t,e=>{const r=e.exists()&&e.val()===1;n===null?s(r?"online":"offline"):!r&&n?(console.log("⏳ Esperando 30s para confirmar offline:",this.serial),setTimeout(()=>{v(t).then(a=>{(!a.exists()||a.val()!==1)&&(console.log("🔴 Confirmado offline:",this.serial),s("offline"))})},3e4)):r&&!n&&(console.log("🟢 Online:",this.serial),s("online")),n=r})}async pingDevice(){try{await h(i(this.db,"P/"+this.serial),{L:0}),await h(i(this.db,"M/"+this.serial+"/X/D"),{L:0}),await new Promise(s=>setTimeout(s,3e3)),await h(i(this.db,"M/"+this.serial+"/X/D"),{L:1}),console.log("🩺 Ping individual a:",this.serial)}catch(s){console.error("Error en ping:",s)}}async isDeviceOnline(){try{const s=i(this.db,"P/"+this.serial+"/L"),t=await v(s);return t.exists()&&t.val()===1}catch{return!1}}async sendDoorCommand(s,t){const n="S"+s,e=i(this.db,"M/"+this.serial+"/X/"+n);try{const r=await v(e),o=(r.exists()?r.val():{E:1,R:0}).E||1,m=o===1?2:1;await h(e,{E:m,R:0}),console.log("📤 Enviado comando puerta",s,":",o,"→",m,"(R=0)");const f=1e4,b=Date.now(),y=setInterval(async()=>{const E=await v(e),x=(E.exists()?E.val():{}).R||0;x===m?(clearInterval(y),console.log("✅ Confirmado puerta",s,":",x),t&&t(!0,m)):Date.now()-b>f&&(clearInterval(y),console.log("⏰ Timeout puerta",s,"- ESP32 no respondió"),t&&t(!1,o))},500)}catch(r){console.error("Error en comando de puerta:",r),t&&t(!1,0)}}listenDoorPosition(s){const t=i(this.db,"M/"+this.serial+"/W/Z/1/E"),n=i(this.db,"M/"+this.serial+"/W/Z/2/E");M(t,e=>{const r=e.exists()?e.val():0;s(1,r)}),M(n,e=>{const r=e.exists()?e.val():0;s(2,r)})}async loadDoorNames(){const s=i(this.db,"M/"+this.serial+"/W/NPG/1/N"),t=i(this.db,"M/"+this.serial+"/W/NPG/2/N");try{const[n,e]=await Promise.all([v(s),v(t)]);return{door1:n.exists()?n.val():"Puerta 1",door2:e.exists()?e.val():"Puerta 2"}}catch{return{door1:"Puerta 1",door2:"Puerta 2"}}}async saveDoorName(s,t){const n=i(this.db,"M/"+this.serial+"/W/NPG/"+s+"/N");try{return await h(n,t),!0}catch(e){return console.error("Error al guardar nombre:",e),!1}}async shareDevice(s,t){try{const n=i(this.db,"US"),e=await v(n);if(e.exists()){const r=e.val();let a=null,o="";for(const y of Object.keys(r))if(r[y].E===s){a=y,o=r[y].N||s;break}if(!a)return{success:!1,error:"Usuario no encontrado. Debe estar registrado en la app."};if(a===this.user.uid)return{success:!1,error:"No puedes compartir contigo mismo"};const m=await this.getUserRole();if(m!=="PRO"&&m!=="ADM")return{success:!1,error:"No tienes permisos para compartir"};if(t==="PRO"&&m!=="PRO")return{success:!1,error:"Solo el Propietario puede asignar este rol"};await h(i(this.db,"M/"+this.serial+"/US/"+a),{E:s,U:t,N:o});const b=(await v(i(this.db,"US/"+this.user.uid+"/M/"+this.serial))).val();return await h(i(this.db,"US/"+a+"/M/"+this.serial),{N:b.N||"Dispositivo compartido",T:b.T||1,U:t,C:b.C||"****"}),{success:!0,message:"Compartido con "+o}}return{success:!1,error:"No se encontraron usuarios"}}catch(n){return console.error("Error al compartir:",n),{success:!1,error:"Error al compartir"}}}async loadSharedUsers(){const s=i(this.db,"M/"+this.serial+"/US");try{const t=await v(s);if(t.exists()){const n=t.val();return Object.entries(n).map(([e,r])=>({uid:e,email:r.E||"",name:r.N||"Sin nombre",role:r.U||"INV"}))}}catch(t){console.error("Error al cargar usuarios compartidos:",t)}return[]}async removeSharedUser(s){try{const t=await this.getUserRole();if(t!=="PRO"&&t!=="ADM")return{success:!1,error:"No tienes permisos para eliminar usuarios"};const n=i(this.db,"M/"+this.serial+"/US/"+s),e=await v(n);return e.exists()&&e.val().U==="PRO"?{success:!1,error:"No se puede eliminar al Propietario"}:(await h(n,null),await h(i(this.db,"US/"+s+"/M/"+this.serial),null),{success:!0,message:"Usuario eliminado"})}catch(t){return console.error("Error al eliminar usuario compartido:",t),{success:!1,error:"Error al eliminar"}}}async updateSharedUserRole(s,t){try{if(await this.getUserRole()!=="PRO")return{success:!1,error:"Solo el Propietario puede cambiar roles"};const e=i(this.db,"M/"+this.serial+"/US/"+s),r=await v(e);return r.exists()&&r.val().U==="PRO"?{success:!1,error:"No se puede cambiar el rol del Propietario"}:(await R(e,{U:t}),await R(i(this.db,"US/"+s+"/M/"+this.serial),{U:t}),{success:!0})}catch(n){return console.error("Error al actualizar rol:",n),{success:!1,error:"Error al actualizar"}}}async deleteDeviceForAll(){try{if(await this.getUserRole()!=="PRO")return{success:!1,error:"Solo el Propietario puede eliminar este sitio"};const t=await v(i(this.db,"M/"+this.serial+"/US"));if(t.exists()){const n=t.val();for(const e of Object.keys(n))await h(i(this.db,"US/"+e+"/M/"+this.serial),null)}return await h(i(this.db,"US/"+this.user.uid+"/M/"+this.serial),null),await h(i(this.db,"M/"+this.serial+"/US"),null),await h(i(this.db,"M/"+this.serial+"/X"),null),await h(i(this.db,"M/"+this.serial+"/W"),null),await h(i(this.db,"M/"+this.serial+"/H"),null),await h(i(this.db,"P/"+this.serial),null),{success:!0,message:"Dispositivo eliminado para todos"}}catch(s){return console.error("Error al eliminar dispositivo:",s),{success:!1,error:"Error al eliminar"}}}}function k(u){const s=document.getElementById("device-status-badge");if(!s)return;const t=s.querySelector(".status-dot"),n=s.querySelector("span:last-child");u==="online"?(t.className="status-dot online",n.textContent="En línea"):(t.className="status-dot offline",n.textContent="Sin conexión")}function V(u,s){const t=document.getElementById("btn-door"+u),n=document.getElementById("door"+u+"-icon"),e=document.getElementById("door"+u+"-text"),r=document.getElementById("door"+u+"-status-badge");!t||!n||!e||(s===1?(t.style.background="var(--bg-light)",t.style.color="var(--text-primary)",t.style.borderColor="var(--border-color)",n.textContent="lock_open",e.textContent="Abrir Puerta",r&&(r.textContent="Cerrada",r.style.background="var(--success-bg)",r.style.color="var(--success)")):(t.style.background="#fef2f2",t.style.color="#991b1b",t.style.borderColor="#fecaca",n.textContent="lock",e.textContent="Cerrar Puerta",r&&(r.textContent="Abierta",r.style.background="#fef2f2",r.style.color="#991b1b")))}function F(u,s){const t=s==="PRO",n=s==="ADM",e=t||n,r=document.getElementById("share-device-btn");r&&(r.style.display=e?"flex":"none");const a=document.getElementById("edit-device-name");a&&(a.disabled=!1);const o=document.getElementById("edit-door1"),m=document.getElementById("edit-door2");return o&&(o.style.display="inline"),m&&(m.style.display="inline"),{isOwner:t,isAdmin:n,canManage:e}}function $(u,s,t,n,e){const r=document.getElementById("btn-door"+e);r&&r.addEventListener("click",async()=>{if(!navigator.onLine){p("⚠️ Sin conexión a internet");return}if(!await u.isDeviceOnline()){p("⚠️ El dispositivo está sin conexión");return}const o=i(D(),`M/${n}/W/Z/${e}/E`),m=await v(o),b=m.exists()&&m.val()===1?"close":"open";r.disabled=!0,r.classList.add("waiting");const y=r.querySelector("#door"+e+"-text");y.textContent="Enviando...",u.sendDoorCommand(e,async(E,P)=>{if(r.classList.remove("waiting"),r.disabled=!1,E){const x=t.name||t.email||"Usuario";await s.addCommandEvent(e,b,x),y.textContent="Comando enviado"}else y.textContent="Sin respuesta",setTimeout(async()=>{const x=i(D(),`M/${n}/W/Z/${e}/E`),S=await v(x),C=S.exists()&&S.val()===1;y.textContent=C?"Cerrar Puerta":"Abrir Puerta"},2500)})})}async function X(u,s,t){var y,E,P,x,S,C,B,U,N,L,O,A;const n=document.getElementById("main-content");n.innerHTML=`
    <div class="loading-screen-dash">
      <div class="spinner"></div>
      <p>Cargando dispositivo...</p>
    </div>
  `;const e=new j(u,s),r=await e.loadDeviceData();if(!r){alert("Dispositivo no encontrado");return}n.innerHTML=W;const a=await e.getUserRole(),{canManage:o}=F(e,a);document.getElementById("device-name").textContent=r.name,document.getElementById("info-serial").textContent=r.serial,document.getElementById("edit-device-name").value=r.name,document.getElementById("info-role").textContent=a,k(r.status),e.pingDevice();const m=a==="PRO"||a==="ADM",f=new T(s);f.listenNewEvents(c=>{f.renderHistory(c,"history-list",m)});const b=await e.loadDoorNames();document.getElementById("door1-title").textContent=b.door1,document.getElementById("door2-title").textContent=b.door2,o&&((y=document.getElementById("edit-door1"))==null||y.addEventListener("click",()=>H(1,e)),(E=document.getElementById("edit-door2"))==null||E.addEventListener("click",()=>H(2,e))),e.listenOnlineStatus(c=>k(c)),e.listenDoorPosition((c,l)=>{V(c,l===1?2:1);const g=document.getElementById("btn-door"+c),I=document.getElementById("door"+c+"-text");g&&I&&(I.textContent=l===1?"Cerrar Puerta":"Abrir Puerta");const w=document.getElementById("door"+c+"-status-badge");w&&(w.textContent=l===1?"Abierta":"Cerrada",w.style.background=l===1?"#fef2f2":"var(--success-bg)",w.style.color=l===1?"#991b1b":"var(--success)")}),$(e,f,u,s,1),$(e,f,u,s,2),(P=document.getElementById("back-to-dashboard"))==null||P.addEventListener("click",()=>{if(typeof t=="function")if(navigator.onLine)t();else{const c=JSON.parse(localStorage.getItem("user")||"{}");n.innerHTML=z;const l=JSON.parse(localStorage.getItem("sites_"+c.uid)||"[]"),d=document.getElementById("sites-list");d&&l.length>0&&(d.innerHTML=l.map(g=>`
          <div class="site-card">
            <div class="site-icon offline"><span class="material-symbols-outlined">${g.icon||"devices"}</span></div>
            <div class="site-info"><h3>${g.name}</h3><p class="site-serial">${g.typeName||""} • ${g.serial}</p>
              <div class="site-status"><span class="status-dot offline"></span><span class="status-text">Sin conexión</span></div>
            </div>
          </div>`).join(""))}}),(x=document.getElementById("device-menu-btn"))==null||x.addEventListener("click",()=>{const c=document.getElementById("device-name").textContent;document.getElementById("edit-device-name").value=c,document.getElementById("edit-device-name").dataset.original=c;const l=document.getElementById("save-device-name");l&&(l.style.display="none"),document.getElementById("device-settings-modal").style.display="flex"}),(S=document.getElementById("edit-device-name"))==null||S.addEventListener("input",()=>{const c=document.getElementById("edit-device-name"),l=document.getElementById("save-device-name"),d=c.dataset.original||"";l.style.display=c.value!==d?"flex":"none"}),(C=document.getElementById("close-settings-modal"))==null||C.addEventListener("click",()=>{document.getElementById("device-settings-modal").style.display="none"}),(B=document.getElementById("save-device-name"))==null||B.addEventListener("click",async()=>{const c=document.getElementById("edit-device-name").value;if(!c)return alert("Ingresa un nombre");const l=D();await R(i(l,"US/"+u.uid+"/M/"+s),{N:c}),document.getElementById("device-name").textContent=c,document.getElementById("save-device-name").style.display="none",document.getElementById("device-settings-modal").style.display="none"}),(U=document.getElementById("delete-device-btn"))==null||U.addEventListener("click",async()=>{if(await e.getUserRole()==="PRO"){if(confirm(`Eres el Propietario.

¿Eliminar el sitio para TODOS los usuarios?`)&&confirm("Esta acción no se puede deshacer. ¿Continuar?")){const l=await e.deleteDeviceForAll();l.success?(p("✅ Sitio eliminado","success"),setTimeout(()=>t(),1e3)):p("❌ "+l.error,"error")}}else if(confirm("¿Eliminar este sitio de tu cuenta? Los demás usuarios no se verán afectados.")){const l=await e.removeDeviceFromMyAccount();l.success?(p("✅ Sitio eliminado de tu cuenta","success"),setTimeout(()=>t(),1e3)):p("❌ "+l.error,"error")}}),(N=document.getElementById("share-device-btn"))==null||N.addEventListener("click",async()=>{if(!o){p("❌ No tienes permisos para ver usuarios","error");return}document.getElementById("device-settings-modal").style.display="none",document.getElementById("share-modal").style.display="flex";const c=await e.loadSharedUsers(),l=document.getElementById("shared-list");l&&(c.length===0?l.innerHTML='<p style="color:var(--text-light);text-align:center;padding:10px;">No has compartido este sitio</p>':(l.innerHTML=c.map(d=>`
  <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border-color);">
    <div style="flex:1;">
      <p style="font-weight:600;margin:0;font-size:0.9rem;">${d.name}</p>
      <p style="font-size:0.7rem;color:var(--text-light);margin:2px 0 0;">${d.email}</p>
    </div>
    <select class="role-select" data-uid="${d.uid}" ${a!=="PRO"?"disabled":""} style="font-size:0.75rem;padding:4px 8px;border-radius:6px;border:1px solid var(--border-color);margin-right:8px;">
      <option value="INV" ${d.role==="INV"?"selected":""}>Invitado</option>
      <option value="ADM" ${d.role==="ADM"?"selected":""}>Admin</option>
    </select>
    <button class="btn-remove-user" data-uid="${d.uid}" style="background:none;border:none;color:var(--error);cursor:pointer;font-size:16px;">🗑️</button>
  </div>`).join(""),a==="PRO"&&l.querySelectorAll(".role-select").forEach(d=>{d.addEventListener("change",async g=>{g.stopPropagation(),confirm("¿Cambiar el rol de este usuario?")&&await q(d.dataset.uid,d.value,e)})}),l.querySelectorAll(".btn-remove-user").forEach(d=>{d.addEventListener("click",async g=>{var I;if(g.stopPropagation(),confirm("¿Eliminar este usuario del sitio?")){const w=await e.removeSharedUser(d.dataset.uid);w.success?(p("✅ Usuario eliminado","success"),(I=document.getElementById("share-device-btn"))==null||I.click()):p("❌ "+w.error,"error")}})})))}),(L=document.getElementById("close-share-modal"))==null||L.addEventListener("click",()=>{document.getElementById("share-modal").style.display="none"}),(O=document.getElementById("confirm-share"))==null||O.addEventListener("click",async()=>{var g;if(!o){p("❌ No tienes permisos para compartir","error");return}const c=document.getElementById("share-email").value,l=document.getElementById("share-role").value;if(!c){p("⚠️ Ingresa un correo","error");return}const d=await e.shareDevice(c,l);d.success?(p("✅ "+d.message,"success"),document.getElementById("share-email").value="",(g=document.getElementById("share-device-btn"))==null||g.click()):p("❌ "+d.error,"error")}),(A=document.getElementById("unsubscribe-btn"))==null||A.addEventListener("click",async()=>{if(confirm("¿Desactivar notificaciones de este sitio?")){const c=await _(s);c.success?p("✅ Notificaciones desactivadas","success"):p("❌ "+(c.error||"Error al desactivar"),"error")}}),document.querySelectorAll(".modal-overlay").forEach(c=>{c.addEventListener("click",function(l){l.target===this&&(this.style.display="none")})})}async function H(u,s){const t=document.getElementById("door"+u+"-title"),n=t.textContent,e=prompt("Nombre de la puerta:",n);e&&e.trim()&&e!==n&&(await s.saveDoorName(u,e.trim())?(t.textContent=e.trim(),p("✅ Nombre guardado","success")):p("❌ Error al guardar","error"))}async function q(u,s,t){var e;(await t.updateSharedUserRole(u,s)).success?(p("✅ Rol actualizado","success"),(e=document.getElementById("share-device-btn"))==null||e.click()):p("❌ Error al actualizar","error")}export{X as openDoorView};
