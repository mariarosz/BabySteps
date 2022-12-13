describe('Home/Login/Register pages tests', () => {
  describe('render tests', () => {
    it('it renders the header correctly', () => {
      cy.visit('http://localhost:3000/');
      cy.get('.header').contains('Baby Steps');
    });
  });
  describe('navigation tests', () => {
    it('it goes to login page when click login', () => {
      cy.get('.header').contains('Log In').click();
      cy.url().should('include', '/login');
    });

    it('users can go to signup from login page', () => {
      cy.get('form').contains('Register').click();
      cy.url().should('include', '/signup');
    });
  });
  describe('form tests', () => {
    it('it should input signup data as intended', () => {
      cy.get('#name').click().type('Cypress Test');
      cy.get('#email').click().type('cypress-test@gmail.com');
      cy.get('#password').click().type('12345678');
      cy.get('button').contains('Signup').click();
    });
    it('it should input login data as intended', () => {
      cy.get('a').contains('Login').click();
      cy.get('#email').click().type('alexander.crump11@gmail.com');
      cy.get('#password').click().type('12345678');
      cy.get('button').contains('Log in').click();
    });
  });
});
describe('Dashboard tests', () => {
  describe('render tests', () => {
    it('it renders the add new baby button correctly', () => {
      cy.visit('http://localhost:3000/dashboard');
      cy.get('a').contains('Add new baby', { timeout: 10000 });
    });
  });
});
