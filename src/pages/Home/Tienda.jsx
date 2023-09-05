import "react-multi-carousel/lib/styles.css";
import TiendaWidget from "./TiendaWidget";
import { Button } from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Tienda() {

    return (
        <section className="home-tienda">
            <h1 className="titulo">TIENDA</h1>
            <article className="home-tienda-container">
                <div className="home-tienda-text">
                    <h3>¡Explora nuestra tienda!</h3>
                    <p> Descubrí todas las posibilidades que ofrecemos para tu experiencia de roleplay en GTA V. Desde membresías VIP hasta oportunidades de negocio, organizaciones y una variedad de extras.</p>
                    <Link className="home-store-button" to={"/tienda"}>
                            <p>TIENDA</p>
                            <FaCartShopping />
                    </Link>
                </div>
                <article className="home-article-tienda">
                    <div className="carrousel-tienda">
                        <h2>MAS VENDIDOS</h2>
                    </div>
                    <TiendaWidget />
                </article>
            </article>
        </section>
    );
}

export default Tienda;
