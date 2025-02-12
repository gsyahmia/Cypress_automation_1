describe('Login to Parabank', () =>{

    it('Success login', () =>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

        cy.get("input[name='username']").type('ZoeyMusk')
        cy.get("input[name='password']").type('LaNaMa')
        cy.get("input[value='Log In']").click()
        
        cy.get("#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()

        cy.get("#month").select("September")
        cy.get("#month").select("May")
        cy.get("#transactionType").select("Debit")
       
    })
})