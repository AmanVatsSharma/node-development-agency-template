# Admin Conversations - WhatsApp-like Interface Guide

## Overview

The Admin Conversations page provides a WhatsApp-like interface for managing and viewing AI agent conversations. This feature allows administrators to monitor, analyze, and manage all AI agent interactions in real-time.

## Features

### 🎨 WhatsApp-like UI
- **Left Sidebar**: Conversation list with previews
- **Right Panel**: Detailed conversation view
- **Real-time Updates**: Live conversation monitoring
- **Responsive Design**: Works on desktop and mobile

### 🔍 Advanced Filtering
- **Status Filter**: Active, Converted, Abandoned, Closed
- **Lead Filter**: All, Leads only, Without leads
- **Search**: By page title, path, URL, or session ID
- **Infinite Scroll**: Load more conversations automatically

### 📊 Analytics Dashboard
- **Today's Chats**: Total conversations today
- **Leads Captured**: Conversion count
- **Conversion Rate**: Percentage of leads captured
- **Real-time Stats**: Live updates

### 💬 Conversation Management
- **Message History**: Complete conversation timeline
- **Lead Detection**: Automatic lead qualification
- **Status Tracking**: Conversation lifecycle management
- **Export Options**: Download conversation data

## Technical Implementation

### Database Schema
```sql
-- AI Conversation Model
model AIConversation {
  id              String   @id @default(cuid())
  sessionId       String   @unique
  visitorId       String?
  leadId          String?
  pageUrl         String
  pagePath        String
  pageTitle       String?
  pageContext     Json?
  messages        Json     // Array of message objects
  metadata        Json?
  status          String   @default("active")
  leadCaptured    Boolean  @default(false)
  conversionData  Json?
  sentimentScore  Float?
  leadScore       Int?
  messageCount    Int      @default(0)
  lastMessageAt   DateTime @default(now())
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt
}
```

### API Endpoints

#### GET /api/ai-agent/conversations
**Purpose**: Fetch conversation list with filters
**Parameters**:
- `limit`: Number of conversations (default: 50)
- `status`: Filter by status (active, converted, abandoned, closed)
- `leadCaptured`: Filter by lead capture (true/false)

**Response**:
```json
{
  "success": true,
  "conversations": [...],
  "stats": {
    "totalToday": 25,
    "conversionsToday": 5,
    "conversionRate": "20.0"
  }
}
```

#### GET /api/ai-agent/conversations/[id]
**Purpose**: Fetch detailed conversation data
**Response**:
```json
{
  "success": true,
  "conversation": {
    "id": "conv_123",
    "messages": [...],
    "metadata": {...},
    "conversionData": {...}
  }
}
```

### Authentication
- **Cookie-based**: Uses `admin_session` cookie
- **Environment Variable**: `ADMIN_PASSWORD` for validation
- **Automatic Redirect**: Redirects to login on auth failure

## Usage Guide

### Accessing Conversations
1. Navigate to `/admin/conversations`
2. Login with admin credentials
3. View conversation list in left sidebar
4. Click any conversation to view details

### Filtering Conversations
1. **Search**: Use the search bar to find specific conversations
2. **Status Filter**: Select conversation status from dropdown
3. **Lead Filter**: Filter by lead capture status
4. **Clear Filters**: Reset all filters to view all conversations

### Managing Conversations
1. **View Details**: Click on any conversation in the list
2. **Navigate**: Use Prev/Next buttons or arrow keys
3. **Open Full View**: Click "Open" button for detailed page
4. **Refresh**: Click refresh button to reload data

### Keyboard Shortcuts
- **Arrow Up**: Previous conversation
- **Arrow Down**: Next conversation
- **Enter**: Select highlighted conversation

## Error Handling

### Common Issues

#### 1. Authentication Errors
**Error**: "Unauthorized" (401)
**Solution**: 
- Check admin session cookie
- Verify ADMIN_PASSWORD environment variable
- Clear browser cookies and re-login

#### 2. API Connection Errors
**Error**: "Failed to load conversations"
**Solution**:
- Check network connection
- Verify API endpoint is accessible
- Check server logs for detailed errors

#### 3. Data Loading Errors
**Error**: "No conversations found"
**Solution**:
- Verify database connection
- Check if conversations exist in database
- Verify filter settings

### Debugging

#### Console Logs
The interface provides comprehensive console logging:
```javascript
// Component initialization
[Admin Conversations] Component initialized - WhatsApp-like interface

// API calls
[Admin Conversations] Loading conversations with filters
[Admin Conversations] Fetching from URL: /api/ai-agent/conversations?limit=50

// Error handling
[Admin Conversations] Error loading conversations: Error message
[Admin Conversations] API Error: { status: 500, data: {...} }
```

#### Network Tab
Check browser Network tab for:
- API request/response details
- HTTP status codes
- Response payloads
- Request headers

## Performance Optimization

### Infinite Scroll
- **Threshold**: 120px from bottom
- **Batch Size**: 50 conversations per load
- **Caching**: Client-side conversation cache
- **Debouncing**: Prevents multiple simultaneous requests

### Data Management
- **Lazy Loading**: Load conversation details on demand
- **Memory Management**: Clear unused conversation data
- **Efficient Filtering**: Client-side search and filtering

## Security Considerations

### Authentication
- **Session Validation**: Every API call validates admin session
- **Password Protection**: Environment variable for admin password
- **Cookie Security**: Secure, HTTP-only cookies

### Data Protection
- **No Sensitive Data**: Conversations don't store sensitive information
- **Access Control**: Admin-only access to conversation data
- **Audit Logging**: All admin actions are logged

## Troubleshooting

### Common Problems

#### 1. Conversations Not Loading
**Symptoms**: Empty conversation list, loading spinner
**Causes**:
- Database connection issues
- Authentication problems
- API endpoint errors

**Solutions**:
1. Check browser console for errors
2. Verify database connection
3. Check admin authentication
4. Restart development server

#### 2. Slow Performance
**Symptoms**: Slow loading, UI freezing
**Causes**:
- Large conversation datasets
- Network latency
- Inefficient queries

**Solutions**:
1. Implement pagination
2. Add loading states
3. Optimize database queries
4. Use caching

#### 3. UI Issues
**Symptoms**: Layout problems, broken styling
**Causes**:
- CSS conflicts
- Component rendering issues
- Responsive design problems

**Solutions**:
1. Check CSS imports
2. Verify component props
3. Test responsive breakpoints
4. Clear browser cache

## Future Enhancements

### Planned Features
- **Real-time Updates**: WebSocket integration for live updates
- **Bulk Actions**: Select multiple conversations for batch operations
- **Export Options**: CSV/JSON export functionality
- **Advanced Analytics**: Detailed conversation metrics
- **Message Search**: Search within conversation content
- **Conversation Templates**: Pre-defined conversation starters

### Technical Improvements
- **Caching Layer**: Redis for improved performance
- **Database Optimization**: Indexing and query optimization
- **Mobile App**: Native mobile application
- **API Rate Limiting**: Prevent abuse and ensure stability

## Support

For technical support or feature requests:
1. Check this documentation first
2. Review browser console logs
3. Check server logs for errors
4. Contact development team with specific error details

## Changelog

### Version 1.0.0 (Current)
- ✅ WhatsApp-like interface implementation
- ✅ Real-time conversation monitoring
- ✅ Advanced filtering and search
- ✅ Comprehensive error handling
- ✅ Responsive design
- ✅ Keyboard navigation
- ✅ Infinite scroll loading
- ✅ Conversation statistics dashboard