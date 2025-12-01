# Wright Way Lawn Service - Design Guidelines

## Design Approach

**Selected Approach:** Reference-based with local service provider patterns  
**Primary References:** Trusted local service websites (lawn care, home services) that emphasize professionalism, community trust, and authentic work showcases  
**Core Principle:** Clean, approachable professionalism that builds trust through authentic imagery and customer testimonials

---

## Typography

**Font Family:** Inter (already implemented)
- **Headings:** Font weights 600-700, sizes from text-2xl to text-5xl
- **Body Text:** Font weight 400, text-base to text-lg  
- **Small Text:** Font weight 400-500, text-sm
- **CTAs:** Font weight 600, text-base to text-lg

**Hierarchy:**
- Page titles: text-4xl md:text-5xl font-bold
- Section headings: text-3xl md:text-4xl font-bold
- Card/component titles: text-xl md:text-2xl font-bold
- Body copy: text-base leading-relaxed
- Captions/meta: text-sm

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 8, 12, 16, 20
- Small gaps: gap-2, gap-4
- Component padding: p-4, p-6, p-8
- Section padding: py-12 md:py-20
- Margins: mb-4, mb-8, mb-12

**Container Strategy:**
- Max width: max-w-7xl mx-auto
- Horizontal padding: px-4 sm:px-6 lg:px-8
- Content sections: Natural height based on content

**Grid Patterns:**
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Gallery: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Contact section: Single column with embedded map

---

## Component Library

### Navigation (Already Implemented)
- Fixed header with backdrop blur
- Logo with icon + text split treatment
- Mobile hamburger menu with slide-down panel

### Hero Section
- Full viewport height with lawn care background image
- Dark overlay for text contrast
- Badge element (5-star rating) with backdrop blur
- Two-button CTA layout (primary + secondary with icon)
- Wave SVG divider at bottom

### Service Cards
- Image thumbnail (h-48)
- Floating icon badge (absolute positioning, -top-8)
- Title + description + feature list
- Hover scale effect on images
- Rounded corners (rounded-2xl)

### Gallery Grid
- Masonry-style grid layout
- Before/after comparison capability
- Image captions with location/service type
- Hover overlay with project details
- Modal lightbox for full-size viewing

### Testimonial Cards
- Customer name and photo
- Star rating display (5 stars using Lucide star icons)
- Quote text with quotation marks styling
- Service type/date metadata
- Alternating layout patterns for visual interest

### Contact Form
- Full-width section
- Form fields: Name, Phone, Email, Address, Service Type (dropdown), Message
- Large textarea for additional details
- Submit button with icon
- Side panel with business hours, phone, email
- Embedded Google Maps iframe

### Footer
- Three-column layout (desktop): Business info | Quick Links | Contact
- Single column (mobile)
- Social media icons if available
- Copyright and credentials (years in business, insurance info)
- "Servicing Orange & Surrounding Areas" tagline

---

## Images

### Hero Image
Large hero background featuring well-maintained lawn or Mick's team at work. Image should convey professionalism and local Australian setting.

### Service Section Images
- Lawn mowing in action (manicured residential lawn)
- Garden bed maintenance (colorful flowering plants)
- Commercial property grounds (business exterior)

### Gallery Section (8-12 images)
Real before/after photos from Wright Way's actual jobs:
- Overgrown to manicured transformations
- Hedge trimming results
- Commercial property maintenance
- Seasonal lawn care
- Team action shots with equipment

### Testimonials
Include customer profile photos (if available) or use placeholder avatars with initials

### About/Team Section
Photo of Mick Wright and team members (Fee Evans, Sam, Charlie, Reecey Darcy) with equipment, conveying family business authenticity

---

## Additional Sections to Complete

### "Why Choose Wright Way" Section
Three-column feature grid:
- 10+ Years Experience (Mick's arborist background)
- Family Owned & Operated (Local Orange business)
- Safety First (Snake awareness, protective gear, insurance)

Each with icon, bold stat/claim, supporting text

### Service Area Map
Visual representation of Orange NSW and surrounding suburbs served. Can use embedded Google Map with marked service radius.

### Call-to-Action Banner
Before footer: Full-width section with "Ready for the Wright Way?" headline, subtext about free quotes, phone number display, and contact button.

---

## Key Design Principles

1. **Authentic Local Feel:** Use real photos from Orange area, local landmarks visible where possible
2. **Trust Signals:** Display credentials, insurance info, years in business prominently
3. **Mobile-First:** Ensure all sections stack gracefully on mobile
4. **Breathing Room:** Generous whitespace between sections (py-20)
5. **Consistent Iconography:** Lucide icons throughout for visual cohesion
6. **Accessibility:** High contrast text, clear focus states, semantic HTML

---

## Interaction Notes

- Minimal animations (only service card hover effects and smooth scroll)
- Mobile menu toggle functionality (already implemented)
- Form validation on submit
- Smooth scroll for anchor navigation
- Gallery lightbox modal for image viewing