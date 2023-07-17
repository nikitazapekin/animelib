//import Monika from "./monika.png"
import Monika from "./hu.png"
import "./welcomeForm.css"
import Sky from "./sky.png"
import { useState } from "react"
const WelcomeForm=()=> {
const [isClicked, setIsClicked]=useState(false)
    return (
        <div className="welcomeForm">
<img src={Monika} alt="monika" className="monika" onClick={()=> {
   isClicked ? setIsClicked(false) : setIsClicked(true)
}} />
{ isClicked ? <>
<img src={Sky} alt="sky" className="skyMonika" />
<p className="monikaText">Добро пожаловать на animelib!</p> 
</> : null
}
        </div>
    )
}
export default WelcomeForm;