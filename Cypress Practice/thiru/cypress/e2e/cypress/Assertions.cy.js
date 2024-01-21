// Assertion are two types

// 1) implicit assertion
      //  should
      //  and


// 2) ecplicit assertion
     // expect
     // assert

     describe("Assertion demo",()=>[
        it("Implicit assertion",()=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

            // should, and
            cy.url().should("include","orangehrmlive.com")
            cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.url().should("contain","orangehrm")
        })
     ])