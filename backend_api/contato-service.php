<?php
require_once("conexao-banco.php");

function listar($conexao, $pagina){
    $totalItens = 15;

    $startAt = 0;

    if($pagina > 0){
        $startAt = ($pagina * $totalItens);
    }

    $quantidadeBanco = 0;
    $contatos = array();

    $resultado = mysqli_query($conexao, "select c.* from contato as c limit {$startAt},{$totalItens}");    
    while($contato = mysqli_fetch_assoc($resultado)){
     array_push($contatos, $contato);
    }

    $resultadoQtd = mysqli_query($conexao, "select count(1) total from contato");    
    while($qtd = mysqli_fetch_assoc($resultadoQtd)){
        $quantidadeBanco = $qtd['total'];
    }

    return array(
        'dados' => $contatos,
        'totalItens' => $quantidadeBanco,
        'itensPorPagina' => $totalItens,
        'totalPaginas' => ceil ( $quantidadeBanco / $totalItens)
    );
}

function inserir($conexao, $nome, $telefone, $email, $cidade, $estado, $categoria){
    $query = "insert into contato (NOME, TELEFONE, EMAIL, CIDADE, ESTADO, CATEGORIA) values('{$nome}',{$telefone},'{$email}', '{$cidade}','{$estado}','{$categoria}')";
    return mysqli_query($conexao, $query);  
}

function remover($conexao, $id){
    $query = "delete from contato where id ={$id}";
    return mysqli_query($conexao, $query);
}
function buscarPorId($conexao, $id){
    $query = "select * from contato where id ={$id}";
    $resultado = mysqli_query($conexao, $query);
    return mysqli_fetch_assoc($resultado);
}
function alterar($conexao, $id, $nome, $telefone, $email, $cidade, $estado, $categoria){
    $query = "update contato set NOME='{$nome}',TELEFONE = {$telefone},EMAIL='{$email}', CIDADE='{$cidade}',ESTADO='{$estado}',CATEGORIA='{$categoria}' where id='{$id}'";
    return mysqli_query($conexao, $query);  
}