const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/doorViewController-BiKq7W6C.js","assets/deviceController-CwZGEDFS.js","assets/alarmDscViewController-ClcZi44u.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const uu="modulepreload",du=function(n){return"/ProtexHome/"+n},Lr={},Dr=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=du(c),c in Lr)return;Lr[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":uu,l||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((h,f)=>{d.addEventListener("load",h),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},hu=`<!-- Login -->\r
<form id="login-form" class="auth-form" autocomplete="off" novalidate>\r
  <div class="input-group">\r
    <label for="login-email">Correo electrónico</label>\r
    <div class="input-wrapper">\r
      <span class="material-symbols-outlined input-icon">mail</span>\r
      <input type="email" id="login-email" class="auth-input" \r
             placeholder="correo@ejemplo.com" autocomplete="email" required>\r
      <span class="input-focus-border"></span>\r
    </div>\r
    <span class="input-error" id="login-email-error"></span>\r
  </div>\r
  \r
  <div class="input-group">\r
    <label for="login-password">Contraseña</label>\r
    <div class="input-wrapper">\r
      <span class="material-symbols-outlined input-icon">lock</span>\r
      <input type="password" id="login-password" class="auth-input" \r
             placeholder="••••••••" autocomplete="off" autocapitalize="none" autocorrect="off"\r
             spellcheck="false" required>\r
      <button type="button" class="toggle-password" id="toggle-login-password">\r
        <span class="material-symbols-outlined">visibility</span>\r
      </button>\r
      <span class="input-focus-border"></span>\r
    </div>\r
    <span class="input-error" id="login-password-error"></span>\r
  </div>\r
  \r
  <div class="form-options">\r
    <label class="checkbox-label">\r
      <input type="checkbox" id="remember-me">\r
      <span class="checkbox-custom"></span>\r
      <span>Recordarme</span>\r
    </label>\r
    <button type="button" class="link-button" id="forgot-password-btn">\r
      ¿Olvidaste tu contraseña?\r
    </button>\r
  </div>\r
  \r
  <div class="auth-error" id="login-error"></div>\r
  \r
  <button type="submit" class="auth-button primary-button" id="login-submit">\r
    <span class="button-text">Iniciar Sesión</span>\r
    <span class="button-loader" style="display: none;">\r
      <span class="loader"></span>\r
    </span>\r
  </button>\r
</form>\r
\r
<div class="auth-divider">\r
  <span>o continuar con</span>\r
</div>\r
\r
<button type="button" class="auth-button google-button" id="google-login-btn">\r
  <svg class="google-icon" viewBox="0 0 24 24">\r
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>\r
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>\r
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>\r
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>\r
  </svg>\r
  <span>Continuar con Google</span>\r
</button>\r
\r
<p class="auth-switch">\r
  ¿No tienes una cuenta? \r
  <button type="button" class="link-button" id="switch-to-register">Regístrate</button>\r
</p>`,fu=`<!-- Registro -->\r
<form id="register-form" class="auth-form" autocomplete="off" novalidate>\r
    <div class="input-row">\r
        <div class="input-group">\r
            <label for="register-name">Nombre</label>\r
            <div class="input-wrapper">\r
                <span class="material-symbols-outlined input-icon">person</span>\r
                <input type="text" id="register-name" class="auth-input" placeholder="Tu nombre" required>\r
                <span class="input-focus-border"></span>\r
            </div>\r
            <span class="input-error" id="register-name-error"></span>\r
        </div>\r
\r
        <div class="input-group">\r
            <label for="register-lastname">Apellido</label>\r
            <div class="input-wrapper">\r
                <span class="material-symbols-outlined input-icon">person</span>\r
                <input type="text" id="register-lastname" class="auth-input" placeholder="Tu apellido" required>\r
                <span class="input-focus-border"></span>\r
            </div>\r
            <span class="input-error" id="register-lastname-error"></span>\r
        </div>\r
    </div>\r
\r
    <div class="input-group">\r
        <label for="register-email">Correo electrónico</label>\r
        <div class="input-wrapper">\r
            <span class="material-symbols-outlined input-icon">mail</span>\r
            <input type="email" id="register-email" class="auth-input" placeholder="correo@ejemplo.com"\r
                autocomplete="email" required>\r
            <span class="input-focus-border"></span>\r
        </div>\r
        <span class="input-error" id="register-email-error"></span>\r
    </div>\r
\r
    <div class="input-group">\r
        <label for="register-password">Contraseña</label>\r
        <div class="input-wrapper">\r
            <span class="material-symbols-outlined input-icon">lock</span>\r
            <input type="password" id="register-password" class="auth-input" placeholder="Mínimo 6 caracteres"\r
                autocomplete="new-password" required>\r
            <button type="button" class="toggle-password" id="toggle-register-password">\r
                <span class="material-symbols-outlined">visibility</span>\r
            </button>\r
            <span class="input-focus-border"></span>\r
        </div>\r
        <span class="input-error" id="register-password-error"></span>\r
    </div>\r
\r
    <div class="auth-error" id="register-error"></div>\r
\r
    <button type="submit" class="auth-button primary-button" id="register-submit">\r
        <span class="button-text">Crear Cuenta</span>\r
        <span class="button-loader" style="display: none;">\r
            <span class="loader"></span>\r
        </span>\r
    </button>\r
</form>\r
\r
<div class="auth-divider">\r
    <span>o continuar con</span>\r
</div>\r
\r
<button type="button" class="auth-button google-button" id="google-register-btn">\r
    <svg class="google-icon" viewBox="0 0 24 24">\r
        <path\r
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"\r
            fill="#4285F4" />\r
        <path\r
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"\r
            fill="#34A853" />\r
        <path\r
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"\r
            fill="#FBBC05" />\r
        <path\r
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"\r
            fill="#EA4335" />\r
    </svg>\r
    <span>Continuar con Google</span>\r
</button>\r
\r
<p class="auth-switch">\r
    ¿Ya tienes una cuenta?\r
    <button type="button" class="link-button" id="switch-to-login">Inicia Sesión</button>\r
</p>`,pu=`<!-- Recuperar Contraseña -->\r
<div class="auth-sub-header">\r
    <button type="button" class="back-button" id="back-to-login">\r
        <span class="material-symbols-outlined">arrow_back</span>\r
    </button>\r
    <h2>Recuperar Contraseña</h2>\r
    <p>Ingresa tu correo y te enviaremos un enlace</p>\r
</div>\r
\r
<form id="forgot-form" class="auth-form" novalidate>\r
    <div class="input-group">\r
        <label for="forgot-email">Correo electrónico</label>\r
        <div class="input-wrapper">\r
            <span class="material-symbols-outlined input-icon">mail</span>\r
            <input type="email" id="forgot-email" class="auth-input" placeholder="correo@ejemplo.com" required>\r
            <span class="input-focus-border"></span>\r
        </div>\r
        <span class="input-error" id="forgot-email-error"></span>\r
    </div>\r
\r
    <div class="auth-error" id="forgot-error"></div>\r
    <div class="auth-success" id="forgot-success"></div>\r
\r
    <button type="submit" class="auth-button primary-button" id="forgot-submit">\r
        <span class="button-text">Enviar Enlace</span>\r
        <span class="button-loader" style="display: none;">\r
            <span class="loader"></span>\r
        </span>\r
    </button>\r
</form>`,gu=`<!-- Verificar Email -->\r
<div class="verify-content">\r
  <span class="material-symbols-outlined verify-icon">mark_email_unread</span>\r
  <h2>Verifica tu correo electrónico</h2>\r
  <p id="verify-message">\r
    Hemos enviado un enlace de verificación a tu correo electrónico. \r
    Por favor, revisa tu bandeja de entrada y haz clic en el enlace para verificar tu cuenta.\r
  </p>\r
  <div class="verify-actions">\r
    <button class="auth-button primary-button" id="resend-verification-btn">\r
      <span class="button-text">Reenviar correo</span>\r
      <span class="button-loader" style="display: none;">\r
        <span class="loader"></span>\r
      </span>\r
    </button>\r
    <button class="auth-button secondary-button" id="check-verification-btn">\r
      <span class="button-text">Ya verifiqué mi correo</span>\r
      <span class="button-loader" style="display: none;">\r
        <span class="loader"></span>\r
      </span>\r
    </button>\r
    <button class="link-button" id="logout-from-verify">Cerrar sesión</button>\r
  </div>\r
</div>`,Mr=`<!-- Dashboard -->\r
<div class="dash-container fade-in">\r
\r
    <!-- HEADER -->\r
    <div class="dash-header">\r
        <h2>Mis sitios</h2>\r
        <div class="dash-header-actions">\r
            <button class="dash-icon-btn" id="profile-btn">\r
                <span class="material-symbols-outlined">person</span>\r
            </button>\r
        </div>\r
    </div>\r
\r
    <!-- BUSCADOR -->\r
    <div class="search-bar">\r
        <span class="material-symbols-outlined search-icon">search</span>\r
        <input type="text" style="display:none;" autocomplete="off">\r
        <input type="password" style="display:none;" autocomplete="off">\r
        <input type="search" id="search-input" placeholder="Buscar sitio..." class="search-input" autocomplete="off">\r
    </div>\r
\r
    <!-- LISTA DE SITIOS -->\r
    <div class="sites-list" id="sites-list">\r
        <!-- Se llena dinámicamente -->\r
    </div>\r
\r
    <!-- BOTÓN AGREGAR -->\r
    <div class="add-site-container" hidden>\r
        <button class="btn-add-site" id="add-site-btn">\r
            <span class="material-symbols-outlined">add</span>\r
            Agregar nuevo sitio\r
        </button>\r
    </div>\r
\r
    <!-- Modal Perfil -->\r
    <div class="modal-overlay" id="profile-modal" style="display:none;">\r
        <div class="modal-content">\r
            <div class="modal-profile">\r
                <div class="modal-avatar">\r
                    <span class="material-symbols-outlined">person</span>\r
                </div>\r
                <h3 id="profile-name"></h3>\r
                <p id="profile-email"></p>\r
            </div>\r
            <button class="modal-btn" id="logout-btn">\r
                <span class="material-symbols-outlined">logout</span>\r
                Cerrar sesión\r
            </button>\r
            <button class="modal-btn danger" id="delete-account-btn">\r
                <span class="material-symbols-outlined">delete_forever</span>\r
                Eliminar cuenta\r
            </button>\r
            <button class="modal-btn cancel" id="close-profile-modal">Cancelar</button>\r
        </div>\r
    </div>\r
\r
    <!-- Modal Agregar Sitio -->\r
    <div class="modal-overlay" id="add-modal" style="display:none;">\r
        <div class="modal-content">\r
            <h3>Agregar nuevo sitio</h3>\r
            <input type="text" id="site-serial" placeholder="Serial (ej: SH-0001)" class="modal-input">\r
            <input type="text" id="site-name" placeholder="Nombre del sitio" class="modal-input">\r
            <input type="text" id="site-location" placeholder="Ubicación (ej: Palmira)" class="modal-input">\r
            <input type="password" id="site-password" placeholder="Clave de acceso" class="modal-input">\r
            <select id="site-role" class="modal-input">\r
                <option value="ADM">Administrador</option>\r
                <option value="INV">Invitado</option>\r
            </select>\r
            <button class="modal-btn primary" id="save-site">Guardar</button>\r
            <button class="modal-btn cancel" id="close-add-modal">Cancelar</button>\r
        </div>\r
    </div>\r
</div>`,mu=`<!-- Offline -->\r
<div class="dash-container fade-in">\r
    <div class="offline-banner-top">\r
        <span class="material-symbols-outlined">wifi_off</span>\r
        <span>Sitios guardados</span>\r
    </div>\r
\r
    <div class="dash-header">\r
        <h2>ProtexHome</h2>\r
        <p style="color:#888;font-size:0.8rem;">Sin conexión a internet</p>\r
    </div>\r
\r
    <div class="sites-list" id="offline-sites-list">\r
        <!-- Se llena dinámicamente -->\r
    </div>\r
</div>`;var xr={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw bt(e)},bt=function(n){return new Error("Firebase Database ("+ca.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},_u=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},bs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(la(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):_u(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||d==null)throw new vu;const h=r<<2|a>>4;if(i.push(h),l!==64){const f=a<<4&240|l>>2;if(i.push(f),d!==64){const g=l<<6&192|d;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class vu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ua=function(n){const e=la(n);return bs.encodeByteArray(e,!0)},Cn=function(n){return ua(n).replace(/\./g,"")},Tn=function(n){try{return bs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){return da(void 0,n)}function da(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!wu(t)||(n[t]=da(n[t],e[t]));return n}function wu(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=()=>bu().__FIREBASE_DEFAULTS__,Iu=()=>{if(typeof process>"u"||typeof xr>"u")return;const n=xr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tn(n[1]);return e&&JSON.parse(e)},Es=()=>{try{return Eu()||Iu()||Cu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ha=n=>{var e,t;return(t=(e=Es())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},fa=n=>{const e=ha(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},pa=()=>{var n;return(n=Es())===null||n===void 0?void 0:n.config},ga=n=>{var e;return(e=Es())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Cn(JSON.stringify(t)),Cn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Is(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(j())}function Su(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ku(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ma(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Au(){const n=j();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Nu(){return ca.NODE_ADMIN===!0}function _a(){try{return typeof indexedDB=="object"}catch{return!1}}function va(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Ru(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu="FirebaseError";class ue extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Pu,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xe.prototype.create)}}class Xe{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ou(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ue(s,a,i)}}function Ou(n,e){return n.replace(Lu,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Lu=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(n){return JSON.parse(n)}function x(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Wt(Tn(r[0])||""),t=Wt(Tn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Du=function(n){const e=ya(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Mu=function(n){const e=ya(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function pt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ji(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Sn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function kn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Fr(r)&&Fr(o)){if(!kn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Fr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Dt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Mt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let d=0;d<80;d++){d<40?d<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):d<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+l+c+u+i[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Fu(n,e){const t=new Uu(n,e);return t.subscribe.bind(t)}class Uu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Bu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=bi),s.error===void 0&&(s.error=bi),s.complete===void 0&&(s.complete=bi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function bi(){}function Qn(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Xn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(n){return n&&n._delegate?n._delegate:n}class X{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new nn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Hu(e))try{this.getOrInitializeService({instanceIdentifier:Ue})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ue){return this.instances.has(e)}getOptions(e=Ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Wu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ue){return this.component?this.component.multipleInstances?e:Ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wu(n){return n===Ue?void 0:n}function Hu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Vu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const ju={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},Gu=S.INFO,zu={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},Ku=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=zu[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cs{constructor(e){this.name=e,this._logLevel=Gu,this._logHandler=Ku,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ju[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const Yu=(n,e)=>e.some(t=>n instanceof t);let Ur,Br;function Ju(){return Ur||(Ur=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qu(){return Br||(Br=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wa=new WeakMap,Gi=new WeakMap,ba=new WeakMap,Ei=new WeakMap,Ts=new WeakMap;function Xu(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ve(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&wa.set(t,n)}).catch(()=>{}),Ts.set(e,n),e}function Zu(n){if(Gi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Gi.set(n,e)}let zi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ba.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ed(n){zi=n(zi)}function td(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ii(this),e,...t);return ba.set(i,e.sort?e.sort():[e]),ve(i)}:Qu().includes(n)?function(...e){return n.apply(Ii(this),e),ve(wa.get(this))}:function(...e){return ve(n.apply(Ii(this),e))}}function nd(n){return typeof n=="function"?td(n):(n instanceof IDBTransaction&&Zu(n),Yu(n,Ju())?new Proxy(n,zi):n)}function ve(n){if(n instanceof IDBRequest)return Xu(n);if(Ei.has(n))return Ei.get(n);const e=nd(n);return e!==n&&(Ei.set(n,e),Ts.set(e,n)),e}const Ii=n=>Ts.get(n);function Zn(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ve(o);return i&&o.addEventListener("upgradeneeded",c=>{i(ve(o.result),c.oldVersion,c.newVersion,ve(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}function Ci(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),ve(t).then(()=>{})}const id=["get","getKey","getAll","getAllKeys","count"],sd=["put","add","delete","clear"],Ti=new Map;function $r(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=sd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||id.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return Ti.set(e,r),r}ed(n=>({...n,get:(e,t,i)=>$r(e,t)||n.get(e,t,i),has:(e,t)=>!!$r(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(od(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function od(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ki="@firebase/app",Vr="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new Cs("@firebase/app"),ad="@firebase/app-compat",cd="@firebase/analytics-compat",ld="@firebase/analytics",ud="@firebase/app-check-compat",dd="@firebase/app-check",hd="@firebase/auth",fd="@firebase/auth-compat",pd="@firebase/database",gd="@firebase/data-connect",md="@firebase/database-compat",_d="@firebase/functions",vd="@firebase/functions-compat",yd="@firebase/installations",wd="@firebase/installations-compat",bd="@firebase/messaging",Ed="@firebase/messaging-compat",Id="@firebase/performance",Cd="@firebase/performance-compat",Td="@firebase/remote-config",Sd="@firebase/remote-config-compat",kd="@firebase/storage",Ad="@firebase/storage-compat",Nd="@firebase/firestore",Rd="@firebase/vertexai-preview",Pd="@firebase/firestore-compat",Od="firebase",Ld="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="[DEFAULT]",Dd={[Ki]:"fire-core",[ad]:"fire-core-compat",[ld]:"fire-analytics",[cd]:"fire-analytics-compat",[dd]:"fire-app-check",[ud]:"fire-app-check-compat",[hd]:"fire-auth",[fd]:"fire-auth-compat",[pd]:"fire-rtdb",[gd]:"fire-data-connect",[md]:"fire-rtdb-compat",[_d]:"fire-fn",[vd]:"fire-fn-compat",[yd]:"fire-iid",[wd]:"fire-iid-compat",[bd]:"fire-fcm",[Ed]:"fire-fcm-compat",[Id]:"fire-perf",[Cd]:"fire-perf-compat",[Td]:"fire-rc",[Sd]:"fire-rc-compat",[kd]:"fire-gcs",[Ad]:"fire-gcs-compat",[Nd]:"fire-fst",[Pd]:"fire-fst-compat",[Rd]:"fire-vertex","fire-js":"fire-js",[Od]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Map,Md=new Map,Ji=new Map;function Wr(n,e){try{n.container.addComponent(e)}catch(t){we.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function oe(n){const e=n.name;if(Ji.has(e))return we.debug(`There were multiple attempts to register component ${e}.`),!1;Ji.set(e,n);for(const t of An.values())Wr(t,n);for(const t of Md.values())Wr(t,n);return!0}function Ze(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Y(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Oe=new Xe("app","Firebase",xd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new X("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Oe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=Ld;function Ea(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Yi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Oe.create("bad-app-name",{appName:String(s)});if(t||(t=pa()),!t)throw Oe.create("no-options");const r=An.get(s);if(r){if(kn(t,r.options)&&kn(i,r.config))return r;throw Oe.create("duplicate-app",{appName:s})}const o=new qu(s);for(const c of Ji.values())o.addComponent(c);const a=new Fd(t,i,o);return An.set(s,a),a}function ei(n=Yi){const e=An.get(n);if(!e&&n===Yi&&pa())return Ea();if(!e)throw Oe.create("no-app",{appName:n});return e}function z(n,e,t){var i;let s=(i=Dd[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),we.warn(a.join(" "));return}oe(new X(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="firebase-heartbeat-database",Bd=1,Ht="firebase-heartbeat-store";let Si=null;function Ia(){return Si||(Si=Zn(Ud,Bd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ht)}catch(t){console.warn(t)}}}}).catch(n=>{throw Oe.create("idb-open",{originalErrorMessage:n.message})})),Si}async function $d(n){try{const t=(await Ia()).transaction(Ht),i=await t.objectStore(Ht).get(Ca(n));return await t.done,i}catch(e){if(e instanceof ue)we.warn(e.message);else{const t=Oe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});we.warn(t.message)}}}async function Hr(n,e){try{const i=(await Ia()).transaction(Ht,"readwrite");await i.objectStore(Ht).put(e,Ca(n)),await i.done}catch(t){if(t instanceof ue)we.warn(t.message);else{const i=Oe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});we.warn(i.message)}}}function Ca(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=1024,Wd=30*24*60*60*1e3;class Hd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Wd}),this._storage.overwrite(this._heartbeatsCache))}catch(i){we.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=qr(),{heartbeatsToSend:i,unsentEntries:s}=qd(this._heartbeatsCache.heartbeats),r=Cn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return we.warn(t),""}}}function qr(){return new Date().toISOString().substring(0,10)}function qd(n,e=Vd){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),jr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),jr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class jd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _a()?va().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $d(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function jr(n){return Cn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){oe(new X("platform-logger",e=>new rd(e),"PRIVATE")),oe(new X("heartbeat",e=>new Hd(e),"PRIVATE")),z(Ki,Vr,n),z(Ki,Vr,"esm2017"),z("fire-js","")}Gd("");var Gr={};const zr="@firebase/database",Kr="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ta="";function zd(n){Ta=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),x(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Wt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return de(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Kd(e)}}catch{}return new Yd},$e=Sa("localStorage"),Jd=Sa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=new Cs("@firebase/database"),Qd=function(){let n=1;return function(){return n++}}(),ka=function(n){const e=$u(n),t=new xu;t.update(e);const i=t.digest();return bs.encodeByteArray(i)},sn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=sn.apply(null,i):typeof i=="object"?e+=x(i):e+=i,e+=" "}return e};let xt=null,Yr=!0;const Xd=function(n,e){p(!0,"Can't turn on custom loggers persistently."),at.logLevel=S.VERBOSE,xt=at.log.bind(at)},$=function(...n){if(Yr===!0&&(Yr=!1,xt===null&&Jd.get("logging_enabled")===!0&&Xd()),xt){const e=sn.apply(null,n);xt(e)}},rn=function(n){return function(...e){$(n,...e)}},Qi=function(...n){const e="FIREBASE INTERNAL ERROR: "+sn(...n);at.error(e)},be=function(...n){const e=`FIREBASE FATAL ERROR: ${sn(...n)}`;throw at.error(e),new Error(e)},q=function(...n){const e="FIREBASE WARNING: "+sn(...n);at.warn(e)},Zd=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ss=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},eh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},gt="[MIN_NAME]",qe="[MAX_NAME]",et=function(n,e){if(n===e)return 0;if(n===gt||e===qe)return-1;if(e===gt||n===qe)return 1;{const t=Jr(n),i=Jr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},th=function(n,e){return n===e?0:n<e?-1:1},Nt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+x(e))},ks=function(n){if(typeof n!="object"||n===null)return x(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=x(e[i]),t+=":",t+=ks(n[e[i]]);return t+="}",t},Aa=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function V(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Na=function(n){p(!Ss(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let d="";for(c=0;c<64;c+=8){let h=parseInt(u.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},nh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ih=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function sh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const rh=new RegExp("^-?(0*)\\d{1,10}$"),oh=-2147483648,ah=2147483647,Jr=function(n){if(rh.test(n)){const e=Number(n);if(e>=oh&&e<=ah)return e}return null},Ct=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw q("Exception was thrown by user callback.",t),e},Math.floor(0))}},ch=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ft=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){q(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',q(e)}}class vn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}vn.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As="5",Ra="v",Pa="s",Oa="r",La="f",Da=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ma="ls",xa="p",Xi="ac",Fa="websocket",Ua="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=$e.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&$e.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function dh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function $a(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===Fa)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ua)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dh(n)&&(t.ns=n.namespace);const s=[];return V(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(){this.counters_={}}incrementCounter(e,t=1){de(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return yu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={},Ai={};function Ns(n){const e=n.toString();return ki[e]||(ki[e]=new hh),ki[e]}function fh(n,e){const t=n.toString();return Ai[t]||(Ai[t]=e()),Ai[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Ct(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="start",gh="close",mh="pLPCommand",_h="pRTLPCB",Va="id",Wa="pw",Ha="ser",vh="cb",yh="seg",wh="ts",bh="d",Eh="dframe",qa=1870,ja=30,Ih=qa-ja,Ch=25e3,Th=3e4;class rt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=rn(e),this.stats_=Ns(t),this.urlFn=c=>(this.appCheckToken&&(c[Xi]=this.appCheckToken),$a(t,Ua,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ph(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Th)),eh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rs((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qr)this.id=a,this.password=c;else if(o===gh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Qr]="t",i[Ha]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[vh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Ra]=As,this.transportSessionId&&(i[Pa]=this.transportSessionId),this.lastSessionId&&(i[Ma]=this.lastSessionId),this.applicationId&&(i[xa]=this.applicationId),this.appCheckToken&&(i[Xi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Da.test(location.hostname)&&(i[Oa]=La);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){rt.forceAllow_=!0}static forceDisallow(){rt.forceDisallow_=!0}static isAvailable(){return rt.forceAllow_?!0:!rt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nh()&&!ih()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ua(t),s=Aa(i,Ih);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Eh]="t",i[Va]=e,i[Wa]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=x(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Rs{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qd(),window[mh+this.uniqueCallbackIdentifier]=e,window[_h+this.uniqueCallbackIdentifier]=t,this.myIFrame=Rs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$("frame writing exception"),a.stack&&$(a.stack),$(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Va]=this.myID,e[Wa]=this.myPW,e[Ha]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ja+i.length<=qa;){const o=this.pendingSegs.shift();i=i+"&"+yh+s+"="+o.seg+"&"+wh+s+"="+o.ts+"&"+bh+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Ch)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{$("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=16384,kh=45e3;let Nn=null;typeof MozWebSocket<"u"?Nn=MozWebSocket:typeof WebSocket<"u"&&(Nn=WebSocket);class ne{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=rn(this.connId),this.stats_=Ns(t),this.connURL=ne.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Ra]=As,typeof location<"u"&&location.hostname&&Da.test(location.hostname)&&(o[Oa]=La),t&&(o[Pa]=t),i&&(o[Ma]=i),s&&(o[Xi]=s),r&&(o[xa]=r),$a(e,Fa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,$e.set("previous_websocket_failure",!0);try{let i;Nu(),this.mySock=new Nn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ne.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Nn!==null&&!ne.forceDisallow_}static previouslyFailed(){return $e.isInMemoryStorage||$e.get("previous_websocket_failure")===!0}markConnectionHealthy(){$e.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Wt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=x(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Aa(t,Sh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(kh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ne.responsesRequiredToBeHealthy=2;ne.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[rt,ne]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ne&&ne.isAvailable();let i=t&&!ne.previouslyFailed();if(e.webSocketOnly&&(t||q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ne];else{const s=this.transports_=[];for(const r of qt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);qt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}qt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah=6e4,Nh=5e3,Rh=10*1024,Ph=100*1024,Ni="t",Xr="d",Oh="s",Zr="r",Lh="e",eo="o",to="a",no="n",io="p",Dh="h";class Mh{constructor(e,t,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=rn("c:"+this.id+":"),this.transportManager_=new qt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ft(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Ph?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Rh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ni in e){const t=e[Ni];t===to?this.upgradeIfSecondaryHealthy_():t===Zr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===eo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Nt("t",e),i=Nt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:io,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:to,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:no,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Nt("t",e),i=Nt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Nt(Ni,e);if(Xr in e){const i=e[Xr];if(t===Dh){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===no){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Oh?this.onConnectionShutdown_(i):t===Zr?this.onReset_(i):t===Lh?Qi("Server Error: "+i):t===eo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),As!==i&&q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Ft(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Ah))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ft(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:io,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&($e.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends za{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Is()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Rn}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=32,ro=768;class k{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function T(){return new k("")}function b(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Me(n){return n.pieces_.length-n.pieceNum_}function N(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new k(n.pieces_,e)}function Ps(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function xh(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function jt(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ka(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new k(e,0)}function O(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof k)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new k(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function H(n,e){const t=b(n),i=b(e);if(t===null)return e;if(t===i)return H(N(n),N(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Fh(n,e){const t=jt(n,0),i=jt(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=et(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function Os(n,e){if(Me(n)!==Me(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function J(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Me(n)>Me(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Uh{constructor(e,t){this.errorPrefix_=t,this.parts_=jt(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Xn(this.parts_[i]);Ya(this)}}function Bh(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Xn(e),Ya(n)}function $h(n){const e=n.parts_.pop();n.byteLength_-=Xn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ya(n){if(n.byteLength_>ro)throw new Error(n.errorPrefix_+"has a key path longer than "+ro+" bytes ("+n.byteLength_+").");if(n.parts_.length>so)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+so+") or object contains a cycle "+Be(n))}function Be(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends za{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ls}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1e3,Vh=60*5*1e3,oo=30*1e3,Wh=1.3,Hh=3e4,qh="server_kill",ao=3;class ye extends Ga{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=ye.nextPersistentConnectionId_++,this.log_=rn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Rt,this.maxReconnectDelay_=Vh,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ls.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Rn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(x(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new nn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;ye.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&de(e,"w")){const i=pt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Mu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Du(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+x(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Qi("Unrecognized action received from server: "+x(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Hh&&(this.reconnectDelay_=Rt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Wh)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ye.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$("getToken() completed but was canceled"):($("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Mh(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{q(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(qh)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&q(d),c())}}}interrupt(e){$("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ji(this.interruptReasons_)&&(this.reconnectDelay_=Rt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>ks(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new k(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){$("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ao&&(this.reconnectDelay_=oo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ao&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ta.replace(/\./g,"-")]=1,Is()?e["framework.cordova"]=1:ma()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Rn.getInstance().currentlyOnline();return ji(this.interruptReasons_)&&e}}ye.nextPersistentConnectionId_=0;ye.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new E(gt,e),s=new E(gt,t);return this.compare(i,s)!==0}minPost(){return E.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pn;class Ja extends ti{static get __EMPTY_NODE(){return pn}static set __EMPTY_NODE(e){pn=e}compare(e,t){return et(e.name,t.name)}isDefinedOn(e){throw bt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(qe,pn)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,pn)}toString(){return".key"}}const ct=new Ja;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class B{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??B.RED,this.left=s??G.EMPTY_NODE,this.right=r??G.EMPTY_NODE}copy(e,t,i,s,r){return new B(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return G.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return G.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}B.RED=!0;B.BLACK=!1;class jh{copy(e,t,i,s,r){return this}insert(e,t,i){return new B(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class G{constructor(e,t=G.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new G(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,B.BLACK,null,null))}remove(e){return new G(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,B.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new gn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new gn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new gn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new gn(this.root_,null,this.comparator_,!0,e)}}G.EMPTY_NODE=new jh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n,e){return et(n.name,e.name)}function Ds(n,e){return et(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi;function zh(n){Zi=n}const Qa=function(n){return typeof n=="number"?"number:"+Na(n):"string:"+n},Xa=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&de(e,".sv"),"Priority must be a string or number.")}else p(n===Zi||n.isEmpty(),"priority of unexpected type.");p(n===Zi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co;class U{constructor(e,t=U.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Xa(this.priorityNode_)}static set __childrenNodeConstructor(e){co=e}static get __childrenNodeConstructor(){return co}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new U(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:b(e)===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:U.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=b(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Me(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,U.__childrenNodeConstructor.EMPTY_NODE.updateChild(N(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Qa(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Na(this.value_):e+=this.value_,this.lazyHash_=ka(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===U.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof U.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=U.VALUE_TYPE_ORDER.indexOf(t),r=U.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}U.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za,ec;function Kh(n){Za=n}function Yh(n){ec=n}class Jh extends ti{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?et(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(qe,new U("[PRIORITY-POST]",ec))}makePost(e,t){const i=Za(e);return new E(t,new U("[PRIORITY-POST]",i))}toString(){return".priority"}}const L=new Jh;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=Math.log(2);class Xh{constructor(e){const t=r=>parseInt(Math.log(r)/Qh,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Pn=function(n,e,t,i){n.sort(e);const s=function(c,l){const u=l-c;let d,h;if(u===0)return null;if(u===1)return d=n[c],h=t?t(d):d,new B(h,d.node,B.BLACK,null,null);{const f=parseInt(u/2,10)+c,g=s(c,f),m=s(f+1,l);return d=n[f],h=t?t(d):d,new B(h,d.node,B.BLACK,g,m)}},r=function(c){let l=null,u=null,d=n.length;const h=function(g,m){const w=d-g,y=d;d-=g;const C=s(w+1,y),D=n[w],F=t?t(D):D;f(new B(F,D.node,m,null,C))},f=function(g){l?(l.left=g,l=g):(u=g,l=g)};for(let g=0;g<c.count;++g){const m=c.nextBitIsOne(),w=Math.pow(2,c.count-(g+1));m?h(w,B.BLACK):(h(w,B.BLACK),h(w,B.RED))}return u},o=new Xh(n.length),a=r(o);return new G(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri;const st={};class pe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return p(st&&L,"ChildrenNode.ts has not been loaded"),Ri=Ri||new pe({".priority":st},{".priority":L}),Ri}get(e){const t=pt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof G?t:null}hasIndex(e){return de(this.indexSet_,e.toString())}addIndex(e,t){p(e!==ct,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Pn(i,e.getCompare()):a=st;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new pe(u,l)}addToIndexes(e,t){const i=Sn(this.indexes_,(s,r)=>{const o=pt(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===st)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(E.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),Pn(a,o.getCompare())}else return st;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new E(e.name,a))),c.insert(e,e.node)}});return new pe(i,this.indexSet_)}removeFromIndexes(e,t){const i=Sn(this.indexes_,s=>{if(s===st)return s;{const r=t.get(e.name);return r?s.remove(new E(e.name,r)):s}});return new pe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pt;class v{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Xa(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pt||(Pt=new v(new G(Ds),null,pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Pt:t}}getChild(e){const t=b(e);return t===null?this:this.getImmediateChild(t).getChild(N(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new E(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Pt:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=b(e);if(i===null)return t;{p(b(e)!==".priority"||Me(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(N(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(L,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Qa(this.getPriority().val())+":"),this.forEachChild(L,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":ka(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===on?-1:0}withIndex(e){if(e===ct||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===ct||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(L),s=t.getIterator(L);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ct?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zh extends v{constructor(){super(new G(Ds),v.EMPTY_NODE,pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const on=new Zh;Object.defineProperties(E,{MIN:{value:new E(gt,v.EMPTY_NODE)},MAX:{value:new E(qe,on)}});Ja.__EMPTY_NODE=v.EMPTY_NODE;U.__childrenNodeConstructor=v;zh(on);Yh(on);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=!0;function M(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new U(t,M(e))}if(!(n instanceof Array)&&ef){const t=[];let i=!1;if(V(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=M(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new E(o,c)))}}),t.length===0)return v.EMPTY_NODE;const r=Pn(t,Gh,o=>o.name,Ds);if(i){const o=Pn(t,L.getCompare());return new v(r,M(e),new pe({".priority":o},{".priority":L}))}else return new v(r,M(e),pe.Default)}else{let t=v.EMPTY_NODE;return V(n,(i,s)=>{if(de(n,i)&&i.substring(0,1)!=="."){const r=M(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(M(e))}}Kh(M);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf extends ti{constructor(e){super(),this.indexPath_=e,p(!I(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?et(e.name,t.name):r}makePost(e,t){const i=M(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new E(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,on);return new E(qe,e)}toString(){return jt(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf extends ti{compare(e,t){const i=e.node.compareTo(t.node);return i===0?et(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const i=M(e);return new E(t,i)}toString(){return".value"}}const sf=new nf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n){return{type:"value",snapshotNode:n}}function mt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Gt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function zt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function rf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Gt(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(mt(t,i)):o.trackChildChange(zt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(L,(s,r)=>{t.hasChild(s)||i.trackChildChange(Gt(s,r))}),t.isLeafNode()||t.forEachChild(L,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(zt(s,r,o))}else i.trackChildChange(mt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.indexedFilter_=new Ms(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Kt.getStartPost_(e),this.endPost_=Kt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new E(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(L,(o,a)=>{r.matches(new E(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Kt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new E(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const c=new E(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,c);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(zt(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Gt(t,d));const m=a.updateImmediateChild(t,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(mt(h.name,h.node)),m.updateImmediateChild(h.name,h.node)):m}}else return i.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(Gt(l.name,l.node)),r.trackChildChange(mt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=L}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gt}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qe}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===L}copy(){const e=new xs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function af(n){return n.loadsAllData()?new Ms(n.getIndex()):n.hasLimit()?new of(n):new Kt(n)}function lo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===L?t="$priority":n.index_===sf?t="$value":n.index_===ct?t="$key":(p(n.index_ instanceof tf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=x(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=x(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+x(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=x(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+x(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function uo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==L&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Ga{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=rn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=On.getListenId_(e,i),a={};this.listens_[o]=a;const c=lo(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let d=u;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(r,d,!1,i),pt(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",s(h,null)}})}unlisten(e,t){const i=On.getListenId_(e,t);delete this.listens_[i]}get(e){const t=lo(e._queryParams),i=e._path.toString(),s=new nn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Et(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Wt(a.responseText)}catch{q("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&q("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return{value:null,children:new Map}}function nc(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=b(e);n.children.has(i)||n.children.set(i,Ln());const s=n.children.get(i);e=N(e),nc(s,e,t)}}function es(n,e,t){n.value!==null?t(e,n.value):lf(n,(i,s)=>{const r=new k(e.toString()+"/"+i);es(s,r,t)})}function lf(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&V(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=10*1e3,df=30*1e3,hf=5*60*1e3;class ff{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new uf(e);const i=ho+(df-ho)*Math.random();Ft(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;V(e,(s,r)=>{r>0&&de(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Ft(this.reportStats_.bind(this),Math.floor(Math.random()*2*hf))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ie||(ie={}));function Fs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Us(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Bs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ie.ACK_USER_WRITE,this.source=Fs()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new k(e));return new Dn(T(),t,this.revert)}}else return p(b(this.path)===e,"operationForChild called for unrelated child."),new Dn(N(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,t){this.source=e,this.path=t,this.type=ie.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new Yt(this.source,T()):new Yt(this.source,N(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ie.OVERWRITE}operationForChild(e){return I(this.path)?new je(this.source,T(),this.snap.getImmediateChild(e)):new je(this.source,N(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ie.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new k(e));return t.isEmpty()?null:t.value?new je(this.source,T(),t.value):new _t(this.source,T(),t)}else return p(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _t(this.source,N(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=b(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function gf(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rf(o.childName,o.snapshotNode))}),Ot(n,s,"child_removed",e,i,t),Ot(n,s,"child_added",e,i,t),Ot(n,s,"child_moved",r,i,t),Ot(n,s,"child_changed",e,i,t),Ot(n,s,"value",e,i,t),s}function Ot(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>_f(n,a,c)),o.forEach(a=>{const c=mf(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function mf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function _f(n,e,t){if(e.childName==null||t.childName==null)throw bt("Should only compare child_ events.");const i=new E(e.childName,e.snapshotNode),s=new E(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(n,e){return{eventCache:n,serverCache:e}}function Ut(n,e,t,i){return ni(new xe(e,t,i),n.serverCache)}function ic(n,e,t,i){return ni(n.eventCache,new xe(e,t,i))}function Mn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ge(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pi;const vf=()=>(Pi||(Pi=new G(th)),Pi);class A{constructor(e,t=vf()){this.value=e,this.children=t}static fromObject(e){let t=new A(null);return V(e,(i,s)=>{t=t.set(new k(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:T(),value:this.value};if(I(e))return null;{const i=b(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(N(e),t);return r!=null?{path:O(new k(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=b(e),i=this.children.get(t);return i!==null?i.subtree(N(e)):new A(null)}}set(e,t){if(I(e))return new A(t,this.children);{const i=b(e),r=(this.children.get(i)||new A(null)).set(N(e),t),o=this.children.insert(i,r);return new A(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new A(null):new A(null,this.children);{const t=b(e),i=this.children.get(t);if(i){const s=i.remove(N(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new A(null):new A(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=b(e),i=this.children.get(t);return i?i.get(N(e)):null}}setTree(e,t){if(I(e))return t;{const i=b(e),r=(this.children.get(i)||new A(null)).setTree(N(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new A(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(O(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,T(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(I(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(N(e),O(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,T(),t)}foreachOnPath_(e,t,i){if(I(e))return this;{this.value&&i(t,this.value);const s=b(e),r=this.children.get(s);return r?r.foreachOnPath_(N(e),O(t,s),i):new A(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(O(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.writeTree_=e}static empty(){return new se(new A(null))}}function Bt(n,e,t){if(I(e))return new se(new A(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=H(s,e);return r=r.updateChild(o,t),new se(n.writeTree_.set(s,r))}else{const s=new A(t),r=n.writeTree_.setTree(e,s);return new se(r)}}}function ts(n,e,t){let i=n;return V(t,(s,r)=>{i=Bt(i,O(e,s),r)}),i}function fo(n,e){if(I(e))return se.empty();{const t=n.writeTree_.setTree(e,new A(null));return new se(t)}}function ns(n,e){return tt(n,e)!=null}function tt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(H(t.path,e)):null}function po(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(L,(i,s)=>{e.push(new E(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new E(i,s.value))}),e}function Le(n,e){if(I(e))return n;{const t=tt(n,e);return t!=null?new se(new A(t)):new se(n.writeTree_.subtree(e))}}function is(n){return n.writeTree_.isEmpty()}function vt(n,e){return sc(T(),n.writeTree_,e)}function sc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=sc(O(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(O(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(n,e){return cc(e,n)}function yf(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Bt(n.visibleWrites,e,t)),n.lastWriteId=i}function wf(n,e,t,i){p(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=ts(n.visibleWrites,e,t),n.lastWriteId=i}function bf(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Ef(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&If(a,i.path)?s=!1:J(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Cf(n),!0;if(i.snap)n.visibleWrites=fo(n.visibleWrites,i.path);else{const a=i.children;V(a,c=>{n.visibleWrites=fo(n.visibleWrites,O(i.path,c))})}return!0}else return!1}function If(n,e){if(n.snap)return J(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&J(O(n.path,t),e))return!0;return!1}function Cf(n){n.visibleWrites=rc(n.allWrites,Tf,T()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Tf(n){return n.visible}function rc(n,e,t){let i=se.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)J(t,o)?(a=H(t,o),i=Bt(i,a,r.snap)):J(o,t)&&(a=H(o,t),i=Bt(i,T(),r.snap.getChild(a)));else if(r.children){if(J(t,o))a=H(t,o),i=ts(i,a,r.children);else if(J(o,t))if(a=H(o,t),I(a))i=ts(i,T(),r.children);else{const c=pt(r.children,b(a));if(c){const l=c.getChild(N(a));i=Bt(i,T(),l)}}}else throw bt("WriteRecord should have .snap or .children")}}return i}function oc(n,e,t,i,s){if(!i&&!s){const r=tt(n.visibleWrites,e);if(r!=null)return r;{const o=Le(n.visibleWrites,e);if(is(o))return t;if(t==null&&!ns(o,T()))return null;{const a=t||v.EMPTY_NODE;return vt(o,a)}}}else{const r=Le(n.visibleWrites,e);if(!s&&is(r))return t;if(!s&&t==null&&!ns(r,T()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(J(l.path,e)||J(e,l.path))},a=rc(n.allWrites,o,e),c=t||v.EMPTY_NODE;return vt(a,c)}}}function Sf(n,e,t){let i=v.EMPTY_NODE;const s=tt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(L,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Le(n.visibleWrites,e);return t.forEachChild(L,(o,a)=>{const c=vt(Le(r,new k(o)),a);i=i.updateImmediateChild(o,c)}),po(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Le(n.visibleWrites,e);return po(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function kf(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=O(e,t);if(ns(n.visibleWrites,r))return null;{const o=Le(n.visibleWrites,r);return is(o)?s.getChild(t):vt(o,s.getChild(t))}}function Af(n,e,t,i){const s=O(e,t),r=tt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Le(n.visibleWrites,s);return vt(o,i.getNode().getImmediateChild(t))}else return null}function Nf(n,e){return tt(n.visibleWrites,e)}function Rf(n,e,t,i,s,r,o){let a;const c=Le(n.visibleWrites,e),l=tt(c,T());if(l!=null)a=l;else if(t!=null)a=vt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function Pf(){return{visibleWrites:se.empty(),allWrites:[],lastWriteId:-1}}function xn(n,e,t,i){return oc(n.writeTree,n.treePath,e,t,i)}function $s(n,e){return Sf(n.writeTree,n.treePath,e)}function go(n,e,t,i){return kf(n.writeTree,n.treePath,e,t,i)}function Fn(n,e){return Nf(n.writeTree,O(n.treePath,e))}function Of(n,e,t,i,s,r){return Rf(n.writeTree,n.treePath,e,t,i,s,r)}function Vs(n,e,t){return Af(n.writeTree,n.treePath,e,t)}function ac(n,e){return cc(O(n.treePath,e),n.writeTree)}function cc(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,zt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Gt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,mt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,zt(i,e.snapshotNode,s.oldSnap));else throw bt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const lc=new Df;class Ws{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new xe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ge(this.viewCache_),r=Of(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(n){return{filter:n}}function xf(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Ff(n,e,t,i,s){const r=new Lf;let o,a;if(t.type===ie.OVERWRITE){const l=t;l.source.fromUser?o=ss(n,e,l.path,l.snap,i,s,r):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!I(l.path),o=Un(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===ie.MERGE){const l=t;l.source.fromUser?o=Bf(n,e,l.path,l.children,i,s,r):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=rs(n,e,l.path,l.children,i,s,a,r))}else if(t.type===ie.ACK_USER_WRITE){const l=t;l.revert?o=Wf(n,e,l.path,i,s,r):o=$f(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===ie.LISTEN_COMPLETE)o=Vf(n,e,t.path,i,r);else throw bt("Unknown operation type: "+t.type);const c=r.getChanges();return Uf(e,o,c),{viewCache:o,changes:c}}function Uf(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Mn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(tc(Mn(e)))}}function uc(n,e,t,i,s,r){const o=e.eventCache;if(Fn(i,t)!=null)return e;{let a,c;if(I(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Ge(e),u=l instanceof v?l:v.EMPTY_NODE,d=$s(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const l=xn(i,Ge(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=b(t);if(l===".priority"){p(Me(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=go(i,t,u,c);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=N(t);let d;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=go(i,t,o.getNode(),c);h!=null?d=o.getNode().getImmediateChild(l).updateChild(u,h):d=o.getNode().getImmediateChild(l)}else d=Vs(i,l,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),l,d,u,s,r):a=o.getNode()}}return Ut(e,a,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function Un(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(I(t))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=b(t);if(!c.isCompleteForPath(t)&&Me(t)>1)return e;const g=N(t),w=c.getNode().getImmediateChild(f).updateChild(g,i);f===".priority"?l=u.updatePriority(c.getNode(),w):l=u.updateChild(c.getNode(),f,w,g,lc,null)}const d=ic(e,l,c.isFullyInitialized()||I(t),u.filtersNodes()),h=new Ws(s,d,r);return uc(n,d,t,s,h,a)}function ss(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const u=new Ws(s,e,r);if(I(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=Ut(e,l,!0,n.filter.filtersNodes());else{const d=b(t);if(d===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=Ut(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=N(t),f=a.getNode().getImmediateChild(d);let g;if(I(h))g=i;else{const m=u.getCompleteChild(d);m!=null?Ps(h)===".priority"&&m.getChild(Ka(h)).isEmpty()?g=m:g=m.updateChild(h,i):g=v.EMPTY_NODE}if(f.equals(g))c=e;else{const m=n.filter.updateChild(a.getNode(),d,g,h,u,o);c=Ut(e,m,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function mo(n,e){return n.eventCache.isCompleteForChild(e)}function Bf(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=O(t,c);mo(e,b(u))&&(a=ss(n,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=O(t,c);mo(e,b(u))||(a=ss(n,a,u,l,s,r,o))}),a}function _o(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function rs(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;I(t)?l=i:l=new A(null).setTree(t,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),g=_o(n,f,h);c=Un(n,c,new k(d),g,s,r,o,a)}}),l.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const g=e.serverCache.getNode().getImmediateChild(d),m=_o(n,g,h);c=Un(n,c,new k(d),m,s,r,o,a)}}),c}function $f(n,e,t,i,s,r,o){if(Fn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(I(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Un(n,e,t,c.getNode().getChild(t),s,r,a,o);if(I(t)){let l=new A(null);return c.getNode().forEachChild(ct,(u,d)=>{l=l.set(new k(u),d)}),rs(n,e,t,l,s,r,a,o)}else return e}else{let l=new A(null);return i.foreach((u,d)=>{const h=O(t,u);c.isCompleteForPath(h)&&(l=l.set(u,c.getNode().getChild(h)))}),rs(n,e,t,l,s,r,a,o)}}function Vf(n,e,t,i,s){const r=e.serverCache,o=ic(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return uc(n,o,t,i,lc,s)}function Wf(n,e,t,i,s,r){let o;if(Fn(i,t)!=null)return e;{const a=new Ws(i,e,s),c=e.eventCache.getNode();let l;if(I(t)||b(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=xn(i,Ge(e));else{const d=e.serverCache.getNode();p(d instanceof v,"serverChildren would be complete if leaf node"),u=$s(i,d)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=b(t);let d=Vs(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?l=n.filter.updateChild(c,u,d,N(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,v.EMPTY_NODE,N(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=xn(i,Ge(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Fn(i,T())!=null,Ut(e,l,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ms(i.getIndex()),r=af(i);this.processor_=Mf(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new xe(c,o.isFullyInitialized(),s.filtersNodes()),d=new xe(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ni(d,u),this.eventGenerator_=new pf(this.query_)}get query(){return this.query_}}function qf(n){return n.viewCache_.serverCache.getNode()}function jf(n){return Mn(n.viewCache_)}function Gf(n,e){const t=Ge(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(b(e)).isEmpty())?t.getChild(e):null}function vo(n){return n.eventRegistrations_.length===0}function zf(n,e){n.eventRegistrations_.push(e)}function yo(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function wo(n,e,t,i){e.type===ie.MERGE&&e.source.queryId!==null&&(p(Ge(n.viewCache_),"We should always have a full cache before handling merges"),p(Mn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Ff(n.processor_,s,e,t,i);return xf(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,dc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Kf(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(L,(r,o)=>{i.push(mt(r,o))}),t.isFullyInitialized()&&i.push(tc(t.getNode())),dc(n,i,t.getNode(),e)}function dc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return gf(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bn;class hc{constructor(){this.views=new Map}}function Yf(n){p(!Bn,"__referenceConstructor has already been defined"),Bn=n}function Jf(){return p(Bn,"Reference.ts has not been loaded"),Bn}function Qf(n){return n.views.size===0}function Hs(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),wo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(wo(o,e,t,i));return r}}function fc(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=xn(t,s?i:null),c=!1;a?c=!0:i instanceof v?(a=$s(t,i),c=!1):(a=v.EMPTY_NODE,c=!1);const l=ni(new xe(a,c,!1),new xe(i,s,!1));return new Hf(e,l)}return o}function Xf(n,e,t,i,s,r){const o=fc(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),zf(o,t),Kf(o,t)}function Zf(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Fe(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(yo(l,t,i)),vo(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(yo(c,t,i)),vo(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!Fe(n)&&r.push(new(Jf())(e._repo,e._path)),{removed:r,events:o}}function pc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function De(n,e){let t=null;for(const i of n.views.values())t=t||Gf(i,e);return t}function gc(n,e){if(e._queryParams.loadsAllData())return si(n);{const i=e._queryIdentifier;return n.views.get(i)}}function mc(n,e){return gc(n,e)!=null}function Fe(n){return si(n)!=null}function si(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $n;function ep(n){p(!$n,"__referenceConstructor has already been defined"),$n=n}function tp(){return p($n,"Reference.ts has not been loaded"),$n}let np=1;class bo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new A(null),this.pendingWriteTree_=Pf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _c(n,e,t,i,s){return yf(n.pendingWriteTree_,e,t,i,s),s?Tt(n,new je(Fs(),e,t)):[]}function ip(n,e,t,i){wf(n.pendingWriteTree_,e,t,i);const s=A.fromObject(t);return Tt(n,new _t(Fs(),e,s))}function Pe(n,e,t=!1){const i=bf(n.pendingWriteTree_,e);if(Ef(n.pendingWriteTree_,e)){let r=new A(null);return i.snap!=null?r=r.set(T(),!0):V(i.children,o=>{r=r.set(new k(o),!0)}),Tt(n,new Dn(i.path,r,t))}else return[]}function an(n,e,t){return Tt(n,new je(Us(),e,t))}function sp(n,e,t){const i=A.fromObject(t);return Tt(n,new _t(Us(),e,i))}function rp(n,e){return Tt(n,new Yt(Us(),e))}function op(n,e,t){const i=js(n,t);if(i){const s=Gs(i),r=s.path,o=s.queryId,a=H(r,e),c=new Yt(Bs(o),a);return zs(n,r,c)}else return[]}function Vn(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||mc(o,e))){const c=Zf(o,e,t,i);Qf(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>Fe(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=lp(h);for(let g=0;g<f.length;++g){const m=f[g],w=m.query,y=bc(n,m);n.listenProvider_.startListening($t(w),Jt(n,w),y.hashFn,y.onComplete)}}}!d&&l.length>0&&!i&&(u?n.listenProvider_.stopListening($t(e),null):l.forEach(h=>{const f=n.queryToTagMap.get(ri(h));n.listenProvider_.stopListening($t(h),f)}))}up(n,l)}return a}function vc(n,e,t,i){const s=js(n,i);if(s!=null){const r=Gs(s),o=r.path,a=r.queryId,c=H(o,e),l=new je(Bs(a),c,t);return zs(n,o,l)}else return[]}function ap(n,e,t,i){const s=js(n,i);if(s){const r=Gs(s),o=r.path,a=r.queryId,c=H(o,e),l=A.fromObject(t),u=new _t(Bs(a),c,l);return zs(n,o,u)}else return[]}function os(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const g=H(h,s);r=r||De(f,g),o=o||Fe(f)});let a=n.syncPointTree_.get(s);a?(o=o||Fe(a),r=r||De(a,T())):(a=new hc,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,g)=>{const m=De(g,T());m&&(r=r.updateImmediateChild(f,m))}));const l=mc(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=ri(e);p(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=dp();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=ii(n.pendingWriteTree_,s);let d=Xf(a,e,t,u,r,c);if(!l&&!o&&!i){const h=gc(a,e);d=d.concat(hp(n,e,h))}return d}function qs(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=H(o,e),l=De(a,c);if(l)return l});return oc(s,e,r,t,!0)}function cp(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const d=H(l,t);i=i||De(u,d)});let s=n.syncPointTree_.get(t);s?i=i||De(s,T()):(s=new hc,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new xe(i,!0,!1):null,a=ii(n.pendingWriteTree_,e._path),c=fc(s,e,a,r?o.getNode():v.EMPTY_NODE,r);return jf(c)}function Tt(n,e){return yc(e,n.syncPointTree_,null,ii(n.pendingWriteTree_,T()))}function yc(n,e,t,i){if(I(n.path))return wc(n,e,t,i);{const s=e.get(T());t==null&&s!=null&&(t=De(s,T()));let r=[];const o=b(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=ac(i,o);r=r.concat(yc(a,c,l,u))}return s&&(r=r.concat(Hs(s,n,i,t))),r}}function wc(n,e,t,i){const s=e.get(T());t==null&&s!=null&&(t=De(s,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=ac(i,o),u=n.operationForChild(o);u&&(r=r.concat(wc(u,a,c,l)))}),s&&(r=r.concat(Hs(s,n,i,t))),r}function bc(n,e){const t=e.query,i=Jt(n,t);return{hashFn:()=>(qf(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?op(n,t._path,i):rp(n,t._path);{const r=sh(s,t);return Vn(n,t,null,r)}}}}function Jt(n,e){const t=ri(e);return n.queryToTagMap.get(t)}function ri(n){return n._path.toString()+"$"+n._queryIdentifier}function js(n,e){return n.tagToQueryMap.get(e)}function Gs(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new k(n.substr(0,e))}}function zs(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=ii(n.pendingWriteTree_,e);return Hs(i,t,s,null)}function lp(n){return n.fold((e,t,i)=>{if(t&&Fe(t))return[si(t)];{let s=[];return t&&(s=pc(t)),V(i,(r,o)=>{s=s.concat(o)}),s}})}function $t(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(tp())(n._repo,n._path):n}function up(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=ri(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function dp(){return np++}function hp(n,e,t){const i=e._path,s=Jt(n,e),r=bc(n,t),o=n.listenProvider_.startListening($t(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!Fe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,d)=>{if(!I(l)&&u&&Fe(u))return[si(u).query];{let h=[];return u&&(h=h.concat(pc(u).map(f=>f.query))),V(d,(f,g)=>{h=h.concat(g)}),h}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening($t(u),Jt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ks(t)}node(){return this.node_}}class Ys{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=O(this.path_,e);return new Ys(this.syncTree_,t)}node(){return qs(this.syncTree_,this.path_)}}const fp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Eo=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return pp(n[".sv"],e,t);if(typeof n[".sv"]=="object")return gp(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},pp=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},gp=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Ec=function(n,e,t,i){return Js(e,new Ys(t,n),i)},Ic=function(n,e,t){return Js(n,new Ks(e),t)};function Js(n,e,t){const i=n.getPriority().val(),s=Eo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Eo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new U(a,M(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new U(s))),o.forEachChild(L,(a,c)=>{const l=Js(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Xs(n,e){let t=e instanceof k?e:new k(e),i=n,s=b(t);for(;s!==null;){const r=pt(i.node.children,s)||{children:{},childCount:0};i=new Qs(s,i,r),t=N(t),s=b(t)}return i}function St(n){return n.node.value}function Cc(n,e){n.node.value=e,as(n)}function Tc(n){return n.node.childCount>0}function mp(n){return St(n)===void 0&&!Tc(n)}function oi(n,e){V(n.node.children,(t,i)=>{e(new Qs(t,n,i))})}function Sc(n,e,t,i){t&&e(n),oi(n,s=>{Sc(s,e,!0)})}function _p(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function cn(n){return new k(n.parent===null?n.name:cn(n.parent)+"/"+n.name)}function as(n){n.parent!==null&&vp(n.parent,n.name,n)}function vp(n,e,t){const i=mp(t),s=de(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,as(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,as(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=/[\[\].#$\/\u0000-\u001F\u007F]/,wp=/[\[\].#$\u0000-\u001F\u007F]/,Oi=10*1024*1024,Zs=function(n){return typeof n=="string"&&n.length!==0&&!yp.test(n)},kc=function(n){return typeof n=="string"&&n.length!==0&&!wp.test(n)},bp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),kc(n)},Ep=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ss(n)||n&&typeof n=="object"&&de(n,".sv")},Ip=function(n,e,t,i){ai(Qn(n,"value"),e,t)},ai=function(n,e,t){const i=t instanceof k?new Uh(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Be(i));if(typeof e=="function")throw new Error(n+"contains a function "+Be(i)+" with contents = "+e.toString());if(Ss(e))throw new Error(n+"contains "+e.toString()+" "+Be(i));if(typeof e=="string"&&e.length>Oi/3&&Xn(e)>Oi)throw new Error(n+"contains a string greater than "+Oi+" utf8 bytes "+Be(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(V(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Zs(o)))throw new Error(n+" contains an invalid key ("+o+") "+Be(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Bh(i,o),ai(n,a,i),$h(i)}),s&&r)throw new Error(n+' contains ".value" child '+Be(i)+" in addition to actual children.")}},Cp=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=jt(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Zs(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Fh);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&J(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},Tp=function(n,e,t,i){const s=Qn(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];V(e,(o,a)=>{const c=new k(o);if(ai(s,a,O(t,c)),Ps(c)===".priority"&&!Ep(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),Cp(s,r)},Ac=function(n,e,t,i){if(!kc(t))throw new Error(Qn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Sp=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ac(n,e,t)},Nc=function(n,e){if(b(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},kp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zs(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!bp(t))throw new Error(Qn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ci(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Os(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Rc(n,e,t){ci(n,t),Pc(n,i=>Os(i,e))}function Z(n,e,t){ci(n,t),Pc(n,i=>J(i,e)||J(e,i))}function Pc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Np(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Np(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();xt&&$("event: "+t.toString()),Ct(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp="repo_interrupt",Pp=25;class Op{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ap,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ln(),this.transactionQueueTree_=new Qs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Lp(n,e,t){if(n.stats_=Ns(n.repoInfo_),n.forceRestClient_||ch())n.server_=new On(n.repoInfo_,(i,s,r,o)=>{Io(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Co(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{x(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ye(n.repoInfo_,e,(i,s,r,o)=>{Io(n,i,s,r,o)},i=>{Co(n,i)},i=>{Mp(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=fh(n.repoInfo_,()=>new ff(n.stats_,n.server_)),n.infoData_=new cf,n.infoSyncTree_=new bo({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=an(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),er(n,"connected",!1),n.serverSyncTree_=new bo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Z(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Dp(n){const t=n.infoData_.getNode(new k(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function li(n){return fp({timestamp:Dp(n)})}function Io(n,e,t,i,s){n.dataUpdateCount++;const r=new k(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=Sn(t,l=>M(l));o=ap(n.serverSyncTree_,r,c,s)}else{const c=M(t);o=vc(n.serverSyncTree_,r,c,s)}else if(i){const c=Sn(t,l=>M(l));o=sp(n.serverSyncTree_,r,c)}else{const c=M(t);o=an(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=yt(n,r)),Z(n.eventQueue_,a,o)}function Co(n,e){er(n,"connected",e),e===!1&&Bp(n)}function Mp(n,e){V(e,(t,i)=>{er(n,t,i)})}function er(n,e,t){const i=new k("/.info/"+e),s=M(t);n.infoData_.updateSnapshot(i,s);const r=an(n.infoSyncTree_,i,s);Z(n.eventQueue_,i,r)}function tr(n){return n.nextWriteId_++}function xp(n,e,t){const i=cp(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=M(s).withIndex(e._queryParams.getIndex());os(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=an(n.serverSyncTree_,e._path,r);else{const a=Jt(n.serverSyncTree_,e);o=vc(n.serverSyncTree_,e._path,r,a)}return Z(n.eventQueue_,e._path,o),Vn(n.serverSyncTree_,e,t,null,!0),r},s=>(ln(n,"get for query "+x(e)+" failed: "+s),Promise.reject(new Error(s))))}function Fp(n,e,t,i,s){ln(n,"set",{path:e.toString(),value:t,priority:i});const r=li(n),o=M(t,i),a=qs(n.serverSyncTree_,e),c=Ic(o,a,r),l=tr(n),u=_c(n.serverSyncTree_,e,c,l,!0);ci(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const g=h==="ok";g||q("set at "+e+" failed: "+h);const m=Pe(n.serverSyncTree_,l,!g);Z(n.eventQueue_,e,m),cs(n,s,h,f)});const d=ir(n,e);yt(n,d),Z(n.eventQueue_,d,[])}function Up(n,e,t,i){ln(n,"update",{path:e.toString(),value:t});let s=!0;const r=li(n),o={};if(V(t,(a,c)=>{s=!1,o[a]=Ec(O(e,a),M(c),n.serverSyncTree_,r)}),s)$("update() called with empty data.  Don't do anything."),cs(n,i,"ok",void 0);else{const a=tr(n),c=ip(n.serverSyncTree_,e,o,a);ci(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const d=l==="ok";d||q("update at "+e+" failed: "+l);const h=Pe(n.serverSyncTree_,a,!d),f=h.length>0?yt(n,e):e;Z(n.eventQueue_,f,h),cs(n,i,l,u)}),V(t,l=>{const u=ir(n,O(e,l));yt(n,u)}),Z(n.eventQueue_,e,[])}}function Bp(n){ln(n,"onDisconnectEvents");const e=li(n),t=Ln();es(n.onDisconnect_,T(),(s,r)=>{const o=Ec(s,r,n.serverSyncTree_,e);nc(t,s,o)});let i=[];es(t,T(),(s,r)=>{i=i.concat(an(n.serverSyncTree_,s,r));const o=ir(n,s);yt(n,o)}),n.onDisconnect_=Ln(),Z(n.eventQueue_,T(),i)}function $p(n,e,t){let i;b(e._path)===".info"?i=os(n.infoSyncTree_,e,t):i=os(n.serverSyncTree_,e,t),Rc(n.eventQueue_,e._path,i)}function Vp(n,e,t){let i;b(e._path)===".info"?i=Vn(n.infoSyncTree_,e,t):i=Vn(n.serverSyncTree_,e,t),Rc(n.eventQueue_,e._path,i)}function Wp(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Rp)}function ln(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$(t,...e)}function cs(n,e,t,i){e&&Ct(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Oc(n,e,t){return qs(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function nr(n,e=n.transactionQueueTree_){if(e||ui(n,e),St(e)){const t=Dc(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Hp(n,cn(e),t)}else Tc(e)&&oi(e,t=>{nr(n,t)})}function Hp(n,e,t){const i=t.map(l=>l.currentWriteId),s=Oc(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const u=t[l];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=H(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{ln(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(Pe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();ui(n,Xs(n.transactionQueueTree_,e)),nr(n,n.transactionQueueTree_),Z(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Ct(d[h])}else{if(l==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{q("transaction at "+c.toString()+" failed: "+l);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=l}yt(n,e)}},o)}function yt(n,e){const t=Lc(n,e),i=cn(t),s=Dc(n,t);return qp(n,s,i),i}function qp(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=H(t,c.path);let u=!1,d;if(p(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,s=s.concat(Pe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Pp)u=!0,d="maxretry",s=s.concat(Pe(n.serverSyncTree_,c.currentWriteId,!0));else{const h=Oc(n,c.path,o);c.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){ai("transaction failed: Data returned ",f,c.path);let g=M(f);typeof f=="object"&&f!=null&&de(f,".priority")||(g=g.updatePriority(h.getPriority()));const w=c.currentWriteId,y=li(n),C=Ic(g,h,y);c.currentOutputSnapshotRaw=g,c.currentOutputSnapshotResolved=C,c.currentWriteId=tr(n),o.splice(o.indexOf(w),1),s=s.concat(_c(n.serverSyncTree_,c.path,C,c.currentWriteId,c.applyLocally)),s=s.concat(Pe(n.serverSyncTree_,w,!0))}else u=!0,d="nodata",s=s.concat(Pe(n.serverSyncTree_,c.currentWriteId,!0))}Z(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}ui(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Ct(i[a]);nr(n,n.transactionQueueTree_)}function Lc(n,e){let t,i=n.transactionQueueTree_;for(t=b(e);t!==null&&St(i)===void 0;)i=Xs(i,t),e=N(e),t=b(e);return i}function Dc(n,e){const t=[];return Mc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Mc(n,e,t){const i=St(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);oi(e,s=>{Mc(n,s,t)})}function ui(n,e){const t=St(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Cc(e,t.length>0?t:void 0)}oi(e,i=>{ui(n,i)})}function ir(n,e){const t=cn(Lc(n,e)),i=Xs(n.transactionQueueTree_,e);return _p(i,s=>{Li(n,s)}),Li(n,i),Sc(i,s=>{Li(n,s)}),t}function Li(n,e){const t=St(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Pe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cc(e,void 0):t.length=r+1,Z(n.eventQueue_,cn(e),s);for(let o=0;o<i.length;o++)Ct(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Gp(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):q(`Invalid query segment '${t}' in query '${n}'`)}return e}const To=function(n,e){const t=zp(n),i=t.namespace;t.domain==="firebase.com"&&be(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&be("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Zd();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ba(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new k(t.pathString)}},zp=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=jp(n.substring(u,d)));const h=Gp(n.substring(Math.min(n.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const g=e.indexOf(".");i=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+x(this.snapshot.exportVal())}}class Yp{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return I(this._path)?null:Ps(this._path)}get ref(){return new Ce(this._repo,this._path)}get _queryIdentifier(){const e=uo(this._queryParams),t=ks(e);return t==="{}"?"default":t}get _queryObject(){return uo(this._queryParams)}isEqual(e){if(e=P(e),!(e instanceof sr))return!1;const t=this._repo===e._repo,i=Os(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+xh(this._path)}}class Ce extends sr{constructor(e,t){super(e,t,new xs,!1)}get parent(){const e=Ka(this._path);return e===null?null:new Ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Qt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new k(e),i=ls(this.ref,e);return new Qt(this._node.getChild(t),i,L)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Qt(s,ls(this.ref,i),L)))}hasChild(e){const t=new k(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function R(n,e){return n=P(n),n._checkNotDeleted("ref"),e!==void 0?ls(n._root,e):n._root}function ls(n,e){return n=P(n),b(n._path)===null?Sp("child","path",e):Ac("child","path",e),new Ce(n._repo,O(n._path,e))}function Jp(n){return Nc("remove",n._path),ee(n,null)}function ee(n,e){n=P(n),Nc("set",n._path),Ip("set",e,n._path);const t=new nn;return Fp(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function rr(n,e){Tp("update",e,n._path);const t=new nn;return Up(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function K(n){n=P(n);const e=new xc(()=>{}),t=new di(e);return xp(n._repo,n,t).then(i=>new Qt(i,new Ce(n._repo,n._path),n._queryParams.getIndex()))}class di{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new Kp("value",this,new Qt(e.snapshotNode,new Ce(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yp(this,e,t):null}matches(e){return e instanceof di?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Qp(n,e,t,i,s){const r=new xc(t,void 0),o=new di(r);return $p(n._repo,n,o),()=>Vp(n._repo,n,o)}function Fc(n,e,t,i){return Qp(n,"value",e)}Yf(Ce);ep(Ce);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="FIREBASE_DATABASE_EMULATOR_HOST",us={};let Zp=!1;function eg(n,e,t,i){n.repoInfo_=new Ba(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function tg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||be("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=To(r,s),a=o.repoInfo,c;typeof process<"u"&&Gr&&(c=Gr[Xp]),c?(r=`http://${c}?ns=${a.namespace}`,o=To(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new uh(n.name,n.options,e);kp("Invalid Firebase Database URL",o),I(o.path)||be("Database URL must point to the root of a Firebase Database (not including a child path).");const u=ig(a,n,l,new lh(n.name,t));return new sg(u,n)}function ng(n,e){const t=us[e];(!t||t[n.key]!==n)&&be(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Wp(n),delete t[n.key]}function ig(n,e,t,i){let s=us[e.name];s||(s={},us[e.name]=s);let r=s[n.toURLString()];return r&&be("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Op(n,Zp,t,i),s[n.toURLString()]=r,r}class sg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Lp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ce(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ng(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&be("Cannot call "+e+" on a deleted database.")}}function lt(n=ei(),e){const t=Ze(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=fa("database");i&&rg(t,...i)}return t}function rg(n,e,t,i={}){n=P(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&be("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&be('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new vn(vn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Tu(i.mockUserToken,n.app.options.projectId);r=new vn(o)}eg(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function og(n){zd(It),oe(new X("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return tg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),z(zr,Kr,n),z(zr,Kr,"esm2017")}ye.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ye.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};og();function yn(){return window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0||document.referrer.startsWith("android-app://")}function Uc(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}const mn="protexhome_pwa_installed_at",ag=30*24*60*60*1e3;class cg{constructor(){this.deferredPrompt=null,this.isOnline=navigator.onLine,this.init()}init(){this.setupOnlineStatus(),this.setupInstallPrompt(),this.checkPWAStatus()}setupOnlineStatus(){window.addEventListener("online",()=>{this.isOnline=!0,document.body.classList.remove("offline"),this.showToast("Conexión restaurada","success")}),window.addEventListener("offline",()=>{this.isOnline=!1,document.body.classList.add("offline"),this.showToast("Sin conexión a internet","error")}),navigator.onLine||document.body.classList.add("offline")}setupInstallPrompt(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e,localStorage.removeItem(mn),this.showInstallButton()}),setTimeout(()=>this.showInstallButton(),1500),window.addEventListener("appinstalled",()=>{var e;console.log("PWA instalada exitosamente"),localStorage.setItem(mn,String(Date.now())),this.deferredPrompt=null,this.hideInstallButton(),(e=document.getElementById("ios-install-banner"))==null||e.remove(),typeof gtag<"u"&&gtag("event","pwa_install",{event_category:"PWA",event_label:"Instalación completada"})})}showInstallButton(){if(yn()||this.wasRecentlyInstalled()||document.getElementById("pwa-install-btn"))return;const e=document.createElement("button");e.id="pwa-install-btn",e.className="pwa-install-btn",e.type="button",e.setAttribute("aria-label","Instalar ProtexHome"),e.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">download</span>
      <span>Instalar ProtexHome</span>
    `,e.addEventListener("click",async()=>{await this.installPWA(),!this.deferredPrompt&&document.body.contains(e)&&(e.querySelector("span:last-child").textContent="Ver cómo instalar")}),document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),100)}hideInstallButton(){const e=document.getElementById("pwa-install-btn");e&&(e.classList.remove("show"),setTimeout(()=>e.remove(),300))}async installPWA(){if(!this.deferredPrompt){this.showInstallInstructions();return}const e=this.deferredPrompt;this.deferredPrompt=null;try{await e.prompt();const{outcome:t}=await e.userChoice;console.log(`Usuario: ${t==="accepted"?"Aceptó":"Rechazó"} la instalación`),t==="dismissed"&&this.showToast("Puedes instalar ProtexHome más tarde desde el menú del navegador.","info")}catch(t){console.error("No se pudo iniciar la instalación de ProtexHome:",t),this.showToast("No se pudo iniciar la instalación. Intenta desde el menú del navegador.","error")}finally{yn()&&this.hideInstallButton()}}showInstallInstructions(){const e=Uc(),t=/Android/.test(navigator.userAgent);let i="";e?i='Toca el botón Compartir y luego "Agregar a inicio"':t?i='Toca el menú (⋮) y luego "Instalar aplicación"':i="Usa el menú de tu navegador para instalar la app",this.showToast(i,"info")}checkPWAStatus(){const e=window.matchMedia("(display-mode: standalone)"),t=()=>{var s;const i=yn();document.body.classList.toggle("pwa-standalone",i),i&&(this.hideInstallButton(),(s=document.getElementById("ios-install-banner"))==null||s.remove())};t(),typeof e.addEventListener=="function"?e.addEventListener("change",t):e.addListener(t)}wasRecentlyInstalled(){const e=Number(localStorage.getItem(mn));return!Number.isFinite(e)||e<=0?!1:Date.now()-e>ag?(localStorage.removeItem(mn),!1):!0}showToast(e,t="info"){const i=document.createElement("div");i.className=`toast toast-${t}`;const s={success:"check_circle",error:"error",info:"info"};i.innerHTML=`
      <span class="material-symbols-outlined">${s[t]||"info"}</span>
      <span>${e}</span>
    `,document.body.appendChild(i),setTimeout(()=>i.classList.add("show"),10),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),300)},3e3)}}const lg=Uc(),ug=yn();var aa;if(lg&&!ug){const n=document.createElement("div");n.id="ios-install-banner",n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.innerHTML=`
    <span class="material-symbols-outlined ios-install-icon" aria-hidden="true">ios_share</span>
    <div class="ios-install-copy">
      <strong>Instalar ProtexHome</strong>
      <span>Toca <strong>Compartir</strong> y luego <strong>Agregar a pantalla de inicio</strong>.</span>
    </div>
    <button class="ios-install-dismiss" type="button" aria-label="Cerrar instrucciones de instalación">
      <span aria-hidden="true">×</span>
      </button>
  `,document.body.appendChild(n),(aa=n.querySelector(".ios-install-dismiss"))==null||aa.addEventListener("click",()=>n.remove())}var dg="firebase",hg="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */z(dg,hg,"app");function or(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function Bc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fg=Bc,$c=new Xe("auth","Firebase",Bc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn=new Cs("@firebase/auth");function pg(n,...e){Wn.logLevel<=S.WARN&&Wn.warn(`Auth (${It}): ${n}`,...e)}function wn(n,...e){Wn.logLevel<=S.ERROR&&Wn.error(`Auth (${It}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(n,...e){throw cr(n,...e)}function re(n,...e){return cr(n,...e)}function ar(n,e,t){const i=Object.assign(Object.assign({},fg()),{[e]:t});return new Xe("auth","Firebase",i).create(e,{appName:n.name})}function ce(n){return ar(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Vc(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&te(n,"argument-error"),ar(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function cr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return $c.create(n,...e)}function _(n,e,...t){if(!n)throw cr(e,...t)}function ge(n){const e="INTERNAL ASSERTION FAILED: "+n;throw wn(e),new Error(e)}function Ee(n,e){n||ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function gg(){return So()==="http:"||So()==="https:"}function So(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gg()||ku()||"connection"in navigator)?navigator.onLine:!0}function _g(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ee(t>e,"Short delay should be less than long delay!"),this.isMobile=Is()||ma()}get(){return mg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(n,e){Ee(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=new un(3e4,6e4);function Te(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Se(n,e,t,i,s={}){return Hc(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Et(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return Su()||(l.referrerPolicy="no-referrer"),Wc.fetch()(qc(n,n.config.apiHost,t,a),l)})}async function Hc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},vg),e);try{const s=new bg(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _n(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _n(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _n(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw _n(n,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ar(n,u,l);te(n,u)}}catch(s){if(s instanceof ue)throw s;te(n,"network-request-failed",{message:String(s)})}}async function dn(n,e,t,i,s={}){const r=await Se(n,e,t,i,s);return"mfaPendingCredential"in r&&te(n,"multi-factor-auth-required",{_serverResponse:r}),r}function qc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?lr(n.config,s):`${n.config.apiScheme}://${s}`}function wg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class bg{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(re(this.auth,"network-request-failed")),yg.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _n(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=re(n,e,i);return s.customData._tokenResponse=t,s}function ko(n){return n!==void 0&&n.enterprise!==void 0}class Eg{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return wg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ig(n,e){return Se(n,"GET","/v2/recaptchaConfig",Te(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(n,e){return Se(n,"POST","/v1/accounts:delete",e)}async function jc(n,e){return Se(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Tg(n,e=!1){const t=P(n),i=await t.getIdToken(e),s=ur(i);_(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Vt(Di(s.auth_time)),issuedAtTime:Vt(Di(s.iat)),expirationTime:Vt(Di(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Di(n){return Number(n)*1e3}function ur(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return wn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tn(t);return s?JSON.parse(s):(wn("Failed to decode base64 JWT payload"),null)}catch(s){return wn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ao(n){const e=ur(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ue&&Sg(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Sg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vt(this.lastLoginAt),this.creationTime=Vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Xt(n,jc(t,{idToken:i}));_(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Gc(r.providerUserInfo):[],a=Ng(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new hs(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Ag(n){const e=P(n);await Hn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ng(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Gc(n){return n.map(e=>{var{providerId:t}=e,i=or(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rg(n,e){const t=await Hc(n,{},async()=>{const i=Et({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=qc(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wc.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Pg(n,e){return Se(n,"POST","/v2/accounts:revokeToken",Te(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ao(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(e.length!==0,"internal-error");const t=Ao(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Rg(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ut;return i&&(_(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(_(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(_(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ut,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class me{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=or(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new hs(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Tg(this,e)}reload(){return Ag(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Hn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Y(this.auth.app))return Promise.reject(ce(this.auth));const e=await this.getIdToken();return await Xt(this,Cg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,m=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,y=(l=t.createdAt)!==null&&l!==void 0?l:void 0,C=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:D,emailVerified:F,isAnonymous:it,providerData:yi,stsTokenManager:Or}=t;_(D&&Or,e,"internal-error");const cu=ut.fromJSON(this.name,Or);_(typeof D=="string",e,"internal-error"),ke(d,e.name),ke(h,e.name),_(typeof F=="boolean",e,"internal-error"),_(typeof it=="boolean",e,"internal-error"),ke(f,e.name),ke(g,e.name),ke(m,e.name),ke(w,e.name),ke(y,e.name),ke(C,e.name);const wi=new me({uid:D,auth:e,email:h,emailVerified:F,displayName:d,isAnonymous:it,photoURL:g,phoneNumber:f,tenantId:m,stsTokenManager:cu,createdAt:y,lastLoginAt:C});return yi&&Array.isArray(yi)&&(wi.providerData=yi.map(lu=>Object.assign({},lu))),w&&(wi._redirectEventId=w),wi}static async _fromIdTokenResponse(e,t,i=!1){const s=new ut;s.updateFromServerResponse(t);const r=new me({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Hn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];_(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Gc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new ut;a.updateFromIdToken(i);const c=new me({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new hs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new Map;function _e(n){Ee(n instanceof Function,"Expected a class definition");let e=No.get(n);return e?(Ee(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,No.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zc.type="NONE";const Ro=zc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(n,e,t){return`firebase:${n}:${e}:${t}`}class dt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=bn(this.userKey,s.apiKey,r),this.fullPersistenceKey=bn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?me._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new dt(_e(Ro),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||_e(Ro);const o=bn(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const d=me._fromJSON(e,u);l!==r&&(a=d),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new dt(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new dt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zc(e))return"Blackberry";if(el(e))return"Webos";if(Yc(e))return"Safari";if((e.includes("chrome/")||Jc(e))&&!e.includes("edge/"))return"Chrome";if(Xc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Kc(n=j()){return/firefox\//i.test(n)}function Yc(n=j()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jc(n=j()){return/crios\//i.test(n)}function Qc(n=j()){return/iemobile/i.test(n)}function Xc(n=j()){return/android/i.test(n)}function Zc(n=j()){return/blackberry/i.test(n)}function el(n=j()){return/webos/i.test(n)}function dr(n=j()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Og(n=j()){var e;return dr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Lg(){return Au()&&document.documentMode===10}function tl(n=j()){return dr(n)||Xc(n)||el(n)||Zc(n)||/windows phone/i.test(n)||Qc(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n,e=[]){let t;switch(n){case"Browser":t=Po(j());break;case"Worker":t=`${Po(j())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${It}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mg(n,e={}){return Se(n,"GET","/v2/passwordPolicy",Te(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=6;class Fg{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:xg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oo(this),this.idTokenSubscription=new Oo(this),this.beforeStateQueue=new Dg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$c,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_e(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await dt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await jc(this,{idToken:e}),i=await me._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Y(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_g()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Y(this.app))return Promise.reject(ce(this));const t=e?P(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Y(this.app)?Promise.reject(ce(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Y(this.app)?Promise.reject(ce(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_e(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mg(this),t=new Fg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Xe("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Pg(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_e(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await dt.create(this,[_e(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&pg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ae(n){return P(n)}class Oo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fu(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Bg(n){hi=n}function il(n){return hi.loadJS(n)}function $g(){return hi.recaptchaEnterpriseScript}function Vg(){return hi.gapiScript}function Wg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Hg="recaptcha-enterprise",qg="NO_RECAPTCHA";class jg{constructor(e){this.type=Hg,this.auth=ae(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Ig(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Eg(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;ko(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(qg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&ko(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=$g();c.length!==0&&(c+=a),il(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Lo(n,e,t,i=!1){const s=new jg(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qn(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Lo(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Lo(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n,e){const t=Ze(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(kn(r,e??{}))return s;te(s,"already-initialized")}return t.initialize({options:e})}function zg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(_e);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Kg(n,e,t){const i=ae(n);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=sl(e),{host:o,port:a}=Yg(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Jg()}function sl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Yg(n){const e=sl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Do(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Do(o)}}}function Do(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,t){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}async function Qg(n,e){return Se(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e){return dn(n,"POST","/v1/accounts:signInWithPassword",Te(n,e))}async function rl(n,e){return Se(n,"POST","/v1/accounts:sendOobCode",Te(n,e))}async function Zg(n,e){return rl(n,e)}async function em(n,e){return rl(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(n,e){return dn(n,"POST","/v1/accounts:signInWithEmailLink",Te(n,e))}async function nm(n,e){return dn(n,"POST","/v1/accounts:signInWithEmailLink",Te(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends hr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Zt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Zt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qn(e,t,"signInWithPassword",Xg);case"emailLink":return tm(e,{email:this._email,oobCode:this._password});default:te(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qn(e,i,"signUpPassword",Qg);case"emailLink":return nm(e,{idToken:t,email:this._email,oobCode:this._password});default:te(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(n,e){return dn(n,"POST","/v1/accounts:signInWithIdp",Te(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="http://localhost";class ze extends hr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):te("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=or(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ze(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return ht(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,ht(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ht(e,t)}buildRequest(){const e={requestUri:im,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Et(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function rm(n){const e=Dt(Mt(n)).link,t=e?Dt(Mt(e)).deep_link_id:null,i=Dt(Mt(n)).deep_link_id;return(i?Dt(Mt(i)).link:null)||i||t||e||n}class fr{constructor(e){var t,i,s,r,o,a;const c=Dt(Mt(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,d=sm((s=c.mode)!==null&&s!==void 0?s:null);_(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=rm(e);try{return new fr(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.providerId=kt.PROVIDER_ID}static credential(e,t){return Zt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=fr.parseLink(t);return _(i,"argument-error"),Zt._fromEmailAndCode(e,i.code,i.tenantId)}}kt.PROVIDER_ID="password";kt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends fi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends hn{constructor(){super("facebook.com")}static credential(e){return ze._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ae.credential(e.oauthAccessToken)}catch{return null}}}Ae.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ae.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends hn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ze._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fe.credentialFromTaggedObject(e)}static credentialFromError(e){return fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return fe.credential(t,i)}catch{return null}}}fe.GOOGLE_SIGN_IN_METHOD="google.com";fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends hn{constructor(){super("github.com")}static credential(e){return ze._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.GITHUB_SIGN_IN_METHOD="github.com";Ne.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends hn{constructor(){super("twitter.com")}static credential(e,t){return ze._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Re.credential(t,i)}catch{return null}}}Re.TWITTER_SIGN_IN_METHOD="twitter.com";Re.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(n,e){return dn(n,"POST","/v1/accounts:signUp",Te(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await me._fromIdTokenResponse(e,i,s),o=Mo(i);return new Ke({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Mo(i);return new Ke({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Mo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends ue{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,jn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new jn(e,t,i,s)}}function ol(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?jn._fromErrorAndOperation(n,r,e,i):r})}async function am(n,e,t=!1){const i=await Xt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ke._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cm(n,e,t=!1){const{auth:i}=n;if(Y(i.app))return Promise.reject(ce(i));const s="reauthenticate";try{const r=await Xt(n,ol(i,s,e,n),t);_(r.idToken,i,"internal-error");const o=ur(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(n.uid===a,i,"user-mismatch"),Ke._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&te(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function al(n,e,t=!1){if(Y(n.app))return Promise.reject(ce(n));const i="signIn",s=await ol(n,i,e),r=await Ke._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function lm(n,e){return al(ae(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(n,e,t){var i;_(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),_(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(_(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(_(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(n){const e=ae(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function um(n,e,t){const i=ae(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&cl(i,s,t),await qn(i,s,"getOobCode",em)}async function dm(n,e,t){if(Y(n.app))return Promise.reject(ce(n));const i=ae(n),o=await qn(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",om).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ll(n),c}),a=await Ke._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function hm(n,e,t){return Y(n.app)?Promise.reject(ce(n)):lm(P(n),kt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ll(n),i})}async function ul(n,e){const t=P(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&cl(t.auth,s,e);const{email:r}=await Zg(t.auth,s);r!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(n,e){return P(n).setPersistence(e)}function fm(n,e,t,i){return P(n).onIdTokenChanged(e,t,i)}function pm(n,e,t){return P(n).beforeAuthStateChanged(e,t)}function gm(n,e,t,i){return P(n).onAuthStateChanged(e,t,i)}function hl(n){return P(n).signOut()}async function mm(n){return P(n).delete()}const Gn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Gn,"1"),this.storage.removeItem(Gn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m=1e3,vm=10;class pl extends fl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Lg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,vm):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},_m)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pl.type="LOCAL";const pr=pl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl extends fl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gl.type="SESSION";const gr=gl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ym(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new pi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await ym(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=mr("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return window}function bm(n){le().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){return typeof le().WorkerGlobalScope<"u"&&typeof le().importScripts=="function"}async function Em(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Im(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cm(){return ml()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="firebaseLocalStorageDb",Tm=1,zn="firebaseLocalStorage",vl="fbase_key";class fn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gi(n,e){return n.transaction([zn],e?"readwrite":"readonly").objectStore(zn)}function Sm(){const n=indexedDB.deleteDatabase(_l);return new fn(n).toPromise()}function fs(){const n=indexedDB.open(_l,Tm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(zn,{keyPath:vl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(zn)?e(i):(i.close(),await Sm(),e(await fs()))})})}async function xo(n,e,t){const i=gi(n,!0).put({[vl]:e,value:t});return new fn(i).toPromise()}async function km(n,e){const t=gi(n,!1).get(e),i=await new fn(t).toPromise();return i===void 0?null:i.value}function Fo(n,e){const t=gi(n,!0).delete(e);return new fn(t).toPromise()}const Am=800,Nm=3;class yl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Nm)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ml()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(Cm()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Em(),!this.activeServiceWorker)return;this.sender=new wm(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Im()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fs();return await xo(e,Gn,"1"),await Fo(e,Gn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>xo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>km(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=gi(s,!1).getAll();return new fn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Am)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}yl.type="LOCAL";const Rm=yl;new un(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(n,e){return e?_e(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends hr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ht(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ht(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ht(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pm(n){return al(n.auth,new vr(n),n.bypassAuthState)}function Om(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),cm(t,new vr(n),n.bypassAuthState)}async function Lm(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),am(t,new vr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pm;case"linkViaPopup":case"linkViaRedirect":return Lm;case"reauthViaPopup":case"reauthViaRedirect":return Om;default:te(this.auth,"internal-error")}}resolve(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ee(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm=new un(2e3,1e4);async function Mm(n,e,t){if(Y(n.app))return Promise.reject(re(n,"operation-not-supported-in-this-environment"));const i=ae(n);Vc(n,e,fi);const s=_r(i,t);return new Ve(i,"signInViaPopup",e,s).executeNotNull()}class Ve extends wl{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,Ve.currentPopupAction&&Ve.currentPopupAction.cancel(),Ve.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){Ee(this.filter.length===1,"Popup operations only handle one event");const e=mr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(re(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ve.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Dm.get())};e()}}Ve.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm="pendingRedirect",En=new Map;class Fm extends wl{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=En.get(this.auth._key());if(!e){try{const i=await Um(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}En.set(this.auth._key(),e)}return this.bypassAuthState||En.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Um(n,e){const t=El(e),i=bl(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}async function Bm(n,e){return bl(n)._set(El(e),"true")}function $m(n,e){En.set(n._key(),e)}function bl(n){return _e(n._redirectPersistence)}function El(n){return bn(xm,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n,e,t){return Wm(n,e,t)}async function Wm(n,e,t){if(Y(n.app))return Promise.reject(ce(n));const i=ae(n);Vc(n,e,fi),await i._initializationPromise;const s=_r(i,t);return await Bm(s,i),s._openRedirect(i,e,"signInViaRedirect")}async function Hm(n,e){return await ae(n)._initializationPromise,Il(n,e,!1)}async function Il(n,e,t=!1){if(Y(n.app))return Promise.reject(ce(n));const i=ae(n),s=_r(i,e),o=await new Fm(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=10*60*1e3;class jm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Gm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Cl(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(re(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uo(e))}saveEventToCache(e){this.cachedEventUids.add(Uo(e)),this.lastProcessedEventTime=Date.now()}}function Uo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Gm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(n,e={}){return Se(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ym=/^https?/;async function Jm(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zm(n);for(const t of e)try{if(Qm(t))return}catch{}te(n,"unauthorized-domain")}function Qm(n){const e=ds(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Ym.test(t))return!1;if(Km.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new un(3e4,6e4);function Bo(){const n=le().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Zm(n){return new Promise((e,t)=>{var i,s,r;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),t(re(n,"network-request-failed"))},timeout:Xm.get()})}if(!((s=(i=le().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=le().gapi)===null||r===void 0)&&r.load)o();else{const a=Wg("iframefcb");return le()[a]=()=>{gapi.load?o():t(re(n,"network-request-failed"))},il(`${Vg()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw In=null,e})}let In=null;function e_(n){return In=In||Zm(n),In}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=new un(5e3,15e3),n_="__/auth/iframe",i_="emulator/auth/iframe",s_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},r_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o_(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?lr(e,i_):`https://${n.config.authDomain}/${n_}`,i={apiKey:e.apiKey,appName:n.name,v:It},s=r_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Et(i).slice(1)}`}async function a_(n){const e=await e_(n),t=le().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:o_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=re(n,"network-request-failed"),a=le().setTimeout(()=>{r(o)},t_.get());function c(){le().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},l_=500,u_=600,d_="_blank",h_="http://localhost";class $o{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f_(n,e,t,i=l_,s=u_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},c_),{width:i.toString(),height:s.toString(),top:r,left:o}),l=j().toLowerCase();t&&(a=Jc(l)?d_:t),Kc(l)&&(e=e||h_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,g])=>`${h}${f}=${g},`,"");if(Og(l)&&a!=="_self")return p_(e||"",a),new $o(null);const d=window.open(e||"",a,u);_(d,n,"popup-blocked");try{d.focus()}catch{}return new $o(d)}function p_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_="__/auth/handler",m_="emulator/auth/handler",__=encodeURIComponent("fac");async function Vo(n,e,t,i,s,r){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:It,eventId:s};if(e instanceof fi){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ji(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof hn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${__}=${encodeURIComponent(c)}`:"";return`${v_(n)}?${Et(a).slice(1)}${l}`}function v_({config:n}){return n.emulator?lr(n,m_):`https://${n.authDomain}/${g_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi="webStorageSupport";class y_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gr,this._completeRedirectFn=Il,this._overrideRedirectResult=$m}async _openPopup(e,t,i,s){var r;Ee((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Vo(e,t,i,ds(),s);return f_(e,o,mr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Vo(e,t,i,ds(),s);return bm(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ee(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await a_(e),i=new jm(e);return t.register("authEvent",s=>(_(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mi,{type:Mi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Mi];o!==void 0&&t(!!o),te(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Jm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return tl()||Yc()||dr()}}const w_=y_;var Wo="@firebase/auth",Ho="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function I_(n){oe(new X("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nl(n)},l=new Ug(i,s,r,c);return zg(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),oe(new X("auth-internal",e=>{const t=ae(e.getProvider("auth").getImmediate());return(i=>new b_(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),z(Wo,Ho,E_(n)),z(Wo,Ho,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=5*60,T_=ga("authIdTokenMaxAge")||C_;let qo=null;const S_=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>T_)return;const s=t==null?void 0:t.token;qo!==s&&(qo=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tl(n=ei()){const e=Ze(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gg(n,{popupRedirectResolver:w_,persistence:[Rm,pr,gr]}),i=ga("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=S_(r.toString());pm(t,o,()=>o(t.currentUser)),fm(t,a=>o(a))}}const s=ha("auth");return s&&Kg(t,`http://${s}`),t}function k_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Bg({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=re("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",k_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});I_("Browser");const A_={apiKey:"AIzaSyDFMhDmYMnrO5hp7vRyfM0YehoSGecgfEs",authDomain:"iotalarma.firebaseapp.com",databaseURL:"https://iotalarma-default-rtdb.firebaseio.com",projectId:"iotalarma",storageBucket:"iotalarma.appspot.com",messagingSenderId:"747127575803",appId:"1:747127575803:web:24ba7e8dd5e9cc67eb4c5e"},nt=Ea(A_),Q=Tl(nt),At=lt(nt),ps=new fe;ps.setCustomParameters({prompt:"select_account"});async function N_(n,e,t){let i=!0;try{const r=(await dm(Q,n,e)).user;try{const o=R(At,"US/"+r.uid);await ee(o,{N:(t.name||"")+" "+(t.lastName||""),E:n,M:{}}),console.log("✅ Datos guardados en Realtime Database")}catch(o){console.warn("⚠️ No se pudieron guardar datos adicionales:",o.message)}try{await ul(r,{url:new URL("/ProtexHome/",window.location.origin).href}),console.log("Correo de verificación enviado.")}catch(o){console.warn("⚠️ No se pudo enviar email de verificación:",o.message),i=!1}return{success:!0,user:r,needsVerification:!0,verificationEmailSent:i,message:"Registro exitoso. Por favor verifica tu correo electrónico para continuar."}}catch(s){console.error("❌ Error en registro:",s);let r="Error al registrarse";switch(s.code){case"auth/email-already-in-use":r="Este correo electrónico ya está registrado.";break;case"auth/invalid-email":r="El correo electrónico no es válido.";break;case"auth/weak-password":r="La contraseña debe tener al menos 6 caracteres.";break;case"auth/network-request-failed":r="No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.";break;default:r="No se pudo crear la cuenta. Inténtalo de nuevo."}return{success:!1,error:r}}}async function R_(n,e,t=!1){try{await dl(Q,t?pr:gr);const s=(await hm(Q,n,e)).user;if(!s.emailVerified)return console.warn("⚠️ Email no verificado"),{success:!1,needsVerification:!0,error:"Debes verificar tu correo electrónico antes de iniciar sesión.",email:n};try{const r=R(At,"US/"+s.uid);await rr(r,{lastLogin:new Date().toISOString(),emailVerified:!0})}catch{console.warn("⚠️ No se pudo actualizar último login")}return{success:!0,user:s}}catch(i){console.error("❌ Error en login:",i);let s="Error al iniciar sesión";switch(i.code){case"auth/user-not-found":s="No se encontró una cuenta con este correo.";break;case"auth/wrong-password":s="Contraseña incorrecta.";break;case"auth/invalid-credential":s="Credenciales inválidas.";break;case"auth/too-many-requests":s="Demasiados intentos. Intenta más tarde.";break;case"auth/network-request-failed":s="No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.";break;case"auth/user-disabled":s="Esta cuenta está deshabilitada. Contacta con soporte.";break;default:s="No se pudo iniciar sesión. Verifica tus datos e inténtalo de nuevo."}return{success:!1,error:s}}}async function P_(){try{const n=Q.currentUser;if(!n)return{success:!1,error:"No hay usuario activo. Inicia sesión nuevamente."};if(n.emailVerified)return{success:!1,error:"Tu correo ya está verificado."};const e={url:new URL("/ProtexHome/",window.location.origin).href};return await ul(n,e),console.log("Correo de verificación reenviado."),{success:!0,message:"Correo de verificación reenviado. Revisa tu bandeja de entrada."}}catch(n){return console.error("Error al reenviar verificación:",n),{success:!1,error:"Error al reenviar el correo de verificación."}}}async function O_(){try{const n=Q.currentUser;if(!n)return{success:!1,error:"No hay usuario activo."};if(await n.reload(),n.emailVerified){try{const e=R(At,"US/"+n.uid);await rr(e,{emailVerified:!0,updatedAt:new Date().toISOString()})}catch{console.warn("⚠️ No se pudo actualizar estado de verificación")}return{success:!0,verified:!0,message:"¡Correo verificado exitosamente!"}}return{success:!0,verified:!1,message:"El correo aún no ha sido verificado."}}catch(n){return console.error("Error al verificar email:",n),{success:!1,error:"Error al verificar el estado del correo."}}}function L_(){const n=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0,e=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&/Macintosh/i.test(navigator.userAgent);return n||e}async function Sl(n){try{const e=R(At,"US/"+n.uid);if(!(await K(e)).exists()){await ee(e,{N:n.displayName||"",E:n.email||"",M:{}});return}await rr(e,{lastLogin:new Date().toISOString(),photoURL:n.photoURL||"",emailVerified:!0})}catch(e){console.error("No se pudo actualizar el perfil de Google en Realtime Database:",e)}}function kl(n){switch(n==null?void 0:n.code){case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":return"Se canceló el inicio de sesión con Google. Inténtalo de nuevo.";case"auth/popup-blocked":return"El navegador bloqueó la ventana de Google. Permite ventanas emergentes o inténtalo desde otro navegador.";case"auth/unauthorized-domain":return"Este dominio no está autorizado para iniciar sesión. Revisa los dominios permitidos en Firebase.";case"auth/network-request-failed":return"No se pudo conectar con Google. Revisa tu conexión e inténtalo de nuevo.";case"auth/operation-not-allowed":return"El acceso con Google no está habilitado en Firebase Authentication.";case"auth/operation-not-supported-in-this-environment":return"Este navegador no admite el acceso con Google en esta ventana. Abre ProtexHome en el navegador del sistema e inténtalo de nuevo.";case"auth/account-exists-with-different-credential":return"Ya existe una cuenta con este correo. Inicia sesión usando el método que utilizaste al registrarte.";default:return"No se pudo iniciar sesión con Google. Inténtalo de nuevo."}}async function D_(){try{const n=await Hm(Q);return n?(Sl(n.user),{success:!0,redirected:!0}):{success:!0,redirected:!1}}catch(n){return console.error("No se pudo completar el retorno de Google:",n),{success:!1,redirected:!1,error:kl(n)}}}async function M_(){try{if(await dl(Q,pr),L_())return await Vm(Q,ps),{success:!0,redirecting:!0};const n=await Mm(Q,ps);return Sl(n.user),{success:!0,user:n.user}}catch(n){return console.error("Error al iniciar sesión con Google:",n),{success:!1,error:kl(n)}}}async function gs(){try{return await hl(Q),console.log("👋 Sesión cerrada"),{success:!0}}catch(n){return console.error("Error al cerrar sesión:",n),{success:!1,error:"Error al cerrar sesión"}}}async function x_(n){try{const e={url:new URL("/ProtexHome/",window.location.origin).href};return await um(Q,n,e),console.log("Correo de recuperación enviado."),{success:!0,message:"Revisa tu correo para restablecer la contraseña."}}catch(e){console.error("Error en recuperación:",e);let t="Error al enviar el correo de recuperación.";return e.code==="auth/user-not-found"?t="No se encontró una cuenta con este correo.":e.code==="auth/invalid-email"&&(t="El correo electrónico no es válido."),{success:!1,error:t}}}function F_(n){return gm(Q,e=>{if(!e){n(null);return}const t={...e,name:e.displayName||e.email||""};n(t),K(R(At,"US/"+e.uid)).then(i=>{if(!i.exists())return;const s=i.val();Object.assign(t,s,{name:s.N||t.name})}).catch(i=>{console.error("No se pudo cargar el perfil del usuario:",i)})})}async function U_(n){const e=Tl(),t=e.currentUser;try{const i=R(At,"US/"+n);return await Jp(i),t&&await mm(t),{success:!0}}catch(i){return console.error("Error al eliminar cuenta:",i),i.code==="auth/requires-recent-login"?(await hl(e),{success:!1,error:"Inicia sesión nuevamente para eliminar la cuenta."}):{success:!1,error:i.message}}}function xi(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)}function jo(n){return n.length>=6}function Go(n){return n.length>=2}class zo{constructor(){this.currentView="login"}showView(e){var t;document.querySelectorAll(".auth-view").forEach(i=>i.classList.remove("active")),(t=document.getElementById(`${e}-view`))==null||t.classList.add("active"),this.currentView=e,document.querySelectorAll(".auth-error").forEach(i=>{i.classList.remove("show"),i.textContent=""})}async handleLogin(e){e.preventDefault();const t=document.getElementById("login-email").value.trim(),i=document.getElementById("login-password").value,s=document.getElementById("remember-me").checked,r=document.getElementById("login-error"),o=document.getElementById("login-submit");if(!xi(t)){this.showInputError("login-email","Ingresa un correo válido");return}if(!jo(i)){this.showInputError("login-password","Mínimo 6 caracteres");return}this.setButtonLoading(o,!0),r.classList.remove("show");try{const a=await R_(t,i,s);a.success?console.log("Inicio de sesión completado."):(a.needsVerification,r.textContent=a.error,r.classList.add("show"))}catch(a){console.error("No se pudo completar el inicio de sesión:",a),r.textContent="No se pudo iniciar sesión. Revisa tu conexión e inténtalo de nuevo.",r.classList.add("show")}finally{this.setButtonLoading(o,!1)}}async handleRegister(e){e.preventDefault();const t=document.getElementById("register-name").value.trim(),i=document.getElementById("register-lastname").value.trim(),s=document.getElementById("register-email").value.trim(),r=document.getElementById("register-password").value,o=document.getElementById("register-error"),a=document.getElementById("register-submit");let c=!1;if(Go(t)||(this.showInputError("register-name","Ingresa tu nombre"),c=!0),Go(i)||(this.showInputError("register-lastname","Ingresa tu apellido"),c=!0),xi(s)||(this.showInputError("register-email","Ingresa un correo válido"),c=!0),jo(r)||(this.showInputError("register-password","Mínimo 6 caracteres"),c=!0),!c){this.setButtonLoading(a,!0),o.classList.remove("show");try{const l=await N_(s,r,{name:t,lastName:i});if(l.success){if(console.log("Registro completado; se requiere verificar el correo."),!l.verificationEmailSent){const u=document.getElementById("verify-message");u&&(u.textContent="La cuenta se creó, pero no se pudo enviar el correo. Usa “Reenviar correo” para intentarlo otra vez.")}}else o.textContent=l.error,o.classList.add("show")}catch(l){console.error("No se pudo completar el registro:",l),o.textContent="No se pudo crear la cuenta. Revisa tu conexión e inténtalo de nuevo.",o.classList.add("show")}finally{this.setButtonLoading(a,!1)}}}async handleGoogleLogin(){const e=document.getElementById(this.currentView==="register"?"register-error":"login-error"),t=[document.getElementById("google-login-btn"),document.getElementById("google-register-btn")].filter(Boolean).map(i=>{var s;return{button:i,label:((s=i.querySelector("span:last-child"))==null?void 0:s.textContent)||"Continuar con Google"}});t.forEach(({button:i})=>{i.disabled=!0,i.setAttribute("aria-busy","true");const s=i.querySelector("span:last-child");s&&(s.textContent="Conectando con Google…")}),e&&e.classList.remove("show");try{const i=await M_();!i.success&&e&&(e.textContent=i.error,e.classList.add("show"))}catch(i){console.error("No se pudo completar el acceso con Google:",i),e&&(e.textContent="No se pudo iniciar sesión con Google. Inténtalo de nuevo.",e.classList.add("show"))}finally{t.forEach(({button:i,label:s})=>{i.disabled=!1,i.removeAttribute("aria-busy");const r=i.querySelector("span:last-child");r&&(r.textContent=s)})}}async handleForgotPassword(e){e.preventDefault();const t=document.getElementById("forgot-email").value.trim(),i=document.getElementById("forgot-error"),s=document.getElementById("forgot-success"),r=document.getElementById("forgot-submit");if(!xi(t)){this.showInputError("forgot-email","Ingresa un correo válido");return}this.setButtonLoading(r,!0),i.classList.remove("show"),s.classList.remove("show");try{const o=await x_(t);o.success?(s.textContent=o.message,s.classList.add("show")):(i.textContent=o.error,i.classList.add("show"))}catch(o){console.error("No se pudo recuperar la contraseña:",o),i.textContent="No se pudo enviar el correo. Revisa tu conexión e inténtalo de nuevo.",i.classList.add("show")}finally{this.setButtonLoading(r,!1)}}async handleResendVerification(){const e=document.getElementById("resend-verification-btn"),t=document.getElementById("verify-message");this.setButtonLoading(e,!0);try{const i=await P_();t.textContent=i.success?`✅ ${i.message}`:`❌ ${i.error}`,t.style.color=i.success?"#16a34a":"#dc2626"}catch(i){console.error("No se pudo reenviar el correo de verificación:",i),t.textContent="No se pudo reenviar el correo. Inténtalo de nuevo.",t.style.color="#dc2626"}finally{this.setButtonLoading(e,!1)}setTimeout(()=>{t.textContent="Enviaremos un enlace de verificación a tu correo.",t.style.color=""},5e3)}async handleCheckVerification(){const e=document.getElementById("check-verification-btn"),t=document.getElementById("verify-message");this.setButtonLoading(e,!0);try{const i=await O_();i.success&&i.verified?(t.textContent="✅ ¡Correo verificado! Entrando...",t.style.color="#16a34a",setTimeout(()=>window.location.reload(),1e3)):(t.textContent=i.success?"⚠️ Tu correo aún no ha sido verificado.":i.error,t.style.color=i.success?"#f59e0b":"#dc2626")}catch(i){console.error("No se pudo comprobar la verificación del correo:",i),t.textContent="No se pudo comprobar la verificación. Inténtalo de nuevo.",t.style.color="#dc2626"}finally{this.setButtonLoading(e,!1)}}togglePassword(e){const t=document.getElementById(e),i=t==null?void 0:t.parentElement.querySelector(".toggle-password span");t&&i&&(t.type==="password"?(t.type="text",i.textContent="visibility_off"):(t.type="password",i.textContent="visibility"))}showInputError(e,t){const i=document.getElementById(`${e}-error`),s=document.getElementById(e);i&&(i.textContent=t,i.classList.add("show")),s&&(s.classList.add("error"),s.addEventListener("input",()=>{i==null||i.classList.remove("show"),s.classList.remove("error")},{once:!0}))}setButtonLoading(e,t){if(!e)return;const i=e.querySelector(".button-text"),s=e.querySelector(".button-loader");e.disabled=t,i&&(i.style.display=t?"none":"block"),s&&(s.style.display=t?"block":"none")}}let mi=null,yr=null;function Uy(n,e){mi=n,yr=e,console.log(`🟢 Contexto activo: serial=${n}, vista=${e}`)}function Lt(){mi=null,yr=null,console.log("🔴 Contexto activo limpiado")}function Al(){return mi}function Nl(){return yr}function Rl(n){return n===mi}const Ie=lt(nt);function Kn(n){return n===1||n===11}async function B_(n){const e=R(Ie,`P/${n}/L`),t=await K(e);return t.exists()&&Kn(t.val())}function $_(n,e){if(Nl()==="device"&&!Rl(n))return console.warn(`⛔ Listener de ${n} ignorado (serial activo ${Al()})`),()=>{};const t=R(Ie,`P/${n}/L`);let i=null,s=null,r=!1;const o=Fc(t,a=>{const c=a.exists()&&Kn(a.val());i===null?e(c?"online":"offline"):!c&&i?(console.log(`⏳ Detectado offline: ${n}`),!r&&!document.hidden&&(r=!0,(async()=>(await V_(n),r=!1))()),s&&clearTimeout(s),s=setTimeout(()=>{K(t).then(l=>{l.exists()&&Kn(l.val())?(console.log(`🟢 Recuperado: ${n}`),e("online")):(console.log(`🔴 Confirmado offline: ${n}`),e("offline"))})},3e4)):c&&!i&&(console.log(`🟢 Online: ${n}`),e("online")),i=c});return()=>{s&&clearTimeout(s),o()}}async function V_(n){try{const e=R(Ie,`M/${n}/X/D/L`),t=await K(e),i=t.exists()?t.val():0,s=i===11?1:11;await ee(e,s),console.log(`🔄 Recuperando ${n}: X/D/L ${i} → ${s}`)}catch(e){console.error("Error en recuperación:",e)}}async function wr(n){try{const e=R(Ie,`M/${n}/X/D/L`),t=await K(e),i=t.exists()?t.val():0,s=i===11?1:11;await ee(e,s),await ee(R(Ie,`P/${n}/L`),0),console.log(`🩺 Ping a ${n}: X/D/L ${i} → ${s}, P/L=0`)}catch(e){console.error("Error en ping:",e)}}async function W_(n){try{await ee(R(Ie,`P/${n}/L`),0),await ee(R(Ie,`M/${n}/X/D/L`),0),console.log(`😴 Módulo en reposo: ${n}`)}catch(e){console.error("Error al poner en reposo:",e)}}async function Ko(n){const e=R(Ie,`US/${n}/M`);try{const t=await K(e);if(t.exists()){const i=t.val();for(const s of Object.keys(i))await W_(s)}}catch(t){console.error("Error al poner todos en reposo:",t)}}async function H_(n){const e=R(Ie,`US/${n}/M`);try{const t=await K(e);if(t.exists()){const i=t.val();for(const s of Object.keys(i))await wr(s)}}catch(t){console.error("Error al hacer ping a todos:",t)}}class Yo{constructor(e){this.user=e,this.db=lt(),this.deviceTimers={},this.listeners=[],this.pendingTimeouts=[],this.healthCheckListeners=[]}async loadSites(){const e=R(this.db,"US/"+this.user.uid+"/M");try{const t=await K(e);if(!t.exists())return console.log("📭 No hay módulos para el usuario"),[];const i=t.val(),s=Object.keys(i);console.log("🔍 Seriales encontrados:",s);const r=await Promise.all(s.map(async a=>{try{const c=await B_(a);return console.log(`   → Serial ${a} online = ${c}`),c}catch(c){return console.error(`No se pudo leer el estado online de ${a}:`,c),!1}})),o=s.map((a,c)=>{const l=r[c],u={1:"door_open",2:"fingerprint",3:"location_city",4:"garage_door",5:"garage_door"},d={1:"blue",2:"green",3:"red",4:"purple",5:"orange"},h={1:"Puerta Motorizada",2:"Control de Acceso",3:"Alarma Comunitaria",4:"Alarma",5:"Alarma DSC"};return{serial:a,name:i[a].N||"Sin nombre",type:i[a].T||0,typeName:h[i[a].T]||"Desconocido",icon:u[i[a].T]||"devices",color:d[i[a].T]||"blue",role:i[a].U||"INV",status:l?"online":"offline"}});return localStorage.setItem("sites_"+this.user.uid,JSON.stringify(o)),o}catch(t){console.error("Error al cargar sitios:",t);const i=localStorage.getItem("sites_"+this.user.uid);if(i)try{return JSON.parse(i)}catch(s){console.error("La copia local de los sitios está dañada:",s)}throw t}}renderSites(e){const t=document.getElementById("sites-list");if(t){if(e.length===0){t.innerHTML=`
                <div class="empty-state">
                    <span class="material-symbols-outlined">home_work</span>
                    <h3>No hay sitios disponibles</h3>
                    <p>Los sitios vinculados a tu cuenta aparecerán aquí.</p>
                </div>`;return}t.innerHTML=e.map(i=>`
            <div class="site-card" data-serial="${i.serial}" data-type="${i.type}" data-search="${i.name} ${i.serial}">
                <div class="site-icon ${i.status==="online"?"online":"offline"}">
                    <span class="material-symbols-outlined">${i.icon||"devices"}</span>
                </div>
                <div class="site-info">
                    <h3>${i.name}</h3>
                    <p class="site-serial">${i.typeName||"Dispositivo"} • ${i.serial}</p>
                    <div class="site-status">
                        <span class="status-dot ${i.status==="online"?"online":"offline"}"></span>
                        <span class="status-text">${i.status==="online"?"En línea":"Sin conexión"}</span>
                    </div>
                </div>
                <span class="material-symbols-outlined arrow-icon">chevron_right</span>
            </div>
        `).join("")}}async addSite(e,t,i,s,r){try{return await ee(R(this.db,"US/"+this.user.uid+"/M/"+e),{C:s||"1234",N:t,L:i||"Sin ubicación",U:r||"ADM"}),!0}catch(o){return console.error("Error al agregar sitio:",o),!1}}setupSearch(){var e;(e=document.getElementById("search-input"))==null||e.addEventListener("input",t=>{const i=t.target.value.toLowerCase();document.querySelectorAll(".site-card").forEach(s=>{s.style.display=s.dataset.search.toLowerCase().includes(i)?"flex":"none"})})}async pingAllModules(){await H_(this.user.uid)}async listenModulesStatus(){this.listeners&&(this.listeners.forEach(i=>{typeof i=="function"&&i()}),this.listeners=[]);const e=R(this.db,"US/"+this.user.uid+"/M"),t=await K(e);if(t.exists())for(const i of Object.keys(t.val())){const s=$_(i,r=>{this.updateSiteStatus(i,r==="online")});this.listeners.push(s)}}updateSiteStatus(e,t){if(Nl()==="device"&&!Rl(e)){console.warn(`⛔ Ignorada actualización de ${e} (vista device, serial activo ${Al()})`);return}const i=document.querySelector(`.site-card[data-serial="${e}"]`);if(!i){console.warn(`⚠️ No se encontró tarjeta para ${e}`);return}const s=i.querySelector(".status-dot"),r=i.querySelector(".status-text"),o=i.querySelector(".site-icon");s&&(s.className="status-dot "+(t?"online":"offline")),r&&(r.textContent=t?"En línea":"Sin conexión"),o&&(o.className="site-icon "+(t?"online":"offline")),console.log(`🔄 Actualizada tarjeta ${e}: ${t?"online":"offline"}`)}startHealthCheck(e){this.stopHealthCheck(),this.healthCheckListeners&&(this.healthCheckListeners.forEach(t=>{typeof t=="function"&&t()}),this.healthCheckListeners=[]),K(R(this.db,"US/"+e+"/M")).then(t=>{if(t.exists())for(const i of Object.keys(t.val())){const s=Fc(R(this.db,"P/"+i+"/L"),r=>{r.exists()&&Kn(r.val())?this.deviceTimers[i]||(this.deviceTimers[i]=setInterval(()=>wr(i),6e4)):this.deviceTimers[i]&&(clearInterval(this.deviceTimers[i]),this.deviceTimers[i]=null)});this.healthCheckListeners.push(s)}})}stopHealthCheck(){this.deviceTimers&&(Object.values(this.deviceTimers).forEach(e=>clearInterval(e)),this.deviceTimers={})}stopAllListeners(){this.stopHealthCheck(),this.listeners&&(this.listeners.forEach(e=>{typeof e=="function"&&e()}),this.listeners=[]),this.healthCheckListeners&&(this.healthCheckListeners.forEach(e=>{typeof e=="function"&&e()}),this.healthCheckListeners=[]),this.pendingTimeouts&&(this.pendingTimeouts.forEach(e=>clearTimeout(e)),this.pendingTimeouts=[]),console.log("🔇 Dashboard detenido")}async disconnectAllModules(){const e=await K(R(this.db,"US/"+this.user.uid+"/M"));if(e.exists())for(const t of Object.keys(e.val()))await ee(R(this.db,`P/${t}/L`),0),console.log("🔇 serial :"+t+" detenid0 ")}async logout(){this.stopAllListeners(),await this.disconnectAllModules(),await gs()}}function Fi(n,e="error"){const t=document.getElementById("global-toast");t&&t.remove();const i=document.createElement("div");i.id="global-toast",i.style.cssText=`
    position:fixed;bottom:30px;left:20px;right:20px;
    background:${e==="error"?"#fef2f2":"#f0fdf4"};
    color:${e==="error"?"#991b1b":"#166534"};
    padding:14px 18px;border-radius:12px;font-size:0.9rem;
    font-weight:500;text-align:center;z-index:9999;
    box-shadow:0 10px 30px rgba(0,0,0,0.15);
    animation:toastIn 0.3s ease;
  `,i.textContent=n,document.body.appendChild(i),setTimeout(()=>{i.style.animation="toastOut 0.3s ease",setTimeout(()=>i.remove(),300)},3e3)}const Pl="@firebase/installations",br="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol=1e4,Ll=`w:${br}`,Dl="FIS_v2",q_="https://firebaseinstallations.googleapis.com/v1",j_=60*60*1e3,G_="installations",z_="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ye=new Xe(G_,z_,K_);function Ml(n){return n instanceof ue&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl({projectId:n}){return`${q_}/projects/${n}/installations`}function Fl(n){return{token:n.token,requestStatus:2,expiresIn:J_(n.expiresIn),creationTime:Date.now()}}async function Ul(n,e){const i=(await e.json()).error;return Ye.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Bl({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Y_(n,{refreshToken:e}){const t=Bl(n);return t.append("Authorization",Q_(e)),t}async function $l(n){const e=await n();return e.status>=500&&e.status<600?n():e}function J_(n){return Number(n.replace("s","000"))}function Q_(n){return`${Dl} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X_({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=xl(n),s=Bl(n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:t,authVersion:Dl,appId:n.appId,sdkVersion:Ll},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await $l(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:Fl(l.authToken)}}else throw await Ul("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev=/^[cdef][\w-]{21}$/,ms="";function tv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=nv(n);return ev.test(t)?t:ms}catch{return ms}}function nv(n){return Z_(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wl=new Map;function Hl(n,e){const t=_i(n);ql(t,e),iv(t,e)}function ql(n,e){const t=Wl.get(n);if(t)for(const i of t)i(e)}function iv(n,e){const t=sv();t&&t.postMessage({key:n,fid:e}),rv()}let We=null;function sv(){return!We&&"BroadcastChannel"in self&&(We=new BroadcastChannel("[Firebase] FID Change"),We.onmessage=n=>{ql(n.data.key,n.data.fid)}),We}function rv(){Wl.size===0&&We&&(We.close(),We=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="firebase-installations-database",av=1,Je="firebase-installations-store";let Ui=null;function Er(){return Ui||(Ui=Zn(ov,av,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Je)}}})),Ui}async function Yn(n,e){const t=_i(n),s=(await Er()).transaction(Je,"readwrite"),r=s.objectStore(Je),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Hl(n,e.fid),e}async function jl(n){const e=_i(n),i=(await Er()).transaction(Je,"readwrite");await i.objectStore(Je).delete(e),await i.done}async function vi(n,e){const t=_i(n),s=(await Er()).transaction(Je,"readwrite"),r=s.objectStore(Je),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&Hl(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(n){let e;const t=await vi(n.appConfig,i=>{const s=cv(i),r=lv(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===ms?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function cv(n){const e=n||{fid:tv(),registrationStatus:0};return Gl(e)}function lv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ye.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=uv(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dv(n)}:{installationEntry:e}}async function uv(n,e){try{const t=await X_(n,e);return Yn(n.appConfig,t)}catch(t){throw Ml(t)&&t.customData.serverCode===409?await jl(n.appConfig):await Yn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function dv(n){let e=await Jo(n.appConfig);for(;e.registrationStatus===1;)await Vl(100),e=await Jo(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Ir(n);return i||t}return e}function Jo(n){return vi(n,e=>{if(!e)throw Ye.create("installation-not-found");return Gl(e)})}function Gl(n){return hv(n)?{fid:n.fid,registrationStatus:0}:n}function hv(n){return n.registrationStatus===1&&n.registrationTime+Ol<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fv({appConfig:n,heartbeatServiceProvider:e},t){const i=pv(n,t),s=Y_(n,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Ll,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await $l(()=>fetch(i,a));if(c.ok){const l=await c.json();return Fl(l)}else throw await Ul("Generate Auth Token",c)}function pv(n,{fid:e}){return`${xl(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cr(n,e=!1){let t;const i=await vi(n.appConfig,r=>{if(!zl(r))throw Ye.create("not-registered");const o=r.authToken;if(!e&&_v(o))return r;if(o.requestStatus===1)return t=gv(n,e),r;{if(!navigator.onLine)throw Ye.create("app-offline");const a=yv(r);return t=mv(n,a),a}});return t?await t:i.authToken}async function gv(n,e){let t=await Qo(n.appConfig);for(;t.authToken.requestStatus===1;)await Vl(100),t=await Qo(n.appConfig);const i=t.authToken;return i.requestStatus===0?Cr(n,e):i}function Qo(n){return vi(n,e=>{if(!zl(e))throw Ye.create("not-registered");const t=e.authToken;return wv(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function mv(n,e){try{const t=await fv(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Yn(n.appConfig,i),t}catch(t){if(Ml(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await jl(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Yn(n.appConfig,i)}throw t}}function zl(n){return n!==void 0&&n.registrationStatus===2}function _v(n){return n.requestStatus===2&&!vv(n)}function vv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+j_}function yv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function wv(n){return n.requestStatus===1&&n.requestTime+Ol<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(n){const e=n,{installationEntry:t,registrationPromise:i}=await Ir(e);return i?i.catch(console.error):Cr(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ev(n,e=!1){const t=n;return await Iv(t),(await Cr(t,e)).token}async function Iv(n){const{registrationPromise:e}=await Ir(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(n){if(!n||!n.options)throw Bi("App Configuration");if(!n.name)throw Bi("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Bi(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Bi(n){return Ye.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl="installations",Tv="installations-internal",Sv=n=>{const e=n.getProvider("app").getImmediate(),t=Cv(e),i=Ze(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},kv=n=>{const e=n.getProvider("app").getImmediate(),t=Ze(e,Kl).getImmediate();return{getId:()=>bv(t),getToken:s=>Ev(t,s)}};function Av(){oe(new X(Kl,Sv,"PUBLIC")),oe(new X(Tv,kv,"PRIVATE"))}Av();z(Pl,br);z(Pl,br,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv="/firebase-messaging-sw.js",Rv="/firebase-cloud-messaging-push-scope",Yl="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Pv="https://fcmregistrations.googleapis.com/v1",Jl="google.c.a.c_id",Ov="google.c.a.c_l",Lv="google.c.a.ts",Dv="google.c.a.e";var Xo;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xo||(Xo={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var en;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(en||(en={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Mv(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),s=new Uint8Array(i.length);for(let r=0;r<i.length;++r)s[r]=i.charCodeAt(r);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i="fcm_token_details_db",xv=5,Zo="fcm_token_object_Store";async function Fv(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes($i))return null;let e=null;return(await Zn($i,xv,{upgrade:async(i,s,r,o)=>{var a;if(s<2||!i.objectStoreNames.contains(Zo))return;const c=o.objectStore(Zo),l=await c.index("fcmSenderId").get(n);if(await c.clear(),!!l){if(s===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:he(u.vapidKey)}}}else if(s===3){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:he(u.auth),p256dh:he(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:he(u.vapidKey)}}}else if(s===4){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:he(u.auth),p256dh:he(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:he(u.vapidKey)}}}}}})).close(),await Ci($i),await Ci("fcm_vapid_details_db"),await Ci("undefined"),Uv(e)?e:null}function Uv(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="firebase-messaging-database",$v=1,tn="firebase-messaging-store";let Vi=null;function Ql(){return Vi||(Vi=Zn(Bv,$v,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(tn)}}})),Vi}async function Vv(n){const e=Xl(n),i=await(await Ql()).transaction(tn).objectStore(tn).get(e);if(i)return i;{const s=await Fv(n.appConfig.senderId);if(s)return await Tr(n,s),s}}async function Tr(n,e){const t=Xl(n),s=(await Ql()).transaction(tn,"readwrite");return await s.objectStore(tn).put(e,t),await s.done,e}function Xl({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},W=new Xe("messaging","Messaging",Wv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hv(n,e){const t=await kr(n),i=Zl(e),s={method:"POST",headers:t,body:JSON.stringify(i)};let r;try{r=await(await fetch(Sr(n.appConfig),s)).json()}catch(o){throw W.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw W.create("token-subscribe-failed",{errorInfo:o})}if(!r.token)throw W.create("token-subscribe-no-token");return r.token}async function qv(n,e){const t=await kr(n),i=Zl(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(i)};let r;try{r=await(await fetch(`${Sr(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw W.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw W.create("token-update-failed",{errorInfo:o})}if(!r.token)throw W.create("token-update-no-token");return r.token}async function jv(n,e){const i={method:"DELETE",headers:await kr(n)};try{const r=await(await fetch(`${Sr(n.appConfig)}/${e}`,i)).json();if(r.error){const o=r.error.message;throw W.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw W.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Sr({projectId:n}){return`${Pv}/projects/${n}/registrations`}async function kr({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Zl({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const s={web:{endpoint:t,auth:e,p256dh:n}};return i!==Yl&&(s.web.applicationPubKey=i),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=7*24*60*60*1e3;async function zv(n){const e=await Yv(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:he(e.getKey("auth")),p256dh:he(e.getKey("p256dh"))},i=await Vv(n.firebaseDependencies);if(i){if(Jv(i.subscriptionOptions,t))return Date.now()>=i.createTime+Gv?Kv(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await jv(n.firebaseDependencies,i.token)}catch(s){console.warn(s)}return ea(n.firebaseDependencies,t)}else return ea(n.firebaseDependencies,t)}async function Kv(n,e){try{const t=await qv(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Tr(n.firebaseDependencies,i),t}catch(t){throw t}}async function ea(n,e){const i={token:await Hv(n,e),createTime:Date.now(),subscriptionOptions:e};return await Tr(n,i),i.token}async function Yv(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Mv(e)})}function Jv(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,s=e.auth===n.auth,r=e.p256dh===n.p256dh;return t&&i&&s&&r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Qv(e,n),Xv(e,n),Zv(e,n),e}function Qv(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const s=e.notification.image;s&&(n.notification.image=s);const r=e.notification.icon;r&&(n.notification.icon=r)}function Xv(n,e){e.data&&(n.data=e.data)}function Zv(n,e){var t,i,s,r,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const a=(s=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&s!==void 0?s:(r=e.notification)===null||r===void 0?void 0:r.click_action;a&&(n.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(n.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(n){return typeof n=="object"&&!!n&&Jl in n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(n){if(!n||!n.options)throw Wi("App Configuration Object");if(!n.name)throw Wi("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw Wi(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Wi(n){return W.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=ty(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iy(n){try{n.swRegistration=await navigator.serviceWorker.register(Nv,{scope:Rv}),n.swRegistration.update().catch(()=>{})}catch(e){throw W.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(n,e){if(!e&&!n.swRegistration&&await iy(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw W.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Yl)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eu(n,e){if(!navigator)throw W.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw W.create("permission-blocked");return await ry(n,e==null?void 0:e.vapidKey),await sy(n,e==null?void 0:e.serviceWorkerRegistration),zv(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oy(n,e,t){const i=ay(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[Jl],message_name:t[Ov],message_time:t[Lv],message_device_time:Math.floor(Date.now()/1e3)})}function ay(n){switch(n){case en.NOTIFICATION_CLICKED:return"notification_open";case en.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===en.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(ta(t)):n.onMessageHandler.next(ta(t)));const i=t.data;ey(i)&&i[Dv]==="1"&&await oy(n,t.messageType,i)}const na="@firebase/messaging",ia="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=n=>{const e=new ny(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>cy(e,t)),e},uy=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>eu(e,i)}};function dy(){oe(new X("messaging",ly,"PUBLIC")),oe(new X("messaging-internal",uy,"PRIVATE")),z(na,ia),z(na,ia,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(){try{await va()}catch{return!1}return typeof window<"u"&&_a()&&Ru()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(n,e){if(!navigator)throw W.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(n=ei()){return hy().then(e=>{if(!e)throw W.create("unsupported-browser")},e=>{throw W.create("indexed-db-unsupported")}),Ze(P(n),"messaging").getImmediate()}async function gy(n,e){return n=P(n),eu(n,e)}function my(n,e){return n=P(n),fy(n,e)}dy();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="type.googleapis.com/google.protobuf.Int64Value",vy="type.googleapis.com/google.protobuf.UInt64Value";function tu(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function _s(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>_s(e));if(typeof n=="function"||typeof n=="object")return tu(n,e=>_s(e));throw new Error("Data cannot be encoded in JSON: "+n)}function Jn(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case _y:case vy:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>Jn(e)):typeof n=="function"||typeof n=="object"?tu(n,e=>Jn(e)):n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ft extends ue{constructor(e,t,i){super(`${Ar}/${e}`,t||""),this.details=i}}function yy(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function wy(n,e){let t=yy(n),i=t,s;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!sa[o])return new ft("internal","internal");t=sa[o],i=o}const a=r.message;typeof a=="string"&&(i=a),s=r.details,s!==void 0&&(s=Jn(s))}}catch{}return t==="ok"?null:new ft(t,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="us-central1";function Ey(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new ft("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class Iy{constructor(e,t,i,s,r=vs,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new by(t,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=vs}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Cy(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}function Ty(n,e,t){return i=>ky(n,e,i,{})}async function Sy(n,e,t,i){t["Content-Type"]="application/json";let s;try{s=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function ky(n,e,t,i){const s=n._url(e);return Ay(n,s,t,i)}async function Ay(n,e,t,i){t=_s(t);const s={data:t},r={},o=await n.contextProvider.getContext(i.limitedUseAppCheckTokens);o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,c=Ey(a),l=await Promise.race([Sy(e,s,r,n.fetchImpl),c.promise,n.cancelAllRequests]);if(c.cancel(),!l)throw new ft("cancelled","Firebase Functions instance was deleted.");const u=wy(l.status,l.json);if(u)throw u;if(!l.json)throw new ft("internal","Response is not valid JSON object.");let d=l.json.data;if(typeof d>"u"&&(d=l.json.result),typeof d>"u")throw new ft("internal","Response is missing data field.");return{data:Jn(d)}}const ra="@firebase/functions",oa="0.11.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny="auth-internal",Ry="app-check-internal",Py="messaging-internal";function Oy(n,e){const t=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(Ny),a=i.getProvider(Py),c=i.getProvider(Ry);return new Iy(r,o,a,c,s,n)};oe(new X(Ar,t,"PUBLIC").setMultipleInstances(!0)),z(ra,oa,e),z(ra,oa,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(n=ei(),e=vs){const i=Ze(P(n),Ar).getImmediate({identifier:e}),s=fa("functions");return s&&Ly(i,...s),i}function Ly(n,e,t){Cy(P(n),e,t)}function Rr(n,e,t){return Ty(P(n),e)}Oy(fetch.bind(self));const wt="fcm_token",Qe="fcm_subscriptions",Dy="BGqsW_ZEnJVC5kfKwtLdz6QUhhciFu53Z-ObyRwNsWscwYNA14eBFHxNn1HFVxsGSUpniXgnddgsRbGfqcmuQyI",Hi="/ProtexHome/";let He=null,ot=null,Pr=null,qi=!1;async function My(){if(!(He&&ot)){if(console.log("----------------------------------------"),console.log("🔔 Inicializando Firebase Messaging"),console.log("🌐 Origin:",window.location.origin),console.log("📍 URL:",window.location.href),console.log("🔐 Secure context:",window.isSecureContext),console.log("⚙️ Service Worker disponible Version1.2.123:","serviceWorker"in navigator),console.log("🔔 Notification disponible:","Notification"in window),!("serviceWorker"in navigator)){console.error("❌ Este navegador no soporta Service Worker");return}if(!window.isSecureContext){console.error("❌ FCM requiere HTTPS");return}try{ot=await navigator.serviceWorker.ready,console.log("✅ Service Worker listo"),console.log("✅ Scope:",ot.scope),He=py(nt),console.log("✅ Firebase Messaging inicializado"),navigator.serviceWorker.addEventListener("message",n=>{n.data&&n.data.type==="FCM_SW_LOG"&&console.log("📩 Mensaje desde SW:",n.data)})}catch(n){console.error("❌ ERROR INICIALIZANDO FCM",n),He=null,ot=null}}}Pr=My();function nu(n){const{A:e,D:t,E:i,N:s,S:r}=n,o=String(t||0).padStart(2,"0"),a=s||"Usuario";let l=`📢 ${r||""}`,u="",d="#6b7280";switch(Number(i)){case 1:l=`🚨 Alarma en Zona ${o}`,u=`Partición ${e} • ${a}`,d="#dc2626";break;case 2:l=`✅ Restauración en Zona ${o}`,u=`Partición ${e} • ${a}`,d="#16a34a";break;case 3:{l=`⚠️ Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[t]||`Falla (código ${t})`}`,u=`Partición ${e}`,d="#d97706";break}case 4:{l=`🔄 ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[t]||`Falla restaurada (código ${t})`}`,u=`Partición ${e}`,d="#a16207";break}case 5:l=`🔓 Apertura por usuario ${o}`,u=`${a} • Partición ${e}`,d="#2563eb";break;case 6:l=`🔒 Cierre por usuario ${o}`,u=`${a} • Partición ${e}`,d="#7c3aed";break;case 7:{l=`🔥 ${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[t]||`Alarma (código ${t})`}`,u=`Partición ${e}`,d="#b91c1c";break}default:l=`📩 Evento ${i}`,u=`Partición ${e} • ${a}`;break}return e==9&&(u=u.replace("Partición","Global")),{title:l,body:u,color:d}}function iu(n){if(console.log("🔔 showEventNotification:",n),!("Notification"in window))return console.error("❌ Notification API no disponible"),!1;if(Notification.permission!=="granted")return console.warn("🔕 Permiso no concedido:",Notification.permission),!1;const{title:e,body:t,color:i}=nu(n),s={body:t,icon:`${Hi}assets/protexhome-icon-512.png`,badge:`${Hi}assets/protexhome-icon-192.png`,tag:`event-${n.S||"unknown"}-${Date.now()}`,requireInteraction:!0,vibrate:[200,100,200],data:{payload:n}};"color"in Notification.prototype&&(s.color=i);try{const r=new Notification(e,s);return r.onclick=o=>{o.preventDefault(),window.focus(),n.S&&(window.location.href=`${Hi}?serial=${encodeURIComponent(n.S)}`)},console.log("✅ Notificación foreground creada"),!0}catch(r){return console.error("❌ Error Notification():",r),!1}}async function su(){if(qi)return{success:!1,error:"Solicitud en curso"};qi=!0;try{if(await Pr,!He||!ot)throw new Error("Firebase Messaging no está disponible");let n=Notification.permission;if(n==="default"&&(n=await Notification.requestPermission()),console.log("🔔 Permiso:",n),n!=="granted")return{success:!1,error:"Permiso no concedido"};const e=await gy(He,{vapidKey:Dy,serviceWorkerRegistration:ot});if(!e)throw new Error("Firebase no devolvió token");return localStorage.getItem(wt)!==e?(console.log("🔄 Token actualizado"),localStorage.setItem(wt,e)):console.log("✅ Token confirmado"),console.log("🔥 Token:",e),{success:!0,token:e}}catch(n){return console.error("❌ Error obteniendo FCM:",n),{success:!1,error:n.message}}finally{qi=!1}}async function ys(n,e){const t=localStorage.getItem(wt);if(!t)return;const i=JSON.parse(localStorage.getItem(Qe)||"{}"),s=Nr(nt),r=Rr(s,"subscribeToSerialTopic");for(const o of e)if(i[o]!==t)try{await r({serial:o,token:t}),i[o]=t,console.log("✅ Suscrito:",o)}catch(a){console.error("❌ Error topic:",o,a)}for(const o of Object.keys(i))e.includes(o)||delete i[o];localStorage.setItem(Qe,JSON.stringify(i))}async function ru(n,e){const t=localStorage.getItem(wt);if(!t)return;const i=JSON.parse(localStorage.getItem(Qe)||"{}");if(i[e]===t)return;const s=Nr(nt),r=Rr(s,"subscribeToSerialTopic");try{await r({serial:e,token:t}),i[e]=t,localStorage.setItem(Qe,JSON.stringify(i)),console.log("✅ Suscrito nuevo serial:",e)}catch(o){console.error("❌ Error nuevo serial:",e,o)}}async function xy(n){const e=localStorage.getItem(wt);if(!e)return{success:!1,error:"No existe token"};const t=Nr(nt),i=Rr(t,"unsubscribeFromSerialTopic");try{await i({serial:n,token:e});const s=JSON.parse(localStorage.getItem(Qe)||"{}");return delete s[n],localStorage.setItem(Qe,JSON.stringify(s)),{success:!0}}catch(s){return console.error("❌ Error desuscribiendo:",s),{success:!1,error:s.message}}}function ws(){localStorage.removeItem(wt),localStorage.removeItem(Qe)}async function ou(n){try{if(await Pr,!He){console.error("❌ Messaging no inicializado");return}my(He,e=>{console.log("📩 FCM foreground:",e),n(e)}),console.log("✅ Listener foreground registrado")}catch(e){console.error("❌ Error registrando onMessage:",e)}}const By=Object.freeze(Object.defineProperty({__proto__:null,clearSubscriptions:ws,formatEventMessage:nu,onForegroundMessage:ou,requestNotificationPermission:su,showEventNotification:iu,subscribeToNewSerial:ru,syncSubscriptions:ys,unsubscribeFromSerial:xy},Symbol.toStringTag,{value:"Module"}));class Fy{constructor(){this.pwa=null,this.authController=null,this.dashboardController=null,this.currentUser=null,this.cachedDashboard=null,this.activeView=null,this.backgroundTimer=null,this.currentSerial=null,this.authListenerInitialized=!1,this.startupTimer=null,this.pendingGoogleAuthError=null,this.init()}async init(){var t;console.log("🚀 Iniciando ProtexHome...");const e=document.createElement("div");if(e.id="splash-screen",e.innerHTML=`
            <div class="splash-content">
                <h1>ProtexHome</h1>
                <p>Protección Inteligente</p>
                <div class="splash-loader"></div>
            </div>
        `,document.body.prepend(e),(t=screen.orientation)!=null&&t.lock&&window.matchMedia("(display-mode: standalone)").matches)try{screen.orientation.lock("portrait").catch(i=>{console.warn("No se pudo bloquear la orientación de la pantalla:",i)})}catch(i){console.warn("No se pudo bloquear la orientación de la pantalla:",i)}if(this.pwa=new cg,ou(i=>{var r,o;console.log("📩 Notificación en primer plano:",i);const s=i.data;s&&s.E!==void 0?(console.log("✅ Mostrando notificación nativa"),iu(s)):Fi((((r=i.notification)==null?void 0:r.title)||"ProtexHome")+": "+(((o=i.notification)==null?void 0:o.body)||""),"info")}),window.addEventListener("popstate",()=>{this.activeView==="device"&&(Lt(),history.replaceState({view:"dashboard"},""),this.activeView="dashboard",this.showDashboard(this.currentUser))}),window.addEventListener("online",()=>{console.log("🟢 Conexión restaurada"),this.activeView==="dashboard"&&this.currentUser?this.showDashboard(this.currentUser):this.authListenerInitialized||this.setupAuthListener()}),window.addEventListener("openWifiModal",i=>{console.log("📶 Abriendo WiFi modal para:",i.detail.serial);const s=document.getElementById("wifi-modal");s&&(s.style.display="flex",window.dispatchEvent(new CustomEvent("wifiModalReady")))}),document.addEventListener("visibilitychange",()=>this.handleVisibilityChange()),window.addEventListener("pagehide",()=>this.handleAppClose()),!navigator.onLine){console.log("⚠️ Sin conexión - Cargando offline"),this.showOfflineDashboard();return}this.setupAuthListener()}async setupAuthListener(){if(this.authListenerInitialized)return;this.authListenerInitialized=!0,document.getElementById("splash-screen")&&(this.startupTimer=setTimeout(()=>this.showStartupFallback(),15e3));const e=await D_();e.success||(this.pendingGoogleAuthError=e.error),F_(t=>{var i;if(clearTimeout(this.startupTimer),this.startupTimer=null,this.currentUser=t,t){const s=(i=t.providerData)==null?void 0:i.some(r=>r.providerId==="google.com");t.emailVerified||s?(console.log("✅ Dashboard"),this.showDashboardAfterSplash(t)):(console.log("⚠️ Verificación"),this.showVerificationAfterSplash(t))}else console.log("👤 Login"),this.showLoginAfterSplash()})}showStartupFallback(){var t;const e=document.getElementById("splash-screen");e&&(e.innerHTML=`
            <div class="splash-content startup-fallback">
                <h1>ProtexHome</h1>
                <p role="status">La conexión está tardando más de lo esperado.</p>
                <p>Revisa tu conexión a internet e inténtalo de nuevo.</p>
                <button class="startup-retry-button" type="button">Reintentar</button>
            </div>
        `,(t=e.querySelector(".startup-retry-button"))==null||t.addEventListener("click",()=>{window.location.reload()}))}async loadAndPingModules(e){this.dashboardController||(this.dashboardController=new Yo(e));const t=await this.dashboardController.loadSites();document.getElementById("sites-list")&&this.dashboardController.renderSites(t),this.dashboardController.pingAllModules(),this.dashboardController.startHealthCheck(e.uid),this.dashboardController.listenModulesStatus()}hideSplashAndShow(e){const t=document.getElementById("splash-screen");e(),t&&(t.style.transition="opacity 0.25s ease",requestAnimationFrame(()=>{t.style.opacity="0"}),setTimeout(()=>t.remove(),300))}showDashboardAfterSplash(e){this.hideSplashAndShow(()=>this.showDashboard(e))}showVerificationAfterSplash(e){this.hideSplashAndShow(()=>this.showVerification(e))}showLoginAfterSplash(){this.hideSplashAndShow(()=>this.showLogin())}async showDashboard(e){var r,o;this.stopActiveView(),this.activeView="dashboard",localStorage.setItem("user",JSON.stringify(e)),this.cachedDashboard={user:e,html:Mr};const t=document.getElementById("main-content");t.innerHTML=Mr,this.dashboardController=new Yo(e);const i=document.getElementById("sites-list");i&&(i.innerHTML=`
                ${[1,2,3,4].map(()=>`
                    <div style="display:flex;align-items:center;gap:12px;background:white;padding:14px;border-radius:14px;margin-bottom:8px;animation:pulse 1.5s infinite;">
                        <div style="width:44px;height:44px;background:#e0e0e0;border-radius:12px;"></div>
                        <div style="flex:1;">
                            <div style="width:60%;height:14px;background:#e0e0e0;border-radius:4px;margin-bottom:8px;"></div>
                            <div style="width:40%;height:10px;background:#e8e8e8;border-radius:4px;"></div>
                        </div>
                        <div style="width:20px;height:20px;background:#e8e8e8;border-radius:50%;"></div>
                    </div>
                `).join("")}
                <style>@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}</style>
            `);let s;try{s=await this.dashboardController.loadSites()}catch(a){const c=localStorage.getItem("sites_"+e.uid);console.error("No se pudieron cargar los sitios del dashboard:",a),i&&(i.innerHTML=`
                    <div class="empty-state" role="alert">
                        <span class="material-symbols-outlined">cloud_off</span>
                        <h3>No se pudieron cargar los sitios</h3>
                        <p>Revisa tu conexión y vuelve a intentarlo. Si continúa, comprueba el acceso a Firebase.</p>
                        <button class="auth-button primary-button" id="retry-sites-btn" type="button">Reintentar</button>
                        ${c?'<button class="link-button" id="show-cached-sites-btn" type="button">Mostrar sitios guardados</button>':""}
                    </div>`,(r=document.getElementById("retry-sites-btn"))==null||r.addEventListener("click",()=>this.showDashboard(e)),(o=document.getElementById("show-cached-sites-btn"))==null||o.addEventListener("click",()=>{try{this.dashboardController.renderSites(JSON.parse(c))}catch(l){console.error("La copia local de los sitios está dañada:",l)}})),this._initDashboardEvents(e);return}this.dashboardController.renderSites(s),this.dashboardController.setupSearch(),this._initDashboardEvents(e),this.syncDashboardNotifications(e,s).catch(a=>{console.error("No se pudieron sincronizar las notificaciones:",a)}),this.loadAndPingModules(e).catch(a=>{console.error("No se pudo iniciar el estado de los módulos:",a)})}async syncDashboardNotifications(e,t){if(!("Notification"in window))return;console.log("🔔 Comprobando FCM...");const i=localStorage.getItem("fcm_token"),s=Notification.permission==="granted";if(i&&s){console.log("✅ Ya hay token y permiso, sincronizando suscripciones..."),await ys(e.uid,t.map(o=>o.serial));return}console.log("🔔 Solicitando permiso de notificaciones...");const r=await su();r.success?(console.log("✅ Token obtenido, sincronizando suscripciones..."),await ys(e.uid,t.map(o=>o.serial))):console.warn("⚠️ No se pudo obtener permiso para notificaciones:",r.error)}_initDashboardEvents(e){var s,r,o,a,c,l,u;const t=this.dashboardController;(s=document.getElementById("profile-btn"))==null||s.addEventListener("click",()=>{document.getElementById("profile-name").textContent=e.name||e.email,document.getElementById("profile-email").textContent=e.email,document.getElementById("profile-modal").style.display="flex"}),(r=document.getElementById("close-profile-modal"))==null||r.addEventListener("click",()=>{document.getElementById("profile-modal").style.display="none"}),(o=document.getElementById("logout-btn"))==null||o.addEventListener("click",async()=>{confirm("¿Cerrar sesión?")&&(Lt(),ws(),await t.logout())}),(a=document.getElementById("delete-account-btn"))==null||a.addEventListener("click",async()=>{confirm("¿Eliminar cuenta permanentemente?")&&confirm("¿Totalmente seguro?")&&(Lt(),ws(),await U_(e.uid))}),(c=document.getElementById("add-site-btn"))==null||c.addEventListener("click",()=>{document.getElementById("add-modal").style.display="flex"}),(l=document.getElementById("close-add-modal"))==null||l.addEventListener("click",()=>{document.getElementById("add-modal").style.display="none"}),(u=document.getElementById("save-site"))==null||u.addEventListener("click",async()=>{const d=document.getElementById("site-serial").value,h=document.getElementById("site-name").value,f=document.getElementById("site-location").value,g=document.getElementById("site-password").value,m=document.getElementById("site-role").value;if(!d||!h)return alert("Serial y nombre son obligatorios");if(await t.addSite(d,h,f,g,m)){document.getElementById("add-modal").style.display="none";const y=await t.loadSites();t.renderSites(y),await ru(e.uid,d)}});const i=document.getElementById("sites-list");i&&(i.onclick=d=>{const h=d.target.closest(".site-card");if(!h)return;if(!navigator.onLine){alert("⚠️ Sin conexión a internet");return}const f=h.dataset.serial,g=h.dataset.type||"1";this.openDeviceView(f,g)}),document.querySelectorAll(".modal-overlay").forEach(d=>{d.addEventListener("click",function(h){h.target===this&&(this.style.display="none")})}),window.addEventListener("beforeunload",()=>{t&&(t.disconnectAllModules(),t.stopHealthCheck())})}showLogin(){console.log("📝 Mostrando login...");const e=document.getElementById("main-content");if(e&&(e.innerHTML=`
            <div class="auth-container">
                <div class="auth-background">
                    <div class="bg-circle bg-circle-1"></div>
                    <div class="bg-circle bg-circle-2"></div>
                    <div class="bg-circle bg-circle-3"></div>
                </div>
                <div class="auth-card">
                    <div class="auth-header">
                        <div class="auth-logo">
                            <span class="material-symbols-outlined">shield_lock</span>
                        </div>
                        <h1>ProtexHome</h1>
                        <p>Protección Inteligente</p>
                    </div>
                    <div id="auth-views" class="auth-views">
                        <div id="login-view" class="auth-view active"></div>
                        <div id="register-view" class="auth-view"></div>
                        <div id="forgot-view" class="auth-view"></div>
                        <div id="verify-view" class="auth-view"></div>
                    </div>
                </div>
            </div>
        `,document.getElementById("login-view").innerHTML=hu,document.getElementById("register-view").innerHTML=fu,document.getElementById("forgot-view").innerHTML=pu,document.getElementById("verify-view").innerHTML=gu,this.authController=new zo,this.setupAuthEvents(),this.pendingGoogleAuthError)){const t=document.getElementById("login-error");t.textContent=this.pendingGoogleAuthError,t.classList.add("show"),this.pendingGoogleAuthError=null}}setupAuthEvents(){var e,t,i,s,r,o,a,c,l,u,d,h,f,g,m;(e=document.getElementById("switch-to-register"))==null||e.addEventListener("click",()=>this.authController.showView("register")),(t=document.getElementById("switch-to-login"))==null||t.addEventListener("click",()=>this.authController.showView("login")),(i=document.getElementById("forgot-password-btn"))==null||i.addEventListener("click",()=>this.authController.showView("forgot")),(s=document.getElementById("back-to-login"))==null||s.addEventListener("click",()=>this.authController.showView("login")),(r=document.getElementById("back-to-login-from-verify"))==null||r.addEventListener("click",()=>this.authController.showView("login")),(o=document.getElementById("toggle-login-password"))==null||o.addEventListener("click",()=>this.authController.togglePassword("login-password")),(a=document.getElementById("toggle-register-password"))==null||a.addEventListener("click",()=>this.authController.togglePassword("register-password")),(c=document.getElementById("login-form"))==null||c.addEventListener("submit",w=>this.authController.handleLogin(w)),(l=document.getElementById("register-form"))==null||l.addEventListener("submit",w=>this.authController.handleRegister(w)),(u=document.getElementById("forgot-form"))==null||u.addEventListener("submit",w=>this.authController.handleForgotPassword(w)),(d=document.getElementById("google-login-btn"))==null||d.addEventListener("click",()=>this.authController.handleGoogleLogin()),(h=document.getElementById("google-register-btn"))==null||h.addEventListener("click",()=>this.authController.handleGoogleLogin()),(f=document.getElementById("resend-verification-btn"))==null||f.addEventListener("click",()=>this.authController.handleResendVerification()),(g=document.getElementById("check-verification-btn"))==null||g.addEventListener("click",()=>this.authController.handleCheckVerification()),(m=document.getElementById("logout-from-verify"))==null||m.addEventListener("click",async()=>await gs())}showVerification(e){var i,s,r;const t=document.getElementById("main-content");t.innerHTML=`
            <div class="auth-container">
                <div class="auth-background">
                    <div class="bg-circle bg-circle-1"></div>
                    <div class="bg-circle bg-circle-2"></div>
                    <div class="bg-circle bg-circle-3"></div>
                </div>
                <div class="auth-card fade-in">
                    <div class="verify-content">
                        <span class="material-symbols-outlined verify-icon">mark_email_unread</span>
                        <h2>Verifica tu correo</h2>
                        <p id="verify-message">Enviaremos un enlace de verificación a tu correo.</p>
                        <p>Cuenta: <strong id="verify-email"></strong></p>
                        <div class="verify-actions">
                            <button class="auth-button secondary-button" id="resend-verification-btn">
                                <span class="button-text">Reenviar correo</span>
                                <span class="button-loader" style="display: none;">
                                    <span class="loader"></span>
                                </span>
                            </button>
                            <button class="auth-button primary-button" id="check-verification-btn">
                                <span class="button-text">Ya verifiqué</span>
                                <span class="button-loader" style="display: none;">
                                    <span class="loader"></span>
                                </span>
                            </button>
                            <button class="link-button" id="logout-from-verify">Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        `,document.getElementById("verify-email").textContent=e.email||"",this.authController=new zo,(i=document.getElementById("resend-verification-btn"))==null||i.addEventListener("click",()=>this.authController.handleResendVerification()),(s=document.getElementById("check-verification-btn"))==null||s.addEventListener("click",async()=>{await this.authController.handleCheckVerification()}),(r=document.getElementById("logout-from-verify"))==null||r.addEventListener("click",async()=>await gs())}showOfflineDashboard(){const e=document.getElementById("splash-screen");e&&(e.style.opacity="0",e.style.transition="opacity 0.2s ease",setTimeout(()=>e.remove(),150));const t=document.getElementById("main-content");t.innerHTML=mu;const i=JSON.parse(localStorage.getItem("user")||"{}"),s=JSON.parse(localStorage.getItem("sites_"+i.uid)||"[]"),r=document.getElementById("offline-sites-list");r&&(s.length>0?r.innerHTML=s.map(a=>`
                    <div class="site-card">
                        <div class="site-icon offline">
                            <span class="material-symbols-outlined">${a.icon||"devices"}</span>
                        </div>
                        <div class="site-info">
                            <h3>${a.name}</h3>
                            <p class="site-serial">${a.typeName||"Dispositivo"} • ${a.serial}</p>
                            <div class="site-status">
                                <span class="status-dot offline"></span>
                                <span class="status-text">Sin conexión</span>
                            </div>
                        </div>
                    </div>
                `).join(""):r.innerHTML=`
                    <div class="empty-state">
                        <span class="material-symbols-outlined">cloud_off</span>
                        <h3>Sin sitios guardados</h3>
                        <p>Conéctate para cargar tus sitios</p>
                    </div>`);const o=document.querySelector(".add-site-container");o&&(o.style.display="none")}stopActiveView(){this.dashboardController&&this.dashboardController.stopAllListeners()}async promptAlarmPin(e){const t=this.currentUser;if(!t||!t.uid)return alert("Usuario no autenticado"),{success:!1};let i=null;try{const s=lt(),r=R(s,`US/${t.uid}/M/${e}/C`),o=await K(r);o.exists()&&(i=o.val())}catch(s){return console.error("❌ Error leyendo la clave:",s),alert("Error al leer la clave del dispositivo"),{success:!1}}if(i==null||i===""||i===0)return alert(`⚠️ Este dispositivo no tiene una clave configurada.
Contacta al propietario.`),{success:!1};if(Number(i)===999999999){console.log("🔑 Clave inicial detectada, abriendo modal de configuración");const s=await this.showChangePinModal(e,i);return s&&s.success?(console.log("✅ Clave configurada, entrando directo al DSC"),s):{success:!1}}return new Promise(s=>{const r=document.createElement("div");r.className="pin-modal-overlay",r.innerHTML=`
        <div class="pin-modal">
            <div class="pin-modal-header">
                <span class="material-symbols-outlined pin-modal-icon">lock</span>
                <h3>Ingresa tu clave</h3>
                <p>Alarma DSC · ${e}</p>
            </div>
            <div class="pin-display">
                <input type="password" id="pin-input" maxlength="6" inputmode="numeric" readonly>
                <button class="pin-toggle-vis" id="pin-toggle" type="button">
                    <span class="material-symbols-outlined">visibility</span>
                </button>
            </div>
            <div class="pin-error" id="pin-error"></div>
            <div class="pin-keypad" id="pin-keypad">
                <button class="pin-key" data-key="1">1</button>
                <button class="pin-key" data-key="2">2</button>
                <button class="pin-key" data-key="3">3</button>
                <button class="pin-key" data-key="4">4</button>
                <button class="pin-key" data-key="5">5</button>
                <button class="pin-key" data-key="6">6</button>
                <button class="pin-key" data-key="7">7</button>
                <button class="pin-key" data-key="8">8</button>
                <button class="pin-key" data-key="9">9</button>
                <button class="pin-key pin-key-clear" data-key="clear">
                    <span class="material-symbols-outlined">backspace</span>
                </button>
                <button class="pin-key" data-key="0">0</button>
                <button class="pin-key pin-key-cancel" data-key="cancel">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
            <button class="pin-submit" id="pin-submit" disabled>Ingresar</button>
        </div>
    `,document.body.appendChild(r);const o=r.querySelector("#pin-input"),a=r.querySelector("#pin-error"),c=r.querySelector("#pin-submit"),l=r.querySelector("#pin-keypad"),u=r.querySelector("#pin-toggle"),d=u.querySelector(".material-symbols-outlined");let h=0;const f=3;u.addEventListener("click",()=>{const w=o.type==="password";o.type=w?"text":"password",d.textContent=w?"visibility_off":"visibility"});const g=()=>{c.disabled=o.value.length<4},m=w=>{r.style.opacity="0",setTimeout(()=>r.remove(),200),s(w)};l.addEventListener("click",w=>{const y=w.target.closest(".pin-key");if(!y)return;const C=y.dataset.key;if(C==="cancel"){m({success:!1});return}if(C==="clear"){o.value=o.value.slice(0,-1),g();return}o.value.length>=6||(o.value+=C,g(),a.textContent="")}),c.addEventListener("click",()=>{const w=o.value.trim();if(!w)return;const y=Number(w),C=Number(i);y===C?(console.log("✅ PIN correcto"),m({success:!0,pin:w})):(h++,console.log(`❌ PIN incorrecto (${h}/${f})`),h>=f?(a.textContent="❌ Demasiados intentos. Intenta más tarde.",c.disabled=!0,l.style.pointerEvents="none",setTimeout(()=>m({success:!1}),2e3)):(a.textContent=`❌ Clave incorrecta (${h}/${f})`,o.value="",g(),navigator.vibrate&&navigator.vibrate(100)))}),o.addEventListener("keydown",w=>{w.key==="Enter"&&!c.disabled&&c.click()}),setTimeout(()=>o.focus(),100)})}showChangePinModal(e,t){return new Promise(i=>{const s=this.currentUser;if(!s||!s.uid){alert("Usuario no autenticado"),i(!1);return}const r=Number(t)===999999999;console.log("🔑 Modo del modal:",r?"INICIAL (sin clave actual)":"NORMAL");const o=document.createElement("div");o.className="pin-modal-overlay";const a=r?"":`
            <div class="pin-field-group">
                <label class="pin-field-label">Clave actual</label>
                <div class="pin-field-wrapper">
                    <input type="password" id="pin-current" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                    <button class="pin-field-toggle" type="button" data-target="pin-current">
                        <span class="material-symbols-outlined">visibility</span>
                    </button>
                </div>
            </div>
        `,c=r?"🔐 Configurar clave":"Cambiar clave",l=r?"Establece tu nueva clave personal":`Alarma DSC · ${e}`;o.innerHTML=`
            <div class="pin-modal">
                <div class="pin-modal-header">
                    <span class="material-symbols-outlined pin-modal-icon pin-modal-icon-warning">key</span>
                    <h3>${c}</h3>
                    <p>${l}</p>
                </div>

                ${a}

                <div class="pin-field-group">
                    <label class="pin-field-label">Nueva clave (4 o 6 dígitos)</label>
                    <div class="pin-field-wrapper">
                        <input type="password" id="pin-new" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                        <button class="pin-field-toggle" type="button" data-target="pin-new">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </div>

                <div class="pin-field-group">
                    <label class="pin-field-label">Confirmar nueva clave</label>
                    <div class="pin-field-wrapper">
                        <input type="password" id="pin-confirm" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                        <button class="pin-field-toggle" type="button" data-target="pin-confirm">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </div>

                <div class="pin-error" id="pin-error"></div>

                <div class="pin-actions">
                    <button class="pin-btn pin-btn-cancel" id="pin-cancel">Cancelar</button>
                    <button class="pin-btn pin-btn-save" id="pin-save">Guardar</button>
                </div>
            </div>
        `,document.body.appendChild(o);const u=o.querySelector("#pin-current"),d=o.querySelector("#pin-new"),h=o.querySelector("#pin-confirm"),f=o.querySelector("#pin-error"),g=o.querySelector("#pin-cancel"),m=o.querySelector("#pin-save");o.querySelectorAll(".pin-field-toggle").forEach(y=>{y.addEventListener("click",()=>{const C=y.dataset.target,D=o.querySelector("#"+C);if(!D)return;const F=D.type==="password";D.type=F?"text":"password";const it=y.querySelector(".material-symbols-outlined");it.textContent=F?"visibility_off":"visibility"})}),[u,d,h].forEach(y=>{y&&y.addEventListener("input",()=>{y.value=y.value.replace(/\D/g,""),f.textContent=""})}),setTimeout(()=>{r?d.focus():u&&u.focus()},150);const w=y=>{o.style.opacity="0",setTimeout(()=>{o.remove(),i(y)},200)};g.addEventListener("click",()=>w({success:!1})),m.addEventListener("click",async()=>{const y=r?"999999999":(u==null?void 0:u.value.trim())||"",C=d.value.trim(),D=h.value.trim();if(!r&&!y){f.textContent="⚠️ Ingresa tu clave actual",u.focus();return}if(!C){f.textContent="⚠️ Ingresa la nueva clave",d.focus();return}if(C.length!==4&&C.length!==6){f.textContent="⚠️ La nueva clave debe tener 4 o 6 dígitos",d.focus();return}if(Number(C)===999999999){f.textContent="⚠️ No puedes usar la clave inicial",d.focus();return}if(C!==D){f.textContent="⚠️ Las claves no coinciden",h.value="",h.focus();return}if(!r&&Number(y)!==Number(t)){f.textContent="❌ Clave actual incorrecta",u.value="",u.focus(),navigator.vibrate&&navigator.vibrate(100);return}m.disabled=!0,m.textContent="Guardando...";try{const F=lt();await ee(R(F,`US/${s.uid}/M/${e}/C`),Number(C)),console.log("✅ Clave actualizada"),f.style.color="var(--success)",f.textContent="✅ Clave actualizada correctamente",navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{Fi("🔑 Clave actualizada","success"),w({success:!0,pin:C})},700)}catch(F){console.error("❌ Error guardando clave:",F),f.style.color="var(--alert)",f.textContent="❌ Error al guardar. Intenta de nuevo.",m.disabled=!1,m.textContent="Guardar"}}),o.addEventListener("keydown",y=>{y.key==="Enter"&&m.click()})})}showChangePinModal(e,t){return new Promise(i=>{const s=this.currentUser;if(!s||!s.uid){alert("Usuario no autenticado"),i(!1);return}const r=Number(t)===999999999;console.log("🔑 Modo del modal:",r?"INICIAL (sin clave actual)":"NORMAL");const o=document.createElement("div");o.className="pin-modal-overlay";const a=r?"":`
            <div class="pin-field-group">
                <label class="pin-field-label">Clave actual</label>
                <div class="pin-field-wrapper">
                    <input type="password" id="pin-current" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                    <button class="pin-field-toggle" type="button" data-target="pin-current">
                        <span class="material-symbols-outlined">visibility</span>
                    </button>
                </div>
            </div>
        `,c=r?"🔐 Configurar clave":"Cambiar clave",l=r?"Establece tu nueva clave personal":`Alarma DSC · ${e}`;o.innerHTML=`
            <div class="pin-modal">
                <div class="pin-modal-header">
                    <span class="material-symbols-outlined pin-modal-icon pin-modal-icon-warning">key</span>
                    <h3>${c}</h3>
                    <p>${l}</p>
                </div>

                ${a}

                <div class="pin-field-group">
                    <label class="pin-field-label">Nueva clave (4 o 6 dígitos)</label>
                    <div class="pin-field-wrapper">
                        <input type="password" id="pin-new" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                        <button class="pin-field-toggle" type="button" data-target="pin-new">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </div>

                <div class="pin-field-group">
                    <label class="pin-field-label">Confirmar nueva clave</label>
                    <div class="pin-field-wrapper">
                        <input type="password" id="pin-confirm" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                        <button class="pin-field-toggle" type="button" data-target="pin-confirm">
                            <span class="material-symbols-outlined">visibility</span>
                        </button>
                    </div>
                </div>

                <div class="pin-error" id="pin-error"></div>

                <div class="pin-actions">
                    <button class="pin-btn pin-btn-cancel" id="pin-cancel">Cancelar</button>
                    <button class="pin-btn pin-btn-save" id="pin-save">Guardar</button>
                </div>
            </div>
        `,document.body.appendChild(o);const u=o.querySelector("#pin-current"),d=o.querySelector("#pin-new"),h=o.querySelector("#pin-confirm"),f=o.querySelector("#pin-error"),g=o.querySelector("#pin-cancel"),m=o.querySelector("#pin-save");o.querySelectorAll(".pin-field-toggle").forEach(y=>{y.addEventListener("click",()=>{const C=y.dataset.target,D=o.querySelector("#"+C);if(!D)return;const F=D.type==="password";D.type=F?"text":"password";const it=y.querySelector(".material-symbols-outlined");it.textContent=F?"visibility_off":"visibility"})}),[u,d,h].forEach(y=>{y&&y.addEventListener("input",()=>{y.value=y.value.replace(/\D/g,""),f.textContent=""})}),setTimeout(()=>{r?d.focus():u&&u.focus()},150);const w=y=>{o.style.opacity="0",setTimeout(()=>{o.remove(),i(y)},200)};g.addEventListener("click",()=>w(!1)),m.addEventListener("click",async()=>{const y=r?"999999999":(u==null?void 0:u.value.trim())||"",C=d.value.trim(),D=h.value.trim();if(!r&&!y){f.textContent="⚠️ Ingresa tu clave actual",u.focus();return}if(!C){f.textContent="⚠️ Ingresa la nueva clave",d.focus();return}if(C.length!==4&&C.length!==6){f.textContent="⚠️ La nueva clave debe tener 4 o 6 dígitos",d.focus();return}if(Number(C)===999999999){f.textContent="⚠️ No puedes usar la clave inicial",d.focus();return}if(C!==D){f.textContent="⚠️ Las claves no coinciden",h.value="",h.focus();return}if(!r&&Number(y)!==Number(t)){f.textContent="❌ Clave actual incorrecta",u.value="",u.focus(),navigator.vibrate&&navigator.vibrate(100);return}m.disabled=!0,m.textContent="Guardando...";try{const F=lt();await ee(R(F,`US/${s.uid}/M/${e}/C`),Number(C)),console.log("✅ Clave actualizada"),f.style.color="var(--success)",f.textContent="✅ Clave actualizada correctamente",navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{Fi("🔑 Clave actualizada","success"),w("saved")},700)}catch(F){console.error("❌ Error guardando clave:",F),f.style.color="var(--alert)",f.textContent="❌ Error al guardar. Intenta de nuevo.",m.disabled=!1,m.textContent="Guardar"}}),o.addEventListener("keydown",y=>{y.key==="Enter"&&m.click()})})}async openDeviceView(e,t){let i=null;if(t===5||t==="5"){const s=await this.promptAlarmPin(e);if(!s||!s.success){console.log("⛔ Acceso denegado a DSC",e);return}i=s.pin}if(this.stopActiveView(),this.activeView="device",this.currentSerial=e,history.pushState({view:"device"},""),t===1||t==="1"){const{openDoorView:s}=await Dr(async()=>{const{openDoorView:r}=await import("./doorViewController-BiKq7W6C.js");return{openDoorView:r}},__vite__mapDeps([0,1]));s(this.currentUser,e,()=>{Lt(),history.replaceState({view:"dashboard"},""),this.activeView="dashboard",this.showDashboard(this.currentUser)})}else if(t===5||t==="5"){const{openAlarmDscView:s}=await Dr(async()=>{const{openAlarmDscView:r}=await import("./alarmDscViewController-ClcZi44u.js");return{openAlarmDscView:r}},__vite__mapDeps([2,1]));s(this.currentUser,e,i,()=>{Lt(),history.replaceState({view:"dashboard"},""),this.activeView="dashboard",this.showDashboard(this.currentUser)})}else alert(`Vista para tipo ${t} en desarrollo`)}handleVisibilityChange(){if(document.hidden)this.backgroundTimer||(this.backgroundTimer=setTimeout(async()=>{console.log("⏰ 10s en segundo plano, poniendo módulos en reposo");const e=this.currentUser||JSON.parse(localStorage.getItem("user")||"null");e&&e.uid&&await Ko(e.uid),this.backgroundTimer=null},1e4));else if(this.backgroundTimer)clearTimeout(this.backgroundTimer),this.backgroundTimer=null,console.log("✅ Regresó antes de 10s, continuando normal");else{console.log("🔄 Regresó después de reposo, restaurando pings");const e=this.currentUser||JSON.parse(localStorage.getItem("user")||"null");e&&e.uid&&(this.activeView==="dashboard"?this.showDashboard(e):this.activeView==="device"&&this.currentSerial&&wr(this.currentSerial))}}handleAppClose(){const e=this.currentUser||JSON.parse(localStorage.getItem("user")||"null");e&&e.uid&&Ko(e.uid)}}console.log("🟢 Iniciando ProtexHome...");const au=new Fy;document.querySelector("main")._app=au;window._app=au;export{Dr as _,K as a,ee as b,Uy as c,xy as d,Al as e,Lt as f,lt as g,B_ as h,$_ as l,By as n,Fc as o,wr as p,R as r,Fi as s,rr as u};
