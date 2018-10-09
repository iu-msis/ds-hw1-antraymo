DROP TABLE IF EXISTS hw1;

CREATE TABLE hw1 (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment VARCHAR (200) NOT NULL
);

INSERT INTO hw1 (id, comment)
VALUES (1, "This website is trash!");
INSERT INTO hw1 (id, comment)
VALUES (2, "I am neutral to this website");
INSERT INTO hw1 (id, comment)
VALUES (3, "I really like this website!");
