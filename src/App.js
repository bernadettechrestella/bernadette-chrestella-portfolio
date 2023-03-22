import { ThemeProvider } from './context/ThemeContext'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
