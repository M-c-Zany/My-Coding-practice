

describe("CSSLocators",()=>{
    it("CSSLocators",()=>{

        cy.visit("http://www.automationpractice.pl/index.php")

       // cy.get("#search_query_top").type("T-shirt")  // by using ID

       // cy.get(".search_query.form-control.ac_input").type("T-shirt") // by using class

        cy.get("[name='search_query']").type("T-shirt")   // by using attribute


        cy.get("[name='submit_search']").click()   // by uaing Attribute

        cy.get('.lighter').contains("T-shirt")  // assertion
    })
})