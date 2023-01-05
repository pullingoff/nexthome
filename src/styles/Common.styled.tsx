import styled from 'styled-components';

const S: any = {};

S.PageTitle = styled.h1`
  font-weight: 800;
  font-size: var(--8xl);

  &:hover {
    animation: color-change 3s 2;
    @keyframes color-change {
      0% {
        color: var(--theme1-color);
      }
      50% {
        color: var(--theme3-color);
      }
      100% {
        color: salmon;
      }
    }
  }
`;

export default S;
