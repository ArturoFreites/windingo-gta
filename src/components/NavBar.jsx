import { Link } from 'react-router-dom';
import logo from '../assets/logo-windingo.png'
import { FaCartShopping, FaUserLarge } from "react-icons/fa6";
import { useState } from 'react';

function NavBarLink({ children,link}) {
    const [active, setActive] = useState(false);

    return (
        <Link
            onMouseLeave={() => setActive(false)}
            onMouseOver={() => setActive(true)}
            className={active ? "selected-link" : ""}
            to={link}
        >
            {children}
        </Link>
    );
}

function NavBar() {
    return (
        <nav>
            <section className="nav-logo">
                <Link to="/">
                    <img src={logo} alt='logo windingo' />
                </Link>
            </section>
            <section className="nav-links">
                <NavBarLink link="/"><p>Inicio</p></NavBarLink>
                <NavBarLink link="/tienda"><p>Tienda</p></NavBarLink>
                <NavBarLink link="/"><p>EVENTOS</p></NavBarLink>
                <NavBarLink link="https://foros.windingorp.net/"><p>FORO</p></NavBarLink>
                <NavBarLink link="/admin"><p>ADMIN</p></NavBarLink>
            </section>
            <section className='nav-user'>
                <div>
                    <FaCartShopping />
                </div>
                <Link to={"/user"} className='nav-link'>
                    <div>
                        <FaUserLarge />
                    </div>
                </Link>
            </section>
        </nav>
    );
}

export default NavBar;
