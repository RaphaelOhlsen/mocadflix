import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  padding: 1.2rem 3rem;
  color: var(--grayLight);
  border: 1px solid var(--grayLight);
  box-sizing: border-box;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--border);
    transform-origin: bottom left;
    transform: translateX(100%) scaleX(1.5) skew(-30deg);
    transition: transform 200ms linear;
    z-index: -1;
  }

  &:hover::before {
    transform: translateX(-30%) scaleX(1.5) skew(-30deg);
  }
`;

export default Button;
