# Admin Integrations Dashboard

## Overview

The Admin Integrations Dashboard is an enterprise-grade management interface for configuring and monitoring CRM and advertising integrations. It provides a secure, role-based access control (RBAC) system for managing Zoho CRM and Google Ads integrations.

## Features

### 🔐 Security
- **NextAuth v5** - Modern authentication with JWT sessions
- **Role-Based Access Control** - Admin and Editor roles only
- **Middleware Protection** - Routes protected at application edge
- **Secure Credential Storage** - Encrypted secrets in PostgreSQL

### 📊 Dashboard Components

#### Statistics Cards
- **Total Logs** - Count of all integration events
- **Errors** - Number of failed operations
- **Zoho Events** - Zoho CRM activity counter
- **Google Events** - Google Ads activity counter

#### Integration Configuration
- **Tabbed Interface** - Separate tabs for Zoho and Google settings
- **Real-time Validation** - Instant feedback on configuration changes
- **Unsaved Changes Alert** - Warns before navigating away
- **Responsive Design** - Works on all screen sizes

#### Testing Tools
- **Test Zoho Connection** - Validates OAuth token and API access
- **Test Google Config** - Verifies conversion tracking setup
- **Test Lead Push** - Creates sandbox lead in Zoho CRM

#### Activity Logs
- **Real-time Monitoring** - Live integration event stream
- **Filtering** - View all, Zoho-only, or Google-only logs
- **Detailed Information** - Provider, level, message, timestamps
- **Error Tracking** - Highlighted error messages for quick debugging

## Access Control

### Required Roles
Only users with these roles can access the admin panel:
- `admin` - Full access to all features
- `editor` - Full access to all features

Users with role `user` or no role will be denied access.

### Authentication Flow
1. User visits `/pages/admin/integrations`
2. Middleware checks NextAuth session
3. If not authenticated → Redirect to `/login`
4. If authenticated but wrong role → Redirect to `/login` with error
5. If authorized → Render admin dashboard

## Setup Instructions

### 1. Environment Variables
Create `.env.local` in project root with these required variables:

```bash
# Database
DATABASE_URL="postgresql://..."

# NextAuth (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# Zoho CRM (get from https://api-console.zoho.com/)
ZOHO_CLIENT_ID="..."
ZOHO_CLIENT_SECRET="..."
ZOHO_REFRESH_TOKEN="..."
ZOHO_DOMAIN="https://www.zohoapis.com"

# Google Ads (get from Google Ads console)
GOOGLE_CONVERSION_ID="AW-..."
GOOGLE_API_KEY="..."
```

### 2. Database Setup
```bash
# Push schema to database
pnpm db:push

# Seed with sample data and admin user
pnpm db:seed
```

This creates an admin user:
- Email: `admin@example.com`
- Password: `password123`
- Role: `admin`

### 3. Start Development Server
```bash
pnpm dev
```

Visit http://localhost:3000/login to sign in.

## API Endpoints

### Authentication
- `GET/POST /api/auth/[...nextauth]` - NextAuth handlers (session, signin, signout)

### Admin Integration Settings
- `GET /api/admin/integrations` - Fetch integration settings
- `POST /api/admin/integrations` - Update integration settings

### Testing
- `GET /api/admin/integrations/test?provider=zoho|google` - Test provider connection
- `POST /api/admin/integrations/test-lead` - Create sandbox lead in Zoho

### Logging
- `GET /api/admin/logs?take=N` - Fetch recent integration logs

## Component Architecture

### Page Structure
```
IntegrationsAdminPage (Client Component)
├── Header
│   ├── Title & Description
│   ├── User Info Badge
│   └── Sign Out Button
├── Stats Cards (4 cards)
│   ├── Total Logs
│   ├── Errors
│   ├── Zoho Events
│   └── Google Events
├── Unsaved Changes Alert
├── Integration Configuration Card
│   ├── Tabs (Zoho | Google)
│   ├── TabContent: Zoho
│   │   ├── Client ID Input
│   │   ├── Client Secret Input
│   │   ├── Refresh Token Textarea
│   │   ├── Last Refresh Info
│   │   ├── Test Buttons
│   │   └── Test Results Alerts
│   ├── TabContent: Google
│   │   ├── Conversion ID Input
│   │   ├── API Key Input
│   │   ├── Event Labels JSON Textarea
│   │   ├── Test Button
│   │   └── Test Results Alert
│   └── Save Button
└── Integration Logs Card
    ├── Filter Tabs (All | Zoho | Google)
    ├── Refresh Button
    └── Logs List (scrollable)
```

