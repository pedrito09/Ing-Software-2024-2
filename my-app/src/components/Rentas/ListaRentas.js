import React, { useState } from 'react';
import EditarRenta from './EditarRenta';
import './ListaRentas.css';

const ListaRentas = ({ rentas, actualizarEstatus }) => {
    const [rentaEditada, setRentaEditada] = useState(null);

    const handleEditarRenta = (renta) => {
        setRentaEditada(renta);
    };

    return (
        <ul>
            <h3>Lista de Rentas</h3>
            {rentas.map((renta) => (
                <li key={renta.id} className="renta-item">
                    <div>
                        <div>
                            <span className="renta-detail">Cliente:</span>{renta.cliente}
                        </div>
                        <div>
                            <span className="renta-detail">Pelicula:</span>{renta.pelicula}
                        </div>
                        <div>
                            <span className="renta-detail">Fecha Renta:</span>{renta.fechaRenta}
                        </div>
                        <div>
                            <span className="renta-detail">Dias Renta:</span>{renta.diasRenta}
                        </div>
                        <div>
                            <span className="renta-detail">Estatus:</span>{renta.estatus ? 'Entregado' : 'No entregado'}
                        </div>
                        <div>
                            <button onClick={() => handleEditarRenta(renta)} className="editar-button">Editar</button>
                        </div>
                    </div>
                    {rentaEditada && rentaEditada.id === renta.id && (
                        <EditarRenta renta={rentaEditada} onActualizarEstatus={actualizarEstatus} />
                    )}
                </li>
            ))}
        </ul>
    );
};

export default ListaRentas;