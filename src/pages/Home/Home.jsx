import Eventos from "./Eventos";
import Patrocinio from "./Patrocinio";
import Streamers from "./Streamers";
import Tienda from "./Tienda";
import logo from '../../assets/logo-windingo.png'

function Home() {
    return (
        <>
            <section className="home-portada">
                <img src={logo} />
                <div className="button-home"><a href="https://fivem.net/" target="_blank" rel="noreferrer" >JUEGA AQUI</a></div>
            </section>
            <Patrocinio/>
            <section className="home-accesos">
                <Streamers/>
                <Eventos/>
                <Tienda/>
            </section>
        </>

    );
}

export default Home;