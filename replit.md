# Wright Way Lawn Service

## Overview

Wright Way Lawn Service is a professional lawn care and garden maintenance business website for Orange, NSW. The application is a single-page marketing site built with React and Express, designed to showcase services, display customer testimonials, present a photo gallery, and capture contact form submissions from potential clients. The site emphasizes clean, approachable professionalism with a focus on building trust through authentic imagery and customer reviews.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript
- Single-page application (SPA) using Wouter for client-side routing
- Component-based architecture with functional components and hooks
- Server-side rendering is NOT used (RSC disabled in components.json)

**UI Component Library**: Shadcn/ui with Radix UI primitives
- Design system based on "new-york" style variant
- Tailwind CSS for styling with custom color palette centered around lawn green (#15803d)
- Inter font family for all typography
- Responsive design using Tailwind's mobile-first breakpoints

**State Management**:
- TanStack Query (React Query) v5 for server state management
- React Hook Form with Zod validation for form handling
- Local component state using React hooks

**Design Patterns**:
- Component composition using Radix UI slots
- Custom hooks for reusable logic (use-toast, use-mobile)
- Centralized styling through Tailwind configuration and CSS variables
- Path aliases (@/, @shared, @assets) for clean imports

### Backend Architecture

**Framework**: Express.js with TypeScript
- RESTful API design
- Single API endpoint: POST /api/contact for form submissions
- Static file serving for the built React application

**Development Setup**:
- Vite dev server integration in development mode
- HMR (Hot Module Replacement) enabled via Vite middleware
- Custom logging middleware for request monitoring

**Build Process**:
- esbuild for server-side bundling with selective dependency bundling
- Vite for client-side bundling
- Output: Single CJS file for server, static assets for client

**Storage Layer**:
- Interface-based storage abstraction (IStorage)
- In-memory storage implementation (MemStorage) - data not persisted between restarts
- Designed for future database integration (Drizzle ORM configured but not actively used)

**Data Validation**:
- Shared schema validation using Zod
- Type-safe data structures via TypeScript and zod-infer

### External Dependencies

**Email Service**: Nodemailer
- SMTP integration via Gmail (smtp.gmail.com:587)
- Environment variables required: EMAIL_USER, EMAIL_PASS
- Sends contact form submissions to business email
- Graceful error handling if email fails (submission still saved)

**Database** (Configured but not actively used):
- Drizzle ORM configured with PostgreSQL dialect
- Neon Database serverless driver included
- Connection via DATABASE_URL environment variable
- Migration support via Drizzle Kit
- Ready for activation when persistence is needed

**Third-Party UI Libraries**:
- Radix UI for accessible component primitives (dialogs, dropdowns, etc.)
- Lucide React for icons
- date-fns for date formatting
- class-variance-authority (CVA) for component variant management

**Development Tools**:
- Replit-specific plugins for development banner and cartographer
- Runtime error overlay for better DX

**Content**:
- Unsplash images for hero backgrounds, service cards, and gallery
- Design guidelines document references local service provider patterns for inspiration

### Key Architectural Decisions

**Monorepo Structure**: Client, server, and shared code in single repository
- `/client` - React frontend
- `/server` - Express backend
- `/shared` - Shared types and validation schemas
- `/attached_assets` - Static assets

**Type Safety**: End-to-end TypeScript with shared validation schemas between client and server, reducing duplication and ensuring consistency.

**Email-First Contact**: Contact submissions stored in memory and sent via email rather than admin dashboard, suitable for small business operations.

**Scalability Preparation**: Database ORM configured but not used, allowing easy migration from in-memory to persistent storage when needed.

**Static Site Approach**: Production builds compile to static assets served by Express, enabling deployment to various hosting platforms.

**Styling Philosophy**: Utility-first CSS via Tailwind with design tokens in CSS variables, enabling consistent theming and easy customization.