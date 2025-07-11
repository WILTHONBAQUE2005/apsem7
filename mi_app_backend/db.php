<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// CAMBIO REALIZADO AQUÍ:
$mysqli = new mysqli("localhost", "root", "", "sem7ta2");

if ($mysqli->connect_error) {
  die(json_encode(["error" => "DB: " . $mysqli->connect_error]));
}
