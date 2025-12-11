# Project Adjustment Task: Next.js Application

## Objective
Adjust an existing Next.js project to align with **professional development practices**, including:
- Modular **component architecture**
- **Atomic design principles**
- Clean **folder structure** (monorepo-compatible)
- Robust **testing** with coverage thresholds
- CI/CD integration with safety checks
- Comprehensive **error handling** and monitoring
- **Performance optimization** and accessibility
- **Security best practices**

> ⚠ The project may be frontend-only, full-stack, or part of a monorepo. Start with **thorough analysis before any changes**. Preserve working functionality unless explicit improvements are needed. Use incremental refactoring with rollback capability.

---

## Step 0: Initial Analysis (Discovery Phase)

### 0.1 Project Context & Architecture
1. **Project Type**
   - [ ] Standalone Next.js app or monorepo package?
   - [ ] Frontend-only or full-stack (API routes, database)?
   - [ ] Next.js version (Pages Router vs App Router)?
   - [ ] Deployment target (Vercel, Railway, self-hosted)?

2. **Core Functionality Inventory**
   - [ ] List all pages/routes and their purpose
   - [ ] Identify critical user flows (auth, checkout, data submission)
   - [ ] Document external integrations (APIs, webhooks, third-party services)
   - [ ] Map data flow: client → API → database (if applicable)

3. **State Management Audit**
   - [ ] Redux Toolkit slices (list all, check for redundancy)
   - [ ] Context API usage (theme, auth, global state)
   - [ ] Client-side caching (React Query, SWR, or manual)
   - [ ] Server state vs client state separation

### 0.2 Code Quality & Standards
1. **Folder Structure & Naming**
   - [ ] Current structure: monorepo (`/apps/`, `/packages/`) or standalone?
   - [ ] Naming conventions: kebab-case, PascalCase, or mixed?
   - [ ] Component organization: atomic design, feature-based, or flat?
   - [ ] Compliance with project rules (see user_rules)

2. **TypeScript & Type Safety**
   - [ ] TypeScript strict mode enabled?
   - [ ] Type coverage (any types, implicit any)?
   - [ ] Shared types location (`/packages/shared/` or local)?
   - [ ] API response typing (manual, generated, or missing)?

3. **Styling & UI Libraries**
   - [ ] Tailwind CSS configuration and usage
   - [ ] Shadcn/ui components inventory
   - [ ] Custom design tokens or theme system
   - [ ] Responsive design implementation
   - [ ] Animation library (Framer Motion, CSS, or none)

### 0.3 Rendering & Data Fetching
1. **Rendering Strategy**
   - [ ] SSR (Server-Side Rendering) usage and patterns
   - [ ] SSG (Static Site Generation) for static pages
   - [ ] ISR (Incremental Static Regeneration) for dynamic content
   - [ ] CSR (Client-Side Rendering) for interactive features
   - [ ] Streaming and Suspense usage (App Router)

2. **Data Fetching Patterns**
   - [ ] `getServerSideProps`, `getStaticProps` (Pages Router)
   - [ ] Server Components, `fetch` with caching (App Router)
   - [ ] Client-side fetching (React Query, SWR, useEffect)
   - [ ] API route handlers (`/pages/api/` or `/app/api/`)
   - [ ] Error handling and loading states

### 0.4 Dependencies & Configuration
1. **Package Management**
   - [ ] Package manager: pnpm (required), npm, yarn, or bun?
   - [ ] `package.json` scripts audit (build, dev, test, lint)
   - [ ] Outdated dependencies check (`pnpm outdated`)
   - [ ] Security vulnerabilities (`pnpm audit`)
   - [ ] Workspace dependencies (monorepo only)

2. **Build & Environment**
   - [ ] `next.config.js` review (image domains, redirects, headers)
   - [ ] `tsconfig.json` settings (paths, strict mode)
   - [ ] Environment variables (`.env.local`, `.env.example`)
   - [ ] Missing API keys or secrets documentation

3. **Performance Baseline**
   - [ ] Lighthouse score (Performance, Accessibility, Best Practices, SEO)
   - [ ] Core Web Vitals (LCP, FID, CLS)
   - [ ] Bundle size analysis (`@next/bundle-analyzer`)
   - [ ] Unused dependencies or code

### 0.5 Testing & Quality Assurance
1. **Existing Tests**
   - [ ] Testing framework (Jest, Vitest, none?)
   - [ ] Unit tests coverage (target: >80%)
   - [ ] Component tests (React Testing Library, Enzyme?)
   - [ ] Integration tests (API routes, data flow)
   - [ ] E2E tests (Playwright, Cypress, none?)
   - [ ] Accessibility tests (axe, jest-axe)

2. **Code Quality Tools**
   - [ ] ESLint configuration and rules
   - [ ] Prettier for code formatting
   - [ ] Husky pre-commit hooks
   - [ ] TypeScript compiler checks in CI

### 0.6 Error Handling & Monitoring
1. **Error Handling Patterns**
   - [ ] Error Boundaries for React components
   - [ ] API error handling (try/catch, error responses)
   - [ ] Global error handler (`_error.tsx` or `error.tsx`)
   - [ ] User-friendly error messages

2. **Monitoring & Logging**
   - [ ] Error tracking (Sentry, LogRocket, Bugsnag?)
   - [ ] Analytics (Google Analytics, Plausible, Mixpanel?)
   - [ ] Performance monitoring (Vercel Analytics, Web Vitals)
   - [ ] Logging strategy (console, structured logs)

### 0.7 Security & Accessibility
1. **Security Audit**
   - [ ] Authentication/authorization implementation
   - [ ] API route protection (middleware, auth checks)
   - [ ] CSRF protection for forms
   - [ ] XSS prevention (sanitization, CSP headers)
   - [ ] Secrets management (never hardcoded)

