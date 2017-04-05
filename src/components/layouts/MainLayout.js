import React, { PropTypes } from 'react';

import { Segment, Header, Container } from 'semantic-ui-react';

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

export default MainLayout

const Logo = () => (
  <Segment>
    <Header>Thinknetica Blog</Header>
  </Segment>
);


const Footer = () => (
  <Segment>
    <Header>Powered by React Course.</Header>
  </Segment>
);
