import React, { useEffect, useState } from "react";
import axios from "axios";

import UsuarioUnitario from "./UsuarioUnitario";

function UsuarioLista() {

    const[dataUsuario, setDataUsuario] = useState([])

    useEffect(() => {
        axios.get('api/usuario/obtenerUsuarios')
            .then(res => {
                setDataUsuario(res.data)
            })
            .catch(err => {console.log(err)})
    })

    const usuariosLista = dataUsuario.map(usuarios => {
        return(
            <div>
                <UsuarioUnitario usuario={usuarios}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Lista de usuarios</h2>
            {usuariosLista}
        </div>
    )
}

export default UsuarioLista;