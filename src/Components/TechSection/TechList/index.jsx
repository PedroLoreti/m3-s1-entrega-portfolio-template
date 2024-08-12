import { technologies } from '../../../data/technologies'
import { TechCard } from "./TechCard"
import styles from "./style.module.css"


export const TechList = () => {
    return (
        <ul>
            <div className={styles.containerTech}>
                {technologies.map(technology => (
                    <TechCard key={technology.name} technology={technology} />
                ))}
            </div>
        </ul>
    )
}