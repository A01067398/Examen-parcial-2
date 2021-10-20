CREATE DEFINER=`henry`@`localhost` PROCEDURE `cantidadPorEstado`()
BEGIN
	SELECT (SELECT CANT(estado) from zombie WHERE estado='desorientacion') as cantidadDesorientacion,
    (SELECT CANT(estado) from zombie WHERE estado='infeccion') as cantidadInfeccion,
	(SELECT CANT(estado) from zombie WHERE estado='violencia') as cantidadViolencia,
    (SELECT CANT(estado) from zombie WHERE estado='desmayo') as cantidadDesmayo,
    (SELECT CANT(estado) from zombie WHERE estado='transformacion') as cantidadTransformacion
    FROM zombie;
END