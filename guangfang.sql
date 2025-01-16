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

 Date: 16/01/2025 18:32:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for announcements
-- ----------------------------
DROP TABLE IF EXISTS `announcements`;
CREATE TABLE `announcements` (
  `id` int NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `name` varchar(50) NOT NULL,
  `author` varchar(50) DEFAULT NULL,
  `visible` tinyint(1) DEFAULT '0',
  `file_path` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of announcements
-- ----------------------------
BEGIN;
INSERT INTO `announcements` (`id`, `time`, `name`, `author`, `visible`, `file_path`) VALUES (1, '2025-01-11 19:28:42', '广学五题坊评分机制', 'Wangzehao2009', 1, 'uploads/announcement.md');
COMMIT;

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
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (115, 50);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (115, 51);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (115, 52);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (115, 53);
INSERT INTO `issue_problem_graph` (`issue_id`, `problem_id`) VALUES (115, 54);
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
  `visible` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of issues
-- ----------------------------
BEGIN;
INSERT INTO `issues` (`id`, `time`, `name`, `visible`) VALUES (101, '2024-12-25 21:57:19', '第一期', 1);
INSERT INTO `issues` (`id`, `time`, `name`, `visible`) VALUES (102, '2024-12-25 22:05:33', '第二期', 1);
INSERT INTO `issues` (`id`, `time`, `name`, `visible`) VALUES (108, '2024-12-31 16:01:15', '第三期', 1);
INSERT INTO `issues` (`id`, `time`, `name`, `visible`) VALUES (111, '2025-01-02 23:01:47', '第四期', 1);
INSERT INTO `issues` (`id`, `time`, `name`, `visible`) VALUES (115, '2025-01-06 20:22:31', '第五期', 1);
COMMIT;

-- ----------------------------
-- Table structure for problems
-- ----------------------------
DROP TABLE IF EXISTS `problems`;
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
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of problems
-- ----------------------------
BEGIN;
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (26, '2024-12-25 21:51:22', '第一期数学', 1, '数学', 0, 0, '郑凯文', 'uploads/1735134682747-undefined-problem_1.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (27, '2024-12-25 21:52:40', '第一期物理', 1, '物理', 1, 0, '姜川', 'uploads/1735134760918-undefined-problem_27.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (28, '2024-12-25 21:54:05', '第一期化学', 1, '化学', 2, 0, '张天泽', 'uploads/1735134845494-undefined-problem_28.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (29, '2024-12-25 21:55:03', '第一期生物', 1, '生物', 0, 0, '刘润青', 'uploads/1735134903216-undefined-problem_29.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (30, '2024-12-25 21:55:54', '第一期信息', 1, '信息', 0, 0, '陈雨翔、王泽昊', 'uploads/1735134954188-undefined-problem_30.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (31, '2024-12-25 22:01:36', '第二期数学', 1, '数学', 1, 0, '姜傲博', 'uploads/1735135296420-undefined-problem_31.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (32, '2024-12-25 22:02:26', '第二期物理', 1, '物理', 0, 0, '王思筝', 'uploads/1735135346727-undefined-problem_32.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (33, '2024-12-25 22:03:15', '第二期化学', 1, '化学', 0, 0, '张汉祥', 'uploads/1735135395796-undefined-problem_33.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (35, '2024-12-25 22:04:22', '第二期生物', 1, '生物', 0, 0, '刘润青', 'uploads/1735135462864-undefined-problem_35.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (36, '2024-12-25 22:05:18', '第二期信息', 1, '信息', 1, 0, '施云浩', 'uploads/1735135518260-undefined-problem_36.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (37, '2024-12-29 21:29:26', '第三期数学', 1, '数学', 2, 0, '郑凯文', 'uploads/1735478966904-undefined-problem_37.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (38, '2024-12-29 21:31:04', '第三期物理', 1, '物理', 0, 0, '陶安泊', 'uploads/1735479064982-undefined-problem_38.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (39, '2024-12-29 21:31:50', '第三期化学', 1, '化学', 0, 0, '张天泽', 'uploads/1735479110713-undefined-problem_39.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (41, '2024-12-29 21:34:46', '第三期生物', 1, '生物', 1, 0, '廖欣妍', 'uploads/1735479286551-undefined-problem_41.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (42, '2024-12-29 21:36:26', '第三期信息', 1, '信息', 1, 0, '陈雨翔、lky先生', 'uploads/1735479386335-undefined-problem_42.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (44, '2025-01-02 22:54:02', '第四期数学', 1, '数学', 2, 0, '张潇瀚', 'uploads/1735829642291-Wangzehao2009-problem_43.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (45, '2025-01-02 22:55:39', '一代战神：“功臣号”', 1, '物理', 1, 0, '马涵裕', 'uploads/1735829739331-Wangzehao2009-problem_45.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (46, '2025-01-02 22:56:45', '第四期化学', 1, '化学', 1, 0, '庞凌熙', 'uploads/1735829805684-Wangzehao2009-problem_46.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (48, '2025-01-02 23:00:31', '第四期生物', 1, '生物', 1, 0, '郑正', 'uploads/1735830031102-Wangzehao2009-problem_47.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (49, '2025-01-02 23:01:14', '第四期信息', 1, '信息', 0, 0, '黄锦扬', 'uploads/1735830074219-Wangzehao2009-problem_49.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (50, '2025-01-06 20:13:17', '第五期数学', 1, '数学', 0, 0, '张潇瀚', 'uploads/1736165597342-16-problem_50.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (51, '2025-01-06 20:14:26', 'jc 的水壶空了', 1, '物理', 0, 0, '段旭升', 'uploads/1736165666673-16-problem_51.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (52, '2025-01-06 20:14:45', '第五期化学', 1, '化学', 0, 0, '张鑫雨', 'uploads/1736165685781-16-problem_52.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (53, '2025-01-06 20:14:56', '米式方程', 1, '生物', 0, 0, '刘季涵', 'uploads/1736165696946-16-problem_53.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (54, '2025-01-06 20:15:12', '矩形加矩形求和', 1, '信息', 0, 0, '王泽昊', 'uploads/1736165712438-16-problem_54.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (65, '2025-01-07 21:47:25', '第六期数学', 1, '数学', 0, 0, '张潇瀚', 'uploads/problem_55.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (66, '2025-01-07 21:48:00', '第六期物理', 1, '物理', 0, 0, '张宸睿', 'uploads/problem_66.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (67, '2025-01-07 21:48:53', '第六期化学', 1, '化学', 0, 0, '余东耕', 'uploads/problem_67.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (68, '2025-01-07 21:53:06', '第六期生物', 1, '生物', 0, 0, '刘润清', 'uploads/problem_68.md');
INSERT INTO `problems` (`id`, `time`, `name`, `visible`, `subject`, `submit_num`, `score`, `author`, `file_path`) VALUES (69, '2025-01-07 21:56:27', '开胃菜', 1, '信息', 0, 0, '董一瑄、李星成', 'uploads/problem_69.md');
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
  `is_excel_answer` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of submissions
-- ----------------------------
BEGIN;
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (9, 16, 102, 31, '2024-12-31 13:54:21', '数学', 'uploads/1735624461168-16-image-1.png', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (10, 16, 101, 28, '2024-12-31 13:54:34', '化学', 'uploads/1735624474292-16-reply.pdf', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (11, 16, 102, 36, '2024-12-31 22:04:05', '信息', 'uploads/1735653845691-16-oi.md', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (12, 16, 111, 44, '2025-01-04 19:40:15', '数学', 'uploads/1735990815244-16-[Sqrt5+Round+2]+题解.pdf', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (13, 16, 111, 48, '2025-01-05 23:04:03', '生物', 'uploads/1736089443490-16-0506-WuChengKun.pdf', 1);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (14, 16, 101, 27, '2025-01-06 18:39:03', '物理', 'uploads/1736159943714-16-[Sqrt5+Round+2]+题解.pdf', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (15, 17, 111, 45, '2025-01-06 19:10:36', '物理', 'uploads/1736161836872-17-2_17_3a549f5a704ffef73694103eaecd416.png', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (16, 17, 111, 46, '2025-01-06 19:52:21', '化学', 'uploads/1736164341399-17-tree1.in', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (17, 17, 108, 42, '2025-01-06 19:52:40', '信息', 'uploads/1736164360635-17-17_17_五题week2OI.pdf', 1);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (18, 17, 108, 41, '2025-01-06 19:53:22', '生物', 'uploads/1736164402360-17-6_17_五题week3OI.pdf', 1);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (19, 17, 108, 37, '2025-01-06 19:53:42', '数学', 'uploads/1736164422380-17-[Round+2]+solution', 0);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (20, 18, 111, 44, '2025-01-06 20:01:37', '数学', 'uploads/1736164897261-18-题目得分率对比.png', 1);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (23, 18, 108, 37, '2025-01-06 20:05:40', '数学', 'uploads/1736165140006-18-2_17_3a549f5a704ffef73694103eaecd416.png', NULL);
INSERT INTO `submissions` (`id`, `user_id`, `issue_id`, `problem_id`, `time`, `subject`, `file_path`, `is_excel_answer`) VALUES (24, 18, 101, 28, '2025-01-06 20:08:50', '化学', 'uploads/1736165330799-18-[Sqrt5+Round+2]+题解.pdf', NULL);
COMMIT;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` (`id`, `username`, `admin`, `real_name`, `school`, `grade`, `phone`, `email`, `password`, `hangman`, `gridGame`, `gameScore`) VALUES (14, 'jzq', 1, '季子谦', '北京师范大学附属中学', '9', '110', '114@514.com', '$2b$10$G4844T68NUJzyj0j87P/tO0bl2bKse260gFJ7VnQADeL4NBEgoyTK', 0, 0, 0);
INSERT INTO `users` (`id`, `username`, `admin`, `real_name`, `school`, `grade`, `phone`, `email`, `password`, `hangman`, `gridGame`, `gameScore`) VALUES (16, 'Wangzehao2009', 1, '王泽昊', '北京师范大学附属实验中学', '10', '15101533710', '2896653446@qq.com', '$2b$10$jV1FOAki5siBZTt1D8W3a.Mjmx1vBrNduROrUVL3qVwMu.j/aWZe2', 7, 6.777777777777778, 13.777777777777779);
INSERT INTO `users` (`id`, `username`, `admin`, `real_name`, `school`, `grade`, `phone`, `email`, `password`, `hangman`, `gridGame`, `gameScore`) VALUES (17, 'bot1', 0, 'bot1', '北京师范大学附属实验中学', '1', '1', '111@1.com', '$2b$10$WoXnsW/paHlRmc0/ZuoDH.vVx7KDD1HqADrRihkPRdpFJFYfTG7EG', 0, 8.555555555555555, 8.555555555555555);
INSERT INTO `users` (`id`, `username`, `admin`, `real_name`, `school`, `grade`, `phone`, `email`, `password`, `hangman`, `gridGame`, `gameScore`) VALUES (18, 'bot2', 0, 'bot2', '1', '1', '1', '1212@111.com', '$2b$10$.BM.n56xjIah1d2bRrRonu0zN7XaE..0rHUKLmERkcT7HEAlVNN4e', 0, 0, 0);
INSERT INTO `users` (`id`, `username`, `admin`, `real_name`, `school`, `grade`, `phone`, `email`, `password`, `hangman`, `gridGame`, `gameScore`) VALUES (19, 'bot3', 0, 'bot3', '1', '1', '1', '111@1.com', '$2b$10$mBGTlXksAbqAYQd9.PqgUeFZh4UCoLY0NJh7eT3yiO1.7C3jmL.Bq', 0, 0, 0);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
