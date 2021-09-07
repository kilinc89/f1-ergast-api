import React from "react";
import { render } from "@testing-library/react";
import ChampWraper from "./ChampWraper";

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

it("should render Seasonal Races component", () => {
  const { getByTestId } = render(
    <ChampWraper user={data} clickIndex={0} index={0} />
  );
  expect(getByTestId("seasonal-races")).toBeVisible();
});

it("should render ChampItem component", () => {
  const { getByTestId } = render(
    <ChampWraper user={data} clickIndex={1} index={0} />
  );
  expect(getByTestId("table-wraper")).toBeVisible();
});
