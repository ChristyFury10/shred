import React from 'react';
import BackButton from '../components/BackButton';

const TrailMaps = (resort) => {
    console.log(resort)

    if(!resort){
        <h1>Loading</h1>
    }

    if(resort){
  return (
    <div>
        trail map image for {resort.resort.resortName}:
      <img src= {resort.resort.trailMaps} alt="map"></img>
      <BackButton/>
    </div>
  )
    }
}

export default TrailMaps
