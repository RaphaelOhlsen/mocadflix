import styled from 'styled-components';

import Button from '../Button';
import Logo from '../Logo';

const Header = styled.header`
  z-index: 100;
  padding: 2rem 3rem;
  border-bottom: 4px solid var(--border);

  @media (max-width: 800px) {
    padding: 1.5rem 1.6rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    justify-content: center;

    & > ${Logo} {
      height: 35px;
    }

    & > ${Button} {
      background-color: var(--primary);
      border: 0;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      text-align: center;
      width: 100vw;
    }
  }
`;

export default Header;
