
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import {useState} from 'react'
import LoginScreen from './LoginScreen';


function App() {


  
  let [resort, setResort] = useState({
    name: "liberty"
  });


  let routes = (
    <Routes>
    <Route path="/" element= {<LoginScreen/>} />
    <Route path="/welcome" element={<Welcome resort={resort} setResort={setResort}/> }  />
    <Route path="/trailMaps" resort={resort}/>
    <Route path="/conditions" resort={resort}/>
    <Route path="/terrainparks" resort={resort}/>
    <Route path="/friendszone" resort={resort}/>
    <Route path="/liftdetails" resort={resort}/>
    <Route path="/musiczone" resort={resort}/>
    <Route path="/mountainschedule" resort={resort}/>
    <Route path="/sos" resort={resort}/>
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
