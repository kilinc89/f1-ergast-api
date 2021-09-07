import React, { useEffect, useState } from "react";
import ChampWraper from "./ChampWraper";
import axios from "axios";

const ChampionsList = () => {
  const [champ, setChamp] = useState([]);
  const [clickIndex, setclickIndex] = useState(null);

  useEffect(() => {
    champ.length < 1 && getChamp();
  }, []);

  const getChamp = async () => {
    await axios({
      method: "get",
      url: `https://ergast.com/api/f1/driverstandings/1.json?limit=60&offset=55`,
    }).then((response) => {
      setChamp(response.data.MRData.StandingsTable.StandingsLists);
    });
  };

  return (
    <div className="p-3 row" data-testid="champion-list-wraper">
      {champ.map((user, index) => (
        <ChampWraper
          user={user}
          clickIndex={clickIndex}
          index={index}
          closeHandle={(index) => setclickIndex(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default ChampionsList;
