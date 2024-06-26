// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent Cypress from failing the test
  return false;
});
Cypress.Commands.add("xpath", { prevSubject: "optional" }, (subject, xpath) => {
  if (subject) {
    // If a subject is provided, run XPath query on the subject
    return cy.wrap(subject).xpath(xpath);
  } else {
    // If no subject is provided, run XPath query on the document root
    return cy.xpath(xpath);
  }
});
