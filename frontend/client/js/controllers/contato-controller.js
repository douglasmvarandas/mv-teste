angular.module('MvTeste')
    .controller('ContatoController', function($scope, $http, $routeParams) {
        $scope.paginaAtual = 0;
        $scope.contatos = [];
        $scope.paginas = [];

        $scope.contato = {};

        if($routeParams.contatoId){
            
            carregarContato($routeParams.contatoId);
        }

        $scope.submit = function(){
            if($routeParams.contatoId){
                $http.put('http://localhost/api-contato.php', $scope.contato)
                    .then(function(response){
                        alert('CONTATO ATUALIZADO COM SUCESSO');
                    })
                    .catch(function(err){
                        alert('INFELIZMENTE NÃO PUDEMOS ATUALIZAR O CONTATO :(');
                    });
            } else {
                $http.post('http://localhost/api-contato.php', $scope.contato)
                    .then(function(response){
                        alert('CONTATO CADASTRADO COM SUCESSO');
                    })
                    .catch(function(err){
                        alert('INFELIZMENTE NÃO PUDEMOS CADASTRAR O CONTATO :(');
                    });
                
            }
        }
      
        
        function carregarContato(id){
            $http.get('http://localhost/api-contato.php?id='+ id)
            .then(function(response){
                $scope.contato = response.data;
            })
            .catch(function(err){
                console.log(err);
            });
        }
    });