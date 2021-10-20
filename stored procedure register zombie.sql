CREATE DEFINER=`yael`@`localhost` PROCEDURE `registrarZombie`(IN nombreIn varchar(100), estadoIn varchar(50))
BEGIN
	INSERT INTO zombie (nombre, estado) VALUES (nombreIn, estadoIn);
END