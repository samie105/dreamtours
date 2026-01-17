/**
 * Enhanced Dashboard UI Manager with Real Data Fetching
 * Loads user data, bookings, and stats from backend
 */

// Loading state manager
const LoadingManager = {
    show(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3 text-muted">Loading...</p>
            </div>
        `;
    },
    
    showError(containerId, message) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        container.innerHTML = `
            <div class="alert alert-danger mb-0">
                <i class="isax isax-info-circle me-2"></i>${message}
            </div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', async function() {
    await loadDashboardData();
});

/**
 * Load all dashboard data
 */
async function loadDashboardData() {
    const user = AuthManager.getUser();
    const token = AuthManager.getToken();
    
    if (!user || !token) {
        window.location.href = '../index.html';
        return;
    }
    
    try {
        // Show loading states
        const dashboardStats = document.getElementById('dashboardStats');
        const fanCardContainer = document.getElementById('fanCardContainer');
        
        if (dashboardStats) {
            LoadingManager.show('dashboardStats');
        }
        if (fanCardContainer) {
            LoadingManager.show('fanCardContainer');
        }
        
        // Fetch latest user data
        const response = await fetch('http://localhost:5001/api/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            if (response.status === 401) {
                // Token expired, redirect to login
                localStorage.clear();
                window.location.href = '../index.html';
                return;
            }
            throw new Error('Failed to fetch user data');
        }
        
        const result = await response.json();
        const userData = result.data;
        
        // Update localStorage with latest data
        AuthManager.setUser(userData);
        
        // Populate sidebar
        populateSidebar(userData);
        
        // Populate fan card if on fan card page
        if (fanCardContainer) {
            await populateFanCard(userData);
        }
        
        // Fetch and populate dashboard stats
        if (dashboardStats) {
            await populateDashboardStats(userData, token);
        }
        
    } catch (error) {
        console.error('Error loading dashboard data:', error);
        
        const fanCardContainer = document.getElementById('fanCardContainer');
        const dashboardStats = document.getElementById('dashboardStats');
        
        if (fanCardContainer) {
            LoadingManager.showError('fanCardContainer', 'Failed to load fan card data');
        }
        if (dashboardStats) {
            LoadingManager.showError('dashboardStats', 'Failed to load dashboard statistics');
        }
    }
}

/**
 * Populate sidebar user info
 */
function populateSidebar(user) {
    const fullName = `${user.firstName} ${user.lastName}`;
    const initials = getInitials(fullName);
    const joinDate = new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    
    // Update sidebar name
    const sidebarNameEl = document.getElementById('sidebarUserName');
    if (sidebarNameEl) {
        sidebarNameEl.textContent = user.firstName;
    }
    
    // Update sidebar join date
    const sidebarDateEl = document.getElementById('sidebarJoinDate');
    if (sidebarDateEl) {
        sidebarDateEl.textContent = `Since ${joinDate}`;
    }
    
    // Update sidebar avatar
    const sidebarAvatarEl = document.getElementById('sidebarAvatar');
    if (sidebarAvatarEl) {
        if (user.avatar && user.avatar !== 'default-avatar.png') {
            sidebarAvatarEl.src = user.avatar;
        } else {
            // Create initials avatar
            sidebarAvatarEl.outerHTML = `
                <div class="avatar avatar-lg rounded-circle bg-primary d-flex align-items-center justify-content-center me-1" style="width: 40px; height: 40px;">
                    <span class="text-white fw-bold" style="font-size: 16px;">${initials}</span>
                </div>
            `;
        }
    }
    
    // Update header avatar
    const headerAvatarEl = document.getElementById('headerAvatar');
    if (headerAvatarEl) {
        headerAvatarEl.innerHTML = `
            <div class="avatar-initials bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style="width: 40px; height: 40px; font-weight: 600;">
                ${initials}
            </div>
        `;
    }
}

/**
 * Populate fan card section with real data
 */
async function populateFanCard(user) {
    const fanCardContainer = document.getElementById('fanCardContainer');
    if (!fanCardContainer) return;
    
    const fanCard = user.fanCard;
    
    if (!fanCard || !fanCard.isActive) {
        showInactiveFanCard();
        return;
    }
    
    // Update fan card status
    const statusEl = document.getElementById('fanCardStatus');
    if (statusEl) {
        statusEl.textContent = fanCard.isActive ? 'Active' : 'Inactive';
        statusEl.className = fanCard.isActive ? 'text-success' : 'text-muted';
    }
    
    // Update celebrity fan card visual if celebrity is selected
    if (fanCard.celebrity && fanCard.celebrity.name) {
        updateCelebrityFanCard(fanCard, user);
    }
    
    // Update stats cards
    updateFanCardStats(fanCard);
    
    // Hide loading, show content
    fanCardContainer.style.opacity = '1';
}

