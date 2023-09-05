import { Button, Col, Form, Row } from "react-bootstrap";

function CreateCar() {
    return (
        <article className="car-create">
            <h1>CARGAR AUTO</h1>
            <div className="admin-form">
                <Form>
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre Auto" />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Label></Form.Label>
                        <Form.Group as={Col} controlId="priceArg">
                            <Form.Control required type="number" placeholder="Precio ARG" />
                        </Form.Group>
                        <Form.Group as={Col} controlId="priceArg">
                            <Form.Control required type="number" placeholder="Precio USD" />
                        </Form.Group>
                    </Row>
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type="file"
                        required
                        name="file"
                    />
                </Form>
                <Button className="button-form" variant="dark">CARGAR</Button>
            </div>
        </article>
    );
}

export default CreateCar;