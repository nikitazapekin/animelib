
import "./newUserForm.css"
import Selfie from "./selfie.png"
import { useRef, useEffect, useState } from "react"

const NewUserForm =()=> {

const [selectedThing, setSelectedThing]=useState(0)
    const btns=useRef()
    useEffect(()=> {
        
        (Object.values(btns.current.children)).forEach((item,index) => {
       setSelectedThing(index)
        });
     
    }, [])
    return (
        <div className="newUserForm">
            <div className="userPhoto">
                <img src={Selfie} alt="photo" className="photo" />
                <div className="imageOfPlus">+</div>
                <h4 className="level">Уровень: 0</h4>
                <progress className="levelProgress" value={0}></progress>
                <h4 className="rate">Рейтинг: #0</h4>
               
            </div>
<div className="userAbout">
    <div className="userOverview" ref={btns} >
    <h3  className="userOverviewItem">Обзор</h3>
        <h3  className="userOverviewItem">Избранное</h3>
        <h3 className="userOverviewItem">Комментарии</h3>
    </div>
    <div className="userAboutBlock">
        
    </div>
</div>
            <div className="userAbout">

            </div>
<div className="newUserFormFon"></div>

        </div>
    )
}
export default NewUserForm 