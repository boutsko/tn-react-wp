import React, { PropTypes } from 'react';

import { Segment, Header, Container } from 'semantic-ui-react';

import Link from 'components/elements/Link';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
      {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const Logo = () => (
  <Segment>
    <Link to="/">
      <Header>Thinknetica Blog</Header>
    </Link>
  </Segment>
);


const Footer = () => (
  <Segment>
    <Header>Powered by React Course.</Header>
  </Segment>
);
