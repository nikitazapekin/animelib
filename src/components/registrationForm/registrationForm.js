import "./registrationForm.css"
import { Link } from "react-router-dom";
import Captcha from "../captcha/captcha";
const RegistrationForm =()=> {
    return (
        <div className="registrationForm">
            <h1 className="registrationTitle">Регистрация</h1>
            <div className="registrationBlock">
            <input type="email" placeholder="Введите почту " className="typeMail  regItem" />
            <input type="password" placeholder="Введите пароль" className="typePassword  regItem" />
           <Captcha />
         <Link to="/user">  <button className="registrationFormBtn ">Зарегистрироваться</button> </Link> 
            <div className="haveAnAccount"><Link style={{textDecoration: "none", color: "#fff"}} to="/login">Есть аккаунт?</Link></div>
            <div className="agreement">
            <input type="checkbox" className="agreementBtn" />
            <p className="agreementText">Я принимаю согласие на обработку пользовательских данных</p>
            </div>
            </div>

            <div className="registrationFormCube cube1"></div>
            <div className="registrationFormCube  cube2"></div>
            <div className="registrationFormCube cube3"></div>
            <div className="registrationFormCube cube4"></div>




<div className="registrationFormFon"></div>
        </div>
    )
}
export default RegistrationForm;