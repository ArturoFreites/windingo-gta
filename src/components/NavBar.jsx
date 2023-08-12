import { Link } from 'react-router-dom';
import logo from '../assets/logo-windingo.png'
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";

function NavBar() {

    return (
        <nav>
            <section className="nav-logo">
                <img src={logo} alt='logo windingo'/>
            </section>
            <section className="nav-links">
                <Link className="selected-link" to="/"><p>home</p></Link>
                <Link to="/"><p>home</p></Link>
                <Link to="/"><p>home</p></Link>
                <Link to="/"><p>home</p></Link>
                <Link to="/"><p>home</p></Link>
            </section>
            <section className='nav-user'>
                <div>
                    <FaCartShopping/>
                </div>
                <div>
                    <FaUserLarge/>
                </div>
            </section>
        </nav>
    );
}

export default NavBar;