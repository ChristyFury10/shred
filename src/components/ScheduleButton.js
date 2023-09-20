import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import{LuCalendarClock} from 'react-icons/lu'

const ScheduleButton
 = () => {
  return (
      <Button className='btn-info main-button'> <LuCalendarClock className='button-icon'/> </Button>
  )
}

export default ScheduleButton

