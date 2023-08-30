import { TiWeatherPartlySunny } from "react-icons/ti"
import { GiRadarDish } from "react-icons/gi"
import { NavLink } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    return (
    <div className="Footer_bg">
        <footer>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"><TiWeatherPartlySunny /></NavLink>
                        <NavLink to="/radar"><GiRadarDish /></NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
    </div>
     );
}
 
export default Footer;