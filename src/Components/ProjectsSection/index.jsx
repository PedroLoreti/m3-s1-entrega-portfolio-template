import { ProjectsList } from "./ProjectsList"
import styles from "./style.module.css"

export const ProjectsSection = () => {

    return (
        <section className={styles.sectionProject}>
            <div className={styles.containerProjectsSection}>
                <div className={styles.myProjects}>
                    <h3 className={`${styles.titleProjects} title t3`}>My projects</h3>
                    <p className="body">Projects created at <span className="span-red">Kenzie Academy</span></p>
                </div>
                <ProjectsList />
            </div>

            
        </section>
    )
}