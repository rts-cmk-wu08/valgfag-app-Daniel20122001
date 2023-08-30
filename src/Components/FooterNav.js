import { TiWeatherPartlySunny } from "react-icons/ti"

const Footer = () => {
    return ( 
        <footer>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/"><TiWeatherPartlySunny /></NavLink>
                        <NavLink to="/rader">Rader</NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
     );
}
 
export default Footer;