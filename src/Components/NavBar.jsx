import { Link } from "react-router-dom";
import logo from "../assets/eboneevents-logo.jpeg"; 

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Ebonee Events Logo" /> 
      <Link to="/">Home</Link> |{" "}
      <Link to="/machines">Machines</Link> |{" "}
      <Link to="/balloons">Balloons</Link> |{" "}
      <Link to="/equipment">Equipment</Link> |{" "}
      <Link to="/coordination">Coordination</Link> |{" "}
    
    </nav>
  );
}

export default Navbar;