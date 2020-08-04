import styled from 'styled-components';
import Tag from '../Tag';
import Description from '../Description';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 5rem;

  & > ${Tag} {
    margin-bottom: 3rem;
  }

  & > ${Tag}:not(:first-child) {
    align-self: flex-start;
    margin-left: 3rem;
  }

  & > ${Description} {
    max-width: 60rem;
    margin: 0 auto 4rem;
  }
`;

export default Section;
