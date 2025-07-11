<?php
include 'db.php';

$res = $mysqli->query("SELECT * FROM estudiantes");
$rows = [];
while($r = $res->fetch_assoc()) $rows[] = $r;
echo json_encode($rows);
