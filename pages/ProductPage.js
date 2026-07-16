import { expect } from '@playwright/test';

export default class ProductPage {

    constructor (page) {
        this.page = page;

        this.productSearchInput = page.getByRole('textbox', { name: 'search'});
        this.searchedProductTitle = page.locator('.title');
        this.productInfo = page.locator('.single-products');

        this.productList = page.locator('.features_items');
        
        this.productDetails = page.locator('.product-information');

        this.cartModal = page.locator('#cartModal');

    }

    async viewProductDetails(productName) {
        await this.page.locator(`.product-image-wrapper:has-text('${productName}')`)
            .getByRole("link", { name: "View Product" }).click();
    }

    async searchProduct(productName) {
        await this.productSearchInput.fill(productName);
        await this.productSearchInput.press('Tab');
        await this.page.keyboard.press('Enter');
    }

    /**************** Not sure why this one don't work ****************/
    // async hoverAndAddToCartProductByIndex(index) {
    //     const product = this.productInfo.nth(index);
    //     // await expect(product.locator('.product-overlay')).toBeVisible();
    //     await product.hover();
        

    //     await expect(product.locator('.product-overlay')).toBeVisible();
    //     // await product
    //     //     .locator('.product-overlay .add-to-cart')
    //     //     .click({ trial: true });
    //     await product
    //         .locator('.product-overlay')
    //         .getByRole('link', { name: 'Add to cart' })
    //         .click();
    // }

    async continueShopping() {
        await this.cartModal
            .getByRole('button', { name: 'Continue Shopping'}).click();
    }

    async viewCart() {
        await this.cartModal
            .getByRole('link', { name: 'View Cart'}).click();
    }

    async hoverAndAddToCartProductByIndex(index) {
        const product = this.productInfo.nth(index);

        // await product.scrollIntoViewIfNeeded();
        await product.hover();

        await product.locator('.product-overlay .add-to-cart').click();

        // await expect(addToCart).toBeVisible();

        // await addToCart.click();
    }
}