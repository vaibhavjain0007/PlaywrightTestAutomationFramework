export default class SignInPage {
    
    constructor(page) {
        this.page = page;
        this.signInLink = page.getByRole('link', { name: ' Signup / Login' });
        this.nameInput = page.getByRole('textbox', { name: 'Name' });
        this.emailInput = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address');
        this.signupButton = page.getByRole('button', { name: 'Signup' });

        this.emailInputLogin = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address');
        this.passwordInputLogin = page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.incorrectEmailOrPasswordText = page.getByText('incorrect!');


        this.firstNameInput = page.getByRole('textbox', { name: 'First name *' });
        this.lastNameInput = page.getByRole('textbox', { name: 'Last name *' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password *' });
        this.companyInput = page.getByRole('textbox', { name: 'Company', exact: true });
        this.addressInput = page.getByRole('textbox', { name: 'Address * (Street address, P.' });
        this.stateInput = page.getByRole('textbox', { name: 'State *' });
        this.cityInput = page.getByRole('textbox', { name: 'City * Zipcode *' });
        this.zipcodeInput = page.locator('#zipcode');
        this.mobileNumberInput = page.getByRole('textbox', { name: 'Mobile Number *' });
        this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
        this.continueLink = page.getByRole('link', { name: 'Continue' });
    }

    async navigate() {
        await this.page.goto('/');
    }

    async signIn(name, email) {
        await this.nameInput.fill(name);
        await this.emailInput.fill(email);
        await this.signupButton.click();
    }

    async login(email, password) {
        await this.emailInputLogin.fill(email);
        await this.passwordInputLogin.fill(password);
        await this.loginButton.click();
    }

    async enterAccountDetails(accountInfo, addressInfo) {
        await this.firstNameInput.fill(accountInfo.firstName);
        await this.lastNameInput.fill(accountInfo.lastName);
        await this.passwordInput.fill(accountInfo.password);
        await this.companyInput.fill(addressInfo.company);
        await this.addressInput.fill(addressInfo.address);
        await this.stateInput.fill(addressInfo.state);
        await this.cityInput.fill(addressInfo.city);
        await this.zipcodeInput.fill(addressInfo.zipcode);
        await this.mobileNumberInput.fill(addressInfo.mobileNumber);
        await this.createAccountButton.click();
    }

    async continueAfterAccountCreation() {
        await this.continueLink.click();
    }
}