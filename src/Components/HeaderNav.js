import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return ( 
    <div className="Header_bg">
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Vejr</NavLink>
                        <NavLink to="/radar">Radar</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
     );
}
 
export default Header;