// Projects data for Rasika's Portfolio
// Add your projects to this array following the structure below

const projects = [
    {
        id: 1,
        title: "Jewelry Application",
        description: "Divine Vista is a jewelry app designed to enhance the online shopping experience with advanced features like Augmented Reality (AR) try-on.",
        category: "Mobile Design",
        tags: ["UI/UX Design", "Figma", "Prototyping", "Responsive Design"],
        image: "Frame 77.svg",
        featured: false,
        demoUrl: "https://www.figma.com/proto/6rtEZtCYsqleHzbAJlKc2q/Jewellery-App?page-id=0%3A1&node-id=553-222&viewport=-709%2C673%2C0.15&t=5LUrfEQ35ScCsT6k-1&scaling=scale-down-width&content-scaling=fixed",
        status: "completed", // completed, in-progress, planned
        year: 2024,
        duration: "3 months",
        technologies: [
            { name: "UI/UX Design", icon: "✨" },
            { name: "Figma", icon: "🎨" },
            { name: "Prototyping", icon: "🔗" },
        ],
        features: [
             "AR try-on feature",
            "Jewelry catalog browsing",
            "Wishlist management",
            "Responsive design",
            "User-friendly interface"
        ]
    },
    {
        id: 2,
        title: "VR Gaming Website",
        description: "VORNEA VR Games offers users unlimited access to a vast library of VR games, allowing them to immerse themselves in diverse and captivating worlds.",
        category: "Web Development",
        tags: ["UI/UX", "Figma", "Prototyping"],
        image: "VR Gaming website cover page.svg",
        featured: true,
        demoUrl: "https://www.figma.com/proto/eVUD2bPoDffpz2m8VfpFIl/VR-Games-Website?page-id=0%3A1&node-id=439-2&viewport=-4627%2C247%2C0.57&t=B5KfdFmtMgU8PofI-1&scaling=scale-down-width&content-scaling=fixed",
        status: "completed",
        year: 2024,
        duration: "4 months",
        technologies: [
            { name: "Figma", icon: "🎨" },
            { name: "Prototyping", icon: "🔗" },
            { name: "UI/UX Design", icon: "✨" }
        ],
        features: [
            "Biometric authentication",
            "Transaction management",
            "Bill payments",
            "Investment tracking",
            "Customer support chat"
        ]
    },
    {
        id: 3,
        title: "Wealth Management Application",
        description: "Wealth Craft is a wealth management app which empowers users to take control of their finances by offering tools for tracking expenses, setting budgets, and achieving savings goals, customizable budgets, and detailed financial reports. ",
        category: "Mobile Design",
        tags: ["Figma", "Prototyping", "UI/UX Design", "UX Case Study"],
        image: "Wealth Cover page.svg",
        featured: true,
        demoUrl: "https://www.figma.com/proto/vZo2nCGRH7Ol9uwce77Pcs/Wealth-Craft?page-id=0%3A1&node-id=2113-1347&viewport=-5813%2C725%2C0.27&t=76Rj6N7Ni7B71lfk-1&scaling=min-zoom&content-scaling=fixed",
        status: "completed",
        year: 2024,
        duration: "4 months",
        technologies: [
            { name: "Figma", icon: "▲" },
            { name: "Prototyping", icon: "🎭" },
            { name: "UI/UX Design", icon: "🔍" },
            { name: "UX Case Study", icon: "📈" }
        ],
        features: [
            "Smooth scroll animations",
            "SEO optimized",
            "Conversion tracking",
            "A/B testing ready",
            "Performance optimized"
        ]
    },
    {
        id: 4,
        title: "HR Management Dashboard",
        description: "VisionPro HR Dashboard enhances HR operations with features like Recruitment Tracker, Attendance and Leave Management, and Diversity Metrics.",
        category: "Web Development",
        tags: ["Figma", "Dashboard design", "UI/UX Design"],
        image: "dashboard cover page.svg",
        featured: false,
        demoUrl: "https://www.figma.com/proto/fk4RYx9LTCkGsVgCxJ7q5e/Dashboard?page-id=0%3A1&node-id=196-2&viewport=-1327%2C222%2C0.19&t=ODLZ6AGInxAnzsoF-1&scaling=min-zoom&content-scaling=fixed",
        status: "completed",
        year: 2023,
        client: "Personal Project",
        duration: "1 month",
        technologies: [
            { name: "Vue.js", icon: "💚" },
            { name: "Node.js", icon: "🟢" },
            { name: "Socket.io", icon: "🔌" },
            { name: "MongoDB", icon: "🍃" }
        ],
        features: [
            "Real-time collaboration",
            "Task assignment",
            "Progress tracking",
            "Team chat",
            "File attachments"
        ]
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "Creative portfolio website for a photographer with stunning gallery layouts and smooth user experience.",
        category: "Web Development",
        tags: ["React", "GSAP", "Photography", "Creative Design"],
        image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=800&h=600&fit=crop",
        featured: false,
        demoUrl: "https://photographer-portfolio-demo.netlify.app",
        codeUrl: "https://github.com/rasikadesigns/photographer-portfolio",
        status: "completed",
        year: 2023,
        client: "Sarah Photography",
        duration: "2 months",
        technologies: [
            { name: "React", icon: "⚛️" },
            { name: "GSAP", icon: "🎬" },
            { name: "Photography", icon: "📸" },
            { name: "Creative Design", icon: "🎨" }
        ],
        features: [
            "Image gallery with lightbox",
            "Smooth scroll animations",
            "Contact form",
            "Blog section",
            "Social media integration"
        ]
    },
    {
        id: 6,
        title: "Restaurant Ordering App",
        description: "Modern restaurant ordering application with menu browsing, cart management, and order tracking capabilities.",
        category: "Mobile Design",
        tags: ["Flutter", "Firebase", "UI/UX", "Food Tech"],
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
        featured: false,
        demoUrl: "https://restaurant-app-demo.web.app",
        codeUrl: "https://github.com/rasikadesigns/restaurant-app",
        status: "in-progress",
        year: 2024,
        client: "FoodiePlace Restaurant",
        duration: "3 months",
        technologies: [
            { name: "Flutter", icon: "💙" },
            { name: "Firebase", icon: "🔥" },
            { name: "UI/UX Design", icon: "✨" },
            { name: "Food Tech", icon: "🍕" }
        ],
        features: [
            "Menu browsing",
            "Cart management",
            "Order tracking",
            "Payment integration",
            "User reviews"
        ]
    },
];

// Project categories for filtering
const projectCategories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web-development", name: "Web Development", count: projects.filter(p => p.category === "Web Development").length },
    { id: "mobile-design", name: "Mobile Design", count: projects.filter(p => p.category === "Mobile Design").length },
    { id: "ui-ux", name: "UI/UX Design", count: projects.filter(p => p.tags.some(tag => tag.includes("UI/UX"))).length }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, projectCategories };
}