# 🚀 AI Sales Agent - Quick Start Guide

## 5-Minute Setup

### Step 1: Install Dependencies (1 min)

```bash
cd /workspace
npm install --legacy-peer-deps
```

### Step 2: Update Database (1 min)

```bash
# Make sure DATABASE_URL is set in .env.local
npm run db:push
```

This adds 3 new tables:
- `AIAgentConfig` - AI configuration
- `AIConversation` - Chat history
- `AIAnalytics` - Performance metrics

### Step 3: Get AI API Key (2 min)

**Choose ONE provider:**

#### Option A: OpenAI (Recommended)
1. Go to: https://platform.openai.com/api-keys
2. Click "Create new secret key"
3. Copy: `sk-proj-...`
4. Cost: ~$0.50 per 100 conversations

#### Option B: Claude (Anthropic)
1. Go to: https://console.anthropic.com/
2. Sign up and get API key
3. Copy: `sk-ant-...`
4. Cost: ~$0.45 per 100 conversations

#### Option C: Google Gemini (FREE Tier)
1. Go to: https://aistudio.google.com/apikey
2. Get API key
3. Copy: `AIza...`
4. Cost: FREE up to 1M tokens/day!

### Step 4: Configure Agent (1 min)

1. Start dev server:
```bash
npm run dev
```

2. Login to admin:
```
http://localhost:3000/login
```

3. Click "AI Agent" button in header

4. Configure:
   - **Enable AI Agent**: ✅ ON
   - **Provider**: OpenAI (or your choice)
   - **Model**: gpt-4o
   - **API Key**: Paste your key
   - **Agent Name**: Nova (or custom)
   - **Welcome Message**: Customize!

5. Click **"Save Configuration"**

6. Click **"Test Agent"** to verify!

### Step 5: See It Live! (30 seconds)

1. Visit any page: `http://localhost:3000`
2. See floating chat button (bottom-right)
3. Click to open chat
4. Say "Hello!"
5. Watch AI respond with page context!

---

## 🎯 What You Get

### On Every Page:
- **Home**: General company info
- **Shopify Pages**: Knows all packages (₹25k-₹75k+)
- **AI Voice Agents**: Understands pricing tiers
- **SEO Audit**: Knows audit packages
- **Google Ads**: Has management pricing
- **ALL Landing Pages**: Complete context!

### Automatic Features:
✅ Context-aware responses  
✅ Lead capture (name, email, phone, company)  
✅ Zoho CRM integration (if configured)  
✅ Google Ads conversion tracking  
✅ Beautiful mobile UI  
✅ Dark mode support  
✅ Typing indicators  
✅ Auto-greeting bubble  

---

## 💡 Pro Tips

### 1. Test Different Pages

Visit these and ask about services:
- `/pages/shopify-product-page-customization`
- `/pages/ai-voice-agents`
- `/pages/google-ads-management`
- `/pages/seo-audit`
- `/pages/next-js-development`

The AI knows **exactly** what's on each page!

### 2. Test Lead Capture

Have a conversation like:
```
You: "I need a Shopify store"
AI: "Great! I can help. What's your name?"
You: "John Doe"
AI: "Nice to meet you, John! What's your email?"
You: "john@example.com"
AI: "Perfect! What's your phone number?"
You: "+919876543210"
AI: "Thank you! Our team will contact you within 24 hours."
```

Lead automatically:
- Saved to database
- Pushed to Zoho CRM
- Tracked in Google Ads
- Shows in `/admin/leads`

### 3. Customize Personality

In admin panel:
```
Agent Name: Sarah
Agent Role: Senior Solutions Consultant
Welcome Message: Hi! I'm Sarah, your dedicated solutions consultant. I specialize in helping businesses like yours transform digitally. What brings you here today?
```

Makes it more personal!

### 4. Change Colors

Match your brand:
```
Primary Color: #FF6B6B (your brand color)
```

Instant theme change!

### 5. Control Behavior

**Aggressive Lead Capture:**
- Auto Greeting: ON
- Greeting Delay: 2 seconds
- Lead Qualification: ON

**Subtle Approach:**
- Auto Greeting: OFF
- User clicks to open
- Natural conversation first

---

## 📊 Monitor Performance

### View Stats

Go to: `/admin/ai-agent`

See:
- **Conversations Today**: Live count
- **Leads Converted**: Conversion count
- **Conversion Rate**: % conversion
- **Recent Conversations**: Last 10 chats

### View Individual Conversations

Click any conversation to see:
- Full message history
- Page context
- Lead capture status
- Timestamp

### Export Leads

Go to: `/admin/leads`
- See all captured leads
- Filter by source: "ai_agent"
- Export to CSV (if built)

---

## 🔧 Troubleshooting

### "Agent Not Appearing"

