import React from 'react'
import SelectResort from '../components/SelectResort'
import Header from '../components/Header'
import SOS from '../components/SOS'
import Music from '../components/Music'
import Trails from '../components/Trails'
import Weather from '../components/Weather'
import TerrainPark from '../components/TerrainPark'
import Friends from '../components/Friends'
import Lifts from '../components/Lifts'
import Schedule from '../components/Schedule'
import { useEffect } from 'react'


const Welcome = ({resort, setResort}) => {

  const loadPage = () => {
    setResort({ name: 'liberty' });
  };

  useEffect(() => {
    loadPage();
  }, [])

  return (
    <div>
      Welcome To shredtown, what would you like to do?
      <div>
          <SelectResort/>
      </div>
      <div>You are currently viewing: {resort.name} </div>
      <div>
        <Trails/>
      </div>
      <div>
        <Weather/>
      </div>
      <div>
        <TerrainPark/>
      </div>
      <div>
        <Friends/>
      </div>
      <div>
        <Music/>
      </div>
      <div>
        <Lifts/>
      </div>
      <div>
        <Schedule/>
      </div>
      <div>
        <SOS/>
      </div>
    </div>
  )
}

export default Welcome
