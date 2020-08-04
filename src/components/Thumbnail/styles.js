import styled from 'styled-components';
import { WrapperAvatar } from '../Avatar/styles';

const space = 1;
const calcHypot = (distance) => Math.hypot(distance, distance);
const toString = (el) => `${el}rem`;
const hypot = `${calcHypot(space)}rem`;

const Timer = styled.span`
  position: absolute;
  right: var(--space);
  bottom: var(--space);
  font-size: 1.8rem;
  color: var(--white);
  padding: 0.2rem 0.4rem;
  opacity: 0;
  transition: opacity 100ms linear;
`;

const Title = styled.figcaption`
  position: absolute;
  left: var(--space);
  bottom: var(--space);
  font-size: 2rem;
  color: var(--grayLight);
  font-weight: 300;
  background-color: var(--blackMedium);
  padding: 0.4rem 0.6rem;
  transform: translateY(calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear;
`;

const Thumb = styled.img`
  width: 100%;
  transition: filter 100ms linear;
`;

const WrapperThumb = styled.figure`
  position: relative;
  border-top: 0.225rem solid var(--frontEnd);
  border-left: 0.2rem solid var(--frontEnd);
  border-right: 0.2rem solid var(--frontEnd);
  max-width: 64rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 100ms linear;

  & > ${WrapperAvatar} {
    position: absolute;
    left: var(--space);
    top: var(--space);
    margin-right: var(--space);
    transform: translateX(calc((100% + var(--space)) * -1));
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear;
  }
`;

const Backgorund = styled.div`
  --space: ${toString(space)};
  --space: 1rem;
  --border: 0.4rem;
  --move-space: calc(var(--space) * -1);

  position: relative;
  background-color: var(--frontEnd);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: ${hypot};
    height: ${hypot};
    background-color: var(--frontEnd);
    transition: transform 80ms linear;
  }

  &::before {
    right: 0;
    top: 0;
    transform-origin: right top;
    transform: rotate(45deg) scale(0);
  }

  &::after {
    left: 0;
    bottom: 0;
    transform-origin: left bottom;
    z-index: -1;
    transform: rotate(-45deg) scale(0);
  }

  &:hover {
    &::before {
      transform: rotate(45deg) scale(1);
    }

    &::after {
      transform: rotate(-45deg) scale(1);
    }

    & > ${WrapperThumb} {
      transform: translate(var(--move-space), var(--move-space));

      & > ${Thumb} {
        filter: brightness(0.6);
      }

      & > ${WrapperAvatar} {
        transform: translateX(0);
        opacity: 1;
        transition: transform 300ms 200ms linear, opacity 300ms 200ms linear;
      }

      & > ${Title} {
        transform: translateY(0);
        opacity: 1;
        transition: transform 300ms 200ms linear, opacity 300ms 200ms linear;
      }

      & > ${Timer} {
        opacity: 1;
        transition: opacity 300ms 200ms linear;
      }
    }
  }
`;

export { Thumb, WrapperThumb, Backgorund, Title, Timer };
