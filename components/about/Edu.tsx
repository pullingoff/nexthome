import {PjContainer, Detail, Org, DetailUl, JobDate} from "@styles/aboutStyle.js"
import { IEducation } from "types/aboutTypes"

export default function Edu(edu: IEducation) {
    
    return (
        <PjContainer>
            <Org>{edu.institute}</Org>
            <JobDate>{edu.course} | {edu.period} </JobDate>
            {edu.details && (
                <DetailUl>
                    {edu.details.map((desc : string, idx : number)=> (
                        <Detail key={idx}>{desc}</Detail>
                    ))}
                </DetailUl>
            )}
        </PjContainer>
    )
}
