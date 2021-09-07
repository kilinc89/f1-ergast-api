import React from "react";
import { Table } from "react-bootstrap";
import { ArrowDownOutlined } from "@ant-design/icons";

const ChampItem = ({ user, handleClick }) => {
  return (
    <Table
      striped
      bordered
      hover
      className="border border-1 border-dark hover-cursor"
      onClick={() =>
        handleClick(user.season, user.DriverStandings[0].Driver.driverId)
      }
    >
      <thead>
        <tr>
          <th colSpan="4" data-testid="champ-info">
            Season:{user.season} Champion
          </th>
          <th colSpan="1">
            <ArrowDownOutlined />
          </th>
        </tr>
        <tr>
          <th>Driver</th>
          <th>Constructor</th>
          <th>Points</th>
          <th>Round</th>
          <th>Wins</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{`${user.DriverStandings[0].Driver.givenName} ${user.DriverStandings[0].Driver.familyName}`}</td>
          <td>{user.DriverStandings[0].Constructors[0].name}</td>
          <td>{user.DriverStandings[0].points}</td>
          <td>{user.round}</td>
          <td>{user.DriverStandings[0].wins}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ChampItem;
