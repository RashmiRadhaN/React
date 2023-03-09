import React from "react"
import Nav from "./Child"
import Img from "./bike.jpg"


const App=()=>
{
    return(
        <>
        <Nav girl="RACHUUUU"/>
        <Nav data={Img}/>
        <img src={Img} alt="text" />
        </>
    )
}

export default App