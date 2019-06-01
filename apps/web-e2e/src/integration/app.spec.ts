

describe('NG-MY', () => {
  beforeEach(() => cy.visit('https://2019.ng-my.org/'));

  it('should display NG-MY 2019', () => {
    cy.get('h1.hero-title').should($ => {
      expect($[0].innerText.trim()).to.eq('NG-MY 2019');
    });
  });
  it('should sell ticket', () => {
    cy.get('a[href="https://ti.to/ng-my/ng-my-2019"]').should('have.attr', 'target', '_blank');
    cy.get('a[href="https://ti.to/ng-my/ng-my-2019"]').should('have.attr', 'target', '_blank');
  });
  it('should show stats', () => {
    cy.get('.main').scrollIntoView();
    cy.get('.stats-list > :nth-child(1)').text({whitespace: 'simplify', depth: 1}).should('eq', '2 days');
    cy.get('.stats-list > :nth-child(2)').text({whitespace: 'simplify', depth: 1}).should('eq', '350+ attendees');
    cy.get('.stats-list > :nth-child(3)').text({whitespace: 'simplify', depth: 1}).should('eq', '25+ sessions');
    cy.get('.stats-list > :nth-child(4)').text({whitespace: 'simplify', depth: 1}).should('eq', '2 tracks');
  });

  it('should have cypress as sponsor', () => {
    cy.get(':nth-child(5) > .sponsors-block > .container > .sponsors-title').scrollIntoView();
    cy.get('a[href="https://cypress.io/"]').should('have.attr', 'target', '_blank');
    cy.get('a[href="https://cypress.io/"] img').invoke('attr', 'src').then(src => {
      expect(src).contain('cypress');
    });
    cy.get('a[href="https://cypress.io/"] source').invoke('attr', 'srcset').then(src => {
      expect(src).contain('cypress');
    });
  });
});
