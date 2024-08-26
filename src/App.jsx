import { HomePage } from "./Components/pages/HomePage"
import { BannerSection } from "./Components/BannerSection";
import { ProjectsSection } from "./Components/ProjectsSection";
import { Contats } from "./Components/Contact";
import "./styles/index.css"

function App() {

  return (
    <>
      <div className="App">
        <HomePage>
          <BannerSection />
          <ProjectsSection />
          <Contats />
        </HomePage>
      </div>
    </>
  )
}

export default App
