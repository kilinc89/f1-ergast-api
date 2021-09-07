import React from "react";
const Tracks = ({ racer, championID }) => {
  return (
    <>
      <tr
        className="tableId"
        style={{ backgroundColor: championID === racer.Results[0].Driver.driverId && "#20c997" } }
      >
        <td>{racer.Circuit.circuitName}</td>
        <td>{`${racer.Results[0].Driver.givenName} ${racer.Results[0].Driver.familyName}`}</td>
        <td>{racer.Results[0].Constructor.name}</td>
        <td>{racer.Results[0].laps}</td>
        <td>{racer.Results[0].grid}</td>
        <td>{racer.Results[0].Time.time}</td>
        <td>{racer.Results[0].points}</td>
      </tr>
    </>
  );
};

export default Tracks;
