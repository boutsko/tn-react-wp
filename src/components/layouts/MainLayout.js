import React, { PropTypes } from 'react';

import { Button, Segment, Header, Container } from 'semantic-ui-react';

import Link from 'components/elements/Link';

import history from 'helpers/history';

const MainLayout = ({ children }) => (
  <Container>
    <Logo />
    <GoBackButton />
      {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;

const GoBackButton = () => (
  <Button onClick={() => history.goBack()}>Назад</Button>
);
  
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
