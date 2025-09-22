# 🎯 Target Shot Bar - Progressive Web App

A modern, responsive Progressive Web App (PWA) for Target Shot Bar featuring Tailwind CSS as the primary styling framework with custom CSS for complex animations and branding elements. The app can be installed on any device and works offline.

## 🚀 Features

### **🎨 Design & Styling**

- **Tailwind CSS** as primary styling framework
- **Custom CSS** for complex animations and Target Shot branding
- **Responsive design** that works on all devices
- **Smooth animations** and hover effects
- **Target reticle logo** recreated in CSS

### **📱 Progressive Web App**

- **Installable** on any device (iOS, Android, Desktop)
- **Offline functionality** with cached content
- **Service Worker** for offline caching and performance
- **Push notifications** ready for future features
- **App shortcuts** for quick navigation
- **Native app-like experience** when installed

### **🍸 Menu & Content**

- **Real menu items** with Lebanese Lira pricing
- **Complete bar menu** with cocktails, whiskey, shots, beer
- **Contact information** with location and hours
- **Professional design** with card-based layout

## 📁 Project Structure

```
target-shot-bar/
├── index.html          # Main HTML file
├── offline.html        # Offline page for PWA
├── manifest.json       # PWA manifest file
├── dist/
│   └── output.css      # Compiled CSS (Tailwind + Custom)
├── src/
│   └── input.css       # Tailwind source file
├── styles.css          # Custom CSS (secondary)
├── script.js           # JavaScript functionality + PWA features
├── sw.js              # Service Worker for PWA
├── build.js           # Build script
├── tailwind.config.js # Tailwind configuration
├── package.json       # Dependencies and scripts
├── .gitignore         # Git ignore rules
├── .gitattributes     # Git attributes for line endings
├── README.md          # This file
├── PWA-README.md      # PWA documentation
└── logo.png           # App icon
```

## 🛠️ Setup & Development

### Prerequisites

- Node.js (for build tools)
- Modern web browser with PWA support
- HTTPS or localhost for PWA features

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/target-shot-bar.git
cd target-shot-bar

# Install dependencies
npm install

# Build CSS
npm run build

# Development mode (auto-rebuild)
npm run dev
```

### Manual Setup

1. Clone or download the project
2. Serve the files over HTTPS or localhost
3. Open `index.html` in a web browser
4. The service worker will automatically register for caching
5. Install the PWA when prompted

## 🎨 Styling Architecture

### Primary: Tailwind CSS

- Utility-first CSS framework
- Responsive design classes
- Consistent spacing and typography
- Hover states and transitions

### Secondary: Custom CSS

- Complex animations (target reticle, menu items)
- Brand-specific styling
- Advanced hover effects
- Loading animations

## 📱 Service Worker Features

- **Caching**: All assets cached for offline use
- **Background Sync**: Handles offline functionality
- **Push Notifications**: Ready for future features
- **Cache Management**: Automatic cleanup of old caches

## 🎯 Menu Sections

1. **Cocktails** - 30+ cocktails including house specialties
2. **Whiskey** - Premium whiskey selection
3. **Shots** - Various shot options
4. **Beer** - Almaza and imported beers
5. **Other Drinks** - Wine, soft drinks, water

## 💰 Pricing

All prices in Lebanese Lira (LL):

- Cocktails: LL 400,000 - LL 600,000
- Whiskey: LL 500,000 - LL 700,000
- Shots: LL 200,000 - LL 300,000
- Beer: LL 300,000 - LL 550,000

## 🔧 Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'target-orange': '#ff6b35',
  'target-black': '#000000',
  // Add more colors
}
```

### Fonts

Update the Google Fonts import in `dist/output.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto:wght@300;400;500;700&display=swap');
```

## 📦 Build Process

The build script (`build.js`) handles:

- CSS minification
- File optimization
- Output generation

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## 🚀 Deployment

### **GitHub Pages**

1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `master`)
4. Access your PWA at `https://yourusername.github.io/target-shot-bar`

### **Other Hosting Options**

- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Any static hosting**: Upload all files to your web server

### **PWA Requirements**

- **HTTPS Required**: PWA features only work over HTTPS
- **Service Worker**: Must be accessible at the root
- **Manifest**: Must be linked in HTML head
- **Icons**: App icons must be available

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Made by [cowebslb.com](https://cowebslb.com)

## 🎯 Target Shot Bar

Precision in every pour, now in your pocket!

---

**⭐ Star this repository if you found it helpful!**
