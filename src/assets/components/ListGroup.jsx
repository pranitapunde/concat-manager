import React, { useContext } from 'react'
import ListItem from './ListItem'
import contactContext from '../context/ContactCOntext'

const ListGroup = () => {

  const {contacts} = useContext(contactContext)


  return (
    <ul className='list-group my-3 w-75'>

     {
      contacts.map ((contact) => (
      <ListItem key = {contact.id} contact={contact}/>
      ))
     }
    </ul>
  )
}

export default ListGroup
