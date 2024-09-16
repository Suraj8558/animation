import "./App.css";
import NavBar from "./components/header/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <NavBar />
        <Hero />
        <About />
        <Project />
      </main>
    </>
  );
}

export default App;
