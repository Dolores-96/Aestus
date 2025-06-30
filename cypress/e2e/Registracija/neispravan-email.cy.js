// Cilj testnog slučaja: 
// Provjeriti da unosom neispravne forme email-a dolazi do error message-a ispod polja i crvenog ruba oko polja
// Preduvjet: Pristup aplikaciji Parra
// Koraci:
// 1)    	Idi na widget za registraciju
// 2)    	Unesi neispravni format email-a (npr. test@test)
// 3)	Popuni ostala obavezna polja
// 4)    	Klikni na “Registriraj se”
// Očekivani rezultat: Pojavio se Error message: "Neispravna email adresa." ispod polja i crveni rub oko polja

describe('Email Validation Test', () => {
  it('Prikazuje error poruku i crveni rub za neispravan email', () => {
    cy.visit('https://lemon-cliff-03b907503.6.azurestaticapps.net/auth/register')

    cy.get('input.dx-texteditor-input[aria-label="email"]') 
      .type('test')

    cy.get('input.dx-texteditor-input[aria-label="firstAndLastName"]').type('Dolores Glavas')     
    cy.get('input[aria-label="password"]').type('Lozinka123!') 
    cy.get('input[aria-label="confirmPassword"]').type('Lozinka123!') 


   cy.contains('button', 'Registriraj se').click() 

    cy.get('.ng-invalid-touched-feedback').should('be.visible').and('contain.text', 'Neispravna email adresa')
    cy.get('input[aria-label="email"]').should('have.css', 'border-color', 'rgb(33, 37, 41)')
  })
})
