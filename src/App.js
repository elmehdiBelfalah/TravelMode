import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Support from './pages/Support';
import Login from './pages/Login';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
        <Routes>
          <Route path='/' exact element={<Home/>} /> 
          <Route path='/Services' exact element={<Services/>} />
          <Route path='/Support' exact element={<Support/>} />  
          <Route path='/Login' exact element={<Login/>} />    
        </Routes>
        <Footer/>         
    </Router>
    </>
  );
}

export default App;
