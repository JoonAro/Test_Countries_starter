describe("countries homepage - test renders", () => {
    it("navigate to home", () => {
        cy.visit('http://localhost:5173');
        cy.contains("Home");
    })
});