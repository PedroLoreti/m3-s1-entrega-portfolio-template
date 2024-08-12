import styles from "./style.module.css"
import facebook from "../../assets/Facebook.png"
import instagram from "../../assets/Instagram.png"
import linkindin from "../../assets/Linkedin.png"
import IconProfile from "../../assets/foto-profile.jpg"

export const Footer = () => {
    return (
        <footer>
            <div className={styles.containerFooter}>
                <div className={styles.containerThanks}>
                    <img src={IconProfile} alt="" className={styles.iconProfile} />
                    <div>
                        <h3 className="title t3">Thank you!</h3>
                        <p className="body">Follow me on my social networks and let's talk</p>
                    </div>
                </div>

                <div className={styles.containerImgs}>
                    <img src={facebook} alt="Icon Facebook" />
                    <img src={instagram} alt="Icon Intagram" />
                    <img src={linkindin} alt="Icon Linkindin" />
                </div>

            </div>
        </footer>
    )
}