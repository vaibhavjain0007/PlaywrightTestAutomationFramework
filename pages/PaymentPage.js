export default class PaymentPage {

    constructor(page) {
        this.page = page;
        this.cardHolderNameInput = page.getByTestId('name-on-card');
        this.cardNumberInput = page.getByTestId('card-number');
        this.cvcInput = page.getByTestId('cvc');
        this.expiryMonthInput = page.getByTestId('expiry-month');
        this.expirtyYearInput = page.getByTestId('expiry-year');

        this.payAndConfirmOrderBtn = page.getByTestId('pay-button');
    }

    async enterCardDetails(cardInfo) {

        await this.payAndConfirmOrder();
        await this.cardHolderNameInput.fill(cardInfo.cardHolderName, { force: true });
        await this.cardNumberInput.fill(cardInfo.cardNumber, { force: true });
        await this.cvcInput.fill(cardInfo.cvc, { force: true });
        await this.expiryMonthInput.fill(cardInfo.expiryMonth, { force: true });
        await this.expirtyYearInput.fill(cardInfo.expiryYear, { force: true });
    }

    async payAndConfirmOrder() {
        await this.payAndConfirmOrderBtn.click();
    }

}