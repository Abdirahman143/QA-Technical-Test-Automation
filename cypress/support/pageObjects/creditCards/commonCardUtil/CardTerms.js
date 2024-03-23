class CardTerms {
  termsAndConditionsHeader = "#terms-and-conditions-heading";
  termsAndConditionsBtn = "#terms-and-conditions-heading button";
  termsAndConditionsContent = "#terms-and-conditions-content";

  // Scroll to the terms and conditions section
  scrollToTermsAndConditions() {
    cy.get(this.termsAndConditionsHeader).scrollIntoView();
  }

  // Click on the terms and conditions button to expand
  clickTermsAndConditions() {
    cy.get(this.termsAndConditionsBtn).click();
  }

  // Verify if the specified terms and conditions content is displayed
  isTermsAndConditionsDisplayed(content) {
    cy.get(this.termsAndConditionsContent).within(() => {
      cy.contains(content).should("exist");
    });
  }
}

export default new CardTerms();
