import React from 'react';
import Layout from '@components/layout';

const ErrorPage = ({ data }) => {
  const { site, menus, page } = data;

  return (
    <Layout
      site={site}
      menus={menus}
      page={{
        seo: page.seo,
      }}
    >
      <h1>404</h1>
    </Layout>
  );
};

export default ErrorPage;
