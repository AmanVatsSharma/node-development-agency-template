// Premium Software Ecosystem - Interactive Features
class NexusTechApp {
    constructor() {
        this.init();
        this.setupAnimations();
        this.setupInteractions();
        this.setupScrollEffects();
    }

    init() {
        // Add loading animation
        this.showLoadingAnimation();
        
        // Initialize floating characters
        this.createFloatingCharacters();
        
        // Setup premium effects
        this.setupPremiumEffects();
    }

    showLoadingAnimation() {
        const loader = document.createElement('div');
        loader.className = 'premium-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="loader-icon">
                    <i class="fas fa-cube"></i>
                </div>
                <div class="loader-text">NexusTech</div>
                <div class="loader-progress">
                    <div class="progress-bar"></div>
                </div>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Remove loader after animation
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(loader);
            }, 500);
        }, 2000);
    }

    createFloatingCharacters() {
        const characters = ['⚡', '🚀', '💎', '⭐', '🔥', '🎯', '💡', '🔧'];
        const heroSection = document.querySelector('.hero');
        
        for (let i = 0; i < 8; i++) {
            const character = document.createElement('div');
            character.className = 'floating-character';
            character.textContent = characters[i];
            character.style.cssText = `
                position: absolute;
                font-size: ${Math.random() * 20 + 20}px;
                color: rgba(99, 102, 241, 0.3);
                pointer-events: none;
                z-index: 1;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: floatCharacter ${Math.random() * 10 + 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            
            heroSection.appendChild(character);
        }
        
        // Add CSS for floating characters
        const style = document.createElement('style');
        style.textContent = `
            @keyframes floatCharacter {
                0%, 100% { 
                    transform: translateY(0px) translateX(0px) rotate(0deg); 
                    opacity: 0.3;
                }
                25% { 
                    transform: translateY(-30px) translateX(20px) rotate(90deg); 
                    opacity: 0.6;
                }
                50% { 
                    transform: translateY(-60px) translateX(-10px) rotate(180deg); 
                    opacity: 0.8;
                }
                75% { 
                    transform: translateY(-30px) translateX(-20px) rotate(270deg); 
                    opacity: 0.6;
                }
            }
            
            .premium-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                transition: opacity 0.5s ease;
            }
            
            .loader-content {
                text-align: center;
                color: white;
            }
            
            .loader-icon {
                font-size: 3rem;
                margin-bottom: 1rem;
                animation: spin 2s linear infinite;
            }
            
            .loader-text {
                font-size: 1.5rem;
                font-weight: 700;
                margin-bottom: 2rem;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .loader-progress {
                width: 200px;
                height: 4px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                overflow: hidden;
            }
            
            .progress-bar {
                height: 100%;
                background: linear-gradient(135deg, #6366f1, #8b5cf6);
                border-radius: 2px;
                animation: progress 2s ease-out forwards;
            }
            
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            
            @keyframes progress {
                from { width: 0%; }
                to { width: 100%; }
            }
        `;
        document.head.appendChild(style);
    }

    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.product-item, .timeline-item, .stat-item').forEach(el => {
            observer.observe(el);
        });

        // Add animation styles
        const animationStyle = document.createElement('style');
        animationStyle.textContent = `
            .product-item, .timeline-item, .stat-item {
                opacity: 0;
                transform: translateY(30px);
                transition: all 0.6s ease;
            }
            
            .animate-in {
                opacity: 1;
                transform: translateY(0);
            }
            
            .product-item:nth-child(1) { transition-delay: 0.1s; }
            .product-item:nth-child(2) { transition-delay: 0.2s; }
            .product-item:nth-child(3) { transition-delay: 0.3s; }
            .product-item:nth-child(4) { transition-delay: 0.4s; }
        `;
        document.head.appendChild(animationStyle);
    }

    setupInteractions() {
        // Premium hover effects for product cards
        document.querySelectorAll('.product-item').forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                this.createHoverEffect(e.target);
            });
            
            card.addEventListener('mouseleave', (e) => {
                this.removeHoverEffect(e.target);
            });
        });

        // Button interactions
        document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.createRippleEffect(e);
            });
        });

        // Navigation smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    createHoverEffect(element) {
        const glow = document.createElement('div');
        glow.className = 'hover-glow';
        glow.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
            border-radius: 20px;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        element.style.position = 'relative';
        element.appendChild(glow);
        
        setTimeout(() => {
            glow.style.opacity = '1';
        }, 10);
    }

    removeHoverEffect(element) {
        const glow = element.querySelector('.hover-glow');
        if (glow) {
            glow.style.opacity = '0';
            setTimeout(() => {
                if (glow.parentNode) {
                    glow.parentNode.removeChild(glow);
                }
            }, 300);
        }
    }

    createRippleEffect(event) {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            
            // Parallax effect for floating shapes
            document.querySelectorAll('.shape').forEach((shape, index) => {
                const speed = 0.5 + (index * 0.1);
                shape.style.transform = `translateY(${parallax * speed}px)`;
            });
            
            // Navbar background opacity
            const navbar = document.querySelector('.navbar');
            if (scrolled > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = 'none';
            }
            
            ticking = false;
        };
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestTick);
    }

    setupPremiumEffects() {
        // Add ripple animation CSS
        const rippleStyle = document.createElement('style');
        rippleStyle.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(rippleStyle);

        // Typing effect for hero title
        this.createTypingEffect();
        
        // Counter animation for stats
        this.animateCounters();
    }

    createTypingEffect() {
        const titleElement = document.querySelector('.hero-title');
        const originalText = titleElement.innerHTML;
        titleElement.innerHTML = '';
        
        let index = 0;
        const typeSpeed = 100;
        
        const typeWriter = () => {
            if (index < originalText.length) {
                titleElement.innerHTML += originalText.charAt(index);
                index++;
                setTimeout(typeWriter, typeSpeed);
            }
        };
        
        // Start typing effect after a delay
        setTimeout(typeWriter, 1000);
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        const observerOptions = {
            threshold: 0.5
        };

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });
    }

    animateCounter(element) {
        const target = element.textContent;
        const isPercentage = target.includes('%');
        const isPlus = target.includes('+');
        const numericValue = parseInt(target.replace(/[^\d]/g, ''));
        
        let current = 0;
        const increment = numericValue / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                current = numericValue;
                clearInterval(timer);
            }
            
            let displayValue = Math.floor(current);
            if (isPercentage) displayValue += '%';
            if (isPlus) displayValue += '+';
            
            element.textContent = displayValue;
        }, stepTime);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new NexusTechApp();
});

// Add some premium micro-interactions
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'custom-cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.custom-cursor');
    cursorElement.style.left = e.clientX - 10 + 'px';
    cursorElement.style.top = e.clientY - 10 + 'px';
});

// Hide cursor on mouse leave
document.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.opacity = '0';
    }
});

document.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.opacity = '1';
    }
});