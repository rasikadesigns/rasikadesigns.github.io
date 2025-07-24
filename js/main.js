// Global state
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeAnimations();
    initializeProjects();
    initializeSkills();
    initializeContactForm();
    initializeScrollProgress();
});

// Theme management
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('darkMode', isDarkMode);
    updateTheme();
}

function initializeTheme() {
    updateTheme();
}

function updateTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (isDarkMode) {
        body.classList.add('dark');
        themeToggle?.classList.add('dark');
    } else {
        body.classList.remove('dark');
        themeToggle?.classList.remove('dark');
    }
}

// Navigation
function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    mobileMenuToggle?.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav?.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenuToggle?.classList.remove('active');
            mobileNav?.classList.remove('active');
        });
    });

    // Update active navigation on scroll
    window.addEventListener('scroll', updateActiveNavigation);
}

function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick')?.includes(current)) {
            link.classList.add('active');
        }
    });
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Projects functionality
function initializeProjects() {
    if (typeof projects === 'undefined') {
        console.warn('Projects data not loaded. Make sure projects.js is included.');
        return;
    }
    
    renderProjects();
    initializeProjectFilters();
}

function renderProjects(filteredProjects = projects) {
    const projectsContainer = document.querySelector('.projects-container');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = '';

    filteredProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsContainer.appendChild(projectCard);
    });

    // Re-initialize animations for new elements
    initializeProjectAnimations();
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = `project-card ${project.featured ? 'featured' : ''}`;
    card.setAttribute('data-category', project.category.toLowerCase().replace(/\s+/g, '-'));
    card.setAttribute('data-year', project.year);
    card.setAttribute('data-status', project.status);

    card.innerHTML = `
        ${project.featured ? '<div class="project-badge">Featured</div>' : ''}
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy">
            <div class="project-overlay">
                ${project.demoUrl ? `
                    <a href="${project.demoUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <span class="link-icon">🔗</span>
                        Live Demo
                    </a>
                ` : ''}
                ${project.codeUrl ? `
                    <a href="${project.codeUrl}" class="project-link" target="_blank" rel="noopener noreferrer">
                        <span class="link-icon">💻</span>
                        Code
                    </a>
                ` : ''}
                <button class="project-link project-details-btn" onclick="openProjectModal(${project.id})">
                    <span class="link-icon">👁️</span>
                    Details
                </button>
            </div>
        </div>
        <div class="project-content">
            <div class="project-meta">
                <span class="project-year">${project.year}</span>
                <span class="project-status status-${project.status}">${project.status.replace('-', ' ')}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

function initializeProjectFilters() {
    const filtersContainer = document.querySelector('.project-filters');
    if (!filtersContainer && typeof projectCategories !== 'undefined') {
        createProjectFilters();
    }
}

function createProjectFilters() {
    const projectsSection = document.getElementById('projects');
    const sectionHeader = projectsSection?.querySelector('.section-header');
    
    if (!sectionHeader) return;

    const filtersContainer = document.createElement('div');
    filtersContainer.className = 'project-filters';
    
    const filtersHTML = projectCategories.map(category => `
        <button class="filter-btn ${category.id === 'all' ? 'active' : ''}" 
                onclick="filterProjects('${category.id}')">
            ${category.name} (${category.count})
        </button>
    `).join('');
    
    filtersContainer.innerHTML = filtersHTML;
    sectionHeader.appendChild(filtersContainer);
}

function filterProjects(categoryId) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`[onclick="filterProjects('${categoryId}')"]`);
    activeBtn?.classList.add('active');

    let filteredProjects = projects;
    
    if (categoryId !== 'all') {
        if (categoryId === 'ui-ux') {
            filteredProjects = projects.filter(project => 
                project.tags.some(tag => tag.toLowerCase().includes('ui/ux'))
            );
        } else {
            const categoryName = categoryId.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
            filteredProjects = projects.filter(project => project.category === categoryName);
        }
    }

    renderProjects(filteredProjects);
}

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = createProjectModal(project);
    document.body.appendChild(modal);
    
    // Animate modal in
    setTimeout(() => modal.classList.add('active'), 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function createProjectModal(project) {
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    modal.onclick = (e) => {
        if (e.target === modal) closeProjectModal();
    };

    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeProjectModal()">&times;</button>
            
            <div class="modal-header">
                <img src="${project.image}" alt="${project.title}" class="modal-image">
                <div class="modal-header-content">
                    <h2>${project.title}</h2>
                    <p class="modal-description">${project.description}</p>
                    <div class="modal-meta">
                        <span><strong>Year:</strong> ${project.year}</span>
                        <span><strong>Client:</strong> ${project.client}</span>
                        <span><strong>Duration:</strong> ${project.duration}</span>
                        <span><strong>Status:</strong> <span class="status-${project.status}">${project.status.replace('-', ' ')}</span></span>
                    </div>
                </div>
            </div>

            <div class="modal-body">
                <div class="modal-section">
                    <h3>Technologies Used</h3>
                    <div class="modal-technologies">
                        ${project.technologies.map(tech => `
                            <div class="tech-item">
                                <span class="tech-icon">${tech.icon}</span>
                                <span class="tech-name">${tech.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="modal-section">
                    <h3>Key Features</h3>
                    <ul class="modal-features">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>

                <div class="modal-actions">
                    ${project.demoUrl ? `
                        <a href="${project.demoUrl}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            View Live Demo
                        </a>
                    ` : ''}
                    ${project.codeUrl ? `
                        <a href="${project.codeUrl}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                            View Code
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;

    return modal;
}

function closeProjectModal() {
    const modal = document.querySelector('.project-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

function initializeProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    projectCards.forEach(card => {
        observer.observe(card);
    });
}

// Skills functionality
function initializeSkills() {
    const skillCircles = document.querySelectorAll('.skill-circle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillCircle(entry.target);
            }
        });
    }, { threshold: 0.5 });

    skillCircles.forEach(circle => {
        observer.observe(circle);
    });
}

function animateSkillCircle(skillCircle) {
    const progressElement = skillCircle.querySelector('.circle-progress');
    const circleElement = skillCircle.querySelector('.circle-fill');
    const percentageElement = skillCircle.querySelector('.percentage');
    
    if (!progressElement || !circleElement || !percentageElement) return;

    const percentage = parseInt(progressElement.dataset.percentage);
    const color = progressElement.dataset.color;
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    
    // Set up the circle
    circleElement.style.strokeDasharray = circumference;
    circleElement.style.strokeDashoffset = circumference;
    circleElement.style.stroke = color;
    
    // Animate the circle
    let currentPercentage = 0;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        currentPercentage = Math.floor(progress * percentage);
        const offset = circumference - (progress * percentage / 100) * circumference;
        
        circleElement.style.strokeDashoffset = offset;
        percentageElement.textContent = `${currentPercentage}%`;
        
        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }
    
    animate();
}

// Contact form functionality
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm?.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.form-submit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            showToast('Message sent successfully! I\'ll get back to you soon.', 'success');
            this.reset();
            
        } catch (error) {
            // Show error message
            showToast('Failed to send message. Please try again later.', 'error');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    });
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Scroll progress
function initializeScrollProgress() {
    const progressBar = document.getElementById('progress-bar');
    
    if (!progressBar) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${Math.min(scrolled, 100)}%`;
    });
}

// Animations
function initializeAnimations() {
    // Floating elements animation
    const floatingElements = document.querySelectorAll('.floating-orb, .gradient-orb');
    
    floatingElements.forEach((element, index) => {
        const delay = index * 0.5;
        const duration = 3 + Math.random() * 2;
        
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;
    });

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
    const animateElements = document.querySelectorAll(
        '.hero-content, .about-content, .projects-container, .skills-content, .contact-content'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
}

// Utility functions
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    updateActiveNavigation();
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeProjectModal();
        // Close mobile menu if open
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileNav = document.getElementById('mobile-nav');
        mobileMenuToggle?.classList.remove('active');
        mobileNav?.classList.remove('active');
    }
});