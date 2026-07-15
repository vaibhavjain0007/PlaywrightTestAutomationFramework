import { test, expect } from '../fixtures/pages.fixture.js';

test ('verify product detail page', async ({ page, homePage, productPage }) => {

    await homePage.navigateTo('Products');
    await expect(page).toHaveURL('/products');
    await productPage.viewProductDetails('Blue Top');
    await expect(page).toHaveURL('/product_details/1');
})