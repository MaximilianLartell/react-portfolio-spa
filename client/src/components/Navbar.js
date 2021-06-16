import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import './navbar.css';

function Navbar() {
  const [opacity, setOpacity] = useState([1, 1, 1, 1, 1]);
  const [top, setTop] = useState();

  const mouseEnter = (e) => {
    if (e.target.id === 'nav_1') {
      setOpacity([1, 0.6, 0.6, 0.6, 0.6]);
    }
    if (e.target.id === 'nav_2') {
      setOpacity([0.6, 1, 0.6, 0.6, 0.6]);
    }
    if (e.target.id === 'nav_3') {
      setOpacity([0.6, 0.6, 1, 0.6, 0.6]);
    }
    if (e.target.id === 'nav_4') {
      setOpacity([0.6, 0.6, 0.6, 1, 0.6]);
    }
    if (e.target.id === 'nav_5') {
      setOpacity([0.6, 0.6, 0.6, 0.6, 1]);
    }
  };

  const mouseLeave = (e) => {
    setOpacity([1, 1, 1, 1, 1]);
  };

  const handleScroll = () => setTop(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    // <div className='navbar-inner' style={{ height: height }} ref={ref}>
    <NavbarInner top={top}>
      <ul className='navbar-items'>
        <NavbarLink
          id='nav_1'
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
        </NavbarLink>
        <NavbarLink
          id='nav_2'
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
        </NavbarLink>
        <NavbarLink
          id='nav_3'
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
        </NavbarLink>
        <NavbarLink
          id='nav_4'
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
        </NavbarLink>
        <NavbarLink
          id='nav_5'
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
        </NavbarLink>
      </ul>
    </NavbarInner>
  );
}

export default Navbar;

const NavbarInner = styled('div')`
  position: fixed;
  border-bottom: solid 1px #f4bf3c;
  top: ${(p) => {
    if (p.top < 600) {
      return '-52px';
    }
    if (p.top > 600 && p.top < 652) {
      return `${p.top - 652}px`;
    }
    if (p.top > 650) {
      return '0px';
    }
  }};
  left: 0;
  right: 0;
  text-align: center;
  z-index: 2;
  padding: 10px;
  transition-delay: 0.5s;
  transition: background-color 1s;
  background-color: ${(p) => {
    if (p.top < 2200) {
      return 'rgb(126, 147, 138)';
    }
    if (p.top > 2200 && p.top < 3250) {
      return `#C46D5E`;
    }
    if (p.top > 3250 && p.top < 5900) {
      return `#474973`;
    }
    if (p.top > 5900) {
      return `#286360`;
    }
  }};
  opacity: 0.95;

  height: 50px;

  @media (max-width: 600px) {
    top: ${(p) => {
      if (p.top < 760) {
        return '-52px';
      }
      if (p.top >= 760 && p.top < 812) {
        return `${p.top - 812}px`;
      }
      if (p.top > 812) {
        return '0px';
      }
    }};
    background-color: ${(p) => {
      if (p.top < 2800) {
        return 'rgb(126, 147, 138)';
      }
      if (p.top > 2800 && p.top < 4250) {
        return `#C46D5E`;
      }
      if (p.top > 4250 && p.top < 6350) {
        return `#474973`;
      }
      if (p.top > 6350) {
        return `#286360`;
      }
    }};
  }
`;

const NavbarLink = styled(Link)`
  color: #f4bf3c;

  margin: 0 10px;
  transition: opacity 1s, font-size 0.2s;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    font-size: 16px;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    margin: auto 8px;
    font-size: 12px;
  }
`;
