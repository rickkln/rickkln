import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Latest" />
    <a
      className="twitter-timeline"
      data-theme="light"
      href="https://twitter.com/RickKLN?ref_src=twsrc%5Etfw"
    >
      Tweets by RickKLN
    </a>
  </Layout>
);

export default IndexPage;
