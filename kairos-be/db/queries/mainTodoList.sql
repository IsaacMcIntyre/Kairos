SELECT * FROM todos
WHERE ticked = false
   OR (ticked = true AND "tickedTime" >= NOW() - INTERVAL '5 minutes')
ORDER BY
   CASE WHEN ticked = false THEN "creationTime" END ASC,
   CASE WHEN ticked = true THEN "tickedTime" END DESC;
