import React from 'react'
import add from '../../Assets/add.svg'
import './AddButton.scss'

const AddButton = ({handleSubmit}) => {
  return (
    <div>
      <button id="add" onClick={()=>handleSubmit()}>
        <img src={add} alt="add icon" className="add-icon"/>
      </button>
    </div>
  )
}
export default AddButton;