2. **Accessibility (a11y)**
   - [ ] WCAG compliance level (A, AA, AAA target?)
   - [ ] Keyboard navigation support
   - [ ] Screen reader compatibility
   - [ ] ARIA labels and semantic HTML
   - [ ] Color contrast ratios

### 0.8 CI/CD & DevOps
1. **CI/CD Pipeline**
   - [ ] GitHub Actions, GitLab CI, or other?
   - [ ] Automated testing on PR
   - [ ] Build and deployment automation
   - [ ] Environment-specific deployments (staging, production)

2. **Documentation**
   - [ ] README completeness (setup, run, deploy)
   - [ ] API documentation (if full-stack)
   - [ ] Architecture diagrams
   - [ ] Contribution guidelines

### 0.9 Output: Analysis Report
Create a structured report (`analysis-report.md`) with:
- **Executive Summary**: Project type, tech stack, overall health score
- **Functionality Inventory**: All features, routes, integrations
- **Critical Gaps**: Missing tests, security issues, performance problems
- **Refactoring Priorities**: High/Medium/Low priority improvements
- **Risk Assessment**: What could break during refactoring?
- **Estimated Effort**: Time/complexity for each improvement

---

## Step 1: Component & Design System Refactoring

### 1.1 Pre-Refactoring Safety
1. **Create Feature Branch**
   ```bash
   git checkout -b refactor/component-architecture
   ```

2. **Backup Current State**
   - Tag current version: `git tag -a pre-refactor-v1 -m "Before component refactoring"`
   - Document current component tree in `docs/component-inventory.md`

3. **Establish Rollback Plan**
   - Define rollback criteria (e.g., broken tests, build failures)
   - Keep original components until new ones are tested

### 1.2 Component Architecture (Monorepo-Aligned)

**For Monorepo Projects:**
```
apps/web/
├── app/                    # Next.js routes & pages (orchestration only)
├── design-system/          # Shared, low-level UI components
│   ├── atoms/             # Button, Input, Icon, Label
│   ├── molecules/         # SearchBar, Card, FormField
│   ├── organisms/         # Header, Modal, DataTable
│   └── theme/             # Design tokens, Tailwind config
├── partials/              # Feature-specific UI modules
│   ├── auth/              # LoginForm, SignupModal
│   ├── dashboard/         # DashboardHeader, StatsCard
│   └── onboarding/        # OnboardingWizard, Steps
└── core/                  # Business logic (UI-agnostic)
    ├── hooks/             # useAuth, useData, useTheme
    ├── utils/             # Formatters, validators
    └── state/             # Redux slices, Context providers
```

**For Standalone Projects:**
```
src/
├── app/                   # Next.js routes
├── components/
│   ├── ui/               # Shadcn/ui components (atoms)
│   ├── common/           # Shared molecules (Card, SearchBar)
│   └── features/         # Feature-specific organisms
├── lib/                  # Utilities, API clients
├── hooks/                # Custom React hooks
└── store/                # State management
```

### 1.3 Refactoring Process (Incremental)

**Phase 1: Atoms (Week 1)**
- [ ] Audit existing buttons, inputs, icons
- [ ] Create standardized atoms in `design-system/atoms/` (or `components/ui/`)
- [ ] Use **Shadcn/ui** as base, customize with Tailwind
- [ ] Add TypeScript interfaces for all props
- [ ] Write unit tests for each atom (>90% coverage)
- [ ] Document usage in Storybook (optional but recommended)

**Phase 2: Molecules (Week 2)**
- [ ] Identify repeated UI patterns (cards, forms, lists)
- [ ] Compose molecules from atoms
- [ ] Add **Framer Motion** animations (hover, focus, entrance)
- [ ] Ensure responsive design (mobile-first approach)
- [ ] Test on multiple screen sizes (320px, 768px, 1024px, 1440px)

**Phase 3: Organisms (Week 3)**
- [ ] Refactor complex components (headers, modals, navigation)
- [ ] Extract business logic to `core/hooks/` or custom hooks
- [ ] Keep organisms focused on composition, not logic
- [ ] Add accessibility features (ARIA, keyboard navigation)
- [ ] Integration tests for user interactions

**Phase 4: Migration (Week 4)**
- [ ] Replace old components with new ones (one page at a time)
- [ ] Run visual regression tests (Percy, Chromatic)
- [ ] Monitor for broken layouts or functionality
- [ ] Delete old components only after full migration

### 1.4 Design System Standards

1. **Naming Conventions**
   - Files: `kebab-case.tsx` (e.g., `primary-button.tsx`)
   - Components: `PascalCase` (e.g., `PrimaryButton`)
   - Props interfaces: `ComponentNameProps` (e.g., `PrimaryButtonProps`)

2. **Component Structure Template**
   ```typescript
   // design-system/atoms/primary-button.tsx
   import { ButtonHTMLAttributes, forwardRef } from 'react'
   import { motion } from 'framer-motion'
   
   export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
     variant?: 'solid' | 'outline' | 'ghost'
     size?: 'sm' | 'md' | 'lg'
     isLoading?: boolean
   }
   
   export const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
     ({ variant = 'solid', size = 'md', isLoading, children, ...props }, ref) => {
       return (
         <motion.button
           ref={ref}
           whileHover={{ scale: 1.02 }}
           whileTap={{ scale: 0.98 }}
           className={/* Tailwind classes */}
           disabled={isLoading}
           {...props}
         >
           {isLoading ? <Spinner /> : children}
         </motion.button>
       )
     }
   )
   
   PrimaryButton.displayName = 'PrimaryButton'
   ```

3. **Responsive Design Breakpoints**
   ```typescript
   // design-system/theme/breakpoints.ts
   export const breakpoints = {
     sm: '640px',   // Mobile landscape
     md: '768px',   // Tablet
     lg: '1024px',  // Desktop
     xl: '1280px',  // Large desktop
     '2xl': '1536px' // Extra large
   }
   ```

