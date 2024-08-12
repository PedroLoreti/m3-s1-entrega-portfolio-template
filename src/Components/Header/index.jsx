import styles from './style.module.css'

export const Header = () => {
    return (
        <header className={styles.headerBorder}>
            <div className={`${styles.containerHeader} container`}>
                <h3 className="title t3">Loreti</h3>
                <div>
                    <button>Home</button>
                    <button>Projects</button>
                    <button>Contatos</button>
                    <button>Midias Digitais</button>
                </div>
            </div>
        </header>
    )
}