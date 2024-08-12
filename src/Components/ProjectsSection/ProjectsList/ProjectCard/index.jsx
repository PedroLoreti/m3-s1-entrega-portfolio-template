import styles from "./style.module.css"
import GitHub from "../../../../assets/github-icon.png"
import share from  "../../../../assets/share.svg"
export const ProjectCard = ({ project }) => {


    return (
        <li className={styles.liContainer}>
            <h2 className="title t2">{project.name}</h2>
            <div className={styles.containerLanguage}>
                <p className="body b500">Linguagens:</p>
                <p className={`${styles.language} body b500`}>Javascript</p>
            </div>
            <p className={`${styles.descriptionProject} headline`}>{project.description}</p>
            <div className={styles.containerGitShare}>
                <div className={styles.containerGit}>
                    <img src={GitHub} alt="GitHub" className={styles.gitHub}/>
                    <p className="headline head500">Github Code</p>
                </div>

                <div className={styles.containerGit}>
                    <img src={share} alt="Share" />
                    <p className="headline head500">Aplicação</p>
                </div>
            </div>
        </li>
    )
}