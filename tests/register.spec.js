import { test, expect } from '../fixtures/pages.fixture';
import accountInfo from '../test-data/account-info.json';
import addressInfo from '../test-data/address-info.json';

test('test', async ({ page, signInPage, homePage }) => {
  await homePage.navigateToSignupLogin();
  // await signInPage.signIn(accountInfo.name, `${Date.now()}accountInfo.email`);
  await signInPage.signIn(accountInfo.name, accountInfo.email);
  await signInPage.enterAccountDetails(accountInfo,addressInfo);
  await expect(page.getByText('Congratulations! Your new')).toBeVisible();
  await signInPage.continueAfterAccountCreation();
  await expect(page.getByRole('link', { name: ' Logout' })).toBeVisible();
});