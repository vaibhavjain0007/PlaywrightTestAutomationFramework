import { test, expect } from '../fixtures/pages.fixture';
import contactUsInfo from '../test-data/contactUs-info.json';

test ('verify contact us form submission with valid data', async ({ page, homePage, contactUsPage }) => {

    await homePage.navigateTo('Contact us');
    await expect(contactUsPage.getInTouchText).toHaveText('Get In Touch');

    page.on('dialog', async dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept();
    })

    await contactUsPage.fillContactUsForm(contactUsInfo);
    
    await page.waitForTimeout(1000);
    await expect(contactUsPage.successMessage).toHaveText('Success! Your details have been submitted successfully.');
});