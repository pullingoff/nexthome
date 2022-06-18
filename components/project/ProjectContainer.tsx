import styled from 'styled-components';
import { IProject } from 'types';

const ArticleContainer = ({ pj }: { pj: IProject }) => {
  return (
    <Container>
      {pj.longDescription.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </Container>
  );
};

const Container = styled.section`
  padding: 10px;
  p {
    line-height: 170%;
    white-space: normal;
    margin: 0.5rem 0;

    @media (min-width: ${({ theme }) => theme.device.md}) {
      font-size: 1.2rem;
    }
  }
`;

export default ArticleContainer;