4. **Animation Standards**
   - Use Framer Motion for complex animations
   - Keep animations subtle (200-300ms duration)
   - Respect `prefers-reduced-motion` for accessibility
   ```typescript
   const fadeIn = {
     initial: { opacity: 0, y: 20 },
     animate: { opacity: 1, y: 0 },
     transition: { duration: 0.3 }
   }
   ```

### 1.5 Testing Strategy

1. **Unit Tests (Atoms)**
   ```typescript
   // design-system/atoms/__tests__/primary-button.test.tsx
   import { render, screen, fireEvent } from '@testing-library/react'
   import { describe, it, expect, vi } from 'vitest'
   import { PrimaryButton } from '../primary-button'
   
   describe('PrimaryButton', () => {
     it('renders children correctly', () => {
       render(<PrimaryButton>Click me</PrimaryButton>)
       expect(screen.getByText('Click me')).toBeInTheDocument()
     })
     
     it('handles click events', () => {
       const handleClick = vi.fn()
       render(<PrimaryButton onClick={handleClick}>Click</PrimaryButton>)
       fireEvent.click(screen.getByText('Click'))
       expect(handleClick).toHaveBeenCalledTimes(1)
     })
     
     it('shows loading state', () => {
       render(<PrimaryButton isLoading>Submit</PrimaryButton>)
       expect(screen.getByRole('button')).toBeDisabled()
     })
   })
   ```

2. **Visual Regression Tests**
   - Use Chromatic or Percy for screenshot comparisons
   - Test all variants and states (hover, focus, disabled)

3. **Accessibility Tests**
   ```typescript
   import { axe, toHaveNoViolations } from 'jest-axe'
   expect.extend(toHaveNoViolations)
   
   it('has no accessibility violations', async () => {
     const { container } = render(<PrimaryButton>Click</PrimaryButton>)
     const results = await axe(container)
     expect(results).toHaveNoViolations()
   })
   ```

---

## Step 2: State Management & Theming

### 2.1 State Management Strategy

**Decision Matrix: Redux vs Context API**
| Use Case | Recommended Solution | Reason |
|----------|---------------------|--------|
| Global app state (user, auth) | Context API | Simple, built-in, less boilerplate |
| Complex data with frequent updates | Redux Toolkit | Performance, DevTools, middleware |
| Theme (light/dark mode) | Context API | Simple toggle, infrequent updates |
| Server state (API data) | React Query / SWR | Caching, revalidation, optimistic updates |
| Form state | React Hook Form | Performance, validation |

### 2.2 Redux Toolkit Refactoring

1. **Audit Existing Slices**
   ```bash
   # List all Redux slices
   find . -name "*slice.ts" -o -name "*Slice.ts"
   ```

2. **Slice Structure Template**
   ```typescript
   // core/state/slices/user-slice.ts
   import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
   
   // Reason: Centralized user state for auth, profile, preferences
   // Used across multiple pages: dashboard, settings, profile
   
   interface UserState {
     user: User | null
     isLoading: boolean
     error: string | null
   }
   
   const initialState: UserState = {
     user: null,
     isLoading: false,
     error: null
   }
   
   // Async thunk for API calls
   export const fetchUser = createAsyncThunk(
     'user/fetch',
     async (userId: string, { rejectWithValue }) => {
       try {
         const response = await fetch(`/api/users/${userId}`)
         if (!response.ok) throw new Error('Failed to fetch user')
         return await response.json()
       } catch (error) {
         return rejectWithValue(error.message)
       }
     }
   )
   
   const userSlice = createSlice({
     name: 'user',
     initialState,
     reducers: {
       setUser: (state, action: PayloadAction<User>) => {
         state.user = action.payload
       },
       clearUser: (state) => {
         state.user = null
       }
     },
     extraReducers: (builder) => {
       builder
         .addCase(fetchUser.pending, (state) => {
           state.isLoading = true
           state.error = null
         })
         .addCase(fetchUser.fulfilled, (state, action) => {
           state.isLoading = false
           state.user = action.payload
         })
         .addCase(fetchUser.rejected, (state, action) => {
           state.isLoading = false
           state.error = action.payload as string
         })
     }
   })
   
   export const { setUser, clearUser } = userSlice.actions
   export default userSlice.reducer
   ```

3. **Store Configuration**
   ```typescript
   // core/state/store.ts
   import { configureStore } from '@reduxjs/toolkit'
   import userReducer from './slices/user-slice'
   
   export const store = configureStore({
     reducer: {
       user: userReducer,
       // Add other slices here
     },
     middleware: (getDefaultMiddleware) =>
       getDefaultMiddleware({
         serializableCheck: {
           // Ignore these action types for non-serializable values
           ignoredActions: ['your/action/type'],
         },
       }),
   })
   
   export type RootState = ReturnType<typeof store.getState>
   export type AppDispatch = typeof store.dispatch
   ```

### 2.3 Theme System Implementation

1. **Theme Context Provider**
   ```typescript
   // core/context/theme-context.tsx
   'use client' // For Next.js App Router
   
   import { createContext, useContext, useEffect, useState } from 'react'
   
   type Theme = 'light' | 'dark' | 'system'
   
   interface ThemeContextType {
     theme: Theme
     setTheme: (theme: Theme) => void
     resolvedTheme: 'light' | 'dark' // Actual theme after resolving 'system'
   }
   
   const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
   
   export function ThemeProvider({ children }: { children: React.ReactNode }) {
     const [theme, setTheme] = useState<Theme>('system')
     const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light')
   
     useEffect(() => {
       // Load theme from localStorage
       const stored = localStorage.getItem('theme') as Theme
       if (stored) setTheme(stored)
     }, [])
   
     useEffect(() => {
       // Resolve 'system' theme based on OS preference
       const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
       const updateResolvedTheme = () => {
         const resolved = theme === 'system' 
           ? (mediaQuery.matches ? 'dark' : 'light')
           : theme
         setResolvedTheme(resolved)
         document.documentElement.classList.toggle('dark', resolved === 'dark')
       }
   
       updateResolvedTheme()
       mediaQuery.addEventListener('change', updateResolvedTheme)
       return () => mediaQuery.removeEventListener('change', updateResolvedTheme)
     }, [theme])
   
     const handleSetTheme = (newTheme: Theme) => {
       setTheme(newTheme)
       localStorage.setItem('theme', newTheme)
     }
   
     return (
       <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
         {children}
       </ThemeContext.Provider>
     )
   }
   
   export const useTheme = () => {
     const context = useContext(ThemeContext)
     if (!context) throw new Error('useTheme must be used within ThemeProvider')
     return context
   }
   ```

