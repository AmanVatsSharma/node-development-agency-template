# Claude Custom Endpoint Guide

## Overview

The AI Agent now supports using Claude with custom endpoints, making it compatible with:
- **Anthropic's official API** (default)
- **AWS Bedrock**
- **Azure AI Claude**
- **OpenAI-compatible proxies**
- **Custom/self-hosted models**

## Configuration

### 1. Access Admin Panel

Navigate to `/admin/ai-agent` and sign in with your admin credentials.

### 2. Select Provider

In the **Provider & Model** tab:
1. Select **Claude (Anthropic)** from the provider dropdown
2. Enter your API key
3. (Optional) Configure a custom Base URL

### 3. Base URL Options

| Service | Base URL Format | Notes |
|---------|---------------|-------|
| Anthropic API | `https://api.anthropic.com/v1` | Default - leave empty |
| AWS Bedrock | `https://bedrock-runtime.{region}.amazonaws.com` | Use model ID from Bedrock |
| Azure AI | `https://{your-resource}.openai.azure.com/openai/v1` | Azure v1 format |
| Custom Proxy | `https://your-proxy.com/v1` | Must be compatible |

### 4. Model Selection

Different endpoints require different model IDs:

**Anthropic API:**
- `claude-sonnet-4-5`
- `claude-3-5-sonnet-20241022`
- `claude-3-opus-20240229`
- `claude-3-haiku-20240307`

**AWS Bedrock:**
- `anthropic.claude-3-5-sonnet-20241022-v1:0`
- `anthropic.claude-3-opus-20240229-v1:0`

**Azure AI:**
- Your deployed model name in Azure

### 5. Test Configuration

Click **Test Agent** to verify your configuration works:
- If successful: You'll receive a test response from the AI
- If failed: Check the error message for troubleshooting

## API Key Setup

### For Anthropic API
1. Get your API key from [console.anthropic.com](https://console.anthropic.com)
2. Ensure the key has sufficient credits

### For AWS Bedrock
1. Set up AWS credentials with Bedrock access
2. Use AWS access key and secret key as the API key
3. Region must match your base URL

### For Azure AI
1. Deploy Claude model in Azure AI Studio
2. Get your endpoint URL and API key
3. Use the endpoint URL as base URL

## OpenAI-Compatible Format

If your custom endpoint uses OpenAI-compatible format (AWS Bedrock, Azure AI, proxies), the provider automatically detects this and uses the correct request format.

The system checks for these patterns:
- `/v1/chat` in URL
- `/chat/completions` in URL
- Keywords: `azure`, `bedrock`, `openai` in URL

## Testing

1. Save configuration
2. Enable the AI agent
3. Click "Test Agent"
4. Verify the response

Expected test response:
```
Test Successful!
Tokens: 25 (prompt: X, completion: Y)
```

## Troubleshooting

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `Claude API error: 401` | Invalid API key | Check your credentials |
| `Claude API error: 403` | No permission | Ensure model access |
| `Claude API error: 404` | Invalid endpoint | Check base URL format |
| `Claude API error: 400` | Wrong format | Verify model ID |

### Debug Tips

- Use browser dev tools Network tab to see request/response
- Check console logs at `/admin/ai-agent` for errors
- Test with default Anthropic API first

## Security

- API keys are stored encrypted in the database
- Use environment variables for production keys
- Rotate keys periodically

## Examples

### Example 1: AWS Bedrock (us-east-1)
```
Provider: Claude
Base URL: https://bedrock-runtime.us-east-1.amazonaws.com
Model: anthropic.claude-3-5-sonnet-20241022-v1:0
API Key: AKIAIOSFODNN7EXAMPLE (AWS Access Key)
```

### Example 2: Azure AI
```
Provider: Claude
Base URL: https://my-resource.openai.azure.com/openai/v1
Model: claude-35-sonnet
API Key: azure-api-key-from-portal
```

### Example 3: Custom Proxy
```
Provider: Claude
Base URL: https://api.mygateway.com/v1
Model: claude-sonnet-4-5
API Key: your-proxy-key
```