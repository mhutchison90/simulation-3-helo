SELECT * FROM users 
WHERE $2 = $3 -- eyecolor = 'brown'
AND
profileid NOT IN (
SELECT friendid
FROM friends
WHERE profileid = $1 --This parameter will be the current user's id
)