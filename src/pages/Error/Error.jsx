import logo from '../../assets/logo-windingo.png'

function Error() {
    return (
        <section className="section-error">
            <img src={logo} alt='windingo roleplay'/> 
            <div>
                <h1>ERROR 404</h1>
                <p>URL NO VALIDA</p>
            </div>
        </section>
    );
}

export default Error;