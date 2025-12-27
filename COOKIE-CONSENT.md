# Cookie Consent & Google Analytics Implementation

## Overview
A Swiss-style cookie consent banner with Google Analytics integration that respects user privacy and follows best practices.

## Components Created

### 1. CookieConsent.tsx
The main cookie consent banner component.

**Features:**
- ✅ Swiss-style minimalist design (black background, white text)
- ✅ Smooth slide-up animation using Framer Motion
- ✅ localStorage-based consent management
- ✅ Conditional Google Analytics loading
- ✅ Accept/Decline buttons with hover effects
- ✅ Responsive design (mobile & desktop)

**Logic Flow:**
1. On page load, checks `localStorage` for `cookie_consent` key
2. If `cookie_consent === 'accepted'` → Load Google Analytics immediately
3. If no consent found → Show the banner
4. If `cookie_consent === 'declined'` → Do nothing (no banner, no analytics)

**User Actions:**
- **Accept Button**: Saves 'accepted' to localStorage, hides banner, loads GA
- **Decline Button**: Saves 'declined' to localStorage, hides banner, no GA

### 2. FloatingConsultation.tsx
A floating "Book Consultation" button for mobile devices.

**Features:**
- ✅ Only visible on mobile (hidden on desktop with `md:hidden`)
- ✅ Appears AFTER cookie consent is decided
- ✅ Fixed position at bottom-right
- ✅ Smooth slide-up animation
- ✅ Scrolls to footer on click
- ✅ Swiss-style design matching the site

**Logic Flow:**
1. Monitors `localStorage` for `cookie_consent` key
2. Shows button only after user accepts OR declines cookies
3. Ensures cookie banner appears first, then consultation button

## Google Analytics Integration

### Analytics ID
`G-2P8Z1CH44H`

### Loading Strategy
Google Analytics is loaded **dynamically** only when:
- User explicitly accepts cookies, OR
- User has previously accepted cookies (stored in localStorage)

### Implementation
```javascript
const loadAnalytics = () => {
  // Load GA script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-2P8Z1CH44H';
  document.head.appendChild(script1);

  // Initialize GA
  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-2P8Z1CH44H');
  `;
  document.head.appendChild(script2);
};
```

## Mobile Experience

### Order of Appearance
1. **First**: Cookie consent banner slides up from bottom
2. **After consent**: Floating consultation button appears

### Z-Index Hierarchy
- Cookie Banner: `z-50` (highest)
- Floating Button: `z-40` (below banner)

This ensures the cookie banner always appears above the consultation button.

## localStorage Keys

| Key | Possible Values | Meaning |
|-----|----------------|---------|
| `cookie_consent` | `'accepted'` | User accepted cookies, GA loaded |
| `cookie_consent` | `'declined'` | User declined cookies, no GA |
| `cookie_consent` | `null` | No decision yet, show banner |

## Testing the Implementation

### Test Scenario 1: First Visit
1. Open the site in incognito/private mode
2. Cookie banner should appear at the bottom
3. Click "Accept" → Banner disappears, GA loads
4. On mobile, consultation button appears after accepting

### Test Scenario 2: Returning User (Accepted)
1. Visit the site again (same browser)
2. No banner appears
3. GA loads automatically
4. Consultation button visible on mobile

### Test Scenario 3: Returning User (Declined)
1. Clear localStorage or use new browser
2. Click "Decline" on banner
3. Banner disappears, no GA loaded
4. Consultation button appears on mobile

### Test Scenario 4: Reset Consent
Open browser console and run:
```javascript
localStorage.removeItem('cookie_consent');
location.reload();
```

## Customization Options

### Change Banner Colors
In `CookieConsent.tsx`, modify:
```tsx
className="... bg-black text-white border-white"
```

### Change Animation Duration
```tsx
transition={{ duration: 0.4, ease: 'easeOut' }}
```

### Change Button Styles
Modify the button classes in the component.

### Disable Floating Button
Remove `<FloatingConsultation />` from `App.tsx`

## Privacy Compliance

✅ **GDPR Compliant**: Users must explicitly consent before analytics  
✅ **No Tracking Before Consent**: GA only loads after acceptance  
✅ **Persistent Choice**: Decision saved in localStorage  
✅ **Easy to Decline**: Clear decline option provided  

## Browser Compatibility

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ localStorage support required (all modern browsers)

## Notes

- The cookie banner uses `position: fixed` and appears above all content
- Animations use Framer Motion for smooth, performant transitions
- The consultation button only appears on mobile (`md:hidden` class)
- Both components are rendered at the root level in `App.tsx`
