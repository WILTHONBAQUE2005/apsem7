// src/components/ConfirmModal.jsx
import React from 'react';

export default function ConfirmModal({ visible, student, onCancel, onConfirm }) {
  if (!visible) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Eliminar estudiante</h3>
        <p>¿Estás seguro de eliminar a <strong>{student.nombre} {student.apellido}</strong>?</p>
        <div className="modal-buttons">
          <button className="secondary" onClick={onCancel}>Cancelar</button>
          <button className="delete"    onClick={() => onConfirm(student.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
}
