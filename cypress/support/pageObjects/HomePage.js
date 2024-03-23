class HomePage {
  logo = () => cy.xpath(`//img[contains(@src, "Blue-Logo.png")]`);
  personalBankMenu = () => `//a[contains(text(), "Personal Banking")]`;
  creditCardMenu = () => `//a[contains(text(),"Credit Cards")]`;

  isLogoVisible = () => {
    this.logo().should("be.visible");
  };

  navigateToCreditCard = () => {
    cy.xpath(this.personalBankMenu()).trigger("mouseover");
    cy.xpath(this.creditCardMenu()).click();
  };
}
