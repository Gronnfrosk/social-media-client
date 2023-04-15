import { userEmail } from "../../cypress.env.js";

describe("Noroff app: User login with invalid credentials", () => {
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
    cy.get("input#loginPassword[type='password']").type(`invalidPassword`);
    cy.get("#loginForm button").contains("Login").should("be.visible").click();
    cy.on("window:alert", (Text) => {
      expect(Text).to.eq("Either wrong username or password");
    });
  });
});