# OMBASE - AI-Powered Computing Solutions Website

A modern, responsive website for OMBASE, a technology brand offering AI laptops, gaming PCs, workstations, and servers. Built with Next.js, React, and modern web technologies.

## 🚀 Features

- **Modern Design**: Beautiful UI/UX with gradient animations and smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Next.js and modern web practices
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Proper meta tags and structured data
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Deployment Ready**: Optimized for production deployment

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ombase-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── HeroSection.tsx    # Hero section
│   ├── ProductShowcase.tsx # Product showcase
│   ├── FeaturesSection.tsx # Features section
│   ├── TestimonialsSection.tsx # Testimonials
│   ├── CTASection.tsx     # Call-to-action section
│   └── Footer.tsx         # Footer component
```

## 🌟 Key Sections

### Homepage
- **Hero Section**: Animated hero with gradient background
- **Product Showcase**: Interactive product categories
- **Features**: Key advantages and benefits
- **Testimonials**: Customer reviews and ratings
- **Call-to-Action**: Contact options and trust indicators

### Product Categories
- AI Laptops (IPBook AI 14", 15", 16")
- Gaming Laptops (G-Series 15", 16", 18")
- AI Desktop PCs (IPCentre Series)
- Mini PCs (AI, Education, Professional, Industrial)
- All-in-One PCs (IPStation AI 24", 27", 32")
- AI Workstations (Mid & High Level)
- AI Servers (Rack, Tower, GPU)

### Pages Included
- **About Us**: Company mission, vision, values, and timeline
- **Contact**: Contact form, office locations, and support options
- **Case Studies**: Success stories and use cases
- **Career**: Job opportunities and company culture
- **Newsroom**: Latest news and press releases
- **Blogs**: Technical articles and insights
- **Terms & Conditions**: Legal terms and policies
- **Privacy Policy**: Data protection and privacy information
- **Corporate Responsibility (CSR)**: Sustainability initiatives
- **Leadership**: Executive team and company leadership
- **Trademarks**: Intellectual property information

## 🎨 Design Features

- **Gradient Animations**: Dynamic background animations
- **Hover Effects**: Interactive hover states on cards and buttons
- **Smooth Scrolling**: Seamless page navigation
- **Loading Animations**: Staggered animations on scroll
- **Glass Morphism**: Modern glass effect elements
- **Custom Scrollbar**: Styled scrollbar for better UX

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
npm run export
# Deploy the 'out' folder
```

### Docker
```bash
docker build -t ombase-website .
docker run -p 3000:3000 ombase-website
```

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Performance Optimization

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Bundle Analysis**: Optimized bundle size
- **Caching**: Proper caching strategies
- **Minification**: CSS and JavaScript minification

## 🌐 SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD structured data
- **Sitemap**: Auto-generated sitemap
- **Robots.txt**: Search engine crawling instructions

## 🔒 Security

- **HTTPS**: Secure HTTPS connection
- **Content Security Policy**: CSP headers
- **Form Validation**: Client and server-side validation
- **XSS Protection**: Cross-site scripting prevention

## 📞 Support

For technical support or questions about the website:
- Email: support@ombase.com
- Phone: +1 (555) 123-4567
- Live Chat: Available 24/7

## 📄 License

This project is proprietary and confidential. All rights reserved by OMBASE.

---

**OMBASE** - Pioneering the Future of Computing