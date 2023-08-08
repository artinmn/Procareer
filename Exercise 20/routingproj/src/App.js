import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Academics from './components/Academics';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achieves from './components/Achieves';
import ContactUs from './components/Contact';
import DigiNavbar from './components/DigiNavbar';
import DigiFooter from './components/DigiFooter';

function App() {
  return (
    <div className="App">
      <DigiNavbar/>
      {/* Routing starts here */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='academics' element={<Academics/>}/>
        <Route path='techskills' element={<Skills/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='achieves' element={<Achieves/>}/>
        <Route path='contact' element={<ContactUs/>} />
      </Routes>
      {/* Routing ends here */}
      <DigiFooter/>
    </div>
  );
}

export default App;