# Architecture Overview

The Shalom Dev Portfolio follows a modern Next.js 15 structure with the App Router.

## Directory Structure (Client)

- `src/app/[locale]`: Contains the localized route segments and layouts.
- `src/components`: UI components (Navbar, Hero, Services, etc.).
- `messages/`: JSON files containing translations for all 10 supported languages.
- `src/i18n`: Configuration for `next-intl` routing and middleware.
- `public/`: Static assets such as images and fonts.

## Key Design Patterns

### 1. Internationalized Routing
The app uses path-based routing (`/[locale]/`). Middleware handles automatic redirection from the root to the default locale (`/rw`).

### 2. Hierarchical Translations
Instead of flat keys, we use a hierarchical structure in JSON files (e.g., `Services.items.web.title`). This makes managing complex data like projects and testimonials much easier.

### 3. Client & Server Components
- **Layouts:** Use Server Components where possible for performance.
- **Interactive UI:** Components like the `Navbar` and `LanguageSwitcher` use `"use client"` for Framer Motion animations and state management.

## Styling System
- **Tailwind CSS:** Used for all styling with custom configuration for premium colors (e.g., `accent-red`).
- **Dark Mode:** Built-in support using Tailwind's `dark` class strategy.
