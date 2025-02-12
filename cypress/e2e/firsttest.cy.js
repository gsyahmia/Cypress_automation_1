describe('Launch App', () => {
    it('Launch the test Application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })
  })

describe('Login scenarios', function() {
    it('Test 1: Valid login', function(){
        
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type("test")
        cy.get("input[name='password']").type("test")
        cy.get("input[value='Log In']").click()
    })

    it('Test 2: Invalid login', function(){

    })
})