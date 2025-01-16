CREATE DATABASE guangfang;

USE guangfang;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    real_name VARCHAR(50),
    school VARCHAR(100),
    grade VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(100),
    password VARCHAR(255) NOT NULL,
    admin BOOLEAN DEFAULT 0,
    hangman INT DEFAULT 0,
    gridGame INT DEFAULT 0,
    gameScore INT DEFAULT 0
);

CREATE TABLE submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    issue_id INT NOT NULL,
    problem_id INT NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    subject VARCHAR(255),
    file_path VARCHAR(255),
    is_excel_answer BOOLEAN DEFAULT 0
);

CREATE TABLE issues (
    id INT AUTO_INCREMENT PRIMARY KEY,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	name VARCHAR(255),
    visible BOOLEAN DEFAULT 0
);

CREATE TABLE problems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    subject VARCHAR(255),
    submit_num INT DEFAULT 0,
    score INT DEFAULT 0,
    author VARCHAR(255),
    visible BOOLEAN DEFAULT 0,
    file_path VARCHAR(255)
);

CREATE TABLE issue_problem_graph (
    issue_id INT,
    problem_id INT
);

CREATE TABLE announcements (
    id INT NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(50) NOT NULL,
    author VARCHAR(50),
    visible BOOLEAN DEFAULT 0,
    file_path VARCHAR(255) NOT NULL 
);