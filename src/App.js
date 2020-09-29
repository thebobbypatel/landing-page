import React, { useState, useEffect } from 'react'
import SimpleLineIcon from 'react-simple-line-icons'
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";
import FittedImage from 'react-fitted-image';

import Header from './components/Header'
import Icons from './components/Icons'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials';

const App = () => {
  const [emails, setEmails] = useState([])
  const [newEmail, setNewEmail] = useState([''])
  const [popupMessage, setPopupMessage] = useState(null)

  const addEmail = (event) => {
    event.preventDefault()
    if (newEmail.length > 0){
      setEmails(emails.concat(newEmail))
      console.log('Added Email: ' + newEmail)
      setNewEmail('')
      setPopupMessage('Thanks! We will reach out to your team very soon.')
      setTimeout(() => {
        setPopupMessage(null)
      }, 8000)
    } else {
      console.log('Input String is Empty.')
    }
  }

  const handleEmailChange = (event) => {
    console.log('Current Email Field Value: ' + event.target.value)
    setNewEmail(event.target.value)
  }

  return (
    <div>
      <div className="container">
        <Header 
          popupMessage={popupMessage}
          emails={emails} 
          newEmail={newEmail} 
          handleEmailChange={handleEmailChange}
          addEmail={addEmail}
        />
        <Icons />
        <Showcase />
        <Testimonials />



      </div>
    </div>
  )
}

export default App