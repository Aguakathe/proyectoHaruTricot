-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-05-2025 a las 18:52:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `haru`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes_contacto`
--

CREATE TABLE `mensajes_contacto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `numero_contacto` varchar(20) DEFAULT NULL,
  `correo_electronico` varchar(150) DEFAULT NULL,
  `mensaje` text DEFAULT NULL,
  `acepta_politica` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `mensajes_contacto`
--

INSERT INTO `mensajes_contacto` (`id`, `nombre`, `apellido`, `numero_contacto`, `correo_electronico`, `mensaje`, `acepta_politica`) VALUES
(1, 'Pruebas', 'Probando', '1457825454', 'pruebas@gmail.com', 'Probando la conexión con la Base de Datos, prueba 1000000.', 1),
(2, 'Pruebas', 'Probando', '1457825454', 'pruebas@gmail.com', 'a a a a a a a a a a', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `numero_contacto` varchar(20) DEFAULT NULL,
  `tipo_pedido` enum('Modelo disponible','Pedido Personalizado') DEFAULT NULL,
  `metodo_pago` enum('Nequi','Transferencia Bancaria') DEFAULT NULL,
  `metodo_entrega` enum('Contra entrega (Solo Bogotá)','Interrapidismo') DEFAULT NULL,
  `colores_deseados` text DEFAULT NULL,
  `idea_personalizada` text DEFAULT NULL,
  `comentarios` text DEFAULT NULL,
  `acepta_politica` tinyint(1) DEFAULT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`id`, `nombre`, `apellido`, `numero_contacto`, `tipo_pedido`, `metodo_pago`, `metodo_entrega`, `colores_deseados`, `idea_personalizada`, `comentarios`, `acepta_politica`, `fecha_registro`) VALUES
(1, 'Pruebas', 'Probando', '1457825454', 'Modelo disponible', 'Nequi', 'Contra entrega (Solo Bogotá)', 'Amarillo, Azul', 'Lirio Rosado Pastel', 'Excelente', 1, '2025-05-26 16:42:10'),
(2, 'Pruebas', 'Prueba 2', '1457825454', 'Pedido Personalizado', 'Transferencia Bancaria', 'Interrapidismo', 'Rosa pastel', 'Lirio Rosado Pastel', 'Excelente', 1, '2025-05-26 16:44:09');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `mensajes_contacto`
--
ALTER TABLE `mensajes_contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `mensajes_contacto`
--
ALTER TABLE `mensajes_contacto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
