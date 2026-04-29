import React, { useState } from 'react' // Import adicionado
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Historia from './pages/Historia'
import Poderes from './pages/Poderes'
import Relacoes from './pages/Relacoes'
import Erro from './pages/Erro'

function App() {
  return (
    <div className="container">
        <div id="logo-titulo">
          <img src="src/assets/Titulo.png" alt="Logo Título" />
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/historia'>História</Link>
          <Link to='/poderes'>Poderes</Link>
          <Link to='/relacoes'>Relações</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/historia' element={<Historia />} />
          <Route path='/poderes' element={<Poderes />} />
          <Route path='/relacoes' element={<Relacoes />} />
          <Route path='*' element={<Erro />} />
        </Routes>
    </div>
  )
}

export default App; 