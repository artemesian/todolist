import React from 'react'
import { connect } from 'react-redux';

import { delFromID } from '../../Redux/todos/todos-actions.js';

import del from "../../Assets/delete.png";

import './DelIcon.scss'

const DelIcon = ({id,dispatch}) => {
  return (
    <img src={del} alt="delete icon" className="delete" onClick={() => dispatch(delFromID(id))}/>
  )
}

export default connect()(DelIcon);