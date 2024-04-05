import React, {useState} from "react";
import {v4 as uuidv4} from "uuid";
import './AgregarCliente.css';

const AgregarCliente = ({agregarCliente}) => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nombre || !correo || !contrasena){
            alert('Todos los campos son obligatorios');
            return;
        }
        const cliente = {
            id: uuidv4(),
            nombre,
            correo,
            contrasena
        };
        agregarCliente(cliente);
        setNombre('');
        setCorreo('');
        setContrasena('');
    };

    return (
        <div className= "form-container">
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                NOMBRE
                <input
                    type="text" 
                    className="form-input"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
                </label>
                <label className="form-label">
                CORREO
                <input
                    type="email" 
                    className="form-input"
                    value={correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                />
                </label>
                <label className="form-label">
                CONTRASEÑA
                <input
                    type="password" 
                    className="form-input"
                    value={contrasena}
                    onChange={(e) => setContrasena(e.target.value)}
                    required
                />
                </label>
                <button type="submit" className="submit-button">
                    Agregar Cliente</button>
            </form>
            </div>
    );
}

export default AgregarCliente;