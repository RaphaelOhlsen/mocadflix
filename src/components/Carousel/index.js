import React, { useState, useRef, useEffect } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import { CarouselStyle, Right, Wrapper, Left } from './styles';

import Thumbnail from '../Thumbnail';

export default function Carousel({ videos }) {
  const [move, setMove] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState();
  const winWidth = useWindowWidth();
  const $wrapper = useRef(null);

  useEffect(
    () => setWrapperWidth($wrapper.current.getBoundingClientRect().width),
    []
  );

  function actionRight() {
    setMove((oldMove) => oldMove - 1);
  }

  function actionLeft() {
    setMove((oldMove) => oldMove + 1);
  }

  return (
    <CarouselStyle move={move} moveLastRight={wrapperWidth - winWidth}>
      <Left onClick={actionLeft} />
      <Wrapper ref={$wrapper}>
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
