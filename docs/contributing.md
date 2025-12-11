# Contributing Guidelines

Thank you for contributing to the Web3 Dashboard project! This document provides guidelines for contributing.

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm 10.12.4+
- Git

### Setup
```bash
# Clone the repository
git clone <repository-url>
cd web3dashboard

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

## Development Workflow

### 1. Create a Branch
```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feat/your-feature-name

# Or for bug fixes
git checkout -b fix/bug-description
```

### 2. Make Changes
- Follow the coding standards (see below)
- Write tests for new features
- Update documentation as needed
- Keep commits focused and atomic

### 3. Test Your Changes
```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Type check
pnpm type-check

# Lint
pnpm lint
```

### 4. Commit Your Changes
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Format: <type>(<scope>): <subject>

# Examples:
git commit -m "feat(dashboard): add token filtering"
git commit -m "fix(stats): correct percentage calculation"
git commit -m "docs: update README with new features"
git commit -m "test(button): add accessibility tests"
git commit -m "refactor(hooks): extract useSearch logic"
```

**Commit Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Build process, dependencies
- `ci`: CI/CD configuration changes

### 5. Push and Create Pull Request
```bash
# Push your branch
git push origin feat/your-feature-name

# Create PR on GitHub
# - Target: develop branch
# - Fill out PR template
# - Request review
```

## Coding Standards

### File Naming
- Use **kebab-case** for files: `user-profile-card.tsx`
- Use **PascalCase** for components: `UserProfileCard`
- Reserved Next.js files keep their names: `page.tsx`, `layout.tsx`

### File Organization
```
src/
├── app/              # Next.js routes (orchestration only)
├── design-system/    # Low-level UI components
├── partials/         # Feature-specific UI modules
└── core/             # Business logic (UI-agnostic)
    ├── hooks/
    ├── utils/
    └── state/
```

### Component Structure
```typescript
// partials/feature/component-name.tsx
import { ComponentProps } from 'react';

export interface ComponentNameProps {
  // Props definition
}

export function ComponentName({ prop1, prop2 }: ComponentNameProps) {
  // Component logic
  return (
    // JSX
  );
}
```

### TypeScript
- Enable strict mode
- No `any` types (use `unknown` if needed)
- Define interfaces for all props
- Type all function returns

### Testing
- Write tests for all new features
- Maintain >80% coverage
- Include accessibility tests
- Test edge cases

### Styling
- Use Tailwind CSS classes
- Follow existing patterns
- Ensure responsive design
- Test on multiple screen sizes

## Code Review Process

### For Contributors
1. Ensure all tests pass
2. Update documentation
3. Request review from maintainers
4. Address review feedback promptly

### For Reviewers
- Check code quality and standards
- Verify tests are comprehensive
- Test functionality locally
- Provide constructive feedback

## Pull Request Checklist

Before submitting a PR, ensure:

- [ ] Code follows project conventions
- [ ] All tests pass (`pnpm test`)
- [ ] Coverage is maintained (>80%)
- [ ] E2E tests pass (`pnpm test:e2e`)
- [ ] Type checking passes (`pnpm type-check`)
- [ ] Linting passes (`pnpm lint`)
- [ ] Build succeeds (`pnpm build`)
- [ ] Documentation is updated
- [ ] Commit messages follow conventions
- [ ] PR description is clear and complete

## Getting Help

- Check existing issues and discussions
- Read the documentation in `/docs`
- Ask questions in pull requests
- Contact maintainers

## License

By contributing, you agree that your contributions will be licensed under the project's license.

## Thank You!

Your contributions make this project better for everyone. We appreciate your time and effort! 🎉
