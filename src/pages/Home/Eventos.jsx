import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "react-bootstrap";

function Eventos() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const eventos = [
        {
            "id": 0,
            "nombre": "Nombre de Evento",
            "img": "https://i.ibb.co/QMykPLg/evento.jpg"
        },
        {
            "id": 1,
            "nombre": "Nombre de Evento 2",
            "img": "https://i.ibb.co/QMykPLg/evento.jpg"
        },
        {
            "id": 2,
            "nombre": "Nombre de Evento 3",
            "img": "https://i.ibb.co/QMykPLg/evento.jpg"
        },
        {
            "id": 3,
            "nombre": "Nombre de Evento 3",
            "img": "https://i.ibb.co/QMykPLg/evento.jpg"
        },
        {
            "id": 4,
            "nombre": "Nombre de Evento 3",
            "img": "https://i.ibb.co/QMykPLg/evento.jpg"
        }
    ]

    return (
        <section className="home-eventos">
            <h1 className="titulo">EVENTOS</h1>
            <Carousel responsive={responsive}>
                {eventos.map((evento) => (
                    <div key={evento.id} className="acceso-evento" >
                        <Link to={`/evento/${evento.id}`}>
                            <img src={evento.img} />
                        </Link>
                    </div>
                ))}
            </Carousel>
            <Link className="event-button" to={"/eventos"}><Button>VER MÁS</Button></Link>
        </section>
    );
}

export default Eventos;