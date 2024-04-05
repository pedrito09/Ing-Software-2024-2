import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

const AgregarPelicula = ({agregarPelicula}) => {
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [duracion, setDuracion] = useState('');
    const [inventario, setInventario] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!titulo || !genero || duracion===0 || inventario<=0 || inventario<0){
            alert('Datos incorrectos');
            return;
        }

        const pelicula = { id: uuidv4(), titulo, genero, duracion, inventario };
        agregarPelicula(pelicula);
        setTitulo('');
        setGenero('');
        setDuracion('');
        setInventario('');
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Titulo
                    <input type="text" className="form-input" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </label>
                <label className="form-label">
                    Genero
                    <input type="text" className="form-input" value={genero} onChange={(e) => setGenero(e.target.value)} />
                </label>
                <label className="form-label">
                    Duracion
                    <input type="number" className="form-input" value={duracion} onChange={(e) => setDuracion(e.target.value)} />
                </label>
                <label className="form-label">
                    Inventario
                    <input type="number" className="form-input" value={inventario} onChange={(e) => setInventario(e.target.value)} />
                </label>
                <button type="submit" className="submit-button">Agregar pelicula</button>
            </form>
        </div>
    );
};

export default AgregarPelicula;