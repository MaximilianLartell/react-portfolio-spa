import React, {useRef, useEffect, useState} from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {
  const [sticky, setSticky] = useState(false);
  const ref = useRef(null);
  
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Home />
      <main>
        <div className={`navbar-wrapper ${sticky ? 'sticky' : ''}`} ref={ref}>
          <Navbar />
        </div>
        <About />
        <Projects />
      </main>
      <Contact />
    </div>
  );
}

export default App;
