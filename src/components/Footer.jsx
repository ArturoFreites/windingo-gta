import mercadoPago from '../assets/mercadopago.png'
import paypal from '../assets/paypal.png'

function Footer() {
    return (
        <footer>
                <p>Copyright © 2023 WINDINDO RP Todos los derechos reservados.</p>
                <div>
                    <img src={mercadoPago} alt='mercado pago'/>
                    <img src={paypal} alt='paypal' />
                </div>
        </footer>
    );
}

export default Footer;