**Fix:**
1. Check admin: Is "Enable AI Agent" ON?
2. Is API key configured?
3. Clear browser cache
4. Check console for errors (F12)

### "AI Not Responding"

**Fix:**
1. Test in admin panel first
2. Check API key validity
3. Check provider status (OpenAI/Claude/Gemini)
4. View logs: `/admin/integrations`

### "Wrong Context"

**Fix:**
1. Verify page path in code
2. Check `contextEngine.ts` for page data
3. Update landing page details
4. Restart dev server

### "High Costs"

**Fix:**
1. Use Gemini 2.0 Flash (FREE tier)
2. Reduce max tokens to 1000
3. Use GPT-4o Mini instead of GPT-4o
4. Add rate limiting

---

## 🎨 Customization Examples

### Change Greeting Based on Time

```typescript
// app/lib/ai/contextEngine.ts

const hour = new Date().getHours();
let greeting = 'Hi';

if (hour < 12) greeting = 'Good morning';
else if (hour < 18) greeting = 'Good afternoon';
else greeting = 'Good evening';

const welcomeMessage = `${greeting}! I'm ${agentName}...`;
```

### Add Custom Page

```typescript
// app/lib/ai/contextEngine.ts

'/pages/your-custom-service': {
  name: 'Your Service',
  description: 'What you offer',
  features: [
    'Feature 1',
    'Feature 2',
    'Feature 3'
  ],
  pricing: {
    basic: { 
      price: '₹10,000', 
      features: ['Feature A', 'Feature B'] 
    }
  },
  benefits: [
    'Benefit 1',
    'Benefit 2'
  ]
}
```

### Add Slack Notifications

```typescript
// app/api/ai-agent/convert-lead/route.ts

async function notifySlack(lead: any) {
  await fetch('YOUR_SLACK_WEBHOOK_URL', {
    method: 'POST',
    body: JSON.stringify({
      text: `🎉 New lead captured: ${lead.name} (${lead.email})`
    })
  });
}

// Call after lead creation
await notifySlack(lead);
```

---

## 📚 Learning Resources

### Read the Full Docs
See: `AI_SALES_AGENT_COMPLETE.md` for:
- Complete API documentation
- Database schema details
- Advanced customization
- Security best practices
- Performance optimization

### Understand the Code

**Key Files:**
1. `app/lib/ai/providers.ts` - AI provider abstraction
2. `app/lib/ai/contextEngine.ts` - Page context logic
3. `app/components/AIAgent/ChatWidget.tsx` - UI component
4. `app/api/ai-agent/chat/route.ts` - Chat API
5. `app/admin/ai-agent/page.tsx` - Admin UI

### Test Locally

```bash
# Test specific page context
curl http://localhost:3000/api/ai-agent/chat \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Tell me about your Shopify services",
    "pageUrl": "http://localhost:3000/pages/shopify-product-page-customization",
    "pagePath": "/pages/shopify-product-page-customization",
    "pageTitle": "Shopify Services",
    "conversationHistory": []
  }'
```

---

## 🚀 Deploy to Production

### 1. Set Environment Variables

```bash
# .env.production
DATABASE_URL="your-production-db-url"
ADMIN_PASSWORD="strong-password"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-secret"
```

### 2. Build

```bash
npm run build
```

### 3. Push Database

```bash
npm run db:push
```

### 4. Deploy

Deploy to Vercel/Netlify/your host

### 5. Configure in Production

1. Go to: `https://your-domain.com/login`
2. Navigate to: `/admin/ai-agent`
3. Enter production API key
4. Enable agent
5. Test!

---

## ✅ Checklist

Before going live:

- [ ] Database schema updated
- [ ] AI API key configured
- [ ] Agent tested in admin panel
- [ ] Tested on 5+ different pages
- [ ] Lead capture tested
- [ ] Zoho CRM integration verified
- [ ] Google Ads tracking verified
- [ ] Mobile responsiveness checked
- [ ] Welcome message customized
- [ ] Brand colors applied
- [ ] Privacy policy linked
- [ ] Rate limiting added (optional)
- [ ] Monitoring set up (optional)

---

## 🎉 You're Ready!

Your AI Sales Agent is now:
- ✅ Live on all pages
- ✅ Context-aware
- ✅ Capturing leads automatically
- ✅ Integrated with CRM
- ✅ Tracking conversions
- ✅ Beautiful and mobile-friendly

**Start converting visitors into customers!** 🚀

---

## 📞 Need Help?

1. **Check Full Docs**: `AI_SALES_AGENT_COMPLETE.md`
2. **Test in Admin**: `/admin/ai-agent` → "Test Agent"
3. **View Logs**: `/admin/integrations` → Logs tab
4. **Check Console**: Browser DevTools (F12)

---

**Time to launch: 5 minutes ⏱️**  
**ROI: Massive 📈**  
**Effort: Minimal 😎**

Let's go! 🚀
