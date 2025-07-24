# Rasika's Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript featuring smooth animations and interactive elements.

## 🚀 Features

- **Pure HTML/CSS/JS**: No frameworks or build tools required
- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Smooth Animations**: Custom JavaScript animations for engaging user experience
- **Interactive Elements**: Hover effects, scroll animations, and magnetic buttons
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
│   ├── main.js            # Core functionality
│   └── animations.js      # Advanced animations
├── favicon.svg            # Site favicon
├── README.md             # This file
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Actions deployment
```

## 🎨 Customization

### Personal Information
Update the following in `index.html`:
- **Name and title**: Search for "Rasika" and replace with your name
- **Avatar emoji**: Change the 👩‍💻 emoji in the hero section
- **Contact information**: Update email, phone, and location
- **Social links**: Update URLs in hero and contact sections
- **About section**: Replace the biography text
- **Projects**: Update the project cards with your work
- **Skills**: Modify skill percentages and categories

### Styling
- **Colors**: Update CSS custom properties in `styles/main.css`
- **Fonts**: Change the font import in `index.html` and update CSS
- **Layout**: Modify grid and flexbox properties
- **Animations**: Customize keyframes in `styles/animations.css`

### Content
- **Projects**: Update project data in HTML
- **Skills**: Modify skill circles and percentages
- **Resume/CV**: Add download links
- **Blog**: Add a blog section if needed

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

### v1.0.0
- Initial release with HTML/CSS/JS implementation
- Responsive design with Rasika's personal branding
- Dark mode support
- Smooth animations and interactions
- Contact form functionality
- GitHub Pages deployment ready