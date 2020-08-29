<?php
namespace controllers{

	class Contato{
		//Atributo para banco de dados
		private $PDO;

		/* __construct Conectando ao banco de dados */
		function __construct(){
			$this->PDO = new \PDO('mysql:host=localhost;dbname=mnw_agenda', 'root', ''); //Conexão
			$this->PDO->setAttribute( \PDO::ATTR_ERRMODE,\PDO::ERRMODE_EXCEPTION ); //habilitando erros do PDO
		}
		/* lista todos contato */
		public function lista(){
			global $app;
			$sth = $this->PDO->prepare("SELECT * FROM contato");
			$sth->execute();
			$result = $sth->fetchAll(\PDO::FETCH_ASSOC);
			$app->render('../template/default.php',["data"=>$result],200); 
		}
		
		/* lista contato por ID */
		public function get($id){
			global $app;
			$sth = $this->PDO->prepare("SELECT * FROM contato WHERE ID = :id");
			$sth ->bindValue(':id',$id);
			$sth->execute();
			$result = $sth->fetchAll(\PDO::FETCH_ASSOC);
			$app->render('../template/default.php',["data"=>$result],200); 
		}
 

    /* cadastro de novo contato */
		public function nova(){
			global $app;
			$dados = json_decode($app->request->getBody(), true);
			$dados = (sizeof($dados)==0)? $_POST : $dados;
			$keys = array_keys($dados); //Paga as chaves do array
			/* O uso de prepare e bindValue é importante para se evitar SQL Injection */
			$sth = $this->PDO->prepare("INSERT INTO contato (".implode(',', $keys).") VALUES (:".implode(",:", $keys).")");
			foreach ($dados as $key => $value) {
				$sth ->bindValue(':'.$key,$value);
			}
			$sth->execute();
			//Retorna o id inserido
			$app->render('../template/default.php',["data"=>['id'=>$this->PDO->lastInsertId()]],200); 
		}

		/* editar contato por id */
		public function editar($id){
			global $app;
			$dados = json_decode($app->request->getBody(), true);
			$dados = (sizeof($dados)==0)? $_POST : $dados;
			$sets = [];
			foreach ($dados as $key => $VALUES) {
				$sets[] = $key." = :".$key;
			}

			$sth = $this->PDO->prepare("UPDATE contato SET ".implode(',', $sets)." WHERE id = :id");
			$sth ->bindValue(':id',$id);
			foreach ($dados as $key => $value) {
				$sth ->bindValue(':'.$key,$value);
			}
			//Retorna status da edição
			$app->render('../template/default.php',["data"=>['status'=>$sth->execute()==1]],200); 
		}

    /* contagem de contatos na categoria Cliente */
		public function countCliente(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE CATEGORIA='Cliente'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos na categoria Fornecedor */
		public function countFornecedor(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE CATEGORIA='Fornecedor'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos na categoria Funcionario */
		public function countFuncionario(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE CATEGORIA='Funcionario'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos clientes no Estado da Paraiba */
		public function countClienteEstadoPB(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='PB' and CATEGORIA='Cliente'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos clientes no Estado da PE */
		public function countClienteEstadoPE(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='PE' and CATEGORIA='Cliente'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos clientes no Estado da RN */
		public function countClienteEstadoRN(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='RN' and CATEGORIA='Cliente'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos clientes no Estado da BA */
		public function countClienteEstadoBA(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='BA' and CATEGORIA='Cliente'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos clientes no Estado da AL */
		public function countClienteEstadoAL(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='AL' and CATEGORIA='Cliente'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

     /* contagem de contatos Fornecedores no Estado da Paraiba */
		public function countFornecedoresEstadoPB(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='PB' and CATEGORIA='Fornecedor'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Fornecedores no Estado da PE */
		public function countFornecedoresEstadoPE(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='PE' and CATEGORIA='Fornecedor'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Fornecedores no Estado da RN */
		public function countFornecedoresEstadoRN(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='RN' and CATEGORIA='Fornecedor'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Fornecedores no Estado da BA */
		public function countFornecedoresEstadoBA(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='BA' and CATEGORIA='Fornecedor'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Fornecedores no Estado da AL */
		public function countFornecedoresEstadoAL(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='AL' and CATEGORIA='Fornecedor'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

     /* contagem de contatos Funcionarios no Estado da Paraiba */
		public function countFuncionariosEstadoPB(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='PB' and CATEGORIA='Funcionario'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Funcionarios no Estado da PE */
		public function countFuncionariosEstadoPE(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='PE' and CATEGORIA='Funcionario'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Funcionarios no Estado da RN */
		public function countFuncionariosEstadoRN(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='RN' and CATEGORIA='Funcionario'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Funcionarios no Estado da BA */
		public function countFuncionariosEstadoBA(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='BA' and CATEGORIA='Funcionario'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }

    /* contagem de contatos Funcionarios no Estado da AL */
		public function countFuncionariosEstadoAL(){
			global $app;
			$sth = $this->PDO->prepare("SELECT COUNT(id) FROM contato WHERE Estado='AL' and CATEGORIA='Funcionario'");
			$sth->execute();
			$result = $sth->fetchColumn ();
			$app->render('../template/default.php',["data"=>$result],200); 
    }
    
		
	}
}