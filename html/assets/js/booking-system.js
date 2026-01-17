/**
 * Unified Booking System with Balance Management
 * Handles bookings for vacations, hotels, cars, cruises, flights, tours, and fan cards
 * Requires user authentication and sufficient balance
 */

const BookingSystem = {
    API_BASE_URL: 'https://dreamtoursbackend.vercel.app/api',
    
    // Check if user is authenticated
    isAuthenticated() {
        const token = localStorage.getItem('authToken');
        const user = localStorage.getItem('user');
        return !!(token && user);
    },
    
    // Get current user data
    getUser() {
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch {
            return null;
        }
    },
    
    // Get auth token
    getToken() {
        return localStorage.getItem('authToken');
    },
    
    // Format currency
    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    },
    
    // Fetch user's current balance from API
    async fetchBalance() {
        if (!this.isAuthenticated()) return 0;
        
        try {
            const response = await fetch(`${this.API_BASE_URL}/dashboard/overview`, {
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`,
                    'Content-Type': 'application/json'
                }
            });
            
            if (response.ok) {
                const result = await response.json();
                if (result.success && result.data) {
                    // Update local storage with fresh balance
                    const user = this.getUser();
                    if (user) {
                        user.balance = result.data.balance || 0;
                        localStorage.setItem('user', JSON.stringify(user));
                    }
                    return result.data.balance || 0;
                }
            }
            return this.getUser()?.balance || 0;
        } catch (error) {
            console.error('Error fetching balance:', error);
            return this.getUser()?.balance || 0;
        }
    },
    
    // Show login required modal
    showLoginRequired(redirectUrl = window.location.href) {
        // Store intended destination
        localStorage.setItem('redirectAfterLogin', redirectUrl);
        
        // Create modal if not exists
        if (!document.getElementById('loginRequiredModal')) {
            const modalHtml = `
                <div class="modal fade" id="loginRequiredModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body text-center p-5">
                                <div class="mb-4">
                                    <i class="isax isax-lock-1" style="font-size: 64px; color: #CF3425;"></i>
                                </div>
                                <h4 class="mb-3">Login Required</h4>
                                <p class="text-muted mb-4">You need to be logged in to make a booking. Please sign in or create an account to continue.</p>
                                <div class="d-flex gap-3 justify-content-center">
                                    <a href="login.html" class="btn btn-primary px-4">
                                        <i class="isax isax-login me-2"></i>Sign In
                                    </a>
                                    <a href="register.html" class="btn btn-outline-primary px-4">
                                        <i class="isax isax-user-add me-2"></i>Register
                                    </a>
                                </div>
                                <p class="mt-3 mb-0"><small class="text-muted">Your booking details will be saved</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
        }
        
        const modal = new bootstrap.Modal(document.getElementById('loginRequiredModal'));
        modal.show();
    },
    
    // Show insufficient balance modal
    showInsufficientBalance(required, current) {
        const deficit = required - current;
        
        // Create modal if not exists
        if (!document.getElementById('insufficientBalanceModal')) {
            const modalHtml = `
                <div class="modal fade" id="insufficientBalanceModal" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body text-center p-5">
                                <div class="mb-4">
                                    <i class="isax isax-wallet-minus" style="font-size: 64px; color: #dc3545;"></i>
                                </div>
                                <h4 class="mb-3">Insufficient Balance</h4>
                                <p class="text-muted mb-4">Your current balance is not enough to complete this booking.</p>
                                <div class="bg-light rounded p-3 mb-4">
                                    <div class="row text-start">
                                        <div class="col-6 mb-2">
                                            <small class="text-muted">Current Balance</small>
                                            <p class="mb-0 fw-bold text-danger" id="ib-current-balance">$0</p>
                                        </div>
                                        <div class="col-6 mb-2">
                                            <small class="text-muted">Amount Required</small>
                                            <p class="mb-0 fw-bold" id="ib-required-amount">$0</p>
                                        </div>
                                        <div class="col-12">
                                            <small class="text-muted">You need to deposit</small>
                                            <p class="mb-0 fw-bold text-primary" id="ib-deficit-amount">$0</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex gap-3 justify-content-center">
                                    <a href="dashboard-deposit.html" class="btn btn-primary px-4">
                                        <i class="isax isax-wallet-add me-2"></i>Deposit Funds
                                    </a>
                                    <button type="button" class="btn btn-outline-secondary px-4" data-bs-dismiss="modal">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
        }
        
        // Update modal values
        document.getElementById('ib-current-balance').textContent = this.formatCurrency(current);
        document.getElementById('ib-required-amount').textContent = this.formatCurrency(required);
        document.getElementById('ib-deficit-amount').textContent = this.formatCurrency(deficit);
        
        const modal = new bootstrap.Modal(document.getElementById('insufficientBalanceModal'));
        modal.show();
    },
    
    // Show booking success modal
    showBookingSuccess(bookingData) {
        // Create modal if not exists
        if (!document.getElementById('bookingSuccessModal')) {
            const modalHtml = `
                <div class="modal fade" id="bookingSuccessModal" tabindex="-1" aria-hidden="true" data-bs-backdrop="static">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body text-center p-5">
                                <div class="mb-4">
                                    <div class="success-checkmark">
                                        <i class="isax isax-tick-circle" style="font-size: 80px; color: #04BD6C;"></i>
                                    </div>
                                </div>
                                <h4 class="mb-3 text-success">Booking Successful!</h4>
                                <p class="text-muted mb-4" id="bs-message">Your booking has been confirmed.</p>
                                <div class="bg-light rounded p-3 mb-4">
                                    <div class="row text-start">
                                        <div class="col-6 mb-2">
                                            <small class="text-muted">Booking ID</small>
                                            <p class="mb-0 fw-bold text-primary" id="bs-booking-id">#--</p>
                                        </div>
                                        <div class="col-6 mb-2">
                                            <small class="text-muted">Amount Paid</small>
                                            <p class="mb-0 fw-bold" id="bs-amount-paid">$0</p>
                                        </div>
                                        <div class="col-6">
                                            <small class="text-muted">New Balance</small>
                                            <p class="mb-0 fw-bold text-success" id="bs-new-balance">$0</p>
                                        </div>
                                        <div class="col-6">
                                            <small class="text-muted">Points Earned</small>
                                            <p class="mb-0 fw-bold" id="bs-points-earned">+0 pts</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-grid gap-2">
                                    <a href="user-dashboard.html" class="btn btn-primary" id="bs-dashboard-link">
                                        <i class="isax isax-home-2 me-2"></i>Go to Dashboard
                                    </a>
                                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" id="bs-continue-btn">
                                        Continue Browsing
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
        }
        
        // Update modal values
        if (bookingData.bookingId) {
            document.getElementById('bs-booking-id').textContent = bookingData.bookingId;
        }
        if (bookingData.amount) {
            document.getElementById('bs-amount-paid').textContent = this.formatCurrency(bookingData.amount);
        }
        if (bookingData.newBalance !== undefined) {
            document.getElementById('bs-new-balance').textContent = this.formatCurrency(bookingData.newBalance);
        }
        if (bookingData.pointsEarned) {
            document.getElementById('bs-points-earned').textContent = `+${bookingData.pointsEarned} pts`;
        }
        if (bookingData.message) {
            document.getElementById('bs-message').textContent = bookingData.message;
        }
        if (bookingData.dashboardLink) {
            document.getElementById('bs-dashboard-link').href = bookingData.dashboardLink;
        }
        
        const modal = new bootstrap.Modal(document.getElementById('bookingSuccessModal'));
        modal.show();
    },
    
    // Create booking with balance deduction
    async createBooking(bookingDetails) {
        // Check authentication first
        if (!this.isAuthenticated()) {
            this.showLoginRequired();
            return { success: false, error: 'Not authenticated' };
        }
        
        // Fetch current balance
        const currentBalance = await this.fetchBalance();
        const totalAmount = bookingDetails.totalAmount || 0;
        
        // Check balance
        if (currentBalance < totalAmount) {
            this.showInsufficientBalance(totalAmount, currentBalance);
            return { success: false, error: 'Insufficient balance' };
        }
        
        try {
            const response = await fetch(`${this.API_BASE_URL}/bookings`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.getToken()}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...bookingDetails,
                    paymentMethod: 'balance'
                })
            });
            
            const result = await response.json();
            
            if (response.ok && result.success) {
                // Update local balance
                const user = this.getUser();
                if (user) {
                    user.balance = (user.balance || 0) - totalAmount;
                    localStorage.setItem('user', JSON.stringify(user));
                }
                
                // Calculate points earned (1 point per $10)
                const pointsEarned = Math.floor(totalAmount / 10);
                
                // Show success
                this.showBookingSuccess({
                    bookingId: result.data?.bookingReference || result.data?.booking?.bookingReference,
                    amount: totalAmount,
                    newBalance: (user?.balance || 0),
                    pointsEarned: pointsEarned,
                    message: `Your ${bookingDetails.bookingType} booking has been confirmed!`
                });
                
                return { success: true, data: result.data };
            } else {
                throw new Error(result.message || 'Booking failed');
            }
        } catch (error) {
            console.error('Booking error:', error);
            alert(error.message || 'Failed to complete booking. Please try again.');
            return { success: false, error: error.message };
        }
    },
    
    // Create balance display widget
    createBalanceWidget(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        const showDeposit = options.showDeposit !== false;
        const compact = options.compact || false;
        
        if (!this.isAuthenticated()) {
            container.innerHTML = `
                <div class="balance-widget not-logged-in ${compact ? 'compact' : ''}">
                    <p class="mb-2"><i class="isax isax-info-circle me-2"></i>Sign in to view your balance</p>
                    <a href="login.html" class="btn btn-sm btn-primary">Sign In</a>
                </div>
            `;
            return;
        }
        
        const user = this.getUser();
        const balance = user?.balance || 0;
        
        container.innerHTML = `
            <div class="balance-widget ${compact ? 'compact' : ''}">
                <div class="d-flex align-items-center justify-content-between">
                    <div>
                        <span class="balance-label">Your Balance</span>
                        <h4 class="balance-amount mb-0">${this.formatCurrency(balance)}</h4>
                    </div>
                    ${showDeposit ? `
                        <a href="dashboard-deposit.html" class="btn btn-sm btn-outline-primary">
                            <i class="isax isax-add me-1"></i>Add Funds
                        </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        // Fetch fresh balance
        this.fetchBalance().then(freshBalance => {
            const amountEl = container.querySelector('.balance-amount');
            if (amountEl) {
                amountEl.textContent = this.formatCurrency(freshBalance);
            }
        });
    },
    
    // Initialize booking page
    async initBookingPage(options = {}) {
        const { 
            totalElementId,
            bookButtonId,
            balanceWidgetId,
            bookingType = 'general',
            getBookingDetails 
        } = options;
        
        // Create balance widget if container exists
        if (balanceWidgetId) {
            this.createBalanceWidget(balanceWidgetId, { showDeposit: true });
        }
        
        // Setup book button
        const bookButton = document.getElementById(bookButtonId);
        if (bookButton) {
            bookButton.addEventListener('click', async (e) => {
                e.preventDefault();
                
                // Get booking details from callback
                const details = typeof getBookingDetails === 'function' 
                    ? getBookingDetails() 
                    : options.bookingDetails || {};
                
                // Get total from element or details
                let total = details.totalAmount || 0;
                if (totalElementId) {
                    const totalEl = document.getElementById(totalElementId);
                    if (totalEl) {
                        total = parseFloat(totalEl.textContent.replace(/[^0-9.]/g, '')) || 0;
                    }
                }
                
                await this.createBooking({
                    ...details,
                    bookingType,
                    totalAmount: total
                });
            });
        }
    }
};

// Add CSS for balance widget
const balanceWidgetStyles = `
    <style>
        .balance-widget {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            border: 1px solid #dee2e6;
            border-radius: 12px;
            padding: 16px 20px;
            margin-bottom: 20px;
        }
        .balance-widget.compact {
            padding: 12px 16px;
        }
        .balance-widget .balance-label {
            font-size: 13px;
            color: #6c757d;
            display: block;
            margin-bottom: 4px;
        }
        .balance-widget .balance-amount {
            font-size: 24px;
            font-weight: 700;
            color: #04BD6C;
        }
        .balance-widget.compact .balance-amount {
            font-size: 20px;
        }
        .balance-widget.not-logged-in {
            text-align: center;
            padding: 20px;
        }
        .balance-widget.not-logged-in p {
            color: #6c757d;
            font-size: 14px;
        }
        
        /* Booking confirmation animation */
        @keyframes checkmark-scale {
            0% { transform: scale(0); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
        }
        .success-checkmark {
            animation: checkmark-scale 0.5s ease-out;
        }
    </style>
`;

// Inject styles
document.head.insertAdjacentHTML('beforeend', balanceWidgetStyles);

// Export for use
window.BookingSystem = BookingSystem;
