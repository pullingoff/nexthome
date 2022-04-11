import { GetStaticProps } from "next"
import { IProject } from "type";
import { ProjectList } from "utils/ProjectList";
import ProjectListView from "components/project/ProjectListView";

export const getStaticProps : GetStaticProps = async() => {
    
    
    return {
        props: {
            projects: ProjectList
        }
    }
}

const Project = ({projects} : {
    projects: Array<IProject>
}) => {
    return (
        <>
            <ProjectListView projects={projects} />
        </>
    )
}

export default Project