/// <reference types ="cypress"/>
class SearchProduct {
    SearchProduct(searchProductName) {
        cy.get('[name="search"]').eq(0).type(searchProductName);
        cy.get('[type="submit"]').eq(0).click();
    }
    verifyProduct(productName) {
        cy.contains(productName);
    }
}
const searchProduct = new SearchProduct();
export default searchProduct;