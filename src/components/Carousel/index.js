import React, { useState } from 'react';
import { CarouselStyle, Right, Wrapper, Left } from './styles';

import Thumbnail from '../Thumbnail';

export default function Carousel({ videos }) {
  const [move, setMove] = useState(0);

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }

  function actionLeft() {
    setMove((oldMove) => oldMove + 1);
  }

  return (
    <CarouselStyle>
      <Left onClick={actionLeft} />
      <Wrapper move={move}>
        {videos.map(
          ({ src, alt, title, avatar, channelName, timer, link, id }) => (
            <Thumbnail
              key={id}
              src={src}
              alt={alt}
              title={title}
              avatar={avatar}
              channelName={channelName}
              timer={timer}
              link={link}
            />
          )
        )}
      </Wrapper>
      <Right onClick={actionRight} />
    </CarouselStyle>
  );
}
