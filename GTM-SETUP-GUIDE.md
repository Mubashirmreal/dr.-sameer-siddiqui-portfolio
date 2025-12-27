# Google Tag Manager Setup Guide

This guide will help you set up Google Tag Manager (GTM) to track clicks on the "Book Consultation" buttons.

## Benefits of Using GTM

✅ **No Code Changes** - Update tracking without modifying your website code  
✅ **Centralized Management** - Manage all tags (GA, Facebook Pixel, etc.) in one place  
✅ **Easy Testing** - Preview and debug before publishing  
✅ **Version Control** - Roll back changes if needed  
✅ **Multiple Triggers** - Track clicks, scrolls, form submissions, and more  

---

## Step 1: Create a Google Tag Manager Account

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click **"Create Account"**
3. Fill in:
   - **Account Name**: Your name or company name
   - **Country**: Your country
   - **Container Name**: `dr-sameer-siddiqui-portfolio` (or your domain)
   - **Target Platform**: Select **Web**
4. Click **Create** and accept the Terms of Service

---

## Step 2: Install GTM on Your Website

After creating the container, GTM will show you two code snippets. You need to add them to your `index.html` file.

### Code Snippet 1 (Head)
Add this in the `<head>` section of `index.html` (after line 6):

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

### Code Snippet 2 (Body)
Add this immediately after the opening `<body>` tag in `index.html` (after line 47):

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

> **Note**: Replace `GTM-XXXXXXX` with your actual GTM Container ID (shown in the GTM interface)

---

## Step 3: Link Google Analytics to GTM

1. In GTM, click **Tags** → **New**
2. Name it: `GA4 - Page View`
3. Click **Tag Configuration** → Choose **Google Analytics: GA4 Configuration**
4. Enter your **Measurement ID**: `G-2P8Z1CH44H`
5. Click **Triggering** → Select **All Pages**
6. Click **Save**

---

## Step 4: Create Click Tracking for Book Consultation Buttons

### A. Enable Built-in Click Variables

1. In GTM, go to **Variables** → **Configure** (in Built-In Variables section)
2. Check these boxes under **Clicks**:
   - ✅ Click Element
   - ✅ Click ID
   - ✅ Click Classes
   - ✅ Click Text
   - ✅ Click URL

### B. Create Trigger for Header Button

1. Go to **Triggers** → **New**
2. Name it: `Click - Book Consultation Header`
3. Click **Trigger Configuration** → Choose **Click - All Elements**
4. Select **Some Clicks**
5. Add condition:
   - `Click ID` **equals** `book-consultation-header`
6. Click **Save**

### C. Create Trigger for Mobile Floating Button

1. Go to **Triggers** → **New**
2. Name it: `Click - Book Consultation Mobile`
3. Click **Trigger Configuration** → Choose **Click - All Elements**
4. Select **Some Clicks**
5. Add condition:
   - `Click ID` **equals** `book-consultation-mobile`
6. Click **Save**

### D. Create GA4 Event Tag for Header Button

1. Go to **Tags** → **New**
2. Name it: `GA4 - Book Consultation Click - Header`
3. Click **Tag Configuration** → Choose **Google Analytics: GA4 Event**
4. Enter:
   - **Configuration Tag**: Select `GA4 - Page View` (created in Step 3)
   - **Event Name**: `book_consultation_click`
5. Click **Event Parameters** → **Add Row**:
   - **Parameter Name**: `button_location`
   - **Value**: `header`
6. Add another row:
   - **Parameter Name**: `button_text`
   - **Value**: `{{Click Text}}`
7. Click **Triggering** → Select `Click - Book Consultation Header`
8. Click **Save**

### E. Create GA4 Event Tag for Mobile Button

1. Go to **Tags** → **New**
2. Name it: `GA4 - Book Consultation Click - Mobile`
3. Click **Tag Configuration** → Choose **Google Analytics: GA4 Event**
4. Enter:
   - **Configuration Tag**: Select `GA4 - Page View`
   - **Event Name**: `book_consultation_click`
