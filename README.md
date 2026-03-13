# Marketly - Premium Digital Marketing Agency Website

A stunning, fully responsive website for Marketly digital marketing agency built with modern web technologies and best practices.

## ✨ Features

- **Modern Design**: Luxury dark green and gold color scheme with smooth animations
- **Fully Responsive**: Perfect on mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion for engaging micro-interactions
- **Optimized Performance**: Fast loading with Next.js optimization
- **Accessibility**: WCAG compliant with semantic HTML
- **Multiple Pages**: Home, About, Services, and Contact pages
- **Dynamic Components**: Reusable, modular component structure
- **Contact Form**: Fully functional contact form with validation
- **FAQ Section**: Expandable accordion with smooth animations
- **Client Logos**: Auto-scrolling marquee with infinite loop

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React with SSR and file-based routing
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe development
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/) - Smooth, performant animations
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Accessible, customizable components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Package Manager**: [pnpm](https://pnpm.io/) or npm/yarn

## 📋 Project Structure

```
marketly/
├── app/
│   ├── page.tsx                 # Home page
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles and animations
│   ├── not-found.tsx            # 404 page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   └── contact/page.tsx         # Contact page
├── components/
│   ├── Header.tsx               # Navigation header
│   ├── Footer.tsx               # Footer component
│   ├── ServiceCard.tsx          # Service card component
│   ├── ApproachStep.tsx         # Approach step component
│   ├── FaqItem.tsx              # FAQ accordion item
│   ├── ClientLogosMarquee.tsx   # Animated logo carousel
│   ├── ScoreGauge.tsx           # Animated gauge component
│   ├── SectionHeader.tsx        # Section header component
│   ├── CTASection.tsx           # Call-to-action section
│   └── ui/                      # shadcn/ui components
├── public/
│   └── hero-visual.jpg          # Generated hero image
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
├── MARKETLY_GUIDE.md            # Detailed implementation guide
└── README.md                    # This file
```

## 🚀 Quick Start

### Installation

1. Clone the repository or download the project
2. Navigate to the project directory
3. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

## 🎨 Design System

### Colors
- **Dark Background**: `#1A3F22`
- **Light Background**: `#234B2E`
- **Gold Accent**: `#D99201`
- **Gold Light**: `#E5A828`
- **Text Light**: `#f5f5f5`
- **Border**: `#2D5A35`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Geist (sans-serif)
- **Code**: Geist Mono (monospace)

### Animations
- Fade in/out animations
- Slide transitions
- Marquee scroll
- Glow pulse effects
- Smooth scroll animations

## 📄 Pages Overview

### Home Page (`/`)
- Eye-catching hero section with animated graphics
- Client logos carousel showing trusted brands
- 3-step approach methodology
- Service offerings (Digital Marketing & Paid Advertising)
- Trust and security badges (Google Partner, Meta Business Partner)
- AI visibility score gauge tool
- FAQ section with 6 common questions

### About Page (`/about`)
- Company story and mission
- Key statistics and achievements
- Core values section
- Expertise areas and specializations

### Services Page (`/services`)
- Digital marketing services (SEO, Social Media, PPC, etc.)
- Paid advertising platforms
- Specialized services (B2B, AI Marketing, Demand Generation)
- Why choose Marketly section

### Contact Page (`/contact`)
- Contact information (email, phone, address)
- Functional contact form
- Social media links
- Call-to-action for scheduling consultations

## 🎯 Customization

### Update Company Information
Edit the following files to customize content:
- Replace `Marketly` with your company name
- Update email: `hello@marketly.com`
- Update phone: `+1 (234) 567-890`
- Update address: `123 Marketing St, Tech City, TC 12345`

### Modify Services
Edit the service arrays in `/app/page.tsx`:
```typescript
const DIGITAL_MARKETING = [
  { title: 'Your Service', description: 'Your description' },
  // Add more services
];
```

### Update Statistics
Modify the stat numbers in the hero section of `/app/page.tsx`

### Customize Colors
Edit `/app/globals.css` and `/tailwind.config.ts` to change the color scheme

### Add/Update FAQs
Edit the `FAQS` array in `/app/page.tsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components adapt seamlessly to different screen sizes.

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios meet WCAG AA standards
- Mobile touch-friendly interface
- Form labels for accessibility

## 📊 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Efficient animations with Framer Motion
- Tailwind CSS purging unused styles
- Responsive design reduces mobile data usage

## 🔧 Configuration

### Tailwind CSS
Edit `tailwind.config.ts` to customize:
- Spacing scale
- Color palette
- Font families
- Custom animations
- Breakpoints

### Next.js
Edit `next.config.mjs` for:
- Image optimization
- API routes
- Environment variables
- Build configuration

## 🌐 Deployment

### Deploy to Vercel (Recommended)
```bash
vercel deploy
```

### Deploy to Other Platforms
The project works with any Node.js hosting:
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Deploy from Git
- **Heroku**: Use Procfile
- **DigitalOcean**: Deploy Docker container

## 📦 Dependencies

Key dependencies included:
- `next` - React framework
- `framer-motion` - Animation library
- `tailwindcss` - CSS utility framework
- `lucide-react` - Icon library
- `shadcn/ui` - Component library
- `typescript` - Type safety

See `package.json` for complete list of dependencies.

## 🤝 Contributing

This is a client project. For modifications or enhancements, please:
1. Create a feature branch
2. Make your changes
3. Test thoroughly across all pages and devices
4. Submit for review

## 📝 License

All rights reserved. This project is proprietary to Marketly.

## 📞 Support

For questions or issues:
- Email: hello@marketly.com
- Phone: +1 (234) 567-890

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📅 Version History

**v1.0.0** - March 12, 2024
- Initial release
- Complete homepage with all sections
- About, Services, and Contact pages
- Fully responsive design
- Smooth animations throughout
- Contact form with validation
- Accessibility compliance

---

Made with ❤️ by the Marketly team

**Live Demo**: Coming soon
**Documentation**: See MARKETLY_GUIDE.md for detailed implementation guide
