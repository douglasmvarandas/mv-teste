<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header("HTTP/1.1 200 OK");
die();
}

//Autoload
$loader = require 'vendor/autoload.php';

//Instanciando objeto
$app = new \Slim\Slim(array(
    'templates.path' => 'templates'
));

//Listando Todos contatos
$app->get('/contatos/', function() use ($app){
	(new \controllers\Contato($app))->lista();
});

//Lista contato por ID
$app->get('/contato/:id', function($id) use ($app){
	(new \controllers\Contato($app))->get($id);
});

//Cadastrando novo contato
$app->post('/contato/', function() use ($app){
	(new \controllers\Contato($app))->nova();
});

//Editando contato atraves do Id
$app->put('/contato/:id', function($id) use ($app){
	(new \controllers\Contato($app))->editar($id);
});


//Contagem contatos Clientes
$app->get('/contatos/clientes/', function() use ($app){
	(new \controllers\Contato($app))->countCliente();
});

//Contagem contatos Fornecedores
$app->get('/contatos/fornecedores/', function() use ($app){
	(new \controllers\Contato($app))->countFornecedor();
});

//Contagem contatos Funcionários
$app->get('/contatos/funcionarios/', function() use ($app){
	(new \controllers\Contato($app))->countFuncionario();
});

//Contagem contatos Clientes no Estado da PB
$app->get('/contatos/clientes/PB', function() use ($app){
	(new \controllers\Contato($app))->countClienteEstadoPB();
});

//Contagem contatos Clientes no Estado da PE
$app->get('/contatos/clientes/PE', function() use ($app){
	(new \controllers\Contato($app))->countClienteEstadoPE();
});

//Contagem contatos Clientes no Estado da RN
$app->get('/contatos/clientes/RN', function() use ($app){
	(new \controllers\Contato($app))->countClienteEstadoRN();
});

//Contagem contatos Clientes no Estado da BA
$app->get('/contatos/clientes/BA', function() use ($app){
	(new \controllers\Contato($app))->countClienteEstadoBA();
});

//Contagem contatos Clientes no Estado da AL
$app->get('/contatos/clientes/AL', function() use ($app){
	(new \controllers\Contato($app))->countClienteEstadoAL();
});

//Contagem contatos Fornecedores no Estado da PB
$app->get('/contatos/fornecedores/PB', function() use ($app){
	(new \controllers\Contato($app))->countFornecedoresEstadoPB();
});

//Contagem contatos Fornecedores no Estado da PE
$app->get('/contatos/fornecedores/PE', function() use ($app){
	(new \controllers\Contato($app))->countFornecedoresEstadoPE();
});

//Contagem contatos Fornecedores no Estado da RN
$app->get('/contatos/fornecedores/RN', function() use ($app){
	(new \controllers\Contato($app))->countFornecedoresEstadoRN();
});

//Contagem contatos Fornecedores no Estado da BA
$app->get('/contatos/fornecedores/BA', function() use ($app){
	(new \controllers\Contato($app))->countFornecedoresEstadoBA();
});

//Contagem contatos Fornecedores no Estado da AL
$app->get('/contatos/fornecedores/AL', function() use ($app){
	(new \controllers\Contato($app))->countFornecedoresEstadoAL();
});

//Contagem contatos Funcionarios no Estado da PB
$app->get('/contatos/funcionario/PB', function() use ($app){
	(new \controllers\Contato($app))->countFuncionariosEstadoPB();
});

//Contagem contatos Funcionarios no Estado da PE
$app->get('/contatos/funcionario/PE', function() use ($app){
	(new \controllers\Contato($app))->countFuncionariosEstadoPE();
});

//Contagem contatos Funcionarios no Estado da RN
$app->get('/contatos/funcionario/RN', function() use ($app){
	(new \controllers\Contato($app))->countFuncionariosEstadoRN();
});

//Contagem contatos Funcionarios no Estado da BA
$app->get('/contatos/funcionario/BA', function() use ($app){
	(new \controllers\Contato($app))->countFuncionariosEstadoBA();
});

//Contagem contatos Funcionarios no Estado da AL
$app->get('/contatos/funcionario/AL', function() use ($app){
	(new \controllers\Contato($app))->countFuncionariosEstadoAL();
});


//Rodando aplicação
$app->run();