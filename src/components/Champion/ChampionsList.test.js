import { render, screen } from "@testing-library/react";
import ChampionsList from "./ChampionsList";
import ChampItem from "./ChampItem";

test("renders learn react link", () => {
  render(<ChampionsList />);
  const champListElement = screen.getAllByTestId("champion-list-wraper");
  expect(champListElement).toBeTruthy();
});