5. Click **Event Parameters** → **Add Row**:
   - **Parameter Name**: `button_location`
   - **Value**: `mobile_floating`
6. Add another row:
   - **Parameter Name**: `button_text`
   - **Value**: `{{Click Text}}`
7. Click **Triggering** → Select `Click - Book Consultation Mobile`
8. Click **Save**

---

## Step 5: Test Your Setup

### Using GTM Preview Mode

1. In GTM, click **Preview** (top right)
2. Enter your website URL (e.g., `http://localhost:5173` for local testing)
3. Click **Connect**
4. Your website will open with GTM debugger attached
5. Click on both "Book Consultation" buttons
6. In the GTM debugger, you should see:
   - `book_consultation_click` event firing
   - The correct `button_location` parameter

### Verify in Google Analytics

1. Go to [Google Analytics](https://analytics.google.com/)
2. Navigate to **Reports** → **Realtime**
3. Click on your buttons on the website
4. You should see events appearing in real-time

---

## Step 6: Publish Your Container

1. Once testing is complete, click **Submit** (top right in GTM)
2. Add a **Version Name**: e.g., `Initial Setup - Book Consultation Tracking`
3. Add a **Version Description**: e.g., `Added click tracking for header and mobile consultation buttons`
4. Click **Publish**

---

## Step 7: View Your Data in Google Analytics

After publishing, you can view click data in Google Analytics:

### Real-time Reports
- **Reports** → **Realtime** → **Events**
- Look for `book_consultation_click` event

### Event Reports (After 24-48 hours)
- **Reports** → **Engagement** → **Events**
- Find `book_consultation_click`
- Click on it to see breakdown by `button_location`

### Create Custom Report
1. Go to **Explore** → **Blank**
2. Add dimensions: `Event name`, `button_location`
3. Add metrics: `Event count`
4. This shows you exactly how many clicks each button gets

---

## Button IDs Added to Your Code

I've already added these IDs to your buttons:

### Header Button
```tsx
<a
  id="book-consultation-header"
  href="https://calendly.com/YOUR_LINK_HERE"
  ...
>
  Book Consultation
</a>
```

### Mobile Floating Button
```tsx
<motion.button
  id="book-consultation-mobile"
  onClick={handleClick}
  ...
>
  Book Consultation
</motion.button>
```

---

## Advanced Tracking (Optional)

### Track Calendly Form Submissions

If you want to track when someone actually books (not just clicks), you can:

1. Add Calendly webhook in your Calendly settings
2. Create a server endpoint to receive the webhook
3. Send the data to GA4 via Measurement Protocol

### Track Scroll Depth

1. In GTM, enable **Scroll Depth** variables
2. Create triggers for 25%, 50%, 75%, 100% scroll
3. Send events to GA4 to understand engagement

### Track Outbound Link Clicks

Since the button links to Calendly (external site):
1. Create a trigger for all outbound links
2. Track when users leave your site

---

## Troubleshooting

### GTM Not Loading
- Check browser console for errors
- Verify GTM container ID is correct
- Check if ad blockers are interfering

### Events Not Firing
- Use GTM Preview mode to debug
- Check if Click ID matches exactly
- Verify triggers are set up correctly

### Data Not in Google Analytics
- Wait 24-48 hours for data to appear in standard reports
- Check Realtime reports for immediate feedback
- Verify GA4 Measurement ID is correct

---

## Summary

✅ Added unique IDs to both buttons (`book-consultation-header` and `book-consultation-mobile`)  
✅ GTM allows you to track clicks without changing code  
✅ You can see which button (desktop vs mobile) gets more clicks  
✅ All tracking is managed in one central location  
✅ Easy to add more tracking later (scroll, form submissions, etc.)  

**Next Steps**: Follow Steps 1-6 above to set up GTM and start tracking your button clicks!
