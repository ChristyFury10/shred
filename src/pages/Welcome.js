import React, { useEffect } from "react";
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


const Welcome = ({ resort, setResort, resortList, setResortList }) => {

  const backendURL = "http://localhost:4000/resorts"
  

  useEffect(() => {
    console.log("useEffect start");
  
    const fetchResorts = async () => {
      try {
        let responseData = await fetch(backendURL);
        if (responseData.ok) {
          let allResorts = await responseData.json();
          setResortList(allResorts);
          console.log(allResorts)
        } else {
          console.error("Failed to fetch resorts data");
        }
      } catch (error) {
        console.error("Error fetching resorts data:", error);
      }
    };
  
    fetchResorts();
  }, [setResortList]);  

  const loading =()=>{
    return <div>Loading...</div>;
  }
  
  const loaded =()=>{

    return (
      <div className="main-welcome-div">
        <div className="select-resort">
          <SelectResort resort={resort} setResort={setResort} resortList={resortList} setResortList={setResortList}/>
        </div>
        <div>You are currently viewing: {resort.resortName} </div>
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
  }


  // if (resort === null) {
  //   return <div>Loading...</div>; // Or any other placeholder or loading indicator
  // }

  // return (
  //   <div className="main-welcome-div">
  //     <div className="select-resort">
  //       <SelectResort resort={resort} setResort={setResort} resortList={resortList} setResortList={setResortList}/>
  //     </div>
  //     <div>You are currently viewing: {resort.name} </div>
  //     <div className="trails-and-weather">
  //       <div id="trails">
  //         <Trails />
  //       </div>
  //       <div id="weather">
  //         <Weather />
  //       </div>
  //     </div>
  //     <div className="terrain-and-friends">
  //       <div id="terrain">
  //         <TerrainPark />
  //       </div>
  //       <div id="friends">
  //         <Friends />
  //       </div>
  //     </div>

  //     <div className="music-lifts-schedule">
  //     <div id="music">
  //       <Music />
  //     </div>
  //     <div id="lifts">
  //       <Lifts />
  //     </div>
  //     <div id="schedule">
  //       <Schedule />
  //     </div>
  //     </div>
      
  //     <div className="sos">
  //       <SOS />
  //     </div>
  //   </div>
  // );

return resortList ? loaded() : loading();
};



export default Welcome;
