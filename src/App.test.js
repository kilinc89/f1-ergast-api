import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders welcome message", () => {
  render(<App />);
  expect(screen.getAllByTestId("champion-list-wraper")).toBeTruthy();
});
