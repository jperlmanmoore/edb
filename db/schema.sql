CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR (255) NOT NULL,
devoured boolean,
PRIMARY KEY (id)
);

-- separate file
SET SQL_SAFE_UPDATES = 0;

SELECT * FROM heroku_3b2e5fa92fe156f.burgers;

update heroku_3b2e5fa92fe156f.burgers
set devoured = 0;