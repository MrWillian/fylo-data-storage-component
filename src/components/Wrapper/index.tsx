import React from 'react';

import Menu from '../Menu';
import Info from '../Info';

import { Container } from './styles';

const Wrapper: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Info />
    </Container>
  );
}

export default Wrapper;