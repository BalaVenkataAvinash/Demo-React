import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import '../stylings/Patient.css'

export default function Patient() {
     const [patientData, setPatient] = useState({
          name: 'name',
          age: 'age',
          gender: 'gender',
          salary: 'salary',
          specialization: 'specialization'
     })
     function handleSubmit(e) {
          e.preventDefault()
          console.log(patientData)
          axios.post(`https://doc-back.onrender.com/doctors`,{
               name:patientData.name,
               age:patientData.age,
               gender:patientData.gender,
               salary:patientData.salary,
               specialization:patientData.specialization
          })
          .then((res)=>{
               console.log(res)
          })
     }
     function handleInputChange(e) {
          const { name, value } = e.target
          setPatient((prev) => (
               {
                    ...prev,
                    [name]: value
               }
          ))
     }

     return (
               <div className='patient'>
                    <h1>Patient Component</h1>
                    <form onSubmit={handleSubmit} className='patient-form'>
                         <p><input name='name' type="text" placeholder='Enter Your Name' onChange={handleInputChange} /></p>
                         <p><input name='age' type="number" placeholder='Enter Your Age' onChange={handleInputChange} /></p>
                         <p><input name='gender' type="radio" value="male" onChange={handleInputChange} />Male
                         <input name='gender' type="radio" value="female" onChange={handleInputChange} />Female</p>
                         <p><input name='specialization' type="text" placeholder='Enter Your specialization' onChange={handleInputChange} /></p>
                         <p><input name='salary' type="text" placeholder='Enter Your Salary' onChange={handleInputChange} /></p>
                         <button>Submit</button>
                    </form>
               </div>

     )
}
