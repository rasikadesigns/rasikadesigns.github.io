# Rasika's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and interactive elements.

## 🚀 Features

- **Pure HTML/CSS/JS**: No frameworks or build tools required
- **Dynamic Project Management**: Easy-to-update project showcase system
- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Interactive Elements**: Project filtering, modal details, and smooth animations
- **Performance Optimized**: Fast loading times and optimized assets
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🛠️ Built With

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties and animations
- **Vanilla JavaScript** - Interactive functionality and animations
- **CSS Grid & Flexbox** - Responsive layouts
- **Intersection Observer API** - Scroll-triggered animations
- **Local Storage** - Theme preference persistence

## 📦 Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/rasikadesigns/portfolio.git
cd portfolio
```

2. **Open in browser:**
```bash
# Simply open index.html in your browser
open index.html
# or start a local development server
python -m http.server 8000
```

3. **Access at:**
- File: `file:///path/to/your/portfolio/index.html`
- Local server: `http://localhost:8000`

## 🚀 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. **Create a new GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio` or `rasikadesigns.github.io`
   - Make it public

2. **Push your code:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/rasikadesigns/portfolio.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: "GitHub Actions"
   - The workflow will automatically deploy your site

4. **Access your site:**
   - `https://rasikadesigns.github.io/` (if repo is `rasikadesigns.github.io`)
   - `https://rasikadesigns.github.io/portfolio/` (if repo is `portfolio`)

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── styles/
│   ├── main.css            # Main styles
│   └── animations.css      # Animation keyframes
├── js/
│   ├── projects.js         # Project data and configuration
│   ├── main.js            # Core functionality
│   └── animations.js      # Advanced animations
├── favicon.svg            # Site favicon
├── README.md             # This file
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions deployment
```

## 🎨 Adding Your Projects

### Easy Project Management

Your projects are managed through a simple JavaScript data structure in `/js/projects.js`. This makes it easy to add, edit, and organize your portfolio without touching HTML or CSS.

### Adding a New Project

1. **Open `/js/projects.js`**
2. **Add a new project object to the `projects` array:**

```javascript
{
    id: 7, // Unique ID (increment from last project)
    title: "Your Project Title",
    description: "A brief description of your project and what it accomplishes.",
    category: "Web Development", // "Web Development", "Mobile Design", "UI/UX Design"
    tags: ["React", "Node.js", "MongoDB"], // Technologies used
    image: "https://images.unsplash.com/photo-your-image-id", // Project image URL
    featured: false, // true for featured projects (shows larger)
    demoUrl: "https://your-demo-url.com", // Live demo URL (optional)
    codeUrl: "https://github.com/rasikadesigns/your-repo", // GitHub repo URL (optional)
    status: "completed", // "completed", "in-progress", "planned"
    year: 2024, // Project year
    client: "Client Name or Personal Project", // Client or project type
    duration: "2 months", // How long the project took
    technologies: [ // Detailed tech stack with icons
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" }
    ],
    features: [ // Key features list
        "Feature 1 description",
        "Feature 2 description",
        "Feature 3 description"
    ]
}
```

### Project Properties Explained

| Property | Type | Description | Required |
|----------|------|-------------|----------|
| `id` | Number | Unique identifier | ✅ |
| `title` | String | Project name | ✅ |
| `description` | String | Brief project description | ✅ |
| `category` | String | "Web Development", "Mobile Design", "UI/UX Design" | ✅ |
| `tags` | Array | Technology tags for filtering | ✅ |
| `image` | String | Image URL (use Unsplash for consistency) | ✅ |
| `featured` | Boolean | Whether to highlight this project | ✅ |
| `demoUrl` | String | Live demo URL | ❌ |
| `codeUrl` | String | GitHub repository URL | ❌ |
| `status` | String | "completed", "in-progress", "planned" | ✅ |
| `year` | Number | Project completion year | ✅ |
| `client` | String | Client name or "Personal Project" | ✅ |
| `duration` | String | Project timeline | ✅ |
| `technologies` | Array | Detailed tech stack with icons | ✅ |
| `features` | Array | List of key features | ✅ |

### Finding Good Project Images

1. **Unsplash (Recommended):** Use [Unsplash](https://unsplash.com) for high-quality, free images
   - Search for relevant terms: "web design", "mobile app", "dashboard", etc.
   - Copy the URL and add `?w=800&h=600&fit=crop` for optimization
   - Example: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop`

