/**
 * Fan Card Selection and Purchase
 */

// Available celebrities
const celebrities = [
    {
        id: 'taylor-swift',
        name: 'Taylor Swift',
        category: 'Music',
        image: 'assets/img/celebrities/taylor-swift.jpg',
        description: 'Pop Superstar'
    },
    {
        id: 'drake',
        name: 'Drake',
        category: 'Music',
        image: 'assets/img/celebrities/drake.jpg',
        description: 'Hip Hop Icon'
    },
    {
        id: 'lebron-james',
        name: 'LeBron James',
        category: 'Sports',
        image: 'assets/img/celebrities/lebron.jpg',
        description: 'Basketball Legend'
    },
    {
        id: 'beyonce',
        name: 'Beyoncé',
        category: 'Music',
        image: 'assets/img/celebrities/beyonce.jpg',
        description: 'Queen of Pop'
    },
    {
        id: 'cristiano-ronaldo',
        name: 'Cristiano Ronaldo',
        category: 'Sports',
        image: 'assets/img/celebrities/ronaldo.jpg',
        description: 'Soccer Legend'
    },
    {
        id: 'ariana-grande',
        name: 'Ariana Grande',
        category: 'Music',
        image: 'assets/img/celebrities/ariana.jpg',
        description: 'Pop Princess'
    }
];

/**
 * Activate fan card for selected celebrity
 */
async function activateFanCard(celebrityId) {
    const token = AuthManager.getToken();
    
    if (!token) {
        showAuthModal();
        return;
    }
    
    const celebrity = celebrities.find(c => c.id === celebrityId);
    if (!celebrity) {
        alert('Celebrity not found');
        return;
    }
    
    try {
        const response = await fetch('https://dreamtoursbackend.vercel.app/api/auth/activate-fancard', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                celebrityId: celebrity.id,
                celebrityName: celebrity.name,
                celebrityImage: celebrity.image,
                celebrityCategory: celebrity.category
            })
        });
        
        if (!response.ok) {
            throw new Error('Failed to activate fan card');
        }
        
        const result = await response.json();
        
        // Update user in localStorage
        AuthManager.setUser(result.data);
        
        // Show success message
        alert(`🎉 ${celebrity.name} Fan Card Activated!\n\nYou've received 100 welcome points!`);
        
        // Redirect to dashboard
        window.location.href = 'dashboard/dashboard-fancard.html';
        
    } catch (error) {
        console.error('Error activating fan card:', error);
        alert('Failed to activate fan card. Please try again.');
    }
}

/**
 * Render celebrity cards on fan-card.html page
 */
function renderCelebrityCards() {
    const container = document.getElementById('celebrityCardsContainer');
    if (!container) return;
    
    const html = celebrities.map(celeb => `
        <div class="col-lg-4 col-md-6">
            <div class="card fan-card-item h-100">
                <div class="fan-card-image" style="background-image: url('${celeb.image}'); height: 250px; background-size: cover; background-position: center;"></div>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <h5 class="mb-1">${celeb.name}</h5>
                            <p class="text-muted mb-0">${celeb.description}</p>
                        </div>
                        <span class="badge bg-primary">${celeb.category}</span>
                    </div>
                    <button onclick="activateFanCard('${celeb.id}')" class="btn btn-primary w-100 mt-3">
                        Activate Fan Card
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = html;
}

// Render celebrity cards on page load
document.addEventListener('DOMContentLoaded', function() {
    renderCelebrityCards();
});
