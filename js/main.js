// Portfolio Website JavaScript

// Global state
let isDarkMode = localStorage.getItem('darkMode') === 'true' || false;
let isMobileMenuOpen = false;

// DOM Elements
const header = document.querySelector('.header');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
const themeToggle = document.getElementById('theme-toggle');
const progressBar = document.getElementById('progress-bar');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeScrollProgress();
    initializeScrollAnimations();
    initializeMobileMenu();
    initializeContactForm();
    initializeSkillCircles();
    initializeParallax();
    
    // Add smooth scrolling to navigation links
    document.addEventListener('click', handleNavigation);
    
    // Handle scroll events
    window.addEventListener('scroll', throttle(handleScroll, 16));
    
    // Handle resize events
    window.addEventListener('resize', throttle(handleResize, 100));
});

// Theme Management
function initializeTheme() {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }
    updateThemeIcon();
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode);
    updateThemeIcon();
    
    // Add a subtle animation to the theme toggle
    themeToggle.style.transform = 'scale(0.9)';
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1)';
    }, 150);
}

function updateThemeIcon() {
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    if (isDarkMode) {
        sunIcon.style.transform = 'translate(-50%, -50%) rotate(180deg)';
        sunIcon.style.opacity = '0';
        moonIcon.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        moonIcon.style.opacity = '1';
    } else {
        sunIcon.style.transform = 'translate(-50%, -50%) rotate(0deg)';
        sunIcon.style.opacity = '1';
        moonIcon.style.transform = 'translate(-50%, -50%) rotate(-180deg)';
        moonIcon.style.opacity = '0';
    }
}

// Scroll Progress Bar
function initializeScrollProgress() {
    updateScrollProgress();
}

function updateScrollProgress() {
    const scrolled = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / maxScroll) * 100;
    
    if (progressBar) {
        progressBar.style.width = `${Math.min(progress, 100)}%`;
    }
}

// Mobile Menu
function initializeMobileMenu() {
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Close mobile menu when clicking on navigation links
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
        link.addEventListener('click', () => {
            if (isMobileMenuOpen) {
                toggleMobileMenu();
            }
        });
    });
}

function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    
    if (mobileMenuToggle) {
        mobileMenuToggle.classList.toggle('active');
    }
    
    if (mobileNav) {
        mobileNav.classList.toggle('active');
        
        // Animate menu items
        const navItems = mobileNav.querySelectorAll('.nav-link-mobile');
        navItems.forEach((item, index) => {
            if (isMobileMenuOpen) {
                item.style.animationDelay = `${index * 0.1}s`;
                item.classList.add('animate-slide-in-up');
            } else {
                item.classList.remove('animate-slide-in-up');
            }
        });
    }
}

// Navigation and Smooth Scrolling
function handleNavigation(event) {
    const target = event.target.closest('[onclick*="scrollToSection"]');
    if (target) {
        event.preventDefault();
        const sectionId = target.getAttribute('onclick').match(/'([^']+)'/)[1];
        scrollToSection(sectionId);
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        // Update active navigation state
        updateActiveNavigation(sectionId);
    }
}

function updateActiveNavigation(activeSection) {
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section link
    const activeLink = document.querySelector(`[onclick*="${activeSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                // Animate children with stagger effect
                const children = entry.target.querySelectorAll('[data-animate]');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.classList.add('animate');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale');
    animateElements.forEach(el => observer.observe(el));
    
    // Add animation classes to elements
    addScrollAnimationClasses();
}

function addScrollAnimationClasses() {
    // Hero section elements
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
    });
    
    // About section
    const aboutText = document.querySelector('.about-text');
    const aboutStats = document.querySelector('.about-stats');
    if (aboutText) aboutText.classList.add('animate-on-scroll-left');
    if (aboutStats) aboutStats.classList.add('animate-on-scroll-right');
    
    // Project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.classList.add('animate-on-scroll-scale');
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Skill categories
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.classList.add('animate-on-scroll');
        category.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Contact form and info
    const contactForm = document.querySelector('.contact-form-container');
    const contactInfo = document.querySelector('.contact-info');
    if (contactForm) contactForm.classList.add('animate-on-scroll-left');
    if (contactInfo) contactInfo.classList.add('animate-on-scroll-right');
}

// Skills Circle Progress Animation
function initializeSkillCircles() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillCircle(entry.target);
            }
        });
    }, observerOptions);
    
    const skillCircles = document.querySelectorAll('.circle-progress');
    skillCircles.forEach(circle => observer.observe(circle));
}

function animateSkillCircle(circleElement) {
    const percentage = parseInt(circleElement.dataset.percentage);
    const color = circleElement.dataset.color;
    const circle = circleElement.querySelector('.circle-fill');
    const percentageText = circleElement.querySelector('.percentage');
    
    if (circle && percentageText) {
        // Set the stroke color
        circle.style.stroke = color;
        
        // Calculate stroke dash offset
        const circumference = 314; // 2 * π * 50 (radius)
        const offset = circumference - (percentage / 100) * circumference;
        
        // Animate the circle
        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 200);
        
        // Animate the percentage counter
        animateCounter(percentageText, 0, percentage, 1500);
    }
}

function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(start + (end - start) * easeOutQuart);
        
        element.textContent = `${current}%`;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Contact Form Handling
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(event) {
    event.preventDefault();
    
    const submitButton = contactForm.querySelector('.form-submit');
    const formData = new FormData(contactForm);
    
    // Show loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual API call)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Show success message
        showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
        
    } catch (error) {
        // Show error message
        showToast('Failed to send message. Please try again.', 'error');
    } finally {
        // Reset button state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
    }
}

// Toast Notifications
function showToast(message, type = 'success') {
    const toastMessage = document.getElementById('toast-message');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        toast.className = `toast ${type}`;
        toast.classList.add('show');
        
        // Auto hide after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    }
}

// Parallax Effect
function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-slow');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
    });
}

// Scroll Event Handler
function handleScroll() {
    updateScrollProgress();
    updateActiveSection();
    handleHeaderBackground();
}

function updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const headerHeight = header ? header.offsetHeight : 0;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            updateActiveNavigation(section.id);
        }
    });
}

function handleHeaderBackground() {
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = isDarkMode 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = isDarkMode 
                ? 'rgba(15, 23, 42, 0.9)' 
                : 'rgba(255, 255, 255, 0.9)';
            header.style.backdropFilter = 'blur(12px)';
        }
    }
}

// Resize Event Handler
function handleResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768 && isMobileMenuOpen) {
        toggleMobileMenu();
    }
}

// Utility Functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    // Close mobile menu with Escape key
    if (event.key === 'Escape' && isMobileMenuOpen) {
        toggleMobileMenu();
    }
    
    // Theme toggle with Ctrl/Cmd + D
    if ((event.ctrlKey || event.metaKey) && event.key === 'd') {
        event.preventDefault();
        toggleDarkMode();
    }
});

// Add loading class to images for better UX
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.classList.add('loading');
            img.addEventListener('load', function() {
                this.classList.remove('loading');
                this.classList.add('loaded');
            });
        }
    });
});

// Export functions for external use
window.portfolioApp = {
    scrollToSection,
    toggleDarkMode,
    showToast
};