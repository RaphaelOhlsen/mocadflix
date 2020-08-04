import styled from 'styled-components';

const Channel = styled.figcaption`
  font-size: 1.6rem;
  color: var(--grayLight);
  font-weight: 700;
`;

const Avatar = styled.img`
  width: 5rem;
  border-radius: 50%;
  border: 0.2rem solid var(--primary);
  margin-right: 1rem;
`;

const WrapperAvatar = styled.figure`
  display: flex;
  align-items: center;
`;

export { Avatar, Channel, WrapperAvatar };
