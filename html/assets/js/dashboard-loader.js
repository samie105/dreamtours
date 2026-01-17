/**
 * Dashboard Data Loader
 * Handles loading states, empty states, and data fetching
 */

const API_BASE_URL = 'http://localhost:5001/api';

// Skeleton Templates
const SkeletonTemplates = {
    fanCard: `
        <div class="fan-card-skeleton">
            <div class="skeleton-card" style="background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%); border-radius: 16px; padding: 32px;">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <div class="d-flex align-items-center mb-3">
                            <div class="skeleton-circle" style="width: 60px; height: 60px; background: #d0d0d0; border-radius: 50%; margin-right: 16px;"></div>
                            <div>
                                <div class="skeleton-line" style="width: 180px; height: 20px; background: #d0d0d0; border-radius: 4px; margin-bottom: 8px;"></div>
                                <div class="skeleton-line" style="width: 120px; height: 14px; background: #d0d0d0; border-radius: 4px;"></div>
                            </div>
                        </div>
                        <div class="d-flex gap-4">
                            <div>
                                <div class="skeleton-line" style="width: 60px; height: 12px; background: #d0d0d0; border-radius: 4px; margin-bottom: 6px;"></div>
                                <div class="skeleton-line" style="width: 100px; height: 18px; background: #d0d0d0; border-radius: 4px;"></div>
                            </div>
                            <div>
                                <div class="skeleton-line" style="width: 60px; height: 12px; background: #d0d0d0; border-radius: 4px; margin-bottom: 6px;"></div>
                                <div class="skeleton-line" style="width: 100px; height: 18px; background: #d0d0d0; border-radius: 4px;"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-md-end mt-3 mt-md-0">
                        <div class="skeleton-line" style="width: 140px; height: 40px; background: #d0d0d0; border-radius: 8px; margin-left: auto;"></div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    statsCard: `
        <div class="col-xl-3 col-md-6 mb-4">
            <div class="card shadow-none h-100">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div class="skeleton-circle" style="width: 56px; height: 56px; background: #e9ecef; border-radius: 50%; margin-right: 16px;"></div>
                        <div>
                            <div class="skeleton-line" style="width: 60px; height: 28px; background: #e9ecef; border-radius: 4px; margin-bottom: 8px;"></div>
                            <div class="skeleton-line" style="width: 100px; height: 14px; background: #e9ecef; border-radius: 4px;"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    
    tableRow: `
        <tr>
            <td><div class="skeleton-line" style="width: 100px; height: 16px; background: #e9ecef; border-radius: 4px;"></div></td>
            <td><div class="skeleton-line" style="width: 80px; height: 16px; background: #e9ecef; border-radius: 4px;"></div></td>
            <td><div class="skeleton-line" style="width: 90px; height: 16px; background: #e9ecef; border-radius: 4px;"></div></td>
            <td><div class="skeleton-line" style="width: 70px; height: 24px; background: #e9ecef; border-radius: 4px;"></div></td>
            <td><div class="skeleton-line" style="width: 80px; height: 16px; background: #e9ecef; border-radius: 4px;"></div></td>
        </tr>
    `
};

