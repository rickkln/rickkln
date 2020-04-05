import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="CV" />
    <p>
      I am currently not looking for a job, thanks though!
    </p>
    <p>
      I do understand that if you are on this page you might decide to contact me for
      my CV anyway
      {' '}
      <span role="img" aria-labelledby="wink">😄</span>
      {' '}
      In that case you should know that I probably won&apos;t consider your position
      if is does not involve:
    </p>
    <ul>
      <li>
        Creating a product people love
      </li>
      <li>
        Working for a highly ethical company
      </li>
      <li>
        Working in a JavaScript, Swift or Leadership role
      </li>
      <li>
        Either, visa sponsorship & relocation to the US, or full remote
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
