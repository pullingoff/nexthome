import {Detail, Org} from "@styles/resumeStyle.js"
import { ITechStack } from "types/resumeTypes"

export default function ResumeTechSkill(stack: ITechStack) {
    
    return (
        <>
            <Org>{stack.skill}</Org>
            {stack.ability.length > 0 &&
            stack.ability.map((desc : string, idx : number)=> (
                <Detail key={idx}>{desc}</Detail>
            ))}
        </>
    )
}