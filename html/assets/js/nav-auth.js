/**
 * Navigation Authentication UI Manager
 * Updates navigation elements based on user authentication status
 */

// Update navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    updateNavigationUI();
    
    // Re-check auth status periodically (every 30 seconds)
    setInterval(updateNavigationUI, 30000);
});

// Listen for auth changes (login/logout events)
window.addEventListener('storage', function(e) {
    if (e.key === 'authToken' || e.key === 'authUser') {
        updateNavigationUI();
    }
});

/**
 * Update all navigation UI elements based on auth status
 */
function updateNavigationUI() {
    const isAuthenticated = AuthManager.isAuthenticated();
    const user = AuthManager.getUser();
    
    if (isAuthenticated && user) {
        showAuthenticatedNav(user);
    } else {
        showGuestNav();
    }
}

/**
 * Show authenticated navigation with user info
 */
function showAuthenticatedNav(user) {
    // Desktop Navigation - Replace Sign In/Up with User Menu
    const desktopNav = document.querySelector('.header-btn');
    if (desktopNav) {
        const authButtons = desktopNav.querySelectorAll('a[data-bs-target="#login-modal"], a[data-bs-target="#register-modal"]');
        
        if (authButtons.length > 0) {
            // Create user dropdown
            const userDropdown = createUserDropdown(user);
            
            // Replace sign in/up buttons with user dropdown
            authButtons[0].replaceWith(userDropdown);
            if (authButtons[1]) {
                authButtons[1].remove();
            }
        }
    }
    
    // Mobile Navigation
    const mobileMenuLoggedOut = document.getElementById('mobileMenuLoggedOut');
    const mobileMenuLoggedIn = document.getElementById('mobileMenuLoggedIn');
    const mobileActionsLoggedOut = document.getElementById('mobileActionsLoggedOut');
    const mobileActionsLoggedIn = document.getElementById('mobileActionsLoggedIn');
    
    if (mobileMenuLoggedOut) mobileMenuLoggedOut.style.display = 'none';
    if (mobileMenuLoggedIn) mobileMenuLoggedIn.style.display = 'block';
    if (mobileActionsLoggedOut) mobileActionsLoggedOut.style.display = 'none';
    if (mobileActionsLoggedIn) mobileActionsLoggedIn.style.display = 'block';
}

/**
 * Show guest navigation (Sign In/Up buttons)
 */
function showGuestNav() {
    // Desktop Navigation - Show Sign In/Up buttons
    const desktopNav = document.querySelector('.header-btn');
    if (desktopNav) {
        const userDropdown = desktopNav.querySelector('.user-dropdown');
        
        if (userDropdown) {
            // Create sign in/up buttons
            const signInBtn = document.createElement('div');
            signInBtn.innerHTML = '<a href="javascript:void(0);" class="btn btn-white me-3" data-bs-toggle="modal" data-bs-target="#login-modal">Sign In</a>';
            
            const signUpBtn = document.createElement('a');
            signUpBtn.href = 'javascript:void(0);';
            signUpBtn.className = 'btn btn-primary me-0';
            signUpBtn.setAttribute('data-bs-toggle', 'modal');
            signUpBtn.setAttribute('data-bs-target', '#register-modal');
            signUpBtn.textContent = 'Sign Up';
            
            // Replace user dropdown with buttons
            userDropdown.replaceWith(signInBtn);
            signInBtn.after(signUpBtn);
        }
    }
    
    // Mobile Navigation
    const mobileMenuLoggedOut = document.getElementById('mobileMenuLoggedOut');
    const mobileMenuLoggedIn = document.getElementById('mobileMenuLoggedIn');
    const mobileActionsLoggedOut = document.getElementById('mobileActionsLoggedOut');
    const mobileActionsLoggedIn = document.getElementById('mobileActionsLoggedIn');
    
    if (mobileMenuLoggedOut) mobileMenuLoggedOut.style.display = 'block';
    if (mobileMenuLoggedIn) mobileMenuLoggedIn.style.display = 'none';
    if (mobileActionsLoggedOut) mobileActionsLoggedOut.style.display = 'block';
    if (mobileActionsLoggedIn) mobileActionsLoggedIn.style.display = 'none';
}

/**
 * Create user dropdown menu element
 */
function createUserDropdown(user) {
    const dropdown = document.createElement('div');
    dropdown.className = 'user-dropdown dropdown';
    
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.email;
    const initials = getInitials(fullName);
    
    // Determine correct path to dashboard based on current page location
    const currentPath = window.location.pathname;
    const basePath = currentPath.includes('/dashboard/') ? '' : 
                     currentPath.includes('/html/') ? 'dashboard/' : 
                     'html/dashboard/';
    
    dropdown.innerHTML = `
        <a href="javascript:void(0);" class="btn btn-white d-flex align-items-center me-3" id="userDropdown" data-bs-toggle="dropdown" aria-expanded="false">
            <div class="user-avatar me-2">
                <span class="avatar-initials">${initials}</span>
            </div>
            <div class="user-info d-none d-lg-block text-start">
                <div class="user-name fw-semibold" style="font-size: 14px; line-height: 1.2; color: #111827;">${fullName}</div>
            </div>
            <i class="isax isax-arrow-down-1 ms-2"></i>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
            <li class="dropdown-header">
                <div class="text-center">
                    <div class="user-avatar-large mb-2">
                        <span class="avatar-initials-large">${initials}</span>
                    </div>
                    <div class="fw-semibold" style="color: #111827;">${fullName}</div>
                    <div class="text-muted small">${user.email}</div>
                </div>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="${basePath}user-dashboard.html"><i class="isax isax-home-2 me-2"></i>Dashboard</a></li>
            <li><a class="dropdown-item" href="${basePath}dashboard-vacations.html"><i class="isax isax-beach me-2"></i>My Vacations</a></li>
            <li><a class="dropdown-item" href="${basePath}dashboard-fancard.html"><i class="isax isax-card me-2"></i>Fan Card</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="${basePath}dashboard-settings.html"><i class="isax isax-setting-2 me-2"></i>Settings</a></li>
            <li><a class="dropdown-item" href="javascript:void(0);" onclick="handleLogout()"><i class="isax isax-logout me-2"></i>Logout</a></li>
        </ul>
    `;
    
    return dropdown;
}

/**
 * Get user initials from full name
 */
function getInitials(name) {
    if (!name) return 'U';
    
    const parts = name.split(' ').filter(p => p.length > 0);
    if (parts.length === 0) return 'U';
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Get tier color for badges (removed - using theme colors instead)
 */
// Removed getTierColor to use consistent theme styling

/**
 * Global logout function
 */
function logout() {
    handleLogout();
}
