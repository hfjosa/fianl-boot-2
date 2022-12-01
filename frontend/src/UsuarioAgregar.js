import React, {useState} from "react";
import uniquid from "uniqid";
import axios from "axios";
import Swal from "sweetalert2";

function UsuarioAgregar() {

    const[nombre, setNombre] = useState('');
    const[apellido, setApellido] = useState('');
    const[email, setEmail] = useState('');
    const[telefono, setTelefono] = useState('');

    function agregarUsuario() {
        let usuario = {
            idUsuario: uniquid(),
            nombre: nombre,
            apellido: apellido,
            email: email,
            telefono: telefono
        }
        console.log(usuario);

        axios.post('api/usuario/agregarUsuario', usuario)
            .then(res => {Swal.fire('Enhorabuena', 'El usuario se creó con éxito')})
            .then(err => {console.log(err)})
    }

    return(
        <div className="container">
            <div className="row">
                    <h2 className="mt-4">Agregar a la lista de usuarios</h2>
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
                    <button className="btn btn-success" onClick={agregarUsuario}>Guardar usuario</button>
                </div>
            </div>
        </div>
    )
}

export default UsuarioAgregar;