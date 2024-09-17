import React,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material'

export default function Input() {
     const [email,setEmail] = useState("")
     const [password,setPassword] = useState("")
     const [formDate,setFormData] = useState(
          {
               email:"",
               password:""
          }
     )
     const MyButton = styled(Button)({
          backgroundColor:"blue"
     })
     function handleChange(e){
          const{name,value} = e.target
          console.log(name,value)
          //prev is used to access other object 
          //setFormData((prev)=>({}))
          setFormData((prev)=>({
               //spreading the every object and getting the specific object key
               ...prev,
               //picking the specific key and storing the user entered value
               [name]:value
          }))
     }
     function handleSubmit(e){
          e.preventDefault()
          alert("Your Email is:- "+formDate.email+"              Your Password is:- "+formDate.password)
          console.log(formDate)
     }
     //this function helps to save the ebtered  input field  data  
     function handleEmail(e){
          console.log(e.target.value)
          //event always carry the target object from which we get the information
          setEmail(e.target.value)
     }
  return (
    <div>
          <form onSubmit={handleSubmit}>
               <p>
                    <input type="email" placeholder='Enter Email' name="email" 
                    onChange={handleChange}
                    // onChange={handleEmail} 
                    required/>
               </p>
               <p>
                    <input type="password" placeholder='Enter Password' name='password' 
                    onChange={handleChange}
                    //  onChange={(e)=>{
                    //      console.log("Password is: " +e.target.value)
                    //      setPassword(e.target.value)
                    // }} 
                    required/>
               </p>
               <p>
                    <MyButton variant='contained'>Submit</MyButton>
               </p>
          </form>
    </div>
  )
}