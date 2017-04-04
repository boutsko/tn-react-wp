import React from 'react';
import BlogPage from './components/BlogPage';
import {posts} from './fixtures';

const App = () => (<BlogPage posts={posts}/>);

export default App;
