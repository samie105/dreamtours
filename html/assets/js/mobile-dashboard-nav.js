/**
 * Mobile Dashboard Navigation Drawer
 * Adds a slide-out navigation drawer for mobile devices
 */

document.addEventListener('DOMContentLoaded', function() {
    initMobileDashboardNav();
});

function initMobileDashboardNav() {
    // Only run on mobile
    if (window.innerWidth >= 992) return;
    
    const sidebar = document.querySelector('.user-sidebar, .theiaStickySidebar');
    if (!sidebar) return;
    
    // Create mobile nav trigger button
    const navTrigger = document.createElement('button');
    navTrigger.className = 'mobile-nav-trigger';
    navTrigger.innerHTML = '<i class="isax isax-menu"></i>';
    navTrigger.setAttribute('aria-label', 'Toggle Navigation');
    
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'mobile-nav-overlay';
    
    // Wrap sidebar in drawer
    const drawer = document.createElement('div');
    drawer.className = 'mobile-nav-drawer';
    
    // Move sidebar into drawer
    const sidebarParent = sidebar.parentElement;
    sidebarParent.insertBefore(drawer, sidebar);
    drawer.appendChild(sidebar);
    
    // Add close button to drawer
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-nav-close';
    closeBtn.innerHTML = '<i class="isax isax-close-circle"></i>';
    closeBtn.setAttribute('aria-label', 'Close Navigation');
    drawer.insertBefore(closeBtn, drawer.firstChild);
    
    // Add trigger and overlay to page
    document.body.appendChild(navTrigger);
    document.body.appendChild(overlay);
    
    // Toggle functions
    function openNav() {
        drawer.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeNav() {
        drawer.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    navTrigger.addEventListener('click', openNav);
    closeBtn.addEventListener('click', closeNav);
    overlay.addEventListener('click', closeNav);
    
    // Close on navigation
    const navLinks = drawer.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeNav);
    });
}

// Add styles dynamically
const style = document.createElement('style');
style.textContent = `
    /* Mobile Navigation Trigger */
    .mobile-nav-trigger {
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 1100;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background: var(--bs-primary);
        border: none;
        color: white;
        font-size: 20px;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        cursor: pointer;
        transition: all 0.3s;
    }
    
    .mobile-nav-trigger:hover {
        transform: scale(1.05);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
    
    .mobile-nav-trigger:active {
        transform: scale(0.95);
    }
    
    /* Mobile Navigation Drawer */
    .mobile-nav-drawer {
        position: fixed;
        top: 0;
        left: -320px;
        width: 300px;
        height: 100vh;
        background: var(--bs-body-bg);
        z-index: 1200;
        overflow-y: auto;
        transition: left 0.3s ease;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
    }
    
    .mobile-nav-drawer.active {
        left: 0;
    }
    
    .mobile-nav-drawer .user-sidebar,
    .mobile-nav-drawer .theiaStickySidebar {
        position: static !important;
        transform: none !important;
        margin: 0;
        height: auto !important;
    }
    
    /* Close Button */
    .mobile-nav-close {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background: var(--bs-light);
        border: none;
        color: var(--bs-dark);
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 10;
    }
    
    .mobile-nav-close:hover {
        background: var(--bs-danger);
        color: white;
    }
    
    /* Overlay */
    .mobile-nav-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 1150;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
    }
    
    .mobile-nav-overlay.active {
        opacity: 1;
        visibility: visible;
    }
    
    /* Show on mobile only */
    @media (max-width: 991.98px) {
        .mobile-nav-trigger {
            display: flex;
        }
        
        .col-xl-3.col-lg-4.theiaStickySidebar,
        .col-xl-3.col-lg-4:has(.user-sidebar) {
            display: none;
        }
        
        .mobile-nav-drawer {
            display: block;
        }
    }
    
    /* Dark mode */
    [data-theme="dark"] .mobile-nav-drawer {
        background: #1e293b;
        box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
    }
    
    [data-theme="dark"] .mobile-nav-close {
        background: #334155;
        color: #e2e8f0;
    }
    
    [data-theme="dark"] .mobile-nav-close:hover {
        background: var(--bs-danger);
    }
`;
document.head.appendChild(style);
