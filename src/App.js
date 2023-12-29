import Navbar from "./components/NavBar/navbar"
import Hero from "./components/Hero/hero"
import AboutMe from "./components/AboutMe/aboutMe"
import Skills from "./components/Skills/skills"
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <AboutMe />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
