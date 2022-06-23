import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/Home">Home</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Skill">Skill</Link>
      <Link to="/About">About</Link>
    </>
  );
}

export default NavBar;
