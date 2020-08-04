import styled, { css } from 'styled-components';

const Tag = styled.h2`
  background-color: var(--frontEnd);
  font-size: 5rem;
  display: inline-block;
  font-weight: 400;
  color: var(--white);
  padding: 2rem 1.8rem;

  ${({ small }) =>
    small &&
    css`
      font-size: 2.5rem;
      padding: 0.8rem 1rem;
    `}
`;

export default Tag;
