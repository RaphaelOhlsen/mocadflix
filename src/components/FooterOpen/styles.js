import styled from 'styled-components';
import Logo from '../Logo';

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.8rem;
  color: var(--white);
  padding: 2rem 0 0.5rem 0;
  border-top: 0.4rem solid var(--border);

  & > ${Logo} {
    margin-bottom: 1rem;
  }
`;

export default FooterStyle;
