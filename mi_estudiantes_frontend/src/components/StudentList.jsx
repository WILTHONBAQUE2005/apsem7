// src/components/StudentList.jsx
import React from 'react';

export default function StudentList({ students, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th><th>Apellido</th><th>Cédula</th><th>Ubicación</th><th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0
          ? <tr><td colSpan="5" style={{ textAlign: 'center', padding: '1rem' }}>No hay estudiantes.</td></tr>
          : students.map(s => (
            <tr key={s.id}>
              <td>{s.nombre}</td>
              <td>{s.apellido}</td>
              <td>{s.cedula}</td>
              <td>{s.ubicacion}</td>
              <td className="actions">
                <button className="edit"   onClick={() => onEdit(s)}>Editar</button>
                <button className="delete" onClick={() => onDelete(s)}>Eliminar</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}
