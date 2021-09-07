import React from "react";
const Tracks = ({ racer, championID }) => {
  return (
    <tr
      key={championID}
      style={{
        backgroundColor:
          championID === racer.Results[0].Driver.driverId && "#20c997",
      }}
    >
      <td data-testid="circuit-text">{racer.Circuit.circuitName}</td>
      <td data-testid="given-name-text">{`${racer.Results[0].Driver.givenName} ${racer.Results[0].Driver.familyName}`}</td>
      <td data-testid="constructor-text">
        {racer.Results[0].Constructor.name}
      </td>
      <td data-testid="laps-text">{racer.Results[0].laps}</td>
      <td data-testid="grid-text">{racer.Results[0].grid}</td>
      <td data-testid="time-text">{racer.Results[0].Time.time}</td>
      <td data-testid="point-text">{racer.Results[0].points}</td>
    </tr>
  );
};

export default Tracks;
