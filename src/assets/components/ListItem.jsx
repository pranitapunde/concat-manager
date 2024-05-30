import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../context/themeContext'
import contactContext from '../context/ContactCOntext'

const ListItem = ( {contact}) => {
const {darkTheme} = useContext(ThemeContext)
const {dispatch} = useContext( contactContext)
const handleDelete = (id) => {
  dispatch ({
    type : "DELETE",
    payload : id,

  })

}

  return (
    <li className= {darkTheme ? 'bg-secondary list-group-item text-light': 'list-group-item rounded-0'}>
      <h4>{ contact.name}</h4>
      <h6>{ contact.number}</h6>
      <span className="badge text-bg-primary rounded-0">{contact.relation}</span>
      <button className='btn btn-danger btn-sm rounded-0 float-end' onClick={() => handleDelete(contact.id)}> Delete</button>
      <button className="btn btn-success btn-sm rounded-0 float-end">
        Call Now
      </button>
      
    </li>


  )
}

export default ListItem
