import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/registration/registration';
import LoginPage from './pages/login-page/loginPage';
function App() {
  return (
    <div className="App">
<Routes >
<Route path="/" element={ <Homepage />} />
<Route path="/registration" element={<Registration /> } />
<Route path="/login" element={<LoginPage /> } />
</Routes>

    </div>
  );
}

export default App;

