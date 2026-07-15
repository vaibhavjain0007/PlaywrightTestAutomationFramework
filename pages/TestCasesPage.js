export default class TestCasesPage {

    constructor (page) {
        this.page = page;
        this.testCasesText = page.getByText('Test Cases').first();
    }
}