import Navbar from "./components/NavBar/navbar"
import Hero from "./components/Hero/hero"
import AboutMe from "./components/AboutMe/aboutMe";
import Skills from "./components/Skills/skills"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
}

export default App;
