import { useState } from "react"
function List(){
     const [marks,setMarks] = useState([87,95,67,39,58])
     return( 
     <div>{
          marks.map((i)=>{
          return(
          <div>
               Marks:- <p key={i}>{i}</p>
          </div>
          )
     })
     }
     </div>)
}
export default List