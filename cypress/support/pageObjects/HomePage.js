import "../commands";

class HomePage {
  logo = ".navbar-brand img";
  

  isLogoVisible = () => {
    cy.get(this.logo).should("be.visible");
  };

  navigateToCreditCard = (relativeUrl) => {
    cy.url().should("include", relativeUrl);
  };
}

export default new HomePage();
