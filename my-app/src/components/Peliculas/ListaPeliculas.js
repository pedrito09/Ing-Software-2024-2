import React, {useState} from "react";
import EditarPelicula from "./EditarPelicula";
import './ListaPeliculas.css';

const ListaPeliculas = ({peliculas, eliminarPelicula, editarPelicula}) => {
    const [peliculaEditada, setPeliculaEditada] = useState(null);

    const handleEditarPelicula = (pelicula) => {
        setPeliculaEditada(pelicula);
    };

    const handleGuardarPelicula = (pelicula) => {
        editarPelicula(pelicula);
        setPeliculaEditada(null);
    };

    return (
        <ul>
            <h3>Lista de Peliculas</h3>
            {peliculas.map((pelicula) => (
               <li key={pelicula.id} className="pelicula-item">
               <div>
                <div>
                <span className="pelicula-detail">Titulo:</span>{pelicula.titulo}                
                </div>
               <div>
                <span className="pelicula-detail">Genero:</span>{pelicula.genero}
                </div>
                <div>
                <span className="pelicula-detail">Duracion:</span>{pelicula.duracion}
                </div>
                <div>
                <span className="pelicula-detail">Inventario:</span>{pelicula.inventario}
                </div>
                <div>
                <button onClick={() => handleEditarPelicula(pelicula)} className="editar-button">Editar</button>
                <button onClick={() => eliminarPelicula(pelicula.id)} className="eliminar-button">Eliminar</button>
                </div>
                </div>
                {peliculaEditada && peliculaEditada.id === pelicula.id && (
                    <EditarPelicula pelicula={peliculaEditada} editarPelicula={handleGuardarPelicula} />
                )}
                </li>
            ))}
        </ul>
    );
};

export default ListaPeliculas;