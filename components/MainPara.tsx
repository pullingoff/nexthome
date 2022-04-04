import styled from "styled-components"

const MainPara = () => {
    return (
    <StyledP>
        <strong>&quot;거미는 자신의 실로써 공간의 자유에 이른다.&quot;</strong><br/>
        궁금한 것에 도전하고, 앞으로 나아가고자 발걸음을 내딛는 <strong>개발자 박하은</strong>입니다. <br/>
    </StyledP>
    )
}

export default MainPara

const StyledP = styled.p`
text-align: center;
font-size: var(--text-base);
line-height: 150%;
margin: var(--lg);
cursor: pointer;
font-weight: 700;

// @media (min-width: ${({theme}) => theme.device.md}) {
//     font-size: var(--text-title);
//   }
`