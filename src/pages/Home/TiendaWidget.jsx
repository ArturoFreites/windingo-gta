import { Carousel } from "react-bootstrap";

function TiendaWidget() {

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
        }
    ]

    return (
        <Carousel className="carrousel-tienda">
            {
                cars.map(car => (
                    <Carousel.Item key={car.id}>
                        <img src={car.img} alt={car.name}/>
                        <Carousel.Caption>
                            <h3>{car.name}</h3>
                            <p>{car.precio}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }

        </Carousel>
    );
}

export default TiendaWidget;