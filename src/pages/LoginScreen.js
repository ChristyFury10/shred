import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import './LoginScreen.css'

const LoginScreen = () => {
  return (
    <div className='login-div'>
    <a href="/welcome"><Button>Login</Button></a>
    </div>
  )
}

export default LoginScreen
