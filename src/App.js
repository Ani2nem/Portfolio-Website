import Navbar from "./components/NavBar/navbar"
import Hero from "./components/Hero/hero"
import AboutMe from "./components/AboutMe/aboutMe"
import Skills from "./components/Skills/skills"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import Projects from "./components/Projects/Projects"

function App() {
  return (
      <div className="App">
        <Navbar />
        <Hero />
        <Projects />
        <AboutMe />
        <Skills />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
