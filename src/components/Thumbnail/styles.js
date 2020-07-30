import styled from 'styled-components';
import { WrapperAvatar } from '../Avatar/styles';


const space = 1;
const calcHypot = (space) => Math.hypot(space,space);
const toString = (el) => `${el}rem`
const hypot = `${calcHypot(space)}rem`;

const Title = styled.figcaption`
  position: absolute;
  left: var(--space);
  bottom: var(--space);
  font-size: 2rem;
  color: var(--grayLight);
  font-weight: 300;
  background-color: var(--blackMedium);
  padding: .4rem .6rem;
  transform: translateY( calc((100% + var(--space)) * -1));
  opacity: 0;
  transition: transform 200ms linear, opacity 100ms linear
`;


const Thumb = styled.img`
  width: 100%;
  opacity: 1;
  transition: filter 100ms linear;
`;

const WrapperThumb = styled.figure`

  opacity: 1;
  position: relative;
  border: var(--border) solid var(--frontEnd);
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
  --border: .4rem;
  --move-space: calc(var(--space) * -1);
  --move-border: calc(var(--border) * -1); 
  
  position: relative;
  background-color: var(--frontEnd);
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: var(--space);
    height: var(--space);
    background-color: var(--frontEnd);
    transition: transform 80ms linear;
  }

  &::before {  
    right: 0;
    top: 0;
    transform-origin: right top;
    transition: transform 80ms linear;
  }
  
  &::after {
    left: 0;
    bottom: 0;
    transform-origin: bottom left;
    z-index: -1;
  }


  &:hover {

    &::before,
    &::after {
      transition: transform 100ms linear;
      width: ${hypot};
      height: ${hypot};
    }

    &::before {    
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
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
    }
  }

  `;

export { Thumb, WrapperThumb, Backgorund, Title };