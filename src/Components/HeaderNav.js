import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return ( 
    <div className="Header_container">
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink className="navLinkHeader" to="/">Vejr</NavLink>
                        <NavLink className="navLinkHeader" to="/radar">Radar</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
     );
}
 
export default Header;