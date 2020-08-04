import styled from 'styled-components';
import logo from '../../assets/img/ImersaoReact.svg';

const LogoImersao = styled.img.attrs({
  src: logo,
  alt: 'Logo da Imersão Logo',
})`
  height: 50px;
  vertical-align: middle;
`;

export default LogoImersao;
