// src/components/StudentForm.jsx
import React, { useState, useEffect } from 'react';

export default function StudentForm({ api, edit, onSaved, onCancel }) {
  const [data, setData] = useState({
    id: null, nombre: '', apellido: '', cedula: '', ubicacion: ''
  });

  useEffect(() => {
    if (edit) setData(edit);
    else     setData({ id: null, nombre: '', apellido: '', cedula: '', ubicacion: '' });
  }, [edit]);

  const handle = e => setData({ ...data, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    const url = data.id ? api + 'update.php' : api + 'create.php';
    fetch(url, { method: 'POST', body: JSON.stringify(data) })
      .then(() => onSaved());
  };

  return (
    <form onSubmit={submit}>
      <input name="nombre"    placeholder="Nombre"   value={data.nombre}    onChange={handle} required />
      <input name="apellido"  placeholder="Apellido" value={data.apellido}  onChange={handle} required />
      <input name="cedula"    placeholder="Cédula"   value={data.cedula}    onChange={handle} required />
      <input name="ubicacion" placeholder="Ubicación" value={data.ubicacion} onChange={handle} />

      <div className="form-actions">
        <button type="submit" className="primary">
          {data.id ? 'Actualizar' : 'Crear'}
        </button>
        {edit && (
          <button type="button" className="secondary" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}
