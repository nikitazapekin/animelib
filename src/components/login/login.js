import "./login.css"
import { Link } from "react-router-dom"
const Login =()=> {
    return (
         <div className="loginForm">
            <h1 className="loginTitle">
                Вход
            </h1>

            <div className="loginBlock">
            <input type="email" placeholder="Введите почту " className="typeMail  regItem" />
            <input type="password" placeholder="Введите пароль" className="typePassword  regItem" />
            <button className="loginFormBtn ">Войти</button>
            <div className="haveNoAccount"><Link style={{textDecoration: "none", color: "#fff"}} to="/registration">Нету аккаунта?</Link></div>
            </div>
<div className="loginFormFon"></div>

<div className="registrationFormCube cube1"></div>
            <div className="registrationFormCube  cube2"></div>
            <div className="registrationFormCube cube3"></div>
            <div className="registrationFormCube cube4"></div>
    </div>
    )
}
export default Login