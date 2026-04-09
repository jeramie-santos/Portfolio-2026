import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Background from "./Components/Background";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="">
      <Header />
      <main >
        <Hero />
        <Projects />
        <About />
        <Background />
        <Contact />
      </main>
    </div>
  )
}

export default App;