import { Footer } from "../../Footer"
import { Header } from "../../Header"



export const HomePage = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>

    )
}
