class GoldenCreditCard {
  pageHeader = "h1";

  //verifying page header
  isHeaderDisplayed(header) {
    cy.get(this.pageHeader).should("contain", header);
  }

}

export default new GoldenCreditCard();
