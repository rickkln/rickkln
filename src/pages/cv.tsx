import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="CV" />
    <p>
      I am currently not looking for a job.
    </p>
    <p>
      If you plan on ignoring the statment above and contacting me about a job, you should
      know that I will probably mark your message as spam if the position doesn&apos;t
      at least meet the following requirements:
    </p>
    <ul>
      <li>
        Involves creating a product people love
      </li>
      <li>
        Is being offerred by a highly ethical company
      </li>
      <li>
        Is for a JavaScript, Swift or Leadership role
      </li>
      <li>
        Includes either, visa Sponsorship for the USA, or Full Remote
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
