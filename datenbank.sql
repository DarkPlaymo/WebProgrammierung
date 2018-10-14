-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 14, 2018 at 11:20 PM
-- Server version: 5.6.34-log
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datenbank`
--

-- --------------------------------------------------------

--
-- Table structure for table `bestellungen`
--

CREATE TABLE `bestellungen` (
  `id` int(10) UNSIGNED NOT NULL,
  `tisch_id` int(10) UNSIGNED NOT NULL,
  `gericht_id` int(10) UNSIGNED NOT NULL,
  `gerichtanzahl` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `bestellungen`
--

INSERT INTO `bestellungen` (`id`, `tisch_id`, `gericht_id`, `gerichtanzahl`) VALUES
(104, 2, 3, 2),
(105, 2, 7, 1),
(106, 2, 8, 1),
(108, 2, 19, 2),
(109, 2, 32, 3),
(111, 2, 60, 1),
(112, 2, 59, 1),
(114, 2, 38, 5),
(115, 1, 3, 2),
(116, 1, 7, 1),
(117, 1, 8, 1),
(118, 3, 9, 1),
(119, 3, 19, 2),
(120, 5, 32, 3),
(121, 7, 63, 3),
(122, 9, 60, 1),
(123, 9, 59, 1),
(124, 9, 55, 1),
(125, 10, 38, 5);

-- --------------------------------------------------------

--
-- Table structure for table `speisekarte`
--

CREATE TABLE `speisekarte` (
  `id` int(10) UNSIGNED NOT NULL,
  `typ` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `accordion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gericht` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `beschreibung` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `preis` decimal(10,2) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `speisekarte`
--

INSERT INTO `speisekarte` (`id`, `typ`, `accordion`, `gericht`, `beschreibung`, `preis`) VALUES
(1, 'Vorspeise', 'Gebraten', 'Datteln im Speckmantel', 'mit Walnüssen, Schafskäse und Spinat', 5.40),
(2, 'Vorspeise', 'Gebraten', 'Gegrillte Peperoni', 'mit Knoblauchöl und Brot', 4.80),
(3, 'Vorspeise', 'Gebraten', 'Teigbällchen (3 Stück)', 'gefüllt mit Rinderhackfleisch und Dip', 4.00),
(4, 'Vorspeise', 'Baguette/Käse', 'Knoblauch-Baguette', '', 2.90),
(5, 'Vorspeise', 'Baguette/Käse', 'Knoblauchbaguette mit Käse', '', 3.90),
(6, 'Vorspeise', 'Baguette/Käse', 'Überbackener Weichkäse', 'mit Tomaten, Paprika, Zwiebeln, Oliven und Kräuterbutter', 5.90),
(7, 'Vorspeise', 'Platte', 'Vorspeisenplatte', 'mit Peperoni, Zwiebeln, Weichkäse, Oliven und Croutons', 6.90),
(8, 'Hauptspeise', 'Burger', 'Chicken Burger', 'Chickenburger vom Grill mit Hamburgersauce, Salat, Gurken und Tomaten', 3.00),
(9, 'Hauptspeise', 'Burger', 'Cheese Burger', 'Chickenburger vom Grill mit Käse, Hamburgersauce, Salat, Gurken und Tomaten', 3.30),
(10, 'Hauptspeise', 'Burger', 'Cheese Burger double', 'Chickenburger mit 2 Patties vom Grill mit Käse, Hamburgersauce, Salat, Gurken und Tomaten', 4.40),
(11, 'Hauptspeise', 'Burger', 'Hawaii Burger', 'Chickenburger vom Grill mit Süß-Sauer-Sauce, gegrillten Ananasscheiben, Käse, Salat, Gurken und Tomaten', 4.20),
(12, 'Hauptspeise', 'Burger', 'Crunchy Burger', 'Chickenburger in Knusperpanade mit Hamburgersauce, Salat, Gurken und Tomaten', 4.30),
(13, 'Hauptspeise', 'Burger', 'Farmer Burger', 'Hähnchenfilet vom Grill im Käsebrötchen mit Hamburgersauce, Salat, Gurken und Tomaten', 4.80),
(14, 'Hauptspeise', 'Burger', 'Beefburger', 'Hackfleisch (125g) vom Grill mit Hamburgersauce, Röstzwiebeln, Salat, Gurken und Tomaten', 5.20),
(15, 'Hauptspeise', 'Burger', 'Beefburger double', 'Hackfleisch (2 x 125g) vom Grill mit Hamburgersauce, Röstzwiebeln, Salat, Gurken und Tomaten', 7.60),
(16, 'Hauptspeise', 'Burger', 'Beefburger Cheese', 'Premium Hackfleisch (125g) vom Grill mit Käse, Hamburgersauce, Röstzwiebeln, Salat, Gurken und Tomaten', 5.60),
(17, 'Hauptspeise', 'Burger', 'Beefburger Bacon', 'Premium Hackfleisch (125g) vom Grill mit knusprigem Bacon, Hamburgersauce, Salat, Gurken und Tomaten', 5.60),
(18, 'Hauptspeise', 'Burger', 'Fish Burger', 'paniertes Fischfilet mit Remouladensauce, Salat, Gurken und Tomaten', 4.10),
(19, 'Hauptspeise', 'Salate', 'Gemischter Beilagensalat', '', 3.50),
(20, 'Hauptspeise', 'Salate', 'Italienischer Salat', 'mit Ei, Käse und Vorderschinken', 7.50),
(21, 'Hauptspeise', 'Salate', 'Rucola Salat', 'mit Tomaten, Parmesan und Balsamico-Essig', 6.90),
(22, 'Hauptspeise', 'Salate', 'Caprese Salat', 'mit Mozzarella, Basilikum, Tomaten und Oliven', 6.90),
(23, 'Hauptspeise', 'Salate', 'Gemischter Salat mit Putenstreifen', '', 8.90),
(24, 'Hauptspeise', 'Salate', 'Gemischter Salat mit Rinderstreifen', '', 9.90),
(25, 'Hauptspeise', 'Wrap', 'Crispy Chili Wrap', 'mit Chicken, Cherrytomaten, Jalapeños, Tabasco, Aioli und Salat', 5.20),
(26, 'Hauptspeise', 'Wrap', 'Sweet Chicken Wrap', 'mit gegrillten Hühnchenbruststreifen, Möhren, Weintrauben, Chipotlesauce und Salat', 5.20),
(27, 'Hauptspeise', 'Wrap', 'Burger Wrap', 'mit Burgerfleisch, Zwiebeln, Tomaten, sauren Gurken, Ketchup, Mayonnaise und Salat', 5.70),
(28, 'Hauptspeise', 'Wrap', 'Barbecue Cheese Wrap', 'mit Burgerfleisch, Käse, Bacon, sauren Gurken, Tomaten, Barbecuesauce und Salat', 5.90),
(29, 'Hauptspeise', 'Wrap', 'Veggie Wrap', 'Gemüsepatty mit Möhren, Peperoni, Sonnenblumenkernen, Tabasco und Salat', 5.70),
(30, 'Hauptspeise', 'Wrap', 'Light Wrap', 'mit Schafskäse, Oliven, roten Zwiebeln, Salatgurken, grünem Pesto und Salat', 4.90),
(31, 'Hauptspeise', 'Wrap', 'Onion Wrap', 'mit Onionrings, Mayonnaise, Barbecuesauce, Burgerfleisch, Emmentaler und Salat', 6.20),
(32, 'Hauptspeise', 'Beilagen', 'Pommes frites (small)', '', 2.50),
(33, 'Hauptspeise', 'Beilagen', 'Pommes frites (large)', '', 3.70),
(34, 'Hauptspeise', 'Beilagen', 'Bratkartoffeln', '', 3.80),
(35, 'Hauptspeise', 'Beilagen', 'Wedges', '', 4.40),
(36, 'Hauptspeise', 'Beilagen', 'Chicken Nuggets (10 Stück)', '', 5.50),
(37, 'Hauptspeise', 'Beilagen', 'Onion Rings', '', 4.50),
(38, 'Dessert', 'Sonstiges', 'Tiramisu (1 Stück)', 'Hausgemacht', 4.90),
(39, 'Dessert', 'Sonstiges', 'Blaubeerpfannkuche', '', 4.50),
(40, 'Dessert', 'Sonstiges', 'Blueberry Muffin', '', 1.90),
(41, 'Dessert', 'Sonstiges', 'Chocolate Muffin', '', 1.90),
(42, 'Dessert', 'Sonstiges', 'Apfelstrudel', '', 2.90),
(43, 'Dessert', 'Milchspeiseeis', 'Schokolade', '', 1.70),
(44, 'Dessert', 'Milchspeiseeis', 'Vanille', '', 1.70),
(45, 'Dessert', 'Milchspeiseeis', 'Stracciatella', '', 1.70),
(46, 'Dessert', 'Milchspeiseeis', 'Nuss', '', 1.70),
(47, 'Dessert', 'Milchspeiseeis', 'Pistazie', '', 1.70),
(48, 'Dessert', 'Milchspeiseeis', 'Joghurt', '', 1.70),
(49, 'Dessert', 'Fruchtspeiseeis', 'Erdbeere', '', 1.70),
(50, 'Dessert', 'Fruchtspeiseeis', 'Zitrone', '', 1.70),
(51, 'Dessert', 'Fruchtspeiseeis', 'Himbeere', '', 1.70),
(52, 'Dessert', 'Fruchtspeiseeis', 'Melone', '', 1.70),
(53, 'Dessert', 'Fruchtspeiseeis', 'Apfel', '', 1.70),
(54, 'Dessert', 'Fruchtspeiseeis', 'Orange', '', 1.70),
(55, 'Getraenke', 'Alkoholische Getränke', 'Pils', '', 3.60),
(56, 'Getraenke', 'Alkoholische Getränke', 'Weizen', '', 3.80),
(57, 'Getraenke', 'Alkoholische Getränke', 'Weißwein', '', 4.50),
(58, 'Getraenke', 'Alkoholische Getränke', 'Rotwein', '', 4.90),
(59, 'Getraenke', 'Alkoholische Getränke', 'Korn', '', 2.20),
(60, 'Getraenke', 'Alkoholische Getränke', 'Wodka', '', 2.50),
(61, 'Getraenke', 'Alkoholfreie Getränke', 'Coca Cola', '', 3.50),
(62, 'Getraenke', 'Alkoholfreie Getränke', 'Fanta', '', 3.50),
(63, 'Getraenke', 'Alkoholfreie Getränke', 'Spezi', '', 3.50),
(64, 'Getraenke', 'Alkoholfreie Getränke', 'Sprite', '', 3.50),
(65, 'Getraenke', 'Alkoholfreie Getränke', 'Wasser (still)', '', 2.50),
(66, 'Getraenke', 'Alkoholfreie Getränke', 'Wasser (spritzig)', '', 3.00);

-- --------------------------------------------------------

--
-- Table structure for table `tische`
--

CREATE TABLE `tische` (
  `id` int(10) UNSIGNED NOT NULL,
  `besetzt` tinyint(1) NOT NULL,
  `name` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `personen` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tische`
