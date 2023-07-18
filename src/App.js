import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/registration/registration';
import LoginPage from './pages/login-page/loginPage';
import Zakladki from './pages/zakladki/zakladki';
import NewUserPage from './pages/newUserPage/newUserPage';
import UserNamePage from './pages/userNamePage/userNamePage';
function App() {
  return (
    <div className="App">
<Routes >
<Route path="/" element={ <Homepage />} />
<Route path="/registration" element={<Registration /> } />
<Route path="/login" element={<LoginPage /> } />
<Route path="/zakladki" element={<Zakladki /> } />
<Route path="/userData" element={<NewUserPage  /> } /> 
<Route path="/user" element={<UserNamePage />} />
</Routes>

    </div>
  );
}

export default App;

