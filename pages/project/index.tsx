import { GetStaticProps } from "next"
import { IProject } from "types";
import { ProjectList } from "utils/ProjectList";
import ProjectListView from "components/project/ProjectListView";

const visibleProjectList = ProjectList.filter(
    pj => pj.isVisible
)
export const getStaticProps : GetStaticProps = async() => {
    
    
    return {
        props: {
            projects: visibleProjectList
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