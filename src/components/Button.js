import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

export function Button() {
  return (
   <Link to='/'>
   <button className='btn'>Antimicrobial Resistance Database</button>
   </Link>
);
}
