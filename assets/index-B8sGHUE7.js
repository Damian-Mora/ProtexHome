const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/doorViewController-DNP9LySR.js","assets/deviceController-B_dUZCf2.js","assets/alarmDscViewController-D69QRD3y.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Ru="modulepreload",Pu=function(n){return"/ProtexHome/"+n},Yr={},rs=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(c=>{if(c=Pu(c),c in Yr)return;Yr[c]=!0;const l=c.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":Ru,l||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),l)return new Promise((h,f)=>{d.addEventListener("load",h),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})},Ou=`<!-- Login -->\r
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
    <span class="button-loader">\r
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
</p>`,Lu=`<!-- Registro -->\r
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
    <div class="terms-acceptance">\r
        <input type="checkbox" id="register-terms" required aria-describedby="register-terms-error">\r
        <div>\r
            <label for="register-terms">He leído y acepto los términos y condiciones. También confirmo su aceptación si continúo con Google desde este registro.</label>\r
            <button type="button" class="terms-link" id="view-terms">Leer términos y condiciones</button>\r
        </div>\r
    </div>\r
    <span class="input-error terms-error" id="register-terms-error" aria-live="polite"></span>\r
\r
    <div class="auth-error" id="register-error"></div>\r
\r
    <button type="submit" class="auth-button primary-button" id="register-submit">\r
        <span class="button-text">Crear Cuenta</span>\r
        <span class="button-loader">\r
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
</p>`,Du=`<!-- Recuperar Contraseña -->\r
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
        <span class="button-loader">\r
            <span class="loader"></span>\r
        </span>\r
    </button>\r
</form>`,Mu=`<!-- Verificar Email -->\r
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
      <span class="button-loader">\r
        <span class="loader"></span>\r
      </span>\r
    </button>\r
    <button class="auth-button secondary-button" id="check-verification-btn">\r
      <span class="button-text">Ya verifiqué mi correo</span>\r
      <span class="button-loader">\r
        <span class="loader"></span>\r
      </span>\r
    </button>\r
    <button class="link-button" id="logout-from-verify">Cerrar sesión</button>\r
  </div>\r
</div>`,Jr=`<!-- Dashboard -->\r
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
        <input type="text" class="autofill-guard" autocomplete="off">\r
        <input type="password" class="autofill-guard" autocomplete="off">\r
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
    <div class="modal-overlay" id="profile-modal">\r
        <div class="modal-content">\r
            <div class="modal-profile">\r
                <div class="modal-avatar">\r
                    <span class="material-symbols-outlined">person</span>\r
                </div>\r
                <h3 id="profile-name"></h3>\r
                <p id="profile-email"></p>\r
            </div>\r
            <button class="modal-btn primary" id="notifications-btn" type="button">\r
                <span class="material-symbols-outlined">notifications_active</span>\r
                Activar notificaciones\r
            </button>\r
            <p class="notification-platform-note">En iPhone y iPad, instala ProtexHome en la pantalla de inicio y usa iOS/iPadOS 16.4 o posterior.</p>\r
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
    <div class="modal-overlay" id="add-modal">\r
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
</div>`,xu=`<!-- Offline -->\r
<div class="dash-container fade-in">\r
    <div class="offline-banner-top">\r
        <span class="material-symbols-outlined">wifi_off</span>\r
        <span>Sitios guardados</span>\r
    </div>\r
\r
    <div class="dash-header">\r
        <h2>ProtexHome</h2>\r
        <p class="offline-status">Sin conexión a internet</p>\r
    </div>\r
\r
    <div class="sites-list" id="offline-sites-list">\r
        <!-- Se llena dinámicamente -->\r
    </div>\r
</div>`;var Qr={};/**
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
 */const Ca={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const p=function(n,e){if(!n)throw Rt(e)},Rt=function(n){return new Error("Firebase Database ("+Ca.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ta=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Fu=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},xs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,l=c?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ta(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fu(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const l=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||l==null||d==null)throw new Uu;const h=r<<2|a>>4;if(i.push(h),l!==64){const f=a<<4&240|l>>2;if(i.push(f),d!==64){const m=l<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Uu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ka=function(n){const e=Ta(n);return xs.encodeByteArray(e,!0)},Un=function(n){return ka(n).replace(/\./g,"")},Bn=function(n){try{return xs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Bu(n){return Na(void 0,n)}function Na(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!$u(t)||(n[t]=Na(n[t],e[t]));return n}function $u(n){return n!=="__proto__"}/**
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
 */function Vu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hu=()=>Vu().__FIREBASE_DEFAULTS__,Wu=()=>{if(typeof process>"u"||typeof Qr>"u")return;const n=Qr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qu=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bn(n[1]);return e&&JSON.parse(e)},Fs=()=>{try{return Hu()||Wu()||qu()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Aa=n=>{var e,t;return(t=(e=Fs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ra=n=>{const e=Aa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Pa=()=>{var n;return(n=Fs())===null||n===void 0?void 0:n.config},Oa=n=>{var e;return(e=Fs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class hn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function ju(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Un(JSON.stringify(t)),Un(JSON.stringify(o)),""].join(".")}/**
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
 */function G(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Us(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(G())}function Gu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function La(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ku(){const n=G();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Yu(){return Ca.NODE_ADMIN===!0}function Da(){try{return typeof indexedDB=="object"}catch{return!1}}function Ma(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Ju(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Qu="FirebaseError";class pe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Qu,Object.setPrototypeOf(this,pe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,at.prototype.create)}}class at{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Xu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new pe(s,a,i)}}function Xu(n,e){return n.replace(Zu,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Zu=/\{\$([^}]+)}/g;/**
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
 */function Qt(n){return JSON.parse(n)}function F(n){return JSON.stringify(n)}/**
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
 */const xa=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Qt(Bn(r[0])||""),t=Qt(Bn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},ed=function(n){const e=xa(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},td=function(n){const e=xa(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function me(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function It(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function os(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $n(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Xr(r)&&Xr(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Xr(n){return n!==null&&typeof n=="object"}/**
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
 */function Pt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function qt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class nd{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],l,u;for(let d=0;d<80;d++){d<40?d<20?(l=a^r&(o^a),u=1518500249):(l=r^o^a,u=1859775393):d<60?(l=r&o|a&(r|o),u=2400959708):(l=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+l+c+u+i[d]&4294967295;c=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function id(n,e){const t=new sd(n,e);return t.subscribe.bind(t)}class sd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");rd(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=xi),s.error===void 0&&(s.error=xi),s.complete===void 0&&(s.complete=xi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function xi(){}function hi(n,e){return`${n} failed: ${e} argument `}/**
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
 */const od=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},fi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const qe="[DEFAULT]";/**
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
 */class ad{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new hn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ld(e))try{this.getOrInitializeService({instanceIdentifier:qe})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qe){return this.instances.has(e)}getOptions(e=qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cd(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=qe){return this.component?this.component.multipleInstances?e:qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cd(n){return n===qe?void 0:n}function ld(n){return n.instantiationMode==="EAGER"}/**
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
 */class ud{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ad(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var T;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(T||(T={}));const dd={debug:T.DEBUG,verbose:T.VERBOSE,info:T.INFO,warn:T.WARN,error:T.ERROR,silent:T.SILENT},hd=T.INFO,fd={[T.DEBUG]:"log",[T.VERBOSE]:"log",[T.INFO]:"info",[T.WARN]:"warn",[T.ERROR]:"error"},pd=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=fd[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bs{constructor(e){this.name=e,this._logLevel=hd,this._logHandler=pd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in T))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,T.DEBUG,...e),this._logHandler(this,T.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,T.VERBOSE,...e),this._logHandler(this,T.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,T.INFO,...e),this._logHandler(this,T.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,T.WARN,...e),this._logHandler(this,T.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,T.ERROR,...e),this._logHandler(this,T.ERROR,...e)}}const md=(n,e)=>e.some(t=>n instanceof t);let Zr,eo;function gd(){return Zr||(Zr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _d(){return eo||(eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fa=new WeakMap,as=new WeakMap,Ua=new WeakMap,Fi=new WeakMap,$s=new WeakMap;function vd(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ee(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Fa.set(t,n)}).catch(()=>{}),$s.set(e,n),e}function yd(n){if(as.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});as.set(n,e)}let cs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return as.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ua.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ee(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bd(n){cs=n(cs)}function wd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ui(this),e,...t);return Ua.set(i,e.sort?e.sort():[e]),Ee(i)}:_d().includes(n)?function(...e){return n.apply(Ui(this),e),Ee(Fa.get(this))}:function(...e){return Ee(n.apply(Ui(this),e))}}function Ed(n){return typeof n=="function"?wd(n):(n instanceof IDBTransaction&&yd(n),md(n,gd())?new Proxy(n,cs):n)}function Ee(n){if(n instanceof IDBRequest)return vd(n);if(Fi.has(n))return Fi.get(n);const e=Ed(n);return e!==n&&(Fi.set(n,e),$s.set(e,n)),e}const Ui=n=>$s.get(n);function pi(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Ee(o);return i&&o.addEventListener("upgradeneeded",c=>{i(Ee(o.result),c.oldVersion,c.newVersion,Ee(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}function Bi(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",i=>e(i.oldVersion,i)),Ee(t).then(()=>{})}const Id=["get","getKey","getAll","getAllKeys","count"],Sd=["put","add","delete","clear"],$i=new Map;function to(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($i.get(e))return $i.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Sd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Id.includes(t)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[t](...a),s&&c.done]))[0]};return $i.set(e,r),r}bd(n=>({...n,get:(e,t,i)=>to(e,t)||n.get(e,t,i),has:(e,t)=>!!to(e,t)||n.has(e,t)}));/**
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
 */class Cd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Td(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Td(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ls="@firebase/app",no="0.10.13";/**
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
 */const Ce=new Bs("@firebase/app"),kd="@firebase/app-compat",Nd="@firebase/analytics-compat",Ad="@firebase/analytics",Rd="@firebase/app-check-compat",Pd="@firebase/app-check",Od="@firebase/auth",Ld="@firebase/auth-compat",Dd="@firebase/database",Md="@firebase/data-connect",xd="@firebase/database-compat",Fd="@firebase/functions",Ud="@firebase/functions-compat",Bd="@firebase/installations",$d="@firebase/installations-compat",Vd="@firebase/messaging",Hd="@firebase/messaging-compat",Wd="@firebase/performance",qd="@firebase/performance-compat",jd="@firebase/remote-config",Gd="@firebase/remote-config-compat",zd="@firebase/storage",Kd="@firebase/storage-compat",Yd="@firebase/firestore",Jd="@firebase/vertexai-preview",Qd="@firebase/firestore-compat",Xd="firebase",Zd="10.14.1";/**
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
 */const us="[DEFAULT]",eh={[ls]:"fire-core",[kd]:"fire-core-compat",[Ad]:"fire-analytics",[Nd]:"fire-analytics-compat",[Pd]:"fire-app-check",[Rd]:"fire-app-check-compat",[Od]:"fire-auth",[Ld]:"fire-auth-compat",[Dd]:"fire-rtdb",[Md]:"fire-data-connect",[xd]:"fire-rtdb-compat",[Fd]:"fire-fn",[Ud]:"fire-fn-compat",[Bd]:"fire-iid",[$d]:"fire-iid-compat",[Vd]:"fire-fcm",[Hd]:"fire-fcm-compat",[Wd]:"fire-perf",[qd]:"fire-perf-compat",[jd]:"fire-rc",[Gd]:"fire-rc-compat",[zd]:"fire-gcs",[Kd]:"fire-gcs-compat",[Yd]:"fire-fst",[Qd]:"fire-fst-compat",[Jd]:"fire-vertex","fire-js":"fire-js",[Xd]:"fire-js-all"};/**
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
 */const Hn=new Map,th=new Map,ds=new Map;function io(n,e){try{n.container.addComponent(e)}catch(t){Ce.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ce(n){const e=n.name;if(ds.has(e))return Ce.debug(`There were multiple attempts to register component ${e}.`),!1;ds.set(e,n);for(const t of Hn.values())io(t,n);for(const t of th.values())io(t,n);return!0}function ct(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function se(n){return n.settings!==void 0}/**
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
 */const nh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new at("app","Firebase",nh);/**
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
 */class ih{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new X("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
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
 */const Ot=Zd;function Ba(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:us,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ue.create("bad-app-name",{appName:String(s)});if(t||(t=Pa()),!t)throw Ue.create("no-options");const r=Hn.get(s);if(r){if(Vn(t,r.options)&&Vn(i,r.config))return r;throw Ue.create("duplicate-app",{appName:s})}const o=new ud(s);for(const c of ds.values())o.addComponent(c);const a=new ih(t,i,o);return Hn.set(s,a),a}function mi(n=us){const e=Hn.get(n);if(!e&&n===us&&Pa())return Ba();if(!e)throw Ue.create("no-app",{appName:n});return e}function K(n,e,t){var i;let s=(i=eh[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ce.warn(a.join(" "));return}ce(new X(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const sh="firebase-heartbeat-database",rh=1,Xt="firebase-heartbeat-store";let Vi=null;function $a(){return Vi||(Vi=pi(sh,rh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),Vi}async function oh(n){try{const t=(await $a()).transaction(Xt),i=await t.objectStore(Xt).get(Va(n));return await t.done,i}catch(e){if(e instanceof pe)Ce.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ce.warn(t.message)}}}async function so(n,e){try{const i=(await $a()).transaction(Xt,"readwrite");await i.objectStore(Xt).put(e,Va(n)),await i.done}catch(t){if(t instanceof pe)Ce.warn(t.message);else{const i=Ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ce.warn(i.message)}}}function Va(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ah=1024,ch=30*24*60*60*1e3;class lh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dh(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ro();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ch}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Ce.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ro(),{heartbeatsToSend:i,unsentEntries:s}=uh(this._heartbeatsCache.heartbeats),r=Un(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Ce.warn(t),""}}}function ro(){return new Date().toISOString().substring(0,10)}function uh(n,e=ah){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),oo(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),oo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Da()?Ma().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return so(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return so(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function oo(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function hh(n){ce(new X("platform-logger",e=>new Cd(e),"PRIVATE")),ce(new X("heartbeat",e=>new lh(e),"PRIVATE")),K(ls,no,n),K(ls,no,"esm2017"),K("fire-js","")}hh("");var ao={};const co="@firebase/database",lo="1.0.8";/**
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
 */let Ha="";function fh(n){Ha=n}/**
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
 */class ph{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),F(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class mh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Wa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ph(e)}}catch{}return new mh},Ge=Wa("localStorage"),gh=Wa("sessionStorage");/**
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
 */const gt=new Bs("@firebase/database"),_h=function(){let n=1;return function(){return n++}}(),qa=function(n){const e=od(n),t=new nd;t.update(e);const i=t.digest();return xs.encodeByteArray(i)},fn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=fn.apply(null,i):typeof i=="object"?e+=F(i):e+=i,e+=" "}return e};let jt=null,uo=!0;const vh=function(n,e){p(!0,"Can't turn on custom loggers persistently."),gt.logLevel=T.VERBOSE,jt=gt.log.bind(gt)},$=function(...n){if(uo===!0&&(uo=!1,jt===null&&gh.get("logging_enabled")===!0&&vh()),jt){const e=fn.apply(null,n);jt(e)}},pn=function(n){return function(...e){$(n,...e)}},hs=function(...n){const e="FIREBASE INTERNAL ERROR: "+fn(...n);gt.error(e)},Te=function(...n){const e=`FIREBASE FATAL ERROR: ${fn(...n)}`;throw gt.error(e),new Error(e)},j=function(...n){const e="FIREBASE WARNING: "+fn(...n);gt.warn(e)},yh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&j("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},bh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},St="[MIN_NAME]",Je="[MAX_NAME]",lt=function(n,e){if(n===e)return 0;if(n===St||e===Je)return-1;if(e===St||n===Je)return 1;{const t=ho(n),i=ho(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},wh=function(n,e){return n===e?0:n<e?-1:1},Ut=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+F(e))},Hs=function(n){if(typeof n!="object"||n===null)return F(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=F(e[i]),t+=":",t+=Hs(n[e[i]]);return t+="}",t},ja=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function H(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ga=function(n){p(!Vs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,c;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const l=[];for(c=t;c;c-=1)l.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)l.push(r%2?1:0),r=Math.floor(r/2);l.push(s?1:0),l.reverse();const u=l.join("");let d="";for(c=0;c<64;c+=8){let h=parseInt(u.substr(c,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Eh=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ih=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Sh(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ch=new RegExp("^-?(0*)\\d{1,10}$"),Th=-2147483648,kh=2147483647,ho=function(n){if(Ch.test(n)){const e=Number(n);if(e>=Th&&e<=kh)return e}return null},Lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw j("Exception was thrown by user callback.",t),e},Math.floor(0))}},Nh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Gt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Ah{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){j(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Rh{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?($("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',j(e)}}class Pn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Pn.OWNER="owner";/**
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
 */const Ws="5",za="v",Ka="s",Ya="r",Ja="f",Qa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xa="ls",Za="p",fs="ac",ec="websocket",tc="long_polling";/**
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
 */class nc{constructor(e,t,i,s,r=!1,o="",a=!1,c=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ge.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ge.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ph(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ic(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===ec)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===tc)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ph(n)&&(t.ns=n.namespace);const s=[];return H(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Oh{constructor(){this.counters_={}}incrementCounter(e,t=1){me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Bu(this.counters_)}}/**
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
 */const Hi={},Wi={};function qs(n){const e=n.toString();return Hi[e]||(Hi[e]=new Oh),Hi[e]}function Lh(n,e){const t=n.toString();return Wi[t]||(Wi[t]=e()),Wi[t]}/**
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
 */class Dh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Lt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const fo="start",Mh="close",xh="pLPCommand",Fh="pRTLPCB",sc="id",rc="pw",oc="ser",Uh="cb",Bh="seg",$h="ts",Vh="d",Hh="dframe",ac=1870,cc=30,Wh=ac-cc,qh=25e3,jh=3e4;class mt{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pn(e),this.stats_=qs(t),this.urlFn=c=>(this.appCheckToken&&(c[fs]=this.appCheckToken),ic(t,tc,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Dh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(jh)),bh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new js((...r)=>{const[o,a,c,l,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===fo)this.id=a,this.password=c;else if(o===Mh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[fo]="t",i[oc]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Uh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[za]=Ws,this.transportSessionId&&(i[Ka]=this.transportSessionId),this.lastSessionId&&(i[Xa]=this.lastSessionId),this.applicationId&&(i[Za]=this.applicationId),this.appCheckToken&&(i[fs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qa.test(location.hostname)&&(i[Ya]=Ja);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mt.forceAllow_=!0}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){return mt.forceAllow_?!0:!mt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Eh()&&!Ih()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=F(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ka(t),s=ja(i,Wh);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Hh]="t",i[sc]=e,i[rc]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=F(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class js{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_h(),window[xh+this.uniqueCallbackIdentifier]=e,window[Fh+this.uniqueCallbackIdentifier]=t,this.myIFrame=js.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){$("frame writing exception"),a.stack&&$(a.stack),$(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||$("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sc]=this.myID,e[rc]=this.myPW,e[oc]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cc+i.length<=ac;){const o=this.pendingSegs.shift();i=i+"&"+Bh+s+"="+o.seg+"&"+$h+s+"="+o.ts+"&"+Vh+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(qh)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{$("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Gh=16384,zh=45e3;let Wn=null;typeof MozWebSocket<"u"?Wn=MozWebSocket:typeof WebSocket<"u"&&(Wn=WebSocket);class ie{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pn(this.connId),this.stats_=qs(t),this.connURL=ie.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[za]=Ws,typeof location<"u"&&location.hostname&&Qa.test(location.hostname)&&(o[Ya]=Ja),t&&(o[Ka]=t),i&&(o[Xa]=i),s&&(o[fs]=s),r&&(o[Za]=r),ic(e,ec,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ge.set("previous_websocket_failure",!0);try{let i;Yu(),this.mySock=new Wn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Wn!==null&&!ie.forceDisallow_}static previouslyFailed(){return Ge.isInMemoryStorage||Ge.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ge.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Qt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=F(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ja(t,Gh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ie.responsesRequiredToBeHealthy=2;ie.healthyTimeout=3e4;/**
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
 */class Zt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[mt,ie]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ie&&ie.isAvailable();let i=t&&!ie.previouslyFailed();if(e.webSocketOnly&&(t||j("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ie];else{const s=this.transports_=[];for(const r of Zt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Zt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zt.globalTransportInitialized_=!1;/**
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
 */const Kh=6e4,Yh=5e3,Jh=10*1024,Qh=100*1024,qi="t",po="d",Xh="s",mo="r",Zh="e",go="o",_o="a",vo="n",yo="p",ef="h";class tf{constructor(e,t,i,s,r,o,a,c,l,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pn("c:"+this.id+":"),this.transportManager_=new Zt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Gt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Qh?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Jh?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qi in e){const t=e[qi];t===_o?this.upgradeIfSecondaryHealthy_():t===mo?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===go&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ut("t",e),i=Ut("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:yo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:_o,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:vo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ut("t",e),i=Ut("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ut(qi,e);if(po in e){const i=e[po];if(t===ef){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===vo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Xh?this.onConnectionShutdown_(i):t===mo?this.onReset_(i):t===Zh?hs("Server Error: "+i):t===go?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):hs("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ws!==i&&j("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Gt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Kh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Gt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Yh))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:yo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ge.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class lc{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class uc{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class qn extends uc{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Us()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qn}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const bo=32,wo=768;class k{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function C(){return new k("")}function E(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ve(n){return n.pieces_.length-n.pieceNum_}function A(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new k(n.pieces_,e)}function Gs(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function nf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function en(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function dc(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new k(e,0)}function L(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof k)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new k(t,0)}function S(n){return n.pieceNum_>=n.pieces_.length}function q(n,e){const t=E(n),i=E(e);if(t===null)return e;if(t===i)return q(A(n),A(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function sf(n,e){const t=en(n,0),i=en(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=lt(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function zs(n,e){if(Ve(n)!==Ve(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function J(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ve(n)>Ve(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class rf{constructor(e,t){this.errorPrefix_=t,this.parts_=en(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=fi(this.parts_[i]);hc(this)}}function of(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=fi(e),hc(n)}function af(n){const e=n.parts_.pop();n.byteLength_-=fi(e),n.parts_.length>0&&(n.byteLength_-=1)}function hc(n){if(n.byteLength_>wo)throw new Error(n.errorPrefix_+"has a key path longer than "+wo+" bytes ("+n.byteLength_+").");if(n.parts_.length>bo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bo+") or object contains a cycle "+je(n))}function je(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ks extends uc{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ks}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Bt=1e3,cf=60*5*1e3,Eo=30*1e3,lf=1.3,uf=3e4,df="server_kill",Io=3;class Ie extends lc{constructor(e,t,i,s,r,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=Ie.nextPersistentConnectionId_++,this.log_=pn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bt,this.maxReconnectDelay_=cf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ks.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(F(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new hn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const c=a.d,l=a.s;Ie.warnOnListenWarnings_(c,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),l!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(l,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&me(e,"w")){const i=It(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();j(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||td(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Eo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ed(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+F(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):hs("Unrecognized action received from server: "+F(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uf&&(this.reconnectDelay_=Bt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*lf)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ie.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,i())},l=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:c,sendRequest:l};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?$("getToken() completed but was canceled"):($("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new tf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{j(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(df)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&j(d),c())}}}interrupt(e){$("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){$("Resuming connection for reason: "+e),delete this.interruptReasons_[e],os(this.interruptReasons_)&&(this.reconnectDelay_=Bt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Hs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new k(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){$("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Io&&(this.reconnectDelay_=Eo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){$("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Io&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ha.replace(/\./g,"-")]=1,Us()?e["framework.cordova"]=1:La()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qn.getInstance().currentlyOnline();return os(this.interruptReasons_)&&e}}Ie.nextPersistentConnectionId_=0;Ie.nextConnectionId_=0;/**
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
 */class I{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new I(e,t)}}/**
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
 */class gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new I(St,e),s=new I(St,t);return this.compare(i,s)!==0}minPost(){return I.MIN}}/**
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
 */let Sn;class fc extends gi{static get __EMPTY_NODE(){return Sn}static set __EMPTY_NODE(e){Sn=e}compare(e,t){return lt(e.name,t.name)}isDefinedOn(e){throw Rt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return I.MIN}maxPost(){return new I(Je,Sn)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Sn)}toString(){return".key"}}const _t=new fc;/**
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
 */class Cn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class B{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??B.RED,this.left=s??z.EMPTY_NODE,this.right=r??z.EMPTY_NODE}copy(e,t,i,s,r){return new B(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return z.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return z.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,B.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,B.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}B.RED=!0;B.BLACK=!1;class hf{copy(e,t,i,s,r){return this}insert(e,t,i){return new B(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class z{constructor(e,t=z.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new z(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,B.BLACK,null,null))}remove(e){return new z(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,B.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Cn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Cn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Cn(this.root_,null,this.comparator_,!0,e)}}z.EMPTY_NODE=new hf;/**
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
 */function ff(n,e){return lt(n.name,e.name)}function Ys(n,e){return lt(n,e)}/**
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
 */let ps;function pf(n){ps=n}const pc=function(n){return typeof n=="number"?"number:"+Ga(n):"string:"+n},mc=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&me(e,".sv"),"Priority must be a string or number.")}else p(n===ps||n.isEmpty(),"priority of unexpected type.");p(n===ps||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let So;class U{constructor(e,t=U.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mc(this.priorityNode_)}static set __childrenNodeConstructor(e){So=e}static get __childrenNodeConstructor(){return So}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new U(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return S(e)?this:E(e)===".priority"?this.priorityNode_:U.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:U.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=E(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Ve(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,U.__childrenNodeConstructor.EMPTY_NODE.updateChild(A(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ga(this.value_):e+=this.value_,this.lazyHash_=qa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===U.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof U.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=U.VALUE_TYPE_ORDER.indexOf(t),r=U.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}U.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gc,_c;function mf(n){gc=n}function gf(n){_c=n}class _f extends gi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?lt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return I.MIN}maxPost(){return new I(Je,new U("[PRIORITY-POST]",_c))}makePost(e,t){const i=gc(e);return new I(t,new U("[PRIORITY-POST]",i))}toString(){return".priority"}}const D=new _f;/**
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
 */const vf=Math.log(2);class yf{constructor(e){const t=r=>parseInt(Math.log(r)/vf,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const jn=function(n,e,t,i){n.sort(e);const s=function(c,l){const u=l-c;let d,h;if(u===0)return null;if(u===1)return d=n[c],h=t?t(d):d,new B(h,d.node,B.BLACK,null,null);{const f=parseInt(u/2,10)+c,m=s(c,f),_=s(f+1,l);return d=n[f],h=t?t(d):d,new B(h,d.node,B.BLACK,m,_)}},r=function(c){let l=null,u=null,d=n.length;const h=function(m,_){const b=d-m,g=d;d-=m;const w=s(b+1,g),R=n[b],M=t?t(R):R;f(new B(M,R.node,_,null,w))},f=function(m){l?(l.left=m,l=m):(u=m,l=m)};for(let m=0;m<c.count;++m){const _=c.nextBitIsOne(),b=Math.pow(2,c.count-(m+1));_?h(b,B.BLACK):(h(b,B.BLACK),h(b,B.RED))}return u},o=new yf(n.length),a=r(o);return new z(i||e,a)};/**
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
 */let ji;const ht={};class ve{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return p(ht&&D,"ChildrenNode.ts has not been loaded"),ji=ji||new ve({".priority":ht},{".priority":D}),ji}get(e){const t=It(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof z?t:null}hasIndex(e){return me(this.indexSet_,e.toString())}addIndex(e,t){p(e!==_t,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(I.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=jn(i,e.getCompare()):a=ht;const c=e.toString(),l=Object.assign({},this.indexSet_);l[c]=e;const u=Object.assign({},this.indexes_);return u[c]=a,new ve(u,l)}addToIndexes(e,t){const i=$n(this.indexes_,(s,r)=>{const o=It(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===ht)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(I.Wrap);let l=c.getNext();for(;l;)l.name!==e.name&&a.push(l),l=c.getNext();return a.push(e),jn(a,o.getCompare())}else return ht;else{const a=t.get(e.name);let c=s;return a&&(c=c.remove(new I(e.name,a))),c.insert(e,e.node)}});return new ve(i,this.indexSet_)}removeFromIndexes(e,t){const i=$n(this.indexes_,s=>{if(s===ht)return s;{const r=t.get(e.name);return r?s.remove(new I(e.name,r)):s}});return new ve(i,this.indexSet_)}}/**
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
 */let $t;class y{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&mc(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return $t||($t=new y(new z(Ys),null,ve.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||$t}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?$t:t}}getChild(e){const t=E(e);return t===null?this:this.getImmediateChild(t).getChild(A(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new I(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?$t:this.priorityNode_;return new y(s,o,r)}}updateChild(e,t){const i=E(e);if(i===null)return t;{p(E(e)!==".priority"||Ve(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(A(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(D,(o,a)=>{t[o]=a.val(e),i++,r&&y.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pc(this.getPriority().val())+":"),this.forEachChild(D,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":qa(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new I(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new I(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new I(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mn?-1:0}withIndex(e){if(e===_t||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_t||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(D),s=t.getIterator(D);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_t?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class bf extends y{constructor(){super(new z(Ys),y.EMPTY_NODE,ve.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const mn=new bf;Object.defineProperties(I,{MIN:{value:new I(St,y.EMPTY_NODE)},MAX:{value:new I(Je,mn)}});fc.__EMPTY_NODE=y.EMPTY_NODE;U.__childrenNodeConstructor=y;pf(mn);gf(mn);/**
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
 */const wf=!0;function x(n,e=null){if(n===null)return y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new U(t,x(e))}if(!(n instanceof Array)&&wf){const t=[];let i=!1;if(H(n,(o,a)=>{if(o.substring(0,1)!=="."){const c=x(a);c.isEmpty()||(i=i||!c.getPriority().isEmpty(),t.push(new I(o,c)))}}),t.length===0)return y.EMPTY_NODE;const r=jn(t,ff,o=>o.name,Ys);if(i){const o=jn(t,D.getCompare());return new y(r,x(e),new ve({".priority":o},{".priority":D}))}else return new y(r,x(e),ve.Default)}else{let t=y.EMPTY_NODE;return H(n,(i,s)=>{if(me(n,i)&&i.substring(0,1)!=="."){const r=x(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(x(e))}}mf(x);/**
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
 */class Ef extends gi{constructor(e){super(),this.indexPath_=e,p(!S(e)&&E(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?lt(e.name,t.name):r}makePost(e,t){const i=x(e),s=y.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(t,s)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,mn);return new I(Je,e)}toString(){return en(this.indexPath_,0).join("/")}}/**
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
 */class If extends gi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?lt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,t){const i=x(e);return new I(t,i)}toString(){return".value"}}const Sf=new If;/**
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
 */function vc(n){return{type:"value",snapshotNode:n}}function Ct(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function tn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function nn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Cf(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Js{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(tn(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ct(t,i)):o.trackChildChange(nn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(D,(s,r)=>{t.hasChild(s)||i.trackChildChange(tn(s,r))}),t.isLeafNode()||t.forEachChild(D,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(nn(s,r,o))}else i.trackChildChange(Ct(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class sn{constructor(e){this.indexedFilter_=new Js(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sn.getStartPost_(e),this.endPost_=sn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new I(t,i))||(i=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=y.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(y.EMPTY_NODE);const r=this;return t.forEachChild(D,(o,a)=>{r.matches(new I(o,a))||(s=s.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Tf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new sn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new I(t,i))||(i=y.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const c=new I(t,i),l=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(c);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,l,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,c);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(nn(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(tn(t,d));const _=a.updateImmediateChild(t,y.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ct(h.name,h.node)),_.updateImmediateChild(h.name,h.node)):_}}else return i.isEmpty()?e:u&&o(l,c)>=0?(r!=null&&(r.trackChildChange(tn(l.name,l.node)),r.trackChildChange(Ct(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(l.name,y.EMPTY_NODE)):e}}/**
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
 */class Qs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:St}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Je}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new Qs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kf(n){return n.loadsAllData()?new Js(n.getIndex()):n.hasLimit()?new Tf(n):new sn(n)}function Co(n){const e={};if(n.isDefault())return e;let t;if(n.index_===D?t="$priority":n.index_===Sf?t="$value":n.index_===_t?t="$key":(p(n.index_ instanceof Ef,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=F(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=F(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+F(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=F(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+F(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function To(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==D&&(e.i=n.index_.toString()),e}/**
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
 */class Gn extends lc{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=pn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Gn.getListenId_(e,i),a={};this.listens_[o]=a;const c=Co(e._queryParams);this.restRequest_(r+".json",c,(l,u)=>{let d=u;if(l===404&&(d=null,l=null),l===null&&this.onDataUpdate_(r,d,!1,i),It(this.listens_,o)===a){let h;l?l===401?h="permission_denied":h="rest_error:"+l:h="ok",s(h,null)}})}unlisten(e,t){const i=Gn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Co(e._queryParams),i=e._path.toString(),s=new hn;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Pt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Qt(a.responseText)}catch{j("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,c)}else a.status!==401&&a.status!==404&&j("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Nf{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function zn(){return{value:null,children:new Map}}function yc(n,e,t){if(S(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=E(e);n.children.has(i)||n.children.set(i,zn());const s=n.children.get(i);e=A(e),yc(s,e,t)}}function ms(n,e,t){n.value!==null?t(e,n.value):Af(n,(i,s)=>{const r=new k(e.toString()+"/"+i);ms(s,r,t)})}function Af(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Rf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&H(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ko=10*1e3,Pf=30*1e3,Of=5*60*1e3;class Lf{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Rf(e);const i=ko+(Pf-ko)*Math.random();Gt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;H(e,(s,r)=>{r>0&&me(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Gt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Of))}}/**
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
 */var re;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(re||(re={}));function Xs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function er(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Kn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=re.ACK_USER_WRITE,this.source=Xs()}operationForChild(e){if(S(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new k(e));return new Kn(C(),t,this.revert)}}else return p(E(this.path)===e,"operationForChild called for unrelated child."),new Kn(A(this.path),this.affectedTree,this.revert)}}/**
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
 */class rn{constructor(e,t){this.source=e,this.path=t,this.type=re.LISTEN_COMPLETE}operationForChild(e){return S(this.path)?new rn(this.source,C()):new rn(this.source,A(this.path))}}/**
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
 */class Qe{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=re.OVERWRITE}operationForChild(e){return S(this.path)?new Qe(this.source,C(),this.snap.getImmediateChild(e)):new Qe(this.source,A(this.path),this.snap)}}/**
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
 */class Tt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=re.MERGE}operationForChild(e){if(S(this.path)){const t=this.children.subtree(new k(e));return t.isEmpty()?null:t.value?new Qe(this.source,C(),t.value):new Tt(this.source,C(),t)}else return p(E(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Tt(this.source,A(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class He{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(S(e))return this.isFullyInitialized()&&!this.filtered_;const t=E(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Df{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Mf(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cf(o.childName,o.snapshotNode))}),Vt(n,s,"child_removed",e,i,t),Vt(n,s,"child_added",e,i,t),Vt(n,s,"child_moved",r,i,t),Vt(n,s,"child_changed",e,i,t),Vt(n,s,"value",e,i,t),s}function Vt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,c)=>Ff(n,a,c)),o.forEach(a=>{const c=xf(n,a,r);s.forEach(l=>{l.respondsTo(a.type)&&e.push(l.createEvent(c,n.query_))})})}function xf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Ff(n,e,t){if(e.childName==null||t.childName==null)throw Rt("Should only compare child_ events.");const i=new I(e.childName,e.snapshotNode),s=new I(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function _i(n,e){return{eventCache:n,serverCache:e}}function zt(n,e,t,i){return _i(new He(e,t,i),n.serverCache)}function bc(n,e,t,i){return _i(n.eventCache,new He(e,t,i))}function Yn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Xe(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Gi;const Uf=()=>(Gi||(Gi=new z(wh)),Gi);class N{constructor(e,t=Uf()){this.value=e,this.children=t}static fromObject(e){let t=new N(null);return H(e,(i,s)=>{t=t.set(new k(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:C(),value:this.value};if(S(e))return null;{const i=E(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(A(e),t);return r!=null?{path:L(new k(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(S(e))return this;{const t=E(e),i=this.children.get(t);return i!==null?i.subtree(A(e)):new N(null)}}set(e,t){if(S(e))return new N(t,this.children);{const i=E(e),r=(this.children.get(i)||new N(null)).set(A(e),t),o=this.children.insert(i,r);return new N(this.value,o)}}remove(e){if(S(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const t=E(e),i=this.children.get(t);if(i){const s=i.remove(A(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(S(e))return this.value;{const t=E(e),i=this.children.get(t);return i?i.get(A(e)):null}}setTree(e,t){if(S(e))return t;{const i=E(e),r=(this.children.get(i)||new N(null)).setTree(A(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new N(this.value,o)}}fold(e){return this.fold_(C(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(L(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,C(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(S(e))return null;{const r=E(e),o=this.children.get(r);return o?o.findOnPath_(A(e),L(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,C(),t)}foreachOnPath_(e,t,i){if(S(e))return this;{this.value&&i(t,this.value);const s=E(e),r=this.children.get(s);return r?r.foreachOnPath_(A(e),L(t,s),i):new N(null)}}foreach(e){this.foreach_(C(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(L(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class oe{constructor(e){this.writeTree_=e}static empty(){return new oe(new N(null))}}function Kt(n,e,t){if(S(e))return new oe(new N(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=q(s,e);return r=r.updateChild(o,t),new oe(n.writeTree_.set(s,r))}else{const s=new N(t),r=n.writeTree_.setTree(e,s);return new oe(r)}}}function gs(n,e,t){let i=n;return H(t,(s,r)=>{i=Kt(i,L(e,s),r)}),i}function No(n,e){if(S(e))return oe.empty();{const t=n.writeTree_.setTree(e,new N(null));return new oe(t)}}function _s(n,e){return ut(n,e)!=null}function ut(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(q(t.path,e)):null}function Ao(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(D,(i,s)=>{e.push(new I(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new I(i,s.value))}),e}function Be(n,e){if(S(e))return n;{const t=ut(n,e);return t!=null?new oe(new N(t)):new oe(n.writeTree_.subtree(e))}}function vs(n){return n.writeTree_.isEmpty()}function kt(n,e){return wc(C(),n.writeTree_,e)}function wc(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=wc(L(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(L(n,".priority"),i)),t}}/**
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
 */function vi(n,e){return Cc(e,n)}function Bf(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Kt(n.visibleWrites,e,t)),n.lastWriteId=i}function $f(n,e,t,i){p(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=gs(n.visibleWrites,e,t),n.lastWriteId=i}function Vf(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Hf(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Wf(a,i.path)?s=!1:J(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return qf(n),!0;if(i.snap)n.visibleWrites=No(n.visibleWrites,i.path);else{const a=i.children;H(a,c=>{n.visibleWrites=No(n.visibleWrites,L(i.path,c))})}return!0}else return!1}function Wf(n,e){if(n.snap)return J(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&J(L(n.path,t),e))return!0;return!1}function qf(n){n.visibleWrites=Ec(n.allWrites,jf,C()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jf(n){return n.visible}function Ec(n,e,t){let i=oe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)J(t,o)?(a=q(t,o),i=Kt(i,a,r.snap)):J(o,t)&&(a=q(o,t),i=Kt(i,C(),r.snap.getChild(a)));else if(r.children){if(J(t,o))a=q(t,o),i=gs(i,a,r.children);else if(J(o,t))if(a=q(o,t),S(a))i=gs(i,C(),r.children);else{const c=It(r.children,E(a));if(c){const l=c.getChild(A(a));i=Kt(i,C(),l)}}}else throw Rt("WriteRecord should have .snap or .children")}}return i}function Ic(n,e,t,i,s){if(!i&&!s){const r=ut(n.visibleWrites,e);if(r!=null)return r;{const o=Be(n.visibleWrites,e);if(vs(o))return t;if(t==null&&!_s(o,C()))return null;{const a=t||y.EMPTY_NODE;return kt(o,a)}}}else{const r=Be(n.visibleWrites,e);if(!s&&vs(r))return t;if(!s&&t==null&&!_s(r,C()))return null;{const o=function(l){return(l.visible||s)&&(!i||!~i.indexOf(l.writeId))&&(J(l.path,e)||J(e,l.path))},a=Ec(n.allWrites,o,e),c=t||y.EMPTY_NODE;return kt(a,c)}}}function Gf(n,e,t){let i=y.EMPTY_NODE;const s=ut(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(D,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Be(n.visibleWrites,e);return t.forEachChild(D,(o,a)=>{const c=kt(Be(r,new k(o)),a);i=i.updateImmediateChild(o,c)}),Ao(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Be(n.visibleWrites,e);return Ao(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function zf(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=L(e,t);if(_s(n.visibleWrites,r))return null;{const o=Be(n.visibleWrites,r);return vs(o)?s.getChild(t):kt(o,s.getChild(t))}}function Kf(n,e,t,i){const s=L(e,t),r=ut(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Be(n.visibleWrites,s);return kt(o,i.getNode().getImmediateChild(t))}else return null}function Yf(n,e){return ut(n.visibleWrites,e)}function Jf(n,e,t,i,s,r,o){let a;const c=Be(n.visibleWrites,e),l=ut(c,C());if(l!=null)a=l;else if(t!=null)a=kt(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function Qf(){return{visibleWrites:oe.empty(),allWrites:[],lastWriteId:-1}}function Jn(n,e,t,i){return Ic(n.writeTree,n.treePath,e,t,i)}function tr(n,e){return Gf(n.writeTree,n.treePath,e)}function Ro(n,e,t,i){return zf(n.writeTree,n.treePath,e,t,i)}function Qn(n,e){return Yf(n.writeTree,L(n.treePath,e))}function Xf(n,e,t,i,s,r){return Jf(n.writeTree,n.treePath,e,t,i,s,r)}function nr(n,e,t){return Kf(n.writeTree,n.treePath,e,t)}function Sc(n,e){return Cc(L(n.treePath,e),n.writeTree)}function Cc(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Zf{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,nn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,tn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ct(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,nn(i,e.snapshotNode,s.oldSnap));else throw Rt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ep{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Tc=new ep;class ir{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new He(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Xe(this.viewCache_),r=Xf(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function tp(n){return{filter:n}}function np(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function ip(n,e,t,i,s){const r=new Zf;let o,a;if(t.type===re.OVERWRITE){const l=t;l.source.fromUser?o=ys(n,e,l.path,l.snap,i,s,r):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!S(l.path),o=Xn(n,e,l.path,l.snap,i,s,a,r))}else if(t.type===re.MERGE){const l=t;l.source.fromUser?o=rp(n,e,l.path,l.children,i,s,r):(p(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=bs(n,e,l.path,l.children,i,s,a,r))}else if(t.type===re.ACK_USER_WRITE){const l=t;l.revert?o=cp(n,e,l.path,i,s,r):o=op(n,e,l.path,l.affectedTree,i,s,r)}else if(t.type===re.LISTEN_COMPLETE)o=ap(n,e,t.path,i,r);else throw Rt("Unknown operation type: "+t.type);const c=r.getChanges();return sp(e,o,c),{viewCache:o,changes:c}}function sp(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Yn(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(vc(Yn(e)))}}function kc(n,e,t,i,s,r){const o=e.eventCache;if(Qn(i,t)!=null)return e;{let a,c;if(S(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const l=Xe(e),u=l instanceof y?l:y.EMPTY_NODE,d=tr(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const l=Jn(i,Xe(e));a=n.filter.updateFullNode(e.eventCache.getNode(),l,r)}else{const l=E(t);if(l===".priority"){p(Ve(t)===1,"Can't have a priority with additional path components");const u=o.getNode();c=e.serverCache.getNode();const d=Ro(i,t,u,c);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=A(t);let d;if(o.isCompleteForChild(l)){c=e.serverCache.getNode();const h=Ro(i,t,o.getNode(),c);h!=null?d=o.getNode().getImmediateChild(l).updateChild(u,h):d=o.getNode().getImmediateChild(l)}else d=nr(i,l,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),l,d,u,s,r):a=o.getNode()}}return zt(e,a,o.isFullyInitialized()||S(t),n.filter.filtersNodes())}}function Xn(n,e,t,i,s,r,o,a){const c=e.serverCache;let l;const u=o?n.filter:n.filter.getIndexedFilter();if(S(t))l=u.updateFullNode(c.getNode(),i,null);else if(u.filtersNodes()&&!c.isFiltered()){const f=c.getNode().updateChild(t,i);l=u.updateFullNode(c.getNode(),f,null)}else{const f=E(t);if(!c.isCompleteForPath(t)&&Ve(t)>1)return e;const m=A(t),b=c.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?l=u.updatePriority(c.getNode(),b):l=u.updateChild(c.getNode(),f,b,m,Tc,null)}const d=bc(e,l,c.isFullyInitialized()||S(t),u.filtersNodes()),h=new ir(s,d,r);return kc(n,d,t,s,h,a)}function ys(n,e,t,i,s,r,o){const a=e.eventCache;let c,l;const u=new ir(s,e,r);if(S(t))l=n.filter.updateFullNode(e.eventCache.getNode(),i,o),c=zt(e,l,!0,n.filter.filtersNodes());else{const d=E(t);if(d===".priority")l=n.filter.updatePriority(e.eventCache.getNode(),i),c=zt(e,l,a.isFullyInitialized(),a.isFiltered());else{const h=A(t),f=a.getNode().getImmediateChild(d);let m;if(S(h))m=i;else{const _=u.getCompleteChild(d);_!=null?Gs(h)===".priority"&&_.getChild(dc(h)).isEmpty()?m=_:m=_.updateChild(h,i):m=y.EMPTY_NODE}if(f.equals(m))c=e;else{const _=n.filter.updateChild(a.getNode(),d,m,h,u,o);c=zt(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return c}function Po(n,e){return n.eventCache.isCompleteForChild(e)}function rp(n,e,t,i,s,r,o){let a=e;return i.foreach((c,l)=>{const u=L(t,c);Po(e,E(u))&&(a=ys(n,a,u,l,s,r,o))}),i.foreach((c,l)=>{const u=L(t,c);Po(e,E(u))||(a=ys(n,a,u,l,s,r,o))}),a}function Oo(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function bs(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,l;S(t)?l=i:l=new N(null).setTree(t,i);const u=e.serverCache.getNode();return l.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=Oo(n,f,h);c=Xn(n,c,new k(d),m,s,r,o,a)}}),l.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),_=Oo(n,m,h);c=Xn(n,c,new k(d),_,s,r,o,a)}}),c}function op(n,e,t,i,s,r,o){if(Qn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(i.value!=null){if(S(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return Xn(n,e,t,c.getNode().getChild(t),s,r,a,o);if(S(t)){let l=new N(null);return c.getNode().forEachChild(_t,(u,d)=>{l=l.set(new k(u),d)}),bs(n,e,t,l,s,r,a,o)}else return e}else{let l=new N(null);return i.foreach((u,d)=>{const h=L(t,u);c.isCompleteForPath(h)&&(l=l.set(u,c.getNode().getChild(h)))}),bs(n,e,t,l,s,r,a,o)}}function ap(n,e,t,i,s){const r=e.serverCache,o=bc(e,r.getNode(),r.isFullyInitialized()||S(t),r.isFiltered());return kc(n,o,t,i,Tc,s)}function cp(n,e,t,i,s,r){let o;if(Qn(i,t)!=null)return e;{const a=new ir(i,e,s),c=e.eventCache.getNode();let l;if(S(t)||E(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Jn(i,Xe(e));else{const d=e.serverCache.getNode();p(d instanceof y,"serverChildren would be complete if leaf node"),u=tr(i,d)}u=u,l=n.filter.updateFullNode(c,u,r)}else{const u=E(t);let d=nr(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=c.getImmediateChild(u)),d!=null?l=n.filter.updateChild(c,u,d,A(t),a,r):e.eventCache.getNode().hasChild(u)?l=n.filter.updateChild(c,u,y.EMPTY_NODE,A(t),a,r):l=c,l.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Jn(i,Xe(e)),o.isLeafNode()&&(l=n.filter.updateFullNode(l,o,r)))}return o=e.serverCache.isFullyInitialized()||Qn(i,C())!=null,zt(e,l,o,n.filter.filtersNodes())}}/**
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
 */class lp{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Js(i.getIndex()),r=kf(i);this.processor_=tp(r);const o=t.serverCache,a=t.eventCache,c=s.updateFullNode(y.EMPTY_NODE,o.getNode(),null),l=r.updateFullNode(y.EMPTY_NODE,a.getNode(),null),u=new He(c,o.isFullyInitialized(),s.filtersNodes()),d=new He(l,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_i(d,u),this.eventGenerator_=new Df(this.query_)}get query(){return this.query_}}function up(n){return n.viewCache_.serverCache.getNode()}function dp(n){return Yn(n.viewCache_)}function hp(n,e){const t=Xe(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!S(e)&&!t.getImmediateChild(E(e)).isEmpty())?t.getChild(e):null}function Lo(n){return n.eventRegistrations_.length===0}function fp(n,e){n.eventRegistrations_.push(e)}function Do(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Mo(n,e,t,i){e.type===re.MERGE&&e.source.queryId!==null&&(p(Xe(n.viewCache_),"We should always have a full cache before handling merges"),p(Yn(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=ip(n.processor_,s,e,t,i);return np(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Nc(n,r.changes,r.viewCache.eventCache.getNode(),null)}function pp(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(D,(r,o)=>{i.push(Ct(r,o))}),t.isFullyInitialized()&&i.push(vc(t.getNode())),Nc(n,i,t.getNode(),e)}function Nc(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Mf(n.eventGenerator_,e,t,s)}/**
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
 */let Zn;class Ac{constructor(){this.views=new Map}}function mp(n){p(!Zn,"__referenceConstructor has already been defined"),Zn=n}function gp(){return p(Zn,"Reference.ts has not been loaded"),Zn}function _p(n){return n.views.size===0}function sr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),Mo(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Mo(o,e,t,i));return r}}function Rc(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Jn(t,s?i:null),c=!1;a?c=!0:i instanceof y?(a=tr(t,i),c=!1):(a=y.EMPTY_NODE,c=!1);const l=_i(new He(a,c,!1),new He(i,s,!1));return new lp(e,l)}return o}function vp(n,e,t,i,s,r){const o=Rc(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),fp(o,t),pp(o,t)}function yp(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=We(n);if(s==="default")for(const[c,l]of n.views.entries())o=o.concat(Do(l,t,i)),Lo(l)&&(n.views.delete(c),l.query._queryParams.loadsAllData()||r.push(l.query));else{const c=n.views.get(s);c&&(o=o.concat(Do(c,t,i)),Lo(c)&&(n.views.delete(s),c.query._queryParams.loadsAllData()||r.push(c.query)))}return a&&!We(n)&&r.push(new(gp())(e._repo,e._path)),{removed:r,events:o}}function Pc(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $e(n,e){let t=null;for(const i of n.views.values())t=t||hp(i,e);return t}function Oc(n,e){if(e._queryParams.loadsAllData())return yi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Lc(n,e){return Oc(n,e)!=null}function We(n){return yi(n)!=null}function yi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ei;function bp(n){p(!ei,"__referenceConstructor has already been defined"),ei=n}function wp(){return p(ei,"Reference.ts has not been loaded"),ei}let Ep=1;class xo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=Qf(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dc(n,e,t,i,s){return Bf(n.pendingWriteTree_,e,t,i,s),s?Dt(n,new Qe(Xs(),e,t)):[]}function Ip(n,e,t,i){$f(n.pendingWriteTree_,e,t,i);const s=N.fromObject(t);return Dt(n,new Tt(Xs(),e,s))}function Fe(n,e,t=!1){const i=Vf(n.pendingWriteTree_,e);if(Hf(n.pendingWriteTree_,e)){let r=new N(null);return i.snap!=null?r=r.set(C(),!0):H(i.children,o=>{r=r.set(new k(o),!0)}),Dt(n,new Kn(i.path,r,t))}else return[]}function gn(n,e,t){return Dt(n,new Qe(Zs(),e,t))}function Sp(n,e,t){const i=N.fromObject(t);return Dt(n,new Tt(Zs(),e,i))}function Cp(n,e){return Dt(n,new rn(Zs(),e))}function Tp(n,e,t){const i=or(n,t);if(i){const s=ar(i),r=s.path,o=s.queryId,a=q(r,e),c=new rn(er(o),a);return cr(n,r,c)}else return[]}function ti(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Lc(o,e))){const c=yp(o,e,t,i);_p(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const l=c.removed;if(a=c.events,!s){const u=l.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>We(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Ap(h);for(let m=0;m<f.length;++m){const _=f[m],b=_.query,g=Uc(n,_);n.listenProvider_.startListening(Yt(b),on(n,b),g.hashFn,g.onComplete)}}}!d&&l.length>0&&!i&&(u?n.listenProvider_.stopListening(Yt(e),null):l.forEach(h=>{const f=n.queryToTagMap.get(bi(h));n.listenProvider_.stopListening(Yt(h),f)}))}Rp(n,l)}return a}function Mc(n,e,t,i){const s=or(n,i);if(s!=null){const r=ar(s),o=r.path,a=r.queryId,c=q(o,e),l=new Qe(er(a),c,t);return cr(n,o,l)}else return[]}function kp(n,e,t,i){const s=or(n,i);if(s){const r=ar(s),o=r.path,a=r.queryId,c=q(o,e),l=N.fromObject(t),u=new Tt(er(a),c,l);return cr(n,o,u)}else return[]}function ws(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const m=q(h,s);r=r||$e(f,m),o=o||We(f)});let a=n.syncPointTree_.get(s);a?(o=o||We(a),r=r||$e(a,C())):(a=new Ac,n.syncPointTree_=n.syncPointTree_.set(s,a));let c;r!=null?c=!0:(c=!1,r=y.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,m)=>{const _=$e(m,C());_&&(r=r.updateImmediateChild(f,_))}));const l=Lc(a,e);if(!l&&!e._queryParams.loadsAllData()){const h=bi(e);p(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Pp();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=vi(n.pendingWriteTree_,s);let d=vp(a,e,t,u,r,c);if(!l&&!o&&!i){const h=Oc(a,e);d=d.concat(Op(n,e,h))}return d}function rr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const c=q(o,e),l=$e(a,c);if(l)return l});return Ic(s,e,r,t,!0)}function Np(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(l,u)=>{const d=q(l,t);i=i||$e(u,d)});let s=n.syncPointTree_.get(t);s?i=i||$e(s,C()):(s=new Ac,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,o=r?new He(i,!0,!1):null,a=vi(n.pendingWriteTree_,e._path),c=Rc(s,e,a,r?o.getNode():y.EMPTY_NODE,r);return dp(c)}function Dt(n,e){return xc(e,n.syncPointTree_,null,vi(n.pendingWriteTree_,C()))}function xc(n,e,t,i){if(S(n.path))return Fc(n,e,t,i);{const s=e.get(C());t==null&&s!=null&&(t=$e(s,C()));let r=[];const o=E(n.path),a=n.operationForChild(o),c=e.children.get(o);if(c&&a){const l=t?t.getImmediateChild(o):null,u=Sc(i,o);r=r.concat(xc(a,c,l,u))}return s&&(r=r.concat(sr(s,n,i,t))),r}}function Fc(n,e,t,i){const s=e.get(C());t==null&&s!=null&&(t=$e(s,C()));let r=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,l=Sc(i,o),u=n.operationForChild(o);u&&(r=r.concat(Fc(u,a,c,l)))}),s&&(r=r.concat(sr(s,n,i,t))),r}function Uc(n,e){const t=e.query,i=on(n,t);return{hashFn:()=>(up(e)||y.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Tp(n,t._path,i):Cp(n,t._path);{const r=Sh(s,t);return ti(n,t,null,r)}}}}function on(n,e){const t=bi(e);return n.queryToTagMap.get(t)}function bi(n){return n._path.toString()+"$"+n._queryIdentifier}function or(n,e){return n.tagToQueryMap.get(e)}function ar(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new k(n.substr(0,e))}}function cr(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=vi(n.pendingWriteTree_,e);return sr(i,t,s,null)}function Ap(n){return n.fold((e,t,i)=>{if(t&&We(t))return[yi(t)];{let s=[];return t&&(s=Pc(t)),H(i,(r,o)=>{s=s.concat(o)}),s}})}function Yt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(wp())(n._repo,n._path):n}function Rp(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=bi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Pp(){return Ep++}function Op(n,e,t){const i=e._path,s=on(n,e),r=Uc(n,t),o=n.listenProvider_.startListening(Yt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!We(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((l,u,d)=>{if(!S(l)&&u&&We(u))return[yi(u).query];{let h=[];return u&&(h=h.concat(Pc(u).map(f=>f.query))),H(d,(f,m)=>{h=h.concat(m)}),h}});for(let l=0;l<c.length;++l){const u=c[l];n.listenProvider_.stopListening(Yt(u),on(n,u))}}return o}/**
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
 */class lr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new lr(t)}node(){return this.node_}}class ur{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=L(this.path_,e);return new ur(this.syncTree_,t)}node(){return rr(this.syncTree_,this.path_)}}const Lp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Fo=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Dp(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Mp(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Dp=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Mp=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Bc=function(n,e,t,i){return dr(e,new ur(t,n),i)},$c=function(n,e,t){return dr(n,new lr(e),t)};function dr(n,e,t){const i=n.getPriority().val(),s=Fo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Fo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new U(a,x(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new U(s))),o.forEachChild(D,(a,c)=>{const l=dr(c,e.getImmediateChild(a),t);l!==c&&(r=r.updateImmediateChild(a,l))}),r}}/**
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
 */class hr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function fr(n,e){let t=e instanceof k?e:new k(e),i=n,s=E(t);for(;s!==null;){const r=It(i.node.children,s)||{children:{},childCount:0};i=new hr(s,i,r),t=A(t),s=E(t)}return i}function Mt(n){return n.node.value}function Vc(n,e){n.node.value=e,Es(n)}function Hc(n){return n.node.childCount>0}function xp(n){return Mt(n)===void 0&&!Hc(n)}function wi(n,e){H(n.node.children,(t,i)=>{e(new hr(t,n,i))})}function Wc(n,e,t,i){t&&e(n),wi(n,s=>{Wc(s,e,!0)})}function Fp(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function _n(n){return new k(n.parent===null?n.name:_n(n.parent)+"/"+n.name)}function Es(n){n.parent!==null&&Up(n.parent,n.name,n)}function Up(n,e,t){const i=xp(t),s=me(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Es(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Es(n))}/**
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
 */const Bp=/[\[\].#$\/\u0000-\u001F\u007F]/,$p=/[\[\].#$\u0000-\u001F\u007F]/,zi=10*1024*1024,pr=function(n){return typeof n=="string"&&n.length!==0&&!Bp.test(n)},qc=function(n){return typeof n=="string"&&n.length!==0&&!$p.test(n)},Vp=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),qc(n)},Hp=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Vs(n)||n&&typeof n=="object"&&me(n,".sv")},Wp=function(n,e,t,i){Ei(hi(n,"value"),e,t)},Ei=function(n,e,t){const i=t instanceof k?new rf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+je(i));if(typeof e=="function")throw new Error(n+"contains a function "+je(i)+" with contents = "+e.toString());if(Vs(e))throw new Error(n+"contains "+e.toString()+" "+je(i));if(typeof e=="string"&&e.length>zi/3&&fi(e)>zi)throw new Error(n+"contains a string greater than "+zi+" utf8 bytes "+je(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(H(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!pr(o)))throw new Error(n+" contains an invalid key ("+o+") "+je(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);of(i,o),Ei(n,a,i),af(i)}),s&&r)throw new Error(n+' contains ".value" child '+je(i)+" in addition to actual children.")}},qp=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=en(i);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!pr(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(sf);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&J(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},jp=function(n,e,t,i){const s=hi(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];H(e,(o,a)=>{const c=new k(o);if(Ei(s,a,L(t,c)),Gs(c)===".priority"&&!Hp(a))throw new Error(s+"contains an invalid value for '"+c.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(c)}),qp(s,r)},jc=function(n,e,t,i){if(!qc(t))throw new Error(hi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gp=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jc(n,e,t)},Gc=function(n,e){if(E(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},zp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!pr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Vp(t))throw new Error(hi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Kp{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ii(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!zs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function zc(n,e,t){Ii(n,t),Kc(n,i=>zs(i,e))}function Z(n,e,t){Ii(n,t),Kc(n,i=>J(i,e)||J(e,i))}function Kc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Yp(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Yp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();jt&&$("event: "+t.toString()),Lt(i)}}}/**
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
 */const Jp="repo_interrupt",Qp=25;class Xp{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=zn(),this.transactionQueueTree_=new hr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zp(n,e,t){if(n.stats_=qs(n.repoInfo_),n.forceRestClient_||Nh())n.server_=new Gn(n.repoInfo_,(i,s,r,o)=>{Uo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Bo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{F(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ie(n.repoInfo_,e,(i,s,r,o)=>{Uo(n,i,s,r,o)},i=>{Bo(n,i)},i=>{tm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Lh(n.repoInfo_,()=>new Lf(n.stats_,n.server_)),n.infoData_=new Nf,n.infoSyncTree_=new xo({startListening:(i,s,r,o)=>{let a=[];const c=n.infoData_.getNode(i._path);return c.isEmpty()||(a=gn(n.infoSyncTree_,i._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),mr(n,"connected",!1),n.serverSyncTree_=new xo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,c)=>{const l=o(a,c);Z(n.eventQueue_,i._path,l)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function em(n){const t=n.infoData_.getNode(new k(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Si(n){return Lp({timestamp:em(n)})}function Uo(n,e,t,i,s){n.dataUpdateCount++;const r=new k(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const c=$n(t,l=>x(l));o=kp(n.serverSyncTree_,r,c,s)}else{const c=x(t);o=Mc(n.serverSyncTree_,r,c,s)}else if(i){const c=$n(t,l=>x(l));o=Sp(n.serverSyncTree_,r,c)}else{const c=x(t);o=gn(n.serverSyncTree_,r,c)}let a=r;o.length>0&&(a=Nt(n,r)),Z(n.eventQueue_,a,o)}function Bo(n,e){mr(n,"connected",e),e===!1&&rm(n)}function tm(n,e){H(e,(t,i)=>{mr(n,t,i)})}function mr(n,e,t){const i=new k("/.info/"+e),s=x(t);n.infoData_.updateSnapshot(i,s);const r=gn(n.infoSyncTree_,i,s);Z(n.eventQueue_,i,r)}function gr(n){return n.nextWriteId_++}function nm(n,e,t){const i=Np(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=x(s).withIndex(e._queryParams.getIndex());ws(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=gn(n.serverSyncTree_,e._path,r);else{const a=on(n.serverSyncTree_,e);o=Mc(n.serverSyncTree_,e._path,r,a)}return Z(n.eventQueue_,e._path,o),ti(n.serverSyncTree_,e,t,null,!0),r},s=>(vn(n,"get for query "+F(e)+" failed: "+s),Promise.reject(new Error(s))))}function im(n,e,t,i,s){vn(n,"set",{path:e.toString(),value:t,priority:i});const r=Si(n),o=x(t,i),a=rr(n.serverSyncTree_,e),c=$c(o,a,r),l=gr(n),u=Dc(n.serverSyncTree_,e,c,l,!0);Ii(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const m=h==="ok";m||j("set at "+e+" failed: "+h);const _=Fe(n.serverSyncTree_,l,!m);Z(n.eventQueue_,e,_),Is(n,s,h,f)});const d=vr(n,e);Nt(n,d),Z(n.eventQueue_,d,[])}function sm(n,e,t,i){vn(n,"update",{path:e.toString(),value:t});let s=!0;const r=Si(n),o={};if(H(t,(a,c)=>{s=!1,o[a]=Bc(L(e,a),x(c),n.serverSyncTree_,r)}),s)$("update() called with empty data.  Don't do anything."),Is(n,i,"ok",void 0);else{const a=gr(n),c=Ip(n.serverSyncTree_,e,o,a);Ii(n.eventQueue_,c),n.server_.merge(e.toString(),t,(l,u)=>{const d=l==="ok";d||j("update at "+e+" failed: "+l);const h=Fe(n.serverSyncTree_,a,!d),f=h.length>0?Nt(n,e):e;Z(n.eventQueue_,f,h),Is(n,i,l,u)}),H(t,l=>{const u=vr(n,L(e,l));Nt(n,u)}),Z(n.eventQueue_,e,[])}}function rm(n){vn(n,"onDisconnectEvents");const e=Si(n),t=zn();ms(n.onDisconnect_,C(),(s,r)=>{const o=Bc(s,r,n.serverSyncTree_,e);yc(t,s,o)});let i=[];ms(t,C(),(s,r)=>{i=i.concat(gn(n.serverSyncTree_,s,r));const o=vr(n,s);Nt(n,o)}),n.onDisconnect_=zn(),Z(n.eventQueue_,C(),i)}function om(n,e,t){let i;E(e._path)===".info"?i=ws(n.infoSyncTree_,e,t):i=ws(n.serverSyncTree_,e,t),zc(n.eventQueue_,e._path,i)}function am(n,e,t){let i;E(e._path)===".info"?i=ti(n.infoSyncTree_,e,t):i=ti(n.serverSyncTree_,e,t),zc(n.eventQueue_,e._path,i)}function cm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Jp)}function vn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),$(t,...e)}function Is(n,e,t,i){e&&Lt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Yc(n,e,t){return rr(n.serverSyncTree_,e,t)||y.EMPTY_NODE}function _r(n,e=n.transactionQueueTree_){if(e||Ci(n,e),Mt(e)){const t=Qc(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&lm(n,_n(e),t)}else Hc(e)&&wi(e,t=>{_r(n,t)})}function lm(n,e,t){const i=t.map(l=>l.currentWriteId),s=Yc(n,e,i);let r=s;const o=s.hash();for(let l=0;l<t.length;l++){const u=t[l];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=q(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),c=e;n.server_.put(c.toString(),a,l=>{vn(n,"transaction put response",{path:c.toString(),status:l});let u=[];if(l==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(Fe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Ci(n,fr(n.transactionQueueTree_,e)),_r(n,n.transactionQueueTree_),Z(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Lt(d[h])}else{if(l==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{j("transaction at "+c.toString()+" failed: "+l);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=l}Nt(n,e)}},o)}function Nt(n,e){const t=Jc(n,e),i=_n(t),s=Qc(n,t);return um(n,s,i),i}function um(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],l=q(t,c.path);let u=!1,d;if(p(l!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)u=!0,d=c.abortReason,s=s.concat(Fe(n.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=Qp)u=!0,d="maxretry",s=s.concat(Fe(n.serverSyncTree_,c.currentWriteId,!0));else{const h=Yc(n,c.path,o);c.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){Ei("transaction failed: Data returned ",f,c.path);let m=x(f);typeof f=="object"&&f!=null&&me(f,".priority")||(m=m.updatePriority(h.getPriority()));const b=c.currentWriteId,g=Si(n),w=$c(m,h,g);c.currentOutputSnapshotRaw=m,c.currentOutputSnapshotResolved=w,c.currentWriteId=gr(n),o.splice(o.indexOf(b),1),s=s.concat(Dc(n.serverSyncTree_,c.path,w,c.currentWriteId,c.applyLocally)),s=s.concat(Fe(n.serverSyncTree_,b,!0))}else u=!0,d="nodata",s=s.concat(Fe(n.serverSyncTree_,c.currentWriteId,!0))}Z(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ci(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Lt(i[a]);_r(n,n.transactionQueueTree_)}function Jc(n,e){let t,i=n.transactionQueueTree_;for(t=E(e);t!==null&&Mt(i)===void 0;)i=fr(i,t),e=A(e),t=E(e);return i}function Qc(n,e){const t=[];return Xc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Xc(n,e,t){const i=Mt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);wi(e,s=>{Xc(n,s,t)})}function Ci(n,e){const t=Mt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Vc(e,t.length>0?t:void 0)}wi(e,i=>{Ci(n,i)})}function vr(n,e){const t=_n(Jc(n,e)),i=fr(n.transactionQueueTree_,e);return Fp(i,s=>{Ki(n,s)}),Ki(n,i),Wc(i,s=>{Ki(n,s)}),t}function Ki(n,e){const t=Mt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Fe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Vc(e,void 0):t.length=r+1,Z(n.eventQueue_,_n(e),s);for(let o=0;o<i.length;o++)Lt(i[o])}}/**
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
 */function dm(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function hm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):j(`Invalid query segment '${t}' in query '${n}'`)}return e}const $o=function(n,e){const t=fm(n),i=t.namespace;t.domain==="firebase.com"&&Te(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Te("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||yh();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new nc(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new k(t.pathString)}},fm=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",c=443;if(typeof n=="string"){let l=n.indexOf("//");l>=0&&(a=n.substring(0,l-1),n=n.substring(l+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=dm(n.substring(u,d)));const h=hm(n.substring(Math.min(n.length,d)));l=e.indexOf(":"),l>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(l+1),10)):l=e.length;const f=e.slice(0,l);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:c,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class pm{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+F(this.snapshot.exportVal())}}class mm{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Zc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return S(this._path)?null:Gs(this._path)}get ref(){return new Ae(this._repo,this._path)}get _queryIdentifier(){const e=To(this._queryParams),t=Hs(e);return t==="{}"?"default":t}get _queryObject(){return To(this._queryParams)}isEqual(e){if(e=P(e),!(e instanceof yr))return!1;const t=this._repo===e._repo,i=zs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+nf(this._path)}}class Ae extends yr{constructor(e,t){super(e,t,new Qs,!1)}get parent(){const e=dc(this._path);return e===null?null:new Ae(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class an{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new k(e),i=Ss(this.ref,e);return new an(this._node.getChild(t),i,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new an(s,Ss(this.ref,i),D)))}hasChild(e){const t=new k(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function O(n,e){return n=P(n),n._checkNotDeleted("ref"),e!==void 0?Ss(n._root,e):n._root}function Ss(n,e){return n=P(n),E(n._path)===null?Gp("child","path",e):jc("child","path",e),new Ae(n._repo,L(n._path,e))}function gm(n){return Gc("remove",n._path),le(n,null)}function le(n,e){n=P(n),Gc("set",n._path),Wp("set",e,n._path);const t=new hn;return im(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function br(n,e){jp("update",e,n._path);const t=new hn;return sm(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function Y(n){n=P(n);const e=new Zc(()=>{}),t=new Ti(e);return nm(n._repo,n,t).then(i=>new an(i,new Ae(n._repo,n._path),n._queryParams.getIndex()))}class Ti{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new pm("value",this,new an(e.snapshotNode,new Ae(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new mm(this,e,t):null}matches(e){return e instanceof Ti?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function _m(n,e,t,i,s){const r=new Zc(t,void 0),o=new Ti(r);return om(n._repo,n,o),()=>am(n._repo,n,o)}function el(n,e,t,i){return _m(n,"value",e)}mp(Ae);bp(Ae);/**
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
 */const vm="FIREBASE_DATABASE_EMULATOR_HOST",Cs={};let ym=!1;function bm(n,e,t,i){n.repoInfo_=new nc(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function wm(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Te("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),$("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=$o(r,s),a=o.repoInfo,c;typeof process<"u"&&ao&&(c=ao[vm]),c?(r=`http://${c}?ns=${a.namespace}`,o=$o(r,s),a=o.repoInfo):o.repoInfo.secure;const l=new Rh(n.name,n.options,e);zp("Invalid Firebase Database URL",o),S(o.path)||Te("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Im(a,n,l,new Ah(n.name,t));return new Sm(u,n)}function Em(n,e){const t=Cs[e];(!t||t[n.key]!==n)&&Te(`Database ${e}(${n.repoInfo_}) has already been deleted.`),cm(n),delete t[n.key]}function Im(n,e,t,i){let s=Cs[e.name];s||(s={},Cs[e.name]=s);let r=s[n.toURLString()];return r&&Te("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xp(n,ym,t,i),s[n.toURLString()]=r,r}class Sm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ae(this._repo,C())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Em(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Te("Cannot call "+e+" on a deleted database.")}}function Ye(n=mi(),e){const t=ct(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Ra("database");i&&Cm(t,...i)}return t}function Cm(n,e,t,i={}){n=P(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Te("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Te('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Pn(Pn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:ju(i.mockUserToken,n.app.options.projectId);r=new Pn(o)}bm(s,e,t,r)}/**
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
 */function Tm(n){fh(Ot),ce(new X("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return wm(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),K(co,lo,n),K(co,lo,"esm2017")}Ie.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ie.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Tm();function On(){return window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0||document.referrer.startsWith("android-app://")}function tl(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}const Tn="protexhome_pwa_installed_at",km=30*24*60*60*1e3;class Nm{constructor(){this.deferredPrompt=null,this.isOnline=navigator.onLine,this.init()}init(){this.setupOnlineStatus(),this.setupInstallPrompt(),this.checkPWAStatus()}setupOnlineStatus(){window.addEventListener("online",()=>{this.isOnline=!0,document.body.classList.remove("offline"),this.showToast("Conexión restaurada","success")}),window.addEventListener("offline",()=>{this.isOnline=!1,document.body.classList.add("offline"),this.showToast("Sin conexión a internet","error")}),navigator.onLine||document.body.classList.add("offline")}setupInstallPrompt(){window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),this.deferredPrompt=e,localStorage.removeItem(Tn),this.showInstallButton()}),setTimeout(()=>this.showInstallButton(),1500),window.addEventListener("appinstalled",()=>{var e;console.log("PWA instalada exitosamente"),localStorage.setItem(Tn,String(Date.now())),this.deferredPrompt=null,this.hideInstallButton(),(e=document.getElementById("ios-install-banner"))==null||e.remove(),typeof gtag<"u"&&gtag("event","pwa_install",{event_category:"PWA",event_label:"Instalación completada"})})}showInstallButton(){if(On()||this.wasRecentlyInstalled()||document.getElementById("pwa-install-btn"))return;const e=document.createElement("button");e.id="pwa-install-btn",e.className="pwa-install-btn",e.type="button",e.setAttribute("aria-label","Instalar ProtexHome"),e.innerHTML=`
      <span class="material-symbols-outlined" aria-hidden="true">download</span>
      <span>Instalar ProtexHome</span>
    `,e.addEventListener("click",async()=>{await this.installPWA(),!this.deferredPrompt&&document.body.contains(e)&&(e.querySelector("span:last-child").textContent="Ver cómo instalar")}),document.body.appendChild(e),setTimeout(()=>e.classList.add("show"),100)}hideInstallButton(){const e=document.getElementById("pwa-install-btn");e&&(e.classList.remove("show"),setTimeout(()=>e.remove(),300))}async installPWA(){if(!this.deferredPrompt){this.showInstallInstructions();return}const e=this.deferredPrompt;this.deferredPrompt=null;try{await e.prompt();const{outcome:t}=await e.userChoice;console.log(`Usuario: ${t==="accepted"?"Aceptó":"Rechazó"} la instalación`),t==="dismissed"&&this.showToast("Puedes instalar ProtexHome más tarde desde el menú del navegador.","info")}catch(t){console.error("No se pudo iniciar la instalación de ProtexHome:",t),this.showToast("No se pudo iniciar la instalación. Intenta desde el menú del navegador.","error")}finally{On()&&this.hideInstallButton()}}showInstallInstructions(){const e=tl(),t=/Android/.test(navigator.userAgent);let i="";e?i='Toca el botón Compartir y luego "Agregar a inicio"':t?i='Toca el menú (⋮) y luego "Instalar aplicación"':i="Usa el menú de tu navegador para instalar la app",this.showToast(i,"info")}checkPWAStatus(){const e=window.matchMedia("(display-mode: standalone)"),t=()=>{var s;const i=On();document.body.classList.toggle("pwa-standalone",i),i&&(this.hideInstallButton(),(s=document.getElementById("ios-install-banner"))==null||s.remove())};t(),typeof e.addEventListener=="function"?e.addEventListener("change",t):e.addListener(t)}wasRecentlyInstalled(){const e=Number(localStorage.getItem(Tn));return!Number.isFinite(e)||e<=0?!1:Date.now()-e>km?(localStorage.removeItem(Tn),!1):!0}showToast(e,t="info"){const i=document.createElement("div");i.className=`toast toast-${t}`;const s={success:"check_circle",error:"error",info:"info"};i.innerHTML=`
      <span class="material-symbols-outlined">${s[t]||"info"}</span>
      <span>${e}</span>
    `,document.body.appendChild(i),setTimeout(()=>i.classList.add("show"),10),setTimeout(()=>{i.classList.remove("show"),setTimeout(()=>i.remove(),300)},3e3)}}const Am=tl(),Rm=On();var Sa;if(Am&&!Rm){const n=document.createElement("div");n.id="ios-install-banner",n.setAttribute("role","status"),n.setAttribute("aria-live","polite"),n.innerHTML=`
    <span class="material-symbols-outlined ios-install-icon" aria-hidden="true">ios_share</span>
    <div class="ios-install-copy">
      <strong>Instalar ProtexHome</strong>
      <span>Toca <strong>Compartir</strong> y luego <strong>Agregar a pantalla de inicio</strong>.</span>
    </div>
    <button class="ios-install-dismiss" type="button" aria-label="Cerrar instrucciones de instalación">
      <span aria-hidden="true">×</span>
      </button>
  `,document.body.appendChild(n),(Sa=n.querySelector(".ios-install-dismiss"))==null||Sa.addEventListener("click",()=>n.remove())}var Pm="firebase",Om="10.14.1";/**
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
 */K(Pm,Om,"app");function wr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function nl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lm=nl,il=new at("auth","Firebase",nl());/**
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
 */const ni=new Bs("@firebase/auth");function Dm(n,...e){ni.logLevel<=T.WARN&&ni.warn(`Auth (${Ot}): ${n}`,...e)}function Ln(n,...e){ni.logLevel<=T.ERROR&&ni.error(`Auth (${Ot}): ${n}`,...e)}/**
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
 */function ee(n,...e){throw Ir(n,...e)}function ae(n,...e){return Ir(n,...e)}function Er(n,e,t){const i=Object.assign(Object.assign({},Lm()),{[e]:t});return new at("auth","Firebase",i).create(e,{appName:n.name})}function Se(n){return Er(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mm(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&ee(n,"argument-error"),Er(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ir(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return il.create(n,...e)}function v(n,e,...t){if(!n)throw Ir(e,...t)}function ye(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ln(e),new Error(e)}function ke(n,e){n||ye(e)}/**
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
 */function Ts(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xm(){return Vo()==="http:"||Vo()==="https:"}function Vo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Fm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xm()||zu()||"connection"in navigator)?navigator.onLine:!0}function Um(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class yn{constructor(e,t){this.shortDelay=e,this.longDelay=t,ke(t>e,"Short delay should be less than long delay!"),this.isMobile=Us()||La()}get(){return Fm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Sr(n,e){ke(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class sl{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ye("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ye("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ye("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const $m=new yn(3e4,6e4);function Re(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pe(n,e,t,i,s={}){return rl(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Pt(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const l=Object.assign({method:e,headers:c},r);return Gu()||(l.referrerPolicy="no-referrer"),sl.fetch()(ol(n,n.config.apiHost,t,a),l)})}async function rl(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bm),e);try{const s=new Hm(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw kn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw kn(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw kn(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw kn(n,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Er(n,u,l);ee(n,u)}}catch(s){if(s instanceof pe)throw s;ee(n,"network-request-failed",{message:String(s)})}}async function bn(n,e,t,i,s={}){const r=await Pe(n,e,t,i,s);return"mfaPendingCredential"in r&&ee(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ol(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Sr(n.config,s):`${n.config.apiScheme}://${s}`}function Vm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ae(this.auth,"network-request-failed")),$m.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ae(n,e,i);return s.customData._tokenResponse=t,s}function Ho(n){return n!==void 0&&n.enterprise!==void 0}class Wm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Vm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qm(n,e){return Pe(n,"GET","/v2/recaptchaConfig",Re(n,e))}/**
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
 */async function jm(n,e){return Pe(n,"POST","/v1/accounts:delete",e)}async function al(n,e){return Pe(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Jt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gm(n,e=!1){const t=P(n),i=await t.getIdToken(e),s=Cr(i);v(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Jt(Yi(s.auth_time)),issuedAtTime:Jt(Yi(s.iat)),expirationTime:Jt(Yi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yi(n){return Number(n)*1e3}function Cr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ln("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bn(t);return s?JSON.parse(s):(Ln("Failed to decode base64 JWT payload"),null)}catch(s){return Ln("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wo(n){const e=Cr(n);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cn(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof pe&&zm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function zm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Km{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ks{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Jt(this.lastLoginAt),this.creationTime=Jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ii(n){var e;const t=n.auth,i=await n.getIdToken(),s=await cn(n,al(t,{idToken:i}));v(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?cl(r.providerUserInfo):[],a=Jm(n.providerData,o),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ks(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Ym(n){const e=P(n);await ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jm(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function cl(n){return n.map(e=>{var{providerId:t}=e,i=wr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Qm(n,e){const t=await rl(n,{},async()=>{const i=Pt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=ol(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",sl.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xm(n,e){return Pe(n,"POST","/v2/accounts:revokeToken",Re(n,e))}/**
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
 */class vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wo(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){v(e.length!==0,"internal-error");const t=Wo(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(v(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Qm(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new vt;return i&&(v(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(v(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(v(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vt,this.toJSON())}_performRefresh(){return ye("not implemented")}}/**
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
 */function Le(n,e){v(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class be{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=wr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Km(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ks(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await cn(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gm(this,e)}reload(){return Ym(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new be(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await ii(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(se(this.auth.app))return Promise.reject(Se(this.auth));const e=await this.getIdToken();return await cn(this,jm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,c,l,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,g=(l=t.createdAt)!==null&&l!==void 0?l:void 0,w=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:M,isAnonymous:dt,providerData:Di,stsTokenManager:Kr}=t;v(R&&Kr,e,"internal-error");const Nu=vt.fromJSON(this.name,Kr);v(typeof R=="string",e,"internal-error"),Le(d,e.name),Le(h,e.name),v(typeof M=="boolean",e,"internal-error"),v(typeof dt=="boolean",e,"internal-error"),Le(f,e.name),Le(m,e.name),Le(_,e.name),Le(b,e.name),Le(g,e.name),Le(w,e.name);const Mi=new be({uid:R,auth:e,email:h,emailVerified:M,displayName:d,isAnonymous:dt,photoURL:m,phoneNumber:f,tenantId:_,stsTokenManager:Nu,createdAt:g,lastLoginAt:w});return Di&&Array.isArray(Di)&&(Mi.providerData=Di.map(Au=>Object.assign({},Au))),b&&(Mi._redirectEventId=b),Mi}static async _fromIdTokenResponse(e,t,i=!1){const s=new vt;s.updateFromServerResponse(t);const r=new be({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ii(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];v(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?cl(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new vt;a.updateFromIdToken(i);const c=new be({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new ks(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(c,l),c}}/**
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
 */const qo=new Map;function we(n){ke(n instanceof Function,"Expected a class definition");let e=qo.get(n);return e?(ke(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,qo.set(n,e),e)}/**
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
 */class ll{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ll.type="NONE";const jo=ll;/**
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
 */function Dn(n,e,t){return`firebase:${n}:${e}:${t}`}class yt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Dn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Dn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?be._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new yt(we(jo),e,i);const s=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||we(jo);const o=Dn(i,e.config.apiKey,e.name);let a=null;for(const l of t)try{const u=await l._get(o);if(u){const d=be._fromJSON(e,u);l!==r&&(a=d),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new yt(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new yt(r,e,i))}}/**
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
 */function Go(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ul(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ml(e))return"Blackberry";if(gl(e))return"Webos";if(dl(e))return"Safari";if((e.includes("chrome/")||hl(e))&&!e.includes("edge/"))return"Chrome";if(pl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ul(n=G()){return/firefox\//i.test(n)}function dl(n=G()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hl(n=G()){return/crios\//i.test(n)}function fl(n=G()){return/iemobile/i.test(n)}function pl(n=G()){return/android/i.test(n)}function ml(n=G()){return/blackberry/i.test(n)}function gl(n=G()){return/webos/i.test(n)}function Tr(n=G()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Zm(n=G()){var e;return Tr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eg(){return Ku()&&document.documentMode===10}function _l(n=G()){return Tr(n)||pl(n)||gl(n)||ml(n)||/windows phone/i.test(n)||fl(n)}/**
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
 */function vl(n,e=[]){let t;switch(n){case"Browser":t=Go(G());break;case"Worker":t=`${Go(G())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ot}/${i}`}/**
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
 */class tg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function ng(n,e={}){return Pe(n,"GET","/v2/passwordPolicy",Re(n,e))}/**
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
 */const ig=6;class sg{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:ig,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(i=c.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsUppercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class rg{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zo(this),this.idTokenSubscription=new zo(this),this.beforeStateQueue=new tg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=il,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=we(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await yt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await al(this,{idToken:e}),i=await be._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(se(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Um()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(se(this.app))return Promise.reject(Se(this));const t=e?P(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return se(this.app)?Promise.reject(Se(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return se(this.app)?Promise.reject(Se(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(we(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ng(this),t=new sg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new at("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Xm(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&we(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await yt.create(this,[we(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(v(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,i,s);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Dm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Oe(n){return P(n)}class zo{constructor(e){this.auth=e,this.observer=null,this.addObserver=id(t=>this.observer=t)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ki={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function og(n){ki=n}function yl(n){return ki.loadJS(n)}function ag(){return ki.recaptchaEnterpriseScript}function cg(){return ki.gapiScript}function lg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const ug="recaptcha-enterprise",dg="NO_RECAPTCHA";class hg{constructor(e){this.type=ug,this.auth=Oe(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{qm(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Wm(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;Ho(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(dg)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Ho(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ag();c.length!==0&&(c+=a),yl(c).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ko(n,e,t,i=!1){const s=new hg(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function si(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ko(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ko(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function fg(n,e){const t=ct(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Vn(r,e??{}))return s;ee(s,"already-initialized")}return t.initialize({options:e})}function pg(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(we);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function mg(n,e,t){const i=Oe(n);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=bl(e),{host:o,port:a}=gg(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),_g()}function bl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function gg(n){const e=bl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Yo(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Yo(o)}}}function Yo(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function _g(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class kr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ye("not implemented")}_getIdTokenResponse(e){return ye("not implemented")}_linkToIdToken(e,t){return ye("not implemented")}_getReauthenticationResolver(e){return ye("not implemented")}}async function vg(n,e){return Pe(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function yg(n,e){return bn(n,"POST","/v1/accounts:signInWithPassword",Re(n,e))}async function wl(n,e){return Pe(n,"POST","/v1/accounts:sendOobCode",Re(n,e))}async function bg(n,e){return wl(n,e)}async function wg(n,e){return wl(n,e)}/**
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
 */async function Eg(n,e){return bn(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}async function Ig(n,e){return bn(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}/**
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
 */class ln extends kr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ln(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new ln(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,t,"signInWithPassword",yg);case"emailLink":return Eg(e,{email:this._email,oobCode:this._password});default:ee(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return si(e,i,"signUpPassword",vg);case"emailLink":return Ig(e,{idToken:t,email:this._email,oobCode:this._password});default:ee(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function bt(n,e){return bn(n,"POST","/v1/accounts:signInWithIdp",Re(n,e))}/**
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
 */const Sg="http://localhost";class Ze extends kr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ze(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ee("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=wr(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Ze(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return bt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,bt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,bt(e,t)}buildRequest(){const e={requestUri:Sg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pt(t)}return e}}/**
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
 */function Cg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tg(n){const e=Wt(qt(n)).link,t=e?Wt(qt(e)).deep_link_id:null,i=Wt(qt(n)).deep_link_id;return(i?Wt(qt(i)).link:null)||i||t||e||n}class Nr{constructor(e){var t,i,s,r,o,a;const c=Wt(qt(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,d=Cg((s=c.mode)!==null&&s!==void 0?s:null);v(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Tg(e);try{return new Nr(t)}catch{return null}}}/**
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
 */class xt{constructor(){this.providerId=xt.PROVIDER_ID}static credential(e,t){return ln._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Nr.parseLink(t);return v(i,"argument-error"),ln._fromEmailAndCode(e,i.code,i.tenantId)}}xt.PROVIDER_ID="password";xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ar{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wn extends Ar{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class De extends wn{constructor(){super("facebook.com")}static credential(e){return Ze._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
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
 */class _e extends wn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ze._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return _e.credential(t,i)}catch{return null}}}_e.GOOGLE_SIGN_IN_METHOD="google.com";_e.PROVIDER_ID="google.com";/**
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
 */class Me extends wn{constructor(){super("github.com")}static credential(e){return Ze._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
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
 */class xe extends wn{constructor(){super("twitter.com")}static credential(e,t){return Ze._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return xe.credential(t,i)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
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
 */async function kg(n,e){return bn(n,"POST","/v1/accounts:signUp",Re(n,e))}/**
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
 */class et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await be._fromIdTokenResponse(e,i,s),o=Jo(i);return new et({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Jo(i);return new et({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Jo(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ri extends pe{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ri.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ri(e,t,i,s)}}function El(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ri._fromErrorAndOperation(n,r,e,i):r})}async function Ng(n,e,t=!1){const i=await cn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return et._forOperation(n,"link",i)}/**
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
 */async function Ag(n,e,t=!1){const{auth:i}=n;if(se(i.app))return Promise.reject(Se(i));const s="reauthenticate";try{const r=await cn(n,El(i,s,e,n),t);v(r.idToken,i,"internal-error");const o=Cr(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(n.uid===a,i,"user-mismatch"),et._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&ee(i,"user-mismatch"),r}}/**
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
 */async function Il(n,e,t=!1){if(se(n.app))return Promise.reject(Se(n));const i="signIn",s=await El(n,i,e),r=await et._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Rg(n,e){return Il(Oe(n),e)}/**
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
 */function Sl(n,e,t){var i;v(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),v(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(v(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(v(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Cl(n){const e=Oe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pg(n,e,t){const i=Oe(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Sl(i,s,t),await si(i,s,"getOobCode",wg)}async function Og(n,e,t){if(se(n.app))return Promise.reject(Se(n));const i=Oe(n),o=await si(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kg).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Cl(n),c}),a=await et._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(a.user),a}function Lg(n,e,t){return se(n.app)?Promise.reject(Se(n)):Rg(P(n),xt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Cl(n),i})}async function Tl(n,e){const t=P(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Sl(t.auth,s,e);const{email:r}=await bg(t.auth,s);r!==n.email&&await n.reload()}/**
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
 */function kl(n,e){return P(n).setPersistence(e)}function Dg(n,e,t,i){return P(n).onIdTokenChanged(e,t,i)}function Mg(n,e,t){return P(n).beforeAuthStateChanged(e,t)}function xg(n,e,t,i){return P(n).onAuthStateChanged(e,t,i)}function Rr(n){return P(n).signOut()}async function Nl(n){return P(n).delete()}const oi="__sak";/**
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
 */class Al{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oi,"1"),this.storage.removeItem(oi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Fg=1e3,Ug=10;class Rl extends Al{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=_l(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);eg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Ug):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Fg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rl.type="LOCAL";const Pr=Rl;/**
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
 */class Pl extends Al{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pl.type="SESSION";const Or=Pl;/**
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
 */function Bg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ni{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ni(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(t.origin,r)),c=await Bg(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ni.receivers=[];/**
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
 */function Lr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class $g{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=Lr("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function de(){return window}function Vg(n){de().location.href=n}/**
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
 */function Ol(){return typeof de().WorkerGlobalScope<"u"&&typeof de().importScripts=="function"}async function Hg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function qg(){return Ol()?self:null}/**
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
 */const Ll="firebaseLocalStorageDb",jg=1,ai="firebaseLocalStorage",Dl="fbase_key";class En{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ai(n,e){return n.transaction([ai],e?"readwrite":"readonly").objectStore(ai)}function Gg(){const n=indexedDB.deleteDatabase(Ll);return new En(n).toPromise()}function Ns(){const n=indexedDB.open(Ll,jg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(ai,{keyPath:Dl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(ai)?e(i):(i.close(),await Gg(),e(await Ns()))})})}async function Qo(n,e,t){const i=Ai(n,!0).put({[Dl]:e,value:t});return new En(i).toPromise()}async function zg(n,e){const t=Ai(n,!1).get(e),i=await new En(t).toPromise();return i===void 0?null:i.value}function Xo(n,e){const t=Ai(n,!0).delete(e);return new En(t).toPromise()}const Kg=800,Yg=3;class Ml{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ns(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Yg)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ol()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ni._getInstance(qg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hg(),!this.activeServiceWorker)return;this.sender=new $g(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ns();return await Qo(e,oi,"1"),await Xo(e,oi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Qo(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>zg(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Xo(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ai(s,!1).getAll();return new En(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ml.type="LOCAL";const Jg=Ml;new yn(3e4,6e4);/**
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
 */function xl(n,e){return e?we(e):(v(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Dr extends kr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return bt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return bt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return bt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qg(n){return Il(n.auth,new Dr(n),n.bypassAuthState)}function Xg(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),Ag(t,new Dr(n),n.bypassAuthState)}async function Zg(n){const{auth:e,user:t}=n;return v(t,e,"internal-error"),Ng(t,new Dr(n),n.bypassAuthState)}/**
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
 */class Fl{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qg;case"linkViaPopup":case"linkViaRedirect":return Zg;case"reauthViaPopup":case"reauthViaRedirect":return Xg;default:ee(this.auth,"internal-error")}}resolve(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const e_=new yn(2e3,1e4);async function t_(n,e,t){if(se(n.app))return Promise.reject(ae(n,"operation-not-supported-in-this-environment"));const i=Oe(n);Mm(n,e,Ar);const s=xl(i,t);return new ze(i,"signInViaPopup",e,s).executeNotNull()}class ze extends Fl{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){ke(this.filter.length===1,"Popup operations only handle one event");const e=Lr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e_.get())};e()}}ze.currentPopupAction=null;/**
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
 */const n_="pendingRedirect",Mn=new Map;class i_ extends Fl{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Mn.get(this.auth._key());if(!e){try{const i=await s_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Mn.set(this.auth._key(),e)}return this.bypassAuthState||Mn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s_(n,e){const t=a_(e),i=o_(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function r_(n,e){Mn.set(n._key(),e)}function o_(n){return we(n._redirectPersistence)}function a_(n){return Dn(n_,n.config.apiKey,n.name)}async function c_(n,e,t=!1){if(se(n.app))return Promise.reject(Se(n));const i=Oe(n),s=xl(i,e),o=await new i_(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const l_=10*60*1e3;class u_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!d_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ul(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ae(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zo(e))}saveEventToCache(e){this.cachedEventUids.add(Zo(e)),this.lastProcessedEventTime=Date.now()}}function Zo(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ul({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function d_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ul(n);default:return!1}}/**
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
 */async function h_(n,e={}){return Pe(n,"GET","/v1/projects",e)}/**
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
 */const f_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,p_=/^https?/;async function m_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await h_(n);for(const t of e)try{if(g_(t))return}catch{}ee(n,"unauthorized-domain")}function g_(n){const e=Ts(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!p_.test(t))return!1;if(f_.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const __=new yn(3e4,6e4);function ea(){const n=de().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function v_(n){return new Promise((e,t)=>{var i,s,r;function o(){ea(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ea(),t(ae(n,"network-request-failed"))},timeout:__.get()})}if(!((s=(i=de().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=de().gapi)===null||r===void 0)&&r.load)o();else{const a=lg("iframefcb");return de()[a]=()=>{gapi.load?o():t(ae(n,"network-request-failed"))},yl(`${cg()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw xn=null,e})}let xn=null;function y_(n){return xn=xn||v_(n),xn}/**
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
 */const b_=new yn(5e3,15e3),w_="__/auth/iframe",E_="emulator/auth/iframe",I_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},S_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function C_(n){const e=n.config;v(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sr(e,E_):`https://${n.config.authDomain}/${w_}`,i={apiKey:e.apiKey,appName:n.name,v:Ot},s=S_.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Pt(i).slice(1)}`}async function T_(n){const e=await y_(n),t=de().gapi;return v(t,n,"internal-error"),e.open({where:document.body,url:C_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:I_,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ae(n,"network-request-failed"),a=de().setTimeout(()=>{r(o)},b_.get());function c(){de().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
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
 */const k_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},N_=500,A_=600,R_="_blank",P_="http://localhost";class ta{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O_(n,e,t,i=N_,s=A_){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},k_),{width:i.toString(),height:s.toString(),top:r,left:o}),l=G().toLowerCase();t&&(a=hl(l)?R_:t),ul(l)&&(e=e||P_,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[f,m])=>`${h}${f}=${m},`,"");if(Zm(l)&&a!=="_self")return L_(e||"",a),new ta(null);const d=window.open(e||"",a,u);v(d,n,"popup-blocked");try{d.focus()}catch{}return new ta(d)}function L_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const D_="__/auth/handler",M_="emulator/auth/handler",x_=encodeURIComponent("fac");async function na(n,e,t,i,s,r){v(n.config.authDomain,n,"auth-domain-config-required"),v(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ot,eventId:s};if(e instanceof Ar){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",os(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof wn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await n._getAppCheckToken(),l=c?`#${x_}=${encodeURIComponent(c)}`:"";return`${F_(n)}?${Pt(a).slice(1)}${l}`}function F_({config:n}){return n.emulator?Sr(n,M_):`https://${n.authDomain}/${D_}`}/**
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
 */const Ji="webStorageSupport";class U_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Or,this._completeRedirectFn=c_,this._overrideRedirectResult=r_}async _openPopup(e,t,i,s){var r;ke((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await na(e,t,i,Ts(),s);return O_(e,o,Lr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await na(e,t,i,Ts(),s);return Vg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ke(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await T_(e),i=new u_(e);return t.register("authEvent",s=>(v(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ji,{type:Ji},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ji];o!==void 0&&t(!!o),ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=m_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _l()||dl()||Tr()}}const B_=U_;var ia="@firebase/auth",sa="1.7.9";/**
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
 */class $_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function V_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H_(n){ce(new X("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vl(n)},l=new rg(i,s,r,c);return pg(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ce(new X("auth-internal",e=>{const t=Oe(e.getProvider("auth").getImmediate());return(i=>new $_(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),K(ia,sa,V_(n)),K(ia,sa,"esm2017")}/**
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
 */const W_=5*60,q_=Oa("authIdTokenMaxAge")||W_;let ra=null;const j_=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>q_)return;const s=t==null?void 0:t.token;ra!==s&&(ra=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Bl(n=mi()){const e=ct(n,"auth");if(e.isInitialized())return e.getImmediate();const t=fg(n,{popupRedirectResolver:B_,persistence:[Jg,Pr,Or]}),i=Oa("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=j_(r.toString());Mg(t,o,()=>o(t.currentUser)),Dg(t,a=>o(a))}}const s=Aa("auth");return s&&mg(t,`http://${s}`),t}function G_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}og({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ae("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",G_().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H_("Browser");const z_={apiKey:"AIzaSyDFMhDmYMnrO5hp7vRyfM0YehoSGecgfEs",authDomain:"iotalarma.firebaseapp.com",databaseURL:"https://iotalarma-default-rtdb.firebaseio.com",projectId:"iotalarma",storageBucket:"iotalarma.appspot.com",messagingSenderId:"747127575803",appId:"1:747127575803:web:24ba7e8dd5e9cc67eb4c5e"},un="2026-09-27-v1",K_=`BORRADOR GENERAL — PENDIENTE DE REVISIÓN LEGAL
Versión ${un}

1. Uso del servicio
ProtexHome permite administrar sitios y dispositivos de seguridad compatibles. El usuario debe usar la aplicación de forma lícita y solo con autorización para los sitios y equipos que agregue o controle.

2. Cuenta y seguridad
El usuario es responsable de mantener segura su cuenta y sus credenciales, de proporcionar información correcta y de avisar si sospecha que otra persona accedió a su cuenta.

3. Dispositivos y conectividad
El funcionamiento depende de los dispositivos, la conexión a internet, el navegador y servicios de terceros como Firebase y Google. ProtexHome no sustituye un sistema de monitoreo profesional, los servicios de emergencia ni las medidas físicas de seguridad. No se debe depender únicamente de la aplicación para responder a una emergencia.

4. Disponibilidad y cambios
La aplicación puede actualizarse, interrumpirse o cambiar para corregir errores, mantener la seguridad o incorporar mejoras. La disponibilidad también puede depender de servicios externos.

5. Uso responsable
No se debe usar ProtexHome para acceder sin autorización a dispositivos o datos, interferir con el servicio, ni realizar actividades ilícitas.

6. Aceptación
Al marcar la casilla y crear una cuenta —también al continuar con Google desde el registro—, el usuario confirma que leyó y acepta estos términos. Se guardará la versión aceptada, la fecha y hora, y el método de registro.

Este texto es un borrador informativo, no asesoría legal. Debe revisarse y adaptarse a la operación, jurisdicción y política de privacidad de ProtexHome antes de publicarse como documento definitivo.`,ue=Ba(z_),Q=Bl(ue),Ft=Ye(ue),$l=new _e;$l.setCustomParameters({prompt:"select_account"});let Nn=null;function Vl(){return Nn||(Nn=kl(Q,Pr).catch(n=>{throw Nn=null,n})),Nn}async function Y_(n,e,t){const i=t==null?void 0:t.termsAcceptance;if((i==null?void 0:i.version)!==un||(i==null?void 0:i.method)!=="email"||!Number.isFinite(Date.parse((i==null?void 0:i.acceptedAt)||"")))return{success:!1,error:"Acepta los términos y condiciones vigentes para crear tu cuenta."};let s=!0;try{const o=(await Og(Q,n,e)).user,a=O(Ft,"US/"+o.uid);try{await le(a,{N:(t.name||"")+" "+(t.lastName||""),E:n,M:{},termsAcceptance:i}),console.log("Datos de registro y aceptación guardados en Realtime Database.")}catch(c){console.error("No se pudo guardar el perfil y la aceptación de términos:",c);try{await Nl(o)}catch(l){console.error("No se pudo revertir la cuenta creada sin guardar la aceptación:",l)}return{success:!1,error:"No se pudo guardar tu aceptación de los términos. No se completó el registro; inténtalo de nuevo."}}try{await Tl(o,{url:new URL("/ProtexHome/",window.location.origin).href}),console.log("Correo de verificación enviado.")}catch(c){console.warn("⚠️ No se pudo enviar email de verificación:",c.message),s=!1}return{success:!0,user:o,needsVerification:!0,verificationEmailSent:s,message:"Registro exitoso. Por favor verifica tu correo electrónico para continuar."}}catch(r){console.error("❌ Error en registro:",r);let o="Error al registrarse";switch(r.code){case"auth/email-already-in-use":o="Este correo electrónico ya está registrado.";break;case"auth/invalid-email":o="El correo electrónico no es válido.";break;case"auth/weak-password":o="La contraseña debe tener al menos 6 caracteres.";break;case"auth/network-request-failed":o="No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.";break;default:o="No se pudo crear la cuenta. Inténtalo de nuevo."}return{success:!1,error:o}}}async function J_(n,e,t=!1){try{await kl(Q,t?Pr:Or);const s=(await Lg(Q,n,e)).user;if(!s.emailVerified)return console.warn("⚠️ Email no verificado"),{success:!1,needsVerification:!0,error:"Debes verificar tu correo electrónico antes de iniciar sesión.",email:n};try{const r=O(Ft,"US/"+s.uid);await br(r,{lastLogin:new Date().toISOString(),emailVerified:!0})}catch{console.warn("⚠️ No se pudo actualizar último login")}return{success:!0,user:s}}catch(i){console.error("❌ Error en login:",i);let s="Error al iniciar sesión";switch(i.code){case"auth/user-not-found":s="No se encontró una cuenta con este correo.";break;case"auth/wrong-password":s="Contraseña incorrecta.";break;case"auth/invalid-credential":s="Credenciales inválidas.";break;case"auth/too-many-requests":s="Demasiados intentos. Intenta más tarde.";break;case"auth/network-request-failed":s="No se pudo conectar. Revisa tu conexión e inténtalo de nuevo.";break;case"auth/user-disabled":s="Esta cuenta está deshabilitada. Contacta con soporte.";break;default:s="No se pudo iniciar sesión. Verifica tus datos e inténtalo de nuevo."}return{success:!1,error:s}}}async function Q_(){try{const n=Q.currentUser;if(!n)return{success:!1,error:"No hay usuario activo. Inicia sesión nuevamente."};if(n.emailVerified)return{success:!1,error:"Tu correo ya está verificado."};const e={url:new URL("/ProtexHome/",window.location.origin).href};return await Tl(n,e),console.log("Correo de verificación reenviado."),{success:!0,message:"Correo de verificación reenviado. Revisa tu bandeja de entrada."}}catch(n){return console.error("Error al reenviar verificación:",n),{success:!1,error:"Error al reenviar el correo de verificación."}}}async function X_(){try{const n=Q.currentUser;if(!n)return{success:!1,error:"No hay usuario activo."};if(await n.reload(),n.emailVerified){try{const e=O(Ft,"US/"+n.uid);await br(e,{emailVerified:!0,updatedAt:new Date().toISOString()})}catch{console.warn("⚠️ No se pudo actualizar estado de verificación")}return{success:!0,verified:!0,message:"¡Correo verificado exitosamente!"}}return{success:!0,verified:!1,message:"El correo aún no ha sido verificado."}}catch(n){return console.error("Error al verificar email:",n),{success:!1,error:"Error al verificar el estado del correo."}}}async function oa(n,e=null){try{const t=O(Ft,"US/"+n.uid);if(!(await Y(t)).exists()){const r={N:n.displayName||"",E:n.email||"",M:{},lastLogin:new Date().toISOString(),photoURL:n.photoURL||"",emailVerified:!0};e&&(r.termsAcceptance=e),await le(t,r);return}const s={lastLogin:new Date().toISOString(),photoURL:n.photoURL||"",emailVerified:!0};e&&(s.termsAcceptance=e),await br(t,s)}catch(t){if(console.error("No se pudo actualizar el perfil de Google en Realtime Database:",t),e)throw t}}function Z_(n){switch(n==null?void 0:n.code){case"auth/popup-closed-by-user":case"auth/cancelled-popup-request":return"Se canceló el inicio de sesión con Google. Inténtalo de nuevo.";case"auth/popup-blocked":return"El navegador bloqueó la ventana de Google. Permite ventanas emergentes o inténtalo desde otro navegador.";case"auth/unauthorized-domain":return"Este dominio no está autorizado para iniciar sesión. Revisa los dominios permitidos en Firebase.";case"auth/network-request-failed":return"No se pudo conectar con Google. Revisa tu conexión e inténtalo de nuevo.";case"auth/operation-not-allowed":return"El acceso con Google no está habilitado en Firebase Authentication.";case"auth/operation-not-supported-in-this-environment":return"Este navegador no admite el acceso con Google en esta ventana. Abre ProtexHome en el navegador del sistema e inténtalo de nuevo.";case"auth/account-exists-with-different-credential":return"Ya existe una cuenta con este correo. Inicia sesión usando el método que utilizaste al registrarte.";default:return"No se pudo iniciar sesión con Google. Inténtalo de nuevo."}}async function ev(n=null){var t;if(n&&(n.version!==un||n.method!=="google"||!Number.isFinite(Date.parse(n.acceptedAt||""))))return{success:!1,error:"Acepta los términos y condiciones vigentes antes de continuar con Google."};let e=null;try{await Vl();const i=await t_(Q,$l);return e=i.user,n?await oa(i.user,n):oa(i.user),{success:!0,user:i.user}}catch(i){if(console.error("Error al iniciar sesión con Google:",i),n&&e&&((t=Q.currentUser)==null?void 0:t.uid)===e.uid){try{await Rr(Q)}catch(s){console.error("No se pudo cerrar la sesión tras fallar el registro de aceptación de Google:",s)}return{success:!1,error:"No se pudo guardar tu aceptación de los términos. No se completó el registro; inténtalo de nuevo."}}return{success:!1,error:Z_(i)}}}async function tv(){try{return await Rr(Q),console.log("👋 Sesión cerrada"),{success:!0}}catch(n){return console.error("Error al cerrar sesión:",n),{success:!1,error:"Error al cerrar sesión"}}}async function nv(n){try{const e={url:new URL("/ProtexHome/",window.location.origin).href};return await Pg(Q,n,e),console.log("Correo de recuperación enviado."),{success:!0,message:"Revisa tu correo para restablecer la contraseña."}}catch(e){console.error("Error en recuperación:",e);let t="Error al enviar el correo de recuperación.";return e.code==="auth/user-not-found"?t="No se encontró una cuenta con este correo.":e.code==="auth/invalid-email"&&(t="El correo electrónico no es válido."),{success:!1,error:t}}}function iv(n){return xg(Q,e=>{if(!e){n(null);return}const t={...e,name:e.displayName||e.email||""};n(t),Y(O(Ft,"US/"+e.uid)).then(i=>{if(!i.exists())return;const s=i.val();Object.assign(t,s,{name:s.N||t.name})}).catch(i=>{console.error("No se pudo cargar el perfil del usuario:",i)})})}async function sv(n){const e=Bl(),t=e.currentUser;try{const i=O(Ft,"US/"+n);return await gm(i),t&&await Nl(t),{success:!0}}catch(i){return console.error("Error al eliminar cuenta:",i),i.code==="auth/requires-recent-login"?(await Rr(e),{success:!1,error:"Inicia sesión nuevamente para eliminar la cuenta."}):{success:!1,error:i.message}}}function Qi(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)}function aa(n){return n.length>=6}function ca(n){return n.length>=2}function W(n){return String(n).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ft(n,e="error"){const t=document.getElementById("global-toast");t&&t.remove();const i=document.createElement("div");i.id="global-toast",i.style.cssText=`
    position:fixed;bottom:30px;left:20px;right:20px;
    background:${e==="error"?"#fef2f2":"#f0fdf4"};
    color:${e==="error"?"#991b1b":"#166534"};
    padding:14px 18px;border-radius:12px;font-size:0.9rem;
    font-weight:500;text-align:center;z-index:9999;
    box-shadow:0 10px 30px rgba(0,0,0,0.15);
    animation:toastIn 0.3s ease;
  `,i.textContent=n,document.body.appendChild(i),setTimeout(()=>{i.style.animation="toastOut 0.3s ease",setTimeout(()=>i.remove(),300)},3e3)}function Mr({title:n,message:e,kind:t,value:i="",placeholder:s=""}){return new Promise(r=>{var _,b;const o=document.activeElement,a=document.createElement("div");a.className="app-dialog-backdrop",a.innerHTML=`
      <section class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title" aria-describedby="app-dialog-message">
        <div class="app-dialog-icon ${t==="alert"?"info":t==="confirm"?"warning":"edit"}">
          <span class="material-symbols-outlined" aria-hidden="true">
            ${t==="alert"?"info":t==="confirm"?"help":"edit"}
          </span>
        </div>
        <h2 id="app-dialog-title"></h2>
        <p id="app-dialog-message" class="app-dialog-message"></p>
        ${t==="prompt"?'<input class="app-dialog-input" type="text">':""}
        <div class="app-dialog-actions">
          ${t!=="alert"?'<button class="app-dialog-button secondary" type="button" data-result="cancel">Cancelar</button>':""}
          <button class="app-dialog-button ${t==="confirm"?"danger":"primary"}" type="button" data-result="accept">
            ${t==="alert"?"Entendido":t==="confirm"?"Confirmar":"Guardar"}
          </button>
        </div>
      </section>
    `;const c=a.querySelector(".app-dialog"),l=a.querySelector("#app-dialog-title"),u=a.querySelector(".app-dialog-message"),d=a.querySelector(".app-dialog-input");l.textContent=n,u.textContent=e,d&&(d.value=i,d.placeholder=s,d.setAttribute("aria-label",n));let h=!1;const f=g=>{h||(h=!0,document.removeEventListener("keydown",m),a.remove(),o instanceof HTMLElement&&o.isConnected&&o.focus(),r(g))},m=g=>{if(g.key==="Escape")g.preventDefault(),f(t==="prompt"?null:!1);else if(g.key==="Enter"&&t==="prompt"&&g.target===d)g.preventDefault(),f(d.value);else if(g.key==="Tab"){const w=[...c.querySelectorAll("button, input")],R=w[0],M=w[w.length-1];g.shiftKey&&document.activeElement===R?(g.preventDefault(),M.focus()):!g.shiftKey&&document.activeElement===M&&(g.preventDefault(),R.focus())}};a.addEventListener("click",g=>{g.target===a&&f(t==="prompt"?null:!1)}),(_=a.querySelector('[data-result="cancel"]'))==null||_.addEventListener("click",()=>{f(t==="prompt"?null:!1)}),(b=a.querySelector('[data-result="accept"]'))==null||b.addEventListener("click",()=>{f(t==="prompt"?d.value:t==="confirm")}),document.addEventListener("keydown",m),document.body.appendChild(a),(d||a.querySelector('[data-result="accept"]')).focus()})}function te(n,e="ProtexHome"){return Mr({title:e,message:n,kind:"alert"})}function Xi(n,e="Confirmar acción"){return Mr({title:e,message:n,kind:"confirm"})}function db(n,e="",t="ProtexHome"){return Mr({title:t,message:n,value:e,kind:"prompt"})}class la{constructor(){this.currentView="login"}showView(e){var t;document.querySelectorAll(".auth-view").forEach(i=>i.classList.remove("active")),(t=document.getElementById(`${e}-view`))==null||t.classList.add("active"),this.currentView=e,document.querySelectorAll(".auth-error").forEach(i=>{i.classList.remove("show"),i.textContent=""})}async handleLogin(e){e.preventDefault();const t=document.getElementById("login-email").value.trim(),i=document.getElementById("login-password").value,s=document.getElementById("remember-me").checked,r=document.getElementById("login-error"),o=document.getElementById("login-submit");if(!Qi(t)){this.showInputError("login-email","Ingresa un correo válido");return}if(!aa(i)){this.showInputError("login-password","Mínimo 6 caracteres");return}this.setButtonLoading(o,!0),r.classList.remove("show");try{const a=await J_(t,i,s);a.success?console.log("Inicio de sesión completado."):(a.needsVerification,r.textContent=a.error,r.classList.add("show"))}catch(a){console.error("No se pudo completar el inicio de sesión:",a),r.textContent="No se pudo iniciar sesión. Revisa tu conexión e inténtalo de nuevo.",r.classList.add("show")}finally{this.setButtonLoading(o,!1)}}async handleRegister(e){e.preventDefault();const t=document.getElementById("register-name").value.trim(),i=document.getElementById("register-lastname").value.trim(),s=document.getElementById("register-email").value.trim(),r=document.getElementById("register-password").value,o=document.getElementById("register-error"),a=document.getElementById("register-submit"),c=document.getElementById("register-terms"),l=document.getElementById("register-terms-error");let u=!1;if(ca(t)||(this.showInputError("register-name","Ingresa tu nombre"),u=!0),ca(i)||(this.showInputError("register-lastname","Ingresa tu apellido"),u=!0),Qi(s)||(this.showInputError("register-email","Ingresa un correo válido"),u=!0),aa(r)||(this.showInputError("register-password","Mínimo 6 caracteres"),u=!0),c!=null&&c.checked||(l.textContent="Debes aceptar los términos y condiciones para crear tu cuenta.",l.classList.add("show"),c==null||c.setAttribute("aria-invalid","true"),c==null||c.focus(),u=!0),!u){this.setButtonLoading(a,!0),o.classList.remove("show");try{const d=await Y_(s,r,{name:t,lastName:i,termsAcceptance:{version:un,acceptedAt:new Date().toISOString(),method:"email"}});if(d.success){if(console.log("Registro completado; se requiere verificar el correo."),!d.verificationEmailSent){const h=document.getElementById("verify-message");h&&(h.textContent="La cuenta se creó, pero no se pudo enviar el correo. Usa “Reenviar correo” para intentarlo otra vez.")}}else o.textContent=d.error,o.classList.add("show")}catch(d){console.error("No se pudo completar el registro:",d),o.textContent="No se pudo crear la cuenta. Revisa tu conexión e inténtalo de nuevo.",o.classList.add("show")}finally{this.setButtonLoading(a,!1)}}}async handleGoogleLogin(e=this.currentView==="register"){const t=document.getElementById(e?"register-error":"login-error"),i=document.getElementById("register-terms"),s=document.getElementById("register-terms-error");if(e&&!(i!=null&&i.checked)){s&&(s.textContent="Debes aceptar los términos y condiciones para registrarte con Google.",s.classList.add("show")),i==null||i.setAttribute("aria-invalid","true"),i==null||i.focus();return}const r=[document.getElementById("google-login-btn"),document.getElementById("google-register-btn")].filter(Boolean).map(o=>{var a;return{button:o,label:((a=o.querySelector("span:last-child"))==null?void 0:a.textContent)||"Continuar con Google"}});r.forEach(({button:o})=>{o.disabled=!0,o.setAttribute("aria-busy","true");const a=o.querySelector("span:last-child");a&&(a.textContent="Conectando con Google…")}),t&&t.classList.remove("show");try{const o=await ev(e?{version:un,acceptedAt:new Date().toISOString(),method:"google"}:null);!o.success&&t&&(t.textContent=o.error,t.classList.add("show"))}catch(o){console.error("No se pudo completar el acceso con Google:",o),t&&(t.textContent="No se pudo iniciar sesión con Google. Inténtalo de nuevo.",t.classList.add("show"))}finally{r.forEach(({button:o,label:a})=>{o.disabled=!1,o.removeAttribute("aria-busy");const c=o.querySelector("span:last-child");c&&(c.textContent=a)})}}async showTermsAndConditions(){await te(K_,"Términos y condiciones")}async handleForgotPassword(e){e.preventDefault();const t=document.getElementById("forgot-email").value.trim(),i=document.getElementById("forgot-error"),s=document.getElementById("forgot-success"),r=document.getElementById("forgot-submit");if(!Qi(t)){this.showInputError("forgot-email","Ingresa un correo válido");return}this.setButtonLoading(r,!0),i.classList.remove("show"),s.classList.remove("show");try{const o=await nv(t);o.success?(s.textContent=o.message,s.classList.add("show")):(i.textContent=o.error,i.classList.add("show"))}catch(o){console.error("No se pudo recuperar la contraseña:",o),i.textContent="No se pudo enviar el correo. Revisa tu conexión e inténtalo de nuevo.",i.classList.add("show")}finally{this.setButtonLoading(r,!1)}}async handleResendVerification(){const e=document.getElementById("resend-verification-btn"),t=document.getElementById("verify-message");this.setButtonLoading(e,!0);try{const i=await Q_();t.textContent=i.success?`✅ ${i.message}`:`❌ ${i.error}`,t.style.color=i.success?"#16a34a":"#dc2626"}catch(i){console.error("No se pudo reenviar el correo de verificación:",i),t.textContent="No se pudo reenviar el correo. Inténtalo de nuevo.",t.style.color="#dc2626"}finally{this.setButtonLoading(e,!1)}setTimeout(()=>{t.textContent="Enviaremos un enlace de verificación a tu correo.",t.style.color=""},5e3)}async handleCheckVerification(){const e=document.getElementById("check-verification-btn"),t=document.getElementById("verify-message");this.setButtonLoading(e,!0);try{const i=await X_();i.success&&i.verified?(t.textContent="✅ ¡Correo verificado! Entrando...",t.style.color="#16a34a",setTimeout(()=>window.location.reload(),1e3)):(t.textContent=i.success?"⚠️ Tu correo aún no ha sido verificado.":i.error,t.style.color=i.success?"#f59e0b":"#dc2626")}catch(i){console.error("No se pudo comprobar la verificación del correo:",i),t.textContent="No se pudo comprobar la verificación. Inténtalo de nuevo.",t.style.color="#dc2626"}finally{this.setButtonLoading(e,!1)}}togglePassword(e){const t=document.getElementById(e),i=t==null?void 0:t.parentElement.querySelector(".toggle-password span");t&&i&&(t.type==="password"?(t.type="text",i.textContent="visibility_off"):(t.type="password",i.textContent="visibility"))}showInputError(e,t){const i=document.getElementById(`${e}-error`),s=document.getElementById(e);i&&(i.textContent=t,i.classList.add("show")),s&&(s.classList.add("error"),s.addEventListener("input",()=>{i==null||i.classList.remove("show"),s.classList.remove("error")},{once:!0}))}setButtonLoading(e,t){if(!e)return;const i=e.querySelector(".button-text"),s=e.querySelector(".button-loader");e.disabled=t,i&&(i.style.display=t?"none":"block"),s&&(s.style.display=t?"block":"none")}}let Ri=null,xr=null;function hb(n,e){Ri=n,xr=e,console.log(`🟢 Contexto activo: serial=${n}, vista=${e}`)}function pt(){Ri=null,xr=null,console.log("🔴 Contexto activo limpiado")}function Hl(){return Ri}function Wl(){return xr}function ql(n){return n===Ri}const Ne=Ye(ue);function ci(n){return n===1||n===11}async function rv(n){const e=O(Ne,`P/${n}/L`),t=await Y(e);return t.exists()&&ci(t.val())}function ov(n,e,t=()=>!0){if(Wl()==="device"&&!ql(n))return console.warn(`⛔ Listener de ${n} ignorado (serial activo ${Hl()})`),()=>{};const i=O(Ne,`P/${n}/L`);let s=null,r=null,o=!1;const a=el(i,c=>{if(!t())return;const l=c.exists()&&ci(c.val());s===null?e(l?"online":"offline"):!l&&s?(console.log(`⏳ Detectado offline: ${n}`),!o&&!document.hidden&&(o=!0,(async()=>(await av(n,t),o=!1))()),r&&clearTimeout(r),r=setTimeout(()=>{t()&&Y(i).then(u=>{if(!t())return;u.exists()&&ci(u.val())?(console.log(`🟢 Recuperado: ${n}`),e("online")):(console.log(`🔴 Confirmado offline: ${n}`),e("offline"))})},3e4)):l&&!s&&(console.log(`🟢 Online: ${n}`),e("online")),s=l});return()=>{r&&clearTimeout(r),a()}}async function av(n,e=()=>!0){try{if(!e())return;const t=O(Ne,`M/${n}/X/D/L`),i=await Y(t);if(!e())return;const s=i.exists()?i.val():0,r=s===11?1:11;await le(t,r),console.log(`🔄 Recuperando ${n}: X/D/L ${s} → ${r}`)}catch(t){console.error("Error en recuperación:",t)}}async function Fr(n,e=()=>!0){try{if(!e())return;const t=O(Ne,`M/${n}/X/D/L`),i=await Y(t);if(!e())return;const s=i.exists()?i.val():0,r=s===11?1:11;if(await le(t,r),!e())return;await le(O(Ne,`P/${n}/L`),0),console.log(`🩺 Ping a ${n}: X/D/L ${s} → ${r}, P/L=0`)}catch(t){console.error("Error en ping:",t)}}async function cv(n,e=()=>!0){try{if(!e()||(await le(O(Ne,`P/${n}/L`),0),!e()))return;await le(O(Ne,`M/${n}/X/D/L`),0),console.log(`😴 Módulo en reposo: ${n}`)}catch(t){console.error("Error al poner en reposo:",t)}}async function ua(n,e=()=>!0){const t=O(Ne,`US/${n}/M`);try{if(!e())return;const i=await Y(t);if(!e())return;if(i.exists()){const s=i.val();for(const r of Object.keys(s)){if(!e())break;await cv(r,e)}}}catch(i){console.error("Error al poner todos en reposo:",i)}}async function lv(n,e=()=>!0){const t=O(Ne,`US/${n}/M`);try{if(!e())return;const i=await Y(t);if(!e())return;if(i.exists()){const s=i.val();for(const r of Object.keys(s)){if(!e())break;await Fr(r,e)}}}catch(i){console.error("Error al hacer ping a todos:",i)}}class da{constructor(e){this.user=e,this.db=Ye(),this.deviceTimers={},this.listeners=[],this.pendingTimeouts=[],this.healthCheckListeners=[],this.stopped=!1}async loadSites(){const e=O(this.db,"US/"+this.user.uid+"/M");try{const t=await Y(e);if(this.stopped)return[];if(!t.exists())return console.log("📭 No hay módulos para el usuario"),[];const i=t.val(),s=Object.keys(i);console.log("🔍 Seriales encontrados:",s);const r=await Promise.all(s.map(async a=>{if(this.stopped)return!1;try{const c=await rv(a);return console.log(`   → Serial ${a} online = ${c}`),c}catch(c){return console.error(`No se pudo leer el estado online de ${a}:`,c),!1}})),o=s.map((a,c)=>{const l=r[c],u={1:"door_open",2:"fingerprint",3:"location_city",4:"garage_door",5:"garage_door"},d={1:"blue",2:"green",3:"red",4:"purple",5:"orange"},h={1:"Puerta Motorizada",2:"Control de Acceso",3:"Alarma Comunitaria",4:"Alarma",5:"Alarma DSC"};return{serial:a,name:i[a].N||"Sin nombre",type:i[a].T||0,typeName:h[i[a].T]||"Desconocido",icon:u[i[a].T]||"devices",color:d[i[a].T]||"blue",role:i[a].U||"INV",status:l?"online":"offline"}});return localStorage.setItem("sites_"+this.user.uid,JSON.stringify(o)),o}catch(t){if(this.stopped)return[];console.error("Error al cargar sitios:",t);const i=localStorage.getItem("sites_"+this.user.uid);if(i)try{return JSON.parse(i)}catch(s){console.error("La copia local de los sitios está dañada:",s)}throw t}}renderSites(e){const t=document.getElementById("sites-list");if(t){if(e.length===0){t.innerHTML=`
                <div class="empty-state">
                    <span class="material-symbols-outlined">home_work</span>
                    <h3>No hay sitios disponibles</h3>
                    <p>Los sitios vinculados a tu cuenta aparecerán aquí.</p>
                </div>`;return}t.innerHTML=e.map(i=>`
            <div class="site-card" data-serial="${W(i.serial)}" data-type="${W(i.type)}" data-search="${W(`${i.name} ${i.serial}`)}">
                <div class="site-icon type-${W(i.color)} ${i.status==="online"?"online":"offline"}">
                    <span class="material-symbols-outlined">${W(i.icon||"devices")}</span>
                </div>
                <div class="site-info">
                    <h3>${W(i.name)}</h3>
                    <p class="site-serial">${W(i.typeName||"Dispositivo")} • ${W(i.serial)}</p>
                    <div class="site-status">
                        <span class="status-dot ${i.status==="online"?"online":"offline"}"></span>
                        <span class="status-text">${i.status==="online"?"En línea":"Sin conexión"}</span>
                    </div>
                </div>
                <span class="material-symbols-outlined arrow-icon">chevron_right</span>
            </div>
        `).join("")}}async addSite(e,t,i,s,r){try{return await le(O(this.db,"US/"+this.user.uid+"/M/"+e),{C:s||"1234",N:t,L:i||"Sin ubicación",U:r||"ADM"}),!0}catch(o){return console.error("Error al agregar sitio:",o),!1}}setupSearch(){var e;(e=document.getElementById("search-input"))==null||e.addEventListener("input",t=>{const i=t.target.value.toLowerCase();document.querySelectorAll(".site-card").forEach(s=>{s.style.display=s.dataset.search.toLowerCase().includes(i)?"flex":"none"})})}async pingAllModules(){await lv(this.user.uid,()=>!this.stopped)}async listenModulesStatus(){if(this.stopped)return;this.listeners&&(this.listeners.forEach(i=>{typeof i=="function"&&i()}),this.listeners=[]);const e=O(this.db,"US/"+this.user.uid+"/M"),t=await Y(e);if(!this.stopped&&t.exists())for(const i of Object.keys(t.val())){const s=ov(i,r=>{this.updateSiteStatus(i,r==="online")},()=>!this.stopped);this.listeners.push(s)}}updateSiteStatus(e,t){if(Wl()==="device"&&!ql(e)){console.warn(`⛔ Ignorada actualización de ${e} (vista device, serial activo ${Hl()})`);return}const i=[...document.querySelectorAll(".site-card")].find(a=>a.dataset.serial===e);if(!i){console.warn(`⚠️ No se encontró tarjeta para ${e}`);return}const s=i.querySelector(".status-dot"),r=i.querySelector(".status-text"),o=i.querySelector(".site-icon");s&&(s.className="status-dot "+(t?"online":"offline")),r&&(r.textContent=t?"En línea":"Sin conexión"),o&&(o.className="site-icon "+(t?"online":"offline")),console.log(`🔄 Actualizada tarjeta ${e}: ${t?"online":"offline"}`)}startHealthCheck(e){this.stopped||(this.stopHealthCheck(),this.healthCheckListeners&&(this.healthCheckListeners.forEach(t=>{typeof t=="function"&&t()}),this.healthCheckListeners=[]),Y(O(this.db,"US/"+e+"/M")).then(t=>{if(!this.stopped&&t.exists())for(const i of Object.keys(t.val())){const s=el(O(this.db,"P/"+i+"/L"),r=>{if(this.stopped)return;r.exists()&&ci(r.val())?this.deviceTimers[i]||(this.deviceTimers[i]=setInterval(()=>Fr(i,()=>!this.stopped),6e4)):this.deviceTimers[i]&&(clearInterval(this.deviceTimers[i]),this.deviceTimers[i]=null)});this.healthCheckListeners.push(s)}}))}stopHealthCheck(){this.deviceTimers&&(Object.values(this.deviceTimers).forEach(e=>clearInterval(e)),this.deviceTimers={})}stopAllListeners(){this.stopped=!0,this.stopHealthCheck(),this.listeners&&(this.listeners.forEach(e=>{typeof e=="function"&&e()}),this.listeners=[]),this.healthCheckListeners&&(this.healthCheckListeners.forEach(e=>{typeof e=="function"&&e()}),this.healthCheckListeners=[]),this.pendingTimeouts&&(this.pendingTimeouts.forEach(e=>clearTimeout(e)),this.pendingTimeouts=[]),console.log("🔇 Dashboard detenido")}}const jl="@firebase/installations",Ur="0.6.9";/**
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
 */const Gl=1e4,zl=`w:${Ur}`,Kl="FIS_v2",uv="https://firebaseinstallations.googleapis.com/v1",dv=60*60*1e3,hv="installations",fv="Installations";/**
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
 */const pv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},tt=new at(hv,fv,pv);function Yl(n){return n instanceof pe&&n.code.includes("request-failed")}/**
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
 */function Jl({projectId:n}){return`${uv}/projects/${n}/installations`}function Ql(n){return{token:n.token,requestStatus:2,expiresIn:gv(n.expiresIn),creationTime:Date.now()}}async function Xl(n,e){const i=(await e.json()).error;return tt.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Zl({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function mv(n,{refreshToken:e}){const t=Zl(n);return t.append("Authorization",_v(e)),t}async function eu(n){const e=await n();return e.status>=500&&e.status<600?n():e}function gv(n){return Number(n.replace("s","000"))}function _v(n){return`${Kl} ${n}`}/**
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
 */async function vv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=Jl(n),s=Zl(n),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:t,authVersion:Kl,appId:n.appId,sdkVersion:zl},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await eu(()=>fetch(i,a));if(c.ok){const l=await c.json();return{fid:l.fid||t,registrationStatus:2,refreshToken:l.refreshToken,authToken:Ql(l.authToken)}}else throw await Xl("Create Installation",c)}/**
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
 */function tu(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function yv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const bv=/^[cdef][\w-]{21}$/,As="";function wv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Ev(n);return bv.test(t)?t:As}catch{return As}}function Ev(n){return yv(n).substr(0,22)}/**
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
 */function Pi(n){return`${n.appName}!${n.appId}`}/**
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
 */const nu=new Map;function iu(n,e){const t=Pi(n);su(t,e),Iv(t,e)}function su(n,e){const t=nu.get(n);if(t)for(const i of t)i(e)}function Iv(n,e){const t=Sv();t&&t.postMessage({key:n,fid:e}),Cv()}let Ke=null;function Sv(){return!Ke&&"BroadcastChannel"in self&&(Ke=new BroadcastChannel("[Firebase] FID Change"),Ke.onmessage=n=>{su(n.data.key,n.data.fid)}),Ke}function Cv(){nu.size===0&&Ke&&(Ke.close(),Ke=null)}/**
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
 */const Tv="firebase-installations-database",kv=1,nt="firebase-installations-store";let Zi=null;function Br(){return Zi||(Zi=pi(Tv,kv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(nt)}}})),Zi}async function li(n,e){const t=Pi(n),s=(await Br()).transaction(nt,"readwrite"),r=s.objectStore(nt),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&iu(n,e.fid),e}async function ru(n){const e=Pi(n),i=(await Br()).transaction(nt,"readwrite");await i.objectStore(nt).delete(e),await i.done}async function Oi(n,e){const t=Pi(n),s=(await Br()).transaction(nt,"readwrite"),r=s.objectStore(nt),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&iu(n,a.fid),a}/**
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
 */async function $r(n){let e;const t=await Oi(n.appConfig,i=>{const s=Nv(i),r=Av(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===As?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Nv(n){const e=n||{fid:wv(),registrationStatus:0};return ou(e)}function Av(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(tt.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Rv(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Pv(n)}:{installationEntry:e}}async function Rv(n,e){try{const t=await vv(n,e);return li(n.appConfig,t)}catch(t){throw Yl(t)&&t.customData.serverCode===409?await ru(n.appConfig):await li(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Pv(n){let e=await ha(n.appConfig);for(;e.registrationStatus===1;)await tu(100),e=await ha(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await $r(n);return i||t}return e}function ha(n){return Oi(n,e=>{if(!e)throw tt.create("installation-not-found");return ou(e)})}function ou(n){return Ov(n)?{fid:n.fid,registrationStatus:0}:n}function Ov(n){return n.registrationStatus===1&&n.registrationTime+Gl<Date.now()}/**
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
 */async function Lv({appConfig:n,heartbeatServiceProvider:e},t){const i=Dv(n,t),s=mv(n,t),r=e.getImmediate({optional:!0});if(r){const l=await r.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:zl,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await eu(()=>fetch(i,a));if(c.ok){const l=await c.json();return Ql(l)}else throw await Xl("Generate Auth Token",c)}function Dv(n,{fid:e}){return`${Jl(n)}/${e}/authTokens:generate`}/**
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
 */async function Vr(n,e=!1){let t;const i=await Oi(n.appConfig,r=>{if(!au(r))throw tt.create("not-registered");const o=r.authToken;if(!e&&Fv(o))return r;if(o.requestStatus===1)return t=Mv(n,e),r;{if(!navigator.onLine)throw tt.create("app-offline");const a=Bv(r);return t=xv(n,a),a}});return t?await t:i.authToken}async function Mv(n,e){let t=await fa(n.appConfig);for(;t.authToken.requestStatus===1;)await tu(100),t=await fa(n.appConfig);const i=t.authToken;return i.requestStatus===0?Vr(n,e):i}function fa(n){return Oi(n,e=>{if(!au(e))throw tt.create("not-registered");const t=e.authToken;return $v(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xv(n,e){try{const t=await Lv(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await li(n.appConfig,i),t}catch(t){if(Yl(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ru(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await li(n.appConfig,i)}throw t}}function au(n){return n!==void 0&&n.registrationStatus===2}function Fv(n){return n.requestStatus===2&&!Uv(n)}function Uv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+dv}function Bv(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function $v(n){return n.requestStatus===1&&n.requestTime+Gl<Date.now()}/**
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
 */async function Vv(n){const e=n,{installationEntry:t,registrationPromise:i}=await $r(e);return i?i.catch(console.error):Vr(e).catch(console.error),t.fid}/**
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
 */async function Hv(n,e=!1){const t=n;return await Wv(t),(await Vr(t,e)).token}async function Wv(n){const{registrationPromise:e}=await $r(n);e&&await e}/**
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
 */function qv(n){if(!n||!n.options)throw es("App Configuration");if(!n.name)throw es("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw es(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function es(n){return tt.create("missing-app-config-values",{valueName:n})}/**
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
 */const cu="installations",jv="installations-internal",Gv=n=>{const e=n.getProvider("app").getImmediate(),t=qv(e),i=ct(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},zv=n=>{const e=n.getProvider("app").getImmediate(),t=ct(e,cu).getImmediate();return{getId:()=>Vv(t),getToken:s=>Hv(t,s)}};function Kv(){ce(new X(cu,Gv,"PUBLIC")),ce(new X(jv,zv,"PRIVATE"))}Kv();K(jl,Ur);K(jl,Ur,"esm2017");/**
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
 */const Yv="/firebase-messaging-sw.js",Jv="/firebase-cloud-messaging-push-scope",lu="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Qv="https://fcmregistrations.googleapis.com/v1",uu="google.c.a.c_id",Xv="google.c.a.c_l",Zv="google.c.a.ts",ey="google.c.a.e";var pa;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(pa||(pa={}));/**
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
 */var dn;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(dn||(dn={}));/**
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
 */function ge(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ty(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),i=atob(t),s=new Uint8Array(i.length);for(let r=0;r<i.length;++r)s[r]=i.charCodeAt(r);return s}/**
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
 */const ts="fcm_token_details_db",ny=5,ma="fcm_token_object_Store";async function iy(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(r=>r.name).includes(ts))return null;let e=null;return(await pi(ts,ny,{upgrade:async(i,s,r,o)=>{var a;if(s<2||!i.objectStoreNames.contains(ma))return;const c=o.objectStore(ma),l=await c.index("fcmSenderId").get(n);if(await c.clear(),!!l){if(s===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:ge(u.vapidKey)}}}else if(s===3){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ge(u.auth),p256dh:ge(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ge(u.vapidKey)}}}else if(s===4){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:ge(u.auth),p256dh:ge(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:ge(u.vapidKey)}}}}}})).close(),await Bi(ts),await Bi("fcm_vapid_details_db"),await Bi("undefined"),sy(e)?e:null}function sy(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const ry="firebase-messaging-database",oy=1,it="firebase-messaging-store";let ns=null;function Hr(){return ns||(ns=pi(ry,oy,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(it)}}})),ns}async function du(n){const e=qr(n),i=await(await Hr()).transaction(it).objectStore(it).get(e);if(i)return i;{const s=await iy(n.appConfig.senderId);if(s)return await Wr(n,s),s}}async function Wr(n,e){const t=qr(n),s=(await Hr()).transaction(it,"readwrite");return await s.objectStore(it).put(e,t),await s.done,e}async function ay(n){const e=qr(n),i=(await Hr()).transaction(it,"readwrite");await i.objectStore(it).delete(e),await i.done}function qr({appConfig:n}){return n.appId}/**
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
 */const cy={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},V=new at("messaging","Messaging",cy);/**
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
 */async function ly(n,e){const t=await Gr(n),i=fu(e),s={method:"POST",headers:t,body:JSON.stringify(i)};let r;try{r=await(await fetch(jr(n.appConfig),s)).json()}catch(o){throw V.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw V.create("token-subscribe-failed",{errorInfo:o})}if(!r.token)throw V.create("token-subscribe-no-token");return r.token}async function uy(n,e){const t=await Gr(n),i=fu(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(i)};let r;try{r=await(await fetch(`${jr(n.appConfig)}/${e.token}`,s)).json()}catch(o){throw V.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(r.error){const o=r.error.message;throw V.create("token-update-failed",{errorInfo:o})}if(!r.token)throw V.create("token-update-no-token");return r.token}async function hu(n,e){const i={method:"DELETE",headers:await Gr(n)};try{const r=await(await fetch(`${jr(n.appConfig)}/${e}`,i)).json();if(r.error){const o=r.error.message;throw V.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw V.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function jr({projectId:n}){return`${Qv}/projects/${n}/registrations`}async function Gr({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function fu({p256dh:n,auth:e,endpoint:t,vapidKey:i}){const s={web:{endpoint:t,auth:e,p256dh:n}};return i!==lu&&(s.web.applicationPubKey=i),s}/**
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
 */const dy=7*24*60*60*1e3;async function hy(n){const e=await my(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ge(e.getKey("auth")),p256dh:ge(e.getKey("p256dh"))},i=await du(n.firebaseDependencies);if(i){if(gy(i.subscriptionOptions,t))return Date.now()>=i.createTime+dy?py(n,{token:i.token,createTime:Date.now(),subscriptionOptions:t}):i.token;try{await hu(n.firebaseDependencies,i.token)}catch(s){console.warn(s)}return ga(n.firebaseDependencies,t)}else return ga(n.firebaseDependencies,t)}async function fy(n){const e=await du(n.firebaseDependencies);e&&(await hu(n.firebaseDependencies,e.token),await ay(n.firebaseDependencies));const t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function py(n,e){try{const t=await uy(n.firebaseDependencies,e),i=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Wr(n.firebaseDependencies,i),t}catch(t){throw t}}async function ga(n,e){const i={token:await ly(n,e),createTime:Date.now(),subscriptionOptions:e};return await Wr(n,i),i.token}async function my(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ty(e)})}function gy(n,e){const t=e.vapidKey===n.vapidKey,i=e.endpoint===n.endpoint,s=e.auth===n.auth,r=e.p256dh===n.p256dh;return t&&i&&s&&r}/**
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
 */function _a(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return _y(e,n),vy(e,n),yy(e,n),e}function _y(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const i=e.notification.body;i&&(n.notification.body=i);const s=e.notification.image;s&&(n.notification.image=s);const r=e.notification.icon;r&&(n.notification.icon=r)}function vy(n,e){e.data&&(n.data=e.data)}function yy(n,e){var t,i,s,r,o;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const a=(s=(i=e.fcmOptions)===null||i===void 0?void 0:i.link)!==null&&s!==void 0?s:(r=e.notification)===null||r===void 0?void 0:r.click_action;a&&(n.fcmOptions.link=a);const c=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;c&&(n.fcmOptions.analyticsLabel=c)}/**
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
 */function by(n){return typeof n=="object"&&!!n&&uu in n}/**
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
 */function wy(n){if(!n||!n.options)throw is("App Configuration Object");if(!n.name)throw is("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const i of e)if(!t[i])throw is(i);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function is(n){return V.create("missing-app-config-values",{valueName:n})}/**
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
 */class Ey{constructor(e,t,i){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=wy(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:i}}_delete(){return Promise.resolve()}}/**
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
 */async function pu(n){try{n.swRegistration=await navigator.serviceWorker.register(Yv,{scope:Jv}),n.swRegistration.update().catch(()=>{})}catch(e){throw V.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Iy(n,e){if(!e&&!n.swRegistration&&await pu(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw V.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function Sy(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=lu)}/**
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
 */async function mu(n,e){if(!navigator)throw V.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw V.create("permission-blocked");return await Sy(n,e==null?void 0:e.vapidKey),await Iy(n,e==null?void 0:e.serviceWorkerRegistration),hy(n)}/**
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
 */async function Cy(n,e,t){const i=Ty(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(i,{message_id:t[uu],message_name:t[Xv],message_time:t[Zv],message_device_time:Math.floor(Date.now()/1e3)})}function Ty(n){switch(n){case dn.NOTIFICATION_CLICKED:return"notification_open";case dn.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function ky(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===dn.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(_a(t)):n.onMessageHandler.next(_a(t)));const i=t.data;by(i)&&i[ey]==="1"&&await Cy(n,t.messageType,i)}const va="@firebase/messaging",ya="0.12.12";/**
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
 */const Ny=n=>{const e=new Ey(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>ky(e,t)),e},Ay=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:i=>mu(e,i)}};function Ry(){ce(new X("messaging",Ny,"PUBLIC")),ce(new X("messaging-internal",Ay,"PRIVATE")),K(va,ya),K(va,ya,"esm2017")}/**
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
 */async function gu(){try{await Ma()}catch{return!1}return typeof window<"u"&&Da()&&Ju()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function Py(n){if(!navigator)throw V.create("only-available-in-window");return n.swRegistration||await pu(n),fy(n)}/**
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
 */function Oy(n,e){if(!navigator)throw V.create("only-available-in-window");return n.onMessageHandler=e,()=>{n.onMessageHandler=null}}/**
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
 */function Ly(n=mi()){return gu().then(e=>{if(!e)throw V.create("unsupported-browser")},e=>{throw V.create("indexed-db-unsupported")}),ct(P(n),"messaging").getImmediate()}async function Dy(n,e){return n=P(n),mu(n,e)}function _u(n){return n=P(n),Py(n)}function My(n,e){return n=P(n),Oy(n,e)}Ry();/**
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
 */const xy="type.googleapis.com/google.protobuf.Int64Value",Fy="type.googleapis.com/google.protobuf.UInt64Value";function vu(n,e){const t={};for(const i in n)n.hasOwnProperty(i)&&(t[i]=e(n[i]));return t}function Rs(n){if(n==null)return null;if(n instanceof Number&&(n=n.valueOf()),typeof n=="number"&&isFinite(n)||n===!0||n===!1||Object.prototype.toString.call(n)==="[object String]")return n;if(n instanceof Date)return n.toISOString();if(Array.isArray(n))return n.map(e=>Rs(e));if(typeof n=="function"||typeof n=="object")return vu(n,e=>Rs(e));throw new Error("Data cannot be encoded in JSON: "+n)}function ui(n){if(n==null)return n;if(n["@type"])switch(n["@type"]){case xy:case Fy:{const e=Number(n.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+n);return e}default:throw new Error("Data cannot be decoded from JSON: "+n)}return Array.isArray(n)?n.map(e=>ui(e)):typeof n=="function"||typeof n=="object"?vu(n,e=>ui(e)):n}/**
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
 */const zr="functions";/**
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
 */const ba={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class wt extends pe{constructor(e,t,i){super(`${zr}/${e}`,t||""),this.details=i}}function Uy(n){if(n>=200&&n<300)return"ok";switch(n){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function By(n,e){let t=Uy(n),i=t,s;try{const r=e&&e.error;if(r){const o=r.status;if(typeof o=="string"){if(!ba[o])return new wt("internal","internal");t=ba[o],i=o}const a=r.message;typeof a=="string"&&(i=a),s=r.details,s!==void 0&&(s=ui(s))}}catch{}return t==="ok"?null:new wt(t,i,s)}/**
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
 */class $y{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(s=>this.auth=s,()=>{}),this.messaging||t.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:s}}}/**
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
 */const Ps="us-central1";function Vy(n){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new wt("deadline-exceeded","deadline-exceeded"))},n)}),cancel:()=>{e&&clearTimeout(e)}}}class Hy{constructor(e,t,i,s,r=Ps,o){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new $y(t,i,s),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{const a=new URL(r);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=Ps}catch{this.customDomain=null,this.region=r}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}}function Wy(n,e,t){n.emulatorOrigin=`http://${e}:${t}`}function qy(n,e,t){return i=>Gy(n,e,i,{})}async function jy(n,e,t,i){t["Content-Type"]="application/json";let s;try{s=await i(n,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let r=null;try{r=await s.json()}catch{}return{status:s.status,json:r}}function Gy(n,e,t,i){const s=n._url(e);return zy(n,s,t,i)}async function zy(n,e,t,i){t=Rs(t);const s={data:t},r={},o=await n.contextProvider.getContext(i.limitedUseAppCheckTokens);o.authToken&&(r.Authorization="Bearer "+o.authToken),o.messagingToken&&(r["Firebase-Instance-ID-Token"]=o.messagingToken),o.appCheckToken!==null&&(r["X-Firebase-AppCheck"]=o.appCheckToken);const a=i.timeout||7e4,c=Vy(a),l=await Promise.race([jy(e,s,r,n.fetchImpl),c.promise,n.cancelAllRequests]);if(c.cancel(),!l)throw new wt("cancelled","Firebase Functions instance was deleted.");const u=By(l.status,l.json);if(u)throw u;if(!l.json)throw new wt("internal","Response is not valid JSON object.");let d=l.json.data;if(typeof d>"u"&&(d=l.json.result),typeof d>"u")throw new wt("internal","Response is missing data field.");return{data:ui(d)}}const wa="@firebase/functions",Ea="0.11.8";/**
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
 */const Ky="auth-internal",Yy="app-check-internal",Jy="messaging-internal";function Qy(n,e){const t=(i,{instanceIdentifier:s})=>{const r=i.getProvider("app").getImmediate(),o=i.getProvider(Ky),a=i.getProvider(Jy),c=i.getProvider(Yy);return new Hy(r,o,a,c,s,n)};ce(new X(zr,t,"PUBLIC").setMultipleInstances(!0)),K(wa,Ea,e),K(wa,Ea,"esm2017")}/**
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
 */function At(n=mi(),e=Ps){const i=ct(P(n),zr).getImmediate({identifier:e}),s=Ra("functions");return s&&Xy(i,...s),i}function Xy(n,e,t){Wy(P(n),e,t)}function st(n,e,t){return qy(P(n),e)}Qy(fetch.bind(self));function yu(n,e=n.siteName,t=n.sentTime){const i=n.A,s=n.D,r=Number(n.E),o=n.N||"Usuario",a=String(s||0).padStart(2,"0");let c="",l="",u="#6b7280";switch(r){case 1:c=`🚨 Alarma en Zona ${a}`,l=`Partición ${i} • ${o}`,u="#dc2626";break;case 2:c=`✅ Restauración en Zona ${a}`,l=`Partición ${i} • ${o}`,u="#16a34a";break;case 3:{c=`⚠️ Falla: ${{1:"Batería baja",2:"Falla de sirena",3:"Falla de línea telefónica",4:"Falla de comunicación"}[s]||`Falla (código ${s})`}`,l=`Partición ${i}`,u="#d97706";break}case 4:{c=`🔄 ${{1:"Batería baja restaurada",2:"Sirena restaurada",3:"Línea telefónica restaurada",4:"Comunicación restaurada"}[s]||`Falla restaurada (código ${s})`}`,l=`Partición ${i}`,u="#a16207";break}case 5:c=`🔓 Apertura por usuario ${a}`,l=`${o} • Partición ${i}`,u="#2563eb";break;case 6:c=`🔒 Cierre por usuario ${a}`,l=`${o} • Partición ${i}`,u="#7c3aed";break;case 7:{c=`🔥 ${{0:"Fuego",1:"Alarma médica",2:"Pánico de teclado"}[s]||`Alarma (código ${s})`}`,l=`Partición ${i}`,u="#b91c1c";break}default:c=`📩 Evento ${n.E||"nuevo"}`,l=`Partición ${i} • ${o}`}i==9&&(l=l.replace("Partición","Global"));const d=Zy(String(n.F||"").trim()||t);return{title:String(e||(n.S?`Sitio ${n.S}`:"ProtexHome")).trim()||"ProtexHome",body:[c,l,d].filter(Boolean).join(" • "),color:u}}function Zy(n){const e=String(n??"").trim();if(e){const t=e.match(/(?:^|\s)(\d{1,2}:\d{2}(?::\d{2})?)(?:\s|$)/);if(t)return t[1].slice(0,5);const i=Number(e),s=Number.isFinite(i)?new Date(i<1e12?i*1e3:i):new Date(e.replace(/\//g,"-").replace(" ","T"));return Number.isNaN(s.getTime())?e:new Intl.DateTimeFormat("es-CO",{hour:"2-digit",minute:"2-digit",hour12:!1}).format(s)}return new Intl.DateTimeFormat("es-CO",{hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date)}const eb="protexhome-notification-sites",di="sites";function tb(){return new Promise((n,e)=>{const t=indexedDB.open(eb,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(di)||t.result.createObjectStore(di,{keyPath:"serial"})},t.onsuccess=()=>n(t.result),t.onerror=()=>e(t.error||new Error("No se pudo abrir la base local de notificaciones")),t.onblocked=()=>e(new Error("La base local de notificaciones está bloqueada por otra pestaña"))})}async function bu(n){const e=await tb();try{await new Promise((t,i)=>{const s=e.transaction(di,"readwrite"),r=s.objectStore(di);r.clear();for(const o of n){const a=String(o.serial||"").trim(),c=String(o.name||"").trim();a&&c&&r.put({serial:a,name:c})}s.oncomplete=t,s.onerror=()=>i(s.error||new Error("No se pudieron guardar los nombres de sitios")),s.onabort=()=>i(s.error||new Error("Se canceló el guardado de nombres de sitios"))})}finally{e.close()}}const rt="fcm_token",he="fcm_subscriptions",ot="fcm_disabled_subscriptions",Os="fcm_registered_token",nb="BGqsW_ZEnJVC5kfKwtLdz6QUhhciFu53Z-ObyRwNsWscwYNA14eBFHxNn1HFVxsGSUpniXgnddgsRbGfqcmuQyI",Ia="/ProtexHome/";let fe=null,Et=null,An=null,ss=!1,ne=0;const Rn=new Map;async function ib(){if(fe&&Et)return!0;if(console.log("----------------------------------------"),console.log("🔔 Inicializando Firebase Messaging"),console.log("🔐 Secure context:",window.isSecureContext),console.log("🔔 Notification disponible:","Notification"in window),!("serviceWorker"in navigator))throw new Error("Este navegador no soporta Service Worker");if(!window.isSecureContext)throw new Error("Las notificaciones requieren una conexión HTTPS");try{if(!await gu())throw new Error("Firebase Messaging no está disponible en este navegador");return Et=await navigator.serviceWorker.ready,fe=Ly(ue),console.log("✅ Firebase Messaging inicializado"),!0}catch(n){throw console.error("❌ ERROR INICIALIZANDO FCM",n),fe=null,Et=null,n}}function Li(){return An||(An=ib().catch(n=>{throw An=null,n})),An}async function Ls(n){if(!n)throw new Error("No se puede sincronizar nombres de sitios sin el UID del usuario autenticado");try{const e=Ye(ue),t=await Y(O(e,`US/${n}/M`)),i=t.exists()?t.val():{},s=Object.entries(i).map(([r,o])=>({serial:r,name:String((o==null?void 0:o.N)||"").trim()})).filter(r=>r.name);await bu(s),console.log(`✅ Nombres de ${s.length} sitios cargados de US/${n}/M para notificaciones`)}catch(e){throw console.error(`No se pudieron sincronizar los nombres de sitios de US/${n}/M:`,e),e}}async function wu(){await bu([])}function sb(){return/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function rb(){return window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0}async function Ds(n){if(console.log("🔔 showEventNotification:",n),!("Notification"in window))return console.error("❌ Notification API no disponible"),!1;if(Notification.permission!=="granted")return console.warn("🔕 Permiso no concedido:",Notification.permission),!1;try{await Li();const e=String(n.S||"unknown"),t=n.E!==void 0?yu(n):{title:n.title||"ProtexHome",body:n.body||"Actualización de acceso al sitio.",color:"#087e8b"},i={body:t.body,icon:`${Ia}assets/protexhome-icon-512.png`,badge:`${Ia}assets/protexhome-icon-192.png`,tag:`protexhome-${e}`,renotify:!0,requireInteraction:!0,vibrate:[200,100,200],data:{payload:n,serial:e}};return"color"in Notification.prototype&&(i.color=t.color),await Et.showNotification(t.title,i),console.log("✅ Notificación foreground creada"),!0}catch(e){return console.error("❌ Error mostrando notificación foreground:",e),!1}}async function Eu(){if(ss)return{success:!1,error:"Solicitud en curso"};ss=!0;const n=ne;try{if(!("Notification"in window))throw new Error("Este navegador no admite notificaciones");let e=Notification.permission;if(e==="default"){if(sb()&&!rb())throw new Error("En iPhone/iPad instala ProtexHome desde Compartir > Añadir a pantalla de inicio y activa las notificaciones desde la app instalada.");e=await Notification.requestPermission()}if(console.log("🔔 Permiso:",e),e!=="granted")return{success:!1,error:e==="denied"?"Las notificaciones están bloqueadas. Actívalas en los ajustes del navegador o del sistema.":"No se concedió permiso para las notificaciones"};if(await Li(),!fe||!Et)throw new Error("Firebase Messaging no está disponible");const t=await Dy(fe,{vapidKey:nb,serviceWorkerRegistration:Et});if(!t)throw new Error("Firebase no devolvió token");return n!==ne?(await _u(fe),{success:!1,error:"La sesión terminó antes de activar las notificaciones"}):(localStorage.getItem(rt)!==t?(console.log("🔄 Token actualizado"),localStorage.setItem(rt,t)):console.log("✅ Token confirmado"),console.log("🔥 Token:",t),{success:!0,token:t})}catch(e){return console.error("❌ Error obteniendo FCM:",e),{success:!1,error:e.message}}finally{ss=!1}}function Iu(n,e){const t=Rn.get(n);if(t)return t;const i=Promise.resolve().then(e).finally(()=>{Rn.get(n)===i&&Rn.delete(n)});return Rn.set(n,i),i}async function Ms(n,e){const t=localStorage.getItem(rt);if(!t)return;const i=[...new Set(e.map(String).filter(Boolean))],s=`sync:${n}:${t}`;return Iu(s,()=>ob(n,i,t))}async function ob(n,e,t){const i=ne,s=JSON.parse(localStorage.getItem(he)||"{}"),r=Object.keys(s),o=JSON.parse(localStorage.getItem(ot)||"{}"),a=At(ue),c=st(a,"unsubscribeFromSerialTopic");if(await ab(n,t),i!==ne)return;for(const u of e){if(i!==ne)return;if(o[u]!==t&&(o[u]&&delete o[u],s[u]!==t))try{if(await Su(n,u,t,i),i!==ne)return;s[u]=t}catch(d){console.error("❌ Error topic:",u,d)}}for(const u of Object.keys(s)){if(i!==ne)return;if(!e.includes(u))try{await c({serial:u,token:s[u]}),delete s[u],console.log("🔕 Desuscrito de sitio retirado:",u)}catch(d){console.error(`❌ No se pudo cancelar el tema del sitio retirado ${u}:`,d)}}for(const u of Object.keys(o))e.includes(u)||delete o[u];if(i!==ne)return;const l=JSON.parse(localStorage.getItem(he)||"{}");for(const u of r)!e.includes(u)&&!Object.prototype.hasOwnProperty.call(s,u)&&delete l[u];Object.assign(l,s),localStorage.setItem(he,JSON.stringify(l)),localStorage.setItem(ot,JSON.stringify(o))}async function ab(n,e){const t=JSON.parse(localStorage.getItem(Os)||"{}");if(t.userId===n&&t.token===e)return;await st(At(ue),"registerPushToken")({token:e}),localStorage.setItem(Os,JSON.stringify({userId:n,token:e}))}async function Su(n,e,t,i){return Iu(`subscribe:${n}:${t}:${e}`,async()=>{if(JSON.parse(localStorage.getItem(he)||"{}")[e]===t)return;const r=At(ue);if(await st(r,"subscribeToSerialTopic")({serial:e,token:t}),i!==ne){await st(r,"unsubscribeFromSerialTopic")({serial:e,token:t});return}const a=JSON.parse(localStorage.getItem(he)||"{}");a[e]=t,localStorage.setItem(he,JSON.stringify(a)),console.log("✅ Suscrito:",e)})}async function Cu(n,e){const t=localStorage.getItem(rt);if(!t)return;const i=String(e),s=ne,r=JSON.parse(localStorage.getItem(ot)||"{}");delete r[i],localStorage.setItem(ot,JSON.stringify(r));try{await Su(n,i,t,s)}catch(o){console.error("❌ Error nuevo serial:",i,o)}}async function cb(n){const e=localStorage.getItem(rt);if(!e)return{success:!1,error:"No existe token"};const t=At(ue),i=st(t,"unsubscribeFromSerialTopic");try{await i({serial:n,token:e});const s=JSON.parse(localStorage.getItem(he)||"{}");delete s[n],localStorage.setItem(he,JSON.stringify(s));const r=JSON.parse(localStorage.getItem(ot)||"{}");return r[n]=e,localStorage.setItem(ot,JSON.stringify(r)),{success:!0}}catch(s){return console.error("❌ Error desuscribiendo:",s),{success:!1,error:s.message}}}async function Fn({unsubscribeTopics:n=!0,userId:e}={}){ne+=1;const t=localStorage.getItem(rt);let i={},s=!0;try{i=JSON.parse(localStorage.getItem(he)||"{}")}catch(r){s=!1,console.error("No se pudieron leer las suscripciones locales de notificaciones:",r)}if(t&&n){const r=At(ue),o=st(r,"unsubscribeFromSerialTopic");for(const a of Object.keys(i))try{await o({serial:a,token:t})}catch(c){s=!1,console.error(`No se pudo cancelar la notificación para ${a}:`,c)}}if(t&&e)try{await st(At(ue),"unregisterPushToken")({token:t})}catch(r){s=!1,console.error("No se pudo quitar el registro push de esta cuenta:",r)}if(t)try{await Li(),fe&&await _u(fe)}catch(r){s=!1,console.error("No se pudo invalidar el token de notificaciones:",r)}return localStorage.removeItem(rt),localStorage.removeItem(he),localStorage.removeItem(ot),localStorage.removeItem(Os),{success:s}}async function Tu(n){try{if(await Li(),!fe)throw new Error("Firebase Messaging no está disponible");return My(fe,e=>{console.log("📩 FCM foreground:",e),n(e)})}catch(e){return console.error("❌ Error registrando onMessage:",e),()=>{}}}const fb=Object.freeze(Object.defineProperty({__proto__:null,clearNotificationSiteNames:wu,clearSubscriptions:Fn,formatEventMessage:yu,onForegroundMessage:Tu,requestNotificationPermission:Eu,showEventNotification:Ds,subscribeToNewSerial:Cu,syncNotificationSiteNames:Ls,syncSubscriptions:Ms,unsubscribeFromSerial:cb},Symbol.toStringTag,{value:"Module"}));class lb{constructor(){this.pwa=null,this.authController=null,this.dashboardController=null,this.currentUser=null,this.cachedDashboard=null,this.activeView=null,this.backgroundTimer=null,this.currentSerial=null,this.authListenerInitialized=!1,this.startupTimer=null,this.foregroundMessageUnsubscribe=null,this.init()}async init(){var t;console.log("🚀 Iniciando ProtexHome...");const e=document.createElement("div");if(e.id="splash-screen",e.innerHTML=`
            <div class="splash-content">
                <h1>ProtexHome</h1>
                <p>Protección Inteligente</p>
                <div class="splash-loader"></div>
            </div>
        `,document.body.prepend(e),(t=screen.orientation)!=null&&t.lock&&window.matchMedia("(display-mode: standalone)").matches)try{screen.orientation.lock("portrait").catch(i=>{(i==null?void 0:i.name)!=="NotSupportedError"&&console.warn("No se pudo bloquear la orientación de la pantalla:",i)})}catch(i){(i==null?void 0:i.name)!=="NotSupportedError"&&console.warn("No se pudo bloquear la orientación de la pantalla:",i)}this.pwa=new Nm,window.addEventListener("popstate",()=>{this.activeView==="device"&&(pt(),history.replaceState({view:"dashboard"},""),this.activeView="dashboard",this.showDashboard(this.currentUser))}),window.addEventListener("online",()=>{console.log("🟢 Conexión restaurada"),this.activeView==="dashboard"&&this.currentUser?this.showDashboard(this.currentUser):this.authListenerInitialized||this.setupAuthListener()}),window.addEventListener("openWifiModal",i=>{console.log("📶 Abriendo WiFi modal para:",i.detail.serial);const s=document.getElementById("wifi-modal");s&&(s.style.display="flex",window.dispatchEvent(new CustomEvent("wifiModalReady")))}),document.addEventListener("visibilitychange",()=>this.handleVisibilityChange()),window.addEventListener("pagehide",()=>this.handleAppClose()),this.setupAuthListener()}async setupAuthListener(){this.authListenerInitialized||(this.authListenerInitialized=!0,document.getElementById("splash-screen")&&(this.startupTimer=setTimeout(()=>this.showStartupFallback(),15e3)),iv(e=>{var t,i;if(clearTimeout(this.startupTimer),this.startupTimer=null,!e){this.stopActiveView(),this.stopForegroundNotifications(),pt(),this.backgroundTimer&&(clearTimeout(this.backgroundTimer),this.backgroundTimer=null);const s=(t=this.currentUser)==null?void 0:t.uid;localStorage.removeItem("user"),s&&localStorage.removeItem(`sites_${s}`),wu().catch(r=>{console.error("No se pudieron limpiar los nombres locales de sitios al cerrar sesión:",r)}),localStorage.getItem("fcm_token")&&Fn({unsubscribeTopics:!1,userId:s}).then(r=>{r.success||console.error("No se pudo invalidar el token de notificaciones de la sesión cerrada.")}).catch(r=>{console.error("No se pudo limpiar el token de notificaciones de la sesión cerrada:",r)}),this.dashboardController=null,this.activeView="login"}if(this.currentUser=e,e){const s=(i=e.providerData)==null?void 0:i.some(r=>r.providerId==="google.com");e.emailVerified||s?(console.log("✅ Dashboard"),this.startForegroundNotifications(),this.showDashboardAfterSplash(e)):(console.log("⚠️ Verificación"),this.showVerificationAfterSplash(e))}else console.log("👤 Login"),this.showLoginAfterSplash()}))}async startForegroundNotifications(){var i,s;if(this.foregroundMessageUnsubscribe)return;const e=(i=this.currentUser)==null?void 0:i.uid;if(!e)return;const t=await Tu(r=>{var a,c,l;if(!this.currentUser)return;const o=r.data||{};if(o&&o.E!==void 0){let u="";try{u=((a=JSON.parse(localStorage.getItem(`sites_${e}`)||"[]").find(h=>h.serial===o.S))==null?void 0:a.name)||""}catch(d){console.error("No se pudo recuperar el nombre del sitio de la notificación:",d)}Ds({...o,siteName:u,sentTime:r.sentTime}).catch(d=>{console.error("No se pudo mostrar la notificación recibida:",d)})}else Ds({...o,title:o.title||((c=r.notification)==null?void 0:c.title),body:o.body||((l=r.notification)==null?void 0:l.body)}).catch(u=>{console.error("No se pudo mostrar la notificación de acceso al sitio:",u)})});if(((s=this.currentUser)==null?void 0:s.uid)!==e){t==null||t();return}this.foregroundMessageUnsubscribe=t}stopForegroundNotifications(){var e;(e=this.foregroundMessageUnsubscribe)==null||e.call(this),this.foregroundMessageUnsubscribe=null}showStartupFallback(){var t;const e=document.getElementById("splash-screen");e&&(e.innerHTML=`
            <div class="splash-content startup-fallback">
                <h1>ProtexHome</h1>
                <p role="status">La conexión está tardando más de lo esperado.</p>
                <p>Revisa tu conexión a internet e inténtalo de nuevo.</p>
                <button class="startup-retry-button" type="button">Reintentar</button>
            </div>
        `,(t=e.querySelector(".startup-retry-button"))==null||t.addEventListener("click",()=>{window.location.reload()}))}async loadAndPingModules(e){var s,r;if(((s=this.currentUser)==null?void 0:s.uid)!==e.uid)return;this.dashboardController||(this.dashboardController=new da(e));const t=await this.dashboardController.loadSites();if(((r=this.currentUser)==null?void 0:r.uid)!==e.uid)return;document.getElementById("sites-list")&&this.dashboardController.renderSites(t),this.dashboardController.pingAllModules(),this.dashboardController.startHealthCheck(e.uid),this.dashboardController.listenModulesStatus()}hideSplashAndShow(e){const t=document.getElementById("splash-screen");e(),t&&(t.style.transition="opacity 0.25s ease",requestAnimationFrame(()=>{t.style.opacity="0"}),setTimeout(()=>t.remove(),300))}showDashboardAfterSplash(e){this.hideSplashAndShow(()=>this.showDashboard(e))}showVerificationAfterSplash(e){this.hideSplashAndShow(()=>this.showVerification(e))}showLoginAfterSplash(){this.hideSplashAndShow(()=>this.showLogin())}async showDashboard(e){var o,a,c,l,u;if(!(e!=null&&e.uid)||((o=this.currentUser)==null?void 0:o.uid)!==e.uid)return;this.stopActiveView(),this.activeView="dashboard",localStorage.setItem("user",JSON.stringify(e)),this.cachedDashboard={user:e,html:Jr};const t=document.getElementById("main-content");t.innerHTML=Jr,this.dashboardController=new da(e);const i=document.getElementById("sites-list");i&&(i.innerHTML=`
                ${[1,2,3,4].map(()=>`
                    <div class="site-card-skeleton">
                        <div class="site-skeleton-icon"></div>
                        <div class="site-skeleton-copy">
                            <div class="site-skeleton-line title"></div>
                            <div class="site-skeleton-line subtitle"></div>
                        </div>
                        <div class="site-skeleton-status"></div>
                    </div>
                `).join("")}
            `);let s;try{s=await this.dashboardController.loadSites()}catch(d){if(((a=this.currentUser)==null?void 0:a.uid)!==e.uid)return;const h=localStorage.getItem("sites_"+e.uid);console.error("No se pudieron cargar los sitios del dashboard:",d),i&&(i.innerHTML=`
                    <div class="empty-state" role="alert">
                        <span class="material-symbols-outlined">cloud_off</span>
                        <h3>No se pudieron cargar los sitios</h3>
                        <p>Revisa tu conexión y vuelve a intentarlo. Si continúa, comprueba el acceso a Firebase.</p>
                        <button class="auth-button primary-button" id="retry-sites-btn" type="button">Reintentar</button>
                        ${h?'<button class="link-button" id="show-cached-sites-btn" type="button">Mostrar sitios guardados</button>':""}
                    </div>`,(c=document.getElementById("retry-sites-btn"))==null||c.addEventListener("click",()=>this.showDashboard(e)),(l=document.getElementById("show-cached-sites-btn"))==null||l.addEventListener("click",()=>{try{this.dashboardController.renderSites(JSON.parse(h))}catch(f){console.error("La copia local de los sitios está dañada:",f)}})),this._initDashboardEvents(e);return}if(((u=this.currentUser)==null?void 0:u.uid)!==e.uid){this.dashboardController.stopAllListeners();return}this.dashboardController.renderSites(s),this.dashboardController.setupSearch(),this._initDashboardEvents(e);const r=new URLSearchParams(window.location.search).get("serial");if(r){const d=s.find(f=>f.serial===r),h=new URL(window.location.href);h.searchParams.delete("serial"),history.replaceState(history.state,"",`${h.pathname}${h.search}${h.hash}`),d&&this.openDeviceView(d.serial,d.type)}this.syncDashboardNotifications(e,s).catch(d=>{console.error("No se pudieron sincronizar las notificaciones:",d)}),this.loadAndPingModules(e).catch(d=>{console.error("No se pudo iniciar el estado de los módulos:",d)})}async syncDashboardNotifications(e,t){var r,o;if(((r=this.currentUser)==null?void 0:r.uid)!==e.uid||(await Ls(e.uid),!("Notification"in window)))return;console.log("🔔 Comprobando FCM...");const i=localStorage.getItem("fcm_token"),s=Notification.permission==="granted";if(i&&s){if(((o=this.currentUser)==null?void 0:o.uid)!==e.uid)return;console.log("✅ Ya hay token y permiso, sincronizando suscripciones..."),await Ms(e.uid,t.map(a=>a.serial))}}async enableNotifications(e){var s,r;if(((s=this.currentUser)==null?void 0:s.uid)!==e.uid)return;const i=await Eu();if(!i.success){await te(i.error||"No se pudieron activar las notificaciones.","Notificaciones");return}if(((r=this.currentUser)==null?void 0:r.uid)===e.uid)try{const o=await this.dashboardController.loadSites();await Ls(e.uid),await Ms(e.uid,o.map(c=>c.serial)),ft("Notificaciones activadas para tus sitios.","success");const a=document.getElementById("notifications-btn");a&&(a.textContent="Notificaciones activas")}catch(o){console.error("No se pudieron configurar las notificaciones para este usuario:",o),await te("Se permitió la notificación, pero no se pudieron cargar los sitios desde Firebase. Revisa tu conexión y vuelve a sincronizar.","Error de sincronización")}}_initDashboardEvents(e){var s,r,o,a,c,l,u,d;const t=this.dashboardController;(s=document.getElementById("profile-btn"))==null||s.addEventListener("click",()=>{document.getElementById("profile-name").textContent=e.name||e.email,document.getElementById("profile-email").textContent=e.email;const h=document.getElementById("notifications-btn");h&&"Notification"in window&&Notification.permission==="granted"&&(h.textContent="Sincronizar notificaciones"),document.getElementById("profile-modal").style.display="flex"}),(r=document.getElementById("close-profile-modal"))==null||r.addEventListener("click",()=>{document.getElementById("profile-modal").style.display="none"}),(o=document.getElementById("notifications-btn"))==null||o.addEventListener("click",async()=>{await this.enableNotifications(e)}),(a=document.getElementById("logout-btn"))==null||a.addEventListener("click",async()=>{await Xi("¿Quieres cerrar la sesión de ProtexHome?","Cerrar sesión")&&await this.logoutCurrentUser()}),(c=document.getElementById("delete-account-btn"))==null||c.addEventListener("click",async()=>{if(await Xi("Esta acción eliminará permanentemente tu cuenta.","Eliminar cuenta")&&await Xi("No se puede deshacer. ¿Deseas continuar?","Confirmación final")){this.currentUser=null,this.backgroundTimer&&(clearTimeout(this.backgroundTimer),this.backgroundTimer=null),pt(),this.stopForegroundNotifications(),t.stopAllListeners(),(await Fn({userId:e.uid})).success||console.error("No se pudo completar toda la limpieza de notificaciones.");const f=await sv(e.uid);f.success?(localStorage.removeItem("user"),localStorage.removeItem(`sites_${e.uid}`)):f.error!=="Inicia sesión nuevamente para eliminar la cuenta."&&(this.currentUser=e,ft(f.error||"No se pudo eliminar la cuenta.","error"),this.showDashboard(e))}}),(l=document.getElementById("add-site-btn"))==null||l.addEventListener("click",()=>{document.getElementById("add-modal").style.display="flex"}),(u=document.getElementById("close-add-modal"))==null||u.addEventListener("click",()=>{document.getElementById("add-modal").style.display="none"}),(d=document.getElementById("save-site"))==null||d.addEventListener("click",async()=>{const h=document.getElementById("site-serial").value,f=document.getElementById("site-name").value,m=document.getElementById("site-location").value,_=document.getElementById("site-password").value,b=document.getElementById("site-role").value;if(!h||!f){await te("Ingresa el serial y el nombre del sitio.","Datos incompletos");return}if(await t.addSite(h,f,m,_,b)){document.getElementById("add-modal").style.display="none";const w=await t.loadSites();t.renderSites(w),await Cu(e.uid,h)}});const i=document.getElementById("sites-list");i&&(i.onclick=async h=>{const f=h.target.closest(".site-card");if(!f)return;if(!navigator.onLine){await te("Conéctate a internet para abrir este sitio.","Sin conexión");return}const m=f.dataset.serial,_=f.dataset.type||"1";this.openDeviceView(m,_)}),document.querySelectorAll(".modal-overlay").forEach(h=>{h.addEventListener("click",function(f){f.target===this&&(this.style.display="none")})})}async logoutCurrentUser(){const e=this.currentUser;this.currentUser=null,e!=null&&e.uid&&localStorage.removeItem(`sites_${e.uid}`),localStorage.removeItem("user"),this.backgroundTimer&&(clearTimeout(this.backgroundTimer),this.backgroundTimer=null),this.stopActiveView(),this.stopForegroundNotifications(),pt();const t=await Fn({userId:e==null?void 0:e.uid}),i=await tv();if(t.success||ft("Se cerró la sesión, pero algunas notificaciones podrían tardar en desactivarse.","error"),!i.success){this.currentUser=e,ft(i.error||"No se pudo cerrar la sesión.","error"),e&&this.showDashboard(e);return}this.dashboardController=null,this.activeView="login"}showLogin(){console.log("📝 Mostrando login...");const e=document.getElementById("main-content");if(!e)return;e.innerHTML=`
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
        `,document.getElementById("login-view").innerHTML=Ou,document.getElementById("register-view").innerHTML=Lu,document.getElementById("forgot-view").innerHTML=Du,document.getElementById("verify-view").innerHTML=Mu,this.authController=new la,this.setupAuthEvents();const t=[document.getElementById("google-login-btn"),document.getElementById("google-register-btn")].filter(Boolean);t.forEach(i=>{i.disabled=!0,i.setAttribute("aria-busy","true")}),Vl().then(()=>{t.forEach(i=>{i.disabled=!1,i.removeAttribute("aria-busy")})}).catch(i=>{console.error("No se pudo preparar el inicio de sesión con Google:",i),t.forEach(s=>{s.disabled=!1,s.removeAttribute("aria-busy")})})}setupAuthEvents(){var e,t,i,s,r,o,a,c,l,u,d,h,f,m,_,b,g;(e=document.getElementById("switch-to-register"))==null||e.addEventListener("click",()=>this.authController.showView("register")),(t=document.getElementById("switch-to-login"))==null||t.addEventListener("click",()=>this.authController.showView("login")),(i=document.getElementById("forgot-password-btn"))==null||i.addEventListener("click",()=>this.authController.showView("forgot")),(s=document.getElementById("back-to-login"))==null||s.addEventListener("click",()=>this.authController.showView("login")),(r=document.getElementById("back-to-login-from-verify"))==null||r.addEventListener("click",()=>this.authController.showView("login")),(o=document.getElementById("toggle-login-password"))==null||o.addEventListener("click",()=>this.authController.togglePassword("login-password")),(a=document.getElementById("toggle-register-password"))==null||a.addEventListener("click",()=>this.authController.togglePassword("register-password")),(c=document.getElementById("login-form"))==null||c.addEventListener("submit",w=>this.authController.handleLogin(w)),(l=document.getElementById("register-form"))==null||l.addEventListener("submit",w=>this.authController.handleRegister(w)),(u=document.getElementById("forgot-form"))==null||u.addEventListener("submit",w=>this.authController.handleForgotPassword(w)),(d=document.getElementById("google-login-btn"))==null||d.addEventListener("click",()=>this.authController.handleGoogleLogin()),(h=document.getElementById("google-register-btn"))==null||h.addEventListener("click",()=>this.authController.handleGoogleLogin(!0)),(f=document.getElementById("view-terms"))==null||f.addEventListener("click",()=>this.authController.showTermsAndConditions()),(m=document.getElementById("register-terms"))==null||m.addEventListener("change",w=>{const R=document.getElementById("register-terms-error");w.target.checked&&(R.textContent="",R.classList.remove("show"),w.target.removeAttribute("aria-invalid"))}),(_=document.getElementById("resend-verification-btn"))==null||_.addEventListener("click",()=>this.authController.handleResendVerification()),(b=document.getElementById("check-verification-btn"))==null||b.addEventListener("click",()=>this.authController.handleCheckVerification()),(g=document.getElementById("logout-from-verify"))==null||g.addEventListener("click",async()=>await this.logoutCurrentUser())}showVerification(e){var i,s,r;const t=document.getElementById("main-content");t.innerHTML=`
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
                                                <span class="button-loader">
                                    <span class="loader"></span>
                                </span>
                            </button>
                            <button class="auth-button primary-button" id="check-verification-btn">
                                <span class="button-text">Ya verifiqué</span>
                                <span class="button-loader">
                                    <span class="loader"></span>
                                </span>
                            </button>
                            <button class="link-button" id="logout-from-verify">Cerrar sesión</button>
                        </div>
                    </div>
                </div>
            </div>
        `,document.getElementById("verify-email").textContent=e.email||"",this.authController=new la,(i=document.getElementById("resend-verification-btn"))==null||i.addEventListener("click",()=>this.authController.handleResendVerification()),(s=document.getElementById("check-verification-btn"))==null||s.addEventListener("click",async()=>{await this.authController.handleCheckVerification()}),(r=document.getElementById("logout-from-verify"))==null||r.addEventListener("click",async()=>await this.logoutCurrentUser())}showOfflineDashboard(){const e=document.getElementById("splash-screen");e&&(e.style.opacity="0",e.style.transition="opacity 0.2s ease",setTimeout(()=>e.remove(),150));const t=document.getElementById("main-content");t.innerHTML=xu;const i=JSON.parse(localStorage.getItem("user")||"{}"),s=JSON.parse(localStorage.getItem("sites_"+i.uid)||"[]"),r=document.getElementById("offline-sites-list");r&&(s.length>0?r.innerHTML=s.map(a=>`
                    <div class="site-card">
                        <div class="site-icon offline">
                            <span class="material-symbols-outlined">${W(a.icon||"devices")}</span>
                        </div>
                        <div class="site-info">
                            <h3>${W(a.name)}</h3>
                            <p class="site-serial">${W(a.typeName||"Dispositivo")} • ${W(a.serial)}</p>
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
                    </div>`);const o=document.querySelector(".add-site-container");o&&(o.style.display="none")}stopActiveView(){this.dashboardController&&this.dashboardController.stopAllListeners()}async promptAlarmPin(e){const t=this.currentUser;if(!t||!t.uid)return await te("Inicia sesión para continuar.","Sesión requerida"),{success:!1};let i=null;try{const s=Ye(),r=O(s,`US/${t.uid}/M/${e}/C`),o=await Y(r);o.exists()&&(i=o.val())}catch(s){return console.error("❌ Error leyendo la clave:",s),await te("No se pudo leer la clave del dispositivo.","Error de acceso"),{success:!1}}if(i==null||i===""||i===0)return await te("Este dispositivo no tiene una clave configurada. Contacta al propietario.","Clave no configurada"),{success:!1};if(Number(i)===999999999){console.log("🔑 Clave inicial detectada, abriendo modal de configuración");const s=await this.showChangePinModal(e,i);return s&&s.success?(console.log("✅ Clave configurada, entrando directo al DSC"),s):{success:!1}}return new Promise(s=>{const r=document.createElement("div");r.className="pin-modal-overlay",r.innerHTML=`
        <div class="pin-modal">
            <div class="pin-modal-header">
                <span class="material-symbols-outlined pin-modal-icon">lock</span>
                <h3>Ingresa tu clave</h3>
                <p>Alarma DSC · ${W(e)}</p>
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
    `,document.body.appendChild(r);const o=r.querySelector("#pin-input"),a=r.querySelector("#pin-error"),c=r.querySelector("#pin-submit"),l=r.querySelector("#pin-keypad"),u=r.querySelector("#pin-toggle"),d=u.querySelector(".material-symbols-outlined");let h=0;const f=3;u.addEventListener("click",()=>{const b=o.type==="password";o.type=b?"text":"password",d.textContent=b?"visibility_off":"visibility"});const m=()=>{c.disabled=o.value.length<4},_=b=>{r.style.opacity="0",setTimeout(()=>r.remove(),200),s(b)};l.addEventListener("click",b=>{const g=b.target.closest(".pin-key");if(!g)return;const w=g.dataset.key;if(w==="cancel"){_({success:!1});return}if(w==="clear"){o.value=o.value.slice(0,-1),m();return}o.value.length>=6||(o.value+=w,m(),a.textContent="")}),c.addEventListener("click",()=>{const b=o.value.trim();if(!b)return;const g=Number(b),w=Number(i);g===w?(console.log("✅ PIN correcto"),_({success:!0,pin:b})):(h++,console.log(`❌ PIN incorrecto (${h}/${f})`),h>=f?(a.textContent="❌ Demasiados intentos. Intenta más tarde.",c.disabled=!0,l.style.pointerEvents="none",setTimeout(()=>_({success:!1}),2e3)):(a.textContent=`❌ Clave incorrecta (${h}/${f})`,o.value="",m(),navigator.vibrate&&navigator.vibrate(100)))}),o.addEventListener("keydown",b=>{b.key==="Enter"&&!c.disabled&&c.click()}),setTimeout(()=>o.focus(),100)})}showChangePinModal(e,t){return new Promise(i=>{const s=this.currentUser;if(!s||!s.uid){te("Inicia sesión para continuar.","Sesión requerida"),i(!1);return}const r=Number(t)===999999999;console.log("🔑 Modo del modal:",r?"INICIAL (sin clave actual)":"NORMAL");const o=document.createElement("div");o.className="pin-modal-overlay";const a=r?"":`
            <div class="pin-field-group">
                <label class="pin-field-label">Clave actual</label>
                <div class="pin-field-wrapper">
                    <input type="password" id="pin-current" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                    <button class="pin-field-toggle" type="button" data-target="pin-current">
                        <span class="material-symbols-outlined">visibility</span>
                    </button>
                </div>
            </div>
        `,c=r?"🔐 Configurar clave":"Cambiar clave",l=r?"Establece tu nueva clave personal":`Alarma DSC · ${W(e)}`;o.innerHTML=`
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
        `,document.body.appendChild(o);const u=o.querySelector("#pin-current"),d=o.querySelector("#pin-new"),h=o.querySelector("#pin-confirm"),f=o.querySelector("#pin-error"),m=o.querySelector("#pin-cancel"),_=o.querySelector("#pin-save");o.querySelectorAll(".pin-field-toggle").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.target,R=o.querySelector("#"+w);if(!R)return;const M=R.type==="password";R.type=M?"text":"password";const dt=g.querySelector(".material-symbols-outlined");dt.textContent=M?"visibility_off":"visibility"})}),[u,d,h].forEach(g=>{g&&g.addEventListener("input",()=>{g.value=g.value.replace(/\D/g,""),f.textContent=""})}),setTimeout(()=>{r?d.focus():u&&u.focus()},150);const b=g=>{o.style.opacity="0",setTimeout(()=>{o.remove(),i(g)},200)};m.addEventListener("click",()=>b({success:!1})),_.addEventListener("click",async()=>{const g=r?"999999999":(u==null?void 0:u.value.trim())||"",w=d.value.trim(),R=h.value.trim();if(!r&&!g){f.textContent="⚠️ Ingresa tu clave actual",u.focus();return}if(!w){f.textContent="⚠️ Ingresa la nueva clave",d.focus();return}if(w.length!==4&&w.length!==6){f.textContent="⚠️ La nueva clave debe tener 4 o 6 dígitos",d.focus();return}if(Number(w)===999999999){f.textContent="⚠️ No puedes usar la clave inicial",d.focus();return}if(w!==R){f.textContent="⚠️ Las claves no coinciden",h.value="",h.focus();return}if(!r&&Number(g)!==Number(t)){f.textContent="❌ Clave actual incorrecta",u.value="",u.focus(),navigator.vibrate&&navigator.vibrate(100);return}_.disabled=!0,_.textContent="Guardando...";try{const M=Ye();await le(O(M,`US/${s.uid}/M/${e}/C`),Number(w)),console.log("✅ Clave actualizada"),f.style.color="var(--success)",f.textContent="✅ Clave actualizada correctamente",navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{ft("🔑 Clave actualizada","success"),b({success:!0,pin:w})},700)}catch(M){console.error("❌ Error guardando clave:",M),f.style.color="var(--alert)",f.textContent="❌ Error al guardar. Intenta de nuevo.",_.disabled=!1,_.textContent="Guardar"}}),o.addEventListener("keydown",g=>{g.key==="Enter"&&_.click()})})}showChangePinModal(e,t){return new Promise(i=>{const s=this.currentUser;if(!s||!s.uid){te("Inicia sesión para continuar.","Sesión requerida"),i(!1);return}const r=Number(t)===999999999;console.log("🔑 Modo del modal:",r?"INICIAL (sin clave actual)":"NORMAL");const o=document.createElement("div");o.className="pin-modal-overlay";const a=r?"":`
            <div class="pin-field-group">
                <label class="pin-field-label">Clave actual</label>
                <div class="pin-field-wrapper">
                    <input type="password" id="pin-current" class="pin-field-input" maxlength="6" inputmode="numeric" placeholder="• • • •">
                    <button class="pin-field-toggle" type="button" data-target="pin-current">
                        <span class="material-symbols-outlined">visibility</span>
                    </button>
                </div>
            </div>
        `,c=r?"🔐 Configurar clave":"Cambiar clave",l=r?"Establece tu nueva clave personal":`Alarma DSC · ${W(e)}`;o.innerHTML=`
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
        `,document.body.appendChild(o);const u=o.querySelector("#pin-current"),d=o.querySelector("#pin-new"),h=o.querySelector("#pin-confirm"),f=o.querySelector("#pin-error"),m=o.querySelector("#pin-cancel"),_=o.querySelector("#pin-save");o.querySelectorAll(".pin-field-toggle").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.target,R=o.querySelector("#"+w);if(!R)return;const M=R.type==="password";R.type=M?"text":"password";const dt=g.querySelector(".material-symbols-outlined");dt.textContent=M?"visibility_off":"visibility"})}),[u,d,h].forEach(g=>{g&&g.addEventListener("input",()=>{g.value=g.value.replace(/\D/g,""),f.textContent=""})}),setTimeout(()=>{r?d.focus():u&&u.focus()},150);const b=g=>{o.style.opacity="0",setTimeout(()=>{o.remove(),i(g)},200)};m.addEventListener("click",()=>b(!1)),_.addEventListener("click",async()=>{const g=r?"999999999":(u==null?void 0:u.value.trim())||"",w=d.value.trim(),R=h.value.trim();if(!r&&!g){f.textContent="⚠️ Ingresa tu clave actual",u.focus();return}if(!w){f.textContent="⚠️ Ingresa la nueva clave",d.focus();return}if(w.length!==4&&w.length!==6){f.textContent="⚠️ La nueva clave debe tener 4 o 6 dígitos",d.focus();return}if(Number(w)===999999999){f.textContent="⚠️ No puedes usar la clave inicial",d.focus();return}if(w!==R){f.textContent="⚠️ Las claves no coinciden",h.value="",h.focus();return}if(!r&&Number(g)!==Number(t)){f.textContent="❌ Clave actual incorrecta",u.value="",u.focus(),navigator.vibrate&&navigator.vibrate(100);return}_.disabled=!0,_.textContent="Guardando...";try{const M=Ye();await le(O(M,`US/${s.uid}/M/${e}/C`),Number(w)),console.log("✅ Clave actualizada"),f.style.color="var(--success)",f.textContent="✅ Clave actualizada correctamente",navigator.vibrate&&navigator.vibrate(50),setTimeout(()=>{ft("🔑 Clave actualizada","success"),b("saved")},700)}catch(M){console.error("❌ Error guardando clave:",M),f.style.color="var(--alert)",f.textContent="❌ Error al guardar. Intenta de nuevo.",_.disabled=!1,_.textContent="Guardar"}}),o.addEventListener("keydown",g=>{g.key==="Enter"&&_.click()})})}async openDeviceView(e,t){let i=null;if(t===5||t==="5"){const s=await this.promptAlarmPin(e);if(!s||!s.success){console.log("⛔ Acceso denegado a DSC",e);return}i=s.pin}if(this.stopActiveView(),this.activeView="device",this.currentSerial=e,history.pushState({view:"device"},""),t===1||t==="1"){const{openDoorView:s}=await rs(async()=>{const{openDoorView:r}=await import("./doorViewController-DNP9LySR.js");return{openDoorView:r}},__vite__mapDeps([0,1]));s(this.currentUser,e,()=>{pt(),history.replaceState({view:"dashboard"},""),this.activeView="dashboard",this.showDashboard(this.currentUser)})}else if(t===5||t==="5"){const{openAlarmDscView:s}=await rs(async()=>{const{openAlarmDscView:r}=await import("./alarmDscViewController-D69QRD3y.js");return{openAlarmDscView:r}},__vite__mapDeps([2,1]));s(this.currentUser,e,i,()=>{pt(),history.replaceState({view:"dashboard"},""),this.activeView="dashboard",this.showDashboard(this.currentUser)})}else await te(`La vista para el tipo ${t} aún está en desarrollo.`,"Función no disponible")}handleVisibilityChange(){if(document.hidden)this.backgroundTimer||(this.backgroundTimer=setTimeout(async()=>{console.log("⏰ 10s en segundo plano, poniendo módulos en reposo");const e=this.currentUser;e&&e.uid&&await ua(e.uid,()=>{var t;return((t=this.currentUser)==null?void 0:t.uid)===e.uid}),this.backgroundTimer=null},1e4));else if(this.backgroundTimer)clearTimeout(this.backgroundTimer),this.backgroundTimer=null,console.log("✅ Regresó antes de 10s, continuando normal");else{console.log("🔄 Regresó después de reposo, restaurando pings");const e=this.currentUser;e&&e.uid&&(this.activeView==="dashboard"?this.showDashboard(e):this.activeView==="device"&&this.currentSerial&&Fr(this.currentSerial,()=>{var t;return((t=this.currentUser)==null?void 0:t.uid)===e.uid}))}}handleAppClose(){const e=this.currentUser;e&&e.uid&&ua(e.uid,()=>{var t;return((t=this.currentUser)==null?void 0:t.uid)===e.uid})}}function ub(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:s,onRegisteredSW:r,onRegisterError:o}=n;let a,c;const l=async(d=!0)=>{await c};async function u(){if("serviceWorker"in navigator){if(a=await rs(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-BqEJf4Xk.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/ProtexHome/sw.js",{scope:"/ProtexHome/",type:"classic"})).catch(d=>{o==null||o(d)}),!a)return;a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||i==null||i()}),a.register({immediate:e}).then(d=>{r?r("/ProtexHome/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return c=u(),l}function In(n){n.preventDefault()}document.addEventListener("gesturestart",In,{passive:!1});document.addEventListener("gesturechange",In,{passive:!1});document.addEventListener("touchstart",n=>{n.touches.length>1&&In(n)},{passive:!1});document.addEventListener("touchmove",n=>{n.touches.length>1&&In(n)},{passive:!1});document.addEventListener("wheel",n=>{n.ctrlKey&&In(n)},{passive:!1});function Ht(n){!n||!navigator.onLine||document.visibilityState!=="visible"||n.update().catch(e=>{console.error("No se pudo comprobar si hay una actualización de ProtexHome:",e)})}ub({immediate:!0,onRegisteredSW:(n,e)=>{e&&(Ht(e),window.setInterval(()=>Ht(e),5*60*1e3),window.addEventListener("focus",()=>Ht(e)),window.addEventListener("online",()=>Ht(e)),document.addEventListener("visibilitychange",()=>Ht(e)))},onRegisterError:n=>{console.error("No se pudo registrar el Service Worker de ProtexHome:",n)}});console.log("🟢 Iniciando ProtexHome...");const ku=new lb;document.querySelector("main")._app=ku;window._app=ku;export{rs as _,Y as a,ft as b,le as c,te as d,W as e,hb as f,Ye as g,cb as h,db as i,Hl as j,pt as k,rv as l,ov as m,st as n,el as o,Fr as p,At as q,O as r,Xi as s,ue as t,br as u,fb as v};