2. **Theme Switcher Component**
   ```typescript
   // design-system/molecules/theme-switcher.tsx
   import { useTheme } from '@/core/context/theme-context'
   import { motion } from 'framer-motion'
   
   export function ThemeSwitcher() {
     const { theme, setTheme } = useTheme()
   
     return (
       <motion.button
         whileTap={{ scale: 0.95 }}
         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
         className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
         aria-label="Toggle theme"
       >
         {theme === 'dark' ? '🌙' : '☀️'}
       </motion.button>
     )
   }
   ```

### 2.4 Documentation Requirements

- [ ] Document state flow in `docs/state-management.md`
- [ ] Add inline comments explaining Redux vs Context decisions
- [ ] Create state diagram showing data flow
- [ ] Document theme customization in README

---

## Step 3: Next.js-Specific Adjustments

### 3.1 Layout & Routing Strategy

**Pages Router (`pages/`) vs App Router (`app/`)**
- **If using Pages Router:** Keep existing structure, consider gradual migration
- **If using App Router:** Leverage Server Components, Streaming, and new features

1. **Root Layout (App Router)**
   ```typescript
   // app/layout.tsx
   import { ThemeProvider } from '@/core/context/theme-context'
   import { Providers } from './providers' // Redux, React Query
   import './globals.css'
   
   export const metadata = {
     title: 'Your App',
     description: 'Description',
   }
   
   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en" suppressHydrationWarning>
         <body>
           <ThemeProvider>
             <Providers>
               {children}
             </Providers>
           </ThemeProvider>
         </body>
       </html>
     )
   }
   ```

2. **Client-Side Providers (App Router)**
   ```typescript
   // app/providers.tsx
   'use client'
   
   import { Provider } from 'react-redux'
   import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
   import { store } from '@/core/state/store'
   
   const queryClient = new QueryClient({
     defaultOptions: {
       queries: {
         staleTime: 60 * 1000, // 1 minute
         refetchOnWindowFocus: false,
       },
     },
   })
   
   export function Providers({ children }: { children: React.ReactNode }) {
     return (
       <Provider store={store}>
         <QueryClientProvider client={queryClient}>
           {children}
         </QueryClientProvider>
       </Provider>
     )
   }
   ```

### 3.2 Rendering Strategy Guidelines

| Page Type | Recommended Strategy | Implementation |
|-----------|---------------------|----------------|
| Static content (About, Blog) | SSG | `generateStaticParams()` (App Router) or `getStaticProps` (Pages) |
| Dynamic content (User profiles) | SSR | Server Components (App Router) or `getServerSideProps` (Pages) |
| Frequently updated (Dashboard) | ISR | `revalidate` option in `fetch()` or `getStaticProps` |
| Client-heavy (Interactive tools) | CSR | Client Components with `'use client'` |

**Example: SSG with ISR (App Router)**
```typescript
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await fetch('https://api.example.com/posts').then(res => res.json())
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetch(`https://api.example.com/posts/${params.slug}`, {
    next: { revalidate: 3600 } // Revalidate every hour
  }).then(res => res.json())
  
  return <article>{/* Render post */}</article>
}
```

### 3.3 API Routes Organization

**App Router Structure:**
```
app/api/
├── auth/
│   ├── login/route.ts
│   ├── logout/route.ts
│   └── register/route.ts
├── users/
│   ├── [id]/route.ts
│   └── route.ts
└── webhooks/
    └── stripe/route.ts
```

**Route Handler Template:**
```typescript
// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
})

