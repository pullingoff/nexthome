import { IProject } from "type"
import { GetStaticPaths, GetStaticProps } from "next"
import { ProjectList } from "utils/ProjectList";
import ProjectView from "components/project/ProjectView";

const ProjectPage = ({project}: {
    project: IProject
}) => {

    return (
        <ProjectView pj={project}/>
    )
} 

export default ProjectPage

export const getStaticPaths : GetStaticPaths = async() => {
    
    const paths = ProjectList.map(pj => ({
        params: {
            slug : pj.slug
        }
    }));
    return {paths, fallback: 'blocking'}
}

interface SlugInterface {
    [key: string]: string | string[] | null
    slug: string
}

export const getStaticProps : GetStaticProps = async({params}) => {
    const {slug} = params as SlugInterface
    
    const project = ProjectList.find((pj => pj?.slug === slug))
    
    return {props: {project, }}
}