import React,{useState} from "react";
import EditarCliente from "./EditarCliente";
import './ListaClientes.css';

const ListaClientes = ({clientes, eliminarCliente, actualizarCliente}) => {
    const [clienteEditado, setClienteEditado] = useState(null);

    const handleEditarCliente = (cliente) => {
        setClienteEditado(cliente);
    };

    const handleGuardarCambios = (clienteActualizado) => {
        actualizarCliente(clienteActualizado);
        setClienteEditado(null);
    };

    return (
        <ul>
            <h3> Lista de Clientes</h3>
            {clientes.map(cliente => (
                <li key={cliente.id} className="cliente-item">
                    {clienteEditado && clienteEditado.id === cliente.id ? (
                        <EditarCliente cliente={cliente} actualizarCliente={handleGuardarCambios}/>
                    ) : (
                        <div>
                            <p>Nombre: {cliente.nombre}</p>
                            <p>Correo: {cliente.correo}</p>
                            <button onClick={() => handleEditarCliente(cliente)} className="Editar-button">Editar</button>
                            <button onClick={() => eliminarCliente(cliente.id)} className="Eliminar-button">Eliminar</button>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ListaClientes;