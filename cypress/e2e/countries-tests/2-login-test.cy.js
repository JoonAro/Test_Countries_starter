describe("countries homepage - test renders", () => {

    beforeEach(() => {
        cy.visit("http://localhost:5173");
        cy.get("button").contains("Countries").click();
    })
    it("navigate to login", () => {
        cy.visit('http://localhost:5173/login');
        cy.get('h1').should("contain", "Login");
    });

    it("login with invalid credentials", () => {
        cy.get("input[placeholder='Email']").type("Something");
        cy.get("input[placeholder='Password']").type("Something");
        cy.get("[data-id='login-button']").click();
    });

    it("Login with valid credentials", () => {
        cy.get("input[placeholder='Email']").type("aa@node.com")
        cy.get("input[placeholder='Password']").type("aaaaaa")
        cy.get("[data-id='login-button']").click();
    });
});