import React from 'react';
import './ButtonGallery.css';
import { Link } from 'react-router-dom';
import TrailsButton from './TrailsButton';
import WeatherButton from './WeatherButton';
import TerrainParkButton from './TerrainParkButton';
import FriendsButton from './Friends';
import MusicButton from './MusicButton';
import ScheduleButton from './ScheduleButton';
import LiftsButton from './LiftsButton';

const ButtonGallery = () => {
  return (
    <div>
              <div className="trails-and-weather">
          <div id="trails">
            <Link to="/trailmaps"><TrailsButton /></Link>
            
          </div>
          <div id="weather">
            <WeatherButton />
          </div>
        </div>
        <div className="terrain-and-friends">
          <div id="terrain">
            <TerrainParkButton />
          </div>
          <div id="friends">
            <FriendsButton />
          </div>
        </div>
  
        <div className="music-lifts-schedule">
        <div id="music">
          <MusicButton />
        </div>
        <div id="lifts">
          <LiftsButton />
        </div>
        <div id="schedule">
          <ScheduleButton />
        </div>
        </div>
        
    </div>
  )
}

export default ButtonGallery
