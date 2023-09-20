import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import {PiMountainsDuotone} from 'react-icons/pi'


const TrailsButton = (props) => {
  return (
      <Button className='btn-info main-button'> <PiMountainsDuotone className='button-icon'/> </Button>
  )
}

export default TrailsButton
