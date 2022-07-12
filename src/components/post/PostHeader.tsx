import styled from 'styled-components';

const PostHeader = ({ date, title }: { date: string; title: string }) => {
  return (
    <StyledHeader>
      <time>{date}</time>
      <h1>{title}</h1>
    </StyledHeader>
  );
};

export default PostHeader;

const StyledHeader = styled.header`
  padding-top: var(--lg);
  text-align: center;
  animation: 1s anim-lineUp 0.1s ease-out 1;

  time {
    font-weight: 500;
    color: var(--theme1-color);
  }

  h1 {
    font-size: var(--10xl);
    line-heigth: var(--4xl);
    font-weight: 800;
    color: var(--theme1-color);
    @media (min-width: ${({ theme }) => theme.device.sm}) {
      font-size: var(--8xl);
    }
  }
`;
