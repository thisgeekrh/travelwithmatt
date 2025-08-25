# Travel With Matt - Cruise Travel Website

A modern, high-performing, SEO-first marketing website for Matt, an independent cruise travel advisor with Cruise Brothers.

## 🚀 Features

- **Modern Design**: Clean, professional design with ocean-inspired color palette
- **SEO Optimized**: Built with SEO best practices, structured data, and meta tags
- **Fast Performance**: Static site built with Astro for optimal loading speeds
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Interactive Components**: React components with Framer Motion animations
- **Lead Capture**: Newsletter signup and contact forms
- **Booking Integration**: Direct links to Cruise Brothers booking portal

## 🛠 Tech Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Interactive Components**: [React](https://reactjs.org/) with [Framer Motion](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Deployment**: [GitHub Pages](https://pages.github.com/) - Static hosting
- **Forms**: Formspree integration (ready to configure)

## 📁 Project Structure

```
travelwithmatt/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro     # Navigation header
│   │   ├── Footer.astro     # Site footer
│   │   ├── Hero.astro       # Hero section
│   │   ├── LogoCloud.astro  # Trust badges
│   │   ├── FeatureCards.astro # Benefits section
│   │   ├── DestinationsCarousel.tsx # Interactive carousel
│   │   ├── DealGrid.astro   # Current deals
│   │   ├── TestimonialCarousel.tsx # Customer testimonials
│   │   ├── NewsletterForm.tsx # Email capture
│   │   └── CTAStack.astro   # Call-to-action sections
│   ├── layouts/
│   │   └── BaseLayout.astro # Main layout with SEO
│   ├── pages/               # Site pages
│   │   ├── index.astro      # Homepage
│   │   ├── about/           # About Matt
│   │   ├── cruises/         # Destinations
│   │   ├── deals/           # Current offers
│   │   ├── groups/          # Group travel
│   │   ├── faq/             # Frequently asked questions
│   │   └── contact/         # Contact form
│   └── lib/                 # Utility functions
├── public/                  # Static assets
│   ├── images/              # Image assets
│   ├── robots.txt           # SEO robots file
│   └── favicon.ico          # Site favicon
├── .github/workflows/       # GitHub Actions
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/travelwithmatt.git
   cd travelwithmatt
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Customization

### Colors and Branding

The site uses a custom color palette defined in `tailwind.config.js`:

- **Ocean Blue**: Primary brand color
- **Navy**: Dark accents and text
- **Accent Orange**: Call-to-action highlights

### Content Updates

1. **Hero Section**: Edit `src/components/Hero.astro`
2. **Deals**: Update `src/components/DealGrid.astro`
3. **Testimonials**: Modify `src/components/TestimonialCarousel.tsx`
4. **Contact Info**: Update `src/pages/contact/index.astro`

### Images

Replace placeholder images in `public/images/` with actual photos:

- `hero-1.jpg` - Main hero background
- `caribbean-1.jpg` - Caribbean destination
- `alaska-1.jpg` - Alaska destination
- `mediterranean-1.jpg` - Mediterranean destination
- `mexico-1.jpg` - Mexico destination
- `bahamas-1.jpg` - Bahamas destination

## 🔧 Configuration

### SEO Settings

Update SEO metadata in each page's frontmatter:

```astro
---
title: "Page Title - Travel With Matt"
description: "Page description for search engines"
canonical: "https://travelwithmatt.com/page-url/"
---
```

### Booking Portal

The primary CTA links to Cruise Brothers booking portal. Update the URL in components if needed:

```
https://bookings.cbagenttools.com/swift/cruise?advancedsearch=true&siid=1021147&lang=1
```

### Form Integration

Configure form handling by updating the form action URLs in:

- `src/components/NewsletterForm.tsx`
- `src/pages/contact/index.astro`

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Set source to "GitHub Actions"

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Automatic deployment**
   - GitHub Actions will build and deploy automatically
   - Site will be available at `https://yourusername.github.io/travelwithmatt`

### Custom Domain

1. **Add custom domain**
   - In repository Settings > Pages
   - Add `travelwithmatt.com` as custom domain

2. **Update DNS**
   - Point domain to GitHub Pages IP
   - Add CNAME record pointing to `yourusername.github.io`

3. **Update site URL**
   - Change `site` in `astro.config.mjs` to your domain

## 📊 Performance

The site is optimized for:

- **Lighthouse Score**: 90+ Performance, 95+ Accessibility, 95+ Best Practices, 100 SEO
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **SEO**: Structured data, meta tags, sitemap, robots.txt

## 🔍 SEO Features

- Structured data (JSON-LD) for Travel Agency
- Open Graph and Twitter Card meta tags
- XML sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Alt text for all images
- Internal linking strategy

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images and loading
- Mobile-first approach

## 🛡️ Security

- HTTPS enforced
- Secure form handling
- No sensitive data in client-side code
- Regular dependency updates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support:

- **Email**: matt@travelwithmatt.com
- **Phone**: (555) 123-4567
- **Website**: https://travelwithmatt.com

## 🎯 Next Steps

1. **Add real images** - Replace placeholders with actual cruise photos
2. **Configure forms** - Set up Formspree or similar form handler
3. **Add analytics** - Configure Google Analytics or Plausible
4. **Set up email** - Configure email service for newsletter
5. **Add blog** - Create blog posts for SEO and content marketing
6. **Test thoroughly** - Test on various devices and browsers

---

Built with ❤️ for Matt's cruise travel business
