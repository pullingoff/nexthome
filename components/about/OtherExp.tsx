import { IExp } from "types/aboutTypes";
import {Detail, DetailUl, PjContainer, Org, JobDate, OrgHoverLink} from "@styles/aboutStyle"

const OtherExp = (exp : IExp) => {
    return (
        <PjContainer>
            {exp.link 
                ? <OrgHoverLink href={exp.link}>
                        {exp.organization} 🔗
                 </OrgHoverLink>
                : <Org>{exp.organization}</Org>
            }
            <JobDate>{exp.description} | {exp.period}</JobDate>
            {exp.details && 
            (<DetailUl>
                {exp.details.map((det, idx) => (
                    <Detail key={idx}>{det} </Detail>
                ))}
            </DetailUl>
            )}
        </PjContainer>
    )
}

export default OtherExp;