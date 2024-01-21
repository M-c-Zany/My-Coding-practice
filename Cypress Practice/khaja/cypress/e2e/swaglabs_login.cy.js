describe("Swag Labs", () => {
  beforeEach(() => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.viewport(1920, 1080);
  });

  it("Positive Login Test - Successful Login", () => {
    cy.get('#username').type("student");
    cy.get('#password').type("Password123");
    cy.get('#submit').click();

    // Verify successful login
    cy.get(".post-title")
      .should("be.visible")
      .and("have.text", "Logged In Successfully")
      .and("be.exist");

    cy.get(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color")
      .should("be.visible")
      .and("be.exist");

    // Logout
    cy.get(".wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color")
      .click();
  });

  it("Invalid Login Test - Incorrect Username/Password", () => {
    cy.get('#username').type("invaliduser");
    cy.get('#password').type("InvalidPass");
    cy.get('#submit').click();

    // Verify invalid login attempt
    cy.get("#error")
      .should("be.visible")
      .and("contain", "Invalid username or password");
  });

  it("Invalid Login Test - Missing Username", () => {
    cy.get('#password').type("Password123");
    cy.get('#submit').click();

    // Verify missing username error
    cy.get("#username-error")
      .should("be.visible")
      .and("contain", "Username is required");
  });

  it("Invalid Login Test - Missing Password", () => {
    cy.get('#username').type("student");
    cy.get('#submit').click();

    // Verify missing password error
    cy.get("#password-error")
      .should("be.visible")
      .and("contain", "Password is required");
  });

  it("Invalid Login Test - Network Disruption", () => {
    // Simulate network disruption - disable network
    cy.server({
      method: 'POST',
      status: 500,
      response: {},
      delay: 5000,
    });
    cy.get('#username').type("student");
    cy.get('#password').type("Password123");
    cy.get('#submit').click();

    // Verify error or timeout message due to network disruption
    cy.contains("Request failed with status code 500")
      .should("be.visible");
  });

  // Additional test cases for edge cases, concurrent logins, etc. can be added similarly
});
