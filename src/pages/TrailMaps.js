import React from 'react';
import BackButton from '../components/BackButton';
import './TrailMaps.css'

const TrailMaps = (resort) => {
    console.log(resort)

    if(!resort){
        <h1>Loading</h1>
    }

    if(resort){
  return (
    <div>
        trail map image for {resort.resort.resortName}:
        <br/>
      <img src= {resort.resort.trailMaps} alt="map" className='trail-map-img'></img>
      <BackButton/>
    </div>
  )
    }
}

export default TrailMaps
