import Background from "../../components/background/background";
import ModalWindows from "../../components/modalWindows/modalWindows";
import Navigation from "../../components/navigation/navigation";
import Footer from "../../components/footer/footer";
import UnloggedUser from "../../components/unloggedUser/unloggedUser";
const Zakladki =()=> {
    return (
        <div className="zakladkiPage">
<Navigation />
<ModalWindows />
<UnloggedUser />
<Background />
<Footer />
        </div>
    )
}
export default Zakladki;