import "./newUserPage.css"
import Navigation from "../../components/navigation/navigation"

import Background from "../../components/background/background"
import Footer from "../../components/footer/footer"
import ModalWindows from "../../components/modalWindows/modalWindows"
import NewUserForm from "../../components/newUserForm/newUserForm"
const NewUserPage =()=> {
    return (
        <div className="newUserPge">
<Navigation />
{/*<Background /> */}
<NewUserForm />
<Footer />
<ModalWindows />
        </div>
    )
}
export default NewUserPage