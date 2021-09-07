import React from "react";
import { render } from "@testing-library/react";
import Tracks from "./Tracks";

const data = {
  season: "2005",
  round: "1",
  url: "http://en.wikipedia.org/wiki/2005_Australian_Grand_Prix",
  raceName: "Australian Grand Prix",
  Circuit: {
    circuitId: "albert_park",
    url: "http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit",
    circuitName: "Albert Park Grand Prix Circuit",
    Location: {
      lat: "-37.8497",
      long: "144.968",
      locality: "Melbourne",
      country: "Australia",
    },
  },
  date: "2005-03-06",
  time: "14:00:00Z",
  Results: [
    {
      number: "6",
      position: "1",
      positionText: "1",
      points: "10",
      Driver: {
        driverId: "fisichella",
        code: "FIS",
        url: "http://en.wikipedia.org/wiki/Giancarlo_Fisichella",
        givenName: "Giancarlo",
        familyName: "Fisichella",
        dateOfBirth: "1973-01-14",
        nationality: "Italian",
      },
      Constructor: {
        constructorId: "renault",
        url: "http://en.wikipedia.org/wiki/Renault_in_Formula_One",
        name: "Renault",
        nationality: "French",
      },
      grid: "1",
      laps: "57",
      status: "Finished",
      Time: {
        millis: "5057336",
        time: "1:24:17.336",
      },
      FastestLap: {
        rank: "2",
        lap: "55",
        Time: {
          time: "1:25.994",
        },
        AverageSpeed: {
          units: "kph",
          speed: "222.001",
        },
      },
    },
  ],
};

it("TrackItem should have circuit text", () => {
  const { getByTestId } = render(
    <Tracks racer={data} key={0} championID="alonso" />
  );
  expect(getByTestId("circuit-text")).toHaveTextContent(
    "Albert Park Grand Prix Circuit"
  );
});

it("TrackItem should have given text", () => {
  const { getByTestId } = render(
    <Tracks racer={data} key={0} championID="alonso" />
  );
  expect(getByTestId("given-name-text")).toHaveTextContent(
    "Giancarlo Fisichella"
  );
});

it("TrackItem should have constructor text", () => {
  const { getByTestId } = render(
    <Tracks racer={data} key={0} championID="alonso" />
  );
  expect(getByTestId("constructor-text")).toHaveTextContent("Renault");
});

it("TrackItem should have laps text", () => {
  const { getByTestId } = render(
    <Tracks racer={data} key={0} championID="alonso" />
  );
  expect(getByTestId("laps-text")).toHaveTextContent("57");
});

it("TrackItem should have grid text", () => {
  const { getByTestId } = render(
    <Tracks racer={data} key={0} championID="alonso" />
  );
  expect(getByTestId("grid-text")).toHaveTextContent("1");
});

it("TrackItem should have time text", () => {
  const { getByTestId } = render(
    <Tracks racer={data} key={0} championID="alonso" />
  );
  expect(getByTestId("time-text")).toHaveTextContent("1:24:17.336");
});

it("TrackItem should have point text", () => {
  const { getByTestId } = render(
    <Tracks racer={data} key={0} championID="alonso" />
  );
  expect(getByTestId("point-text")).toHaveTextContent("10");
});