/**
 * Update celebrity-specific fan card display
 */
function updateCelebrityFanCard(fanCard, user) {
    const fanCardVisual = document.querySelector('.fan-card-visual');
    if (!fanCardVisual) return;
    
    const celebrity = fanCard.celebrity;
    const cardNumber = fanCard.cardNumber || 'N/A';
    const tier = fanCard.tier || 'bronze';
    const points = fanCard.points || 0;
    const userName = `${user.firstName} ${user.lastName}`;
    
    // Set background with celebrity theme
    const gradients = {
        'Music': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'Sports': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'Entertainment': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    };
    
    const gradient = gradients[celebrity.category] || gradients['Music'];
    fanCardVisual.style.background = gradient;
    
    // Update content
    fanCardVisual.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-8">
                <div class="d-flex align-items-center mb-3">
                    <div class="celebrity-icon me-3" style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 3px solid white;">
                        <i class="isax isax-medal-star fs-24"></i>
                    </div>
                    <div>
                        <h4 class="mb-1 text-white">${celebrity.name} Fan Card</h4>
                        <p class="mb-0 opacity-75">${celebrity.category} • ${tier.toUpperCase()} Member</p>
                    </div>
                </div>
                <div class="d-flex gap-4 flex-wrap">
                    <div>
                        <p class="mb-1 opacity-75 small">Card Number</p>
                        <p class="fs-16 fw-bold mb-0">${cardNumber}</p>
                    </div>
                    <div>
                        <p class="mb-1 opacity-75 small">Cardholder</p>
                        <p class="fs-16 fw-bold mb-0">${userName}</p>
                    </div>
                    <div>
                        <p class="mb-1 opacity-75 small">Points</p>
                        <p class="fs-16 fw-bold mb-0">${points.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
                <a href="../fan-card.html" class="btn btn-light">
                    <i class="isax isax-star me-2"></i>Explore Cards
                </a>
            </div>
        </div>
    `;
}

/**
 * Update fan card stats in overview cards
 */
function updateFanCardStats(fanCard) {
    const statsCards = document.querySelectorAll('.col-xl-4');
    const tier = fanCard.tier || 'bronze';
    const points = fanCard.points || 0;
    
    statsCards.forEach(card => {
        const heading = card.querySelector('h3');
        const paragraph = card.querySelector('p');
        
        if (!heading || !paragraph) return;
        
        if (paragraph.textContent.includes('Fan Card')) {
            heading.textContent = fanCard.isActive ? 'Active' : 'Inactive';
            heading.className = fanCard.isActive ? 'text-success' : 'text-muted';
        }
        
        if (paragraph.textContent.includes('Points')) {
            heading.textContent = points.toLocaleString();
        }
        
        if (paragraph.textContent.includes('Tier')) {
            heading.textContent = tier.toUpperCase();
            const colors = {
                'bronze': 'text-warning',
                'silver': 'text-secondary',
                'gold': 'text-primary',
                'platinum': 'text-dark'
            };
            heading.className = colors[tier] || 'text-muted';
        }
    });
}

/**
 * Show inactive fan card message
 */
function showInactiveFanCard() {
    const fanCardVisual = document.querySelector('.fan-card-visual');
    if (!fanCardVisual) {
        const fanCardContainer = document.getElementById('fanCardContainer');
        if (fanCardContainer) {
            fanCardContainer.innerHTML = `
                <div class="card text-center py-5">
                    <div class="card-body">
                        <i class="isax isax-card-slash fs-48 mb-3 opacity-50 d-block"></i>
                        <h5>No Active Fan Card</h5>
                        <p class="text-muted mb-3">Choose your favorite celebrity and activate your Fan Card to start earning exclusive benefits!</p>
                        <a href="../fan-card.html" class="btn btn-primary">
                            <i class="isax isax-star me-2"></i>Browse Fan Cards
                        </a>
                    </div>
                </div>
            `;
        }
        return;
    }
    
    fanCardVisual.innerHTML = `
        <div class="text-center py-4">
            <i class="isax isax-card-slash fs-48 mb-3 opacity-50"></i>
            <h5>No Active Fan Card</h5>
            <p class="opacity-75 mb-3">Activate your Fan Card to unlock exclusive benefits!</p>
            <a href="../fan-card.html" class="btn btn-light">Browse Fan Cards</a>
        </div>
    `;
}

/**
 * Populate dashboard stats with real booking data
 */
async function populateDashboardStats(user, token) {
    const dashboardStats = document.getElementById('dashboardStats');
    if (!dashboardStats) return;
    
    try {
        // Fetch user's bookings
        const response = await fetch('http://localhost:5001/api/bookings/my', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch bookings');
        }
        
        const result = await response.json();
        const bookings = result.data || [];
        
        // Calculate stats
        const stats = {
            total: bookings.length,
            hotels: bookings.filter(b => b.bookingType === 'hotel').length,
            flights: bookings.filter(b => b.bookingType === 'flight').length,
            tours: bookings.filter(b => b.bookingType === 'tour').length,
            cars: bookings.filter(b => b.bookingType === 'car').length,
            cruises: bookings.filter(b => b.bookingType === 'cruise').length,
            pending: bookings.filter(b => b.status === 'pending').length,
            confirmed: bookings.filter(b => b.status === 'confirmed').length,
            completed: bookings.filter(b => b.status === 'completed').length
        };
        
        // Update stats display
        dashboardStats.innerHTML = `
            <div class="row g-3">
                <div class="col-xl-3 col-sm-6">
                    <div class="card shadow-none border">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="text-muted mb-1">Total Bookings</p>
                                    <h3 class="mb-0">${stats.total}</h3>
                                </div>
                                <div class="avatar avatar-lg bg-primary-transparent rounded">
                                    <i class="isax isax-note-2 fs-24 text-primary"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card shadow-none border">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="text-muted mb-1">Fan Card Points</p>
                                    <h3 class="mb-0">${user.fanCard?.points || 0}</h3>
                                </div>
                                <div class="avatar avatar-lg bg-warning-transparent rounded">
                                    <i class="isax isax-medal-star fs-24 text-warning"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card shadow-none border">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="text-muted mb-1">Active Bookings</p>
                                    <h3 class="mb-0">${stats.pending + stats.confirmed}</h3>
                                </div>
                                <div class="avatar avatar-lg bg-success-transparent rounded">
                                    <i class="isax isax-tick-circle fs-24 text-success"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-sm-6">
                    <div class="card shadow-none border">
                        <div class="card-body">
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <p class="text-muted mb-1">Member Since</p>
                                    <h3 class="mb-0 fs-16">${new Date(user.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</h3>
                                </div>
                                <div class="avatar avatar-lg bg-info-transparent rounded">
                                    <i class="isax isax-calendar fs-24 text-info"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            ${bookings.length > 0 ? `
            <div class="card mt-4">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h6 class="mb-0">Recent Bookings</h6>
                    <a href="dashboard-vacations.html" class="btn btn-sm btn-outline-primary">View All</a>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-hover mb-0">
                            <thead>
                                <tr>
                                    <th>Booking ID</th>
                                    <th>Type</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${bookings.slice(0, 5).map(booking => `
                                    <tr>
                                        <td><span class="badge bg-light text-dark">${booking.bookingReference}</span></td>
                                        <td><span class="text-capitalize">${booking.bookingType}</span></td>
                                        <td>${new Date(booking.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <span class="badge bg-${booking.status === 'confirmed' ? 'success' : booking.status === 'pending' ? 'warning' : 'info'}">
                                                ${booking.status}
                                            </span>
                                        </td>
                                        <td class="fw-semibold">$${booking.totalPrice?.toLocaleString() || '0'}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            ` : `
            <div class="card mt-4">
                <div class="card-body text-center py-5">
                    <i class="isax isax-note-remove fs-48 opacity-50 mb-3 d-block"></i>
                    <h5>No Bookings Yet</h5>
                    <p class="text-muted mb-3">Start exploring and book your dream vacation!</p>
                    <a href="../index.html" class="btn btn-primary">Browse Destinations</a>
                </div>
            </div>
            `}
        `;
        
    } catch (error) {
        console.error('Error fetching bookings:', error);
        LoadingManager.showError('dashboardStats', 'Failed to load booking statistics');
    }
}

/**
 * Get user initials
 */
function getInitials(name) {
    if (!name) return 'U';
    const parts = name.split(' ').filter(p => p.length > 0);
    if (parts.length === 0) return 'U';
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

/**
 * Global logout function
 */
function logout() {
    handleLogout();
}
