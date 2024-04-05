import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaRentas from './ListaRentas';
import AgregarRenta from './AgregarRenta';

const pruebaRentas = [
    { id: uuidv4(), cliente: 'Juan Perez', pelicula: 'Titanic', fechaRenta: '2022-10-10', diasRenta: 7, estatus: false },
    { id: uuidv4(), cliente: 'Maria Lopez', pelicula: 'Avengers', fechaRenta: '2022-10-15', diasRenta: 5, estatus: true },
    { id: uuidv4(), cliente: 'Pedro Ramirez', pelicula: 'Toy Story', fechaRenta: '2022-10-20', diasRenta: 3, estatus: false }
];

const Rentas = () => {
    const [rentas, setRentas] = useState(pruebaRentas);

    const agregarRenta = (renta) => {
        setRentas([...rentas, renta]);
    };

    const actualizarEstatus = (id, nuevoEstatus) => {
        setRentas((prevRentas)=>
            prevRentas.map((renta) =>
                renta.id === id ? {...renta, estatus: nuevoEstatus} : renta
            )
        );
    };

    return (
        <div className='container'>
            <h2>Rentas</h2>
            <AgregarRenta agregarRenta={agregarRenta} />
            <ListaRentas rentas={rentas} actualizarEstatus={actualizarEstatus} />
        </div>
    );
};

export default Rentas;