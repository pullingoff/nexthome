import { POSTS_PER_PAGE } from "../config/";
import styled from "styled-components";
import CustomLink from "./common/CustomLink";

interface IPagination {
  path: string;
  pageTotal: number;
  currentPage: number;
}

const Pagination = ({ pageTotal, currentPage, path }: IPagination) => {
  // pagination은 pageTotal이 기준보다 클 때 보여주자.
  const isFirst = currentPage === 1 && pageTotal > POSTS_PER_PAGE;
  const isLast = currentPage === pageTotal && pageTotal > POSTS_PER_PAGE;

  return (
    <Nav>
      {isLast && <Button href={`/${path}/1`}>&lt;</Button>}
      {pageTotal &&
        Array(pageTotal)
          .fill(0)
          .map((_, i) => (
            <Button
              key={i + 1}
              href={`/${path}/${i + 1}`}
              data-iscurrent={i === currentPage - 1}
            >
              {i + 1}
            </Button>
          ))}

      {isFirst && <Button href={`/${path}/${pageTotal}`}>&gt;</Button>}
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  margin: 16px;
`;

const Button = styled(CustomLink)`
  padding: 5px 3px;
  margin: 0;
  font-size: var(--4xl);
  color: var(--theme2-color);

  &:hover {
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[data-iscurrent="true"] {
    color: var(--theme1-color);
    font-weight: bold;
  }
`;

export default Pagination;
