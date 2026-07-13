export default class ContactUsPage {

    constructor(page) {
        this.page = page;
        this.getInTouchText = page.getByText('Get In Touch');
        this.nameInput = page.getByTestId('name');
        this.emailInput = page.getByTestId('email');
        this.subjectInput = page.getByTestId('subject');
        this.messageInput = page.getByTestId('message');
        this.uploadFileInput = page.locator('input[type="file"]');
        this.submitButton = page.getByRole('button', { name: 'Submit' });

        this.successMessage = page.locator('h2 + div.alert-success');
    }

    async fillContactUsForm(contactUsInfo) {
        await this.nameInput.fill(contactUsInfo.name);
        await this.emailInput.fill(contactUsInfo.email);
        await this.subjectInput.fill(contactUsInfo.subject);
        await this.messageInput.fill(contactUsInfo.message);
        await this.uploadFileInput.setInputFiles(contactUsInfo.filePath);
       
        await this.submitButton.click();
    }
}