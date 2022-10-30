import React from 'react'
import "./App.css";

function Headder(props) {
  return ( 
    <>
    <div className='Container-Head flex flex-row text-white styfont'>
    <h1 className='Head-logo'>{props.title}</h1>
    </div>
    </>
  )
}

export default Headder
