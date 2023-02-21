import About from './components/About';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
