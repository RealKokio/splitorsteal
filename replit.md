# Split or Steal Game

## Overview

A modern web application implementing the classic "Split or Steal" game concept, built with React, TypeScript, and Express.js. The application features a clean, animated UI with a fullstack architecture designed for extensibility and performance.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: Configured for PostgreSQL with Drizzle ORM
- **Session Management**: Express sessions with PostgreSQL store (connect-pg-simple)
- **Development**: Hot reloading with tsx and Vite integration

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Connection**: Neon serverless PostgreSQL database
- **Migrations**: Drizzle Kit for schema management
- **Schema**: Type-safe database schema with Zod validation

## Key Components

### Game Interface
- **Game State Management**: Local state handling game phases (playing, split, steal)
- **Animation System**: Framer Motion AnimatePresence for smooth transitions
- **Responsive Design**: Mobile-first design with Tailwind breakpoints
- **Interactive Elements**: Custom buttons with hover states and animations

### Storage Layer
- **In-Memory Storage**: Development-ready MemStorage class for user management
- **Database Ready**: Structured for easy PostgreSQL integration
- **Type Safety**: Full TypeScript integration with Drizzle schema types

### API Structure
- **RESTful Design**: Express routes prefixed with `/api`
- **Error Handling**: Centralized error middleware with proper status codes
- **Request Logging**: Detailed API request logging with timing information
- **Type Safety**: Shared types between frontend and backend

## Data Flow

1. **Client Request**: Frontend makes API calls using React Query
2. **Server Processing**: Express routes handle requests with proper validation
3. **Data Storage**: Storage interface abstracts database operations
4. **Response**: JSON responses with proper error handling
5. **UI Updates**: React Query manages cache invalidation and UI updates

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React ecosystem with modern hooks
- **Styling**: Tailwind CSS with Radix UI components
- **Animation**: Framer Motion for interactive animations
- **HTTP Client**: Fetch API with React Query integration
- **Form Handling**: React Hook Form with Zod validation

### Backend Dependencies
- **Database**: Neon PostgreSQL serverless database
- **ORM**: Drizzle ORM with PostgreSQL adapter
- **Session Store**: PostgreSQL session storage
- **Development**: TSX for TypeScript execution

### Development Tools
- **Build System**: Vite with React plugin
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint-ready configuration
- **Database Tools**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: ESBuild bundles TypeScript server to `dist/index.js`
- **Static Assets**: Served through Express in production mode

### Environment Configuration
- **Development**: Hot reloading with Vite dev server and TSX
- **Production**: Node.js server serving both API and static assets
- **Database**: Environment-based DATABASE_URL configuration

### Scaling Considerations
- **Database**: Neon serverless PostgreSQL for automatic scaling
- **Session Storage**: PostgreSQL-backed sessions for multi-instance support
- **Static Assets**: CDN-ready static asset serving

## Changelog

Changelog:
- July 08, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.