import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="About" />
    <p>
      My name is Rick, and I make things. I enjoy making apps, websites,
      companies, beer, wine, music, adventures happen, and my wife happy.
    </p>
    <p>
      I am currently working as an engineering manager at
      {' '}
      <a href="https://luno.com">Luno</a>
      . I help a couple of our teams deliver some of the most loved, and widely used,
      products in the crypto industry.
    </p>
    <p>
      I have spent all of my career as either a founder or an early employee at various startups,
      helping companies make products their customers love. Immediately preceding my time at Luno
      I helped
      {' '}
      <a href="https://activitar.com">Activitar</a>
      {' '}
      go from an idea to the largest activity platform in Africa.
    </p>
    <p>
      Throughout the years I have tinkered primarily in JavaScript and Swift, but have also dabbled
      in Ruby, Python, Kotlin, Java, and C.
    </p>
  </Layout>
);

export default IndexPage;
