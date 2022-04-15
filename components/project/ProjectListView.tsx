import { IProject } from "type"
import ProjectRow from "./ProjectRow"
import ProjectRowDup from "./ProjectRowDup"

const ProjectListView = ({projects}: {
    projects: Array<IProject>
}) => {
    return (
        <ul>
            {projects.map((pj : IProject)=> (
                <ProjectRowDup pj={pj} key={pj.slug}/>
            ))}
        </ul>
    )
}

export default ProjectListView