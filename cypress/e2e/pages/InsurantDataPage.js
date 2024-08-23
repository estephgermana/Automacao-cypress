class InsurantDataPage {
    fillForm() {
      cy.get('#firstname').type('Estephani');
      cy.get('#lastname').type('Germana');
      cy.get('#birthdate').type('01/19/2001');
      cy.contains('label', 'Female').click();
      cy.get('#streetaddress').type('Rua Recife, 123');
      cy.get('#country').select('Brazil');
      cy.get('#zipcode').type('12345');
      cy.get('#city').type('Recife');
      cy.get('#occupation').select('Farmer');
      cy.get('input[name="Hobbies"]').uncheck({ force: true });
      cy.get('#speeding').check({ force: true });
      cy.get('#skydiving').check({ force: true });
      cy.get('#website').type('https://exemplo.com');
      cy.get('#picture').attachFile('imagem.png');
    }
  
    clickNext() {
      cy.get('#nextenterproductdata').click();
    }
  }
  
  export default InsurantDataPage;
  