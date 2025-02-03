import { useState } from "react"
import Footer from "./Compents/Footer"
import Navbar from "./Compents/Navbar"
import Section from "./Compents/section"
import Section2 from "./Compents/Section2"
import Form from "./Compents/Form"




function App (){
    const [count ,  setCount] = useState(0) 
    return(
        <>
        <p> {count}</p>
        <button onClick={()=>setCount(count+1)}>increase</button>
        <Form />
<Navbar/>        
<Section/>       
<Section2/>
<Footer/>
        </>
    )
}



export default App