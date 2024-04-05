import React, {useState} from "react";
import {v4 as uuidv4} from 'uuid';

const AgregarRenta = ({agregarRenta}) => {
    const [cliente, setCliente] = useState('');
    const [pelicula, setPelicula] = useState('');
    const [fechaRenta, setFechaRenta] = useState('');
    const [diasRenta, setDiasRenta] = useState(7);
    const [estatus, setEstatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cliente || !pelicula || !fechaRenta ||  !diasRenta){
            alert('Datos incorrectos');
            return;
        }

        const renta = { id: uuidv4(), cliente, pelicula, fechaRenta, diasRenta, estatus };
        agregarRenta(renta);
        setCliente('');
        setPelicula('');
        setFechaRenta('');
        setDiasRenta(7);
        setEstatus(false);
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label className="form-label">
                    Nombre cliente
                    <input type="text" className="form-input" value={cliente} onChange={(e) => setCliente(e.target.value)} />
                </label>
                <label className="form-label">
                    Nombre Pelicula
                    <input type="text" className="form-input" value={pelicula} onChange={(e) => setPelicula(e.target.value)} />
                </label>
                <label className="form-label">
                    Fecha Renta
                    <input type="date" className="form-input" value={fechaRenta} onChange={(e) => setFechaRenta(e.target.value)} />
                </label>
                <label className="form-label">
                    Dias Renta
                    <input type="number" className="form-input" value={diasRenta} onChange={(e) => setDiasRenta(e.target.value)} />
                </label>
                <label className="form-label">
                    Estatus
                    <input type="checkbox" className="form-input" value={estatus} onChange={(e) => setEstatus(e.target.value)} />
                </label>
                <button type="submit" className="submit-button">Agregar renta</button>
            </form>
        </div>
    );
};

export default AgregarRenta;