--

INSERT INTO `tische` (`id`, `besetzt`, `name`, `personen`) VALUES
(1, 1, 'Meier', 4),
(2, 1, 'Graf', 8),
(3, 1, 'Mustermann', 8),
(4, 0, NULL, NULL),
(5, 1, 'Ullrich', 3),
(6, 0, NULL, NULL),
(7, 1, 'Schumann', 1),
(8, 0, NULL, NULL),
(9, 1, 'Euler', 5),
(10, 1, 'Vogel', 6),
(11, 0, NULL, NULL),
(12, 0, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bestellungen`
--
ALTER TABLE `bestellungen`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tisch_id` (`tisch_id`),
  ADD KEY `gericht_id` (`gericht_id`);

--
-- Indexes for table `speisekarte`
--
ALTER TABLE `speisekarte`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tische`
--
ALTER TABLE `tische`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bestellungen`
--
ALTER TABLE `bestellungen`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;
--
-- AUTO_INCREMENT for table `speisekarte`
--
ALTER TABLE `speisekarte`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;
--
-- AUTO_INCREMENT for table `tische`
--
ALTER TABLE `tische`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bestellungen`
--
ALTER TABLE `bestellungen`
  ADD CONSTRAINT `bestellungen_ibfk_1` FOREIGN KEY (`tisch_id`) REFERENCES `tische` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bestellungen_ibfk_2` FOREIGN KEY (`gericht_id`) REFERENCES `speisekarte` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