// Empty State Templates  
const EmptyStateTemplates = {
    fanCard: `
        <div class="empty-state text-center py-5">
            <div class="empty-icon mb-4">
                <i class="isax isax-card5" style="font-size: 64px; color: #dee2e6;"></i>
            </div>
            <h5 class="text-muted mb-2">No Fan Card Yet</h5>
            <p class="text-muted mb-4">Get your exclusive fan card to unlock special benefits and discounts.</p>
            <a href="../fan-card.html" class="btn btn-primary">Get Fan Card</a>
        </div>
    `,
    
    vacations: `
        <div class="empty-state text-center py-5">
            <div class="empty-icon mb-4">
                <i class="isax isax-sun-15" style="font-size: 64px; color: #dee2e6;"></i>
            </div>
            <h5 class="text-muted mb-2">No Vacations Planned</h5>
            <p class="text-muted mb-4">Start planning your dream vacation today!</p>
            <a href="../vacation-details.html" class="btn btn-primary">Plan a Vacation</a>
        </div>
    `,
    
    bookings: `
        <div class="empty-state text-center py-5">
            <div class="empty-icon mb-4">
                <i class="isax isax-calendar-15" style="font-size: 64px; color: #dee2e6;"></i>
            </div>
            <h5 class="text-muted mb-2">No Bookings Yet</h5>
            <p class="text-muted mb-4">Your bookings will appear here once you make a reservation.</p>
            <a href="../hotel-grid.html" class="btn btn-primary">Browse Hotels</a>
        </div>
    `,
    
    activity: `
        <div class="empty-state text-center py-4">
            <div class="empty-icon mb-3">
                <i class="isax isax-activity" style="font-size: 48px; color: #dee2e6;"></i>
            </div>
            <p class="text-muted mb-0">No recent activity</p>
        </div>
    `,
    
    deposits: `
        <div class="empty-state text-center py-5">
            <div class="empty-icon mb-4">
                <i class="isax isax-wallet-25" style="font-size: 64px; color: #dee2e6;"></i>
            </div>
            <h5 class="text-muted mb-2">No Deposits Yet</h5>
            <p class="text-muted mb-4">Fund your account to start booking amazing vacations.</p>
            <a href="dashboard-deposit.html" class="btn btn-primary">Make a Deposit</a>
        </div>
    `
};

