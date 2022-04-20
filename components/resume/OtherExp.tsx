import { IExp } from "types/resumeTypes";
import {Detail, PjContainer, PjTitle} from "@styles/resumeStyle"
const OtherExp = (exp : IExp) => {
    return (
        <PjContainer>
            <PjTitle>{exp.organization} / {exp.description}</PjTitle>
            <span>{exp.period}</span>
            {exp.details && 
             exp.details.map((det, idx) => (
                <Detail key={idx}>{det} </Detail>
            ))}
        </PjContainer>
    )
}

export default OtherExp;