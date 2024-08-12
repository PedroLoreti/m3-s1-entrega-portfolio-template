import { BannerSection } from "../../BannerSection"
import { Contats } from "../../Contact"
import { Footer } from "../../Footer"
import { Header } from "../../Header"
import { ProjectsSection } from "../../ProjectsSection"


export const HomePage = () => {
    return (
        <>
            <Header />
            <main>
                <BannerSection />
                <ProjectsSection />
                <Contats />
            </main>
            <Footer/>
        </>

    )
}
