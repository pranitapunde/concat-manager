import React, { useContext, useState } from 'react'
import ThemeContext from '../context/themeContext'
import contactContext from '../context/ContactContext'
const Form = () => {

  const { darkTheme } = useContext(ThemeContext)
  const { dispatch } = useContext(contactContext)


  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [relation, setRelation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log(newContact)

    dispatch ({
      type : "SAVE_CONTACT",
      payload : {
        id: crypto.randomUUID(),
        name,
        number,
        relation,

      }
    })

    setName("")
    setNumber("")
    setRelation("")
  }

  return (

    <form   onSubmit={handleSubmit} className={darkTheme ? ' bg-secondary text-light my-3 w-75 p-2' : ' my-3 w-75 p-2'}>
      <input type="text" placeholder=' Enter name ' className={darkTheme ? ' text-light form-control my-2 bg-secondary' : ' text-dark form-control my-2'} onChange={(e) => setName(e.target.value)} value={name} />
      <input type="text" placeholder='Enter number ' className={darkTheme ? ' text-light form-control my-2 bg-secondary' : ' text-dark form-control my-2'} onChange={(e) => setNumber(e.target.value)} value={number} />
      <select className={darkTheme ? 'form-control my-2 bg-secondary' : 'form-control my-2'} onChange={(e) => setRelation(e.target.value)} value={relation}>
        <option value="family"> Family</option>
        <option value="friends"> Friends</option>
        <option value="others"> Others</option>
      </select>
      <button className='btn btn-primary w-50 rounded-0'>save</button>



    </form>
  )
}

export default Form

