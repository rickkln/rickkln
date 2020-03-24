import React, { CSSProperties } from 'react';
import { Link } from 'gatsby';
import {
  FaTwitter, FaLinkedin, FaGithub, FaRegEnvelope,
} from 'react-icons/fa';
import Photo from './photo';

const linkStyle: CSSProperties = {
  textDecoration: 'none',
  margin: '0 10px',
};

const activeStyle: CSSProperties = {
  textDecoration: 'underline',
};

const Header = () => (
  <header
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <div
        style={{
          flex: '250px',
        }}
      >
        <Link to="/">
          <Photo />
        </Link>
      </div>
      <div
        style={{
          flex: '250px',
        }}
      >
        <h1
          style={{
            margin: 0,
            textAlign: 'center',
          }}
        >
          <Link to="/" style={linkStyle} activeStyle={activeStyle}>About</Link>
          <Link to="/latest" style={linkStyle} activeStyle={activeStyle}>Latest</Link>
          <Link to="/cv" style={linkStyle} activeStyle={activeStyle}>CV</Link>
        </h1>
        <div style={{ textAlign: 'center' }}>
          <a href="https://twitter.com/rickkln" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://github.com/rick-kln" aria-label="Github"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/rick-kleinhans-43773161/" aria-label="Linkedin"><FaLinkedin /></a>
          <a href="mailto:hi@rickkln.com" aria-label="Mail"><FaRegEnvelope /></a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
