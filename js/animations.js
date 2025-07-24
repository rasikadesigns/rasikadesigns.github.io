// Advanced Animations and Interactions

// Initialize advanced animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTypewriterEffect();
    initializeMouseFollower();
    initializeProjectCardAnimations();
    initializeMagneticButtons();
    initializeTextRevealAnimations();
    initializeFloatingElementsInteraction();
});

// Typewriter Effect for Hero Title
function initializeTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        // Add cursor
        const cursor = document.createElement('span');
        cursor.textContent = '|';
        cursor.style.animation = 'blink 1s infinite';
        cursor.style.marginLeft = '2px';
        
        let charIndex = 0;
        
        function typeChar() {
            if (charIndex < originalText.length) {
                heroTitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeChar, 100);
            } else {
                // Add blinking cursor
                heroTitle.appendChild(cursor);
                
                // Remove cursor after 3 seconds
                setTimeout(() => {
                    if (cursor.parentNode) {
                        cursor.remove();
                    }
                }, 3000);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeChar, 500);
    }
}

// Mouse Follower Effect
function initializeMouseFollower() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    follower.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: screen;
    `;
    
    document.body.appendChild(follower);
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        follower.style.left = `${followerX - 10}px`;
        follower.style.top = `${followerY - 10}px`;
        
        requestAnimationFrame(animateFollower);
    }
    
    animateFollower();
    
    // Scale up on hover over interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .project-card, .social-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            follower.style.transform = 'scale(2)';
            follower.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
        });
        
        element.addEventListener('mouseleave', () => {
            follower.style.transform = 'scale(1)';
            follower.style.backgroundColor = 'rgba(59, 130, 246, 0.3)';
        });
    });
}

// Project Card Advanced Animations
function initializeProjectCardAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        const overlay = card.querySelector('.project-overlay');
        const content = card.querySelector('.project-content');
        
        // Parallax effect on card hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            
            if (image) {
                image.style.transform = `scale(1.05) translateX(${(x - centerX) / 50}px) translateY(${(y - centerY) / 50}px)`;
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            if (image) {
                image.style.transform = 'scale(1) translateX(0px) translateY(0px)';
            }
        });
        
        // Stagger animation for overlay links
        const links = overlay ? overlay.querySelectorAll('.project-link') : [];
        links.forEach((link, index) => {
            link.style.transform = 'translateY(20px)';
            link.style.opacity = '0';
            link.style.transition = 'all 0.3s ease';
            link.style.transitionDelay = `${index * 0.1}s`;
        });
        
        card.addEventListener('mouseenter', () => {
            links.forEach(link => {
                link.style.transform = 'translateY(0px)';
                link.style.opacity = '1';
            });
        });
        
        card.addEventListener('mouseleave', () => {
            links.forEach(link => {
                link.style.transform = 'translateY(20px)';
                link.style.opacity = '0';
            });
        });
    });
}

// Magnetic Button Effect
function initializeMagneticButtons() {
    const magneticElements = document.querySelectorAll('.btn, .social-link, .logo');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const strength = 0.3;
            
            element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0px, 0px)';
        });
    });
}

// Text Reveal Animations
function initializeTextRevealAnimations() {
    const textElements = document.querySelectorAll('.section-header h2, .hero-title');
    
    textElements.forEach(element => {
        // Skip if already processed
        if (element.dataset.textAnimated) return;
        element.dataset.textAnimated = 'true';
        
        const text = element.textContent;
        const words = text.split(' ');
        
        element.innerHTML = words.map(word => 
            `<span class="word">${word.split('').map(char => 
                `<span class="char">${char}</span>`
            ).join('')}</span>`
        ).join(' ');
        
        const chars = element.querySelectorAll('.char');
        
        // Set initial state
        chars.forEach((char, index) => {
            char.style.opacity = '0';
            char.style.transform = 'translateY(50px) rotateX(90deg)';
            char.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            char.style.transitionDelay = `${index * 0.03}s`;
        });
        
        // Animate when in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    chars.forEach(char => {
                        char.style.opacity = '1';
                        char.style.transform = 'translateY(0px) rotateX(0deg)';
                    });
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(element);
    });
}

// Floating Elements Interaction
function initializeFloatingElementsInteraction() {
    const floatingElements = document.querySelectorAll('.floating-orb');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        floatingElements.forEach((orb, index) => {
            const rect = orb.getBoundingClientRect();
            const orbX = rect.left + rect.width / 2;
            const orbY = rect.top + rect.height / 2;
            
            const distance = Math.sqrt(
                Math.pow(mouseX - orbX, 2) + Math.pow(mouseY - orbY, 2)
            );
            
            const maxDistance = 200;
            const influence = Math.max(0, 1 - distance / maxDistance);
            
            if (influence > 0) {
                const angle = Math.atan2(mouseY - orbY, mouseX - orbX);
                const pushX = Math.cos(angle + Math.PI) * influence * 20;
                const pushY = Math.sin(angle + Math.PI) * influence * 20;
                
                orb.style.transform = `translate(${pushX}px, ${pushY}px) scale(${1 + influence * 0.2})`;
                orb.style.opacity = `${0.5 + influence * 0.3}`;
            } else {
                orb.style.transform = 'translate(0px, 0px) scale(1)';
                orb.style.opacity = '0.5';
            }
        });
    });
}

// Smooth Page Transitions
function initializePageTransitions() {
    // Add page load animation
    document.body.style.opacity = '0';
    
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
    
    // Add click animations to links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = link.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
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
            
            link.style.position = 'relative';
            link.style.overflow = 'hidden';
            link.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Scroll-triggered Counter Animations
function initializeCounterAnimations() {
    const counters = document.querySelectorAll('.stat-value');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const text = element.textContent;
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/[\d\s]/g, '');
    
    let current = 0;
    const increment = number / 60; // 60 frames for 1 second at 60fps
    
    function updateCounter() {
        current += increment;
        if (current < number) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = number + suffix;
        }
    }
    
    updateCounter();
}

// Image Loading Animations
function initializeImageAnimations() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'all 0.8s ease';
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    if (img.complete) {
                        animateImageIn(img);
                    } else {
                        img.addEventListener('load', () => animateImageIn(img));
                    }
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(img);
    });
}

function animateImageIn(img) {
    img.style.opacity = '1';
    img.style.transform = 'scale(1)';
}

// Background Gradient Animation
function initializeBackgroundGradientAnimation() {
    const gradientElements = document.querySelectorAll('.hero, .gradient-orb-1, .gradient-orb-2');
    
    let gradientPosition = 0;
    
    function animateGradient() {
        gradientPosition += 0.5;
        
        gradientElements.forEach(element => {
            if (element.classList.contains('hero')) {
                element.style.backgroundPosition = `${gradientPosition}% 50%`;
            }
        });
        
        requestAnimationFrame(animateGradient);
    }
    
    animateGradient();
}

// Initialize additional animations
document.addEventListener('DOMContentLoaded', function() {
    initializePageTransitions();
    initializeCounterAnimations();
    initializeImageAnimations();
    initializeBackgroundGradientAnimation();
});

// CSS for additional animations
const additionalStyles = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
    
    @keyframes ripple {
        0% { transform: scale(0); opacity: 1; }
        100% { transform: scale(2); opacity: 0; }
    }
    
    .word {
        display: inline-block;
        margin-right: 0.3em;
    }
    
    .char {
        display: inline-block;
        transform-origin: bottom;
    }
    
    .mouse-follower {
        transition: transform 0.1s ease, background-color 0.3s ease;
    }
`;

// Add styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);