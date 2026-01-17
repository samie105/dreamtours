# DreamsTour Frontend Authentication System

Complete authentication integration with the backend API.

## Files Added

1. **`assets/js/auth.js`** - Main authentication system
2. **`assets/js/booking.js`** - Booking protection & auth modal
3. Updated **`login.html`** - Backend integration
4. Updated **`register.html`** - Backend integration with phone field

## How It Works

### 1. User Registration
- Navigate to `/html/register.html`
- Fill in: Full Name, Email, Phone (optional), Password
- System splits name into firstName/lastName
- Calls backend API: `POST /api/auth/register`
- Receives JWT token + user data
- Stores in localStorage
- Redirects to homepage or booking page

### 2. User Login
- Navigate to `/html/login.html`
- Enter email & password
- Calls backend API: `POST /api/auth/login`
- Receives JWT token + user data
- Stores in localStorage
- Redirects to intended page

### 3. Protected Booking Flow
**When user clicks "Book Now" without being logged in:**
- JavaScript intercepts the click
- Checks `AuthManager.isAuthenticated()`
- If NOT authenticated: Shows modal
- Modal has 2 buttons:
  - "Sign In" → redirects to login with return URL
  - "Sign Up" → redirects to register with return URL
- After auth, user redirects back to booking page

**Example implementation:**
```html
<!-- In any booking page -->
<script src="assets/js/auth.js"></script>
<script src="assets/js/booking.js"></script>

<!-- Your booking form -->
<form action="tour-booking.html" onsubmit="return initiateBooking(event, 'tour', 'TOUR_ID')">
    <button type="submit" class="btn btn-primary">Book Now</button>
</form>
```

### 4. API Integration

All API calls use:
```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

**Endpoints Used:**
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login  
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user
- `GET /api/auth/check` - Check auth status

### 5. Token Management

Tokens are stored in `localStorage`:
```javascript
localStorage.setItem('dreamstour_token', token);
localStorage.setItem('dreamstour_user', JSON.stringify(userData));
```

Every API request includes:
```javascript
headers: {
    'Authorization': `Bearer ${token}`
}
```

## Usage Examples

### Check if user is logged in:
```javascript
if (AuthManager.isAuthenticated()) {
    // User is logged in
    const user = AuthManager.getUser();
    console.log(`Welcome ${user.firstName}!`);
}
```

### Protect a page (require login):
```javascript
// Add to any page that requires auth
<script>
    requireAuth(); // Redirects to login if not authenticated
</script>
```

### Show auth modal:
```javascript
// When user tries to book without login
showAuthModal();
```

### Logout:
```javascript
handleLogout(); // Clears tokens and redirects
```

## Adding Auth to New Pages

**1. Include the scripts:**
```html
<script src="assets/js/auth.js"></script>
<script src="assets/js/booking.js"></script>
```

**2. Update navigation (in header):**
```html
<!-- Login link (hidden when authenticated) -->
<a href="login.html" class="auth-login-link">Login</a>

<!-- Register link (hidden when authenticated) -->
<a href="register.html" class="auth-register-link">Sign Up</a>

<!-- User menu (shown when authenticated) -->
<div class="auth-user-menu" style="display:none;">
    <span class="auth-user-name"></span>
    <a href="#" class="auth-logout-btn">Logout</a>
</div>
```

**3. Protect booking buttons:**
```html
<button onclick="initiateBooking(event, 'tour', '123')" class="btn btn-primary">
    Book Now
</button>
```

## Backend Connection

### Update API URL for Production:
Edit `assets/js/auth.js`:
```javascript
const API_BASE_URL = 'https://your-domain.com/api';  // Change this
```

### CORS Configuration:
Backend already configured to allow:
- `http://localhost:3000`
- `http://127.0.0.1:5500`
- `http://localhost:5500`

Add your production domain in `server.js`:
```javascript
app.use(cors({
    origin: ['https://yourdomain.com'],
    credentials: true
}));
```

## Testing

### Test Registration:
1. Go to http://127.0.0.1:5500/html/register.html
2. Fill form and submit
3. Check browser console for API response
4. Check localStorage for token

### Test Login:
1. Go to http://127.0.0.1:5500/html/login.html
2. Use registered email/password
3. Should redirect to homepage

### Test Protected Booking:
1. Clear localStorage (logout)
2. Go to any tour/hotel details page
3. Click "Book Now"
4. Should see auth modal
5. Login/Register
6. Should redirect back to booking

## Error Handling

The system shows user-friendly errors:
- Invalid credentials
- Network errors
- Validation errors
- Expired tokens

All errors appear as Bootstrap alerts in the forms.

## Next Steps

1. ✅ Backend API running
2. ✅ Login/Register pages connected
3. ✅ Auth modal for bookings
4. 🔄 Update all booking pages
5. 🔄 Add user dashboard
6. 🔄 Implement booking creation
7. 🔄 Fan Card integration

