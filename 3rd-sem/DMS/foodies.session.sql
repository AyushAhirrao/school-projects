-- -- for users on website
-- create table users
-- (
--     uId INT AUTO_INCREMENT PRIMARY KEY, 
--     name varchar(50), 
--     username varchar(20) , 
--     password varchar(50), 
--     email varchar(30), 
--     phone varchar(10), 
--      unique key(username)
-- );

-- -- Base querry
-- INSERT INTO ${table_name} VALUES(uId,'${req.body.name}','${req.body.username}','${req.body.password}','${req.body.email}','${req.body.phone}');

-- -- Examples
-- INSERT INTO users VALUES(uId, 'Tupe Vaibhavi', 'Vaibhavi', 'vaibhavi', 'vaibhavi@gmail.com', '097654321');
-- INSERT INTO users VALUES(uId, 'Ahirrao Ayush', 'ayush', 'ayush', 'ayush@gmail.com', '097654321');
-- INSERT INTO users VALUES(uId, 'Patil Shivani', 'shivani', 'shivani', 'shivani@gmail.com', '097654321');
-- INSERT INTO users VALUES(uId, 'Ahire Uday', 'uday', 'uday', 'uday@gmail.com', '097654321');


-- select * FROM users;


-- -- for food items (menu)
-- CREATE table foodItems
-- (
--     foodName varchar(20), 
--     foodDesc varchar(500), 
--     foodPrice varchar(5)
-- )

-- INSERT INTO foodItems VALUES ("Pasta", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore autem accusamus quasi maiores iste sint alias atque deleniti molestias.", "299")
-- INSERT INTO foodItems VALUES ("Pizza", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore autem accusamus quasi maiores iste sint alias atque deleniti molestias.", "499")
-- INSERT INTO foodItems VALUES ("Garlic Bread", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore autem accusamus quasi maiores iste sint alias atque deleniti molestias.", "399")
-- INSERT INTO foodItems VALUES ("Salad", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore autem accusamus quasi maiores iste sint alias atque deleniti molestias.", "199")
-- INSERT INTO foodItems VALUES ("Pan Cakes", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolore autem accusamus quasi maiores iste sint alias atque deleniti molestias.", "299")

-- select * from foodItems


-- -- for orders recived
-- CREATE TABLE orders
-- (
--     uId INT AUTO_INCREMENT PRIMARY KEY, 
--     uName varchar(100), 
--     uPhone varchar(10), 
--     uEmail varchar(100), 
--     foodItem varchar(100), 
--     foodQuantity varchar(10), 
--     uInstruction varchar(500), 
--     uAddress varchar(500), 
--     paymentMedhot varchar(100)
-- )
-- AUTO_INCREMENT = 1;

-- -- Base querry
-- INSERT INTO ${table_name} VALUES (uId,'${req.body.uName}', '${req.body.uPhone}', '${req.body.uEmail}', '${req.body.foodItem}', '${req.body.foodQuantity}', '${req.body.deliveryInstruction}', '${req.body.uAddress}', '${req.body.paymentOption}');

-- -- Examples
-- INSERT into orders VALUES (uId, "Ayush Ahirrao", "0987654321", "ayush@gmail.com", "Pasta", "3", NULL, "Demo address","Cash on delivery");
-- INSERT into orders VALUES (uId, "Uday Ahire ", "0987654321", "uday@gmail.com", "Pizza", "1", NULL, "Demo address","Cash on delivery");
-- INSERT into orders VALUES (uId, "Patil Shivani ", "0987654321", "shivani@gmail.com", "Pizza", "1", NULL, "Demo address","Cash on delivery");
-- INSERT into orders VALUES (uId, "Tupe Vaibhavi ", "0987654321", "vaibhavi@gmail.com", "Pan Cakes", "7", NULL, "Demo address","Cash on delivery");

-- select * from orders;
