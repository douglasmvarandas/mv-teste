create database mvteste;
use mvteste;

CREATE TABLE contato(
    id bigint(20) primary key auto_increment, 
    nome varchar(255),
    telefone varchar(255),
    email varchar(255),
    cidade varchar(255),
    estado varchar(2),
    categoria varchar(20)
);

ALTER TABLE contato ADD INDEX IDX_SEARCH_TEXT (`nome` ASC, `email` ASC, `categoria` ASC) VISIBLE;