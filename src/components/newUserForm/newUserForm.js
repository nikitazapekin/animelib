
import "./newUserForm.css"
import Selfie from "./selfie.png"
import { useRef, useEffect, useState } from "react"
import UserOverviewForm from "../userOverview/userOverview"
import { useSelector } from "react-redux"
import AddLogoOfUser from "../addLogoOfUser/addLogoOfUser"
const NewUserForm =()=> {
  
    const userName = useSelector((state) => state.toolkit.username);
const [selectedThing, setSelectedThing]=useState(0)
    const btns=useRef()
    useEffect(()=> {
        
        (Object.values(btns.current.children)).forEach((item,index) => {
       setSelectedThing(index)
        });
     
    }, [])
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
    <div className="userAboutBlock">
<div className="userAboutBlockFon"></div>
    </div>
</div>
            <div className="userAbout">
<UserOverviewForm />
            </div>
        
<div className="newUserFormFon"></div>

        </div>
    )
}
export default NewUserForm 