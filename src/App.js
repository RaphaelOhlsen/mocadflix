import React from 'react';

// import './styles/settings/colors.css';
// import './styles/reset.css';
// import './styles/definitions.css';

import LogoImersao from './components/LogoImersao';
import Header, { Wrapper } from './components/Header';
import Logo from './components/Logo';
import Button from './components/Button';
import Footer from './components/Footer';
import Banner, { TextContainer } from './components/Banner';
import Link from './components/Link';
import Tag from './components/Tag';
import Title from './components/Title';
import Description from './components/Description';
import Thumbnail from './components/Thumbnail';

import maujor from './assets/img/maujor.png';
import avatar from './assets/img/avatar.png';

function App() {
  return (
    <>
      <Header>
        <Wrapper>
          <Logo />
          <Button as="a" href="/video/new">
            Novo vídeo
          </Button>
        </Wrapper>
      </Header>
      <Banner>
        <TextContainer>
          <Tag> Front End</Tag>
          <Title>MAUJOR - O Dinossauro das CSS </Title>
          <Description>
            Não é uma simples entrevista, mas sim um grande motivador para todos
            que querem iniciar na área de desenvolvimento. Ouvimos tantas
            histórias legais que decidimos fazer uma série de vídeos com esse
            bate papo tão incrível que tivemos com o Maujor® - O dinossauro das
            CSS!!!
          </Description>
        </TextContainer>
        <Thumbnail
          src={maujor}
          alt="Thumbnail do Maujor"
          title="MAUJOR - O Dinossauro das CSS"
          avatar={avatar}
          channelName="CDF TV"
        />
      </Banner>
      <Footer>
        <Logo />
        <p>
          Site feito na{' '}
          <Link href="https://alura.com.br">
            <LogoImersao />
          </Link>
        </p>
      </Footer>
    </>
  );
}

export default App;
