/*
 Navicat Premium Dump SQL

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 90001 (9.0.1)
 Source Host           : localhost:3306
 Source Schema         : guangfang

 Target Server Type    : MySQL
 Target Server Version : 90001 (9.0.1)
 File Encoding         : 65001

 Date: 03/01/2025 22:49:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for issue_problem_graph
-- ----------------------------
DROP TABLE IF EXISTS `issue_problem_graph`;
CREATE TABLE `issue_problem_graph` (
  `issue_id` int DEFAULT NULL,
  `problem_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of issue_problem_graph
-- ----------------------------
BEGIN;
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (1, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (1, 2);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (1, 3);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (1, 4);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (1, 5);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 2);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 3);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 4);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 5);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 6);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 7);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 8);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 9);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (2, 10);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 2);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 3);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 4);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 5);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 6);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 7);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 8);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 9);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (3, 10);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (8, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (8, 10);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (8, 12);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (8, 8);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (7, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (7, 17);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (7, 15);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (7, 10);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (7, 5);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (20, 2);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (20, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (21, 19);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (21, 5);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (21, 11);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (21, 13);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (21, 15);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (21, 16);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (24, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (24, 2);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (24, 3);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (24, 4);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (24, 5);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (24, 10);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (24, 13);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (25, 16);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (25, 15);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (25, 14);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (25, 13);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (37, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (49, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (49, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (49, 4);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (52, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (52, 2);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (52, 3);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (53, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (53, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (53, 4);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (53, 5);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (55, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (55, 2);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (55, 3);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (66, 7);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (67, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (69, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (70, 1);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (101, 26);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (101, 27);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (101, 28);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (101, 29);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (101, 30);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (102, 31);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (102, 32);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (102, 33);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (102, 35);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (102, 36);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (108, 37);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (108, 38);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (108, 39);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (108, 41);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (108, 42);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (111, 44);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (111, 45);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (111, 46);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (111, 48);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (111, 49);
COMMIT;

-- ----------------------------
-- Table structure for issues
-- ----------------------------
DROP TABLE IF EXISTS `issues`;
CREATE TABLE `issues` (
  `id` int NOT NULL AUTO_INCREMENT,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of issues
-- ----------------------------
BEGIN;
INSERT INTO `issues` (`id`, `time`, `name`) VALUES (101, '2024-12-25 21:57:19', '第一期');
INSERT INTO `issues` (`id`, `time`, `name`) VALUES (102, '2024-12-25 22:05:33', '第二期');
INSERT INTO `issues` (`id`, `time`, `name`) VALUES (108, '2024-12-31 16:01:15', '第三期');
INSERT INTO `issues` (`id`, `time`, `name`) VALUES (111, '2025-01-02 23:01:47', '第四期');
COMMIT;

-- ----------------------------
-- Table structure for problems
-- ----------------------------
DROP TABLE IF EXISTS `problems`;
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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of problems
-- ----------------------------
BEGIN;
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (26, '2024-12-25 21:51:22', '第一期数学', '数学', NULL, NULL, '郑凯文', 'uploads/1735134682747-undefined-problem_1.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (27, '2024-12-25 21:52:40', '第一期物理', '物理', 0, NULL, '姜川', 'uploads/1735134760918-undefined-problem_27.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (28, '2024-12-25 21:54:05', '第一期化学', '化学', 1, NULL, '张天泽', 'uploads/1735134845494-undefined-problem_28.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (29, '2024-12-25 21:55:03', '第一期生物', '生物', NULL, NULL, '刘润青', 'uploads/1735134903216-undefined-problem_29.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (30, '2024-12-25 21:55:54', '第一期信息', '信息', NULL, NULL, '陈雨翔、王泽昊', 'uploads/1735134954188-undefined-problem_30.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (31, '2024-12-25 22:01:36', '第二期数学', '数学', 1, NULL, '姜傲博', 'uploads/1735135296420-undefined-problem_31.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (32, '2024-12-25 22:02:26', '第二期物理', '物理', NULL, NULL, '王思筝', 'uploads/1735135346727-undefined-problem_32.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (33, '2024-12-25 22:03:15', '第二期化学', '化学', NULL, NULL, '张汉祥', 'uploads/1735135395796-undefined-problem_33.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (35, '2024-12-25 22:04:22', '第二期生物', '生物', NULL, NULL, '刘润青', 'uploads/1735135462864-undefined-problem_35.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (36, '2024-12-25 22:05:18', '第二期信息', '信息', 1, NULL, '施云浩', 'uploads/1735135518260-undefined-problem_36.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (37, '2024-12-29 21:29:26', '第三期数学', '数学', NULL, NULL, '郑凯文', 'uploads/1735478966904-undefined-problem_37.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (38, '2024-12-29 21:31:04', '第三期物理', '物理', NULL, NULL, '陶安泊', 'uploads/1735479064982-undefined-problem_38.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (39, '2024-12-29 21:31:50', '第三期化学', '化学', NULL, NULL, '张天泽', 'uploads/1735479110713-undefined-problem_39.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (41, '2024-12-29 21:34:46', '第三期生物', '生物', NULL, NULL, '廖欣妍', 'uploads/1735479286551-undefined-problem_41.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (42, '2024-12-29 21:36:26', '第三期信息', '信息', NULL, NULL, '陈雨翔、lky先生', 'uploads/1735479386335-undefined-problem_42.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (44, '2025-01-02 22:54:02', '第四期数学', '数学', NULL, NULL, '张潇瀚', 'uploads/1735829642291-Wangzehao2009-problem_43.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (45, '2025-01-02 22:55:39', '一代战神：“功臣号”', '物理', NULL, NULL, '马涵裕', 'uploads/1735829739331-Wangzehao2009-problem_45.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (46, '2025-01-02 22:56:45', '第四期化学', '化学', NULL, NULL, '庞凌熙', 'uploads/1735829805684-Wangzehao2009-problem_46.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (48, '2025-01-02 23:00:31', '第四期生物', '生物', NULL, NULL, '郑正', 'uploads/1735830031102-Wangzehao2009-problem_47.md');
INSERT INTO `problems` (`id`, `time`, `name`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (49, '2025-01-02 23:01:14', '第四期信息', '信息', NULL, NULL, '黄锦扬', 'uploads/1735830074219-Wangzehao2009-problem_49.md');
COMMIT;

-- ----------------------------
-- Table structure for submissions
-- ----------------------------
DROP TABLE IF EXISTS `submissions`;
CREATE TABLE `submissions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `issue_id` int NOT NULL,
  `problem_id` int NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `subject` varchar(255) DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of submissions
-- ----------------------------
BEGIN;
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`) VALUES (9, 16, 102, 31, '2024-12-31 13:54:21', '数学', 'uploads/1735624461168-16-image-1.png');
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`) VALUES (10, 16, 101, 28, '2024-12-31 13:54:34', '化学', 'uploads/1735624474292-16-reply.pdf');
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`) VALUES (11, 16, 102, 36, '2024-12-31 22:04:05', '信息', 'uploads/1735653845691-16-oi.md');
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
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
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `username`, `real_name`, `school`, `grade`, `phone`, `email`, `password`) VALUES (14, 'jzq', '季子谦', '北京师范大学附属中学', '9', '110', '114@514.com', '$2b$10$G4844T68NUJzyj0j87P/tO0bl2bKse260gFJ7VnQADeL4NBEgoyTK');
INSERT INTO `users` (`id`, `username`, `real_name`, `school`, `grade`, `phone`, `email`, `password`) VALUES (16, 'Wangzehao2009', '王泽昊', '北京师范大学附属实验中学', '10', '15101533710', '2896653446@qq.com', '$2b$10$jV1FOAki5siBZTt1D8W3a.Mjmx1vBrNduROrUVL3qVwMu.j/aWZe2');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