### State Management
- `settings` - Current integration settings (editable)
- `originalSettings` - Original settings (for change detection)
- `logs` - Array of integration log entries
- `loading` - Global loading state
- `saving` - Save operation in progress
- `testing` - Object tracking test operations { zoho, google, lead }
- `testResult` - Object storing test results { zoho, google, lead }
- `activeTab` - Current active tab ('zoho' | 'google')
- `hasUnsavedChanges` - Boolean flag for unsaved changes
- `logFilter` - Current log filter ('all' | 'zoho' | 'google_ads')

### Data Flow

#### Loading Data
```
Component Mount
  ↓
loadData()
  ↓
Parallel Fetch
  ├─→ GET /api/admin/integrations (settings)
  └─→ GET /api/admin/logs (logs)
  ↓
Update State
  ├─→ setSettings()
  ├─→ setOriginalSettings()
  └─→ setLogs()
```

#### Saving Settings
```
User Clicks Save
  ↓
save()
  ↓
POST /api/admin/integrations (with settings)
  ↓
Update State
  ├─→ setSettings() (new saved settings)
  ├─→ setOriginalSettings() (reset baseline)
  └─→ setHasUnsavedChanges(false)
  ↓
loadData() (refresh logs)
```

#### Testing Connection
```
User Clicks Test
  ↓
testProvider('zoho' | 'google')
  ↓
setTesting({ [provider]: true })
  ↓
GET /api/admin/integrations/test?provider=X
  ↓
setTestResult({ [provider]: result })
  ↓
setTesting({ [provider]: false })
  ↓
loadData() (refresh logs)
```

## Zoho CRM Integration

### Setup Process

1. **Create Zoho API Client**
   - Visit https://api-console.zoho.com/
   - Create "Server-based Application"
   - Note Client ID and Client Secret

2. **Generate Refresh Token**
   - Use Zoho OAuth2 flow
   - Request scopes: `ZohoCRM.modules.ALL`, `ZohoCRM.settings.ALL`
   - Exchange authorization code for refresh token

3. **Configure in Admin Panel**
   - Enter Client ID, Client Secret, Refresh Token
   - Click "Test Zoho Connection"
   - Verify token expiry time is returned

4. **Test Lead Push**
   - Click "Test Lead Push"
   - Check for successful Zoho Lead ID
   - Verify lead in Zoho CRM dashboard

### API Endpoints Used
- Token Refresh: `POST https://accounts.zoho.com/oauth/v2/token`
- Create Lead: `POST https://www.zohoapis.com/crm/v2/Leads`

### Error Handling
- **Token Expired** - Automatic refresh on next request
- **Invalid Credentials** - Shows error in test result
- **API Rate Limit** - Logged and queued for retry
- **Network Error** - Logged with retry mechanism

## Google Ads Integration

### Setup Process

1. **Get Conversion ID**
   - Sign in to Google Ads
   - Navigate to Tools & Settings → Conversions
   - Find your conversion action
   - Note the Conversion ID (format: AW-XXXXXXXXXX)

2. **Get Conversion Labels**
   - Each conversion action has a label
   - Format: `AW-XXXXXXXXXX/AbCdEfGhIj`
   - Map to event types in Event Labels JSON

3. **Configure in Admin Panel**
   - Enter Conversion ID
   - Optionally add API Key for server-side tracking
   - Add Event Labels JSON mapping
   ```json
   {
     "lead_submit": "AW-XXXXXXXXXX/AbCdEfGhIj",
     "call_click": "AW-XXXXXXXXXX/KlMnOpQrSt"
   }
   ```

4. **Test Configuration**
   - Click "Test Google Config"
   - Verify conversion ID is returned

### Client-Side Tracking
Uses Google Tag (gtag.js) for conversion tracking:
```javascript
gtag('event', 'conversion', {
  'send_to': 'AW-XXXXXXXXXX/AbCdEfGhIj',
  'value': 1.0,
  'currency': 'USD'
});
```

### Server-Side Tracking
Optional enhanced conversions with API key:
- More accurate attribution
- Works without cookies
- Better cross-device tracking

## Monitoring & Debugging

### Log Levels
- `info` - Normal operations (green badge)
- `warn` - Warnings, non-critical issues (yellow badge)
- `error` - Failures requiring attention (red badge)

### Log Types
- `lead_submit` - New lead submitted
- `token_refresh` - OAuth token refreshed
- `api_call` - External API called
- `retry` - Retry attempt
- `test` - Test operation

### Debugging Tips

