import { useState, useRef, useEffect } from "react"
import "./slider.css"
const Slider =()=> {
    return (
        <div className="slider">

    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>


    
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
    <div className="sliderItem"></div>
 
        </div>
    )
}
export default Slider;







 


























/*
const Slider =()=> {
const inputRef=useRef()
const btns=useRef()
const [widthOfCarousel, setWidthOfCarousel]=useState()
const [currentPosition, setCurrentPosition] =useState(0)
const [currentSlide, setCurrentSlide]=useState(1)
const countOfSlides =3
    useEffect(() => {
        console.log(inputRef.current.offsetWidth);
        setWidthOfCarousel(inputRef.current.offsetWidth)
      }, []);
      const styleOfCarousel={
        transform: `translateX(${currentPosition}px)`,
        transition: "transform 0.5s ease" 
      }
      function next(){
     
          if(currentSlide>=countOfSlides){
              setCurrentSlide(1)
            setCurrentPosition(0)
            console.log(currentSlide)
          } else {
            if(currentSlide<countOfSlides){
            console.log(currentSlide)
               setCurrentSlide(prev=> prev+1)
              setCurrentPosition(prev=>prev-widthOfCarousel/3)
            }
            else {
                setCurrentSlide(1)
                setCurrentPosition(0)
                console.log(currentSlide)
            }
          }
      }
      function prev(){
          
          if(currentSlide<=1){
              console.log(currentSlide)
              setCurrentSlide(countOfSlides)
              setCurrentPosition(prev=>prev-(widthOfCarousel/3)*2)
            } else {
                setCurrentSlide(prev=> prev-1)
          setCurrentPosition(prev=>prev+widthOfCarousel/3)
          console.log(currentSlide)
        }
              }
    return (
        <div className="sliderPos">
            <h1 className="topAnimeSlider">Популярные аниме этого месяца</h1>
        <div className="slider">
            <div style={styleOfCarousel} className="sliderCarousel" ref={inputRef}>

<div className="sliderParent">
                <div className="sliderItem"><img className="sliderImage" src="https://w.forfun.com/fetch/f4/f4d402235f8f9a8c5655e7ece70c58c9.jpeg" alt="slider item" /></div>
                <div className="sliderItem"><img className="sliderImage" src="https://avatars.mds.yandex.net/i?id=7366816eff910614d396cde5d77d718d9a8e3380-9065887-images-thumbs&ref=rim&n=33&w=188&h=188" alt="slider item" /></div>
                <div className="sliderItem"><img className="sliderImage" src="https://ip1.anime-pictures.net/previews/6e8/6e8d0101857601be498c42a4832b0657_cp.jpg" alt="slider item" /></div>
                </div>
                <div className="sliderParent">
                <div className="sliderItem"><img  className="sliderImage"src="https://i.ytimg.com/vi/h8n9YMlwKkw/maxresdefault.jpg" alt="slider item" /></div>
                <div className="sliderItem"><img className="sliderImage" src="https://i.ytimg.com/vi/8Fl1-GZ5ZyQ/maxresdefault.jpg" alt="slider item" /></div>
                <div className="sliderItem"><img className="sliderImage" src="https://avatars.mds.yandex.net/i?id=c00b0f778ba79b2c5251b7b1a0d407c01c57d4bc-9097903-images-thumbs&ref=rim&n=33&w=188&h=188" alt="slider item" /></div>
                </div>
                <div className="sliderParent">
                <div className="sliderItem"><img  className="sliderImage"src="https://i.ytimg.com/vi/7xERyj7ssus/maxresdefault.jpg" alt="slider item" /></div>
                <div className="sliderItem"><img  className="sliderImage"src="https://www.digiseller.ru/preview/319113/p1_3387264_1eef8aec.jpg" alt="slider item" /></div>
                <div className="sliderItem"><img className="sliderImage" src="https://w.forfun.com/fetch/54/5485442fb7332d2a7a4db4105011fefa.jpeg" alt="slider item" /></div>
                </div>
            </div>
        
        </div>
        <div className="sliderInterface">
            <button className="prev" onClick={()=> {
                prev()
            }}>←</button>
            <div className="sliderBtns">
            <button className="sliderBtn">1</button>
            <button className="sliderBtn">2</button>
            <button className="sliderBtn">3</button>
            </div>
            <button className="prev" onClick={()=> {
             next()
            }}>→</button>
        </div>
        </div>
    )
}
export default Slider; */