<?php 

//Realizar o retorno do json para as requisições da API
header('Content-Type: application/json; charset=utf-8');
echo json_encode($data);
?>