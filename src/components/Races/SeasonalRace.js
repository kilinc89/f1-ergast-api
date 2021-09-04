import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracks from "./Tracks";

const SeasonalRaces = ({ setYear, championID, closeResult }) => {
  const [seasonalRaces, setseasonalRaces] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: `http://ergast.com/api/f1/${setYear}/results/1.json`,
    }).then((response) => {
      setseasonalRaces(response.data.MRData.RaceTable.Races);
    });
  }, []);

  return (
    <div>
      <Table striped bordered hover className="border border-3">
        <thead>
          <tr>
            <th colSpan="7"  className="hover-cursor" onClick={() => closeResult()}>
              Season:{setYear} Race Results
            </th>
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
          {seasonalRaces.map((racer, index) => (
            <Tracks racer={racer} key={index} championID={championID} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const styles = {
  cardWraper: {
    cursor: "pointer",
  }
};

export default SeasonalRaces;
