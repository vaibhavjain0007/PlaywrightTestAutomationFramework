export default class HomePage {

    constructor(page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.deleteAccountLink = page.getByRole('link', { name: ' Delete Account' });
        this.logoutLink = page.getByRole('link', { name: ' Logout' });
        this.accountDeletedText = page.getByText('Account Deleted!');
        this.loggedInUserLink = page.getByText('Logged in as');
    }

    async navigateToSignupLogin() {
        await this.page.goto('/');
        await this.signupLoginLink.click();
    }

    async navigateTo(linkName) {
        await this.page.goto('/');
        await this.page.getByRole('link', { name: linkName, exact: false }).click();
    }

    async deleteAccount() {
        await this.deleteAccountLink.click();
    }
}