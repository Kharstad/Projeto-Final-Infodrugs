-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 13-Jan-2020 às 15:20
-- Versão do servidor: 10.1.39-MariaDB
-- versão do PHP: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `funildevendas`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `farmacia`
--

CREATE TABLE `farmacia` (
  `id_curso` int(11) NOT NULL,
  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `nome_remedio` varchar(255) NOT NULL,
  `info_remedio` varchar(255) NOT NULL,
  `status_curso` enum('ativo','inativo') NOT NULL DEFAULT 'ativo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `farmacia`
--

INSERT INTO `farmacia` (`id_curso`, `data`, `nome_remedio`, `info_remedio`, `status_curso`) VALUES
(5, '2019-12-06 14:14:58', 'Dorflex', 'Dor de cabeça e dor no corpo', 'ativo'),
(6, '2019-12-09 11:28:26', 'Polaramine', 'Dexclorfeniramina é um isômero dextrôgiro do maleato de clorfeniramina. Pertence ao grupo farmacológico dos antagonistas dos receptadores H₁ da histamina, atuando na prevenção e alívio de manifestações alérgicas. ', 'ativo'),
(7, '2019-12-09 11:35:06', 'diclofenaco de potassio', 'Dor e inflamação no pós-operatório; Condições inflamatórias dolorosas em ginecologia, incluindo períodos menstruais; Dor nas costas, síndrome do ombro congelado, cotovelo de tenista e outros tipos de reumatismo; Infecções do ouvido, nariz e garganta.', 'ativo'),
(9, '2019-12-09 11:47:16', 'ibuprofeno', 'O ibuprofeno é um fármaco anti-inflamatório não esteroide (AINE) indicado para o alívio temporário não apenas da febre, como também de dores de intensidade leve a moderada como cefaleia, lombalgia, de gripes e resfriados comuns, dor de dente, dores muscul', 'ativo'),
(12, '2019-12-09 11:51:32', 'Cerumin', 'solução otológica contém o ingrediente ativo trolamina que saponifica (reação química que facilita a solubilização) a cera, e hidroxiquinolina que atua como fungistático (elimina fungos) e desinfetante. Estas duas substâncias auxiliam na remoção de secreç', 'ativo'),
(15, '2019-12-09 11:54:18', 'tramadol', 'é indicado para analgesia (alívio da dor) de intensidade moderada a grave; independente do tempo que esta dor atinge o paciente, seja a dor do tipo aguda, subaguda e crônica', 'ativo'),
(16, '2019-12-09 11:54:59', 'Tramal', 'O Tramal é um remédio que tem tramadol na sua composição, que é um analgésico que age no sistema nervoso central e que está indicado para o alívio da dor de intensidade moderada a grave.', 'ativo'),
(17, '2019-12-09 11:56:38', 'Alprazolam', 'é um medicamento utilizado frequentemente no tratamento de ansiedade e síndrome do pânico', 'ativo'),
(18, '2019-12-09 11:57:07', 'Buspirona', ' é indicado no tratamento de distúrbios de ansiedade, como o transtorno de ansiedade generalizada e no alívio em curto prazo dos sintomas de ansiedade, acompanhados ou não de depressão', 'ativo'),
(19, '2019-12-09 11:57:42', 'Bromazepam', 'É indicado também como auxiliar no tratamento de ansiedade e agitação associadas a quadros psiquiátricos, como transtornos do humor (doenças psiquiátricas em que o indivíduo apresenta depressão ou euforia desproporcionais e transtorno bipolar) e Esquizofr', 'ativo'),
(21, '2019-12-09 11:59:19', 'Rivotril', 'indicado isoladamente ou como adjuvante no tratamento das crises epilépticas mioclônicas, acinéticas, ausências típicas (pequeno mal), ausências atípicas (síndrome de Lennox-Gastaut).', 'ativo'),
(22, '2019-12-09 12:00:14', 'Valium', ' é indicado para alívio sintomático da ansiedade, tensão e outras queixas somáticas ou psicológicas associadas com a síndrome da ansiedade. Pode também ser útil como coadjuvante no tratamento da ansiedade ou agitação associada a desordens psiquiátricas.', 'ativo'),
(23, '2019-12-09 12:00:49', 'Diazepam', ' é um medicamento controlado, prescrito por psiquiatras para tratamento de ansiedade, síndrome do pânico e outras questões psicossomáticas ligadas a transtornos ansiosos.', 'ativo'),
(24, '2019-12-09 12:02:53', 'Melatonina', 'Melatonina é um hormônio produzido naturalmente pelo corpo humano e uma de suas funções básicas é a indução ao sono.', 'ativo'),
(25, '2019-12-09 12:04:44', 'Albendazol', 'Albendazol é um medicamento genérico usado para tratar uma diversa variedade de condições causadas por parasitas ou vermes em adultos e crianças. Nas crianças, Albendazol é muito utilizado para combater doenças como giardíase, opistoquíase e infecções cau', 'ativo'),
(28, '2019-12-09 12:15:11', 'Mebendazol', 'O Mebendazol ou MBZ é um fármaco derivado dos benzimidazóis. Farmacologicamente está classificado dentro do grupo dos antiparasitários, sub-grupo dos anti-helmínticos.', 'ativo'),
(29, '2019-12-09 12:19:05', 'Advil ', 'É indicado para alívio temporário da febre e de dores de leve a moderada intensidade, como: dor de cabeça.', 'ativo'),
(30, '2019-12-09 12:20:54', 'Atrofem ', 'é indicado no alívio temporário da febre e de dores de leve a moderada intensidade como cefaleia tensional, lombalgia, dor muscular, enxaqueca, dismenorreia, de gripes e resfriados comuns, de artrite e dor de dente.', 'ativo'),
(31, '2019-12-09 12:22:57', 'Benegrip\r\n', 'é destinado para alívio dos sintomas decorrentes das gripes e resfriados, como dores de cabeça, febre e processos alérgicos. ', 'ativo'),
(32, '2020-01-13 14:12:25', 'Sulfato Ferroso', 'Tratamento e profilaxia de anemias por deficiências de ferro.', 'ativo'),
(34, '2020-01-13 14:14:36', 'Tylenol', 'Indicado para dor (analgésico) e destinado e febre (antitérmico). Uso oral, adulto e pediátrico acima de 12 anos de idade', 'ativo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `farmacia`
--
ALTER TABLE `farmacia`
  ADD PRIMARY KEY (`id_curso`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `farmacia`
--
ALTER TABLE `farmacia`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
