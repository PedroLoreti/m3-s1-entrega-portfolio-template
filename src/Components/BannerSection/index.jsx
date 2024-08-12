import { TechSection } from "../TechSection"
import styles from "./style.module.css"
import IconProfile from "../../assets/foto-profile.jpg"
import GitIcon from "../../assets/git-icon.png"


export const BannerSection = () => {

    return (
        <section className={styles.containerSection}>
            <div className={styles.containerBanner}>
                <div className={styles.containerIcon}>
                    <img src={IconProfile} alt="Icon Profile" className={styles.iconProfile} />
                    <p className="headline">Hello, my name is Loreti</p>
                </div>
                <h1 className="title t1">I <span className="color-span">love</span> creating and <span className="color-span">developing</span> projects</h1>
                <p className="headline">Discover here in this environment, created especially for you, all my projects and technologies</p>
                <div className={styles.containerButton}>
                    <button>See Projects</button>
                    <img src={GitIcon} alt="Icon Git" className={styles.iconGit} />
                </div>
                <TechSection />
            </div>
        </section>
    )
}