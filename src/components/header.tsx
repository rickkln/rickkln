import React, { CSSProperties } from 'react';
import { Link } from 'gatsby';
import {
  FaTwitter, FaLinkedin, FaGithub, FaRegEnvelope,
} from 'react-icons/fa';
import Photo from './photo';

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  margin: '0 0.8rem',
};

const activeStyle: CSSProperties = {
  textDecoration: 'underline',
};

const Header = () => (
  <header
    style={{
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 760,
        padding: '1.4rem 1.0875rem 1rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
      }}
    >
      <div
        style={{
          flex: '1',
        }}
      >
        <Link to="/">
          <Photo />
        </Link>
      </div>
      <div
        style={{
          margin: '0.8rem 0 0 0.8rem',
          flex: '2.3',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h1
            style={{
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            <Link to="/" style={linkStyle} activeStyle={activeStyle}>About</Link>
            <Link to="/latest" style={linkStyle} activeStyle={activeStyle}>Latest</Link>
            <Link to="/cv" style={linkStyle} activeStyle={activeStyle}>CV</Link>
          </h1>
          <div
            style={{
              textAlign: 'center',
              fontSize: '2em',
            }}
          >
            <a href="https://twitter.com/rickkln" aria-label="Twitter">
              <FaTwitter style={{ margin: '10' }} />
            </a>
            <a href="https://github.com/rick-kln" aria-label="Github">
              <FaGithub style={{ margin: '10' }} />
            </a>
            <a href="https://www.linkedin.com/in/rick-kleinhans-43773161/" aria-label="Linkedin">
              <FaLinkedin style={{ margin: '10' }} />
            </a>
            <a href="mailto:hi@rickkln.com" aria-label="Mail">
              <FaRegEnvelope style={{ margin: '10' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
