import { Button, Col, Form } from "react-bootstrap";

function CreateNotice() {
    return (
        <article className="car-create">
            <h1>CARGAR NOTICIA</h1>
            <div className="admin-form">
                <Form>
                    <Form.Group as={Col} controlId="formName">
                        <Form.Label>Titulo</Form.Label>
                        <Form.Control required type="text" placeholder="Titulo" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="date">
                        <Form.Label>Fecha Noticia</Form.Label>
                        <Form.Control required type="date" />
                    </Form.Group>
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control as="textarea" rows={3} />
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

export default CreateNotice;