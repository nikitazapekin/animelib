

/*
import { useEffect, useRef, useState } from "react";
import User from "./user.png";
import "./addLogoOfUser.css";

const AddLogoOfUser = () => {
  const myForm = useRef(null);
  const imageInput = useRef(null);
  const [link, setLink] = useState(User);

  useEffect(() => {
    myForm.current.addEventListener("submit", function(event) {
      event.preventDefault(); // Предотвращает отправку формы

      let fileInput = imageInput.current;
      let file = fileInput.files[0];

      if (file) {
        let reader = new FileReader();

        reader.onload = function(e) {
          setLink(e.target.result);
        };

        reader.readAsDataURL(file);
      }
    });
  }, []);

  return (
    <div className="addLogoOfUser">
      <form id="myForm" ref={myForm}>
        <input type="file" ref={imageInput} accept="image/*" />
        <button  type="submit">Отправить</button>
      </form>
      <img src={link} alt="logo" className="userPhoto"  />
    </div>
  );
};

export default AddLogoOfUser;
*/


import React, { useEffect, useRef, useState } from "react";
import User from "./user.png";
import "./addLogoOfUser.css";

const AddLogoOfUser = () => {
  const myForm = useRef(null);
  const imageInput = useRef(null);
  const [link, setLink] = useState(User);

  useEffect(() => {
    const handleClick = () => {
      imageInput.current.click();
    };

    const handleImageChange = (event) => {
      let fileInput = event.target;
      let file = fileInput.files[0];

      if (file) {
        let reader = new FileReader();

        reader.onload = function (e) {
          setLink(e.target.result);
        };

        reader.readAsDataURL(file);
      }
    };

    myForm.current.addEventListener("click", handleClick);
    imageInput.current.addEventListener("change", handleImageChange);

    return () => {
        if(myForm.current!=undefined && imageInput.current!=undefined){
      myForm.current.removeEventListener("click", handleClick);
      imageInput.current.removeEventListener("change", handleImageChange);
        }
    };
  }, []);

  return (
    <div className="addLogoOfUser">
      <form id="myForm" ref={myForm}>
        <input style={{width: "0", height: "0"}} type="file" ref={imageInput} accept="image/*" />
      </form>
      <img
        src={link}
        alt="logo"
        className="userPhoto"
        onClick={() => imageInput.current.click()}
      />
      <div className="plus">
        +
      </div>
    </div>
  );
};

export default AddLogoOfUser;
