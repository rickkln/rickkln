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
      I am co-founder and CTO at
      {' '}
      <a href="https://nile.ag">Nile</a>
      , where our digital solutions aim to solve issues inherent to food trading including price discovery,
      quality verification, payments and traceability. Our current focus is on the Nile Marketplace, a
      B2B e-commerce platform that enables direct trades between producers and entities that sell to consumers.
    </p>
    <p>
      I have spent all of my career as either a founder or an early employee at various startups,
      helping companies make products their customers love. Immediately preceding my time at Nile
      I helped take
      {' '}
      <a href="https://luno.com">Luno</a>
      {' '}
      from series A funding to millions of customers and an eventual
      {' '}
      <a href="https://www.luno.com/blog/en/post/luno-joins-dcg">acquisition by DCG</a>
      .
    </p>
    <p>
      Throughout the years I have tinkered primarily in JavaScript, Swift and Go, but
      have also dabbled in Ruby, Python, Kotlin, Java, and C.
    </p>
  </Layout>
);

export default IndexPage;
