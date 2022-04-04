import CustomLink from "./CustomLink";
import styled from "styled-components";

const PostHeadings = ({headings})=> {
    return (
        <>
        {headings.length > 0 ? (
            <details>
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
            </details>
        ) : null}
        </>
    )
}

export default PostHeadings

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