import { userEmail } from "../../cypress.env.js";
import { userPassword } from "../../cypress.env.js";

describe("Noroff app: User can logout", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("/");
    cy.wait(1000);
    cy.get("#registerForm button")
      .contains("Login")
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.get("input#loginEmail[type='email']").type(userEmail);
    cy.get("input#loginPassword[type='password']").type(userPassword);
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.wait(2000);
  });

  it("user can logout", () => {
    cy.get("button").contains("Logout").click();
  });
});
