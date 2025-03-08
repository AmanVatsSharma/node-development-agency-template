/**
 * Image Optimization Utilities
 * 
 * This file contains helper functions and configurations for optimizing images across the website.
 * Next.js provides built-in image optimization through the Image component, but these utilities
 * help standardize usage and implement best practices.
 */

// Default image sizes for different contexts
export const imageSizes = {
  // Hero/banner images
  hero: {
    width: 1920,
    height: 1080,
    sizes: '100vw',
  },
  
  // Card images (e.g., blog posts, portfolio items)
  card: {
    width: 600,
    height: 400,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  },
  
  // Thumbnail images (e.g., team members, testimonials)
  thumbnail: {
    width: 300,
    height: 300,
    sizes: '(max-width: 640px) 50vw, 150px',
  },
  
  // Avatar images (e.g., user profiles, comments)
  avatar: {
    width: 80,
    height: 80,
    sizes: '80px',
  },
  
  // Gallery images
  gallery: {
    width: 800,
    height: 600,
    sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px',
  },
  
  // Logo images
  logo: {
    width: 240,
    height: 80,
    sizes: '240px',
  },
};

// Default image formats and quality settings
export const imageConfig = {
  formats: ['webp', 'avif', 'jpg', 'png'], // In order of preference
  defaultQuality: 80, // Good balance between quality and file size
  placeholderQuality: 40, // For blur placeholders
  lowQualityPreview: 20, // For progressive loading
};

// Helper function to generate blur placeholder data URL for images
// This creates a tiny, blurry version of the image that can be inlined in HTML
// and shown while the full image loads for better perceived performance
export const generateBlurPlaceholder = (src: string): Promise<string> => {
  // In a real application, this would generate a tiny blur placeholder
  // For demonstration purposes, we're returning a simple gray placeholder
  return Promise.resolve('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMjAwIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2UyZThmMCI+PC9yZWN0Pjwvc3ZnPg==');
};

// Helper function to determine if an image should use a blur placeholder
export const shouldUseBlurPlaceholder = (src: string): boolean => {
  // In a real application, this would determine if the image should use a blur placeholder
  // For demonstration purposes, we'll return true for all images
  return true;
};

// Function to normalize image path
export const normalizeImagePath = (src: string): string => {
  // If the path is already a URL, return it as is
  if (src.startsWith('http://') || src.startsWith('https://')) {
    return src;
  }
  
  // If the path is a data URL, return it as is
  if (src.startsWith('data:')) {
    return src;
  }
  
  // Otherwise, assume it's a local path and ensure it starts with /
  return src.startsWith('/') ? src : `/${src}`;
};

// Common image loading strategy settings
export const loadingStrategy = {
  // Use eager loading for images above the fold (visible in the initial viewport)
  aboveFold: 'eager' as const,
  
  // Use lazy loading for images below the fold (not visible in the initial viewport)
  belowFold: 'lazy' as const,
};

// Example usage:
// 
// import Image from 'next/image';
// import { imageSizes, loadingStrategy, normalizeImagePath } from '@/utils/imageOptimization';
// 
// export function BlogPostCard({ post }) {
//   return (
//     <div className="blog-card">
//       <Image
//         src={normalizeImagePath(post.imageUrl)}
//         alt={post.title}
//         width={imageSizes.card.width}
//         height={imageSizes.card.height}
//         sizes={imageSizes.card.sizes}
//         loading={loadingStrategy.belowFold}
//         placeholder="blur"
//         blurDataURL="data:image/svg+xml;base64,..."
//       />
//       <h2>{post.title}</h2>
//     </div>
//   );
// } 