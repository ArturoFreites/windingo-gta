import { FaCar, FaCalendar, FaFile, FaUser, FaFileInvoiceDollar } from "react-icons/fa6";
import CreateCar from "./components/CreateCar";
import CreateNotice from "./components/CreateNotice";
import CreateEvent from "./components/CreateEvent";
import { useState } from "react";

function Admin() {

    const buttons = [
        {
            "id": 1,
            "title": "Cargar Auto",
            "icon": <FaCar />
        },
        {
            "id": 2,
            "title": "Cargar Evento",
            "icon": <FaCalendar />
        },
        {
            "id": 3,
            "title": "Cargar Noticia",
            "icon": <FaFile />
        },
        {
            "id": 4,
            "title": "Usuarios",
            "icon": <FaUser />
        },
        {
            "id": 5,
            "title": "Ventas",
            "icon": <FaFileInvoiceDollar />
        },

    ]

    const [selectedId, setSelectedId] = useState(1);

    const renderComponent = () => {

        switch (selectedId) {
            case 1:
                return <CreateCar />;
            case 2:
                return <CreateEvent />;
            case 3:
                return <CreateNotice />;
            case 4:
                return <CreateCar />;
            case 5:
                return <CreateCar />;
            default:
                return <CreateCar/>
        }
    }

    return (
        <section className="section-admin">
            <article className="panel-sup">

                {
                    buttons.map(button => (
                        <div key={button.id} className="admin-button-panel" onClick={()=>setSelectedId(button.id)}>
                            {button.icon}
                            <p>{button.title}</p>
                        </div>
                    ))
                }
            </article>
            <article className="panel-inf">
                {renderComponent()}
            </article>
        </section>
    );
}

export default Admin;