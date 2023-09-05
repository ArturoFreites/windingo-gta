import { Link } from 'react-router-dom';
import logoWindingoRP from '../../assets/logo-windingo.png'
import logoWindingo from '../../assets/windingo.png'
import { Col, Form, Row } from 'react-bootstrap';

function Registro() {
    return (
        <section className="login-section">
            <article>
                <img src={logoWindingoRP} />
                <div className='registro-form'>
                    <Form>
                        <Row className="mb-3">
                            <Form.Label></Form.Label>
                            <Form.Group as={Col} controlId="nombre">
                                <Form.Control required type="text" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="apellido">
                                <Form.Control required type="text" placeholder="Apellido" />
                            </Form.Group>
                        </Row>
                            <Form.Group as={Col} controlId="correo">
                                <Form.Control required type="email" placeholder="Correo electronico" />
                            </Form.Group>
                            <Form.Label></Form.Label>
                            <Form.Group as={Col} controlId="contraseña">
                                <Form.Control required type="password" placeholder="Contraseña" />
                            </Form.Group>

                    </Form>
                </div>
                <div className='login-buttons'>
                    <Link to={"/"}><button className='login-ingresar'>REGISTRAR</button></Link>
                </div>
            </article>
            <img src={logoWindingo} />
        </section>
    );
}

export default Registro;