import styled, { css } from 'styled-components';
import { WrapperThumb, Backgorund } from '../Thumbnail/styles';

import arrow from '../../assets/img/arrow.svg';

const Wrapper = styled.div`
  display: flex;
  transition: transform 200ms linear;

  & > ${Backgorund} {
    margin-right: 2rem;
  }

  ${({ move }) =>
    css`
      transform: translateX(calc(var(--thumb-width) * ${move}));
    `}
`;

const Arrow = css`
  position: absolute;
  height: calc(100% - var(--space-top-bottom) * 2);
  width: 5rem;
  background-color: red;
  opacity: 1;
  border: none;
  transition: opacity 200ms linear, transform 200ms linear;
  z-index: 1;
  cursor: pointer;

  &::after {
    content: url(${arrow});
    display: inline-block;
    opacity: 1;
    outline: 0;
    transition: transform 100ms linear;
  }
`;

const Right = styled.button`
  ${Arrow};
  right: 0;

  &::after {
    transform: rotate(-90deg);
  }

  &:hover::after {
    transform: scale(1.2) rotate(-90deg);
  }

  &:active::after {
    transform: scale(1.2) rotate(-90deg) translateY(0.4rem);
    outline: 0;
  }
`;

const Left = styled.button`
  ${Arrow};
  left: 0;

  &::after {
    transform: rotate(90deg);
  }

  &:hover::after {
    transform: scale(1.2) rotate(90deg);
  }

  &:active::after {
    transform: scale(1.2) rotate(90deg) translateY(0.4rem);
    outline: 0;
  }
`;

const CarouselStyle = styled.div`
  --space-top-bottom: 2rem;
  --thumb-width: 40rem;
  position: relative;
  display: flex;
  align-items: center;
  align-self: flex-start;
  box-sizing: border-box;
  width: 100%;
  padding: var(--space-top-bottom) 3rem;
  overflow: hidden;

  & ${WrapperThumb} {
    width: var(--thumb-width);
  }

  &:hover > ${Right}, &:hover > ${Left} {
    opacity: 0.8;
  }

  & > ${Right}:hover {
    opacity: 0.9;
    transform-origin: right center;
  }
`;

export { Left, Right, CarouselStyle, Wrapper };
