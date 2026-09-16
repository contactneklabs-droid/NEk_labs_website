import { test, expect } from '@playwright/test';

test.describe('NEK Labs Homepage', () => {
  test('should load the homepage and display the hero section', async ({ page }) => {
    // Navigate to the root URL
    await page.goto('/');

    // Check if the title is correct
    await expect(page).toHaveTitle(/NEk LABS/i);

    // Check if the brand name is visible in the navigation
    await expect(page.getByText('NEk. Labs', { exact: true })).toBeVisible();

    // Check if the primary CTA exists
    const bookMeetLink = page.getByRole('link', { name: /BOOK YOUR MEET/i }).first();
    await expect(bookMeetLink).toBeVisible();
  });

  test('mobile menu should open and close', async ({ page, isMobile }) => {
    // Only run on mobile viewport
    if (!isMobile) return;

    await page.goto('/');

    // Find and click the index/menu button
    const menuButton = page.getByRole('button', { name: /Open Menu/i });
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Check if the mobile navigation dialog is open
    const dialog = page.getByRole('dialog', { name: /Mobile Navigation/i });
    await expect(dialog).toBeVisible();

    // Close the menu
    const closeButton = page.getByRole('button', { name: /Close Menu/i });
    await closeButton.click();

    // Verify it closed
    await expect(dialog).not.toBeVisible();
  });
});
