// src/controllers/authController.js
import {
    registerWithEmail,
    loginWithEmail,
    loginWithGoogle,
    resetPassword,
    resendVerificationEmail,
    checkEmailVerification,
    validateEmail,
    validatePassword,
    validateName,
    logoutUser
} from '../firebase.js';

export class AuthController {
    constructor() {
        this.currentView = 'login';
    }

    // ========== NAVEGACIÓN ==========
    showView(viewName) {
        document.querySelectorAll('.auth-view').forEach(view => view.classList.remove('active'));
        document.getElementById(`${viewName}-view`)?.classList.add('active');
        this.currentView = viewName;

        document.querySelectorAll('.auth-error').forEach(el => {
            el.classList.remove('show');
            el.textContent = '';
        });
    }

    // ========== LOGIN ==========
    async handleLogin(e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('remember-me').checked;
        const errorDiv = document.getElementById('login-error');
        const submitBtn = document.getElementById('login-submit');

        if (!validateEmail(email)) {
            this.showInputError('login-email', 'Ingresa un correo válido');
            return;
        }
        if (!validatePassword(password)) {
            this.showInputError('login-password', 'Mínimo 6 caracteres');
            return;
        }

        this.setButtonLoading(submitBtn, true);
        errorDiv.classList.remove('show');

        const result = await loginWithEmail(email, password, rememberMe);

        if (result.success) {
            console.log('Login exitoso');
        } else if (result.needsVerification) {
            errorDiv.textContent = result.error;
            errorDiv.classList.add('show');
            this.showView('verify');
        } else {
            errorDiv.textContent = result.error;
            errorDiv.classList.add('show');
        }

        this.setButtonLoading(submitBtn, false);
    }

    // ========== REGISTRO ==========
    async handleRegister(e) {
        e.preventDefault();

        const name = document.getElementById('register-name').value;
        const lastName = document.getElementById('register-lastname').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const errorDiv = document.getElementById('register-error');
        const submitBtn = document.getElementById('register-submit');

        let hasError = false;

        if (!validateName(name)) {
            this.showInputError('register-name', 'Ingresa tu nombre');
            hasError = true;
        }
        if (!validateName(lastName)) {
            this.showInputError('register-lastname', 'Ingresa tu apellido');
            hasError = true;
        }
        if (!validateEmail(email)) {
            this.showInputError('register-email', 'Ingresa un correo válido');
            hasError = true;
        }
        if (!validatePassword(password)) {
            this.showInputError('register-password', 'Mínimo 6 caracteres');
            hasError = true;
        }

        if (hasError) return;

        this.setButtonLoading(submitBtn, true);
        errorDiv.classList.remove('show');

        const result = await registerWithEmail(email, password, { name, lastName });

        if (result.success) {
            console.log('Registro exitoso, esperando verificación');
        } else {
            errorDiv.textContent = result.error;
            errorDiv.classList.add('show');
        }

        this.setButtonLoading(submitBtn, false);
    }

    // ========== GOOGLE ==========
    async handleGoogleLogin() {
        const result = await loginWithGoogle();

        if (!result.success) {
            const errorDiv = document.getElementById(
                this.currentView === 'register' ? 'register-error' : 'login-error'
            );
            if (errorDiv) {
                errorDiv.textContent = result.error;
                errorDiv.classList.add('show');
            }
        }
    }

    // ========== RECUPERAR ==========
    async handleForgotPassword(e) {
        e.preventDefault();

        const email = document.getElementById('forgot-email').value;
        const errorDiv = document.getElementById('forgot-error');
        const successDiv = document.getElementById('forgot-success');
        const submitBtn = document.getElementById('forgot-submit');

        if (!validateEmail(email)) {
            this.showInputError('forgot-email', 'Ingresa un correo válido');
            return;
        }

        this.setButtonLoading(submitBtn, true);
        errorDiv.classList.remove('show');
        successDiv.classList.remove('show');

        const result = await resetPassword(email);

        if (result.success) {
            successDiv.textContent = result.message;
            successDiv.classList.add('show');
        } else {
            errorDiv.textContent = result.error;
            errorDiv.classList.add('show');
        }

        this.setButtonLoading(submitBtn, false);
    }

    // ========== VERIFICACIÓN ==========
    async handleResendVerification() {
        const btn = document.getElementById('resend-verification-btn');
        const message = document.getElementById('verify-message');

        this.setButtonLoading(btn, true);
        const result = await resendVerificationEmail();

        if (result.success) {
            message.innerHTML = `✅ ${result.message}`;
            message.style.color = '#16a34a';
        } else {
            message.innerHTML = `❌ ${result.error}`;
            message.style.color = '#dc2626';
        }

        this.setButtonLoading(btn, false);

        setTimeout(() => {
            message.innerHTML = 'Hemos enviado un enlace de verificación a tu correo. Revisa tu bandeja de entrada.';
            message.style.color = '';
        }, 5000);
    }

    async handleCheckVerification() {
        const btn = document.getElementById('check-verification-btn');
        const message = document.getElementById('verify-message');

        this.setButtonLoading(btn, true);
        const result = await checkEmailVerification();

        if (result.success && result.verified) {
            message.innerHTML = '✅ ¡Correo verificado! Entrando...';
            message.style.color = '#16a34a';
            setTimeout(() => window.location.reload(), 1000);
        } else {
            message.innerHTML = '⚠️ Tu correo aún no ha sido verificado.';
            message.style.color = '#f59e0b';
            setTimeout(() => {
                message.innerHTML = 'Hemos enviado un enlace de verificación a tu correo.';
                message.style.color = '';
            }, 5000);
        }

        this.setButtonLoading(btn, false);
    }

    // ========== UTILIDADES ==========
    togglePassword(inputId) {
        const input = document.getElementById(inputId);
        const icon = input?.parentElement.querySelector('.toggle-password span');
        if (input && icon) {
            if (input.type === 'password') {
                input.type = 'text';
                icon.textContent = 'visibility_off';
            } else {
                input.type = 'password';
                icon.textContent = 'visibility';
            }
        }
    }

    showInputError(inputId, message) {
        const errorSpan = document.getElementById(`${inputId}-error`);
        const input = document.getElementById(inputId);

        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.classList.add('show');
        }
        if (input) {
            input.classList.add('error');
            input.addEventListener('input', () => {
                errorSpan?.classList.remove('show');
                input.classList.remove('error');
            }, { once: true });
        }
    }

    setButtonLoading(button, isLoading) {
        if (!button) return;

        const buttonText = button.querySelector('.button-text');
        const buttonLoader = button.querySelector('.button-loader');

        button.disabled = isLoading;
        if (buttonText) buttonText.style.display = isLoading ? 'none' : 'block';
        if (buttonLoader) buttonLoader.style.display = isLoading ? 'block' : 'none';
    }
}