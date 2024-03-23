class CardForm {
  scrollToForm() {
    cy.get(".card-form").scrollIntoView();
  }

  enterFullName(fullName) {
    cy.get("#input_26_1").clear().type(fullName);
  }

  enterEmail(email) {
    cy.get("#input_26_2").clear().type(email);
  }

  enterPhoneNumber(phoneNumber) {
    cy.get("#input_26_3").clear().type(phoneNumber);
  }

  selectBranch(branchName) {
    cy.get("#input_26_4").select(branchName);
  }

  selectInfoOption() {
    cy.get("#choice_26_5_1").check();
  }

  leaveComment(comment) {
    cy.get("#input_26_6").clear().type(comment);
  }

  agreeToConsent() {
    cy.get("#input_26_7_1").check();
  }

  verifyRecaptcha() {
    cy.get(".ginput_recaptcha").should("exist");
  }

  fillForm(fullName, email, phoneNumber, branchName, comment) {
    //this.scrollToForm();
    this.enterFullName(fullName);
    this.enterEmail(email);
    this.enterPhoneNumber(phoneNumber);
    this.selectBranch(branchName);
    this.selectInfoOption();
    this.leaveComment(comment);
    this.agreeToConsent();
    this.verifyRecaptcha();
  }
}

export default new CardForm();
