import React, {useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import ListaClientes from './ListaClientes';
import AgregarCliente from './AgregarCliente';
import './Clientes.css';

const pruebaClientes = [
    {
        id: uuidv4(),
        nombre: 'Juan',
        apellido: 'Perez',
        correo: 'Juan@gmail.com',
        contrasena: 'juan1234'
    },
    {
        id: uuidv4(),
        nombre: 'Maria',
        apellido: 'Lopez',
        correo: 'maria@gmail.com',
        contrasena: 'maria1234'
    },
    {
        id: uuidv4(),
        nombre: 'Pedro',
        apellido: 'Ramirez',
        correo: 'pedromorales@gmail.com',
        contrasena: 'pedro1234'
    }];

const Clientes = () => {
    const [clientes, setClientes] = useState(pruebaClientes);

    const agregarCliente = (cliente) => {
        setClientes([...clientes, cliente]);
    }

    const eliminarCliente = (clienteId) => {
        const updateClientes = clientes.filter(cliente => cliente.id !== clienteId);
        setClientes(updateClientes);
    }

    const actualizarCliente = (clienteActualizado) => {
        setClientes((prevClientes)=>
            prevClientes.map(cliente => 
              cliente.id === clienteActualizado.id ? clienteActualizado : cliente)
        );
    };

    return (
        <div className="container">
            <h1>Clientes</h1>
            <AgregarCliente agregarCliente={agregarCliente}/>
            <ListaClientes 
                clientes={clientes} 
                eliminarCliente={eliminarCliente}
                actualizarCliente={actualizarCliente}
            />
        </div>
    );
};
export default Clientes;