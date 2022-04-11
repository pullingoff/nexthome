import styled from "styled-components"

type BtnProps = {
    onClick: () => void;
}

const GoBackBtn = ({ ...props }: BtnProps) =>{
    return(
        <StyledGoBackBtn>
            &larr; 이전
        </StyledGoBackBtn>    
        
    )
}

export default GoBackBtn


const StyledGoBackBtn = styled.button`
display: block;
margin: 10px 0;
color: var(--color-point-blue);
font-weight: 700;
&:hover {
  color: var(--color-point-pink);
}
`
