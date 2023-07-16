import { useSelector } from "react-redux";
import SearchWindow from "../searchWindow/searchWindow";
import UserWindow from "../userWindow/userWindow";
const  ModalWindows=()=> {
    const window = useSelector((state) => state.toolkit.window);
    const userWindow = useSelector((state) => state.toolkit.userWindow);
    return (
        <>
        

{window ?   ( 
    <SearchWindow />
 ) : null}


{userWindow ?   ( 
    <UserWindow />
 ) : null}
        </>
    )
}
export default ModalWindows