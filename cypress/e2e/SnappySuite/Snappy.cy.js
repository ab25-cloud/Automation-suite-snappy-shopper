describe('Snappy Shopper Login Functionality', () => {
    const baseUrl = 'https://www.snappyshopper.co.uk/login';
  
    beforeEach(() => {
      cy.visit(baseUrl);
    });
  
    it('TC01 - Valid login (Mock credentials)', () => {
      cy.get('input[type="email"]').type('abduls.basit10@gmail.com');
      cy.get('input[type="password"]').type('Password123');
      //cy.get('button[aria-label="Show Password"]').click();
      cy.get('button[type="submit"]').click();
      
    });
  
    it('TC02 - Invalid login with incorrect password', () => {
      cy.get('input[type="email"]').type('validuser@example.com');
      cy.get('input[type="password"]').type('WrongPassword');
      cy.get('button[type="submit"]').click();
      cy.contains('There was a validation error, please make sure your details are correct.').should('exist');
    });
  
    it('TC03 - Invalid login with incorrect email', () => {
      cy.get('input[type="email"]').type('wronguser@example.com');
      cy.get('input[type="password"]').type('CorrectPassword123');
      cy.get('button[type="submit"]').click();
      cy.contains('There was a validation error, please make sure your details are correct.').should('exist');
    });
  
    it('TC04 - Empty email and password fields', () => {
      cy.get('button[type="submit"]').click();
      cy.contains('Field is required').should('exist');
      cy.contains('Field is required').should('exist');
    });
  
    it('TC05 - Email format validation', () => {
      cy.get('input[type="email"]').type('invalidemail');
      cy.get('input[type="password"]').type('Password123');
      //cy.get('button[type="submit"]').click();
      cy.contains('Email is not valid').should('exist');
    });
  
    it('TC06 - Password field input is obscured', () => {
      cy.get('input[type="password"]').should('have.attr', 'type', 'password');
    });
  
    it('TC07 - Forgot password link works', () => {
      cy.contains('Forgotten your password?').click();
      cy.url().should('include', '/forgotten-password');
    });

    it('test fb login', ()=> {
        cy.contains('Login with Facebook').click();
    });

    it('test google login', ()=> {
        cy.contains('Login with Google').click();
    });

    // it.only('TC - Signup', () => {
    //     cy.contains('Create Account').click();
    //     cy.contains('label', 'First Name').parent().find('input').type('Test');
    //     //cy.get('input').eq(2).type('test')
    //    // cy.get('.v-text-field__slot > [data-cy="ss-checkout-details-form-first-name-input"]').type('Test user');
    //     cy.get('.v-text-field__slot > [data-cy="ss-checkout-details-form-last-name-input"]').type('test last');
    //     cy.get('.v-text-field__slot > [data-cy="ss-checkout-details-form-email-input"]').type('test@gmail.com');
    //     cy.get('.v-text-field__slot > [data-cy="ss-checkout-details-form-phone-input"]').type('01234567890');
    //     cy.get('.v-text-field__slot > [data-cy="ss-register-form-password-input"]').type('');
    //     cy.get(':nth-child(2) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > [data-cy="ss-checkout-details-form-marketing-preference-input"]').click()
    //     cy.get('.v-input--selection-controls__input > [data-cy="ss-checkout-details-form-terms-input"]').click();
    //     cy.get('[data-cy="ss-register-page-create-account-button"] > .v-btn__content').click();
    //   });
      
    
  });