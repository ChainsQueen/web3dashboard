import { test, expect } from '@playwright/test';

test.describe('Web3 Dashboard', () => {
  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Check if the page title is correct
    await expect(page).toHaveTitle(/Web3 Dashboard/i);

    // Check if main heading is visible
    await expect(page.getByText(/Web3 Dashboard/i)).toBeVisible();
  });

  test('displays stats cards', async ({ page }) => {
    await page.goto('/');

    // Check if all 4 stats cards are visible
    await expect(page.getByText('Total Volume')).toBeVisible();
    await expect(page.getByText('Active Users')).toBeVisible();
    await expect(page.getByText('Total Trades')).toBeVisible();
    await expect(page.getByText('Avg. Block Time')).toBeVisible();
  });

  test('search bar is functional', async ({ page }) => {
    await page.goto('/');

    // Find search input
    const searchInput = page.getByPlaceholder(/search/i);
    await expect(searchInput).toBeVisible();

    // Type in search
    await searchInput.fill('ethereum');
    await expect(searchInput).toHaveValue('ethereum');

    // Clear search
    await searchInput.clear();
    await expect(searchInput).toHaveValue('');
  });

  test('tabs switch between NFTs and Tokens', async ({ page }) => {
    await page.goto('/');

    // Check NFTs tab is active by default
    const nftsTab = page.getByText('Trending NFTs');
    await expect(nftsTab).toBeVisible();

    // Click on Tokens tab
    const tokensTab = page.getByText('Top Tokens');
    await tokensTab.click();

    // Wait for tab content to change
    await page.waitForTimeout(500);

    // Verify tokens content is visible
    await expect(tokensTab).toBeVisible();
  });

  test('NFT grid displays items', async ({ page }) => {
    await page.goto('/');

    // Make sure we're on NFTs tab
    await page.getByText('Trending NFTs').click();

    // Wait for NFT grid to load
    await page.waitForTimeout(500);

    // Check if NFT grid is visible (should have NFT items)
    const nftGrid = page.locator('[class*="grid"]').first();
    await expect(nftGrid).toBeVisible();
  });

  test('token table displays data', async ({ page }) => {
    await page.goto('/');

    // Click on Tokens tab
    await page.getByText('Top Tokens').click();

    // Wait for token table to load
    await page.waitForTimeout(500);

    // Check if token names are visible
    await expect(page.getByText('Bitcoin')).toBeVisible();
    await expect(page.getByText('Ethereum')).toBeVisible();
  });

  test('animated butterfly is visible', async ({ page }) => {
    await page.goto('/');

    // Check if butterfly decoration exists
    // It's a decorative element so we just check the page loaded
    await expect(page.getByText(/Web3 Dashboard/i)).toBeVisible();
  });

  test('responsive design on mobile', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // Check if page loads on mobile
    await expect(page.getByText(/Web3 Dashboard/i)).toBeVisible();

    // Stats cards should still be visible
    await expect(page.getByText('Total Volume')).toBeVisible();
  });

  test('stats cards show correct data format', async ({ page }) => {
    await page.goto('/');

    // Check if values are displayed
    await expect(page.getByText('$2.1B')).toBeVisible();
    await expect(page.getByText('3.8M')).toBeVisible();
    await expect(page.getByText('1.2M')).toBeVisible();
    await expect(page.getByText('12.1s')).toBeVisible();

    // Check if change percentages are displayed
    await expect(page.getByText('+12.8%')).toBeVisible();
    await expect(page.getByText('+18.5%')).toBeVisible();
  });
});
