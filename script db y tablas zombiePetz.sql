create database petz;
use petz;

create table zombie(
id int primary key auto_increment,
nombre varchar(100) not null,
estado varchar(50) not null,
fecha timestamp
);

