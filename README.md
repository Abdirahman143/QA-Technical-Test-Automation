**Project Setup**
**Prerequisites**

Before running the project, make sure you have the following installed on your local machine:

    Node.js
    npm (Node Package Manager)
**How to Run the Project**

**Via Browser:**

    Open your terminal.
    Navigate to the project directory.
    Run the following command:
    npx cypress open
 
   In the Cypress Test Runner, select the "e2e" folder and click on the "CreditCard.cy.js" file.

**Headless Browser:**

    Open your terminal.
    Navigate to the project directory.
    Run the following command:
    npm test
If the test script is not configured in the package.json file, use:
    npx cypress run --headless
    
  **NB**  You can include the --browser chrome flag to specify a specific browser.

**Test Cases**
**Golden Credit Card Test:**

    Verify that the home page logo is visible.
    Verify that the user can navigate to the credit card page.
    Verify that the user can navigate to the "im-visa-international-gold-card" page.
    Verify that the user can scroll down to the terms and conditions section and expand it.
    Verify that some terms content exists on the page.
    Verify that the user can scroll to the Card form section.
    Verify that the user can fill all the required fields.


**Test Results**

![image](https://github.com/Abdirahman143/QA-Technical-Test-Automation/assets/33175808/93df9b3c-b5aa-4ba4-b74d-001b9c4ea9cb)

![ui-cypress-test-result](https://github.com/Abdirahman143/QA-Technical-Test-Automation/assets/33175808/f0718f14-ecd1-455e-aba4-4caf1f70d175)


