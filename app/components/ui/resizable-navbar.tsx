"use client";
/**
 * Resizable Navbar Component
 * 
 * A modern, scroll-responsive navigation bar with glassmorphic design
 * Features:
 * - Smooth scroll-based resizing and styling
 * - Mobile-responsive with separate mobile navigation
 * - Dark mode support
 * - Framer Motion animations
 * - Compound component pattern for flexibility
 * 
 * @module ResizableNavbar
 * @author Enterprise Hero Development Team
 * @see NAVBAR_DOCS.md for detailed documentation
 */

import { cn } from "@/app/lib/cn"; // Fixed: Correct import path for cn utility
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState, useEffect } from "react";

// Console log for component initialization (debugging aid)
console.log("🎨 [ResizableNavbar] Component module loaded");


interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Main Navbar Container
 * 
 * Handles scroll detection and passes visibility state to children
 * Triggers visual changes when user scrolls past 100px
 * Now with scroll direction detection for better UX
 * 
 * @param {NavbarProps} props - Component props
 * @returns {JSX.Element} Navbar container with scroll detection
 */
export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(0);

  // Monitor scroll position and update visibility state with direction detection
  useMotionValueEvent(scrollY, "change", (latest) => {
    // Determine scroll direction
    const direction = latest > lastScrollY.current ? "down" : "up";
    setScrollDirection(direction);
    lastScrollY.current = latest;

    console.log(`📊 [Navbar] Scroll: ${latest}px, Direction: ${direction}, Visible: ${latest > 100}`);
    
    // Show compact navbar when scrolled past 100px
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  // Log component mount
  useEffect(() => {
    console.log("✅ [Navbar] Component mounted with scroll direction detection");
    return () => console.log("🔴 [Navbar] Component unmounted");
  }, []);

  return (
    <motion.div
      ref={ref}
      // Using fixed positioning for consistent behavior
      // Animates translateY based on scroll position for smooth appearance
      initial={{ y: 0 }}
      animate={{
        y: visible && scrollDirection === "down" && scrollY.get() > 150 ? -100 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={cn("fixed inset-x-0 top-0 z-50 w-full", className)}
    >
      {/* Pass visible state down to child components */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

/**
 * Desktop Navigation Body
 * 
 * Animated container that resizes based on scroll position
 * Applies glassmorphic effect when scrolled
 * 
 * Key Improvements:
 * - Removed hard-coded minWidth for better responsiveness
 * - Changed width from 40% to 65% for better content visibility
 * - Added proper comments and error handling
 * - Passes visible prop to all children for coordinated animations
 * 
 * @param {NavBodyProps} props - Component props including visible state
 * @returns {JSX.Element} Animated navigation body
 */
export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  // Log visibility state changes for debugging
  useEffect(() => {
    console.log(`🎯 [NavBody] Visibility changed: ${visible ? "Compact" : "Full Width"}`);
  }, [visible]);

  return (
    <motion.div
      animate={{
        // Glassmorphic blur effect when scrolled
        backdropFilter: visible ? "blur(10px)" : "none",
        
        // Enhanced shadow for depth when scrolled
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        
        // Improved: Changed from 40% to 65% for better content visibility
        // Using min() to ensure maximum width of 1000px for ultra-wide screens
        width: visible ? "min(65%, 1000px)" : "100%",
        
        // Slight vertical offset when scrolled
        y: visible ? 16 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      // FIXED: Removed hard-coded minWidth: 800px
      // Now fully responsive and works on all screen sizes
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {/* Pass visible prop to all children for coordinated animations */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

/**
 * Navigation Items Component
 * 
 * Renders navigation links with hover effects
 * Features animated background that follows cursor
 * 
 * FIXED: Removed absolute positioning to prevent overlap with other elements
 * Now uses flex positioning for proper layout
 * 
 * @param {NavItemsProps} props - Array of navigation items
 * @returns {JSX.Element} Styled navigation links
 */
export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  // Log navigation item clicks for analytics
  const handleItemClick = (itemName: string, itemLink: string) => {
    console.log(`🔗 [NavItems] Navigation clicked: ${itemName} -> ${itemLink}`);
    if (onItemClick) {
      onItemClick();
    }
  };

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        console.log("👆 [NavItems] Mouse left navigation area");
      }}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => {
            setHovered(idx);
            console.log(`👆 [NavItems] Hovering over: ${item.name}`);
          }}
          onClick={() => handleItemClick(item.name, item.link)}
          className="relative px-3 py-2 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors whitespace-nowrap"
          key={`link-${idx}`}
          href={item.link}
        >
          {/* Animated hover background */}
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

/**
 * Mobile Navigation Container
 * 
 * Responsive navigation for mobile and tablet devices
 * Adapts styling based on scroll position
 * Passes visible prop to children for coordinated animations
 * 
 * @param {MobileNavProps} props - Component props including visible state
 * @returns {JSX.Element} Mobile navigation container
 */
export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  // Log visibility changes for mobile nav
  useEffect(() => {
    console.log(`📱 [MobileNav] Mobile nav visibility: ${visible ? "Compact" : "Full Width"}`);
  }, [visible]);

  return (
    <motion.div
      animate={{
        // Apply glassmorphic effect when scrolled
        backdropFilter: visible ? "blur(10px)" : "none",
        
        // Enhanced shadow for depth
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        
        // Responsive width adjustment
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        
        // Border radius animation
        borderRadius: visible ? "4px" : "2rem",
        
        // Vertical offset when scrolled
        y: visible ? 16 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {/* Pass visible prop to all children for coordinated animations */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

/**
 * Mobile Navigation Header
 * 
 * Container for mobile nav header content (logo, toggle button)
 * Passes visible prop to children for coordinated animations
 * 
 * @param {MobileNavHeaderProps} props - Component props
 * @returns {JSX.Element} Mobile navigation header
 */
export const MobileNavHeader = ({
  children,
  className,
  visible,
}: MobileNavHeaderProps & { visible?: boolean }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {/* Pass visible prop to all children for coordinated animations */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </div>
  );
};

/**
 * Mobile Navigation Menu
 * 
 * Animated dropdown menu for mobile navigation items
 * Uses AnimatePresence for smooth enter/exit animations
 * 
 * @param {MobileNavMenuProps} props - Component props including isOpen state
 * @returns {JSX.Element | null} Mobile navigation menu or null
 */
export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  // Log menu state changes
  useEffect(() => {
    console.log(`📱 [MobileNavMenu] Menu ${isOpen ? "opened" : "closed"}`);
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/**
 * Mobile Navigation Toggle Button
 * 
 * Toggles between menu and close icons
 * 
 * @param isOpen - Whether the menu is currently open
 * @param onClick - Click handler function
 * @returns {JSX.Element} Toggle button with icon
 */
export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  // Log toggle clicks
  const handleClick = () => {
    console.log(`📱 [MobileNavToggle] Toggle clicked, current state: ${isOpen}`);
    onClick();
  };

  return isOpen ? (
    <IconX 
      className="text-black dark:text-white cursor-pointer hover:opacity-70 transition-opacity" 
      onClick={handleClick}
      aria-label="Close menu"
    />
  ) : (
    <IconMenu2 
      className="text-black dark:text-white cursor-pointer hover:opacity-70 transition-opacity" 
      onClick={handleClick}
      aria-label="Open menu"
    />
  );
};

/**
 * Navbar Logo Component
 * 
 * Customizable logo component for the navigation bar
 * Can accept custom logo, text, and href props
 * Now with responsive sizing based on scroll position
 * 
 * @param logoSrc - Source URL for logo image
 * @param logoAlt - Alt text for logo image
 * @param text - Text to display next to logo
 * @param href - Link destination
 * @param visible - Whether navbar is in compact mode (from scroll)
 * @returns {JSX.Element} Logo component
 */
export const NavbarLogo = ({
  logoSrc,
  logoAlt = "Logo",
  text = "Enterprise Hero",
  href = "/",
  className,
  visible = false,
}: {
  logoSrc?: string;
  logoAlt?: string;
  text?: string;
  href?: string;
  className?: string;
  visible?: boolean;
}) => {
  // Log logo renders and size changes for debugging
  useEffect(() => {
    console.log(`🎨 [NavbarLogo] Logo rendered - Text: ${text}, Compact: ${visible}`);
  }, [text, visible]);

  return (
    <motion.a
      href={href}
      className={cn(
        "relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black hover:opacity-80 transition-all whitespace-nowrap",
        className
      )}
      onClick={() => console.log(`🔗 [NavbarLogo] Logo clicked, navigating to: ${href}`)}
      animate={{
        scale: visible ? 0.9 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    >
      {logoSrc && (
        <motion.img
          src={logoSrc}
          alt={logoAlt}
          width={30}
          height={30}
          className="object-contain"
          animate={{
            width: visible ? 24 : 30,
            height: visible ? 24 : 30,
          }}
        />
      )}
      <motion.span 
        className="font-bold text-blue-600 dark:text-blue-400"
        animate={{
          fontSize: visible ? "1rem" : "1.5rem", // text-base to text-2xl
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        {text.split(' ')[0]}
        <span className="text-gray-900 dark:text-white">
          {text.split(' ').slice(1).join(' ')}
        </span>
      </motion.span>
    </motion.a>
  );
};

/**
 * Navbar Button Component
 * 
 * Versatile button component with multiple variants
 * Can be rendered as button or anchor element
 * 
 * Variants:
 * - primary: White background with shadow (default)
 * - secondary: Transparent background
 * - dark: Black background with shadow
 * - gradient: Blue gradient background
 * 
 * @param href - Link destination (for anchor elements)
 * @param as - HTML tag to render (default: "a")
 * @param children - Button content
 * @param variant - Visual style variant
 * @param className - Additional CSS classes
 * @returns {JSX.Element} Styled button or anchor element
 */
export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  // Base styles for all button variants
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  // Variant-specific styles
  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  // Log button clicks
  const handleClick = (e: React.MouseEvent) => {
    console.log(`🔘 [NavbarButton] Button clicked - Variant: ${variant}, Href: ${href || "none"}`);
    if (props.onClick) {
      (props.onClick as (e: React.MouseEvent) => void)(e);
    }
  };

  // Prepare props based on component type
  const componentProps: any = {
    className: cn(baseStyles, variantStyles[variant], className),
    onClick: handleClick,
    ...props,
  };

  // Only add href for anchor elements
  if (Tag === "a" || !Tag) {
    componentProps.href = href || undefined;
  }

  return (
    <Tag {...componentProps}>
      {children}
    </Tag>
  );
};
