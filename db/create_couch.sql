INSERT INTO couches 
(user_id,name,price,image)
VALUES
(${user_id},${name},${price},${image})
RETURNING *;