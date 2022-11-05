import React from 'react'
import "./chatbox.css"
import animation from "../../animation.gif"

function Chatbox() {
 
  console.log("this is");
  return (
    <div className='chatbox'>
        <img src={animation} alt="img" width="50%" className='imagesho'/>
    </div>
  )
}

export default Chatbox