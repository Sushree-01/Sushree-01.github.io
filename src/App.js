import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import  About  from './Component/About';
import  Skills  from './Component/Skills';
import  Contact  from './Component/Contact';
import Stats from './Component/Stats';
import  Projects  from './Component/Projects';


function App() {
    

   return (
    <div style={{marginTop:'0px'}} >

    <Navbar id="nav-menu"/>
    <Home id="home"/>
    <About id="about" class="about-section"/> 
    <Skills id="skills"/>
    <Projects id="projects"/>
    <Stats/>

    <Contact id="contact"/>
    </div>
  );
}

export default App;
