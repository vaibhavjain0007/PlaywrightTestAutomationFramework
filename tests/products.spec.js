import { test, expect } from '../fixtures/pages.fixture.js';

test ('verify product detail page', async ({ page, homePage, productPage }) => {

    await homePage.navigateTo('Products');
    await expect(page).toHaveURL('/products');
    await productPage.viewProductDetails('Blue Top');
    await expect(page).toHaveURL('/product_details/1');
    // await expect.soft(productPage.productDetails)
    //     .toContainText(['Blue Top', 'Category: Women > Tops', 'Rs. 500', 'Availability: In Stock', 'Condition: New', 'Brand: Polo']);
    const productInfo = page.locator(".product-information");

    await expect(productInfo).toContainText("Blue Top");
    await expect(productInfo).toContainText("Category: Women > Tops");
    await expect(productInfo).toContainText("Rs. 500");
    await expect(productInfo).toContainText("Availability: In Stock");
    await expect(productInfo).toContainText("Condition: New");
    await expect(productInfo).toContainText("Brand: Polo");
});

test ('verify product search functionality', async({ page, homePage, productPage}) => {

    await homePage.navigateTo('Products');
    await productPage.searchProduct('white');
    await expect(productPage.searchedProductTitle).toHaveText('Searched Products');
    await expect(productPage.productInfo).toHaveCount(3);
});

// test ('verify hover and add to cart product', async ({ page, homePage, productPage }) => {

//     await homePage.navigateTo('Products');
//     await productPage.hoverAndAddToCartProductByIndex(0);
    
// })