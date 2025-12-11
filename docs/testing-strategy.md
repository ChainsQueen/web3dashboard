# Testing Strategy

## Overview
This document outlines the testing approach for the Web3 Dashboard project, ensuring high quality and maintainability.

## Coverage Requirements

- **Unit tests:** >80% coverage
- **Integration tests:** All API routes (if applicable)
- **E2E tests:** Critical user flows
- **Accessibility tests:** All interactive components

## Test Types

### 1. Unit Tests
Located in `**/*.test.tsx` files alongside components.

**Tools:**
- Vitest
- React Testing Library
- jest-axe for accessibility

**Coverage:**
- All utility functions
- All custom hooks
- All UI components
- Business logic

### 2. E2E Tests
Located in `/e2e/` directory.

**Tools:**
- Playwright

**Coverage:**
- Homepage load
- Tab switching
- Search functionality
- Responsive design
- Critical user flows

### 3. Accessibility Tests
Located in `**/*.a11y.test.tsx` files.

**Tools:**
- jest-axe
- @axe-core/react

**Coverage:**
- All interactive components
- Form elements
- Navigation elements
- WCAG AA compliance

## Running Tests

```bash
# Unit tests
pnpm test                  # Watch mode
pnpm test:coverage         # With coverage report

# E2E tests
pnpm test:e2e             # Headless mode
pnpm test:e2e:ui          # UI mode

# All tests
pnpm test:ci              # CI mode (no watch)
```

## Writing Tests

### Unit Test Example
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MyComponent } from './my-component';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Accessibility Test Example
```typescript
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { MyComponent } from './my-component';

describe('MyComponent Accessibility', () => {
  it('has no accessibility violations', async () => {
    const { container } = render(<MyComponent />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### E2E Test Example
```typescript
import { test, expect } from '@playwright/test';

test('user can navigate', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Dashboard/);
});
```

## Best Practices

1. **Test behavior, not implementation**
2. **Use semantic queries** (getByRole, getByLabelText)
3. **Keep tests simple and focused**
4. **Mock external dependencies**
5. **Test accessibility** for all interactive elements
6. **Run tests before committing** (enforced by Husky)

## CI/CD Integration

Tests run automatically on:
- Every commit (via Husky pre-commit hook)
- Every pull request
- Every push to main/develop branches

## Coverage Thresholds

Configured in `vitest.config.ts`:
```typescript
coverage: {
  thresholds: {
    lines: 80,
    functions: 80,
    branches: 80,
    statements: 80,
  },
}
```

## Troubleshooting

### Tests failing locally
```bash
# Clear cache
pnpm test --clearCache

# Update snapshots
pnpm test -u
```

### E2E tests failing
```bash
# Update Playwright browsers
pnpm exec playwright install

# Run in debug mode
pnpm test:e2e:ui
```

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [jest-axe Documentation](https://github.com/nickcolley/jest-axe)
