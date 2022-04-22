import { PjContainer, DetailUl, Detail, PjTitle, PExplain } from "@styles/aboutStyle"
import { IWorkProject } from "types/aboutTypes"
import styled from "styled-components"

export default function AboutProject(pj : IWorkProject) {
    return (
         <PjContainer>
            <PjTitle> {pj.title}</PjTitle>
            {/* <PExplain>{pj.description}</PExplain> */}
            {pj.details && (
                <DetailUl>
                    {pj.details.map((det, idx) => (
                        <Detail key={idx}>{det} </Detail>
                    ))}
                </DetailUl>
            )}
            
        </PjContainer>
    )
}