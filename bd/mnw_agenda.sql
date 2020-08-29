-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29-Ago-2020 às 05:59
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mnw_agenda`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `contato`
--

CREATE TABLE `contato` (
  `ID` int(11) NOT NULL,
  `NOME` varchar(30) NOT NULL,
  `EMAIL` varchar(30) NOT NULL,
  `TELEFONE` varchar(11) NOT NULL,
  `CIDADE` varchar(30) NOT NULL,
  `ESTADO` varchar(30) NOT NULL,
  `CATEGORIA` varchar(30) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `contato`
--

INSERT INTO `contato` (`ID`, `NOME`, `EMAIL`, `TELEFONE`, `CIDADE`, `ESTADO`, `CATEGORIA`) VALUES
(11, 'João', '', '082 3339-11', 'Maceió', 'AL', 'Cliente'),
(12, 'Rodrigo Córdula', 'rodrigo.cordula@gmail.com', '83998458190', 'Areia Branca', 'RN', 'Cliente'),
(10, 'São Braz', 'saobraz@cafe.com', '813333-3333', 'Recife', 'PE', 'Fornecedor'),
(9, 'Rodrigo', 'rodrigo.cordula@gmail.com', '83993304305', 'João Pessoa', 'PB', 'Funcionario');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `contato`
--
ALTER TABLE `contato`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `contato`
--
ALTER TABLE `contato`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
