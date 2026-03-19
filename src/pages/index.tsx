import React from 'react';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import { Page as Content } from '@/components';

const IndexPage: React.FC = () => (
  <>
    <Header />
    <Content />
    <Footer />
  </>
);

export default IndexPage;
