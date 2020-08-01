import styled from 'styled-components';

const Button = styled.button`
  background: var(--dark);
  border: 1px solid var(--grayLight);
  box-sizing: border-box;
  color: var(--grayLight);
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  padding: 1.2rem 3rem;
  transition: background-color 200ms linear,
    transform 200ms cubic-bezier(0, 0, 0.73, 2.24);

  &:hover {
    background-color: var(--border);
    transform: scale(1.05);
  }

  &:active {
    transition: background-color 200ms linear, transform 100ms linear;
    transform: scale(0.95);
  }
`;

export default Button;
