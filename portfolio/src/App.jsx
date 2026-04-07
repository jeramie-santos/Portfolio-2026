import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="scroll-smooth ">
      <Header />
      <main >
        <Hero />
        <Projects />
      </main>
    </div>
  )
}

export default App;