import React from "react";

import { Button } from "./Button";

describe("<Button />", () => {
  it("renders", () => {
    cy.mount(<Button>Click me</Button>);
  });
});
