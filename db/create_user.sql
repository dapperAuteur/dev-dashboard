INSERT INTO users 
(auth0_id, email, name, picture)
VALUES
(${auth0_id}, ${email}, ${name}, ${picture})
RETURNING *;