import React,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { styled } from '@mui/material'
import '../stylings/Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
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

     const navigate=useNavigate()


     function handleChange(e){
          const{name,value} = e.target
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
          console.log(formDate)
          axios.post(`https://jobportal.codegnan.com/api/v1/studentlogin`,{
            username:formDate.email,password:formDate.password
          })
          .then((res)=>{
            console.log("status code", res.data)
            if(res.status===200){
              console.log("Login Successful")
              localStorage.setItem("student_id",res.data.student_id)
              navigate('/')
              return;
            }
          })
          .catch((error)=>{
            console.log("Status Code",error.status)
            alert("Invalid Credentials")
          })
     }
     //this function helps to save the ebtered  input field  data  
    //  function handleEmail(e){
    //       console.log(e.target.value)
    //       //event always carry the target object from which we get the information
    //       setEmail(e.target.value)
    //  }
  return (
    <div className='login'>
          <form onSubmit={handleSubmit} className='login-form'>
               <p>
                    <input type="email" placeholder='Enter Email' name="email" 
                    onChange={handleChange}
                    // onChange={handleEmail} 
                    required/>
               </p>
               <p>
                    <input type="text" placeholder='Enter Password' name='password' 
                    onChange={handleChange}
                    //  onChange={(e)=>{
                    //      console.log("Password is: " +e.target.value)
                    //      setPassword(e.target.value)
                    // }} 
                    required/>
               </p>
               <p>
                    <button >Submit</button>
               </p>
          </form>
    </div>
  )
}



// import React from 'react'

// export default function Login() {
//   return (
//     <div>
//       <h1>Login Component</h1>
//     </div>
//   )
// }
