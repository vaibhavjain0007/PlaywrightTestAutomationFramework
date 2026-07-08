export default class HomePage {

    constructor(page) {
        this.page = page;
        this.signupLoginLink = page.getByRole('link', { name: ' Signup / Login' });
    }

    async navigateToSignupLogin() {
        await this.page.goto('/');
        await this.signupLoginLink.click();
    }

    async navigateTo(navigationLink) {
        await this.page.goto('/');
        await this.page.getByRole('link', { name: navigationLink }).click();
    }
}