import React from 'react'
import "./contacts.css"
function Contacts(props) {
  return (
    <div className='contact_container'>
<div onClick={()=>props.fun("imageshow")}>
  <Contact/>
</div>
        
     

    </div>
  )
}

export default Contacts



function Contact() {
    return (
      <div className='contact'>
        s
      </div>
    )
  }