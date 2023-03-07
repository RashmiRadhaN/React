import React from "react"

const Nav=()=>
{
    return(
        <ul style={{listStyleType:"none", display:"flex", 
        justifyContent:"space-evenly",
        backgroundColor:"lightblue",
        padding:"10px"}}>
            <li><a href="#HOME">HOME</a></li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>DETAILS</li>
            <li>PICTURES</li>
        </ul>
    )
}

export default Nav;