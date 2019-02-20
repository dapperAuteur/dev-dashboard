DROP TABLE couches;
DROP TABLE users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  auth0_id TEXT NOT NULL,
  email TEXT NOT NULL,
  name TEXT NOT NULL,
  picture TEXT NOT NULL
);

CREATE TABLE couches (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  image TEXT NOT NULL
);

INSERT INTO couches 
(user_id, name, price, image)
VALUES
(1, 'Found underground', 100000000, 'http://www.sonomacountywaste.com/santa-rosa-junk-hauling/sofa-disposal-service-sebastopol-ca.jpg');

INSERT INTO couches (user_id, name, price, image) VALUES (1, 'Matt', 18000, 'http://www.arthitectural.com/wp-content/uploads/2011/07/ZHA_Scoop_02.jpg');

INSERT INTO couches (user_id, name, price, image) 
VALUES (1, 'Couch Room', 1000000, 'http://shabbychictips.com/wp-content/uploads/new-most-expensive-couch-51-modern-sofa-inspiration-with-most-the-most-expensive-sofa.jpg');

insert into couches (user_id, name, price, image) values 
(1, 'Beavis and Butthead Couch', 999, 'https://cdn.shopify.com/s/files/1/1866/9029/products/24726742_10159764300220338_177485946_n_1024x1024.jpg?v=1531805243');

insert into couches (user_id, name, price, image) values (1, 'destroyed couch', 333, 'https://i.dailymail.co.uk/i/pix/2016/09/14/10/3856283800000578-3788777-image-a-31_1473846602036.jpg');

insert into couches (user_id, name, price, image) values (1, 'Futurama', 999, 'https://vignette.wikia.nocookie.net/simpsons/images/4/44/Hedonismbot.png/revision/latest?cb=20170705175512');

insert into couches (user_id, name, price, image) values
(1, 'Simpsons couch', 999, 'https://vignette.wikia.nocookie.net/simpsons/images/a/ae/Homer_Scissorhands_%28Intro%29_1.JPG/revision/latest?cb=20130701205745');

insert into couches(user_id, name, price, image)
values
(1, 'Pig Couch', 1000000, 'https://cutithai.com/wp-content/uploads/strange-furniture-inspired-animals-strangeline_57024-620x350.jpg');

insert into couches
(user_id, name, price, image)
values
(1, 'rilakumma', 100000, 'https://kawaiicase.files.wordpress.com/2013/11/rilakkuma-sofa.jpg');

insert into couches (user_id, name, price, image)
values (1, 'Friends Couch', 5000, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hb-friends-couch-1-1529331692.jpg');