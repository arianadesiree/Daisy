import "./styles.css";
import Nav from "./Pages/Nav";
import Home from "./Pages/Home";
import Offices from "./Pages/Offices"
import Doctors from "./Pages/Doctors"
import {Route, Routes} from "react-router-dom"


function App() {


  return (
   <>
   
    <Nav />
    <div className="nav-container">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offices" element={<Offices />} />
      <Route path="/doctors" element={<Doctors />} />
    </Routes>
    </div>


    </>
  );
}

export default App;
