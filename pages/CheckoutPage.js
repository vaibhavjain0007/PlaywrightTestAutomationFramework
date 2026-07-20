export default class CheckoutPage {

    constructor(page) {
        this.page = page;
        this.addCommentInput = page.locator("textarea[name='message']");
        this.placeOrderBtn = page.getByRole('link', { name: 'Place Order' });
    }

    async addComment(message) {
        await this.addCommentInput.fill(message);
    }

    async placeOrder() {
        await this.placeOrderBtn.click();
    }
}