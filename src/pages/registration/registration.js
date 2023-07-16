//import Navigation from "../navigation/navigation"
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import RegistrationForm from "../../components/registrationForm/registrationForm";
import ModalWindows from "../../components/modalWindows/modalWindows";
const Registration =()=> {
    return (
        <div className="registration">
       
            <Navigation />
            <RegistrationForm />
            <ModalWindows />
            <Footer />
        </div>
    )
}
export default Registration;