// Dashboard Data Loader
const DashboardLoader = {
    user: null,
    
    async init() {
        // Check authentication
        const token = localStorage.getItem('authToken');
        if (!token) {
            window.location.href = '../index.html';
            return;
        }
        
        // Load user data
        await this.loadUserData();
        
        // Initialize page-specific content
        this.initializePage();
    },
    
    async loadUserData() {
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/auth/me`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            
            if (!response.ok) {
                throw new Error('Failed to load user data');
            }
            
            const result = await response.json();
            this.user = result.data;
            localStorage.setItem('authUser', JSON.stringify(this.user));
            
            // Update sidebar
            this.updateSidebar();
            
            return this.user;
        } catch (error) {
            console.error('Error loading user data:', error);
            // Use cached data if available
            const cached = localStorage.getItem('authUser');
            if (cached) {
                this.user = JSON.parse(cached);
                this.updateSidebar();
            }
        }
    },
    
    updateSidebar() {
        if (!this.user) return;
        
        const nameEl = document.getElementById('sidebarUserName');
        const dateEl = document.getElementById('sidebarJoinDate');
        const avatarEl = document.getElementById('sidebarAvatar');
        
        if (nameEl) {
            nameEl.textContent = `${this.user.firstName || ''} ${this.user.lastName || ''}`.trim() || 'User';
        }
        
        if (dateEl && this.user.createdAt) {
            const date = new Date(this.user.createdAt);
            dateEl.textContent = `Since ${date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`;
        }
        
        // Update balance display if exists
        const balanceEl = document.getElementById('userBalance');
        if (balanceEl) {
            balanceEl.textContent = `$${(this.user.balance || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        }
    },
    
    initializePage() {
        const path = window.location.pathname;
        
        if (path.includes('user-dashboard')) {
            this.loadDashboardMain();
        } else if (path.includes('dashboard-fancard')) {
            this.loadFanCardPage();
        } else if (path.includes('dashboard-vacations')) {
            this.loadVacationsPage();
        } else if (path.includes('dashboard-deposit')) {
            this.loadDepositPage();
        } else if (path.includes('dashboard-hotels') || 
                   path.includes('dashboard-flights') || 
                   path.includes('dashboard-cars') || 
                   path.includes('dashboard-tours')) {
            this.loadBookingsPage();
        }
    },
    
    // Main Dashboard
    async loadDashboardMain() {
        // Show skeleton for stats
        const statsContainer = document.getElementById('dashboardStats');
        if (statsContainer) {
            statsContainer.innerHTML = SkeletonTemplates.statsCard.repeat(4);
        }
        
        try {
            // Load bookings
            const token = localStorage.getItem('authToken');
            const bookingsRes = await fetch(`${API_BASE_URL}/bookings/my`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            let bookings = [];
            if (bookingsRes.ok) {
                const result = await bookingsRes.json();
                bookings = result.data || [];
            }
            
            // Update stats
            this.updateDashboardStats(bookings);
            
            // Update recent bookings
            this.updateRecentBookings(bookings);
            
        } catch (error) {
            console.error('Error loading dashboard:', error);
            this.updateDashboardStats([]);
            this.showEmptyState('recentBookingsContainer', 'bookings');
        }
    },
    
    updateDashboardStats(bookings) {
        const statsContainer = document.getElementById('dashboardStats');
        if (!statsContainer) return;
        
        const totalBookings = bookings.length;
        const vacations = bookings.filter(b => b.bookingType === 'vacation').length;
        const balance = this.user?.balance || 0;
        const fanCardActive = this.user?.fanCard?.isActive ? 'Active' : 'Inactive';
        
        statsContainer.innerHTML = `
            <div class="row">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card shadow-none h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <span class="avatar avatar-xl rounded-circle bg-primary-light me-3">
                                    <i class="isax isax-wallet-25 fs-24 text-primary"></i>
                                </span>
                                <div>
                                    <h3 class="mb-1">$${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</h3>
                                    <p class="text-muted mb-0">Balance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card shadow-none h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <span class="avatar avatar-xl rounded-circle bg-secondary-light me-3">
                                    <i class="isax isax-calendar-15 fs-24 text-secondary"></i>
                                </span>
                                <div>
                                    <h3 class="mb-1">${totalBookings}</h3>
                                    <p class="text-muted mb-0">Total Bookings</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card shadow-none h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <span class="avatar avatar-xl rounded-circle bg-success-light me-3">
                                    <i class="isax isax-sun-15 fs-24 text-success"></i>
                                </span>
                                <div>
                                    <h3 class="mb-1">${vacations}</h3>
                                    <p class="text-muted mb-0">Vacations</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card shadow-none h-100">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <span class="avatar avatar-xl rounded-circle bg-warning-light me-3">
                                    <i class="isax isax-card5 fs-24 text-warning"></i>
                                </span>
                                <div>
                                    <h3 class="mb-1">${fanCardActive}</h3>
                                    <p class="text-muted mb-0">Fan Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },
    
    updateRecentBookings(bookings) {
        const container = document.getElementById('recentBookingsContainer');
        if (!container) return;
        
        if (bookings.length === 0) {
            container.innerHTML = EmptyStateTemplates.bookings;
            return;
        }
        
        const recent = bookings.slice(0, 5);
        container.innerHTML = `
            <div class="table-responsive">
                <table class="table table-hover mb-0">
                    <thead>
                        <tr>
                            <th>Reference</th>
                            <th>Type</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${recent.map(b => `
                            <tr>
                                <td class="fw-medium">${b.bookingReference || 'N/A'}</td>
                                <td><span class="badge bg-light text-dark">${b.bookingType || 'Booking'}</span></td>
                                <td>${new Date(b.createdAt).toLocaleDateString()}</td>
                                <td><span class="badge bg-${this.getStatusColor(b.status)}">${b.status || 'Pending'}</span></td>
                                <td class="fw-medium">$${(b.totalAmount || 0).toLocaleString()}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    },
    
    // Fan Card Page
    async loadFanCardPage() {
        const container = document.getElementById('fanCardContainer');
        if (!container) return;
        
        // Show skeleton
        container.innerHTML = SkeletonTemplates.fanCard;
        
        // Small delay for effect
        await new Promise(r => setTimeout(r, 500));
        
        if (!this.user?.fanCard?.isActive) {
            container.innerHTML = `
                <div class="card shadow-none">
                    <div class="card-body">
                        ${EmptyStateTemplates.fanCard}
                    </div>
                </div>
            `;
            
            // Hide benefits and activity sections
            const benefitsSection = document.querySelector('.mb-4:has(.benefit-item)');
            const activitySection = document.querySelector('.card:has(#activityContainer)');
            if (benefitsSection) benefitsSection.style.display = 'none';
            if (activitySection) activitySection.style.display = 'none';
            return;
        }
        
        // Show fan card
        const fanCard = this.user.fanCard;
        const celebrity = fanCard.celebrity || {};
        
        container.innerHTML = `
            <div class="fan-card-visual mb-4" style="background: linear-gradient(135deg, #111827 0%, #1f2937 100%); border-radius: 16px; padding: 32px; color: white;">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <div class="d-flex align-items-center mb-3">
                            ${celebrity.image ? 
                                `<img src="${celebrity.image}" alt="${celebrity.name}" style="width: 60px; height: 60px; border-radius: 50%; object-fit: cover; margin-right: 16px; border: 3px solid rgba(255,255,255,0.2);">` :
                                `<div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; margin-right: 16px;"><i class="isax isax-user fs-24"></i></div>`
                            }
                            <div>
                                <h4 class="mb-1 text-white">${celebrity.name || 'Premium Fan Card'}</h4>
                                <p class="mb-0 opacity-75">${celebrity.category || 'Member'}</p>
                            </div>
                        </div>
                        <div class="d-flex gap-4">
                            <div>
                                <p class="mb-1 opacity-75 small">Card ID</p>
                                <p class="fw-bold mb-0">${fanCard.cardNumber || 'N/A'}</p>
                            </div>
                            <div>
                                <p class="mb-1 opacity-75 small">Member</p>
                                <p class="fw-bold mb-0">${this.user.firstName} ${this.user.lastName}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 text-md-end mt-3 mt-md-0">
                        <span class="badge bg-white text-dark px-3 py-2">${fanCard.tier?.toUpperCase() || 'BRONZE'}</span>
                    </div>
                </div>
            </div>
        `;
        
        // Load activity
        this.loadFanCardActivity();
    },
    
    loadFanCardActivity() {
        const container = document.getElementById('activityContainer');
        if (!container) return;
        
        container.innerHTML = EmptyStateTemplates.activity;
    },
    
    // Vacations Page
    async loadVacationsPage() {
        const container = document.getElementById('vacationsContainer');
        if (!container) return;
        
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/bookings/my?type=vacation`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!response.ok) throw new Error('Failed to load vacations');
            
            const result = await response.json();
            const vacations = result.data || [];
            
            if (vacations.length === 0) {
                container.innerHTML = EmptyStateTemplates.vacations;
                return;
            }
            
            // Render vacations...
            
        } catch (error) {
            console.error('Error loading vacations:', error);
            container.innerHTML = EmptyStateTemplates.vacations;
        }
    },
    
    // Bookings Page
    async loadBookingsPage() {
        const container = document.getElementById('bookingsContainer');
        if (!container) return;
        
        try {
            const token = localStorage.getItem('authToken');
            const response = await fetch(`${API_BASE_URL}/bookings/my`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            
            if (!response.ok) throw new Error('Failed to load bookings');
            
            const result = await response.json();
            const bookings = result.data || [];
            
            if (bookings.length === 0) {
                container.innerHTML = EmptyStateTemplates.bookings;
                return;
            }
            
            // Render bookings...
            
        } catch (error) {
            console.error('Error loading bookings:', error);
            container.innerHTML = EmptyStateTemplates.bookings;
        }
    },
    
    // Deposit Page
    loadDepositPage() {
        // Handled by deposit page script
    },
    
    showEmptyState(containerId, type) {
        const container = document.getElementById(containerId);
        if (container && EmptyStateTemplates[type]) {
            container.innerHTML = EmptyStateTemplates[type];
        }
    },
    
    getStatusColor(status) {
        const colors = {
            'confirmed': 'success',
            'pending': 'warning',
            'cancelled': 'danger',
            'completed': 'info'
        };
        return colors[status?.toLowerCase()] || 'secondary';
    }
};

// Logout function
function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('authUser');
    localStorage.removeItem('rememberMe');
    window.location.href = '../index.html';
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    DashboardLoader.init();
});
