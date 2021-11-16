import { Link } from "react-router-dom"
import "../styles/Header.css"
const Header = (props) => {

    return (
      <header className="normal-header">
        <ul>
          <li>
            <Link to="/"><h2>GitHub data</h2></Link>
          </li>
        </ul>
      </header>
    );
  };

export default Header;