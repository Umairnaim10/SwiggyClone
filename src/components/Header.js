import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="Logo-Container">
          <img className="logo" src={LOGO_URL} alt="FoodDelivery" />
        </div>
      </Link>

      <div className="nav-Items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            {" "}
            <Link className="link-color" to="/About">
              About Us
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
