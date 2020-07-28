import styled from 'styled-components';

const Button = styled.button`
  color: var(--grayLight);
  background: var(--dark);

  border: 1px solid var(--grayLight);
  border-radius: 4px;
  box-sizing: border-box;

  padding: 14px 35px;
  font-size: 1.6rem;
  font-weight: 600;
  font-style: normal;

  cursor: pointer;
  
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

export default Button;
