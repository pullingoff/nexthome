import { PjContainer, DetailUl, Detail, PjTitle, PExplain, PjTech } from "@styles/aboutStyle"
import { IWorkProject } from "types/aboutTypes"
import styled from "styled-components"
import CustomLink from "@components/CustomLink"

export default function AboutProject(pj : IWorkProject) {

    return (
         <PjContainer>
            {pj.link 
            ? (<CustomLink href={pj.link}>
                    <PjTitle> {pj.title}</PjTitle>
                </CustomLink>)
            :   <PjTitle> {pj.title}</PjTitle>
            }
            <PExplain>{pj.description}</PExplain>
                {pj.tech?.map((t) => (
                    <PjTech key={t}>
                        {t}
                    </PjTech>
                ))}
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