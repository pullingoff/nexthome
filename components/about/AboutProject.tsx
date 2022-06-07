import { PjContainer, DetailUl, Detail, PjTitle, PExplain, PjTech, PjTitleHover } from "@styles/aboutStyle"
import { IWorkProject } from "types/aboutTypes"
import CustomLink from "@components/CustomLink"

export default function AboutProject(pj : IWorkProject) {

    return (
         <PjContainer>
            {pj.link 
            ? (<CustomLink href={pj.link}>
                    <PjTitleHover> 
                        {pj.title} 🔗
                    </PjTitleHover>
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