import React, { useEffect, useState } from "react";
import ChampItem from "./ChampItem";
import axios from "axios";

const ChampionsList = () => {
  const [champ, setChamp] = useState([]);
  const [clickIndex, setclickIndex] = useState(null);

  useEffect(() => {
    champ.length<1 && getChamp();
  }, []);

  async function getChamp() {
    await axios({
      method: "get",
      url: `https://ergast.com/api/f1/driverstandings/1.json?limit=60&offset=55`,
    }).then((response) => {
      setChamp(response.data.MRData.StandingsTable.StandingsLists);
    });
  }
  const closeHandle = (index) => {
    setclickIndex(index);
  };

  useEffect(() => {}, [clickIndex]);

  return (
    <div className="p-3 row">
      {champ.map((user, index) => (
        <ChampItem
          user={user}
          clickIndex={clickIndex}
          index={index}
          closeHandle={closeHandle}
          key={index}
        />
      ))}
    </div>
  );
};

export default ChampionsList;