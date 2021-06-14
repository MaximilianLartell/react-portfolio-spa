import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import './home.css';

function Home() {
  const [linkOpacity, setLinkOpacity] = useState([1, 1]);
  const [opacity, setOpacity] = useState({ opacity: 1 });

  const changeLinkOpacity = (e) => {
    if (e && e.target.id === '1') {
      setLinkOpacity([1, 0.5]);
    }
    if (e && e.target.id === '2') {
      setLinkOpacity([0.5, 1]);
    }
  };

  const changeOpacity = (op, e) => {
    setOpacity({ opacity: op });
  };

  const onHover = (op, e) => {
    changeLinkOpacity(e);
    changeOpacity(op);
  };

  return (
    <div className='home'>
      <Fade left>
        <section className='home_content-container'>
          <h1 style={opacity}>
            Hi, <br /> my name is Maximilian
          </h1>
          <br />{' '}
          <h3 style={opacity}>
            I'm a Full Stack Developer with a master in Engineering.
          </h3>
          <br />{' '}
          <p className='home_paragraph'>
            <span style={opacity}>Want to know </span>
            <Link
              id='1'
              className='home_link'
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              onMouseEnter={(e) => onHover(0.5, e)}
              onMouseLeave={(e) => {
                onHover(1, e);
                setLinkOpacity([1, 1]);
              }}
              style={{ opacity: linkOpacity[0] }}
            >
              who I am
            </Link>
            <span style={opacity}>, and </span>
            <Link
              id='2'
              className='home_link'
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={0}
              duration={300}
              onMouseEnter={(e) => onHover(0.5, e)}
              onMouseLeave={(e) => {
                onHover(1, e);
                setLinkOpacity([1, 1]);
              }}
              style={{ opacity: linkOpacity[1] }}
            >
              what I can do?
            </Link>
          </p>
        </section>
      </Fade>
    </div>
  );
}

export default Home;
