/**
 * Enhanced Auth Manager with Fixed Login
 */

// API Base URL
const API_BASE_URL = 'http://localhost:5001/api';

// Auth Manager
const AuthManager = {
    getToken() {
        return localStorage.getItem('authToken');
    },
    
    setToken(token) {
        localStorage.setItem('authToken', token);
    },
    
    getUser() {
        const userStr = localStorage.getItem('authUser');
        return userStr ? JSON.parse(userStr) : null;
    },
    
    setUser(user) {
        localStorage.setItem('authUser', JSON.stringify(user));
    },
    
    isAuthenticated() {
        return !!this.getToken() && !!this.getUser();
    },
    
    logout() {
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        localStorage.removeItem('rememberMe');
        window.location.href = '../index.html';
    }
};

/**
 * Handle Login - Fixed version
 */
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email')?.value.trim();
    const password = document.getElementById('login-password')?.value;
    const rememberMe = document.getElementById('remembers_me')?.checked;
    
    // Get or create error display element
    let errorDisplay = document.getElementById('login-error');
    if (!errorDisplay) {
        const form = document.getElementById('login-form') || document.querySelector('#login-modal form');
        if (form) {
            errorDisplay = document.createElement('div');
            errorDisplay.id = 'login-error';
            errorDisplay.className = 'alert alert-danger d-none mb-3';
            errorDisplay.setAttribute('role', 'alert');
            form.insertBefore(errorDisplay, form.firstChild);
        }
    }
    
    // Hide previous errors
    if (errorDisplay) {
        errorDisplay.classList.add('d-none');
        errorDisplay.textContent = '';
    }
    
    if (!email || !password) {
        if (errorDisplay) {
            errorDisplay.textContent = 'Please enter both email and password';
            errorDisplay.classList.remove('d-none');
        }
        return;
    }
    
    // Show loading state
    const loginBtn = document.getElementById('loginBtn');
    const loginBtnText = document.getElementById('loginBtnText');
    const loginBtnLoading = document.getElementById('loginBtnLoading');
    
    if (loginBtn) loginBtn.disabled = true;
    if (loginBtnText) loginBtnText.style.display = 'none';
    if (loginBtnLoading) loginBtnLoading.style.display = 'inline-block';
    
    try {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || 'Invalid email or password');
        }
        
        // Store auth data
        AuthManager.setToken(result.token);
        AuthManager.setUser(result.data);
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        // Close modal if it exists
        try {
            const modalEl = document.getElementById('login-modal');
            if (modalEl) {
                const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
                modal.hide();
            }
        } catch (e) {
            console.log('Modal close error:', e);
        }
        
        // Determine correct redirect path based on current page location
        const currentPath = window.location.pathname;
        let dashboardPath;
        
        if (currentPath.includes('/dashboard/')) {
            dashboardPath = 'user-dashboard.html';
        } else if (currentPath.includes('/html/')) {
            dashboardPath = 'dashboard/user-dashboard.html';
        } else {
            dashboardPath = 'html/dashboard/user-dashboard.html';
        }
        
        console.log('Redirecting to:', dashboardPath, 'from:', currentPath);
        window.location.href = dashboardPath;
        
    } catch (error) {
        console.error('Login error:', error);
        if (errorDisplay) {
            errorDisplay.textContent = error.message || 'Invalid email or password. Please try again.';
            errorDisplay.classList.remove('d-none');
        }
    } finally {
        if (loginBtn) loginBtn.disabled = false;
        if (loginBtnText) loginBtnText.style.display = 'inline-block';
        if (loginBtnLoading) loginBtnLoading.style.display = 'none';
    }
}

/**
 * Handle Register
 */
async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name')?.value.trim();
    const email = document.getElementById('register-email')?.value.trim();
    const phone = document.getElementById('register-phone')?.value.trim();
    const password = document.getElementById('register-password')?.value;
    const confirmPassword = document.getElementById('register-confirm-password')?.value;
    const agree = document.getElementById('agree')?.checked;
    
    // Validation
    if (!name || !email || !password) {
        alert('Please fill in all required fields');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }
    
    if (!agree) {
        alert('Please agree to the Terms of Service');
        return;
    }
    
    // Show loading
    const registerBtn = document.getElementById('registerBtn');
    const registerBtnText = document.getElementById('registerBtnText');
    const registerBtnLoading = document.getElementById('registerBtnLoading');
    
    if (registerBtn) registerBtn.disabled = true;
    if (registerBtnText) registerBtnText.style.display = 'none';
    if (registerBtnLoading) registerBtnLoading.style.display = 'inline-block';
    
    try {
        const nameParts = name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.slice(1).join(' ') || nameParts[0];
        
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                phone,
                password
            })
        });
        
        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || 'Registration failed');
        }
        
        // Store auth data
        AuthManager.setToken(result.token);
        AuthManager.setUser(result.data);
        
        // Close modal
        try {
            const modalEl = document.getElementById('register-modal');
            if (modalEl) {
                const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
                modal.hide();
            }
        } catch (e) {
            console.log('Modal close error:', e);
        }
        
        // Redirect to dashboard
        setTimeout(() => {
            window.location.href = 'dashboard/user-dashboard.html';
        }, 300);
        
    } catch (error) {
        console.error('Registration error:', error);
        alert(error.message || 'Registration failed. Please try again.');
    } finally {
        if (registerBtn) registerBtn.disabled = false;
        if (registerBtnText) registerBtnText.style.display = 'inline-block';
        if (registerBtnLoading) registerBtnLoading.style.display = 'none';
    }
}

/**
 * Handle Logout
 */
function handleLogout() {
    if (confirm('Are you sure you want to logout?')) {
        AuthManager.logout();
    }
}

/**
 * Check auth status on protected pages
 */
function checkAuth() {
    if (!AuthManager.isAuthenticated()) {
        window.location.href = '../index.html';
    }
}

/**
 * Show auth modal for protected actions
 */
function showAuthModal() {
    const loginModal = document.getElementById('login-modal');
    if (loginModal) {
        const modal = new bootstrap.Modal(loginModal);
        modal.show();
    }
}
