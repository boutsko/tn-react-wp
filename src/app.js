import React from 'react';

import MainLayout from 'components/layouts/MainLayout';
import BlogPage from './components/BlogPage';
import {posts} from './fixtures';

const App = () => (
  <MainLayout>
    <BlogPage posts={posts}/>
  </MainLayout>
);

export default App;
