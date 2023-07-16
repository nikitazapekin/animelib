import Navigation from "../../components/navigation/navigation";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { setSearchWindow } from "../../store/reducers";
import SearchWindow from "../../components/searchWindow/searchWindow";
import { useDispatch } from "react-redux";
import UserWindow from "../../components/userWindow/userWindow";
import Footer from "../../components/footer/footer";
import ModalWindows from "../../components/modalWindows/modalWindows";
import Background from "../../components/background/background";
import WelcomeForm from "../../components/welcomeForm/welcomeForm";
import "./homepage.css"
import Slider from "../../components/slider/slider";
const Homepage =()=> {
  
    const window = useSelector((state) => state.toolkit.window);
    const userWindow = useSelector((state) => state.toolkit.userWindow);
    return (
        <div className="homepage" >

<Navigation /> 
<ModalWindows /> 
<Background /> 
<WelcomeForm />
<Slider />
<Footer /> 
        </div>
    )
}
export default Homepage;
