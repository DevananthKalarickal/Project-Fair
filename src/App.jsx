import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Projects from './Pages/Projects';
import Home from './Pages/Home';
import Auth from './Pages/Auth';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Header /> {/* Add the Header component */}

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth isRegister={true} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
     

      <Footer /> {/* Add the Footer component */}
    </>
  );
}

export default App;
