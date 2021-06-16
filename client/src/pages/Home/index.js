import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
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
        <Wrapper>
          <h1 style={opacity}>
            Hi, <br /> my name is Maximilian
          </h1>
          <br />{' '}
          <h3 style={opacity}>
            I'm a Civil Engineer gone Full Stack Developer.
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
              duration={700}
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
              duration={700}
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
        </Wrapper>
      </Fade>
    </div>
  );
}

export default Home;

const Wrapper = styled('div')`
  color: #f4bf3c;
  display: inline-block;
  width: 90%;
  text-align: left;
  margin: auto;

  .home_link {
    padding: 3px 6px;
    color: #f4bf3c;
    background-color: #286360;
    border-radius: 16px;
  }

  .home_link:active {
    font-weight: 200;
    padding: 3px 6px;
    color: #f4bf3c;
    background-color: rgb(126, 147, 138);
    border-radius: 16px;
    font-size: 15px;
  }

  @media (min-width: 600px) {
    .home_link:hover {
      font-size: 30px;
      font-weight: 500;
      color: #f4bf3c;
      background-color: rgb(126, 147, 138);
      cursor: pointer;
      text-decoration: none;
    }

    .home_link:active {
      font-weight: 200;
      padding: 3px 6px;
      color: #f4bf3c;
      background-color: rgba(182, 233, 167, 0.4);
      border-radius: 16px;
      font-size: 25px;
    }

    .home_link {
      font-size: 25px;
      transition: font-size 0.1s, font-weight 0.1s, text-decoration 0.1s,
        background-color 0.3s;
    }
  }
`;
