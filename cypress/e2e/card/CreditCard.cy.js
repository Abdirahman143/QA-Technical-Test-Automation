import HomePage from "../../support/pageObjects/HomePage";
import commonCard from "../../support/pageObjects/creditCards/commonCardUtil/commonCard";
import GoldenCreditCard from "../../support/pageObjects/creditCards/GoldenCreditCard";
import CardTerms from "../../support/pageObjects/creditCards/commonCardUtil/CardTerms";
const url_data = require("../../fixtures/test_data/endpoint.json");
const common_data = require("../../fixtures/test_data/card_common_data.json");
const golden_credit_card = require("../../fixtures/test_data/goldenCard.json");

describe("Credit Card Test: ", { testIsolation: false }, () => {
  before(() => {
    cy.visit(url_data.url),
      {
        timeouts: 3000,
      };
  });

  it("verify that the home page logo is visible ", () => {
    HomePage.isLogoVisible();
  });

  it("verify that user can navigate to the credit card page", () => {
    cy.visit(url_data.url + common_data.relativeUrl);
    HomePage.navigateToCreditCard(common_data.relativeUrl);
    commonCard.isHeaderDisplayed(common_data.header);
  });

  //Golden Credit test

  //navigate to Golden credit card and verify the header

  it("verify that user can navigate to golden credit page", () => {
    cy.visit(golden_credit_card.url);
    GoldenCreditCard.isHeaderDisplayed(golden_credit_card.header);
  });

  //terms and condition section- verify some terms content
  it("Verify that user can scroll down to terms and condition section and expand ", () => {
    //scroll down to terms section
    CardTerms.scrollToTermsAndConditions();
    //expand the terms section
    CardTerms.clickTermsAndConditions();
  });

  it("verify some terms content exist in the page ", () => {
    CardTerms.isTermsAndConditionsDisplayed(
      golden_credit_card.termsAndConditionsContent_1
    );
  });
});
