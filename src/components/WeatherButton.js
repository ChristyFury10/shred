import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import {BsFillCloudSnowFill} from 'react-icons/bs'

const WeatherButton = () => {
  return (
      <Button className='btn-info main-button' > <BsFillCloudSnowFill className='button-icon'/> </Button>
  )
}

export default WeatherButton
