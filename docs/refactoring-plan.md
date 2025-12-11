# Web3 Dashboard Refactoring Plan

**Date:** December 11, 2024  
**Status:** 🚧 In Progress  
**Git Tag:** `pre-refactor-v1` ✅ Created

---

## Phase 1: File Structure & Naming (High Priority)

### 1.1 Rename Files to kebab-case ✅ Ready

**Files to Rename:**
```bash
# Current → Target
src/app/Dashboard.tsx → src/app/dashboard.tsx
src/components/web3/DashboardTabs.tsx → src/partials/web3/dashboard-tabs/dashboard-tabs.tsx
```

**Impact:**
- Update imports in `page.tsx`
- Move `DashboardTabs` to correct location (`partials/` not `components/`)
- Update any barrel exports

**Estimated Time:** 30 minutes

---

## Phase 2: Error Handling (High Priority)

### 2.1 Add Error Boundary Component

**Create:**
```
src/core/components/error-boundary.tsx
```

**Features:**
- Catch React errors
- Display user-friendly error UI
- Log to console (future: Sentry)
- Reset functionality

**Estimated Time:** 1 hour

### 2.2 Add Global Error Handler

**Create:**
```
src/app/error.tsx
```

**Features:**
- Next.js App Router error handling
- User-friendly error page
- Reset button

**Estimated Time:** 30 minutes

---

## Phase 3: Testing (High Priority)

### 3.1 Add Missing Component Tests

**Components Without Tests:**
1. `dashboard-header.tsx` - Test rendering, search interaction
2. `stats-card.tsx` - Test props, progress bar, animations
3. `token-table.tsx` - Test data rendering, sorting
4. `animated-butterfly.tsx` - Test animation, hover states
5. `dashboard-tabs.tsx` - Test tab switching, content display
6. All `components/ui/*` - Test basic rendering and interactions

**Estimated Time:** 6 hours

### 3.2 Add Accessibility Tests

**Setup:**
```bash
pnpm add -D jest-axe
```

**Add to:**
- All existing tests
- New component tests

**Estimated Time:** 2 hours

### 3.3 Add E2E Tests (Playwright)

**Setup:**
```bash
pnpm add -D @playwright/test
```

**Test Scenarios:**
1. Homepage loads correctly
2. Search bar interaction
3. Tab switching (NFTs ↔ Tokens)
4. Stats cards display
5. NFT grid renders
6. Token table renders

**Estimated Time:** 3 hours

---

## Phase 4: CI/CD Improvements (Medium Priority)

### 4.1 Enhance CI Workflow

**Add to `.github/workflows/ci.yml`:**
- Type checking (`pnpm type-check`)
- Coverage thresholds (>80%)
- E2E tests
- Build verification

**Estimated Time:** 1 hour

### 4.2 Add Pre-commit Hooks

**Setup:**
```bash
pnpm add -D husky lint-staged prettier
pnpm exec husky install
```

**Configure:**
- Lint staged files
- Format with Prettier
- Run related tests
- Type check

**Estimated Time:** 1 hour

---

## Phase 5: Performance Optimization (Medium Priority)

### 5.1 Use next/image for Images

**Update:**
- Replace `<img>` tags with `<Image>` component
- Add proper width/height
- Enable optimization

**Files to Update:**
- `nft-grid.tsx` (NFT images)
- Any other image usage

**Estimated Time:** 1 hour

### 5.2 Add Bundle Analyzer

**Setup:**
```bash
pnpm add -D @next/bundle-analyzer
```

**Configure:**
- Add to `next.config.js`
- Add npm script: `pnpm analyze`

**Estimated Time:** 30 minutes

---

## Phase 6: Documentation (Low Priority)

### 6.1 Add Component Documentation

**Create:**
```
docs/components/
├── dashboard-header.md
├── stats-card.md
├── nft-grid.md
├── token-table.md
└── ...
```

**Include:**
- Props documentation
- Usage examples
- Screenshots

**Estimated Time:** 3 hours

