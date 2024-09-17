import "./App.css";
import NavBar from "./components/header/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <NavBar />
        <Hero />
        <About />
        <Project />
        <Footer />
      </main>
    </>
  );
}

export default App;
