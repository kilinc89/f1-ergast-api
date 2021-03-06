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
      data-testid="table-wraper"
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
          <td data-testid="driver-name-text">{`${user.DriverStandings[0].Driver.givenName} ${user.DriverStandings[0].Driver.familyName}`}</td>
          <td data-testid="constractor-text">
            {user.DriverStandings[0].Constructors[0].name}
          </td>
          <td data-testid="point-text">{user.DriverStandings[0].points}</td>
          <td data-testid="round-text">{user.round}</td>
          <td data-testid="wins-text">{user.DriverStandings[0].wins}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ChampItem;
