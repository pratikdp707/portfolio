
import './App.css';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Navbar } from './pages/Navbar/Navbar';
import {Experience} from './pages/Experience/Experience'
import {Projects} from './pages/Projects/Projects'
import Footer from './pages/Footer/Footer';
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
      <Footer/>
    </div>
  );
}

export default App;
