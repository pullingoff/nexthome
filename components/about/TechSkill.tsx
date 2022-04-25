import {PjContainer, Detail, DetailUl, OrgNoHover} from "@styles/aboutStyle.js"
import { ITechStack } from "types/aboutTypes"

export default function TechSkill(stack: ITechStack) {
    
    return (
        <PjContainer>
            <OrgNoHover>{stack.skill}</OrgNoHover>
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