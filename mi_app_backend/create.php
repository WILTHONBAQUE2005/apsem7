<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$stmt = $mysqli->prepare(
  "INSERT INTO estudiantes(nombre,apellido,cedula,ubicacion) VALUES(?,?,?,?)"
);
$stmt->bind_param("ssss",
  $data['nombre'],
  $data['apellido'],
  $data['cedula'],
  $data['ubicacion']
);
echo json_encode(["ok"=>$stmt->execute()]);
