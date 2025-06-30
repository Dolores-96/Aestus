// Cilj testnog slučaja: Provjeriti da unosom već postojećeg registriranog usera dolazi do error message-a ispod polja i crvenog ruba oko polja
// Preduvjet: Pristup aplikaciji Parra, Registrirani user
// Koraci:
// 1)    	Idi na widget za registraciju
// 2)    	Unesi email već registriranog usera
// 3)    	Klikni na “Registriraj se”
// Očekivani rezultat: Pojavio se Error message: "Već postoji registrirani račun s tom email
// adresom. Pokušaj s nekim drugim." ispod polja i crveni rub oko polja

describe('Existing User Validation Test', () => {
  it('Prikazuje error poruku i crveni rub za postojeci korisnicki racun', () => {
    cy.visit('https://lemon-cliff-03b907503.6.azurestaticapps.net/auth/register')

    cy.get('input.dx-texteditor-input[aria-label="email"]') 
      .type('dolores.glavas96@gmail.com')

    cy.get('input.dx-texteditor-input[aria-label="firstAndLastName"]').type('Dolores Glavas')     
    cy.get('input[aria-label="password"]').type('32V8wCo9dt!') 
    cy.get('input[aria-label="confirmPassword"]').type('32V8wCo9dt!')


    cy.contains('button', 'Registriraj se').click() 

    cy.get('.ng-invalid-touched-feedback').should('be.visible').and('contain.text', 'Već postoji registrirani račun s tom email adresom. Pokušaj s nekim drugim')
    cy.get('input[aria-label="email"]').should('have.css', 'border-color', 'rgb(33, 37, 41)')
  })
})