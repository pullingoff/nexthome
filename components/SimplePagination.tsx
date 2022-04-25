import CustomLink from "./CustomLink";
import styled from "styled-components";


const SimplePagination = ({category, pageTotal, currentPage, hasNextPage} : {
    category: string,
    pageTotal: number,
    currentPage: number, 
    hasNextPage: boolean
}) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === pageTotal;
    const path = category.toLowerCase();
    
    return (
        <StyledPagUl>
            { !isFirst && 
                <StyledLi>
                    <CustomLink href={`/${path}/page/${currentPage-1}`}>
                        PREV
                    </CustomLink>
                </StyledLi>
            }
            {!isLast && (
                <StyledLi>
                    <CustomLink href={`/${path}/page/${currentPage+1}`}>
                        NEXT    
                    </CustomLink>
                </StyledLi>
            )}
        </StyledPagUl>
    )
}

export default SimplePagination

const StyledPagUl = styled.ul`
display: flex;
justify-content: center;
font-size: 1.4rem;
li {
    display: inline;
    margin: 10px;
}
`

const StyledLi = styled.li`
&:hover {
    color: salmon;
}
`