import { test as base, expect } from '@playwright/test';
import SignInPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';

export const test = base.extend({

    signInPage: 
        async ({ page }, use) => {
            const signInPage = new SignInPage(page);
            await use(signInPage);
    },

    homePage:
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await use(homePage);
        }
});

export { expect };