import { ProjectCard } from "./ProjectCard"
import { projects } from "../../../data/projects"
import styles from './style.module.css'

export const ProjectsList = () => {

    return (
        <ul>
            <div className={styles.containerProjects}>
                {projects.map(project => (
                    <ProjectCard key={project.name} project={project} />
                ))}
            </div>
        </ul>
    )
}