Cypress.Commands.add('visitSiteWithQuantcastConsentModalAndAgree', (url) => {
    // Quantcast Consent v2.0 modal asynchronously creates functions on the `top`
    // window object that are not accessible from inside the Cypress test iframe. This
    // rewrites the functions from `top` window to the one Cypress tests can access.
    cy.on('window:before:load', (win) => {
      let __tcfapi;
      Object.defineProperty(win, '__tcfapi', {
        configurable: true,
        get: () => {
          if (!__tcfapi) {
            __tcfapi = win.top.__tcfapi;
          }
          return __tcfapi;
        },
        set: (value) => {
          __tcfapi = value;
        }
      });
  
      let __uspapi = undefined;
      Object.defineProperty(win, '__uspapi', {
        get: () => {
          if (!__uspapi) {
            __uspapi = win.top.__uspapi;
          }
          return __uspapi;
        },
        set: (value) => {
          __uspapi = value;
        }
      });
    });
    cy.visit(url);
  
    cy.waitForDOMElement('qc-cmp2-ui');
    cy.contains('Agree', {matchCase: false}).click();
  });