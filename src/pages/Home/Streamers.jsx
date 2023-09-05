import { FaCircle, FaTwitch } from "react-icons/fa6";
import img from '../../assets/character1.png'

function Streamers() {

    const streamers = [
        {
            "id": 0,
            "nombre": "Arturo Fritas",
            "canal": "arturoFreites",
            "estado": true,
            "link": "https://www.twitch.tv/nikozfps"
        },
        {
            "id": 1,
            "nombre": "Arturo Fritas",
            "canal": "arturoFreites",
            "estado": true,
            "link": "https://www.twitch.tv/nikozfps"
        },
        {
            "id": 2,
            "nombre": "Arturo Fritas",
            "canal": "arturoFreites",
            "estado": true,
            "link": "https://www.twitch.tv/nikozfps"
        },
        {
            "id": 3,
            "nombre": "Arturo Fritas",
            "canal": "arturoFreites",
            "estado": true,
            "link": "https://www.twitch.tv/nikozfps"
        }
        
    ]

    return (
        <section className="home-stremers">
            <div className="div-streamers-img">
                <img src={img} />
            </div>
            <div className="div-streamers-text">
                <h2>
                    ¿LISTO PARA VIVIR LA EXPERIENCIA DEFINITIVA DE GTA ROLEPLAY CON STREAMERS? ÚNETE AHORA
                </h2>
                <div className="div-streamers">
                    {
                        streamers.map((streamer) => (
                            <div className="div-card-stream" key={streamer.id}>
                                <a href={streamer.link} target="_blank" rel="noreferrer">
                                    <FaTwitch />
                                    <span>
                                        <h3>{streamer.nombre}</h3>
                                        <p>{"@" + streamer.canal}</p>
                                    </span>
                                    <FaCircle className={streamer.estado ? "online" : "offline"} />
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Streamers;