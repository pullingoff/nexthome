import styled from "styled-components";
import CustomLink from "./CustomLink";
import {POSTS_PER_PAGE} from "@config/index"

interface IPagination {
    category: string
    pageTotal: number
    currentPage: number
    hasNextPage: boolean
}

const NumberPagination = ({ category, pageTotal, currentPage, hasNextPage }: IPagination) => {
//   const pageTotal = pageTotal
  const isFirst = currentPage === 1;
  const isLast = currentPage === pageTotal;
  const path = category.toLowerCase();
    
  return (
    <>
      <Nav>
          {isLast &&
            <Button href={`/${path}/page/${currentPage-1}`}>
                &lt;
            </Button>
            }
        {pageTotal && 
        Array(pageTotal)
        .fill(0)
          .map((_, i) => (
            <Button key={i+1} href={`/${path}/page/${i+1}`}>
                {i+1}
            </Button>
          ))}

          {isFirst && 
        <Button href={`/${path}/page/${currentPage+1}`}>
          &gt;
        </Button>
        }
      </Nav>
    </>
  );
}

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

  &:hover {
    
    cursor: pointer;
    transform: translateY(-2px);
  }
`;

export default NumberPagination;