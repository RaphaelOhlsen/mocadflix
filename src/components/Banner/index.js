import styled from 'styled-components';

import Tag from '../Tag';
import Title from '../Title';

import container from '../../tools/container';

export const TextContainer = styled.div`
  padding-top: 1rem;
  padding-right: 5rem;
  max-width: 45%;

  & > ${Tag} {
    margin-bottom: 4rem
  }

  & > ${Title} {
    margin-bottom: 1rem;
  }
`;

const Banner = styled.section`
  color: var(--grayLight);
  ${container}
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 70vh;
  height: 100vh;

 


`;


export default Banner;