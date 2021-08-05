import React from 'react';
import Layout from '@components/layout';

const ErrorPage = ({ data, statusCode }: { data: any; statusCode: number }) => {
  return (
    <Layout site={data?.site} page={data?.page} schema={undefined}>
      <h1>{statusCode}</h1>
    </Layout>
  );
};

export default ErrorPage;
