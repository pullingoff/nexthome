import {PjContainer, Detail, DetailUl, Org} from "@styles/aboutStyle.js"
import { ITechStack } from "types/aboutTypes"

export default function TechSkill(stack: ITechStack) {
    
    return (
        <PjContainer>
            <Org>{stack.skill}</Org>
            {stack.ability && 
            (<DetailUl>
                {stack.ability.map((desc : string, idx : number)=> (
                    <Detail key={idx}>{desc}</Detail>
                 ))} 
            </DetailUl>
            )}
        </PjContainer>
    )
}