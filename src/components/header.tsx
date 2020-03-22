import { Link } from 'gatsby';
import React from 'react';
import Photo from './photo';

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle = '' }: Props) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <Photo />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
        <Link to="/">About</Link>
        <Link to="/latest">Latest</Link>
        <Link to="/cv">CV</Link>
      </h1>
    </div>
  </header>
);

export default Header;
