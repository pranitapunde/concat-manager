import React from 'react'
import Navbar from './assets/components/Navbar'
import ListGroup from './assets/components/ListGroup'
import Form from './assets/components/Form'
import { ThemeProvider } from './assets/context/themeContext'
import { ContactProvider } from './assets/context/ContactCOntext'


const App = () => {
  // theme
  

  return (
    < ThemeProvider>
      <Navbar/>
      <ContactProvider>
      <div className='container p-2  d-flex  flex-column align-items-center justify-content-center '>
        <Form />
        <ListGroup />
      </div>
      </ContactProvider>
      
    </ ThemeProvider>
  )
}

export default App;





// jab jab state change hoti componet rirender hota hai " waps se code read krta h "