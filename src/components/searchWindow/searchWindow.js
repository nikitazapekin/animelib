

import "./searchWindow.css"
import { setSearchWindow } from "../../store/reducers"
import { useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const SearchWindow = () => {
    const dispatch = useDispatch()
    const searchForm = useRef()
    const inputForm = useRef()
    const window = useSelector((state) => state.toolkit.window);

    useEffect(() => {
        const items = searchForm.current.children;
        Object.values(items).forEach((item) => {
            item.addEventListener("click", () => {
                inputForm.current.value = item.textContent;
            });
        });
    }, []);

    return (
        <div className="searchWindow">
            <input ref={inputForm} className="searchWindowForm" placeholder="Что ищем, семпай?" />
          
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
