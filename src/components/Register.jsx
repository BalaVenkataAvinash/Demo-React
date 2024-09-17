import React from 'react'
import { useState } from 'react'
import Fruits from './Fruits'

export default function Register() {
  const [fruits,setFruits] = useState([
    {
      fruitName:"Watemelon",fruitPrice:40,fruitDescription:"good for health"
    },
    {
      fruitName:"Banana",fruitPrice:3,fruitDescription:"good in calcium"
    },
    {
      fruitName:"Apple",fruitPrice:20,fruitDescription:"no need to doctor"
    }
  ])
  return (
    <div>
      <h1>Register Component</h1>
      {
        fruits.map((items)=>{
         return( <Fruits singleFruit={items}/>)
        })
      }
    </div>
  )
}
