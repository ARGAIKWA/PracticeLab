
/**const { test } = require('@playwright/test');

test('Open URL', async ({ page }) => {
  await page.goto('https://speedwaytechlabs.com/?lab=pw-role');
});
*/

import { test, expect } from '@playwright/test';

test('getByRole() — accessible names', async ({ page, context, browser, request }) => {
 
  //go to url
  await page.goto('https://speedwaytechlabs.com/?lab=pw-role');

  // checkbox selection and validation using assertions
  await page.getByRole('checkbox', { name: 'Send practice tips' }).check();

  await expect(page.getByRole('checkbox', { name: 'Send practice tips' })).toBeChecked();
  //button click 
  await page.getByRole('button', { name: 'Enrol now', exact: true }).click();

  await expect(page.getByTestId('practice-result')).toHaveText('Enrolment selected');

  await page.getByRole('button', { name: 'Save progress', exact: true }).click();

  await expect(page.getByTestId('practice-result')).toHaveText('Progress saved');
});