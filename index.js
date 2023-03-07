import React from "react"
import {createRoot} from "react-dom/client"
import App from "./App"
import Nav from "./function base/Navbar"
import Image from "./function base/Image"
import Footer from "./Footer"
import Home from "./Class Base Comp/Home"


// import Index1 from "./Sample"

createRoot(document.getElementById("root")).render(
<>
<App/>
<Nav />
<Image/>
<Footer/>
<Home/>

</>)
