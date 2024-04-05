import React, {useState, useEffect} from "react";

const EditarPelicula = ({pelicula, editarPelicula}) => {
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [duracion, setDuracion] = useState('');
    const [inventario, setInventario] = useState('');

    useEffect(() => {
        setTitulo(pelicula.titulo);
        setGenero(pelicula.genero);
        setDuracion(pelicula.duracion);
        setInventario(pelicula.inventario);
    }, [pelicula]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!titulo || !genero || duracion===0 || inventario<=0 || inventario<0){
            alert('Datos incorrectos');
            return;
        }

        const peliculaActualizada = { ...pelicula, titulo, genero, duracion, inventario };
        editarPelicula(peliculaActualizada);
    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <label>
                Titulo
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </label>
            <label>
                Genero
                <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
            </label>
            <label>
                Duracion
                <input type="number" value={duracion} onChange={(e) => setDuracion(e.target.value)} />
            </label>
            <label>
                Inventario
                <input type="number" value={inventario} onChange={(e) => setInventario(e.target.value)} />
            </label>
            <button type="submit">Editar pelicula</button>
        </form>
    );
};

export default EditarPelicula;