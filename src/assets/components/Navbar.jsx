import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'


const Navbar = () => {

  const { darkTheme,dispatch } = useContext(ThemeContext)

  const changeTheme = () => {
    dispatch ({
      type : "CHANGE_THEME",

    })
  }

  return (
    <nav className={darkTheme ? "  navbar bg-secondary text-light" : " navbar  bg-light text-dark"}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">CONTACT MANAGER</span>
        <button className={ darkTheme ? 'btn btn-sm btn-light' :'btn btn-sm btn-dark'} onClick={changeTheme}> 
        { darkTheme ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>

  )
}

export default Navbar
