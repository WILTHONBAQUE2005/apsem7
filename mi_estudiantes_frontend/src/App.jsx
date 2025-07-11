// src/App.jsx
import React, { useState, useEffect } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import ConfirmModal from './components/ConfirmModal';

export default function App() {
  const [students, setStudents] = useState([]);
  const [editData, setEditData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const api = 'http://localhost/mi_app_backend/';

  const reload = () =>
    fetch(api + 'list.php')
      .then(res => res.json())
      .then(setStudents);

  useEffect(reload, []);

  const onEdit = s => setEditData(s);
  const onDelete = s => { setToDelete(s); setModalVisible(true); };
  const cancelEdit = () => setEditData(null);
  const cancelDelete = () => setModalVisible(false);
  const confirmDelete = id =>
    fetch(api + 'delete.php', { method: 'POST', body: JSON.stringify({ id }) })
      .then(() => { setModalVisible(false); reload(); });

  return (
    <div className="app-wrapper">
      <div className="main-content">

        {/* Tarjeta de Formulario */}
        <div className="card-custom">
          <div className="border-left"></div>
          <div className="border-right"></div>
          <h2 className="card-title">
            {editData ? '✏️ Editando Estudiante' : '➕ Nuevo Estudiante'}
          </h2>
          <StudentForm
            api={api}
            edit={editData}
            onSaved={() => { reload(); cancelEdit(); }}
            onCancel={cancelEdit}
          />
        </div>

        {/* Tarjeta de Lista */}
        <div className="card-custom">
          <div className="border-left"></div>
          <div className="border-right"></div>
          <h2 className="card-title">Lista de Estudiantes</h2>
          <StudentList
            students={students}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>

      </div>

      <ConfirmModal
        visible={modalVisible}
        student={toDelete}
        onCancel={cancelDelete}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
