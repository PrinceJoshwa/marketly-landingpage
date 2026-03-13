# Developer Notes - Marketly Project

Quick reference for developers working on the Marketly website.

## Key Technologies

- **Next.js 16** with App Router (not Pages router)
- **TypeScript** for type safety
- **Tailwind CSS 4** with custom configuration
- **Framer Motion** for animations
- **Lucide React** for icons
- **shadcn/ui** component library

## File Organization

### Core Pages
- `/app/page.tsx` - Home page (most important, contains main sections)
- `/app/about/page.tsx` - About company page
- `/app/services/page.tsx` - Services showcase page
- `/app/contact/page.tsx` - Contact form page
- `/app/not-found.tsx` - 404 error page

### Core Components (Reusable)
- `Header.tsx` - Sticky navigation (used on all pages)
- `Footer.tsx` - Footer section (used on all pages)
- `ServiceCard.tsx` - Card component for services
- `ApproachStep.tsx` - Step in methodology
- `FaqItem.tsx` - FAQ accordion item
- `ClientLogosMarquee.tsx` - Auto-scrolling logos
- `ScoreGauge.tsx` - SVG progress gauge
- `SectionHeader.tsx` - Section title/subtitle
- `CTASection.tsx` - Call-to-action block

## Styling System

### Colors (CSS Variables)
Located in `/app/globals.css` and `/tailwind.config.ts`:
```css
--dark-bg: '#1A3F22'        /* Main background */
--dark-bg-light: '#234B2E'  /* Lighter sections */
--gold: '#D99201'           /* Primary accent */
--gold-light: '#E5A828'     /* Hover state */
--text-light: '#f5f5f5'     /* Primary text */
--border-dark: '#2D5A35'    /* Borders */
```

### Tailwind Classes
- Use `bg-dark-bg` for main background
- Use `text-gold` for accent text
- Use `border-border-dark` for borders
- Use `text-text-light` for body text

### Fonts
```css
font-serif      /* Playfair Display - headings */
font-sans       /* Geist - body text */
font-mono       /* Geist Mono - code */
```

## Animation Patterns

### Using Framer Motion

#### Basic Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

#### On Scroll Animation
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.1 }}
>
  Content
</motion.div>
```

#### Hover Effects
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

## Common Component Patterns

### Creating a New Component
```tsx
'use client'; // Required for interactivity

import { motion } from 'framer-motion';

interface MyComponentProps {
  title: string;
  description?: string;
}

export default function MyComponent({ title, description }: MyComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h2 style={{ fontFamily: 'var(--font-serif)' }}>{title}</h2>
      {description && <p className="text-text-light">{description}</p>}
    </motion.div>
  );
}
```

### Creating a New Page
```tsx
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SectionHeader from '@/components/SectionHeader';

export default function NewPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      
      {/* Page Content */}
      <section className="py-24 bg-dark-bg">
        <div className="container mx-auto px-6">
          <SectionHeader title="Title" subtitle="Subtitle" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
```

## Data Structures

### Service Data
```typescript
interface ServiceItem {
  title: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    title: 'SEO',
    description: 'Boost organic visibility'
  },
  // ...
];
```

### Approach Steps
```typescript
interface ApproachStep {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}
```

### FAQ Items
```typescript
interface FAQ {
  q: string;  // question
  a: string;  // answer
}
```

## Common Tasks

### Add a New Service
1. Edit the service array in the relevant page
2. Add to `DIGITAL_MARKETING` or `PAID_ADVERTISING`
3. Component renders automatically using `.map()`

### Add a New FAQ
1. Add to `FAQS` array in `/app/page.tsx`
2. Update count reference if needed
3. Automatically renders with `FaqItem` component

### Change Colors
1. Update CSS variables in `/app/globals.css`
2. Update tailwind color config in `/tailwind.config.ts`
3. Update both for consistency

### Add a New Page
1. Create `/app/new-page/page.tsx`
2. Add link in `Header.tsx` navigation
3. Add link in `Footer.tsx`
4. Follow existing page structure

## Performance Tips

1. **Images**: Use Next.js Image component
2. **Animations**: Use Framer Motion (GPU-accelerated)
3. **Code Splitting**: Each page is automatically split
4. **CSS**: Tailwind purges unused styles in production
5. **Fonts**: Already optimized with next/font

## Debugging

### Enable Debug Console Logs
```tsx
console.log("[v0] Debug message:", value);
```

### Check Component Props
Use TypeScript interfaces for prop validation

### Test Animations
- Use Firefox DevTools (better for animations)
- Reduce motion in system settings for faster preview
- Use `transition={{ duration: 0.1 }}` for quick testing

## Common Issues & Solutions

### Styles not applying
- Check Tailwind is in `globals.css`
- Verify color variables are defined
- Clear `.next` folder and rebuild

### Animation not showing
- Ensure `'use client'` is at top of file
- Check `viewport={{ once: true }}` is set correctly
- Verify animation on correct element

### Layout shift
- Set explicit widths/heights
- Use `min-h-screen` for full height sections
- Avoid dynamic content without fallbacks

## Browser DevTools Tips

1. **React DevTools**: Inspect component hierarchy
2. **Lighthouse**: Check performance and accessibility
3. **Network Tab**: Monitor loading performance
4. **Console**: Check for errors and warnings

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes
# Commit frequently with clear messages
git commit -m "feat: add new feature"

# Push to remote
git push origin feature/feature-name

# Create pull request
```

## Testing Checklist

- [ ] All pages load without errors
- [ ] Mobile responsive (test at 375px, 768px, 1024px)
- [ ] All links work correctly
- [ ] Form submits successfully
- [ ] Animations smooth (60fps)
- [ ] Images load correctly
- [ ] Accessibility (keyboard navigation)
- [ ] Performance (Lighthouse > 90)

## Deployment Checklist

Before deploying:
- [ ] Run `npm run build` locally
- [ ] Test production build with `npm start`
- [ ] Update content (company info, contact details)
- [ ] Test all links
- [ ] Check all animations
- [ ] Verify form works
- [ ] Test on mobile devices
- [ ] Check Analytics setup (if used)

## Resources

- **Docs**: See README.md and MARKETLY_GUIDE.md
- **Code Style**: Follow existing patterns
- **TypeScript**: Use strict mode
- **Git**: Atomic commits with clear messages

## Support

For questions about the codebase:
1. Check existing code examples
2. Review component interfaces
3. Consult Next.js/Tailwind documentation
4. Check TypeScript errors

---

**Last Updated**: March 12, 2024
**Version**: 1.0.0
