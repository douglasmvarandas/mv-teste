<?php
require('contato-service.php');

$method = $_SERVER['REQUEST_METHOD'];
$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

$result = array();

switch ($method) {
    case 'PUT':
        $data = json_decode(file_get_contents('php://input'), true);
        alterar($conexao, $data['id'], $data['nome'], $data['telefone'], $data['email'], $data['cidade'], $data['estado'], $data['categoria']);  
        $result = array('mensagem'=>'Dados atualizados com sucesso');  
        break;
    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        inserir($conexao, $data['nome'], $data['telefone'], $data['email'], $data['cidade'], $data['estado'], $data['categoria']);  
        $result = array('mensagem'=>'Dados inseridos com sucesso');  
        break;
    case 'GET':
        if(isset($_GET['id'])){
            $result = buscarPorId($conexao, $_GET['id']);
        } else {
            $pagina = 0;

            if( isset( $_GET['pagina'] ) ) {
                $pagina = $_GET['pagina'];
            }

            $result = listar($conexao, $pagina);  
        }

        break;
    case 'DELETE':
        if(isset($_GET['id'])){
            remover($conexao, $_GET['id']);
            $result = array('mensagem'=>'Contato removido com sucesso');  
        } else 
            $result = array('mensagem'=>'Informe o ID de quem deve ser removido');  
        
        break;
  default:
    $result = handle_error($method);  
    break;
}

echo json_encode($result);  
        
function handle_error($method) {
    return array('mensagem'=>"Não existe implementação para o método {$method}");
}