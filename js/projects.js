// Projects data for Rasika's Portfolio
// Add your projects to this array following the structure below

const projects = [
    {
        id: 1,
        title: "E-Commerce Dashboard",
        description: "A comprehensive admin dashboard for e-commerce businesses with real-time analytics, inventory management, and customer insights.",
        category: "Web Development",
        tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
        featured: true,
        demoUrl: "https://ecommerce-dashboard-demo.netlify.app",
        codeUrl: "https://github.com/rasikadesigns/ecommerce-dashboard",
        status: "completed", // completed, in-progress, planned
        year: 2024,
        client: "TechCorp Solutions",
        duration: "3 months",
        technologies: [
            { name: "React", icon: "⚛️" },
            { name: "TypeScript", icon: "📘" },
            { name: "Tailwind CSS", icon: "🎨" },
            { name: "Chart.js", icon: "📊" }
        ],
        features: [
            "Real-time analytics dashboard",
            "Inventory management system",
            "Customer insights and reports",
            "Responsive design",
            "Dark/Light mode support"
        ]
    },
    {
        id: 2,
        title: "Mobile Banking App",
        description: "A modern mobile banking application with intuitive UX, biometric authentication, and seamless transaction management.",
        category: "Mobile Design",
        tags: ["React Native", "UI/UX", "Figma", "Prototyping"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        featured: true,
        demoUrl: "https://banking-app-prototype.figma.com",
        codeUrl: "https://github.com/rasikadesigns/banking-app",
        status: "completed",
        year: 2024,
        client: "FinanceFirst Bank",
        duration: "4 months",
        technologies: [
            { name: "React Native", icon: "📱" },
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
        title: "SaaS Landing Page",
        description: "High-converting landing page for a SaaS product with modern design, smooth animations, and optimized conversion funnels.",
        category: "Web Development",
        tags: ["Next.js", "Framer Motion", "SEO", "Conversion Optimization"],
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        featured: false,
        demoUrl: "https://saas-landing-demo.vercel.app",
        codeUrl: "https://github.com/rasikadesigns/saas-landing",
        status: "completed",
        year: 2024,
        client: "CloudSync Inc.",
        duration: "2 months",
        technologies: [
            { name: "Next.js", icon: "▲" },
            { name: "Framer Motion", icon: "🎭" },
            { name: "SEO", icon: "🔍" },
            { name: "Analytics", icon: "📈" }
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
        title: "Task Management Tool",
        description: "Collaborative task management platform with real-time updates, team collaboration features, and productivity analytics.",
        category: "Web Development",
        tags: ["Vue.js", "Node.js", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
        featured: false,
        demoUrl: "https://task-manager-demo.herokuapp.com",
        codeUrl: "https://github.com/rasikadesigns/task-manager",
        status: "completed",
        year: 2023,
        client: "Personal Project",
        duration: "5 months",
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
    {
    id: 6,
    title: "Wealth Management App",
    description: "Managing wealth ani barach kahi",
    category: "Web Design",
    tags: ["Flutter", "Firebase", "UI/UX", "FinTech"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    featured: true,
    demoUrl: "https://www.figma.com/proto/vZo2nCGRH7Ol9uwce77Pcs/Wealth-Craft?page-id=461%3A504&node-id=461-1386&viewport=754%2C563%2C0.09&t=klhCtuH8nAXYrW2d-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=461%3A4162&show-proto-sidebar=1",
    codeUrl: "https://github.com/rasikadesigns/restaurant-app",
    status: "in-progress",
    year: 2024,
    client: "Hota koni tari",
    duration: "3 months",
    technologies: [
        { name: "Flutter", icon: "💙" },
        { name: "Firebase", icon: "🔥" },
        { name: "UI/UX Design", icon: "✨" },
        { name: "FinTech", icon: "" }
    ],
    features: [
        "Paishe sambhalne",
        "Paishe kamavne",
        "Paishe sathavne",
        "Paishe kharch karne",
        "Paishancha maaz karne"
    ]
    }
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