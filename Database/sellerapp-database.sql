
CREATE DATABASE  IF NOT EXISTS `seller_directory`;
USE `seller_directory`;

DROP TABLE IF EXISTS `sellers`;

CREATE TABLE `sellers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name`varchar(255) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `review` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

INSERT INTO sellers (name, rating, review) VALUES
('Asif', 5, 'Great service..'),
('Kiran', 4, 'Good quality all products.'),
('Sathish', 3, 'Average'),
('Priya', 5, 'Excellent customer support!'),
('Ramesh', 4, 'Prompt delivery, good products.'),
('Divya', 5, 'Highly recommended!'),
('Arjun', 3, 'Could improve packaging.'),
('Sneha', 4, 'Nice collection of items.'),
('Rahul', 5, 'Outstanding experience!'),
('Vishal', 2, 'Not happy with the delivery.'),
('Neha', 4, 'Good service, worth the price.'),
('Aditi', 3, 'Quality is okay.'),
('Manoj', 5, 'Fast delivery and great service.');

select * from sellers;
