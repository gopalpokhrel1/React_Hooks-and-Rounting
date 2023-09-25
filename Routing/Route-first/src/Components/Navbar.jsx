import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/second'>Second</NavLink></li>
        <li><NavLink to='/third'>Third</NavLink></li>

      </ul>
    </div>
  )
}
