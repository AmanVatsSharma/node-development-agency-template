import { NextRequest, NextResponse } from 'next/server';

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Newsletter subscription request type
type NewsletterRequest = {
  email: string;
  firstName?: string;
  lastName?: string;
  interests?: string[];
};

/**
 * Handler for POST requests to /api/newsletter
 * Validates email and adds subscriber to a newsletter system
 */
export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json() as NewsletterRequest;
    
    // Validate required fields
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
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
    
    // Log the subscription for demo purposes
    console.log('Newsletter subscription:', body);
    
    // In a real implementation, you would add the subscriber to your newsletter service
    // Example with a hypothetical newsletter API:
    /*
    const response = await fetch('https://api.newsletter-service.com/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.NEWSLETTER_API_KEY || ''
      },
      body: JSON.stringify({
        email: body.email,
        first_name: body.firstName || '',
        last_name: body.lastName || '',
        tags: body.interests || [],
        status: 'subscribed'
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to subscribe');
    }
    */
    
    // Simulate a slight delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if the email is already subscribed (this is just for demo purposes)
    const isAlreadySubscribed = body.email.includes('existing');
    
    if (isAlreadySubscribed) {
      return NextResponse.json(
        { success: true, message: 'You are already subscribed to our newsletter' },
        { status: 200 }
      );
    }
    
    // Return success response
    return NextResponse.json(
      { 
        success: true,
        message: 'Successfully subscribed to the newsletter'
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing newsletter subscription:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to process subscription. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined
      },
      { status: 500 }
    );
  }
} 