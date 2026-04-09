import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";

const App = () => {
  return (
    <div className="scroll-smooth ">
      <Header />
      <main >
        <Hero />
        <Projects />
        <About />
      </main>
    </div>
  )
}

export default App;