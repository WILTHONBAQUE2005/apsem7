<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$stmt = $mysqli->prepare(
  "UPDATE estudiantes SET nombre=?,apellido=?,cedula=?,ubicacion=? WHERE id=?"
);
$stmt->bind_param("ssssi",
  $data['nombre'],
  $data['apellido'],
  $data['cedula'],
  $data['ubicacion'],
  $data['id']
);
echo json_encode(["ok"=>$stmt->execute()]);
