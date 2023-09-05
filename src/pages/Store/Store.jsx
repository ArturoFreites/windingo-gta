import { Link } from "react-router-dom";
import { FaDiscord } from "react-icons/fa6";

function Store() {

    const cars = [
        {
            "id": 1,
            "name": "LAMBORGHINI AVENTADOR",
            "precio": "Precio: $10000/20USD",
            "img": "https://i.ibb.co/rmyhhGN/lambo.png"
        },
        {
            "id": 2,
            "name": "LAMBORGHINI AVENTADOR",
            "precio": "Precio: $10000/20USD",
            "img": "https://i.ibb.co/rmyhhGN/lambo.png"
        },
        {
            "id": 3,
            "name": "LAMBORGHINI AVENTADOR",
            "precio": "Precio: $10000/20USD",
            "img": "https://i.ibb.co/rmyhhGN/lambo.png"
        },
        {
            "id": 4,
            "name": "LAMBORGHINI AVENTADOR",
            "precio": "Precio: $10000/20USD",
            "img": "https://i.ibb.co/rmyhhGN/lambo.png"
        },
        {
            "id": 5,
            "name": "LAMBORGHINI AVENTADOR",
            "precio": "Precio: $10000/20USD",
            "img": "https://i.ibb.co/rmyhhGN/lambo.png"
        },
    ]

    return (
        <section className="store-section">
            <article className="store-portada">
                <p>¡Descubre todos los elementos disponibles para tu próxima aventura en el server!</p>
                <div className="store-discord">
                    <a href="https://discord.gg/vmyDQgxG" target="_blank"  rel="noreferrer">
                        <FaDiscord/>
                        <p>Accede al servidor de discord</p>
                    </a>
                </div>
            </article>
            <article className="store-container">
                <h2>AUTOS</h2>
                <article className='store-cars-list'>
                    {
                        cars.map(item => (
                            <div key={item.id} className='car-item'>
                                <div>
                                    <img src={item.img} />
                                </div>
                                <div className='car-description'>
                                    <h4>LAMBORGHINI AVENTADOR</h4>
                                    <p>Precio: $10000/20USD</p>
                                </div>
                                <button className='store-button'>Agregar al carrito</button>
                            </div>
                        ))
                    }
                </article>
            </article>
        </section>
    );
}

export default Store;