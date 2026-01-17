/**
 * DreamsTour Authentication System
 * Handles login, register, logout, and session management with backend API
 */

const API_BASE_URL = 'https://dreamtoursbackend.vercel.app/api';

// Authentication State Manager
const AuthManager = {
    // Get stored token
    getToken() {
        return localStorage.getItem('dreamstour_token');
    },

    // Set token
    setToken(token) {
        localStorage.setItem('dreamstour_token', token);
    },

    // Get user data
    getUser() {
        const userData = localStorage.getItem('dreamstour_user');
        return userData ? JSON.parse(userData) : null;
    },

    // Set user data
    setUser(user) {
        localStorage.setItem('dreamstour_user', JSON.stringify(user));
    },

    // Check if user is authenticated
    isAuthenticated() {
        return !!this.getToken();
    },

    // Clear authentication data
    clearAuth() {
        localStorage.removeItem('dreamstour_token');
        localStorage.removeItem('dreamstour_user');
        localStorage.removeItem('dreamstour_session');
    },

    // Show loading state
    showLoading(button) {
        const originalText = button.innerHTML;
        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status"></span>Loading...';
        return originalText;
    },

    // Hide loading state
    hideLoading(button, originalText) {
        button.disabled = false;
        button.innerHTML = originalText;
    },

    // Show error message
    showError(message, formId) {
        // Remove existing alerts
        const existingAlert = document.querySelector(`#${formId} .alert`);
        if (existingAlert) existingAlert.remove();

        // Create alert
        const alert = document.createElement('div');
        alert.className = 'alert alert-danger alert-dismissible fade show mb-3';
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        const form = document.getElementById(formId);
        form.insertBefore(alert, form.firstChild);

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) alert.remove();
        }, 5000);
    },

    // Show success message
    showSuccess(message, formId) {
        const existingAlert = document.querySelector(`#${formId} .alert`);
        if (existingAlert) existingAlert.remove();

        const alert = document.createElement('div');
        alert.className = 'alert alert-success alert-dismissible fade show mb-3';
        alert.innerHTML = `
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;

        const form = document.getElementById(formId);
        form.insertBefore(alert, form.firstChild);
    }
};

// API Request Handler
async function makeAPIRequest(endpoint, options = {}) {
    const token = AuthManager.getToken();
    
    const headers = {
        'Content-Type': 'application/json',
        ...options.headers
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
            credentials: 'include'
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || 'Something went wrong');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// Login Function
async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const remember = document.getElementById('remembers_me')?.checked;

    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = AuthManager.showLoading(submitButton);

    try {
        const response = await makeAPIRequest('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password })
        });

        if (response.success) {
            // Store token and user data
            AuthManager.setToken(response.token);
            AuthManager.setUser(response.data);
            localStorage.setItem('dreamstour_session', 'active');

            if (remember) {
                localStorage.setItem('dreamstour_remember', 'true');
            }

            // Show success and redirect
            AuthManager.showSuccess('Login successful! Redirecting...', 'loginForm');
            
            setTimeout(() => {
                // Check if there's a redirect URL
                const urlParams = new URLSearchParams(window.location.search);
                const redirect = urlParams.get('redirect') || '../index.html';
                window.location.href = redirect;
            }, 1000);
        }
    } catch (error) {
        AuthManager.hideLoading(submitButton, originalText);
        AuthManager.showError(error.message || 'Login failed. Please check your credentials.', 'loginForm');
    }
}

// Register Function
async function handleRegister(event) {
    event.preventDefault();

    const fullName = document.getElementById('registerName').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const phone = document.getElementById('registerPhone')?.value.trim();
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    const agree = document.getElementById('agree')?.checked;

    // Client-side validation
    if (!fullName || !email || !password || !confirmPassword) {
        AuthManager.showError('Please fill in all required fields', 'registerForm');
        return;
    }

    if (password !== confirmPassword) {
        AuthManager.showError('Passwords do not match', 'registerForm');
        return;
    }

    if (password.length < 6) {
        AuthManager.showError('Password must be at least 6 characters long', 'registerForm');
        return;
    }

    if (agree !== undefined && !agree) {
        AuthManager.showError('Please agree to the Terms of Service', 'registerForm');
        return;
    }

    // Split name into first and last
    const nameParts = fullName.split(' ');
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(' ') || nameParts[0];

    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = AuthManager.showLoading(submitButton);

    try {
        const response = await makeAPIRequest('/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                password
            })
        });

        if (response.success) {
            // Store token and user data
            AuthManager.setToken(response.token);
            AuthManager.setUser(response.data);
            localStorage.setItem('dreamstour_session', 'active');

            // Show success message
            AuthManager.showSuccess('Registration successful! Welcome to DreamsTour. Redirecting...', 'registerForm');

            setTimeout(() => {
                const urlParams = new URLSearchParams(window.location.search);
                const redirect = urlParams.get('redirect') || '../index.html';
                window.location.href = redirect;
            }, 1500);
        }
    } catch (error) {
        AuthManager.hideLoading(submitButton, originalText);
        AuthManager.showError(error.message || 'Registration failed. Please try again.', 'registerForm');
    }
}

// Logout Function
async function handleLogout() {
    try {
        // Call logout API
        await makeAPIRequest('/auth/logout', { method: 'POST' });
    } catch (error) {
        console.error('Logout error:', error);
    } finally {
        // Clear local auth data
        AuthManager.clearAuth();
        
        // Redirect to home
        window.location.href = '/html/index.html';
    }
}

// Check Authentication Status
async function checkAuthStatus() {
    if (!AuthManager.isAuthenticated()) {
        return false;
    }

    try {
        const response = await makeAPIRequest('/auth/me');
        if (response.success) {
            AuthManager.setUser(response.data);
            return true;
        }
    } catch (error) {
        // Token invalid or expired
        AuthManager.clearAuth();
        return false;
    }
}

// Update UI based on auth status
function updateAuthUI() {
    const isAuth = AuthManager.isAuthenticated();
    const user = AuthManager.getUser();

    // Update navigation
    const loginLinks = document.querySelectorAll('.auth-login-link');
    const registerLinks = document.querySelectorAll('.auth-register-link');
    const userMenus = document.querySelectorAll('.auth-user-menu');
    const logoutButtons = document.querySelectorAll('.auth-logout-btn');

    if (isAuth && user) {
        // Hide login/register
        loginLinks.forEach(link => link.style.display = 'none');
        registerLinks.forEach(link => link.style.display = 'none');

        // Show user menu
        userMenus.forEach(menu => {
            menu.style.display = 'block';
            const userName = menu.querySelector('.auth-user-name');
            if (userName) {
                userName.textContent = `${user.firstName} ${user.lastName}`;
            }
        });

        // Setup logout buttons
        logoutButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (confirm('Are you sure you want to logout?')) {
                    handleLogout();
                }
            });
        });
    } else {
        // Show login/register
        loginLinks.forEach(link => link.style.display = 'block');
        registerLinks.forEach(link => link.style.display = 'block');

        // Hide user menu
        userMenus.forEach(menu => menu.style.display = 'none');
    }
}

// Protected Page Check
function requireAuth(redirectUrl = '/html/login.html') {
    if (!AuthManager.isAuthenticated()) {
        const currentUrl = encodeURIComponent(window.location.pathname);
        window.location.href = `${redirectUrl}?redirect=${currentUrl}`;
        return false;
    }
    return true;
}

// Show auth modal for checkout
function showAuthModal() {
    // Create modal if it doesn't exist
    let modal = document.getElementById('authRequiredModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'authRequiredModal';
        modal.className = 'modal fade';
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Authentication Required</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center py-4">
                        <div class="mb-3">
                            <i class="isax isax-lock text-primary" style="font-size: 48px;"></i>
                        </div>
                        <h6 class="mb-2">Please Sign In to Continue</h6>
                        <p class="text-muted">You need to be logged in to proceed with the booking</p>
                    </div>
                    <div class="modal-footer justify-content-center border-0 pt-0">
                        <a href="/html/login.html?redirect=${encodeURIComponent(window.location.pathname)}" class="btn btn-primary px-4">
                            Sign In
                        </a>
                        <a href="/html/register.html?redirect=${encodeURIComponent(window.location.pathname)}" class="btn btn-outline-primary px-4">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    // Show modal
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

// Initialize auth on page load
document.addEventListener('DOMContentLoaded', () => {
    updateAuthUI();
    
    // Check auth status on protected pages
    const isProtectedPage = document.body.classList.contains('protected-page');
    if (isProtectedPage) {
        checkAuthStatus();
    }
});

// Export for global use
window.AuthManager = AuthManager;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.handleLogout = handleLogout;
window.requireAuth = requireAuth;
window.showAuthModal = showAuthModal;
window.checkAuthStatus = checkAuthStatus;
