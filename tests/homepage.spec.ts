
import { test, expect } from '@playwright/test';

test('homepage title contains Example Domain', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('homepage displays its main content', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(
    page.getByText('This domain is for use in documentation examples', {
      exact: false,
    })
  ).toBeVisible();
});

test('homepage has an information link', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(
    page.getByRole('link', { name: /Learn more/i })
  ).toBeVisible();
});
