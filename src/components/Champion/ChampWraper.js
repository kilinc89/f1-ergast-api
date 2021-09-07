import React, { useState, useEffect,memo } from "react";
import SeasonalRaces from "../Races/SeasonalRaces";
import ChampItem from "./ChampItem";

const ChampWraper = memo(({ user, closeHandle, clickIndex, index }) => {
  const [isTableSelected, setIsTableSelected] = useState(clickIndex === index);
  const [setYear, setsetYear] = useState(null);
  const [championID, setchampionID] = useState("");

  const handleClick=(season, driverId)=> {
    setIsTableSelected(true);
    setsetYear(season);
    setchampionID(driverId);
    closeHandle(index);
  }

  useEffect(() => {
    if (index !== clickIndex) {
      setIsTableSelected(false);
    }
  }, [clickIndex]);

  return (
    <div style={styles.component} >
      {isTableSelected ? (
        <SeasonalRaces
          setYear={setYear}
          championID={championID}
          closeResult={() => setIsTableSelected(false)}
        />
      ) :
        <ChampItem
          user={user}
          handleClick={handleClick}
        />
      }
    </div>
  );
},);

const styles = {
  component: {
    backgroundColor: "#e5e5e5",
  },
};

export default ChampWraper;
