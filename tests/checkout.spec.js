import { test, expect } from '../fixtures/pages.fixture';
import accountInfo from '../test-data/account-info.json';
import cardInfo from '../test-data/card-info.json';

test ('place order - register while checkout', 
    async({ page, homePage, productPage, cartPage, signInPage, checkoutPage, paymentPage }) => {

        await homePage.navigateTo('Products');
        await productPage.hoverAndAddToCartProductByIndex(0);
        await expect(productPage.cartModal).toBeVisible();
        await productPage.viewCart();

        await expect(page).toHaveURL('/view_cart');
        await cartPage.proceedToCheckout();
        await expect(cartPage.checkoutModal).toBeVisible();
        await cartPage.registerOrLogin();

        await signInPage.login(accountInfo.email, accountInfo.password);
        await expect(homePage.loggedInUserLink).toContainText(`Logged in as ${accountInfo.name}`);
        await homePage.navigateTo('Cart');
        await cartPage.proceedToCheckout();

        await expect(page).toHaveURL('/checkout');
        await checkoutPage.addComment('Please make sure packaging is good');
        await checkoutPage.placeOrder();

        await expect(page).toHaveURL('/payment');
        await paymentPage.enterCardDetails(cardInfo);
        await paymentPage.payAndConfirmOrder();

})