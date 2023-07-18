import "./unloggedUser.css"
import { Link } from "react-router-dom"
const UnloggedUser=()=> {
    return (
        <div className="loginForm">
<div className="loginFormFon"></div>
<h1 className="youAreUnlogged">
    Вы не вошли в учетную запись
</h1>
<button className="loginFormBtn lg1"><Link style={{textDecoration: "none", color: "#fff"}} to="/login">Войти</Link></button>
<button className="loginFormBtn lg2"><Link style={{textDecoration: "none", color: "#fff"}} to="/registration">Зарегистрироваться</Link></button>
<div className="registrationFormCube cube1"></div>
            <div className="registrationFormCube  cube2"></div>
            <div className="registrationFormCube cube3"></div>
            <div className="registrationFormCube cube4"></div>
        </div>
    )
}
export default UnloggedUser