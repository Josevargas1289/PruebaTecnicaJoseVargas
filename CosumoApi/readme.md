<p align="center">
  <a href="https://nodejs.org/es" target="blank"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--vrvqSDHx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/s15ubgod56c7butyt7eu.jpg" width="200" alt="Nest Logo" /></a>
</p>

# ConsumoApi

## Descripción del proyecto

La API de backend en NodeJS está diseñada para interactuar con una base de datos SQL Server. Permite obtener datos según fechas y tramos específicos, organizándolos de forma estructurada. Es escalable, eficiente y garantiza un rendimiento óptimo en entornos de alta carga..

## Características principales

1. Consulta el historico por cada tramo, que contenga el consumo, perdidas y costo por el consumo.
2. Responde con una historia por cada tipo de usuario, que contenga el tramo, consumo, perdidas y costo por el consumo
3. Responde con un listado con los tramos/cliente con las mayores pérdidas.

## Tecnologías utilizadas

1. Express: Un framework minimalista de Node.js que facilita la creación de aplicaciones web y APIs.

2. Morgan: Middleware de Express que registra solicitudes HTTP para el registro y análisis.

3. sqlserver: Un sistema de gestión de bases de datos relacionales.

4. Sequelize: Un ORM (Object-Relational Mapping) para bases de datos SQL que simplifica la interacción con la base de datos y proporciona una capa de abstracción sobre SQL.

## Requeisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado Node.js, PostgreSQL, nodemon en tu máquina.

## Cómo ejecutar el proyecto

1. Clonar el proyecto
2. Ejecutar `npm install`
3. Clonar el archivo `.env.template` y renombrarlo a `.env`
4. Cambiar las variables de entorno
5. Levantar la base datos
6. Levantar el modo de desarrollo: `npm run dev`

## Nota importante

Para el correcto funcionamiento de la API es necesario crear en SQLSERVER las siguientes vistas, las cuales proporcionan los datos a cada uno de los enpoind de la aplicación.

##vista 1:

create VIEW [dbo].[vwHistoricoConsumos]
AS
SELECT h.id, h.idTipCliente, h.idLinea, h.Consumo, h.Costo, h.Perdida,
h.fecha, dbo.Lineas.nombre AS LineaNombre, dbo.Tipo_clientes.nombre AS NombreCliente
FROM dbo.HistoricoConsumos AS h INNER JOIN
dbo.Lineas ON h.idLinea = dbo.Lineas.id INNER JOIN
dbo.Tipo_clientes ON h.idTipCliente = dbo.Tipo_clientes.id

##vista 2:

create view [dbo].[vwConsumoTramos] as
select LineaNombre,
t.nombre as tipoCliente,
c.fecha,
sum(c.Costo) as Costo,
sum(c.perdida) as Perdida,
sum(c.Consumo) as Consumo from [dbo].[vwHistoricoConsumos] c
inner join [dbo].[Tipo_clientes] t
on c.idTipCliente= t.id
group By LineaNombre, t.nombre, c.fecha

##vista 3:

create view [dbo].[vwConsumoPerdidas] as
select
NombreCliente,
LineaNombre,
Fecha,
--max(fecha) as fecha,
max(Perdida) as Perdida
from [dbo].[vwHistoricoConsumos]
group by
LineaNombre,
NombreCliente,
Fecha
