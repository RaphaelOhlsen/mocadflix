import styled from 'styled-components';

const Button = styled.button`
  background: var(--dark);
  border: 1px solid var(--grayLight);
  border-radius: 4px;
  box-sizing: border-box;
  color: var(--grayLight);
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  padding: 1.2rem 3rem;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
