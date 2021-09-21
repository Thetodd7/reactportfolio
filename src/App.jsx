import Navbar from "./components/navbar/Navbar";
import Aboutme from "./components/aboutme/Aboutme";
import Portfolio from "./components/portfolio/Portfolio";
import Contactme from "./components/contactme/Contactme";
// import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

import "./app.scss";


function App() {
  return (
    <div classNames="app">
      <Navbar />
      <div className="sections">
        <Aboutme/>
        <Portfolio/>
        <Contactme/>
        {/* <Resume/> */}
      </div>
      <div className="bottom">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
