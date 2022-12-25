import About from "./Components/About/About";
import Icrame from "./Components/Icrame/Icrame";
import Team from "./Components/Ourteam/Team";
import Navbar from "./Components/Nav/Navbar";
import Podcast from "./Components/Podcast/Podcast";
import Mechatrix from "./Components/Mechatrix/Mechatrix";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Podcast/>
      <Icrame/>
      <Mechatrix/>
      <Team/>
    </div>
  );
}

export default App;
