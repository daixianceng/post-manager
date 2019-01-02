import React from 'react';
import AuthGuard from 'components/AuthGuard';
import Layout from 'components/Layout';
import Overview from './Overview';

const Page = () => (
  <AuthGuard>
    <Layout>
      <Overview />
    </Layout>
  </AuthGuard>
);

export default Page;
