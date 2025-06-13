import React from "react";
import { mount, MountReturn } from "cypress/react";
import { AppFluentProvider } from "@components/index";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      /**
       * Custom command to select DOM element by data-test-id attribute.
       * @example cy.getDataTestId('greeting')
       */
      getDataTestId(value: string): Chainable<JQuery<Element>>;
    }
  }
}
