import { test, expect } from '../fixtures/pages.fixture.js';

test('verify the test cases page', async ({ page, homePage, testCasesPage }) => {

    await homePage.navigateTo(' Test Cases');
    await expect(testCasesPage.testCasesText).toBeVisible();
});