### 6.2 Update README

**Add:**
- Testing instructions
- CI/CD badges
- Contributing guidelines
- Architecture diagram

**Estimated Time:** 1 hour

---

## Execution Order

### Today (High Priority)
1. ✅ Create git tag `pre-refactor-v1`
2. 🔧 Rename files to kebab-case
3. 🔧 Move files to correct locations
4. 🛡️ Add Error Boundary
5. 🛡️ Add global error handler

### This Week (High Priority)
6. 🧪 Add missing component tests
7. 🧪 Add accessibility tests
8. 🧪 Add E2E tests with Playwright

### Next Week (Medium Priority)
9. ⚙️ Enhance CI/CD workflow
10. ⚙️ Add pre-commit hooks
11. 🎨 Use next/image for all images
12. 📊 Add bundle analyzer

### Later (Low Priority)
13. 📚 Add component documentation
14. 📚 Update README

---

## File Changes Summary

### Files to Rename
- `src/app/Dashboard.tsx` → `src/app/dashboard.tsx`

### Files to Move
- `src/components/web3/DashboardTabs.tsx` → `src/partials/web3/dashboard-tabs/dashboard-tabs.tsx`

### Files to Create
- `src/core/components/error-boundary.tsx`
- `src/app/error.tsx`
- `src/app/not-found.tsx`
- `src/partials/web3/dashboard-header/dashboard-header.test.tsx`
- `src/partials/web3/stats-card/stats-card.test.tsx`
- `src/partials/web3/token-table/token-table.test.tsx`
- `src/partials/web3/animated-butterfly/animated-butterfly.test.tsx`
- `src/partials/web3/dashboard-tabs/dashboard-tabs.test.tsx`
- `src/components/ui/button.test.tsx`
- `src/components/ui/card.test.tsx`
- `src/components/ui/input.test.tsx`
- `src/components/ui/tabs.test.tsx`
- `e2e/dashboard.spec.ts`
- `playwright.config.ts`
- `.husky/pre-commit`
- `docs/components/*.md`

### Files to Update
- `src/app/page.tsx` (import path)
- `src/partials/web3/index.ts` (barrel export)
- `package.json` (scripts, dependencies)
- `.github/workflows/ci.yml` (CI improvements)
- `next.config.js` (bundle analyzer)
- `README.md` (documentation)
- `vitest.setup.ts` (jest-axe setup)

---

## Testing Strategy

### Current Coverage: ~10%
### Target Coverage: >80%

**Coverage Breakdown:**
- Components: 80%+
- Utilities: 90%+
- Services: 80%+

**Test Types:**
- Unit Tests: Vitest + Testing Library
- E2E Tests: Playwright
- Accessibility: jest-axe
- Visual Regression: (Future) Chromatic/Percy

---

## Rollback Plan

If issues arise:

1. **Immediate Rollback**
   ```bash
   git reset --hard pre-refactor-v1
   ```

2. **Partial Rollback**
   ```bash
   git revert <commit-hash>
   ```

3. **File-Specific Rollback**
   ```bash
   git checkout pre-refactor-v1 -- <file-path>
   ```

---

## Success Criteria

- ✅ All files follow kebab-case naming
- ✅ All files in correct locations
- ✅ Test coverage >80%
- ✅ All tests passing
- ✅ CI/CD enhanced with type checking
- ✅ Pre-commit hooks working
- ✅ Error boundaries in place
- ✅ No broken functionality
- ✅ Build succeeds
- ✅ Deployment works

---

## Progress Tracking

- [x] Analysis complete
- [x] Git tag created
- [ ] Phase 1: File structure (0/2)
- [ ] Phase 2: Error handling (0/2)
- [ ] Phase 3: Testing (0/3)
- [ ] Phase 4: CI/CD (0/2)
- [ ] Phase 5: Performance (0/2)
- [ ] Phase 6: Documentation (0/2)

**Overall Progress:** 2/15 (13%)

---

**Next Action:** Start Phase 1 - Rename and move files
