import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './views/Services'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
       <Router>
        <Header />
        <Routes>
         <Route path="*" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
