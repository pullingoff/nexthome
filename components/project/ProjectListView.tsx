import { IProject } from "type"
import ProjectRow from "./ProjectRow"

const ProjectListView = ({projects}: {
    projects: Array<IProject>
}) => {
    return (
        <ul>
            {projects.map((pj : IProject)=> (
                <li key={pj.slug}>
                    <ProjectRow pj={pj}/>
                </li>
            ))}
        </ul>
    )
}

export default ProjectListView