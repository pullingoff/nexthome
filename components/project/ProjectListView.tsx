import { IProject } from "types"
import ProjectRow from "./ProjectRow"

const ProjectListView = ({projects}: {
    projects: Array<IProject>
}) => {
    return (
        <ul>
            {projects.map((pj : IProject)=> (
                <ProjectRow pj={pj} key={pj.slug}/>
            ))}
        </ul>
    )
}

export default ProjectListView