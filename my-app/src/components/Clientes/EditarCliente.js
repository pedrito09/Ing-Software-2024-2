import React, {useState, useEffect} from 'react';
import './EditarCliente.css';

const EditarCliente = ({cliente, actualizarCliente}) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    useEffect(() => {
        setNombre(cliente.nombre);
        setCorreo(cliente.correo);
        setContrasena(cliente.contrasena);
    }, [cliente]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombre || !correo || !contrasena){
            alert('Todos los campos son obligatorios');
            return;
        }
        const clienteActualizado = {
            ...cliente,
            nombre,
            correo,
            contrasena
        };
        actualizarCliente(clienteActualizado);
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <label>
            NOMBRE:
            <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            </label>
            <label>
            CORREO:
            <input
                type="email"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
            />
            </label>
            <label>
            CONTRASEÑA:
            <input
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
            />
            </label>
            <button type="submit"> Guardar cambios</button>
        </form>
    );
};

export default EditarCliente;