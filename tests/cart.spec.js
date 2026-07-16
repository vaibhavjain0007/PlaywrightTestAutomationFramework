import { test, expect } from '../fixtures/pages.fixture';

test.describe ('verify cart page', async() => {

    test ('verify add products in cart', async({ page, homePage, productPage, cartPage }) => {

        await homePage.navigateTo('Products');
        await productPage.hoverAndAddToCartProductByIndex(0);
        await expect(productPage.cartModal).toBeVisible();
        await productPage.continueShopping();

        await productPage.hoverAndAddToCartProductByIndex(1);
        await productPage.viewCart();

        const product = await cartPage.getProductDetails("Blue Top");
        expect(product.price).toContain("500");
        expect(product.quantity).toBe("1");
        expect(product.total).toContain("500");
    });
})