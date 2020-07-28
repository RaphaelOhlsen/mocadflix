import styled from 'styled-components';
import Logo from '../Logo';

const Footer = styled.footer`
  background-color: var(--black);
  font-size: 1.8rem;
  font-weight: 300;
  padding: 2rem 0;
  color: var(--white);
  border-top: 4px solid var(--primary);

  /* position: absolute;
  left: 0;
  right: 0;
  bottom: 0; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  & > ${Logo} {
    margin-bottom: 2rem;
    height: 6rem
  }
  
`;

export default Footer;