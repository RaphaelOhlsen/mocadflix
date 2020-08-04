import React from 'react';
import { WrapperThumb, Thumb, Backgorund, Title, Timer } from './styles';
import AvatarContainer from '../Avatar';

export default function Thumbnail({
  src,
  alt,
  avatar,
  channelName,
  title,
  timer,
}) {
  return (
    <Backgorund>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarContainer photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
        <Timer>{timer}</Timer>
      </WrapperThumb>
    </Backgorund>
  );
}
