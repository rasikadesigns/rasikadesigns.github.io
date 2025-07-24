# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Interactive**: Hover effects, scroll animations, and interactive elements
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide React](https://lucide.dev/) - Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rasikadesigns/rasikadesigns.github.io.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment to GitHub Pages

### Prerequisites
- A GitHub account
- Git installed on your computer
- Node.js and npm installed

### Step-by-Step Deployment

1. **Create a new GitHub repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `portfolio` or `yourusername.github.io` (replace `yourusername` with your GitHub username)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Initialize Git in your project folder:**
```bash
git init
git add .
git commit -m "Initial commit"
```

3. **Connect to your GitHub repository:**
```bash
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"
   - The deployment will start automatically

5. **Update the base URL (if needed):**
   - If your repository is NOT named `yourusername.github.io`, you need to update the `base` in `vite.config.ts`:
   ```typescript
   base: '/your-repository-name/',
   ```

6. **Wait for deployment:**
   - Go to the "Actions" tab to see the deployment progress
   - Once complete, your site will be available at:
     - `https://yourusername.github.io/` (if repo is named `yourusername.github.io`)
     - `https://yourusername.github.io/repository-name/` (for other repo names)

### Automatic Updates
Every time you push changes to the main branch, GitHub Actions will automatically rebuild and deploy your site.

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, and description
- `components/About.tsx` - Personal information and skills
- `components/Projects.tsx` - Your projects
- `components/Contact.tsx` - Contact information
- `index.html` - Meta tags and title

### Styling
- Colors and themes: `styles/globals.css`
- Component styles: Individual component files
- Tailwind config: `tailwind.config.js`

### Content
- Projects: Update the `projects` array in `components/Projects.tsx`
- Skills: Update the skills arrays in `components/Skills.tsx`
- Social links: Update links in `components/Hero.tsx` and `components/Contact.tsx`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📞 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

⭐ Star this repo if you found it helpful!