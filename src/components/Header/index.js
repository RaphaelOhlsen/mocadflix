import styled from 'styled-components';
import Button from '../Button';
import Logo from '../Logo';

const Header = styled.header`
  /* width: 100%; */
  height: 94px;
  z-index: 100;

  /* position: fixed;
  top: 0;
  left: 0;
  right: 0; */
  padding: 0 40px;

  background-color: var(--black);
  border-bottom: 4px solid var(--primary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 800px) {
    height: 50px;
    justify-content: center;

    & > ${Logo} {
      height: 30px;
    }

    & > ${Button} {
      background-color: var(--primary);
      border: 0;
      border-radius: 0;

      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
      text-align: center;
      width: 100%;
    }
  }
`;

export default Header;