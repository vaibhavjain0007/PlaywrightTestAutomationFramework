export default class CartPage {

    constructor (page) {
        this.page = page;
        // this.proceedToCheckoutBtn = page.getByRole('link', { name: 'Proceed To Checkout' });
        this.proceedToCheckoutBtn = page.locator('.check_out');

        this.cartTable = page.locator('#cart_info_table');
        this.productRows = this.cartTable.locator('tbody tr');

        this.checkoutModal = page.locator('#checkoutModal');
    }

    async productsCount() {
        return this.productRows.count();
    }

    async removeProduct(productName) {
        const product = this.productRows.filter({
            hasText: productName
        });

        await product.locator('.cart_quantity_delete').click();
    }

    async getProductDetails(productName) {

        const row = this.productRows.filter({
            hasText: productName
        });

        return {
            price: await row.locator('.cart_price p').textContent(),
            quantity: await row.locator('.cart_quantity button').textContent(),
            total: await row.locator('.cart_total_price').textContent()
        };
    }

    async proceedToCheckout() {
        await this.proceedToCheckoutBtn.click();
    }

    async registerOrLogin() {
        await this.checkoutModal
            .getByRole('link', { name: 'Register / Login'}).click();
    }
}