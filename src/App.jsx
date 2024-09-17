import React from 'react'
import Home from './components/Home'
import Contact from './components/Contact.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Navigation from './components/Navigation.jsx'
import Patient from './components/Patient.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/patient' element={<Patient/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}









// import { useState } from "react"
// import List from "./List.jsx"
// import Input from "./Input.jsx"
// import BoxComponet from "./Box.jsx"
// import NavBar from "./Appbar.jsx"
// import StackDir from "./Stack.jsx"
// import CardSection from "./CardSection.jsx"
// import { Box, createTheme, ThemeProvider } from "@mui/material"
// import Home from "./components/Home.jsx"
// import Login from "./components/Login.jsx"
// import Register from "./components/Register.jsx"
// import Contact from "./components/Contact.jsx"
// function App() {
//   const [name, setName] = useState("Avinash")
//   const [details, setDetails] = useState({ email: "balavenkataavianshpillem@gmail.com", number: 6309880591 })
//   const [edu, setEdu] = useState(["LIMAT College", "Passed out in 2024", "In stream of CSE"])
//   const [mode, setMode] = useState("light")

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode
//     }
//   })
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Box bgcolor={"background.default"}>
//         <NavBar mode={mode} setMode={setMode}/>
//         <StackDir />
//         <Input />
//         <CardSection />
//         {/* <BoxComponet/>
//       <List/>
//       <h1>My name is {name} </h1>
//       <h2>My Details are {details.email}, {details.number}</h2>
//       <h2>Graduation in {edu[0]} and passed out on {edu[1]} in the stream of {edu[2]}</h2>
//       <h2>Graduation Details:</h2>
//       {
//         edu.map((i)=>{
//           return <h3><p>{i}</p></h3>
//         }
//         )
//       }
//       <h1><p>Hello World</p>
//         <p>Guys</p></h1>*/}
//       </Box>
//     </ThemeProvider>
//   )
// }
// export default App