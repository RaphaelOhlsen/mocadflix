import React from 'react';
import { WrapperThumb, Thumb, Backgorund, Title } from './styles';
import AvatarContainer from '../Avatar';

export default function Thumbnail({src, alt, avatar, channelName, title}) {
  return (
    <Backgorund>
      <WrapperThumb>
        <Thumb src={src} alt={alt} />
        <AvatarContainer photo={avatar} channelName={channelName} />
        <Title>{title}</Title>
      </WrapperThumb>
    </Backgorund>
  );
}


