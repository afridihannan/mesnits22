import About from "./Components/About/About";
import Icrame from "./Components/Icrame/Icrame";
import Team from "./Components/Ourteam/Team";
import Navbar from "./Components/Nav/Navbar";
import Podcast from "./Components/Podcast/Podcast";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Podcast/>
      <Icrame/>
      <Team/>
    </div>
  );
}

export default App;
