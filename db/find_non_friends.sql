SELECT * FROM users 
WHERE profileid NOT IN (
SELECT friendid
FROM friends
WHERE profileid = 1
)