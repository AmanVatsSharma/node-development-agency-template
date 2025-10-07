# AI Agent Admin Panel - Quick Testing Guide

## 🎯 Quick Start Testing (5 Minutes)

### Pre-requisites
1. You're logged into the admin panel
2. You have an API key for at least one AI provider:
   - OpenAI API key (get from https://platform.openai.com/api-keys)
   - OR Claude API key (get from https://console.anthropic.com/)
   - OR Gemini API key (get from https://aistudio.google.com/app/apikey)

### Step 1: Access the AI Agent Page
1. Open your browser and navigate to your admin panel
2. You should now see **"AI Agent"** in the sidebar (with a robot icon 🤖)
3. Click on "AI Agent" to open the configuration page

### Step 2: Basic Configuration (Provider & Model Tab)

**Test 1: Enable the Agent**
- [ ] Toggle "Enable AI Agent" to ON
- [ ] Verify the toggle switches to enabled state
- [ ] Notice "Unsaved Changes" alert appears

**Test 2: Select AI Provider**
- [ ] Click on "AI Provider" dropdown
- [ ] Select one: OpenAI, Anthropic (Claude), or Google (Gemini)
- [ ] Verify the "Model" dropdown updates with provider-specific models

**Test 3: Configure API Key**
- [ ] Enter your API key in the "API Key" field (shows as password dots)
- [ ] Notice "Unsaved Changes" alert still showing
- [ ] **DO NOT click Save yet - we'll configure more first**

**Test 4: Select Model**
- [ ] Click "Model" dropdown
- [ ] Select recommended model (marked with "Recommended")
- [ ] Read the model description below the dropdown

**Test 5: Adjust Temperature**
- [ ] Move the "Temperature" slider (0.0 to 1.0)
- [ ] Lower = more focused, Higher = more creative
- [ ] Set to 0.7 (good balance)

**Test 6: Set Max Tokens**
- [ ] Input field shows default "2000"
- [ ] This controls response length
- [ ] Keep at 2000 for testing

### Step 3: Personality Configuration (Personality Tab)

**Test 7: Agent Identity**
- [ ] Click "Personality" tab
- [ ] Enter "Agent Name" (e.g., "Nova", "Alex", "Sarah")
- [ ] Enter "Agent Role" (e.g., "AI Sales Assistant", "Customer Support Agent")
- [ ] Enter "Company Name" (your company name)

**Test 8: Welcome Message**
- [ ] Enter a friendly welcome message (e.g., "Hi! I'm Nova, your AI assistant. How can I help you today?")
- [ ] Keep it concise and friendly

**Test 9: System Prompt (Advanced)**
- [ ] Large textarea for system prompt
- [ ] This is the AI's base instructions
- [ ] You can customize how the AI behaves
- [ ] Default is good for testing, but you can modify it
- [ ] Example customization:
  ```
  You are a helpful AI sales assistant for [Your Company].
  Your goal is to:
  - Answer questions about our services
  - Qualify leads by asking for name, email, phone, company
  - Be professional yet friendly
  - Guide users toward scheduling a consultation
  ```

### Step 4: Behavior Configuration (Behavior Tab)

**Test 10: Lead Qualification**
- [ ] Click "Behavior" tab
- [ ] Toggle "Auto Lead Qualification" ON
- [ ] This makes the AI automatically try to capture lead info

**Test 11: Auto Greeting**
- [ ] Toggle "Auto Greeting" ON
- [ ] A slider appears: "Greeting Delay"
- [ ] Set to 3 seconds (3000ms)
- [ ] This shows a greeting bubble automatically to visitors

### Step 5: Appearance Configuration (Appearance Tab)

**Test 12: Widget Position**
- [ ] Click "Appearance" tab
- [ ] Select widget position from dropdown
- [ ] Options: Bottom Right, Bottom Left, Top Right, Top Left
- [ ] "Bottom Right" is standard

**Test 13: Color Customization**
- [ ] Click on the color picker (shows current color)
- [ ] Select a color that matches your brand
- [ ] OR enter a hex color code (e.g., #3b82f6)
- [ ] See the preview update below

**Test 14: Visual Preview**
- [ ] Look at the "Preview" section
- [ ] See your agent name, role, and welcome message
- [ ] See the color you selected
- [ ] Verify it looks good

### Step 6: Save Configuration

**Test 15: Save Your Settings**
- [ ] Scroll down to bottom of the page
- [ ] "Unsaved Changes" alert should be visible
- [ ] Click "Save Configuration" button
- [ ] Button shows "Saving..." with spinner
- [ ] Success alert appears: "Configuration saved successfully!"
- [ ] "Unsaved Changes" alert disappears
- [ ] Save button becomes disabled (no changes to save)

### Step 7: Test the AI Agent

**Test 16: Run Live Test**
- [ ] Click "Test Agent" button (next to Save)
- [ ] Button shows "Testing..." with spinner
- [ ] Wait 2-5 seconds for response
- [ ] **If successful:**
  - ✅ Green success alert appears
  - ✅ Shows AI response to test message
  - ✅ Shows token usage (prompt tokens, completion tokens, total)
- [ ] **If failed:**
  - ❌ Red error alert appears
  - ❌ Shows error message (check API key, check balance, check network)

**Test 17: Verify Test Response**
- [ ] Read the AI's response
- [ ] It should be relevant to the test message: "Hello! I need help with web development services."
- [ ] Response should be professional and helpful
- [ ] Response should mention your company name
- [ ] Response should be in the tone you configured

### Step 8: Check Stats & Conversations

**Test 18: View Stats Cards**
- [ ] Scroll to top of page
- [ ] See 4 stat cards:
  1. **Conversations Today** - Number of chats today
  2. **Leads Converted** - Number of leads captured today
  3. **Conversion Rate** - Percentage of chats that became leads
  4. **Status** - Shows "Active" (green) or "Disabled" (red)
- [ ] After your test, you should see at least 1 conversation

**Test 19: Recent Conversations**
- [ ] Scroll to bottom of page
- [ ] See "Recent Conversations" card
- [ ] Your test conversation should appear here
- [ ] Shows: page title, message count, status, timestamp
- [ ] If no conversations: "No conversations yet" message

### Step 9: Make Changes and Re-Test

**Test 20: Modify Configuration**
- [ ] Change the Agent Name to something different
- [ ] Change the Welcome Message
- [ ] Notice "Unsaved Changes" alert appears immediately
- [ ] Click Save
- [ ] Click Test Agent again
- [ ] Verify the test uses your new settings

**Test 21: Change AI Provider**
- [ ] Switch from OpenAI to Claude (or vice versa)
- [ ] Enter the new provider's API key
- [ ] Select a model for that provider
- [ ] Save configuration
- [ ] Test agent
- [ ] Verify it works with the new provider

**Test 22: Disable and Re-Enable**
- [ ] Toggle "Enable AI Agent" to OFF
- [ ] Save configuration
- [ ] Try to click "Test Agent"
- [ ] Button should be disabled (can't test when disabled)
- [ ] Toggle back to ON
- [ ] Save and test again

---

## 🔍 Advanced Testing (15 Minutes)

### Test 23: Edge Cases

**Empty Fields:**
- [ ] Clear Agent Name and try to save (should work, uses default)
- [ ] Clear API Key and try to save (should accept, but test won't work)
- [ ] Restore values

**Special Characters:**
- [ ] Enter special characters in Agent Name: `Nova™ 2.0`
- [ ] Enter emoji in Welcome Message: `Hi! 👋 I'm here to help`
- [ ] Save and test
- [ ] Verify they display correctly

**Long Text:**
- [ ] Enter very long System Prompt (2000+ characters)
- [ ] Save configuration
- [ ] Test agent
- [ ] Verify it works

### Test 24: Multiple Sessions

**Open Multiple Tabs:**
- [ ] Open AI Agent page in 2+ browser tabs
- [ ] Make changes in Tab 1
- [ ] Save in Tab 1
- [ ] Reload Tab 2
- [ ] Verify Tab 2 shows updated configuration

### Test 25: Error Scenarios

**Invalid API Key:**
- [ ] Enter a fake/invalid API key
- [ ] Save configuration
- [ ] Click Test Agent
- [ ] Should show error: "API authentication failed" or similar
- [ ] Restore valid API key

**Network Issues:**
- [ ] Turn off Wi-Fi / disconnect internet
- [ ] Try to save configuration
- [ ] Should show error
- [ ] Reconnect and try again

### Test 26: Browser Compatibility

**Test in Multiple Browsers:**
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browser (Chrome Mobile, Safari Mobile)

**Test Responsive Design:**
- [ ] Resize browser window to mobile size (< 768px)
- [ ] Sidebar should collapse
- [ ] Hamburger menu appears
- [ ] All tabs still work
- [ ] Save/Test buttons still accessible

### Test 27: Performance

**Load Time:**
- [ ] Measure page load time (should be < 2 seconds)
- [ ] Check for loading spinner while fetching config

**Save Time:**
- [ ] Measure save operation time (should be < 1 second)
- [ ] Verify no freezing or lag

**Test Response:**
- [ ] Measure test response time (2-5 seconds depending on provider)
- [ ] Check for timeout handling (>30 seconds)

---

## ✅ Success Criteria

Your AI Agent is working correctly if:

1. ✅ **Configuration loads** without errors
2. ✅ **All tabs are accessible** (Provider, Personality, Behavior, Appearance)
3. ✅ **Changes are tracked** (Unsaved Changes alert)
4. ✅ **Save works** and shows success message
5. ✅ **Configuration persists** after page reload
6. ✅ **Test Agent works** and returns relevant response
7. ✅ **Stats display** correctly
8. ✅ **Recent conversations** show up
9. ✅ **Preview updates** when you change appearance settings
10. ✅ **Authentication works** (must be logged in)

---

## 🐛 Common Issues & Solutions

### Issue 1: "AI agent is not configured"
**Problem:** No API key set
**Solution:** Enter a valid API key for your selected provider

### Issue 2: "API authentication failed"
**Problem:** Invalid or expired API key
**Solution:** 
- Check API key is copied correctly (no extra spaces)
- Verify API key is active on provider's dashboard
- Check you have available credits/balance

### Issue 3: "Failed to load configuration"
**Problem:** Database connection issue
**Solution:**
- Check DATABASE_URL environment variable
- Verify database is running
- Check Prisma schema is migrated

### Issue 4: Test Agent button is disabled
**Problem:** Either agent is disabled OR no API key
**Solution:**
- Enable the AI agent (toggle ON)
- Ensure API key is configured
- Save configuration

### Issue 5: Save button doesn't work
**Problem:** Authentication issue
**Solution:**
- Verify you're logged in
- Check cookie-based auth is working
- Logout and login again

### Issue 6: Changes not saving
**Problem:** Network or database error
**Solution:**
- Check browser console for errors
- Verify network connection
- Check database is accessible

### Issue 7: "Rate limit exceeded"
**Problem:** Too many API calls to AI provider
**Solution:**
- Wait a few minutes
- Check your API provider's rate limits
- Consider upgrading your plan

---

## 📊 Test Results Template

Use this template to record your test results:

```markdown
# AI Agent Testing - [Date]

## Configuration
- Provider: [OpenAI/Claude/Gemini]
- Model: [model name]
- Agent Name: [name]
- Status: [Enabled/Disabled]

## Tests Performed
- [ ] Page loads correctly
- [ ] Configuration saved successfully
- [ ] Test agent works
- [ ] All tabs accessible
- [ ] Stats display correctly
- [ ] Conversations tracked

## Issues Found
1. [Issue description] - [Severity: High/Medium/Low]
2. ...

## Performance
- Page load time: [X seconds]
- Save time: [X seconds]
- Test response time: [X seconds]

## Browser Tested
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Mobile

## Overall Status
✅ PASS / ❌ FAIL

## Notes
[Any additional observations]
```

---

## 🚀 Next Steps After Testing

Once basic testing is complete:

1. **Test on Real Pages**
   - Deploy AI widget to your website pages
   - Test conversations from visitor perspective
   - Verify lead capture works end-to-end

2. **Monitor Analytics**
   - Check conversation stats daily
   - Monitor conversion rates
   - Track token usage and costs

3. **Optimize Configuration**
   - Adjust system prompt based on real conversations
   - Fine-tune temperature for best results
   - Update welcome message based on feedback

4. **Set Up Integrations**
   - Verify Zoho CRM integration works
   - Check Google Ads conversion tracking
   - Test lead notification emails

5. **Production Readiness**
   - Review security measures
   - Set up monitoring/alerts
   - Prepare customer support for AI agent inquiries

---

## 📞 Need Help?

If you encounter issues during testing:

1. Check browser console for error messages
2. Check server logs for backend errors
3. Verify all environment variables are set
4. Review the comprehensive audit report: `AI_AGENT_ENTERPRISE_AUDIT_REPORT.md`
5. Check API provider status pages:
   - OpenAI: https://status.openai.com/
   - Anthropic: https://status.anthropic.com/
   - Google: https://status.cloud.google.com/

---

**Happy Testing! 🎉**

The AI Agent is enterprise-grade and ready to help you capture and convert leads 24/7.
