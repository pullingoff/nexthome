import styled from 'styled-components'
import { headerInfo } from '@data/resume'

const GridHeader = () => {
    
    return (
        <StyledHeader>
            <StyledTitle>
                <StyledName>{headerInfo.name}</StyledName>
                <StyledJob>{headerInfo.job}</StyledJob>
            </StyledTitle>
            <StyledEmail>
                Email: {headerInfo.email}
            </StyledEmail>
            <div>
                {headerInfo.firstSentences &&
                headerInfo.firstSentences.map((stc, idx) => (
                     <IntroLines key={idx}>
                         {stc}
                    </IntroLines>
                ))}
            </div>
        </StyledHeader> 
    )
}

export default GridHeader

const IntroLines = styled.span`
display: block;
font-size: 1.2rem;
margin: var(--xl) 0;
line-height: 1.4rem;
font-weight: 500;
`

const StyledEmail = styled.span`
font-size: 1.2rem;
font-weight: 400;
margin:6px 0;
`
const StyledJob = styled.span`
font-size: var(--2xl);
margin-left: var(--md);
padding-top: var(--md);
font-weight: 600;
`

const StyledTitle = styled.div`
display: flex; align-self: flex-start;
`
const StyledHeader = styled.section`
width:100%;display:grid;
`
const StyledName = styled.h1`
  border-top: none;
  font-size: var(--7xl);
  font-weight: 900;
  margin:0 auto 0 0;
  color:$theme1;
`