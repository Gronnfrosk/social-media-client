import { userEmail } from "../../cypress.env.js";
import { userPassword } from "../../cypress.env.js";

describe("Noroff app: User login with valid credentials", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
  });

  it("user can login", () => {
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get("input#loginEmail[type='email']").type(userEmail);
    cy.get("input#loginPassword[type='password']").type(userPassword);
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.url().should("include", "profile");
  });
});
