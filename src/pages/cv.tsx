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
      I do understand that if you are on this page you might ignore the above and contact me about
      a job anyway. In that case you should know that I will probably mark your message as spam if
      the position doesn&apos;t at least meet the following requirements:
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
        Includes either, visa sponsorship and relocation to the US, or full remote
      </li>
    </ul>
  </Layout>
);

export default IndexPage;
