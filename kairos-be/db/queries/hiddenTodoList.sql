SELECT * FROM todos
WHERE ticked = true AND tickedTime < NOW() - INTERVAL 5 MINUTE
ORDER BY tickedTime DESC
LIMIT 20 OFFSET {offset};