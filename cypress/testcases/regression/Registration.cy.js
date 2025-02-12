describe('Registration Parabank', () => {
  it('Register a new account successfully', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    
    cy.get('#loginPanel > :nth-child(3) > a').click()

    cy.get("input[id='customer.firstName']").type('Zoey')
    cy.get("input[id='customer.lastName']").type('Ajwa')
    cy.get("input[id='customer.address.street']").type('Jalan jalan men')
    cy.get("input[id='customer.address.city']").type('Rotterdam')
    cy.get("input[id='customer.address.state']").type('Londo')
    cy.get("input[id='customer.address.zipCode']").type('8282')
    cy.get("input[id='customer.phoneNumber']").type('07181822')
    cy.get("input[id='customer.ssn']").type('apaa')
    cy.get("input[id='customer.username']").type('ZoeyMusk')
    cy.get("input[id='customer.password']").type('LaNaMa')
    cy.get("#repeatedPassword").type('LaNaMa')
    cy.get("input[value='Register']").click()
  })
})