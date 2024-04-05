import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/clientes">Clientes</Link>
                </li>
                <li>
                    <Link to="/peliculas">Peliculas</Link>
                </li>
                <li>
                    <Link to="/rentas">Rentas</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;