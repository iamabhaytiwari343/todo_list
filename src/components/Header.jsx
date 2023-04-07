import React from 'react'
import "./head.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
  return (
    <header className="header">
      <FontAwesomeIcon icon={faPenToSquare} className="header-icon" />
      <h1 className="header-title">Todo List</h1>
      
    </header>
  )
}

export default Header