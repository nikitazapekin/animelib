import logo from './logo.svg';
import './App.css';
import Homepage from './pages/homepage/homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './pages/registration/registration';
function App() {
  return (
    <div className="App">
<Routes >
<Route path="/" element={ <Homepage />} />
<Route path="/registration" element={<Registration /> } />
</Routes>

    </div>
  );
}

export default App;

