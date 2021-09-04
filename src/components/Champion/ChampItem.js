import React, { useState, useEffect,useRef } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeasonalRace from '../Races/SeasonalRace';

const ChampItem = ({ user, closeHandle, clickIndex, index }) => {
  const [isTableSelected, setIsTableSelected] = useState(clickIndex === index);
  const [setYear, setsetYear] = useState(2005);
  const [champ, setChamp] = useState('');

  function handleClick(season, driverId) {
    setIsTableSelected(true);
    setsetYear(season);
    setChamp(driverId);
    closeHandle(index);
  }

  useEffect(() => {
    if (index !== clickIndex) {
      setIsTableSelected(false);
    }
  }, [clickIndex]);

  return (
    <div style={styles.component}>
      {isTableSelected ? (
        <SeasonalRace setYear={setYear} champ={champ} />
      ) : (
        <Table
          striped
          bordered
          hover
          className="border border-1 border-dark my-3"
          style={styles.cardWraper}
          onClick={() =>
            handleClick(user.season, user.DriverStandings[0].Driver.driverId)
          }
        >
          <thead>
            <tr>
              <th colSpan="5">Season:{user.season} Champion</th>
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
      )}
    </div>
  );
};

const styles = {
  component: {
    backgroundColor: '#e5e5e5'
  },
  cardWraper: {
    cursor: 'pointer'
  },
  icon: {
    'font-size': '1.5rem',
    'font-weight': '700'
  }
};

export default ChampItem;