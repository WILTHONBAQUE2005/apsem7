<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);
$stmt = $mysqli->prepare("DELETE FROM estudiantes WHERE id=?");
$stmt->bind_param("i", $data['id']);
echo json_encode(["ok"=>$stmt->execute()]);
