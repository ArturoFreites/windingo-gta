import logoWindingo from '../../assets/windingo.png'
import logoWindingoRP from '../../assets/logo-windingo.png'
import { FaKey,FaUser } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Login() {
    return (
        <section className="login-section">
            <article>
                <img src={logoWindingoRP}/>
                <div className='login-inputs'>
                    <div className='login-input'>
                        <FaUser className='login-input-icon'/>
                        <input type='text' placeholder="Usuario"></input>
                    </div>
                    <div className='login-input'>
                        <FaKey className='login-input-icon'/>
                        <input type='password' placeholder="Contraseña"></input>
                    </div>
                </div>
                <div className='login-buttons'>
                    <Link to={"/"}><button className='login-ingresar'>INGRESAR</button></Link>
                    <Link to={"/registro"}><button className='login-registro'>REGISTRO</button></Link>
                </div>
            </article>
            <img src={logoWindingo}/>
        </section>
    );
}

export default Login;