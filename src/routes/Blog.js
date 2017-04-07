import MainLayout from 'components/layouts/MainLayout';

import { postPath } from 'helpers/routes';

import BlogPage from 'components/BlogPage';
import Post from 'components/Post';

const Index = {
  path: "/",
  component: BlogPage
};

const PostRoute = {
  path: postPath(),
  component: Post
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute
  ]
};
