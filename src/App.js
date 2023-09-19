
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import React, { useState } from 'react';
import LoginScreen from './pages/LoginScreen';
// import Trails from './components/Trails';
// import Weather from './components/Weather';
// import TerrainPark from './components/TerrainPark';
// import Friends from './components/Friends';
// import Lifts from './components/Lifts';
// import SOS from './components/SOS';
// import Schedule from './components/Schedule';
// import Music from './components/Music';

function App() {

let [resort, setResort] = useState("None");
let [resortList, setResortList] = useState([]);

  // let [resort, setResort] = useState({
  //   resortname: "liberty",

  // });
  
  // resortList={resortList} setResortList={setResortList}


  let routes = (
    <Routes>
    <Route path="/" element={<LoginScreen />} />
    <Route path="/welcome" element={<Welcome resort={resort} setResort={setResort} resortList={resortList} setResortList={setResortList} />} />
    {/* <Route path="/trailMaps" element={<Trails resort={resort} />} />
    <Route path="/conditions" element={<Weather resort={resort} />} />
    <Route path="/terrainparks" element={<TerrainPark resort={resort} />} />
    <Route path="/friendszone" element={<Friends resort={resort} />} />
    <Route path="/liftdetails" element={<Lifts resort={resort} />} />
    <Route path="/musiczone" element={<Music resort={resort} />} />
    <Route path="/mountainschedule" element={<Schedule resort={resort} />} />
    <Route path="/sos" element={<SOS resort={resort} />} /> */}
  </Routes>
  );

  return (
  <div className='main-app-div'>
    <header>
      <Header/>
    </header>
      <main>
      {routes}
     </main>
     <footer>
     </footer>
  </div>
  );
}

export default App;
