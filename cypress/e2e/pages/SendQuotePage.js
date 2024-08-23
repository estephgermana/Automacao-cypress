class SendQuotePage {
    fillForm() {
      cy.get('input#email').type('exemplo@email.com');
      cy.get('input#phone').type('1234567890');
      cy.get('input#username').type('usuarioTeste');
      cy.get('input#password').type('Senha123');
      cy.get('input#confirmpassword').type('Senha123');
      cy.get('textarea#Comments').type('Comentário de teste.');
    }
  
    clickSend() {
      cy.get('button#sendemail').click({ force: true });
    }
  
    verifyLoadingComplete() {
      cy.get('#LoadingPDF').should('be.visible');
      cy.wait(5000);
      cy.get('#LoadingPDF').should('not.be.visible');
    }
  }
  
  export default SendQuotePage;
  