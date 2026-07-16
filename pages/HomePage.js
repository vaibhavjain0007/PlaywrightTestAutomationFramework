export default class HomePage {

    constructor(page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.deleteAccountLink = page.getByRole('link', { name: ' Delete Account' });
        this.logoutLink = page.getByRole('link', { name: ' Logout' });
        this.accountDeletedText = page.getByText('Account Deleted!');
        this.loggedInUserLink = page.getByText('Logged in as');

        this.subscribeEmailInput = page.locator('#susbscribe_email');
        this.emailSubscribedSuccessfullyText = page.locator('.alert-success');
    }

    async navigateToSignupLogin() {
        await this.page.goto('/');
        await this.signupLoginLink.click();
    }

    async navigateTo(linkName) {
        await this.page.goto('/');
        await this.page.getByRole('link', { name: linkName, exact: false }).first().click();
    }

    async deleteAccount() {
        await this.deleteAccountLink.click();
    }

    async logout() {
        await this.logoutLink.click();
    }

    async subscribeEmail(email) {
        await this.subscribeEmailInput.fill(email);
        await this.page.keyboard.press('Enter');
    }
}