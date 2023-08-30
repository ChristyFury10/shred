import React from "react";
import SelectResort from "../components/SelectResort";
import SOS from "../components/SOS";
import Music from "../components/Music";
import Trails from "../components/Trails";
import Weather from "../components/Weather";
import TerrainPark from "../components/TerrainPark";
import Friends from "../components/Friends";
import Lifts from "../components/Lifts";
import Schedule from "../components/Schedule";
import "./Welcome.css";

const Welcome = ({ resort, setResort }) => {
  return (
    <div className="main-welcome-div">
      <div className="select-resort">
        <SelectResort resort={resort} setResort={setResort} />
      </div>
      <div>You are currently viewing: {resort.name} </div>
      <div className="trails-and-weather">
        <div id="trails">
          <Trails />
        </div>
        <div id="weather">
          <Weather />
        </div>
      </div>
      <div className="terrain-and-friends">
        <div id="terrain">
          <TerrainPark />
        </div>
        <div id="friends">
          <Friends />
        </div>
      </div>

      <div className="music-lifts-schedule">
      <div id="music">
        <Music />
      </div>
      <div id="lifts">
        <Lifts />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      </div>
      
      <div className="sos">
        <SOS />
      </div>
    </div>
  );
};

export default Welcome;
