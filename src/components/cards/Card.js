import React from 'react'
import './Card.css'


const cards = (props) => {
  return (
    <div className='card--container'>
      <h1 className="card--title">{props.name}</h1>
      <p className='card--category'>{props.category}</p>
      <p className='card--cost'>R${props.cost}</p>
    </div>
  )
}

export default cards