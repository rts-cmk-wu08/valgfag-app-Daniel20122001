import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return ( 
    <div className="background">
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Vejr</NavLink>
                        <NavLink to="/rader">Rader</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
     );
}
 
export default Header;