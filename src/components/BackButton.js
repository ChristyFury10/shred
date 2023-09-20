import React from 'react';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div>
      <Link to="/welcome">
        <button>Back to Main Screen</button>
      </Link>
    </div>
  )
}

export default BackButton
