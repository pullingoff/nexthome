import CustomLink from "../CustomLink";
import styled from "styled-components";
import { IHeading } from "types";

const PostHeadings = ({headings}: {
    headings: Array<IHeading>
})=> {
    return (
        <>
        {headings.length > 0 ? (
            <HeadingContainer>
                <StyledSummary>목차</StyledSummary>
                <HeadingOl>
                    {headings.map((heading) => (
                        <HeadingLi key={heading.text} >
                            <CustomLink href={heading.link}>
                            {heading.text}
                            </CustomLink>
                        </HeadingLi>
                    ))}
                </HeadingOl>
            </HeadingContainer>
        ) : null}
        </>
    )
}

export default PostHeadings

const HeadingContainer = styled.details`
display: none;  // style 고민중... 
`
const HeadingOl = styled.ul`
`

const StyledSummary = styled.summary`
    font-size: 1.25rem;
    font-weight: bold;
    // max-width: 600px;
    line-height: 1.4;
    color: var(--theme1-color);
    padding: 4px;
    background-color: #eeeeee;
    border: none;
    cursor: pointer;
`

const HeadingLi = styled.li`
list-style: none;
font-weight: bold;
font-size: 1.2rem;
margin-bottom: 2px;
// text-decoration: underline;
&:before {
    content: '-';
    position: relative;
    left: -10px;
}
&:hover {

}
`