export async function GET(request: NextRequest) {
  try {
    const users = await db.user.findMany()
    return NextResponse.json({ users }, { status: 200 })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = userSchema.parse(body)
    
    const user = await db.user.create({ data: validated })
    return NextResponse.json({ user }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}
```

### 3.4 Middleware for Auth & Protection

```typescript
// middleware.ts (root level)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')
  
  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/api/protected/:path*'],
}
```

### 3.5 Performance Optimizations

1. **Image Optimization**
   ```typescript
   import Image from 'next/image'
   
   <Image
     src="/hero.jpg"
     alt="Hero image"
     width={1200}
     height={600}
     priority // For above-the-fold images
     placeholder="blur" // Optional blur-up effect
   />
   ```

2. **Dynamic Imports (Code Splitting)**
   ```typescript
   import dynamic from 'next/dynamic'
   
   const HeavyComponent = dynamic(() => import('@/components/heavy-component'), {
     loading: () => <p>Loading...</p>,
     ssr: false // Disable SSR for client-only components
   })
   ```

3. **Font Optimization**
   ```typescript
   // app/layout.tsx
   import { Inter } from 'next/font/google'
   
   const inter = Inter({ subsets: ['latin'] })
   
   export default function RootLayout({ children }) {
     return (
       <html lang="en" className={inter.className}>
         <body>{children}</body>
       </html>
     )
   }
   ```

---

## Step 4: Testing & Error Handling

### 4.1 Testing Framework Setup

**Recommended Stack:**
- **Unit/Component Tests:** Vitest + React Testing Library
- **E2E Tests:** Playwright
- **Visual Regression:** Chromatic or Percy (optional)

**Installation:**
```bash
pnpm add -D vitest @testing-library/react @testing-library/jest-dom @vitejs/plugin-react
pnpm add -D @playwright/test
pnpm add -D jest-axe # For accessibility testing
```

**Vitest Config:**
```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/', '**/*.config.ts'],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### 4.2 Testing Strategy by Layer

**1. Unit Tests (Utilities, Hooks)**
```typescript
// core/utils/__tests__/format-currency.test.ts
import { describe, it, expect } from 'vitest'
import { formatCurrency } from '../format-currency'

describe('formatCurrency', () => {
  it('formats USD correctly', () => {
    expect(formatCurrency(1234.56, 'USD')).toBe('$1,234.56')
  })
  
  it('handles zero', () => {
    expect(formatCurrency(0, 'USD')).toBe('$0.00')
  })
  
  it('handles negative values', () => {
    expect(formatCurrency(-100, 'USD')).toBe('-$100.00')
  })
})
```

**2. Component Tests**
```typescript
// design-system/atoms/__tests__/primary-button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { PrimaryButton } from '../primary-button'

describe('PrimaryButton', () => {
  it('renders with correct text', () => {
    render(<PrimaryButton>Click me</PrimaryButton>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })
  
  it('calls onClick handler', () => {
    const handleClick = vi.fn()
    render(<PrimaryButton onClick={handleClick}>Click</PrimaryButton>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
  it('is disabled when loading', () => {
    render(<PrimaryButton isLoading>Submit</PrimaryButton>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
```

**3. Integration Tests (API Routes)**
```typescript
// app/api/users/__tests__/route.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { GET, POST } from '../route'
import { NextRequest } from 'next/server'

describe('/api/users', () => {
  it('GET returns users list', async () => {
    const request = new NextRequest('http://localhost:3000/api/users')
    const response = await GET(request)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data.users).toBeInstanceOf(Array)
  })
  
  it('POST creates new user', async () => {
    const request = new NextRequest('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: 'John', email: 'john@example.com' }),
    })
    const response = await POST(request)
    const data = await response.json()
    
    expect(response.status).toBe(201)
    expect(data.user).toHaveProperty('id')
  })
  
  it('POST validates input', async () => {
    const request = new NextRequest('http://localhost:3000/api/users', {
      method: 'POST',
      body: JSON.stringify({ name: '' }), // Invalid
    })
    const response = await POST(request)
    
    expect(response.status).toBe(400)
  })
})
```

**4. E2E Tests (Playwright)**
```typescript
// e2e/auth.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Authentication Flow', () => {
  test('user can log in', async ({ page }) => {
    await page.goto('http://localhost:3000/login')
    
    await page.fill('input[name="email"]', 'test@example.com')
    await page.fill('input[name="password"]', 'password123')
    await page.click('button[type="submit"]')
    
    await expect(page).toHaveURL(/.*dashboard/)
    await expect(page.locator('h1')).toContainText('Dashboard')
  })
  
  test('shows error for invalid credentials', async ({ page }) => {
    await page.goto('http://localhost:3000/login')
    
    await page.fill('input[name="email"]', 'wrong@example.com')
    await page.fill('input[name="password"]', 'wrongpass')
    await page.click('button[type="submit"]')
    
    await expect(page.locator('.error-message')).toBeVisible()
  })
})
```

**5. Accessibility Tests**
```typescript
// design-system/atoms/__tests__/primary-button.a11y.test.tsx
import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import { PrimaryButton } from '../primary-button'

expect.extend(toHaveNoViolations)

describe('PrimaryButton Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<PrimaryButton>Click me</PrimaryButton>)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
  
  it('is keyboard accessible', () => {
    const { getByRole } = render(<PrimaryButton>Click</PrimaryButton>)
    const button = getByRole('button')
    button.focus()
    expect(button).toHaveFocus()
  })
})
```

### 4.3 Error Handling Patterns

**1. Error Boundary (React)**
```typescript
// core/components/error-boundary.tsx
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    // Send to monitoring service (Sentry)
    if (typeof window !== 'undefined' && window.Sentry) {
      window.Sentry.captureException(error, { extra: errorInfo })
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="error-container">
          <h2>Something went wrong</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
```

**2. Global Error Handler (Next.js App Router)**
```typescript
// app/error.tsx
'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global error:', error)
    // Log to monitoring service
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Try again
      </button>
    </div>
  )
}
```

**3. API Error Handling Utility**
```typescript
// core/utils/api-error-handler.ts
export class APIError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public details?: unknown
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export async function handleAPIError(error: unknown): Promise<never> {
  if (error instanceof APIError) {
    throw error
  }
  
  if (error instanceof Error) {
    throw new APIError(500, error.message)
  }
  
  throw new APIError(500, 'An unexpected error occurred')
}

// Usage in API route
export async function GET(request: NextRequest) {
  try {
    const data = await fetchData()
    return NextResponse.json({ data })
  } catch (error) {
    const apiError = error instanceof APIError 
      ? error 
      : new APIError(500, 'Failed to fetch data')
    
    return NextResponse.json(
      { error: apiError.message, details: apiError.details },
      { status: apiError.statusCode }
    )
  }
}
```

### 4.4 Monitoring Setup

**Sentry Integration:**
```typescript
// instrumentation.ts (root level, Next.js 13+)
import * as Sentry from '@sentry/nextjs'

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
      environment: process.env.NODE_ENV,
    })
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
    })
  }
}
```

### 4.5 Testing Checklist

- [ ] Unit tests for all utilities and hooks (>80% coverage)
- [ ] Component tests for all design system components
- [ ] Integration tests for all API routes
- [ ] E2E tests for critical user flows (auth, checkout, forms)
- [ ] Accessibility tests with jest-axe
- [ ] Visual regression tests (optional)
- [ ] Performance tests (Lighthouse CI)
- [ ] Error boundaries in place
- [ ] Monitoring configured (Sentry or alternative)

---

## Step 5: Project Structure & Documentation

### 5.1 Folder Structure (Monorepo-Aligned)

**For Monorepo Projects (Recommended):**
```
/
├── apps/
│   └── web/                    # Next.js application
│       ├── app/                # Next.js App Router
│       │   ├── (auth)/         # Route groups
│       │   │   ├── login/
│       │   │   └── register/
│       │   ├── dashboard/
│       │   ├── api/            # API routes
│       │   ├── layout.tsx
│       │   ├── page.tsx
│       │   ├── providers.tsx
│       │   ├── error.tsx
│       │   └── not-found.tsx
│       ├── design-system/      # UI components (low-level)
│       │   ├── atoms/
│       │   ├── molecules/
│       │   ├── organisms/
│       │   └── theme/
│       ├── partials/           # Feature-specific UI
│       │   ├── auth/
│       │   ├── dashboard/
│       │   └── onboarding/
│       ├── core/               # Business logic (UI-agnostic)
│       │   ├── hooks/
│       │   ├── utils/
│       │   ├── state/          # Redux slices
│       │   ├── context/        # React Context
│       │   └── services/       # API clients
│       ├── public/             # Static assets
│       ├── styles/             # Global CSS
│       ├── middleware.ts
│       ├── next.config.js
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   ├── shared/                 # Shared types, constants
│   │   ├── types/
│   │   ├── constants/
│   │   └── utils/
│   ├── ui/                     # Shared UI library (optional)
│   └── config/                 # Shared configs (ESLint, TS)
│
├── docs/
│   ├── architecture.md
│   ├── state-management.md
│   ├── testing-strategy.md
│   └── deployment.md
│
├── scripts/                    # Build, deploy, migration scripts
├── .github/workflows/          # CI/CD pipelines
├── pnpm-workspace.yaml
├── package.json
└── README.md
```

**For Standalone Projects:**
```
/
├── src/
│   ├── app/                    # Next.js routes
│   ├── components/
│   │   ├── ui/                 # Shadcn/ui atoms
│   │   ├── common/             # Shared molecules
│   │   └── features/           # Feature organisms
│   ├── lib/                    # Utilities, API clients
│   ├── hooks/                  # Custom hooks
│   ├── store/                  # Redux store
│   ├── context/                # React Context
│   └── types/                  # TypeScript types
├── public/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
├── docs/
├── next.config.js
├── tailwind.config.ts
├── vitest.config.ts
├── playwright.config.ts
└── package.json
```

### 5.2 File Naming Conventions

**Strict Rules (from user_rules):**
1. **Kebab-case for files:** `user-profile-card.tsx`, `auth-middleware.ts`
2. **PascalCase for components:** `UserProfileCard`, `AuthMiddleware`
3. **Next.js reserved files:** Keep exact names (`page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx`, `not-found.tsx`)
4. **Test files:** `component-name.test.tsx`, `component-name.a11y.test.tsx`
5. **Max 500 lines per file** - refactor if exceeded

**Examples:**
```
✅ design-system/atoms/primary-button.tsx (exports PrimaryButton)
✅ core/hooks/use-auth.ts (exports useAuth)
✅ app/dashboard/page.tsx (Next.js reserved)
✅ partials/auth/login-form.tsx (exports LoginForm)

❌ design-system/atoms/PrimaryButton.tsx (wrong casing)
❌ core/hooks/useAuth.ts (wrong casing)
❌ app/dashboard/Dashboard.tsx (should be page.tsx)
```

### 5.3 Documentation Requirements

**README.md Template:**
```markdown
# Project Name

> Brief description of the project

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build](https://github.com/user/repo/workflows/CI/badge.svg)
![Coverage](https://img.shields.io/codecov/c/github/user/repo)

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Shadcn/ui
- **State:** Redux Toolkit + React Context
- **Testing:** Vitest + Playwright
- **Package Manager:** pnpm
- **Deployment:** Vercel / Railway

## 📦 Installation

\`\`\`bash
# Clone repository
git clone https://github.com/user/repo.git
cd repo

# Install dependencies (use pnpm)
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys
\`\`\`

## 🏃 Running Locally

\`\`\`bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run tests
pnpm test
pnpm test:e2e
\`\`\`

## 🏗️ Project Structure

See [Architecture Documentation](./docs/architecture.md) for detailed explanation.

\`\`\`
apps/web/
├── app/          # Next.js routes
├── design-system/ # UI components
├── core/         # Business logic
└── partials/     # Feature UI
\`\`\`

## 🧪 Testing

- **Unit Tests:** \`pnpm test\` (>80% coverage required)
- **E2E Tests:** \`pnpm test:e2e\`
- **Coverage:** \`pnpm test:coverage\`

See [Testing Strategy](./docs/testing-strategy.md)

## 🚢 Deployment

Automatic deployment via GitHub Actions:
- **Staging:** Push to \`develop\` branch
- **Production:** Push to \`main\` branch

See [Deployment Guide](./docs/deployment.md)

## 📊 Monitoring

- **Errors:** Sentry (https://sentry.io/project)
- **Analytics:** Vercel Analytics
- **Performance:** Lighthouse CI

## 🤝 Contributing

1. Create feature branch: \`git checkout -b feat/amazing-feature\`
2. Commit changes: \`git commit -m 'feat: add amazing feature'\`
3. Push branch: \`git push origin feat/amazing-feature\`
4. Open Pull Request

Follow [Conventional Commits](https://www.conventionalcommits.org/)

## 📝 License

MIT License - see [LICENSE](./LICENSE)
\`\`\`

### 5.4 Additional Documentation Files

**1. Architecture Documentation (`docs/architecture.md`)**
```markdown
# Architecture Overview

## System Design

[Include Mermaid diagram or image]

## Data Flow

1. User interacts with UI (design-system/partials)
2. Action dispatched to Redux or API call via service
3. State updated or data fetched
4. UI re-renders with new data

## Key Decisions

- **Why Redux?** Complex state with frequent updates across components
- **Why Context for Theme?** Simple toggle, infrequent updates
- **Why App Router?** Server Components, better performance
\`\`\`

**2. State Management (`docs/state-management.md`)**
```markdown
# State Management Guide

## Redux Slices

- \`user-slice\`: Authentication, user profile
- \`dashboard-slice\`: Dashboard data, filters

## Context Providers

- \`ThemeContext\`: Light/dark mode
- \`AuthContext\`: Authentication state (alternative to Redux)

## When to Use What

| State Type | Solution | Example |
|------------|----------|---------|
| Global app state | Redux | User, auth |
| UI state | Local state | Modal open/close |
| Server data | React Query | API responses |
| Theme | Context | Light/dark mode |
\`\`\`

**3. Testing Strategy (`docs/testing-strategy.md`)**
```markdown
# Testing Strategy

## Coverage Requirements

- Unit tests: >80%
- Integration tests: All API routes
- E2E tests: Critical user flows

## Running Tests

\`\`\`bash
pnpm test              # Unit tests
pnpm test:coverage     # With coverage
pnpm test:e2e          # E2E tests
\`\`\`

## Writing Tests

See examples in \`design-system/atoms/__tests__/\`
\`\`\`

### 5.5 Environment Variables

**`.env.example` Template:**
```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# Database (if applicable)
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Authentication
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000

# API Keys
NEXT_PUBLIC_API_KEY=your-api-key

# Monitoring
SENTRY_DSN=your-sentry-dsn
NEXT_PUBLIC_SENTRY_DSN=your-public-sentry-dsn

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

**Security Note:**
- Never commit `.env.local` or `.env.production`
- Always provide `.env.example` with dummy values
- Document required variables in README

## Step 6: CI/CD & Commit Guidelines

### 6.1 CI/CD Pipeline Setup

**GitHub Actions Workflow (`.github/workflows/ci.yml`):**
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint-and-test:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Run linter
        run: pnpm lint
      
      - name: Type check
        run: pnpm type-check
      
      - name: Run unit tests
        run: pnpm test:coverage
      
      - name: Upload coverage to Codecov
        uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
      
      - name: Build application
        run: pnpm build
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
  
  e2e-tests:
    runs-on: ubuntu-latest
    needs: lint-and-test
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Install Playwright browsers
        run: pnpm exec playwright install --with-deps
      
      - name: Run E2E tests
        run: pnpm test:e2e
      
      - name: Upload test results
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: playwright-report
          path: playwright-report/
  
  deploy-staging:
    runs-on: ubuntu-latest
    needs: [lint-and-test, e2e-tests]
    if: github.ref == 'refs/heads/develop'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Deploy to Vercel (Staging)
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}
  
  deploy-production:
    runs-on: ubuntu-latest
    needs: [lint-and-test, e2e-tests]
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Deploy to Vercel (Production)
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
          scope: ${{ secrets.VERCEL_ORG_ID }}
```

**Alternative: Railway Deployment**
```yaml
  deploy-railway:
    runs-on: ubuntu-latest
    needs: [lint-and-test, e2e-tests]
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Install Railway CLI
        run: npm install -g @railway/cli
      
      - name: Deploy to Railway
        run: railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```

### 6.2 Package.json Scripts

**Required Scripts:**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "type-check": "tsc --noEmit",
    "format": "prettier --write \"**/*.{ts,tsx,md,json}\"",
    "test": "vitest",
    "test:watch": "vitest --watch",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "prepare": "husky install"
  }
}
```

### 6.3 Pre-commit Hooks (Husky)

**Setup:**
```bash
pnpm add -D husky lint-staged
pnpm exec husky install
pnpm exec husky add .husky/pre-commit "pnpm lint-staged"
```

**`.husky/pre-commit`:**
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
```

