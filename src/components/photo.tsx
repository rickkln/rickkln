import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Photo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "rickkln.png" }) {
        childImageSharp {
          fluid(maxWidth: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '250px',
        maxHeight: '250px',
        borderRadius: '250px',
        borderStyle: 'solid',
        borderWidth: '5px',
      }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};

export default Photo;
