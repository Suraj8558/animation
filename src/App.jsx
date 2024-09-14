
import './App.css' 
import NavBar from './components/header/NavBar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <>
      <main className='max-w-7xl mx-auto'>
        <NavBar />
        <Hero />
        <About />
        </main>
    </>
  )
}

export default App
