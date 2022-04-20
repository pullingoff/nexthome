import { PjContainer, Detail, PjTitle } from "@styles/resumeStyle"
import { IWorkProject } from "types/resumeTypes"
import styled from "styled-components"

export default function ResumeProject(pj : IWorkProject) {
    return (
        <>
         <PjContainer>
            <PjTitle> {pj.title}</PjTitle>
            <PExplain>{pj.description}</PExplain>
            {pj.details.map((det, idx) => (
                <Detail key={idx}>{det} </Detail>
            ))}
        </PjContainer>
        </>
    )
}

const PExplain = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  margin-top:1px;
  margin-bottom: 7px;
  padding-left: 5px;
`