import Navigation from "../../components/navigation/navigation"
import Login from "../../components/login/login"
import Background from "../../components/background/background"
import Footer from "../../components/footer/footer"
import ModalWindows from "../../components/modalWindows/modalWindows"
const LoginPage=()=> {
    return (
        <div className="loginPage">
<Navigation />
<Login />
<Background />
<ModalWindows />
<Footer />
        </div>
    )
}
export default LoginPage