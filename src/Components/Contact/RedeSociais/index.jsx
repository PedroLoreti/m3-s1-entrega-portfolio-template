import Zap from "../../../assets/whatsapp.png"
import Email from "../../../assets/email-icon.png"
import Linkin from "../../../assets/linkin-icon.png"
import styles from "./style.module.css"

export const RedeSociais = () => {
    return (
        <ul>
            <li className={styles.containerRedeSociais}>
                <img src={Zap} alt="Whatsapp" className={styles.zapRedeSocial}/>
                <div>
                    <h4 className="title t4">My phone</h4>
                    <p className={`${styles.descriptionRedes} body`}>I'm available for a voice chat, let's about creativity together?</p>
                    <p className="body white">Call Now</p>
                </div>
            </li>

            <li className={styles.containerRedeSociais}>
                <img src={Email} alt="Email" className={styles.emailRedeSocial}/>
                <div>
                    <h4 className="title t4">My email</h4>
                    <p className={`${styles.descriptionRedes} body`}>Send me an email reporting feedbacks, suggestions and ideas</p>
                    <p className="body white">Send email now</p>
                </div>
            </li>

            <li className={styles.containerRedeSociais}>
                <img src={Linkin} alt="Linkin" className={styles.linkinRedeSocial}/>
                <div>
                    <h4 className="title t4">My LinkedIn</h4>
                    <p className={`${styles.descriptionRedes} body`}>We can create more constant interactions as well as a sharing network</p>
                    <p className="body white">Send email now</p>
                </div>
            </li>
        </ul>

    )
}