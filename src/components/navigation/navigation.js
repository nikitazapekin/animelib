import "./navigation.css"
import { addTodo, increment, setSearchWindow, setUserWindow } from "../../store/reducers";
import User from "./whiteUser.png"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Logo from "./log.jpg"
import Gear from "./whiteGear.png"
import { Link } from "react-router-dom";
const Navigation=()=> {
    const dispatch=useDispatch()

 
    return (
        <nav className="navigation">
<div className="navigationLeft">
    <div className="navigationItem">
       <Link style={{textDecoration: "none", color: "#fff"}} to="/">
     {/*   Logo */}
     <img src={Logo} alt="logo" className="logoNavigation" />
        </Link> 
        </div>
    <b className="navigationItem">КАТАЛОГ</b>
    <b className="navigationItem">В ТОПЕ</b>
    <b className="navigationItem"  onClick={()=> dispatch(setSearchWindow())}>ПОИСК</b>
</div>
<div className="navigationRight">
    <b className="navigationItem zakladk"><Link style={{textDecoration: "none", color: "#fff"}} to="/zakladki">ЗАКЛАДКИ</Link></b>
   <div className="navigationItem">
  


   </div>
   <div className="navigationItem">
 <img src={Gear} alt="gear" className="gear" />
</div>
<div className="navigationItem">
   <img  onClick={()=> dispatch(setUserWindow())} src={User} alt="user" className="userLogo" />

</div>
</div>

    <div className="navigationFon"></div>
        </nav>
    )
}
export default Navigation