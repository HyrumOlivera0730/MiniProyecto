-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-05-2024 a las 11:59:56
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
-- Base de datos: `miniprojecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `correo_electronico` varchar(30) NOT NULL,
  `documento_identidad` varchar(20) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `telefono` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`usuario_id`, `nombre`, `apellidos`, `direccion`, `correo_electronico`, `documento_identidad`, `edad`, `fecha_creacion`, `telefono`) VALUES
(1, 'Maria', 'Silva', 'Rua das Flores 123', 'maria_silva@example.com', '123456789', 25, '2024-05-08 22:46:38', '123456789'),
(2, 'João', 'Santos', 'Avenida Brasil 456', 'joao_santos@example.com', '987654321', 30, '2024-05-08 22:46:38', '987654321'),
(3, 'Ana', 'Ferreira', 'Rua dos Passarinhos 789', 'ana_ferreira@example.com', '456123789', 35, '2024-05-08 22:46:38', '456123789'),
(4, 'Pedro', 'Oliveira', 'Rua das Árvores 456', 'pedro_oliveira@example.com', '789123456', 40, '2024-05-08 22:46:38', '789123456'),
(5, 'Sofia', 'Martins', 'Avenida Paulista 789', 'sofia_martins@example.com', '159357486', 27, '2024-05-08 22:46:38', '159357486'),
(6, 'Carlos', 'Lima', 'Rua dos Gatos 456', 'carlos_lima@example.com', '357159486', 33, '2024-05-08 22:46:38', '357159486'),
(7, 'Mariana', 'Gomes', 'Avenida da Praia 123', 'mariana_gomes@example.com', '753159852', 22, '2024-05-08 22:46:38', '753159852'),
(8, 'Antônio', 'Ribeiro', 'Rua das Pedras 789', 'antonio_ribeiro@example.com', '852369147', 45, '2024-05-08 22:46:38', '852369147'),
(9, 'Isabela', 'Almeida', 'Rua das Montanhas 456', 'isabela_almeida@example.com', '951753258', 29, '2024-05-08 22:46:38', '951753258'),
(10, 'Fernando', 'Dias', 'Avenida das Rosas 789', 'fernando_dias@example.com', '456852357', 38, '2024-05-08 22:46:38', '456852357'),
(11, 'Rafael', 'Pereira', 'Rua das Palmeiras 789', 'rafael_pereira@example.com', '369852147', 31, '2024-05-08 22:47:34', '369852147'),
(12, 'Camila', 'Souza', 'Avenida das Flores 456', 'camila_souza@example.com', '147258369', 26, '2024-05-08 22:47:34', '147258369'),
(13, 'Guilherme', 'Costa', 'Rua das Praias 123', 'guilherme_costa@example.com', '258369147', 29, '2024-05-08 22:47:34', '258369147'),
(14, 'Juliana', 'Nunes', 'Avenida dos Coqueiros 789', 'juliana_nunes@example.com', '963852741', 32, '2024-05-08 22:47:34', '963852741'),
(15, 'Lucas', 'Mendes', 'Rua dos Pinheiros 456', 'lucas_mendes@example.com', '741258963', 28, '2024-05-08 22:47:34', '741258963'),
(16, 'Carolina', 'Cavalcanti', 'Avenida das Pedras 123', 'carolina_cavalcanti@example.co', '852147963', 34, '2024-05-08 22:47:34', '852147963'),
(17, 'André', 'Rodrigues', 'Rua das Montanhas 789', 'andre_rodrigues@example.com', '369147258', 27, '2024-05-08 22:47:34', '369147258'),
(18, 'Amanda', 'Fernandes', 'Avenida das Rosas 456', 'amanda_fernandes@example.com', '147369258', 30, '2024-05-08 22:47:34', '147369258'),
(19, 'Felipe', 'Santana', 'Rua das Cachoeiras 123', 'felipe_santana@example.com', '258741369', 33, '2024-05-08 22:47:34', '258741369'),
(20, 'Patrícia', 'Lopes', 'Avenida das Marés 789', 'patricia_lopes@example.com', '963147852', 25, '2024-05-08 22:47:34', '963147852'),
(21, 'Luis', 'Santos', 'Rua das Palmas 456', 'luis_santos@example.com', '654789123', 36, '2024-05-11 21:19:47', '912345678\r'),
(22, 'Julia', 'Carvalho', 'Avenida das Oliveiras 789', 'julia_carvalho@example.com', '789456123', 31, '2024-05-11 21:19:47', '987654321\r'),
(23, 'Gabriel', 'Alves', 'Rua dos Pássaros 123', 'gabriel_alves@example.com', '852963741', 29, '2024-05-11 21:19:47', '934567890\r'),
(24, 'Larissa', 'Rocha', 'Avenida das Águas 456', 'larissa_rocha@example.com', '369741852', 27, '2024-05-11 21:19:47', '956789012\r'),
(25, 'Diego', 'Melo', 'Rua dos Coqueirais 789', 'diego_melo@example.com', '147852369', 33, '2024-05-11 21:19:47', '989012345\r'),
(26, 'Sara', 'Oliveira', 'Avenida dos Pinheirais 123', 'sara_oliveira@example.com', '852369741', 28, '2024-05-11 21:19:47', '998765432\r'),
(27, 'Bruno', 'Costa', 'Rua das Montanhas 456', 'bruno_costa@example.com', '963741852', 35, '2024-05-11 21:19:47', '991234567\r'),
(28, 'Ana', 'Lima', 'Avenida das Pedras 789', 'ana_lima@example.com', '741852963', 30, '2024-05-11 21:19:47', '999876543\r'),
(29, 'Luana', 'Andrade', 'Rua das Flores 123', 'luana_andrade@example.com', '369258147', 32, '2024-05-11 21:19:47', '923456789\r'),
(30, 'Rodrigo', 'Ferreira', 'Avenida Brasil 456', 'rodrigo_ferreira@example.com', '258147369', 26, '2024-05-11 21:19:47', '945678901\r');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`usuario_id`),
  ADD UNIQUE KEY `correo_electronico` (`correo_electronico`),
  ADD UNIQUE KEY `documento_identidad` (`documento_identidad`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `usuario_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
