import About from "./Components/About/About";
import Icrame from "./Components/Icrame/Icrame";
import Team from "./Components/Ourteam/Team";
import Navbar from "./Components/Nav/Navbar";
import Podcast from "./Components/Podcast/Podcast";
import Mechatrix from "./Components/Mechatrix/Mechatrix";
import Cover from "./Components/Cover/Cover";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cover/>
      <About/>
      <Podcast/>
      <Icrame/>
      <Mechatrix/>
      <Team/>
      <Contact/>
    </div>
  );
}

export default App;
