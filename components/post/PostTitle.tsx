import styled from "styled-components"

type TitleProp = {
  title: string;
}

const PostTitle = ({ title } : TitleProp) => {
    return (
      <StyledTitle>
        {title}
      </StyledTitle>
    )
  }

export default PostTitle

const StyledTitle = styled.h1`
font-size: var(--10xl);
line-heigth: var(--4xl);
font-weight: 800;
color: var(--theme1-color);
@media (min-width: ${({theme}) => theme.device.sm}) {
  font-size: var(--8xl);
}
`