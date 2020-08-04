import React from 'react';

import HeaderOpen from './components/HeaderOpen';
import FooterOpen from './components/FooterOpen';
import Banner, { TextContainer } from './components/Banner';
import Section from './components/Section';
import Tag from './components/Tag';
import Title from './components/Title';
import Description from './components/Description';
import Thumbnail from './components/Thumbnail';
import Carousel from './components/Carousel';

import maujor from './assets/img/maujor.png';
import avatar from './assets/img/avatar.png';

const videos = [
  {
    id: 1,
    src: maujor,
    alt: 'Thumbnail do Maujor',
    title: 'MAUJOR - O Dinossauro das CSS',
    avatar,
    channelName: 'CDF TV',
    timer: '00:01:00',
    link: 'https://www.youtube.com/watch?v=G1wFdb9OM_U&t=50s',
  },
  {
    id: 2,
    src: maujor,
    alt: 'Thumbnail do Maujor',
    title: 'MAUJOR - O Dinossauro das CSS',
    avatar,
    channelName: 'CDF TV',
    timer: '00:01:00',
    link: 'https://www.youtube.com/watch?v=G1wFdb9OM_U&t=50s',
  },
  {
    id: 3,
    src: maujor,
    alt: 'Thumbnail do Maujor',
    title: 'MAUJOR - O Dinossauro das CSS',
    avatar,
    channelName: 'CDF TV',
    timer: '00:01:00',
    link: 'https://www.youtube.com/watch?v=G1wFdb9OM_U&t=50s',
  },
  {
    id: 4,
    src: maujor,
    alt: 'Thumbnail do Maujor',
    title: 'MAUJOR - O Dinossauro das CSS',
    avatar,
    channelName: 'CDF TV',
    timer: '00:01:00',
    link: 'https://www.youtube.com/watch?v=G1wFdb9OM_U&t=50s',
  },
  {
    id: 5,
    src: maujor,
    alt: 'Thumbnail do Maujor',
    title: 'MAUJOR - O Dinossauro das CSS',
    avatar,
    channelName: 'CDF TV',
    timer: '00:01:00',
    link: 'https://www.youtube.com/watch?v=G1wFdb9OM_U&t=50s',
  },
];

function App() {
  return (
    <>
      <HeaderOpen />
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
          timer="00:01:00"
        />
      </Banner>
      <Section>
        <Tag>Mocad Flint</Tag>
        <Description>
          MOCAD - Man of Certain Age Developer - é uma comunidade voltada a
          incentivar pessoas de meia idade a entrarem na área da programação.
        </Description>
        <Tag small>Apenas um teste</Tag>
        <Carousel videos={videos} />
      </Section>
      <FooterOpen />
    </>
  );
}

export default App;
