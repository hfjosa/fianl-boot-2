import React, { useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

import {Link, useNavigate} from "react-router-dom";

function UsuarioUnitario({usuario}) {

    const navegar = useNavigate()

    useEffect(() => {
        AOS.init()
    }, [])

    function borrarUsuario(idUsuario) {
        axios.post('/api/usuario/borrarUsuario', {idUsuario: idUsuario})
            .then(res => {
                console.log(res.data)
                alert(res.data)
                navegar(0)
            })
            .catch(err => {
                console.log(err)
            })
        }    

    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3" data-aos="flip-right">
                <ul className="list-group">
                    <li className="list-group-item">{usuario.idUsuario}</li>
                    <li className="list-group-item">{usuario.nombre}</li>
                    <li className="list-group-item">{usuario.apellido}</li>
                    <li className="list-group-item">{usuario.email}</li>
                    <li className="list-group-item">{usuario.telefono}</li>
                </ul>
                <Link to={`/usuarioEditar/${usuario.idUsuario}`}>
                    <li className="btn btn-success">Editar</li>
                </Link>
                &nbsp;
                <button className="btn btn-danger"
                    onClick={() => {borrarUsuario(usuario.idUsuario)}}
                    >Eliminar
                </button>
                <hr className="mt-4"></hr>
                </div>

            </div>
        </div>
    )
}

export default UsuarioUnitario;