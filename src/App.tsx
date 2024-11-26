import { Header } from "./layout/header/Header";
import { About } from "./layout/sections/About/About";
import { Skills } from "./layout/sections/Skills/Skills";
import { Projects } from "./layout/sections/Projects/Projects";
import { Footer } from "./layout/footer/Footer";
import { MobileHeader } from "./layout/header/MobileHeader";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