1. **Check Logs First**
   - Filter by provider to narrow down issues
   - Look for error-level logs
   - Note timestamps to correlate with user actions

2. **Test Connections**
   - Always test after changing credentials
   - Verify token expiry times
   - Check for API errors in test results

3. **Monitor Statistics**
   - High error count indicates integration issues
   - Zero logs might mean middleware blocking
   - Unbalanced Zoho/Google counts could indicate misconfiguration

4. **Browser Console**
   - All operations log to browser console
   - Prefix: `[Admin Page]`
   - Useful for tracking state changes and API calls

5. **Server Logs**
   - Check terminal output for server-side errors
   - Middleware logs show auth decisions
   - API route logs show request processing

## Security Best Practices

1. **Credential Management**
   - Never commit secrets to git
   - Rotate credentials regularly
   - Use environment variables for all secrets

2. **Access Control**
   - Restrict admin role to essential personnel
   - Use editor role for limited access
   - Monitor auth logs for suspicious activity

3. **Token Security**
   - Zoho tokens auto-refresh before expiry
   - Tokens encrypted at rest in database
   - Short JWT session lifetimes (30 days max)

4. **API Security**
   - All admin endpoints protected by middleware
   - CORS properly configured
   - Rate limiting on external API calls

5. **Monitoring**
   - Review integration logs regularly
   - Set up alerts for high error rates
   - Track unusual access patterns

## Troubleshooting

### "Loading..." Stuck Forever
**Cause**: API endpoint returning error or middleware blocking
**Solution**:
1. Check browser console for errors
2. Verify NEXTAUTH_SECRET is set
3. Confirm user has admin/editor role
4. Check network tab for 401/403 responses

### "Unauthorized" Error
**Cause**: Middleware rejecting request
**Solution**:
1. Verify logged in as admin@example.com
2. Check user role in database
3. Ensure NEXTAUTH_SECRET matches between auth.ts and middleware
4. Clear cookies and re-login

### Test Zoho Connection Fails
**Cause**: Invalid OAuth credentials or expired token
**Solution**:
1. Verify Client ID and Secret are correct
2. Check Refresh Token hasn't been revoked
3. Ensure Zoho domain is correct (.com, .eu, .in, etc.)
4. Re-generate refresh token if necessary

### Test Google Config Fails
**Cause**: Invalid conversion ID format
**Solution**:
1. Verify format is AW-XXXXXXXXXX (capital letters, hyphen, numbers)
2. Check conversion ID exists in Google Ads
3. Ensure you have access to the Google Ads account

### Logs Not Showing
**Cause**: Database connection issue or no logs generated
**Solution**:
1. Verify DATABASE_URL is correct
2. Check database has IntegrationLog table
3. Run some test operations to generate logs
4. Try clicking Refresh button

## Performance Considerations

### Client-Side
- **Debounced API Calls** - Settings changes don't immediately hit API
- **Optimistic Updates** - UI updates before server confirms
- **Lazy Loading** - Logs fetched only when needed
- **Memoization** - Filtered logs computed efficiently

### Server-Side
- **Database Indexing** - Logs indexed by provider, level, createdAt
- **Query Limits** - Default 100 logs, configurable
- **Connection Pooling** - Prisma manages DB connections
- **Async Operations** - Non-blocking I/O for all API calls

### Scalability
- **Stateless Architecture** - JWT sessions, no server-side storage
- **Horizontal Scaling** - Multiple instances behind load balancer
- **Database Optimization** - Proper indexes, query optimization
- **CDN Static Assets** - Next.js automatic optimization

## Future Enhancements

### Planned Features
- [ ] Real-time log streaming with WebSockets
- [ ] Advanced filtering (date range, full-text search)
- [ ] Export logs to CSV/JSON
- [ ] Integration health dashboard
- [ ] Automated testing schedule
- [ ] Email alerts for critical errors
- [ ] Multi-factor authentication (MFA)
- [ ] Audit trail for settings changes
- [ ] Bulk lead import/export
- [ ] Custom webhook integrations

### Architecture Improvements
- [ ] GraphQL API for flexible data fetching
- [ ] Redis caching for frequently accessed data
- [ ] Message queue for async processing (Bull/BullMQ)
- [ ] Microservices for heavy integration work
- [ ] Kubernetes deployment manifests
- [ ] CI/CD pipeline with automated tests

## Support

For issues or questions:
1. Check this README first
2. Review ARCHITECTURE.md for technical details
3. Search integration logs for error messages
4. Check server terminal output
5. Contact development team

## License

Internal use only. Proprietary and confidential.
