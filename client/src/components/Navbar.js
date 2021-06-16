import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import './navbar.css';

function Navbar() {
  const [opacity, setOpacity] = useState([1, 1, 1, 1, 1]);
  const [linkStatus, setLinkStatus] = useState('active');
  const [top, setTop] = useState(-50);
  const ref = useRef(null);

  const mouseEnter = (e) => {
    if (ref.current && ref.current.getBoundingClientRect().y === 0) {
      if (e.target.id === 'nav_1') {
        setOpacity([1, 0.5, 0.5, 0.5, 0.5]);
      }
      if (e.target.id === 'nav_2') {
        setOpacity([0.5, 1, 0.5, 0.5, 0.5]);
      }
      if (e.target.id === 'nav_3') {
        setOpacity([0.5, 0.5, 1, 0.5, 0.5]);
      }
      if (e.target.id === 'nav_4') {
        setOpacity([0.5, 0.5, 0.5, 1, 0.5]);
      }
      if (e.target.id === 'nav_5') {
        setOpacity([0.5, 0.5, 0.5, 0.5, 1]);
      }
    }
  };

  const mouseLeave = (e) => {
    if (window.scrollY < 0) {
      setOpacity([0, 0, 0, 0, 0]);
    } else {
      setOpacity([1, 1, 1, 1, 1]);
    }
  };

  const handleScroll = () => {
    setTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(top);
  }, [top]);

  return (
    // <div className='navbar-inner' style={{ height: height }} ref={ref}>
    <NavbarInner top={top} ref={ref}>
      <ul className='navbar-items'>
        <Link
          id='nav_1'
          className={`navbar-link-${linkStatus}`}
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseLeave={(e) => mouseLeave(e)}
          style={{ opacity: opacity[0], transition: 'opacity 0.2s' }}
        >
          Home
        </Link>
        <Link
          id='nav_2'
          className={`navbar-link-${linkStatus}`}
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseLeave={(e) => mouseLeave(e)}
          style={{ opacity: opacity[1], transition: 'opacity 0.2s' }}
        >
          About me
        </Link>
        <Link
          id='nav_3'
          className={`navbar-link-${linkStatus}`}
          activeClass='active'
          to='skills'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseLeave={(e) => mouseLeave(e)}
          style={{ opacity: opacity[2], transition: 'opacity 0.2s' }}
        >
          Skills
        </Link>
        <Link
          id='nav_4'
          className={`navbar-link-${linkStatus}`}
          activeClass='active'
          to='projects'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseLeave={(e) => mouseLeave(e)}
          style={{ opacity: opacity[3], transition: 'opacity 0.2s' }}
        >
          Projects
        </Link>
        <Link
          id='nav_5'
          className={`navbar-link-${linkStatus}`}
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseLeave={(e) => mouseLeave(e)}
          style={{ opacity: opacity[4], transition: 'opacity 0.2s' }}
        >
          Contact
        </Link>
      </ul>
    </NavbarInner>
  );
}

export default Navbar;

const NavbarInner = styled('div')`
  position: fixed;
  top: ${(p) => {
    if (p.top < 600) {
      return '-50px';
    }
    if (p.top > 600 && p.top < 650) {
      return `${p.top - 650}px`;
    }
    if (p.top > 650) {
      return '0px';
    }
  }};
  left: 0;
  right: 0;
  z-index: 2;
  text-align: center;
  padding: 10px;
  transition: opacity 1s;
  background-color: white;
  opacity: 0.8;
  box-shadow: 0 1px 1px -1px gray;
  height: 50px;
`;

// .sticky .navbar-inner {
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 2;
// }

// .navbar-inner {
//   text-align: center;
//   padding: 10px;
//   transition: height 1s, opacity 1s;
//   background-color: rgb(209, 209, 209);
//   box-shadow: 0 1px 1px -1px gray;
// }
