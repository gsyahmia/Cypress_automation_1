describe('Handling dynamic dropdown in Flight search', () => {
  it('Dynamic dropdown', () => {
    cy.visit('https://www.agoda.com/id-id/', {headers:{'Accept-Encoding': 'gzip, deflate'}})
    cy.get("#tab-flight-tab",{delay:1000})
    cy.get("#textInput").click().clear().type("Thailand",{delay:200})
    cy.get("#search-box-autocomplete-id span:first-child").each(($el, index, $list) =>{
      cy.log($el.text())
      if($el.text() === 'Pattaya'){
        cy.wrap($el).click()
      }
    })
  })
})