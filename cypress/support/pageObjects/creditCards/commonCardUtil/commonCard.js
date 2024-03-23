class CreditCard {
  pageHeader = "h2";
  isHeaderDisplayed(header) {
    cy.get(this.pageHeader).should("contain", header);
  }
}
export default new CreditCard();