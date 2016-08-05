-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 05, 2016 at 06:23 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todo`
--

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `todo_id` int(11) NOT NULL COMMENT 'รหัสของงาน',
  `name` varchar(100) NOT NULL COMMENT 'ชื่อ',
  `description` text NOT NULL COMMENT 'รายละเอียด',
  `status` set('true','false') NOT NULL COMMENT 'สถานะของงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`todo_id`, `name`, `description`, `status`) VALUES
(1, 'ซื้อนม', 'ตลาดอโศก', 'false'),
(2, 'ซื้อกับข้าว', 'ตลาดศรีนครินทร์', 'true'),
(3, 'นัดแฟน', 'เซนทรัลพระรามเก้า เวลา 9 โมง', 'true'),
(4, 'เดินเล่น', 'เวลาสิบโมง', 'false');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`todo_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `todo_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'รหัสของงาน', AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
