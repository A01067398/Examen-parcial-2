CREATE DEFINER=`henry`@`localhost` PROCEDURE `obtenerTodo`()
BEGIN
	SELECT * FROM zombie; 
END