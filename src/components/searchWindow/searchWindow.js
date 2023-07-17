

import "./searchWindow.css"
import { setSearchWindow } from "../../store/reducers"
import { useRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const SearchWindow = () => {
    const dispatch = useDispatch()
    const searchForm = useRef()
    const inputForm = useRef()

    useEffect(() => {
        const items = searchForm.current.children;
        Object.values(items).forEach((item) => {
            item.addEventListener("click", () => {
                inputForm.current.value = item.textContent;
            });
        });
    }, []);
      const search=useRef()
      const [value, setValue]=useState([])
      useEffect(()=> {

      console.log(search.current)
      search.current.addEventListener('click', function(event) {
        let clickX = event.clientX;
        let clickY = event.clientY;

      //  var divRect = divElement.getBoundingClientRect();
      if(search.current!=undefined){
      let divRect=search.current.getBoundingClientRect();
        let divLeft = divRect.left;
        let divTop = divRect.top;
        let divRight = divRect.right;
        let divBottom = divRect.bottom;

        if (clickX >= divLeft && clickX <= divRight && clickY >= divTop && clickY <= divBottom) {
 //setIsClicked(true)
 // dispatch(setSearchWindow());
 
 let count=0;
 count++;
 setValue(prev=>[...prev, count] )
 console.log(value)
 //val=true
} 

else {
 // console.log(0);
 dispatch(setSearchWindow());
}
      }


    

      });
    },[])
    useEffect(() => {
        console.log(value); // Выводим значение массива value в консоль после каждого обновления
      }, [value]);
    
    return (
        <div className="searchWindow" ref={search}>
            <input ref={inputForm} className="searchWindowForm" placeholder="Что ищем, семпай?"  />
          
            <div className="closeSearchBtn" onClick={()=> {
                  dispatch(setSearchWindow());
            }}>
                <div className="closeSearchBtnLine1"></div>
                <div className="closeSearchBtnLine2"></div>
                <div className="closeSearchBtnFon"></div>
            </div>
            <h2 className="usuallySearchTitle">Часто ищут:</h2>
            <div ref={searchForm} className="usuallySearch">
                <h3 className="usuallySearchItem">Наруто <div className="usuallySearchItemFon"></div></h3>
                <h3 className="usuallySearchItem">Человек-бензопила <div className="usuallySearchItemFon"></div></h3>
                <h3 className="usuallySearchItem">Что-то<div className="usuallySearchItemFon"></div></h3>
                <h3 className="usuallySearchItem">Еще что-то <div className="usuallySearchItemFon"></div></h3>
            </div>
           
            <div className="searchWindowFon"></div>
        </div>
    )
}

export default SearchWindow;
