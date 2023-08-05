
import "./newUserForm.css"
import Selfie from "./selfie.png"
import { useRef, useEffect, useState } from "react"
import UserOverviewForm from "../userOverview/userOverview"
import { useSelector } from "react-redux"
import AddLogoOfUser from "../addLogoOfUser/addLogoOfUser"
//import AboutUser from "../../../public/aboutUser/aboutUser"
import ListOfFavourite from "../listOfFavourite/listOfFavourite"
import AboutUser from "../aboutUser/aboutUser"
import ListOfComments from "../listOfComments/listOfComments"
const NewUserForm =()=> {
  
    const userName = useSelector((state) => state.toolkit.username);
const [selectedThing, setSelectedThing]=useState(0)
    const btns=useRef()
    useEffect(()=> {
        const handleClick = (index) => {
            console.log(`btn ${index}`);
            setSelectedThing(index);
          };
        
        (Object.values(btns.current.children)).forEach((item,index) => {
          item.addEventListener("click", ()=> {
           // console.log(`btn ${index}`)
          //  setSelectedThing(index)
          handleClick(index)
          })
        });
        return () => {
            if(btns.current.children!=undefined){
            Object.values(btns.current.children).forEach((item, index) => {
              item.removeEventListener("click", () => handleClick(index));
            })
        }
        }
    }, [])
    const arrayOfWindows= [<AboutUser />, <ListOfFavourite />, <ListOfComments />]
    return (
        <div className="newUserForm">
        <p className="yourName">{userName} </p> 
            <div className="userPhoto">
                <AddLogoOfUser />
           <div className="progressBlock">
                <h4 className="level">Уровень: 0</h4>
                <progress className="levelProgress" value={0}></progress>
                <h4 className="rate">Рейтинг: #0</h4>
                </div>
            </div>
<div className="userAbout">
    <div className="userOverview" ref={btns} >
    <h3  className="userOverviewItem">Обзор</h3>
        <h3  className="userOverviewItem">Избранное</h3>
        <h3 className="userOverviewItem">Комментарии</h3>
    </div>

</div>
        <div className="userAboutWindow">
{arrayOfWindows.filter((item, index)=> {
  //  index==selectedThing  ? arrayOfWindows[index] : null
  if(index==selectedThing){
    return item
  }
})
}
            <div className="userAboutWindowFon"></div>
        </div>
<div className="newUserFormFon"></div>

        </div>
    )
}
export default NewUserForm 