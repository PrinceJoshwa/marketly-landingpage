# Marketly Website - Complete Implementation Guide

## Overview

Marketly is a premium digital marketing agency website built with Next.js 16, TypeScript, Tailwind CSS, shadcn/ui components, and Framer Motion animations. The site showcases modern UI/UX design with smooth interactions and a luxury aesthetic.

## Project Structure

```
/app
  ├── page.tsx              # Home page
  ├── layout.tsx            # Root layout with fonts and metadata
  ├── globals.css           # Global styles, animations, and color tokens
  ├── not-found.tsx         # 404 page
  ├── about/
  │   └── page.tsx          # About page
  ├── services/
  │   └── page.tsx          # Services page
  └── contact/
      └── page.tsx          # Contact page

/components
  ├── Header.tsx            # Navigation header with mobile menu
  ├── Footer.tsx            # Footer with links and contact info
  ├── ServiceCard.tsx       # Reusable service card component
  ├── ApproachStep.tsx      # Approach/methodology step component
  ├── FaqItem.tsx           # Expandable FAQ item
  ├── ClientLogosMarquee.tsx # Animated client logos carousel
  ├── ScoreGauge.tsx        # Animated score gauge visualization
  ├── SectionHeader.tsx     # Reusable section header component
  └── ui/                   # shadcn/ui components library

/public
  └── hero-visual.jpg       # Generated hero image
```

## Design System

### Color Palette
- **Dark Background**: `#1A3F22` (primary dark green)
- **Light Background**: `#234B2E` (lighter dark green)
- **Gold Accent**: `#D99201` (primary accent)
- **Gold Light**: `#E5A828` (hover state)
- **Text Light**: `#f5f5f5` (primary text)
- **Soft Cream**: `#F5F1E8` (light backgrounds/headers)
- **Border Dark**: `#2D5A35` (subtle borders)

### Typography
- **Serif Font**: `Playfair Display` (headings and branding)
- **Sans Font**: `Geist` (body text and UI)
- **Mono Font**: `Geist Mono` (code blocks, if needed)

### Custom Animations
Located in `globals.css`, available for use throughout the site:
- `fadeInUp` - Content appears and slides up
- `fadeInDown` - Content appears and slides down
- `slideInRight` - Content slides in from right
- `slideInLeft` - Content slides in from left
- `marquee` - Continuous horizontal scroll
- `glowPulse` - Gold glow effect with pulse
- `spinSlow` - Slow rotation animation

## Key Components

### Header
- Sticky navigation with Marketly branding
- Desktop and mobile-responsive menu
- Call-to-action button ("Let's Talk")
- Smooth animations on page load

### Footer
- Company branding and mission statement
- Quick links to all pages
- Service highlights
- Contact information (email, phone, address)
- Privacy and terms links

### ServiceCard
- Icon display with hover effects
- Title and description
- Gradient overlay on hover
- Reusable across multiple pages

### ApproachStep
- Step number with icon
- Connected visual hierarchy (lines between steps)
- Title and description
- Smooth entrance animation

### FaqItem
- Expandable accordion functionality
- Smooth height animation
- Gold icon on expand/collapse
- Responsive list structure

### ClientLogosMarquee
- Infinite scrolling client logos
- Duplicated for seamless loop
- Responsive layout
- Subtle hover effects

### ScoreGauge
- Animated SVG progress indicator
- Shows score out of 100
- Gold gradient stroke
- Smooth animation on view

## Pages

### Home Page (`/`)
Key sections:
1. **Hero Section** - Main CTA with animated graphics
2. **Client Logos** - Trusted by 5000+ brands carousel
3. **Our Approach** - 3-step methodology
4. **Services** - Digital Marketing & Paid Advertising sections
5. **Trust & Security** - Google Partner & Meta Business Partner badges
6. **AI Visibility Tool** - Score gauge visualization
7. **FAQs** - Frequently asked questions

### About Page (`/about`)
- Company story and mission
- Key statistics (5000+ brands, 13+ years experience)
- Core values (Data-Driven, Collaborative, Excellence, Innovation)
- Expertise areas (SEO, Performance Marketing, Social Media, AI & Automation)

### Services Page (`/services`)
- Digital Marketing services (SEO, Social Media, PPC, Performance Marketing)
- Paid Advertising platforms (Google Ads, Meta Ads, Amazon Ads, YouTube Ads)
- Specialized services (B2B & SaaS, AI Marketing, Demand Generation, Digital Transformation)
- Benefits of choosing Marketly

### Contact Page (`/contact`)
- Contact information (email, phone, address)
- Functional contact form with validation
- Social media links
- CTA section for scheduling consultation

## Getting Started

### Installation
```bash
# Install dependencies (Framer Motion is already added)
npm install
# or
pnpm install
# or
yarn install
```

### Development
```bash
npm run dev
```
The site will be available at `http://localhost:3000`

### Build for Production
```bash
npm run build
npm start
```

## Customization Guide

### Update Colors
Edit the CSS custom properties in `/app/globals.css`:
```css
:root {
  --dark-bg: '#1A3F22';
  --gold: '#D99201';
  /* ... other colors ... */
}
```

### Update Company Information
Search for placeholder text in components:
- `ramya@marketly.tech` → Your email
- `+91 9606334692` → Your phone
- `Sarjapur road, Bangalore 35` → Your address
- `Marketly` → Your company name

### Add/Update Services
Edit the service arrays in page files:
- `DIGITAL_MARKETING` array in `app/page.tsx`
- `PAID_ADVERTISING` array in `app/page.tsx`

### Modify FAQs
Update the `FAQS` array in `app/page.tsx` with your Q&A

### Update Statistics
Edit stat numbers in the hero section of `app/page.tsx`:
- Number of brands served
- Years of experience
- Countries served

## Performance Optimizations

1. **Framer Motion** - Used for smooth, performant animations
2. **Next.js Image Optimization** - Images are lazy-loaded
3. **CSS Custom Properties** - Efficient color management
4. **Tailwind CSS** - Optimized utility classes
5. **Component Splitting** - Modular, reusable components
6. **Mobile-First** - Responsive design from the ground up

## Accessibility Features

- Semantic HTML structure (`<section>`, `<header>`, `<footer>`, `<nav>`)
- ARIA labels on interactive elements
- Color contrast ratios meet WCAG standards
- Keyboard-navigable menu
- Mobile touch-friendly interactive elements
- Form labels for accessibility

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

The site is ready for deployment to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting platform**

### Deploy to Vercel
```bash
vercel deploy
```

## Future Enhancements

Consider adding:
1. Blog section for marketing insights
2. Case studies/portfolio showcase
3. Team member profiles
4. Testimonials/social proof
5. Interactive tools (calculator, audit, etc.)
6. Email newsletter signup
7. Live chat support
8. Analytics integration (Google Analytics, Mixpanel)
9. CRM integration (HubSpot, Salesforce)
10. Multi-language support

## Maintenance

### Regular Updates
- Update Next.js and dependencies quarterly
- Monitor Framer Motion updates for new animation features
- Keep Tailwind CSS version current

### Content Updates
- Refresh client logos regularly
- Update testimonials and case studies
- Maintain FAQ section
- Update team information on About page

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **shadcn/ui**: https://ui.shadcn.com
- **TypeScript**: https://www.typescriptlang.org

## License

This project is proprietary to Marketly. All rights reserved.

---

**Last Updated**: March 12, 2024
**Version**: 1.0.0
