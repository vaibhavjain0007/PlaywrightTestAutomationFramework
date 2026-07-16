import { test, expect } from '../fixtures/pages.fixture';

test ('verify email subscription', async( { page, homePage }) => {

    await homePage.navigateTo('Home');
    await homePage.subscribeEmail('vjtest01@gmail.com');
    await expect(homePage.emailSubscribedSuccessfullyText).toHaveText('You have been successfully subscribed!')
})