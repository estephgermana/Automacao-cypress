class PriceOptionPage {
    selectPriceOption() {
      cy.get('tr > .group > :nth-child(2) > .ideal-radio').click({ force: true });
    }
  
    clickNext() {
      cy.get('#nextsendquote').click();
    }
  }
  
  export default PriceOptionPage;
  