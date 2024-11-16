CREATE DATABASE guangfang;

USE guangfang;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    real_name VARCHAR(50) NOT NULL,
    school VARCHAR(100),
    grade VARCHAR(20),
    phone VARCHAR(20),
    email VARCHAR(100),
    password VARCHAR(255) NOT NULL
);

CREATE TABLE submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    submission_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    question_name VARCHAR(255),
    text_submission TEXT,
    file_submission VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);