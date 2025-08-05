import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
// import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Service from './components/Services';
import Techexp from './components/TecheXP';

function App() {
  return (
    <div className="App aling-items-center justify-content-center">
      <NavBar />
      <Banner />
      {/* <Skills /> */}
      <Projects />
       <Techexp />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
