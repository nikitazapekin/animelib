


/*
import React, { useState } from 'react';
import './userNameForm.css';
import { Link } from 'react-router-dom';
import { UseSelector, useDispatch } from 'react-redux';
import { setUsername } from '../../store/reducers';
const UserNameForm = () => {
    const dispatch=useDispatch()
  const [name, setName] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
const [isClicked, setIsClicked]=useState(false)
const st ={
    display: isClicked ? "block" : "none"
}
  return (
    <div className="loginForm">
      <h1 className="whatYourName">Как вас звать, семпай?</h1>
      <input
        type="text"
        placeholder="Введите свое имя"
        className="enterName"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setIsEmpty(e.target.value.length === 0);
        }}
      />
      {isEmpty && <p style={st} className='enterNameRequest'>Введите имя</p>}
      <Link style={{ textDecoration: 'none' }} to={isEmpty ? '#' : '/userData'}>
        <button className="loginFormBtnn" onClick={()=> {
            setIsClicked(true)
            {!isEmpty ? dispatch(setUsername(name)) : null}

        }}>Далее</button>
      </Link>
      <div className="registrationFormCube cube1"></div>
      <div className="registrationFormCube cube2"></div>
      <div className="registrationFormCube cube3"></div>
      <div className="registrationFormCube cube4"></div>
      <div className="loginFormFon"></div>
    </div>
  );
};

export default UserNameForm;

*/



import React, { useState } from 'react';
import './userNameForm.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsername } from '../../store/reducers';

const UserNameForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const st = {
    display: isClicked ? 'block' : 'none',
  };

  const handleNextClick = () => {
    setIsClicked(true);
    if (!isEmpty) {
      dispatch(setUsername(name));
    }
  };

  return (
    <div className="loginForm">
      <h1 className="whatYourName">Как вас звать, семпай?</h1>
      <input
        type="text"
        placeholder="Введите свое имя"
        className="enterName"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setIsEmpty(e.target.value.length === 0);
        }}
      />
      {isEmpty && <p style={st} className="enterNameRequest">Введите имя</p>}
      <Link style={{ textDecoration: 'none' }} to={isEmpty ? '#' : '/userData'}>
        <button className="loginFormBtnn" onClick={handleNextClick}>Далее</button>
      </Link>
      <div className="registrationFormCube cube1"></div>
      <div className="registrationFormCube cube2"></div>
      <div className="registrationFormCube cube3"></div>
      <div className="registrationFormCube cube4"></div>
      <div className="loginFormFon"></div>
    </div>
  );
};

export default UserNameForm;
