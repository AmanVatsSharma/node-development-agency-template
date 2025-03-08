// This file is used to handle initialization tasks in different environments
// It helps prevent database connection attempts during build time on Vercel

export async function register() {
  // Only execute this code on the server
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Check if we're in a Vercel build environment
    const isVercelBuild = process.env.VERCEL_ENV && 
                          process.env.NODE_ENV === 'production' && 
                          process.env.NEXT_PHASE === 'phase-production-build';
    
    if (isVercelBuild) {
      console.log('🔶 Skipping database connection during Vercel build');
      // Don't connect to the database during Vercel builds
      return;
    }
    
    // For normal runtime, we can initialize connections and other resources
    // that shouldn't happen during build time
    console.log('🟢 Server runtime environment detected, safe to use database');
  }
} 