import './App.css';
import React from 'react';
import Clientes from './components/Clientes/Clientes';
import Peliculas from './components/Peliculas/Peliculas';
import Rentas from './components/Rentas/Rentas';
import Menu from './components/Menu/Menu';
import Inicio from './components/Inicio/Inicio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <h1>Rentas</h1>
        <Menu />
        <div className='content'>
        <Routes>
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/peliculas' element={<Peliculas />} />
          <Route path='/rentas' element={<Rentas />} />
          <Route exact path='/' element={<Inicio />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
