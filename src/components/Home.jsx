import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../stylings/Home.css'

export default function Home() {
  const [doctors,setDoctors] = useState([])
  useEffect(()=>{
    axios.get(`https://doc-back.onrender.com/doctors`)
    .then((res)=>{
      console.log(res.data)
      setDoctors(res.data)
    })
  },[])
  
  return (
    <div className='doctors'>
      {
        doctors.map((i)=>{
          return(
          <div key={i.id} className='doctor'>
              <p>Name:{i.name}</p>
              <p>Gender:{i.gender}</p>
              <p>Age:{i.age}</p>
              <p>Specilizations:{i.specialization}</p>
          </div>
        )
        })
      }
    </div>
  )
}
