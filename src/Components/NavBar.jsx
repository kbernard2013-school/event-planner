import { Link } from "react-router-dom";



function Navbar() {
  return (     
     <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/machines">Machines</Link> |{" "}
      <Link to="/balloons">Balloons</Link> |{" "}
      <Link to="/equipment">Equipment</Link> |{" "}
      <Link to="/coordination">Coordination</Link> |{" "}
      <Link to="/contact">Contact</Link> |{" "}
    </nav>
  );
}

export default Navbar;