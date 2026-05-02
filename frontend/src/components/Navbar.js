import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Dog Gallery</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/liked">Liked</Link>
      </div>
    </div>
  );
}

export default Navbar;