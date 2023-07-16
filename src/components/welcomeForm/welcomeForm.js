//import Monika from "./monika.png"
import Monika from "./hu.png"
import "./welcomeForm.css"
import Sky from "./sky.png"
const WelcomeForm=()=> {
    return (
        <div className="welcomeForm">
<img src={Monika} alt="monika" className="monika" />
<img src={Sky} alt="sky" className="skyMonika" />
<p className="monikaText">Добро пожаловать на animelib!</p>
        </div>
    )
}
export default WelcomeForm;