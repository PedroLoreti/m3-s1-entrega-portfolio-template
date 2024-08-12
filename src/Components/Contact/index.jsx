import { ContatsTexts } from "./ContactTexts"
import { RedeSociais } from "./RedeSociais"
import styles from "./style.module.css"

export const Contats = () => {
    return (
        <section className={styles.containerContact}>
            <ContatsTexts />
            <RedeSociais />
        </section>

    )

}