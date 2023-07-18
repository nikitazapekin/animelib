import "./userWindow.css"
import { setUserWindow } from "../../store/reducers"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
const UserWindow=()=> {
    const dispatch=useDispatch()
    return (
        <div className="userWindow" onBlur={()=> {
            dispatch(setUserWindow());
        }}>
         
<Link className="logg" style={{textDecoration: "none", position: "absolute", top: "20px" , left: "50px" }} to="/login"><div className="loginBtn"> Войти</div></Link>

<Link className="regis" style={{textDecoration: "none", position: "absolute", top: "80px", left: "50px"  }} to="/registration"><div className="loginBtn">Зарегистрироваться</div></Link> 

<div className="themeSwitch">
    <h4 className="doYouWantToSwitch">
        Сменить тему?
    </h4>

    
   <input type="checkbox" id="toggle_checkbox" />

<label for="toggle_checkbox">
  <div id="star">
    <div class="star" id="star-1"></div>
    <div class="star" id="star-2"></div>
  </div>
  <div id="moon"></div>
</label>




</div>
<div className="userWindowFonBlock"></div>
<div className="userWindowFon"></div>
        </div>
    )
}
export default UserWindow