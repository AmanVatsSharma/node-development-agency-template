# Admin Dashboard - Quick Start Guide

## 🚀 Get Started in 3 Minutes

### Step 1: Set Your Password
Add to your `.env` file:
```env
ADMIN_PASSWORD=YourSecurePassword123
```

### Step 2: Sync Database
```bash
npm run db:push
```

### Step 3: Start Server
```bash
npm run dev
```

### Step 4: Login
1. Go to: http://localhost:3000/pages/admin
2. You'll be redirected to `/login`
3. Enter your password from Step 1
4. Click "Sign In"

## 🎉 You're In!

You now have access to manage:

### 📊 Dashboard
- Real-time analytics
- System overview
- Quick actions

### 📝 Content
- **Services** - Your service offerings
- **Portfolio** - Project showcase
- **Resources** - Downloadable content
- **Blog** - Articles and posts
- **Team** - Team member profiles

### 📬 Communications
- **Contacts** - Form submissions
- **Newsletter** - Email subscribers

### ⚙️ System
- **Integrations** - Zoho CRM, Google Ads
- **Logs** - Activity monitoring

## 💡 Quick Tips

1. **Search Everything** - Use the search bar on each page
2. **Featured Content** - Toggle the featured checkbox for priority items
3. **Export Data** - Use export buttons on Newsletter and Logs pages
4. **Dark Mode** - Automatically follows system preferences
5. **Mobile Friendly** - Works on all devices

## 🎯 Common Tasks

### Add a New Service
1. Go to `/pages/admin/services`
2. Click "Add Service"
3. Fill in details
4. Click "Save Service"

### Publish a Blog Post
1. Go to `/pages/admin/blog`
2. Click "New Post"
3. Write your content (Markdown supported)
4. Set publish date
5. Click "Save Post"

### Manage Contacts
1. Go to `/pages/admin/contacts`
2. Click on any submission
3. Update status (Pending → Contacted → Closed)
4. Add internal notes
5. Close dialog

### View System Health
1. Go to `/pages/admin` (Dashboard)
2. Check the System Health card
3. View integration status
4. Check error count

## 🔒 Security Notes

- **Never share** your ADMIN_PASSWORD
- **Use HTTPS** in production
- **Change password** regularly
- **Monitor logs** for suspicious activity

## 📱 Mobile Access

The admin panel works great on mobile:
1. Tap the menu icon (☰) to open sidebar
2. Navigate to any section
3. Tap outside to close sidebar
4. All features work on mobile

## 🆘 Need Help?

- **Detailed Guide**: See `ADMIN_DASHBOARD_GUIDE.md`
- **Feature List**: Check `ADMIN_DASHBOARD_SUMMARY.md`
- **Issues**: Check browser console and system logs

## ✅ First Steps Checklist

- [ ] Set ADMIN_PASSWORD in .env
- [ ] Run database migrations
- [ ] Log in successfully
- [ ] Explore the dashboard
- [ ] Try creating a test service
- [ ] Try creating a test blog post
- [ ] Check system logs
- [ ] Test on mobile device

## 🎊 That's It!

You're ready to manage your entire content platform.

**Main URL**: `/pages/admin`
**Login URL**: `/login`

---

**Happy Managing! 🚀**
