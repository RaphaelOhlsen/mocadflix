import React from 'react';
import Header, { Wrapper } from './styles';
import Logo from '../Logo';
import Button from '../Button';

export default function HeaderOpen() {
  return (
    <Header>
      <Wrapper>
        <Logo />
        <Button as="a" href="/video/new">
          Entrar
        </Button>
      </Wrapper>
    </Header>
  );
}
