/**
 * DreamsTour Booking Handler
 * Handles booking attempts and shows auth modal if user is not logged in
 */

// Check if user is authenticated before allowing booking
function initiateBooking(event, bookingType, listingId) {
    event.preventDefault();
    
    // Check authentication
    if (!AuthManager.isAuthenticated()) {
        // Show auth modal
        showAuthModal();
        return false;
    }
    
    // User is authenticated, proceed with booking
    // Store booking intent
    const bookingIntent = {
        type: bookingType,
        listingId: listingId,
        timestamp: new Date().toISOString()
    };
    
    sessionStorage.setItem('bookingIntent', JSON.stringify(bookingIntent));
    
    // Redirect to booking page
    const form = event.target.closest('form');
    if (form) {
        form.submit();
    } else {
        window.location.href = `/html/${bookingType}-booking.html`;
    }
}

// Add event listeners to all booking buttons on page load
document.addEventListener('DOMContentLoaded', function() {
    // Find all booking forms
    const bookingForms = document.querySelectorAll('form[action*="booking.html"], form[action*="booking-confirmation.html"]');
    
    bookingForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!AuthManager.isAuthenticated()) {
                e.preventDefault();
                showAuthModal();
            }
        });
    });
    
    // Find all "Book Now" buttons
    const bookNowButtons = document.querySelectorAll('.btn-book-now, button[type="submit"]:contains("Book Now")');
    
    bookNowButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (!AuthManager.isAuthenticated()) {
                e.preventDefault();
                e.stopPropagation();
                showAuthModal();
            }
        });
    });
});

// Handle checkout button clicks
function handleCheckout(event) {
    event.preventDefault();
    
    if (!AuthManager.isAuthenticated()) {
        showAuthModal();
        return;
    }
    
    // Proceed with checkout
    const form = event.target.closest('form');
    if (form) {
        form.submit();
    }
}

// Make functions globally available
window.initiateBooking = initiateBooking;
window.handleCheckout = handleCheckout;
