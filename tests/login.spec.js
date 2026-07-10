import { test, expect } from '../fixtures/pages.fixture.js';
import accountInfo from '../test-data/account-info.json';

test.describe('Login Tests', () => {

    test ('verify successful login with valid credentials', 
        async ({ page, signInPage, homePage }) => {

            await homePage.navigateTo('Login');
            await signInPage.login(accountInfo.email, accountInfo.password);
            await expect(homePage.loggedInUserLink).toContainText(`Logged in as ${accountInfo.name}`);
            await expect(homePage.deleteAccountLink).toBeVisible();
            await homePage.deleteAccount();
            await expect(homePage.accountDeletedText).toBeVisible();
        }
    );

    test ('verify unsuccessful login with invalid credentials', 
        async ({ page, signInPage, homePage }) => {
            await homePage.navigateTo('Login');
            await signInPage.login('vj@gmail.com', 'invalidpassword');
            await expect(signInPage.incorrectEmailOrPasswordText)
                .toHaveText('Your email or password is incorrect!');
        }
    );

    test ('verify logout after login', async ({ page, signInPage, homePage }) => {
        await homePage.navigateTo('Login');
        await signInPage.login(accountInfo.email, accountInfo.password);
        await expect(homePage.loggedInUserLink).toContainText(`Logged in as ${accountInfo.name}`);
        await homePage.logout();
        await expect(homePage.signupLoginLink).toBeVisible();
    });
});