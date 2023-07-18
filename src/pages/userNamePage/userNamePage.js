import Background from "../../components/background/background"
import ModalWindows from "../../components/modalWindows/modalWindows"
import Navigation from "../../components/navigation/navigation"
import UserNameForm from "../../components/userNameForm/userNameForm"
import Footer from "../../components/footer/footer"
const UserNamePage=()=> {
    return (
        <div className="userNamePage">
            <Navigation />
        <UserNameForm />
        <Background />
        <ModalWindows />
        <Footer />
        </div>
    )
}
export default UserNamePage