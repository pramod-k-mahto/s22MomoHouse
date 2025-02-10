import { NavLink } from "react-router-dom";
import momoLogo from "../assets/momoLogo.png";
function Navigation() {
  return (
    <div>

      <NavLink to="/" className='border-2 border-red-400'  >
        <img src={momoLogo} alt="" />
        <span>Momos</span>
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/services">Services</NavLink>
      <NavLink to="/allergyAdvised">AllergyAdvised</NavLink>
    </div>
  );
}

export default Navigation;
