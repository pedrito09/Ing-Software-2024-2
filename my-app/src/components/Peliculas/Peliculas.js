import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListaPeliculas from './ListaPeliculas';
import AgregarPelicula from './AgregarPelicula';

const pruebaPelis = [
    { id: uuidv4(), titulo: 'Titanic', genero: 'Drama', duracion: 195, inventario: 5 },
    { id: uuidv4(), titulo: 'Avengers', genero: 'Accion', duracion: 180, inventario: 3 },
    { id: uuidv4(), titulo: 'Toy Story', genero: 'Animacion', duracion: 90, inventario: 10 }
];

const Peliculas = () => {
    const [peliculas, setPeliculas] = useState(pruebaPelis);

    const agregarPelicula = (pelicula) => {
        setPeliculas([...peliculas, pelicula]);
    };

    const eliminarPelicula = (id) => {
        setPeliculas(peliculas.filter((pelicula) => pelicula.id !== id));
    };

    const editarPelicula = (peliculaActualizada) => {
        setPeliculas(peliculas.map((pelicula) => (pelicula.id === peliculaActualizada.id ? peliculaActualizada : pelicula)));
    };

    return (
        <div className='container'>
            <h2>Peliculas</h2>
            <AgregarPelicula agregarPelicula={agregarPelicula} />
            <ListaPeliculas peliculas={peliculas} eliminarPelicula={eliminarPelicula} editarPelicula={editarPelicula} />
        </div>
    );
}

export default Peliculas;