import React from 'react'
import Chatbox from '../components/chatbox/Chatbox'
import Contacts from '../components/contacts/Contacts'
import Form from '../components/form/Form'
import Navbar from '../components/navbar/Navbar'
import "./home.css"

var f=(c)=>{
  return c

}
function Home() {

  return (
    <div className='container'>
        <Navbar/>
        <div className="bodi-left">
            <Chatbox class={f}/>
            <Form/>
        </div>
        <div className="bodi-right">
       
           <Contacts fun={f}/>
        </div>
    </div>
  )
}

export default Home