import React from "react";
const Tracks = ({ user, champ }) => {
  const findChamp = () => {
    return champ === user.Results[0].Driver.driverId;
  };
  return (
    <>
      <tr
        className="tableId"
        style={findChamp() ? { backgroundColor: "#20c997" } : null}
      >
        <td>{user.Circuit.circuitName}</td>
        <td>{`${user.Results[0].Driver.givenName} ${user.Results[0].Driver.familyName}`}</td>
        <td>{user.Results[0].Constructor.name}</td>
        <td>{user.Results[0].laps}</td>
        <td>{user.Results[0].grid}</td>
        <td>{user.Results[0].Time.time}</td>
        <td>{user.Results[0].points}</td>
      </tr>
    </>
  );
};

export default Tracks;
