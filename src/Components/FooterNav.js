import { TiWeatherPartlySunny } from "react-icons/ti"
import { GiRadarDish } from "react-icons/gi"
import { NavLink } from "react-router-dom";
import "./FooterNav.css"

const Footer = () => {
    return (
    <div className="Footer_container">
        <footer>
            <nav>
                <ul>
                    <li>
                        <NavLink className="navLinkFooter" to="/"><TiWeatherPartlySunny className="Footer_icon" /></NavLink>
                        <NavLink className="navLinkFooter" to="/radar"><GiRadarDish className="Footer_icon" /></NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
     );
}
 
export default Footer;