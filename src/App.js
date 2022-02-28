
import './App.css';
import { About } from './pages/About/About';
import { Home } from './pages/Home/Home';
import { Navbar } from './pages/Navbar/Navbar';
import {Experience} from './pages/Experience/Experience'
import {Projects} from './pages/Projects/Projects'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Experience/>
    </div>
  );
}

export default App;
