
describe("My First test case",()=>{
    it("test1",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.title().should("eq","OrangeHRM")
    })
})