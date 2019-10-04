DROP TABLE IF EXISTS task;

CREATE TABLE task (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  title VARCHAR(128) NOT NULL,
  description VARCHAR(512) NOT NULL,
  created_date TIMESTAMP DEFAULT NULL
);

INSERT INTO task (title, description, created_date) VALUES
  ('Task 1', 'La tarea numero 01', NOW());
