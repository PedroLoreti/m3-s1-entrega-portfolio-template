import styles from "./style.module.css"

export const ContatsTexts = () => {
    return (
        <div>
            <h2 className={`${styles.titleContats} title t2`}>Let's set up a conversation and <span className="color-span">develop our creativity</span> together?</h2>
            <p className={`${styles.descriptionContats} headline`}>Advertise your brand organically within Dribbble's design inspiration feed.</p>
        </div>
    )
}