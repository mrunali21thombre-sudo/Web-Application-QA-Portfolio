import { test, expect } from '@playwright/test';

test('homepage title contains Example Domain', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('homepage displays its main heading', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Example Domain' })
  ).toBeVisible();
});

test('homepage has an information link', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('link', { name: /More information/i })).toBeVisible();
});
