import React from 'react';

import DelIcon from '../DelIcon/DelIcon.js'

import './Card.scss'

const Card = ({ _id, todo }) => {
  return (
    <div className="card-container">
      <div className="header">
        <div className="option-icon">
          <DelIcon id={_id}/>
        </div>
      </div>
      <div className="body">
        {todo}
      </div>
    </div>
  )
}

export default Card
