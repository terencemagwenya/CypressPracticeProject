describe('Web Testing', () => {
  it('Elements selection', () => {
    cy.visit('https://demoqa.com/')

    // Selecting the Elements 
    cy.get('.category-cards > :nth-child(1)').click()

    // Selecting text box 
    cy.contains('Text Box').click()
    cy.get('#userName').type('Terence Magwenya{Enter}')
    cy.get('#userEmail').type('terrymagwenya@gmail.com')
    cy.get('#currentAddress').type('266 Rockwood Concession Mazowe')
    cy.get('#permanentAddress').type('266 Rockwood concession Mazowe Zimbabwe')
    cy.get('#submit').click()
    cy.get('#name').should('contain', 'Name:Terence Magwenya')


  })
})