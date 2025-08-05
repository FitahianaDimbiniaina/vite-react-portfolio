import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
// import { Skills } from "./components/Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Service from './Services';
import Techexp from './components/Tech/TecheXP';

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
