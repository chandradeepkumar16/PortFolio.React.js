import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App ">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <TechStack />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
