import { render, screen } from "@testing-library/react";
import ChampionsList from "./ChampionsList";

it("ChampionsList should be rendered", () => {
  render(<ChampionsList />);
  const champListElement = screen.getAllByTestId("champion-list-wraper");

  expect(champListElement).toBeTruthy();
});
