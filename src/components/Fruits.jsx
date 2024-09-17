import React from 'react'

export default function Fruits(props){
     console.log(props)
  return (
    <div>
      <p>Name:{props.singleFruit.fruitName}</p>
      <p>Price:{props.singleFruit.fruitPrice}</p>
      <p>Description:{props.singleFruit.fruitDescription}</p>
    </div>
  )
}
