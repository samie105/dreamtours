/**
 * Dashboard User Interface Manager
 * Loads user data and populates dashboard elements
 */

document.addEventListener('DOMContentLoaded', async function() {
    await loadDashboardUser();
});

/**
 * Load user data and populate dashboard
 */
async function loadDashboardUser() {
    const user = AuthManager.getUser();
    const token = AuthManager.getToken();
    
    if (!user || !token) {
        window.location.href = '../index.html';
        return;
    }
    
    try {
        // Fetch latest user data from backend
        const response = await fetch('https://dreamtoursbackend.vercel.app/api/auth/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        
        const result = await response.json();
        const userData = result.data;
        
        // Update localStorage with latest data
        AuthManager.setUser(userData);
        
        // Populate sidebar
        populateSidebar(userData);
        
        // Populate fan card if on fan card page
        if (document.getElementById('fanCardContainer')) {
            populateFanCard(userData);
        }
        
        // Populate stats if on dashboard page
        if (document.getElementById('dashboardStats')) {
            populateDashboardStats(userData);
        }
        
    } catch (error) {
        console.error('Error loading user data:', error);
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
}

/**
 * Populate fan card section
 */
function populateFanCard(user) {
    const fanCard = user.fanCard;
    
    if (!fanCard || !fanCard.isActive) {
        showInactiveFanCard();
        return;
    }
    
    // Update fan card status
    const statusEl = document.getElementById('fanCardStatus');
    if (statusEl) {
        statusEl.textContent = fanCard.isActive ? 'Active' : 'Inactive';
    }
    
    // Update celebrity fan card visual if celebrity is selected
    if (fanCard.celebrity && fanCard.celebrity.name) {
        updateCelebrityFanCard(fanCard);
    }
    
    // Update stats cards
    updateFanCardStats(fanCard);
}

/**
 * Update celebrity-specific fan card display
 */
function updateCelebrityFanCard(fanCard) {
    const fanCardVisual = document.querySelector('.fan-card-visual');
    if (!fanCardVisual) return;
    
    const celebrity = fanCard.celebrity;
    const cardNumber = fanCard.cardNumber || 'N/A';
    const tier = fanCard.tier || 'bronze';
    const points = fanCard.points || 0;
    
    // Set background image if celebrity has one
    if (celebrity.image) {
        fanCardVisual.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${celebrity.image})`;
        fanCardVisual.style.backgroundSize = 'cover';
        fanCardVisual.style.backgroundPosition = 'center';
    }
    
    // Update content
    fanCardVisual.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-8">
                <div class="d-flex align-items-center mb-3">
                    ${celebrity.image ? `<img src="${celebrity.image}" alt="${celebrity.name}" class="rounded-circle me-3" style="width: 60px; height: 60px; object-fit: cover; border: 3px solid white;">` : '<i class="isax isax-medal-star fs-48 me-3"></i>'}
                    <div>
                        <h4 class="mb-1 text-white">${celebrity.name} Fan Card</h4>
                        <p class="mb-0 opacity-75">${celebrity.category || 'Celebrity'} • ${tier.toUpperCase()} Member</p>
                    </div>
                </div>
                <div class="d-flex gap-4">
                    <div>
                        <p class="mb-1 opacity-75">Card Number</p>
                        <p class="fs-18 fw-bold mb-0">${cardNumber}</p>
                    </div>
                    <div>
                        <p class="mb-1 opacity-75">Points</p>
                        <p class="fs-18 fw-bold mb-0">${points.toLocaleString()}</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 text-md-end mt-3 mt-md-0">
                <a href="../fan-card.html" class="btn btn-light">Browse More Cards</a>
            </div>
        </div>
    `;
}

/**
 * Update fan card stats
 */
function updateFanCardStats(fanCard) {
    // Update stats in overview cards if they exist
    const statsContainer = document.querySelector('.row.g-3');
    if (!statsContainer) return;
    
    const tier = fanCard.tier || 'bronze';
    const points = fanCard.points || 0;
    
    // Find and update relevant stat cards
    const statCards = statsContainer.querySelectorAll('.col-xl-4');
    statCards.forEach(card => {
        const heading = card.querySelector('h3');
        const paragraph = card.querySelector('p');
        
        if (paragraph && paragraph.textContent === 'Fan Card') {
            heading.textContent = fanCard.isActive ? 'Active' : 'Inactive';
            heading.className = fanCard.isActive ? 'text-success' : 'text-muted';
        }
        
        if (paragraph && paragraph.textContent.includes('Points')) {
            heading.textContent = points.toLocaleString();
        }
        
        if (paragraph && paragraph.textContent.includes('Tier')) {
            heading.textContent = tier.toUpperCase();
        }
    });
}

/**
 * Show inactive fan card message
 */
function showInactiveFanCard() {
    const fanCardVisual = document.querySelector('.fan-card-visual');
    if (!fanCardVisual) return;
    
    fanCardVisual.innerHTML = `
        <div class="text-center py-5">
            <i class="isax isax-card-slash fs-48 mb-3 opacity-50"></i>
            <h5>No Active Fan Card</h5>
            <p class="text-muted mb-3">Choose your favorite celebrity and activate your Fan Card to start earning exclusive benefits!</p>
            <a href="../fan-card.html" class="btn btn-primary">Browse Fan Cards</a>
        </div>
    `;
}

/**
 * Populate dashboard stats
 */
function populateDashboardStats(user) {
    // This would be populated with actual booking data from API
    // For now, showing placeholder logic
    const statsContainer = document.getElementById('dashboardStats');
    if (!statsContainer) return;
    
    // Update based on user's actual booking data
    // This is where you'd fetch and display real statistics
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
