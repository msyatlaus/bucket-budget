DROP DATABASE IF EXISTS budget_bucket_db;
CREATE DATABASE budget_bucket_db;
USE budget_bucket_db;
CREATE TABLE users(
  id INT AUTO_INCREMENT NOT NULL,
  username VARCHAR(255) NOT NULL,
  pin_hash VARCHAR(255) NOT NULL,
  salt VARCHAR(16) NOT NULL,
  created TIMESTAMP NOT NULL,
  updated TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE events(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  date_time DATETIME,
  users_id INT NOT NULL,
  created TIMESTAMP NOT NULL,
  updated TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE budget_items(
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  users_id INT NOT NULL,
  events_id INT,
  created TIMESTAMP NOT NULL,
  updated TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);