**`package.json` (lint-staged config):**
```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "vitest related --run"
    ],
    "*.{md,json}": [
      "prettier --write"
    ]
  }
}
```

### 6.4 Commit Message Guidelines

**Conventional Commits Format:**
```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature/bug change)
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies, tooling
- `ci`: CI/CD configuration changes
- `revert`: Revert previous commit

**Examples:**
```bash
# Good commits
git commit -m "feat(auth): add OAuth login with Google"
git commit -m "fix(dashboard): resolve chart rendering issue on mobile"
git commit -m "docs: update README with deployment instructions"
git commit -m "refactor(components): extract button variants to separate file"
git commit -m "test(api): add integration tests for user endpoints"

# Bad commits (avoid)
git commit -m "fixed stuff"
git commit -m "WIP"
git commit -m "updates"
```

**Commit Message Linting (Optional):**
```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

**`commitlint.config.js`:**
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore', 'ci', 'revert']
    ],
    'subject-case': [2, 'always', 'sentence-case']
  }
}
```

### 6.5 Branch Strategy

**Git Flow:**
```
main          # Production-ready code
├── develop   # Integration branch for features
├── feat/*    # Feature branches (feat/user-auth)
├── fix/*     # Bug fix branches (fix/login-error)
└── hotfix/*  # Emergency production fixes
```

**Workflow:**
1. Create feature branch from `develop`: `git checkout -b feat/amazing-feature`
2. Make changes and commit with conventional commits
3. Push and create Pull Request to `develop`
4. CI runs tests automatically
5. After review and approval, merge to `develop`
6. Periodically merge `develop` to `main` for production release

### 6.6 Deployment Checklist

**Before Deploying:**
- [ ] All tests passing (unit, integration, E2E)
- [ ] Linting and type-checking clean
- [ ] Code coverage >80%
- [ ] Environment variables configured
- [ ] Database migrations applied (if applicable)
- [ ] Performance tested (Lighthouse score >90)
- [ ] Accessibility tested (WCAG AA compliance)
- [ ] Security scan completed (no critical vulnerabilities)
- [ ] Monitoring configured (Sentry, Analytics)
- [ ] Rollback plan documented

## Step 7: Apply Fluency Framework (4Ds)

### 7.1 Delegation (What AI Can/Cannot Do)

**✅ AI Can Automate:**
- Component refactoring (atoms, molecules, organisms)
- Test scaffolding and boilerplate
- TypeScript type generation
- Code formatting and linting fixes
- Documentation generation
- Repetitive code patterns (CRUD operations)
- Migration scripts (e.g., Pages Router → App Router)
- ESLint/Prettier configuration

**❌ Requires Human Judgment:**
- Architecture decisions (Redux vs Context, SSR vs CSR)
- API integration strategy
- Security implementation (auth, permissions)
- Performance optimization trade-offs
- UX/UI design decisions
- Business logic validation
- Database schema design
- Third-party service selection

**Delegation Strategy:**
1. **High-Risk Tasks:** Human reviews AI output before implementation
2. **Medium-Risk Tasks:** AI implements, human validates with tests
3. **Low-Risk Tasks:** AI implements autonomously (formatting, docs)

### 7.2 Description (Clear Communication with AI)

**❌ Vague Prompts:**
- "Fix the app"
- "Make it better"
- "Refactor everything"

**✅ Effective Prompts:**
```
"Analyze this Next.js project and:
1. Identify all existing pages and their functionality
2. Audit components for atomic design compliance
3. Suggest refactoring for components >500 lines
4. Generate unit tests for utility functions in /core/utils/
5. Ensure all components follow kebab-case naming
6. Preserve all existing functionality"
```

**Prompt Template:**
```
Context: [Monorepo Next.js app with Redux, Tailwind, Shadcn/ui]
Goal: [Refactor authentication flow to use NextAuth.js]
Constraints: [Must maintain existing user sessions, no breaking changes]
Success Criteria: [All tests pass, session migration script provided]
Deliverables: [Updated auth components, migration guide, tests]
```

### 7.3 Discernment (Critical Evaluation)

**Checklist for AI Outputs:**

**Functional Correctness:**
- [ ] Does the code compile without errors?
- [ ] Are all imports and dependencies correct?
- [ ] Does it handle edge cases (null, undefined, empty arrays)?
- [ ] Are error states properly handled?

**Next.js Best Practices:**
- [ ] Correct use of Server vs Client Components?
- [ ] Proper data fetching strategy (SSR/SSG/ISR/CSR)?
- [ ] Image optimization with `next/image`?
- [ ] Font optimization with `next/font`?
- [ ] Metadata API usage for SEO?

**Type Safety:**
- [ ] No `any` types (unless explicitly justified)?
- [ ] All props interfaces defined?
- [ ] API responses typed?
- [ ] Redux actions and state typed?

**Performance:**
- [ ] No unnecessary re-renders?
- [ ] Proper memoization (useMemo, useCallback)?
- [ ] Code splitting for large components?
- [ ] Lazy loading for below-fold content?

**Accessibility:**
- [ ] Semantic HTML elements?
- [ ] ARIA labels where needed?
- [ ] Keyboard navigation support?
- [ ] Color contrast compliance?

**Security:**
- [ ] No hardcoded secrets or API keys?
- [ ] Input validation and sanitization?
- [ ] CSRF protection for forms?
- [ ] XSS prevention?

### 7.4 Diligence (Responsible Usage)

**Verification Process:**

1. **Code Review**
   - Read AI-generated code line by line
   - Understand the logic, don't blindly trust
   - Check for anti-patterns or code smells

2. **Testing**
   ```bash
   # Run all tests
   pnpm test
   pnpm test:e2e
   
   # Check coverage
   pnpm test:coverage
   
   # Type check
   pnpm type-check
   
   # Lint
   pnpm lint
   ```

3. **Manual Testing**
   - Test all affected user flows manually
   - Check on multiple browsers (Chrome, Firefox, Safari)
   - Test on mobile devices (responsive design)
   - Verify accessibility with screen reader

4. **Performance Testing**
   ```bash
   # Build and analyze bundle
   pnpm build
   pnpm analyze # If bundle analyzer configured
   
   # Run Lighthouse
   lighthouse http://localhost:3000 --view
   ```

5. **Rollback Plan**
   - Keep original code until new code is verified
   - Tag commits before major changes
   - Document rollback steps
   - Have feature flags for gradual rollout

**Safety Checklist:**
- [ ] All existing tests still pass
- [ ] No new console errors or warnings
- [ ] No performance regressions (Lighthouse score)
- [ ] No accessibility regressions (axe violations)
- [ ] No security vulnerabilities introduced
- [ ] Documentation updated
- [ ] Team reviewed and approved

### 7.5 Iterative Refinement

**Feedback Loop:**
1. AI generates initial implementation
2. Human reviews and identifies issues
3. Provide specific feedback to AI
4. AI refines implementation
5. Repeat until satisfactory

**Example Refinement:**
```
Initial AI Output: Basic button component

Feedback: "Add loading state, disabled state, and variants (solid, outline, ghost).
Ensure accessibility with ARIA labels. Add Framer Motion animations."

Refined Output: Full-featured button with all requirements

Final Feedback: "Perfect, now generate unit tests and Storybook stories."
```

---

## 🎯 Final Checklist

### Pre-Refactoring
- [ ] Complete analysis report (Step 0)
- [ ] Backup current codebase (git tag)
- [ ] Document existing functionality
- [ ] Establish rollback criteria

### During Refactoring
- [ ] Follow incremental approach (atoms → molecules → organisms)
- [ ] Write tests before refactoring
- [ ] Keep original components until migration complete
- [ ] Run tests after each change

### Post-Refactoring
- [ ] All tests passing (>80% coverage)
- [ ] Linting and type-checking clean
- [ ] Performance metrics maintained or improved
- [ ] Accessibility compliance (WCAG AA)
- [ ] Documentation updated
- [ ] Code review completed
- [ ] Deployed to staging for QA
- [ ] Production deployment approved

### Continuous Improvement
- [ ] Monitor error rates (Sentry)
- [ ] Track performance metrics (Lighthouse CI)
- [ ] Gather user feedback
- [ ] Iterate based on data

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)


