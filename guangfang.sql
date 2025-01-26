-- MySQL dump 10.13  Distrib 8.0.40, for Linux (x86_64)
--
-- Host: localhost    Database: guangfang
-- ------------------------------------------------------
-- Server version	8.0.40-0ubuntu0.24.04.1

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
-- Table structure for table `announcements`
--

DROP TABLE IF EXISTS `announcements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `announcements` (
  `id` int NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(50) NOT NULL,
  `author` varchar(50) DEFAULT NULL,
  `visible` tinyint(1) DEFAULT '0',
  `file_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcements`
--

LOCK TABLES `announcements` WRITE;
/*!40000 ALTER TABLE `announcements` DISABLE KEYS */;
INSERT INTO `announcements` VALUES (1,'2025-01-11 11:28:42','广学五题坊评分机制','Wangzehao2009',1,'public/announcements/score.md'),(2,'2025-01-24 14:36:18','用户许可协议','Wangzehao2009',1,'public/announcements/userAgreement.md');
/*!40000 ALTER TABLE `announcements` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `issue_problem_graph` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(8,1),(8,10),(8,12),(8,8),(7,1),(7,17),(7,15),(7,10),(7,5),(20,2),(20,1),(21,19),(21,5),(21,11),(21,13),(21,15),(21,16),(24,1),(24,2),(24,3),(24,4),(24,5),(24,10),(24,13),(25,16),(25,15),(25,14),(25,13),(37,1),(49,1),(49,1),(49,4),(52,1),(52,2),(52,3),(53,1),(53,1),(53,4),(53,5),(55,1),(55,2),(55,3),(66,7),(67,1),(69,1),(70,1),(101,26),(101,27),(101,28),(101,29),(101,30),(102,31),(102,32),(102,33),(102,35),(102,36),(108,37),(108,38),(108,39),(108,41),(108,42),(115,50),(115,51),(115,52),(115,53),(115,54),(111,44),(111,45),(111,46),(111,48),(111,49),(NULL,65),(NULL,66),(NULL,67),(NULL,68),(NULL,69),(116,65),(116,66),(116,67),(116,68),(116,69),(NULL,71),(117,71),(117,72),(117,73),(117,74),(NULL,75),(NULL,76),(NULL,77),(NULL,78),(118,75),(118,76),(118,77),(118,78),(119,79),(119,80),(119,81),(119,82),(119,83),(NULL,79),(NULL,80),(NULL,81),(NULL,82),(NULL,83),(120,84),(120,85),(120,86),(NULL,84),(NULL,85),(NULL,86);
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
  `visible` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `issues`
--

LOCK TABLES `issues` WRITE;
/*!40000 ALTER TABLE `issues` DISABLE KEYS */;
INSERT INTO `issues` VALUES (101,'2024-12-25 13:57:19','第一期',1),(102,'2024-12-25 14:05:33','第二期',1),(108,'2024-12-31 08:01:15','第三期',1),(111,'2025-01-02 15:01:47','第四期',1),(115,'2025-01-06 12:22:31','第五期',1),(116,'2025-01-22 05:19:44','第六期',1),(117,'2025-01-22 05:20:38','第七期',1),(118,'2025-01-22 09:05:10','第八期',1),(119,'2025-01-22 09:53:57','第九期',1),(120,'2025-01-22 10:15:35','第十期',1);
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
  `visible` tinyint(1) NOT NULL DEFAULT '0',
  `subject` varchar(255) DEFAULT NULL,
  `submit_num` int DEFAULT NULL,
  `score` int DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=88 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `problems`
--

LOCK TABLES `problems` WRITE;
/*!40000 ALTER TABLE `problems` DISABLE KEYS */;
INSERT INTO `problems` VALUES (26,'2024-12-25 13:51:22','第一期数学',1,'数学',0,0,'郑凯文','uploads/1735134682747-undefined-problem_1.md'),(27,'2024-12-25 13:52:40','第一期物理',1,'物理',0,0,'姜川','uploads/1735134760918-undefined-problem_27.md'),(28,'2024-12-25 13:54:05','第一期化学',1,'化学',0,0,'张天泽','uploads/1735134845494-undefined-problem_28.md'),(29,'2024-12-25 13:55:03','第一期生物',1,'生物',0,0,'刘润青','uploads/1735134903216-undefined-problem_29.md'),(30,'2024-12-25 13:55:54','第一期信息',1,'信息',0,0,'陈雨翔、王泽昊','uploads/1735134954188-undefined-problem_30.md'),(31,'2024-12-25 14:01:36','第二期数学',1,'数学',0,0,'姜傲博','uploads/1735135296420-undefined-problem_31.md'),(32,'2024-12-25 14:02:26','第二期物理',1,'物理',0,0,'王思筝','uploads/1735135346727-undefined-problem_32.md'),(33,'2024-12-25 14:03:15','第二期化学',1,'化学',0,0,'张汉祥','uploads/1735135395796-undefined-problem_33.md'),(35,'2024-12-25 14:04:22','第二期生物',1,'生物',0,0,'刘润青','uploads/1735135462864-undefined-problem_35.md'),(36,'2024-12-25 14:05:18','第二期信息',1,'信息',0,0,'施云浩','uploads/1735135518260-undefined-problem_36.md'),(37,'2024-12-29 13:29:26','第三期数学',1,'数学',0,0,'郑凯文','uploads/1735478966904-undefined-problem_37.md'),(38,'2024-12-29 13:31:04','第三期物理',1,'物理',0,0,'陶安泊','uploads/1735479064982-undefined-problem_38.md'),(39,'2024-12-29 13:31:50','第三期化学',1,'化学',0,0,'张天泽','uploads/1735479110713-undefined-problem_39.md'),(41,'2024-12-29 13:34:46','第三期生物',1,'生物',0,0,'廖欣妍','uploads/1735479286551-undefined-problem_41.md'),(42,'2024-12-29 13:36:26','第三期信息',1,'信息',0,0,'陈雨翔、lky先生','uploads/1735479386335-undefined-problem_42.md'),(44,'2025-01-02 14:54:02','第四期数学',1,'数学',0,0,'张潇瀚','uploads/1735829642291-Wangzehao2009-problem_43.md'),(45,'2025-01-02 14:55:39','一代战神：“功臣号”',1,'物理',0,0,'马涵裕','uploads/1735829739331-Wangzehao2009-problem_45.md'),(46,'2025-01-02 14:56:45','第四期化学',1,'化学',0,0,'庞凌熙','uploads/1735829805684-Wangzehao2009-problem_46.md'),(48,'2025-01-02 15:00:31','第四期生物',1,'生物',0,0,'郑正','uploads/1735830031102-Wangzehao2009-problem_47.md'),(49,'2025-01-02 15:01:14','第四期信息',1,'信息',0,0,'黄锦扬','uploads/1735830074219-Wangzehao2009-problem_49.md'),(50,'2025-01-06 12:13:17','第五期数学',1,'数学',0,0,'张潇瀚','uploads/1736165597342-16-problem_50.md'),(51,'2025-01-06 12:14:26','jc 的水壶空了',1,'物理',0,0,'段旭升','uploads/1736165666673-16-problem_51.md'),(52,'2025-01-06 12:14:45','第五期化学',1,'化学',0,0,'张鑫雨','uploads/1736165685781-16-problem_52.md'),(53,'2025-01-06 12:14:56','米式方程',1,'生物',0,0,'刘季涵','uploads/1736165696946-16-problem_53.md'),(54,'2025-01-06 12:15:12','矩形加矩形求和',1,'信息',0,0,'王泽昊','uploads/1736165712438-16-problem_54.md'),(65,'2025-01-07 13:47:25','第六期数学',1,'数学',0,0,'张潇瀚','uploads/problem_55.md'),(66,'2025-01-07 13:48:00','第六期物理',1,'物理',0,0,'张宸睿','uploads/problem_66.md'),(67,'2025-01-07 13:48:53','第六期化学',1,'化学',0,0,'余东耕','uploads/problem_67.md'),(68,'2025-01-07 13:53:06','第六期生物',1,'生物',0,0,'刘润清','uploads/problem_68.md'),(69,'2025-01-07 13:56:27','开胃菜',1,'信息',0,0,'董一瑄、李星成','uploads/problem_69.md'),(71,'2025-01-22 04:43:36','第七期数学',1,'数学',NULL,NULL,'喻方达','uploads/problem_71.md'),(72,'2025-01-22 05:22:16','第七期化学',1,'化学',NULL,NULL,'余东耕','uploads/problem_72.md'),(73,'2025-01-22 05:23:30','第七期生物',1,'生物',NULL,NULL,'刘润青','uploads/problem_73.md'),(74,'2025-01-22 05:25:03','物理题',1,'信息',NULL,NULL,'陈雨翔、王泽昊、季子谦','uploads/problem_74.md'),(75,'2025-01-22 08:59:06','教室中的天体问题',1,'物理',NULL,NULL,'陶安泊','uploads/problem_75.md'),(76,'2025-01-22 09:00:03','第八期化学',1,'化学',NULL,NULL,'余东耕','uploads/problem_76.md'),(77,'2025-01-22 09:02:38','第八期生物',1,'生物',NULL,NULL,'廖欣妍','uploads/problem_77.md'),(78,'2025-01-22 09:04:30','数学题',1,'信息',NULL,NULL,'北京十一学校','uploads/problem_78.md'),(79,'2025-01-22 09:49:30','第九期数学I',1,'数学',NULL,NULL,'吴茁','uploads/problem_79.md'),(80,'2025-01-22 09:50:04','第九期数学II',1,'数学',NULL,NULL,'尹成安','uploads/problem_80.md'),(81,'2025-01-22 09:50:40','第九期数学III',1,'数学',NULL,NULL,'曹一晴','uploads/problem_81.md'),(82,'2025-01-22 09:52:12','第九期生物',1,'生物',NULL,NULL,'郑正','uploads/problem_82.md'),(83,'2025-01-22 09:53:26','费马数列',1,'信息',NULL,NULL,'王维祯','uploads/problem_83.md'),(84,'2025-01-22 10:09:53','第十期数学I',1,'数学',NULL,NULL,'郭思齐','uploads/1737540593268-16-problem_84.png'),(85,'2025-01-22 10:13:50','欺诈猜数游戏',1,'数学',NULL,NULL,'郑凯文','uploads/problem_85.md'),(86,'2025-01-22 10:14:30','第十期物理',1,'物理',NULL,NULL,'姜川','uploads/1737540870453-16-problem_86.png'),(87,'2025-01-25 03:29:21','寒假第一期生物',0,'生物',NULL,NULL,'刘季涵','uploads/1737775761528-26-problem_87.docx');
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
  `is_excel_answer` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submissions`
