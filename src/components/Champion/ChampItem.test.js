import React from "react";
import { render } from "@testing-library/react";
import ChampItem from "./ChampItem";

const data = {
  season: "2005",
  round: "19",
  DriverStandings: [
    {
      position: "1",
      positionText: "1",
      points: "133",
      wins: "7",
      Driver: {
        driverId: "alonso",
        permanentNumber: "14",
        code: "ALO",
        url: "http://en.wikipedia.org/wiki/Fernando_Alonso",
        givenName: "Fernando",
        familyName: "Alonso",
        dateOfBirth: "1981-07-29",
        nationality: "Spanish",
      },
      Constructors: [
        {
          constructorId: "renault",
          url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
          name: "Renault",
          nationality: "French",
        },
      ],
    },
  ],
};

it("ChampItem should have season text", () => {
  const { getByText } = render(<ChampItem user={data} />);
  expect(getByText(/Season:2005 Champion/)).toBeInTheDocument();
});

it("ChampionsList should have driver name", () => {
  const { getByTestId } = render(<ChampItem user={data} />);
  expect(getByTestId("driver-name-text")).toHaveTextContent("Fernando Alonso");
});

it("ChampionsList should have constractor name", () => {
  const { getByTestId } = render(<ChampItem user={data} />);
  expect(getByTestId("constractor-text")).toHaveTextContent("Renault");
});

it("ChampionsList should have point count", () => {
  const { getByTestId } = render(<ChampItem user={data} />);
  expect(getByTestId("point-text")).toHaveTextContent("133");
});

it("ChampionsList should have round count", () => {
  const { getByTestId } = render(<ChampItem user={data} />);
  expect(getByTestId("round-text")).toHaveTextContent("19");
});

it("ChampionsList should have wins count", () => {
  const { getByTestId } = render(<ChampItem user={data} />);
  expect(getByTestId("wins-text")).toHaveTextContent("7");
});
