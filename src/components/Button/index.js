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
  transition: background-color 200ms linear,
    transform 200ms cubic-bezier(0, 0, 0.73, 2.24);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: var(--border);
    z-index: -1;
  }

  &:hover {
    &::before {
      width: 100%;
      transition: width 250ms linear;
    }
  }
`;

export default Button;
