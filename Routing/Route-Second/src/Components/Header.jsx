import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <ul style={{
        display:'flex',
        width:'100%',
        padding:'2rem',
        justifyContent:'center',
        alignItems:'center',

        gap:'2rem',
        listStyle:'none'
    }}>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='blog'>Blog</NavLink></li>
    </ul>
      
    </>
  )
}
