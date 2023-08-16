import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AutenticationContextt } from "../App";
import Button from "../Utils/Button";
import { urlVentas } from "../Utils/endpoinds";
import './css/productoIndividual.css'
export default function ProductoIndividual(props) {

    const construirLink = () => `/productos/${props.producto.id}`

    const { claims } = useContext(AutenticationContextt);


    function manejarClick() {
        if (claims.length === 0) {
            Swal.fire({ title: "Error", text: 'Debes loguearte para votar', icon: 'error' });
            return;
        }
    }


    return (
        <>
            <div className='card col-3 shadow p-4 mb-52 bg-body rounded component'>
                <div>
                    <Link to={construirLink()}>
                        <img src={props.producto.imagenProducto} alt="Poster" />
                    </Link>
                    <p>
                        <Link href={construirLink()}>{props.producto.nombre}</Link>
                    </p>
                    <span><Link>{props.producto.precio}</Link></span>
                </div>
                <div className="buttons">
                    <Link className='btn btn-outline-secondary'
                        to={construirLink()}>
                        Vista Previa
                    </Link>
                </div>
            </div>
        </>
    )
}