--

LOCK TABLES `submissions` WRITE;
/*!40000 ALTER TABLE `submissions` DISABLE KEYS */;
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
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `real_name` varchar(50) NOT NULL,
  `school` varchar(100) DEFAULT NULL,
  `grade` varchar(20) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `hangman` int DEFAULT '0',
  `gridGame` double DEFAULT (0),
  `gameScore` double DEFAULT (0),
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (14,'jzq',1,'季子谦','北京师范大学附属中学','9','110','114@514.com','$2b$10$G4844T68NUJzyj0j87P/tO0bl2bKse260gFJ7VnQADeL4NBEgoyTK',0,0,0),(16,'Wangzehao2009',1,'王泽昊','北京师范大学附属实验中学','10','15101533710','2896653446@qq.com','$2b$10$jV1FOAki5siBZTt1D8W3a.Mjmx1vBrNduROrUVL3qVwMu.j/aWZe2',7,20.77777777777778,27.77777777777778),(20,'SmpaelFx',1,'季子谦','北京师范大学附属中学','9','18611305549','jzq20015005@outlook.com','$2b$10$Thpsq/oBAIbudOMAiv714OoH2wHBn0jh09mVXxt8o9u6E0H1jB4Fa',3,0,3),(21,'aabbccddwasd',1,'张天泽','SDSZ','10','15711350307','aabbccddwasd@qq.com','$2b$10$HDwFJcax8S95UiL1wGN02e4uTwPEOvWsxHQqQs3Sv87Hh4QuDwTqe',0,0,0),(22,'WangSiZheng',1,'王思筝','北师大实验中学','高一','17310290820','17310290820@qq.com','$2b$10$fLZ8NmlsBc8Td3o6A85am.MQf9dWIRO2E4ufAYrL1hps4XBwuNtP6',0,1,1),(23,'Capoo',1,'喻方达','北师大实验中学','高一','13021267216','3662826993@qq.com','$2b$10$wlOM5UtKHM14QwZRzQqRROEkqLoFKPwYMHI37ekk3jhjPjGbWByfi',9,7,16),(25,'永雏塔菲－东雪莲－猫雷  大帝',0,'刘季涵','北师大实验','高一','15901064266','I@xn--donothaveany-dy84ag07q','$2b$10$7vKyqlGof74.fvi3uh4yy.oB8NXcpQkO2E3fVhpAXs.v6KTTK6vNu',0,0,0),(26,'泥嘻嘻',1,'刘润青','北京师范大学附属实验中学','高一','13522150153','wuyishidexunbaozhe@qq.com','$2b$10$nhlZbOkLL8eAG7MK0GZHjuOqovIEwYocZDZMo/Ge8ywX/Arjobq.m',0,0,0);
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

-- Dump completed on 2025-01-25 12:45:32
