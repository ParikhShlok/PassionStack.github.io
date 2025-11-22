# PassionStack - Website Prototype

> **Share Knowledge. Earn Rewards.**

A modern, responsive website prototype for PassionStack - a community-driven learning platform where students share notes, earn credits, and practice English with AI.

## 🚀 Overview

This is a complete web prototype designed for idea validation and user feedback collection. It includes a beautiful landing page, interactive chatbot demo, waitlist form, and about page - all built with modern web technologies.

## ✨ Features

- **Modern Landing Page** with hero section, problem/solution, features, and testimonials
- **Interactive Chatbot Demo** with fake conversation interface
- **Waitlist Form** with success modal
- **About Page** with vision, mission, and founder note
- **Feedback Card** in hero section (links to Google Form)
- **Fully Responsive** design for mobile, tablet, and desktop
- **Smooth Animations** and modern UI/UX
- **No Backend Required** - perfect for MVP validation

## 📁 File Structure

```
web/
├── index.html          # Landing page (main page)
├── chatbot-demo.html   # AI chatbot demo page
├── waitlist.html       # Waitlist signup page
├── about.html          # About/company page
├── styles.css          # All CSS styling
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 🎨 Design System

### Colors
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Accent**: Pink (#ec4899)
- **Gradients**: Soft gradients for modern feel

### Typography
- **Font**: Inter (Google Fonts)
- **Style**: Clean, modern, student-friendly

### Components
- Rounded corners
- Soft shadows
- Smooth animations
- Card-based layouts
- Gradient buttons

## 🛠️ Setup Instructions

### 1. Quick Start

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process or dependencies required.

### 2. Local Development

For a better development experience, you can use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js:**
```bash
npx http-server
```

**Using VS Code:**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Then visit `http://localhost:8000` in your browser.

## ⚙️ Customization Guide

### Adding Your Google Form Link

1. Open `script.js`
2. Find the `initFeedbackButton()` function (around line 201)
3. Replace `'https://forms.gle/YOUR_FORM_ID_HERE'` with your actual Google Form URL
4. Save the file

```javascript
// In script.js, line ~211
const googleFormUrl = 'https://forms.gle/YOUR_ACTUAL_FORM_ID';
```

### Changing Colors

Edit the CSS variables at the top of `styles.css`:

```css
:root {
    --primary: #6366f1;        /* Change primary color */
    --secondary: #8b5cf6;      /* Change secondary color */
    --accent: #ec4899;         /* Change accent color */
    /* ... more variables */
}
```

### Updating Content

- **Landing Page**: Edit `index.html`
- **Chatbot Demo**: Edit `chatbot-demo.html`
- **Waitlist**: Edit `waitlist.html`
- **About Page**: Edit `about.html`

### Modifying Animations

All animations are in `styles.css`. Look for:
- `@keyframes` definitions
- `transition` properties
- `animation` properties

## 📄 Pages Overview

### 1. Landing Page (`index.html`)
- Hero section with feedback card
- Problem statement
- Solution overview
- Core features (6 feature cards)
- Visual mockups
- Student testimonials
- Call-to-action sections
- Footer

### 2. Chatbot Demo (`chatbot-demo.html`)
- Interactive chat interface
- Example conversation buttons
- Sidebar with tips
- Fake AI responses
- Correction display

### 3. Waitlist Page (`waitlist.html`)
- Signup form (name, email, user type)
- Benefits section
- Success modal
- Visual card

### 4. About Page (`about.html`)
- Vision section
- Mission section
- Why PassionStack exists
- Founder note

## 🎯 Key Features Explained

### Feedback Card
Located in the hero section (right side). Links to your Google Form for collecting user feedback.

### Chatbot Demo
Interactive demo with:
- Predefined responses
- Example conversation starters
- Correction display
- Smooth animations

### Waitlist Form
Collects:
- Full name
- Email address
- User type (Student, Teacher, etc.)

**Note**: Currently shows a success modal. To actually collect data, you'll need to:
1. Connect to a backend service (e.g., Google Sheets, Airtable, Firebase)
2. Or use a form service (e.g., Formspree, Netlify Forms)

## 🚀 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the `web` folder
3. Your site is live instantly!

### Option 3: Vercel (Free)
1. Create account at [vercel.com](https://vercel.com)
2. Import your repository
3. Deploy with one click

### Option 4: Traditional Hosting
Upload all files via FTP to any web hosting service.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with modern features (Grid, Flexbox, Custom Properties)
- **JavaScript (Vanilla)** - Interactivity (no frameworks required)
- **Google Fonts** - Inter font family

## 📝 Notes

- This is a **prototype/MVP** - no backend functionality
- Perfect for **idea validation** and **user feedback**
- All forms are client-side only (no data collection by default)
- Chatbot responses are **predefined** (not real AI)
- Designed for **quick deployment** and **easy customization**

## 🎨 Customization Tips

1. **Colors**: Change CSS variables for instant theme updates
2. **Content**: All text is in HTML files - easy to edit
3. **Images**: Replace placeholder emojis with actual images if needed
4. **Animations**: Adjust timing in CSS for different effects
5. **Layout**: Modify grid/flexbox properties in CSS

## 📞 Support

For questions or issues:
1. Check the code comments in each file
2. Review the customization guide above
3. Modify as needed for your use case

## 📄 License

This is a prototype template. Feel free to use and modify for your project.

## 🎉 Next Steps

1. ✅ Add your Google Form link
2. ✅ Customize colors and content
3. ✅ Test on different devices
4. ✅ Deploy to hosting service
5. ✅ Share with users for feedback
6. ✅ Collect waitlist signups
7. ✅ Iterate based on feedback

---

**Built with passion for students** 💙

*PassionStack - Share knowledge. Earn rewards. Learn together.*


