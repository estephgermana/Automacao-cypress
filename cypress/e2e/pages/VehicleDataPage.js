class VehicleDataPage {
    visit() {
      cy.visit('http://sampleapp.tricentis.com/101/app.php');
    }
  
    fillForm() {
      cy.get('#make').select('BMW');
      cy.get('#model').select('Motorcycle');
      cy.get('#cylindercapacity').type('1500');
      cy.get('#engineperformance').type('100');
      cy.get('#dateofmanufacture').type('08/13/2024');
      cy.get('#numberofseats').select('3');
      cy.contains('label', 'Yes').click();
      cy.get('#numberofseatsmotorcycle').select('3');
      cy.get('#fuel').select('Electric Power');
      cy.get('#payload').type('173');
      cy.get('#totalweight').type('9002');
      cy.get('#listprice').type('53000');
      cy.get('#licenseplatenumber').type('PLACA123');
      cy.get('#annualmileage').type('43000');
    }
  
    clickNext() {
      cy.get('#nextenterinsurantdata').click();
    }
  }
  
  export default VehicleDataPage;
  