import DonationPage from './pages/DonationPage';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import AboutUSPage from './pages/AboutUSPage';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/about-us' element={<AboutUSPage />} />r"
        <Route path="/donate" element={<DonationPage />}/>
        <Route
          path="*"
          element={<Navigate to="/" />}
        /> 
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
