import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tracks from './Tracks';

const SeasonalRaces = ({ setYear, champ }) => {
  const [seasonalRaces, setseasonalRaces] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://ergast.com/api/f1/${setYear}/results/1.json`
    }).then((response) => {
      setseasonalRaces(response.data.MRData.RaceTable.Races);
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover className="border border-3 my-3">
        <thead>
          <tr>
              <th colSpan="7">Season:{setYear} Race Results</th>
            </tr>
          <tr>
            <th>Circuit Name</th>
            <th>Winner</th>
            <th>Constructor</th>
            <th>Laps</th>
            <th>Grid</th>
            <th>Time</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {seasonalRaces.map((user, index) => (
            <Tracks user={user} key={index} champ={champ} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SeasonalRaces;
