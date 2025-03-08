import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Contact form request type
type ContactFormRequest = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service: string;
  message: string;
};

// In a real project, this would be handled by an environment variable
const API_KEY = 'your-email-service-api-key';

/**
 * Handler for POST requests to /api/contact
 * Validates contact form data and sends an email notification
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json() as ContactFormRequest;
    
    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      );
    }
    
    // Validate email format
    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Log the form submission for demo purposes
    console.log('Contact form submission:', body);
    
    // In a real implementation, you would send an email using a service like SendGrid, AWS SES, or similar
    // Example of sending an email with a hypothetical email service:
    /*
    const emailResponse = await fetch('https://api.email-service.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        to: 'info@enterprisehero.com',
        from: 'noreply@enterprisehero.com',
        subject: `New Contact Form Submission: ${body.service}`,
        text: `
          Name: ${body.name}
          Email: ${body.email}
          Company: ${body.company || 'N/A'}
          Phone: ${body.phone || 'N/A'}
          Service: ${body.service}
          Message: ${body.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Service:</strong> ${body.service}</p>
          <p><strong>Name:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Company:</strong> ${body.company || 'N/A'}</p>
          <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
          <h3>Message:</h3>
          <p>${body.message}</p>
        `
      })
    });
    
    if (!emailResponse.ok) {
      throw new Error('Failed to send email notification');
    }
    */
    
    // Simulate a slight delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Contact form submitted successfully'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Internal server error. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
} 