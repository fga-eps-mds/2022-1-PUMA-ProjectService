psql -U $user -d $db -f database/db_create.sql
psql -U $user -d $db -f database/db_populate.sql
