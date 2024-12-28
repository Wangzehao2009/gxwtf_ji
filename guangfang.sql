-- MySQL dump 10.13  Distrib 8.4.3, for macos14 (arm64)
--
-- Host: localhost    Database: guangfang
-- ------------------------------------------------------
-- Server version	8.4.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `issue_problem_graph`
--

DROP TABLE IF EXISTS `issue_problem_graph`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issue_problem_graph` (
  `issue_id` int DEFAULT NULL,
  `problem_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issue_problem_graph`
--

LOCK TABLES `issue_problem_graph` WRITE;
/*!40000 ALTER TABLE `issue_problem_graph` DISABLE KEYS */;
INSERT INTO `issue_problem_graph` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(8,1),(8,10),(8,12),(8,8),(7,1),(7,17),(7,15),(7,10),(7,5),(20,2),(20,1),(21,19),(21,5),(21,11),(21,13),(21,15),(21,16),(24,1),(24,2),(24,3),(24,4),(24,5),(24,10),(24,13),(25,16),(25,15),(25,14),(25,13),(37,1),(49,1),(49,1),(49,4),(52,1),(52,2),(52,3),(53,1),(53,1),(53,4),(53,5),(55,1),(55,2),(55,3),(66,7),(67,1),(69,1),(70,1),(101,26),(101,27),(101,28),(101,29),(101,30),(102,31),(102,32),(102,33),(102,35),(102,36);
/*!40000 ALTER TABLE `issue_problem_graph` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `issues`
--

DROP TABLE IF EXISTS `issues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `issues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issues`
--

LOCK TABLES `issues` WRITE;
/*!40000 ALTER TABLE `issues` DISABLE KEYS */;
INSERT INTO `issues` VALUES (101,'2024-12-25 13:57:19','第一期'),(102,'2024-12-25 14:05:33','第二期');
/*!40000 ALTER TABLE `issues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `problems`
--

DROP TABLE IF EXISTS `problems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `problems` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `submit_num` int DEFAULT NULL,
  `score` int DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problems`
--

LOCK TABLES `problems` WRITE;
/*!40000 ALTER TABLE `problems` DISABLE KEYS */;
INSERT INTO `problems` VALUES (26,'2024-12-25 13:51:22','第一期数学','数学',NULL,NULL,'郑凯文','uploads/1735134682747-undefined-problem_1.md'),(27,'2024-12-25 13:52:40','第一期物理','物理',2,NULL,'姜川','uploads/1735134760918-undefined-problem_27.md'),(28,'2024-12-25 13:54:05','第一期化学','化学',NULL,NULL,'张天泽','uploads/1735134845494-undefined-problem_28.md'),(29,'2024-12-25 13:55:03','第一期生物','生物',NULL,NULL,'刘润青','uploads/1735134903216-undefined-problem_29.md'),(30,'2024-12-25 13:55:54','第一期信息','信息',1,NULL,'陈雨翔、王泽昊','uploads/1735134954188-undefined-problem_30.md'),(31,'2024-12-25 14:01:36','第二期数学','数学',NULL,NULL,'姜傲博','uploads/1735135296420-undefined-problem_31.md'),(32,'2024-12-25 14:02:26','第二期物理','物理',NULL,NULL,'王思筝','uploads/1735135346727-undefined-problem_32.md'),(33,'2024-12-25 14:03:15','第二期化学','化学',NULL,NULL,'张汉祥','uploads/1735135395796-undefined-problem_33.md'),(35,'2024-12-25 14:04:22','第二期生物','生物',NULL,NULL,'刘润青','uploads/1735135462864-undefined-problem_35.md'),(36,'2024-12-25 14:05:18','第二期信息','信息',NULL,NULL,'施云浩','uploads/1735135518260-undefined-problem_36.md');
/*!40000 ALTER TABLE `problems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submissions`
--

DROP TABLE IF EXISTS `submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `submissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `issue_id` int NOT NULL,
  `problem_id` int NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `subject` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submissions`
--

LOCK TABLES `submissions` WRITE;
/*!40000 ALTER TABLE `submissions` DISABLE KEYS */;
INSERT INTO `submissions` VALUES (1,16,102,31,'2024-12-27 15:43:41','数学','uploads/1735314221572-16-[Sqrt5+Round+2]+题解.pdf'),(2,16,101,27,'2024-12-27 16:12:16','物理','uploads/1735315936409-16-6_17_五题week3OI.pdf'),(3,3,101,27,'2024-12-28 15:58:00','物理','uploads/1735401480195-3-五题week1Ph.pdf'),(4,17,101,27,'2024-12-28 16:01:05','物理','uploads/1735401665660-17-五题week1Ph.pdf'),(5,17,101,30,'2024-12-28 16:02:02','信息','uploads/1735401722050-17-五题week1OI.pdf');
/*!40000 ALTER TABLE `submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `real_name` varchar(50) NOT NULL,
  `school` varchar(100) DEFAULT NULL,
  `grade` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'jzq','季子谦','北京师范大学附属中学','9','110','114@514.com','$2b$10$G4844T68NUJzyj0j87P/tO0bl2bKse260gFJ7VnQADeL4NBEgoyTK'),(16,'Wangzehao2009','王泽昊','北京师范大学附属实验中学','10','15101533710','2896653446@qq.com','$2b$10$jV1FOAki5siBZTt1D8W3a.Mjmx1vBrNduROrUVL3qVwMu.j/aWZe2'),(17,'SmpaelFx','季子谦','北京师范大学附属中学','初三','18611305549','jzq20015005@outlook.com','$2b$10$vLuaEMxVSfp00AVKGIxrnuV0CcM0HfPVE/zzQJ3bcb4iC5rV7yBwK');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-29  0:07:58
