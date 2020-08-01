import React from 'react';
import { Channel, Avatar, WrapperAvatar } from './styles';

export default function AvatarContainer({ photo, channelName }) {
  return (
    <WrapperAvatar>
      <Avatar src={photo} alt={channelName} />
      <Channel>{channelName}</Channel>
    </WrapperAvatar>
  );
}