2. **Your Own Screenshots:** Upload to a service like GitHub or use relative paths
3. **Design Mockups:** Use tools like Figma or Sketch to create project previews

### Project Categories and Filtering

The website automatically creates filter buttons based on your project categories:

- **All Projects** - Shows all projects
- **Web Development** - Projects with `category: "Web Development"`
- **Mobile Design** - Projects with `category: "Mobile Design"`
- **UI/UX Design** - Projects with UI/UX related tags

### Project Status Types

- **completed** - Finished projects (green badge)
- **in-progress** - Currently working on (yellow badge)
- **planned** - Future projects (blue badge)

### Featured Projects

Set `featured: true` for your best projects. Featured projects:
- Have a "Featured" badge
- May appear larger on some screen sizes
- Are highlighted in the design

### Icons for Technologies

Use emojis for technology icons to keep it simple and consistent:

```javascript
{ name: "React", icon: "⚛️" },
{ name: "Vue.js", icon: "💚" },
{ name: "Angular", icon: "🅰️" },
{ name: "Node.js", icon: "🟢" },
{ name: "Python", icon: "🐍" },
{ name: "JavaScript", icon: "💛" },
{ name: "TypeScript", icon: "📘" },
{ name: "HTML/CSS", icon: "🎨" },
{ name: "MongoDB", icon: "🍃" },
{ name: "PostgreSQL", icon: "🐘" },
{ name: "Firebase", icon: "🔥" },
{ name: "AWS", icon: "☁️" },
{ name: "Docker", icon: "🐳" },
{ name: "Figma", icon: "🎨" },
{ name: "Photoshop", icon: "🖼️" }
```

### Example Project Entry

```javascript
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
        "Menu browsing with categories",
        "Shopping cart management",
        "Real-time order tracking",
        "Payment integration",
        "User reviews and ratings"
    ]
}
```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- **Name and title**: Search for "Rasika" and replace with your name
- **Avatar emoji**: Change the 👩‍💻 emoji in the hero section
- **Contact information**: Update email, phone, and location
- **Social links**: Update URLs in hero and contact sections
- **About section**: Replace the biography text
- **Skills**: Modify skill percentages and categories

### Styling
- **Colors**: Update CSS custom properties in `styles/main.css`
- **Fonts**: Change the font import in `index.html` and update CSS
- **Layout**: Modify grid and flexbox properties
- **Animations**: Customize keyframes in `styles/animations.css`

### Content
- **Resume/CV**: Add download links
- **Blog**: Add a blog section if needed
- **Testimonials**: Add client testimonials

## 🔧 Development

### Local Development Server
```bash
# Python 3
python -m http.server 8000

# Node.js (if you have it)
npx serve .

# PHP
php -S localhost:8000
```

### Browser Support
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: rasika@example.com
- **LinkedIn**: [linkedin.com/in/rasika](https://linkedin.com/in/rasika)
- **GitHub**: [github.com/rasikadesigns](https://github.com/rasikadesigns)
- **Website**: [rasikadesigns.github.io](https://rasikadesigns.github.io)

## 🙏 Acknowledgments

- Icons from Emoji (Unicode)
- Images from [Unsplash](https://unsplash.com)
- Fonts from [Google Fonts](https://fonts.google.com)
- Inspiration from modern web design trends

---

⭐ **Star this repo if you found it helpful!**

## 📝 Changelog

### v2.0.0
- Added dynamic project management system
- Enhanced project filtering and modal details
- Improved responsive design and animations
- Added comprehensive project documentation
- Updated with Rasika's personal branding

### v1.0.0
- Initial release with HTML/CSS/JS implementation
- Responsive design with personal branding
- Dark mode support
- Smooth animations and interactions
- Contact form functionality
- GitHub Pages deployment ready

## 🚀 Quick Tips

1. **Regular Updates**: Update your projects regularly to keep your portfolio fresh
2. **High-Quality Images**: Use high-resolution images for better visual impact
3. **Detailed Descriptions**: Write compelling project descriptions that highlight your skills
4. **Live Demos**: Include live demo links whenever possible
5. **GitHub Integration**: Keep your GitHub repositories organized and well-documented
6. **Performance**: Optimize images and test loading times regularly
7. **SEO**: Update meta tags and descriptions for better search visibility