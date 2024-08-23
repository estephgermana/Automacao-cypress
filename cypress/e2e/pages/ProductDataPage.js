class ProductDataPage {
    fillForm() {
      cy.get('#startdate').type('10/23/2024');
      cy.get('#insurancesum').select('5.000.000,00');
      cy.get('#meritrating').select('Bonus 5');
      cy.get('#damageinsurance').select('Full Coverage');
      cy.get('input[name="Optional Products[]"]').uncheck({ force: true });
      cy.get('#EuroProtection').check({ force: true });
      cy.get('#courtesycar').select('Yes');
    }
  
    clickNext() {
      cy.get('#nextselectpriceoption').click();
    }
  }
  
  export default ProductDataPage;
  