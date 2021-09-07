import { render, screen } from "@testing-library/react";
import SeasonalRaces from "./SeasonalRaces";

it("ChampionsList should be rendered", () => {
  render(<SeasonalRaces />);
  const champListElement = screen.getAllByTestId("seasonal-races");
  expect(champListElement).toBeTruthy();
});

