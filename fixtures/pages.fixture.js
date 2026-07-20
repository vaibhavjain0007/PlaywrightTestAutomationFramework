import { test as base, expect } from '@playwright/test';
import SignInPage from '../pages/SignInPage';
import HomePage from '../pages/HomePage';
import ContactUsPage from '../pages/ContactUsPage';
import TestCasesPage from '../pages/TestCasesPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import PaymentPage from '../pages/PaymentPage';

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
        },

    contactUsPage:
        async ({ page }, use) => {
            const contactUsPage = new ContactUsPage(page);
            await use(contactUsPage);
        },

    testCasesPage:
        async ({ page }, use) => {
            const testCasesPage = new TestCasesPage(page);
            await use(testCasesPage);
        },

    productPage:
        async ({ page }, use) => {
            const productPage = new ProductPage(page);
            await use(productPage);
        },

    cartPage:
        async ({ page }, use) => {
            const cartPage = new CartPage(page);
            await use(cartPage);
        },

    checkoutPage:
        async ({ page }, use) => {
            const checkoutPage = new CheckoutPage(page);
            await use(checkoutPage);
        },

    paymentPage:
        async({ page }, use) => {
            const paymentPage = new PaymentPage(page);
            await use(paymentPage);
        }
});

export { expect };