angular.module('MvTeste')
    .controller('IndexController', function($scope, $http, $location) {
        $scope.paginaAtual = 0;
        $scope.contatos = [];
        $scope.paginas = [];

        $scope.telaAdicionarContato = function(){
            $location.path('/contato/novo');
        }

        $scope.telaEditarContato = function(idContato){
            $location.path('/contato/' + idContato);
        }

        $scope.remover = function(id){
            if(confirm('Você realmente deseja excluir esse contato?')){
                $http.delete('http://localhost/api-contato.php?id='+id)
                    .then(function(response){
                        $scope.carregarPagina(0);
                        alert('CONTATO REMOVIDO COM SUCESSO');
                    })
                    .catch(function(err){
                        alert('INFELIZMENTE NÃO PUDEMOS EXCLUIR O CONTATO :(');
                    });
            }
        }
        $scope.voltarPagina = function(){
            $scope.carregarPagina($scope.paginaAtual--)
        }
        $scope.avancarPagina = function(){
            $scope.carregarPagina($scope.paginaAtual++)
        }
        $scope.carregarPagina = function(pagina){
            $scope.paginaAtual = pagina;
            carregarDados();
        }

        
        function carregarDados(){
            $http.get('http://localhost/api-contato.php?pagina='+$scope.paginaAtual)
            .then(function(response){
                $scope.contatos = response.data.dados;
                
                $scope.paginas = [];
                for(var i = 0 ; i < response.data.totalPaginas; i++){
                    $scope.paginas.push({'value': i, 'label': (1 + i)})
                }

                $scope.contatos = response.data.dados;
                console.log(response);
            })
            .catch(function(err){
                console.log(err);
            });
        }
        carregarDados();
    });