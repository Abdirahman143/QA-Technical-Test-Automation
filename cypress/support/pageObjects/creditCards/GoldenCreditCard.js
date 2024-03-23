class GoldenCreditCard {
  pageHeader = "h1";
  termsAndConditionsHeader = "#terms-and-conditions-heading";
  termsAndConditionsBtn = "#terms-and-conditions-heading button";
  termsAndConditionsContent = "#terms-and-conditions-content";

  //verifying page header
  isHeaderDisplayed(header) {
    cy.get(this.pageHeader).should("contain", header);
  }

  //scroll to terms and conditions section 
  scrollToTermsAndConditions(){
    cy.get(this.termsAndConditionsHeader).scrollIntoView();
  }
  clickTermsAndConditions(){
    cy.get(this.termsAndConditionsBtn).click();
  }

  //verify some terms and conditions content

  isTermsAndConditionsDisplayed(content){
     cy.get(this.termsAndConditionsContent).within(() => {
       cy.contains(content).should("exist");
     });
  }


}

export default new GoldenCreditCard();
