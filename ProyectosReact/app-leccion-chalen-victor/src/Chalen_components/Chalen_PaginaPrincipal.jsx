import React, { useState } from 'react';
import "../Chalen_Styles/Chalen_PaginaPrincipal.css"

const provincias = [
  { codigo: '001', nombre: 'Guayas', region: 'Costa' },
  { codigo: '002', nombre: 'Pichincha', region: 'Sierra' },
  { codigo: '003', nombre: 'Manabí', region: 'Costa' },
  { codigo: '004', nombre: 'Azuay', region: 'Sierra' },
  { codigo: '005', nombre: 'Galápagos', region: 'Insular' },
];

const Chalen_PaginaPrincipal = () => {
  const [search, setSearch] = useState('');

  const filtrarProvincias = provincias.filter(
    (provincia) =>
      provincia.nombre.toLowerCase().includes(search.toLowerCase()) ||
      provincia.region.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Provincias</h2>
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nombre</th>
            <th>Región</th>
          </tr>
        </thead>
        <tbody>
          {filtrarProvincias.map((provincia) => (
            <tr key={provincia.codigo}>
              <td>{provincia.codigo}</td>
              <td>{provincia.nombre}</td>
              <td>{provincia.region}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Chalen_PaginaPrincipal;
