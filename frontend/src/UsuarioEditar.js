import React, { useState, useEffect } from "react";
import {useParams} from "react-router";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function UsuarioEditar() {

    const params = useParams()

    const[nombre, setNombre] = useState('');
    const[apellido, setApellido] = useState('');
    const[email, setEmail] = useState('');
    const[telefono, setTelefono] = useState('');

    const navegar = useNavigate()

    useEffect(() => {
        axios.post('/api/usuario/obtenerDataUsuario', {idUsuario: params.idUsuario})
            .then(res => {console.log(res.data[0])
                const dataUsuario = res.data[0]
                setNombre(dataUsuario.nombre)
                setApellido(dataUsuario.apellido)
                setEmail(dataUsuario.email)
                setTelefono(dataUsuario.telefono)
            })
    }, [])

    function editarUsuario() {
        const actualizarUsuario = {
                idUsuario: params.idUsuario,
                nombre: nombre,
                apellido: apellido,
                email: email,
                telefono: telefono
        }
        axios.post('api/usuario/actualizarUsuario', actualizarUsuario)
        .then(res => {
            alert(res.data)
            console.log(res.data)
            navegar('/')
        })
        .then(err => {console.log(err)})

    }

    return(
        <div>
            <h2>ID de usuario : {params.idUsuario}</h2>
            <div className="container">
            <div className="row">
                    <h2 className="mt-4">Editar usuario</h2>
            </div>

            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text"
                            className="form-control"
                            value={nombre}
                            onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="apellido" className="form-label">Apellido</label>
                        <input type="text"
                            className="form-control"
                            value={apellido}
                            onChange={(e) => {setApellido(e.target.value)}}></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}></input>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">Teléfono</label>
                        <input type="text"
                            className="form-control"
                            value={telefono}
                            onChange={(e) => {setTelefono(e.target.value)}}></input>

                    </div>
                    <button className="btn btn-success" onClick={editarUsuario}>Editar usuario</button>
                </div>
            </div>
        </div>

        </div>
    )
}

export default UsuarioEditar;