---
title: PostgreSQL
background: bg-[#3d6488]
tags:
  - DB
  - RDBMS
categories:
  - Database
date: 2021-01-11 14:19:24
intro: |
  The [PostgreSQL](https://www.postgresql.org/docs/current/) cheat sheet provides you with the common PostgreSQL commands and statements.
plugins:
  - copyCode
---

## Getting Started

### Getting started

Switch and connect

```shell script
$ sudo -u postgres psql
```

List all databases

```shell script
postgres=# \l
```

Connect to the database named postgres

```shell script
postgres=# \c postgres
```

Disconnect

```shell script
postgres=# \q
postgres=# \!
```

### psql commands {.col-span-2}

| Option              | Example                                      | Description                    |
| ------------------- | -------------------------------------------- | :----------------------------- |
| `[-d] <database>`   | psql -d mydb                                 | Connecting to database         |
| `-U`                | psql -U john mydb                            | Connecting as a specific user  |
| `-h` `-p`           | psql -h localhost -p 5432 mydb               | Connecting to a host/port      |
| `-U` `-h` `-p` `-d` | psql -U admin -h 192.168.1.5 -p 2506 -d mydb | Connect remote PostgreSQL      |
| `-W`                | psql -W mydb                                 | Force password                 |
| `-c`                | psql -c '\c postgres' -c '\dt'               | Execute a SQL query or command |
| `-H`                | psql -c "\l+" -H postgres > database.html    | Generate HTML report           |
| `-l`                | psql -l                                      | List all databases             |
| `-f`                | psql mydb -f file.sql                        | Execute commands from a file   |
| `-V`                | psql -V                                      | Print the psql version         |

{.show-header}

### Getting help

| -           | -                              |
| ----------- | :----------------------------- |
| `\h`        | Help on syntax of SQL commands |
| `\h` DELETE | DELETE SQL statement syntax    |
| `\?`        | List of PostgreSQL command     |

Run in PostgreSQL console

## PostgreSQL Working

### Recon

Show version

```
SHOW SERVER_VERSION;
```

Show system status

```sql {.wrap}
\conninfo
```

Show environmental variables

```sql {.wrap}
SHOW ALL;
```

List users

```sql {.wrap}
SELECT rolname FROM pg_roles;
```

Show current user

```sql {.wrap}
SELECT current_user;
```

Show current user's permissions

```
\du
```

Show current database

```sql {.wrap}
SELECT current_database();
```

Show all tables in database

```sql {.wrap}
\dt
```

List functions

```sql {.wrap}
\df <schema>
```

### Databases

List databases

```sql {.wrap}
\l
```

Connect to database

```sql {.wrap}
\c <database_name>
```

Show current database

```sql {.wrap}
SELECT current_database();
```

[Create database](http://www.postgresql.org/docs/current/static/sql-createdatabase.html)

```sql {.wrap}
CREATE DATABASE <database_name> WITH OWNER <username>;
```

[Drop database](http://www.postgresql.org/docs/current/static/sql-dropdatabase.html)

```sql {.wrap}
DROP DATABASE IF EXISTS <database_name>;
```

[Rename database](http://www.postgresql.org/docs/current/static/sql-alterdatabase.html)

```sql {.wrap}
ALTER DATABASE <old_name> RENAME TO <new_name>;
```

### Tables

List tables, in current db

```sql {.wrap}
\dt

SELECT table_schema,table_name FROM information_schema.tables ORDER BY table_schema,table_name;
```

List tables, globally

```sql {.wrap}
\dt *.*.

SELECT * FROM pg_catalog.pg_tables
```

List table schema

```sql {.wrap}
\d <table_name>
\d+ <table_name>

SELECT column_name, data_type, character_maximum_length
FROM INFORMATION_SCHEMA.COLUMNS
WHERE table_name = '<table_name>';
```

[Create table](http://www.postgresql.org/docs/current/static/sql-createtable.html)

```sql {.wrap}
CREATE TABLE <table_name>(
  <column_name> <column_type>,
  <column_name> <column_type>
);
```

Create table, with an auto-incrementing primary key

```sql {.wrap}
CREATE TABLE <table_name> (
  <column_name> SERIAL PRIMARY KEY
);
```

[Delete table](http://www.postgresql.org/docs/current/static/sql-droptable.html)

```sql {.wrap}
DROP TABLE IF EXISTS <table_name> CASCADE;
```

### Permissions

Become the postgres user, if you have permission errors

```shell
sudo su - postgres
psql
```

[Grant](http://www.postgresql.org/docs/current/static/sql-grant.html) all permissions on database

```sql {.wrap}
GRANT ALL PRIVILEGES ON DATABASE <db_name> TO <user_name>;
```

Grant connection permissions on database

```sql {.wrap}
GRANT CONNECT ON DATABASE <db_name> TO <user_name>;
```

Grant permissions on schema

```sql {.wrap}
GRANT USAGE ON SCHEMA public TO <user_name>;
```

Grant permissions to functions

```sql {.wrap}
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO <user_name>;
```

Grant permissions to select, update, insert, delete, on a all tables

```sql {.wrap}
GRANT SELECT, UPDATE, INSERT ON ALL TABLES IN SCHEMA public TO <user_name>;
```

Grant permissions, on a table

```sql {.wrap}
GRANT SELECT, UPDATE, INSERT ON <table_name> TO <user_name>;
```

Grant permissions, to select, on a table

```sql {.wrap}
GRANT SELECT ON ALL TABLES IN SCHEMA public TO <user_name>;
```

### Columns

[Add column](http://www.postgresql.org/docs/current/static/sql-altertable.html)

```sql {.wrap}
ALTER TABLE <table_name> IF EXISTS
ADD <column_name> <data_type> [<constraints>];
```

Update column

```sql {.wrap}
ALTER TABLE <table_name> IF EXISTS
ALTER <column_name> TYPE <data_type> [<constraints>];
```

Delete column

```sql {.wrap}
ALTER TABLE <table_name> IF EXISTS
DROP <column_name>;
```

Update column to be an auto-incrementing primary key

```sql {.wrap}
ALTER TABLE <table_name>
ADD COLUMN <column_name> SERIAL PRIMARY KEY;
```

Insert into a table, with an auto-incrementing primary key

```sql {.wrap}
INSERT INTO <table_name>
VALUES (DEFAULT, <value1>);


INSERT INTO <table_name> (<column1_name>,<column2_name>)
VALUES ( <value1>,<value2> );
```

### Data

[Select](http://www.postgresql.org/docs/current/static/sql-select.html) all data

```sql {.wrap}
SELECT * FROM <table_name>;
```

Read one row of data

```sql {.wrap}
SELECT * FROM <table_name> LIMIT 1;
```

Search for data

```sql {.wrap}
SELECT * FROM <table_name> WHERE <column_name> = <value>;
```

[Insert](http://www.postgresql.org/docs/current/static/sql-insert.html) data

```sql {.wrap}
INSERT INTO <table_name> VALUES( <value_1>, <value_2> );
```

[Update](http://www.postgresql.org/docs/current/static/sql-update.html) data

```sql {.wrap}
UPDATE <table_name>
SET <column_1> = <value_1>, <column_2> = <value_2>
WHERE <column_1> = <value>;
```

[Delete](http://www.postgresql.org/docs/current/static/sql-delete.html) all data

```sql {.wrap}
DELETE FROM <table_name>;
```

Delete specific data

```sql {.wrap}
DELETE FROM <table_name>
WHERE <column_name> = <value>;
```

### Users

List roles

```sql {.wrap}
SELECT rolname FROM pg_roles;
```

[Create user](http://www.postgresql.org/docs/current/static/sql-createuser.html)

```sql {.wrap}
CREATE USER <user_name> WITH PASSWORD '<password>';
```

[Drop user](http://www.postgresql.org/docs/current/static/sql-dropuser.html)

```sql {.wrap}
DROP USER IF EXISTS <user_name>;
```

[Alter](http://www.postgresql.org/docs/current/static/sql-alterrole.html) user password

```sql {.wrap}
ALTER ROLE <user_name> WITH PASSWORD '<password>';
```

### Schema

List schemas

```sql {.wrap}
\dn

SELECT schema_name FROM information_schema.schemata;

SELECT nspname FROM pg_catalog.pg_namespace;
```

[Create schema](http://www.postgresql.org/docs/current/static/sql-createschema.html)

```sql {.wrap}
CREATE SCHEMA IF NOT EXISTS <schema_name>;
```

[Drop schema](http://www.postgresql.org/docs/current/static/sql-dropschema.html)

```sql {.wrap}
DROP SCHEMA IF EXISTS <schema_name> CASCADE;
```

### Dates

Show [current date](https://www.postgresql.org/docs/15/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT) YYYY-MM-DD

```sql {.wrap}
SELECT current_date;
```

Calculate
[age](<https://www.postgresql.org/docs/15/functions-datetime.html#:~:text=age%20(%20timestamp%2C%20timestamp%20)%20%E2%86%92%20interval>)
between two dates

```sql {.wrap}
SELECT age(timestamp, timestamp);
```

Show [current time](https://www.postgresql.org/docs/15/functions-datetime.html#FUNCTIONS-DATETIME-CURRENT) with time
zone

```sql {.wrap}
SELECT current_time;
```

[Make](<https://www.postgresql.org/docs/15/functions-datetime.html#:~:text=make_date%20(%20year%20int%2C%20month%20int%2C%20day%20int%20)%20%E2%86%92%20date>)
dates using integers

```sql {.wrap}
SELECT make_date(2021,03,25);
```

## PostgreSQL Commands

### Tables

| -                | -                               |
| ---------------- | :------------------------------ |
| `\d <table>`     | Describe table                  |
| `\d+ <table>`    | Describe table with details     |
| `\dt`            | List tables from current schema |
| `\dt *.*`        | List tables from all schemas    |
| `\dt <schema>.*` | List tables for a schema        |
| `\dp`            | List table access privileges    |
| `\det[+]`        | List foreign tables             |

### Query buffer

| -            | -                                  |
| ------------ | :--------------------------------- |
| `\e [FILE]`  | Edit the query buffer (or file)    |
| `\ef [FUNC]` | Edit function definition           |
| `\p`         | Show the contents                  |
| `\r`         | Reset (clear) the query buffer     |
| `\s [FILE]`  | Display history or save it to file |
| `\w FILE`    | Write query buffer to file         |

### Informational {.row-span-4}

| -               | -                               |
| --------------- | :------------------------------ |
| `\l[+]`         | List all databases              |
| `\dn[S+]`       | List schemas                    |
| `\di[S+]`       | List indexes                    |
| `\du[+]`        | List roles                      |
| `\ds[S+]`       | List sequences                  |
| `\df[antw][S+]` | List functions                  |
| `\deu[+]`       | List user mappings              |
| `\dv[S+]`       | List views                      |
| `\dl`           | List large objects              |
| `\dT[S+]`       | List data types                 |
| `\da[S]`        | List aggregates                 |
| `\db[+]`        | List tablespaces                |
| `\dc[S+]`       | List conversions                |
| `\dC[+]`        | List casts                      |
| `\ddp`          | List default privileges         |
| `\dd[S]`        | Show object descriptions        |
| `\dD[S+]`       | List domains                    |
| `\des[+]`       | List foreign servers            |
| `\dew[+]`       | List foreign-data wrappers      |
| `\dF[+]`        | List text search configurations |
| `\dFd[+]`       | List text search dictionaries   |
| `\dFp[+]`       | List text search parsers        |
| `\dFt[+]`       | List text search templates      |
| `\dL[S+]`       | List procedural languages       |
| `\do[S]`        | List operators                  |
| `\dO[S+]`       | List collations                 |
| `\drds`         | List per-database role settings |
| `\dx[+]`        | List extensions                 |

`S`: show system objects, `+`: additional detail

### Connection

| -                      | -                           |
| ---------------------- | :-------------------------- |
| `\c [DBNAME]`          | Connect to new database     |
| `\encoding [ENCODING]` | Show or set client encoding |
| `\password [USER]`     | Change the password         |
| `\conninfo`            | Display information         |

### Formatting

| -                         | -                                          |
| ------------------------- | :----------------------------------------- |
| `\a`                      | Toggle between unaligned and aligned       |
| `\C [STRING]`             | Set table title, or unset if none          |
| `\f [STRING]`             | Show or set field separator for unaligned  |
| `\H`                      | Toggle HTML output mode                    |
| <code>\t [on\|off]</code> | Show only rows                             |
| `\T [STRING]`             | Set or unset HTML \<table\> tag attributes |
| <code>\x [on\|off]</code> | Toggle expanded output                     |

### Input/Output

| -                 | -                                                              |
| ----------------- | :------------------------------------------------------------- |
| `\copy ...`       | Import/export table<br> _See also:_ [copy](#import-export-csv) |
| `\echo [STRING]`  | Print string                                                   |
| `\i FILE`         | Execute file                                                   |
| `\o [FILE]`       | Export all results to file                                     |
| `\qecho [STRING]` | String to output stream                                        |

### Variables

| -                     | -                                             |
| --------------------- | :-------------------------------------------- |
| `\prompt [TEXT] NAME` | Set variable                                  |
| `\set [NAME [VALUE]]` | Set variable _(or list all if no parameters)_ |
| `\unset NAME`         | Delete variable                               |

### Misc

| -                              | -                    |
| ------------------------------ | :------------------- |
| `\cd [DIR]`                    | Change the directory |
| <code>\timing [on\|off]</code> | Toggle timing        |
| `\! [COMMAND]`                 | Execute in shell     |
| `\! ls -l`                     | List all in shell    |

### Large Objects

- `\lo_export LOBOID FILE`
- `\lo_import FILE [COMMENT]`
- `\lo_list`
- `\lo_unlink LOBOID`

{.marker-none}

## Miscellaneous

### Backup

Use pg_dumpall to backup all databases

```shell script
$ pg_dumpall -U postgres > all.sql
```

Use pg_dump to backup a database

```shell script
$ pg_dump -d mydb -f mydb_backup.sql
```

| -    | -                                              |
| ---- | :--------------------------------------------- |
| `-a` | Dump only the data, not the schema             |
| `-s` | Dump only the schema, no data                  |
| `-c` | Drop database before recreating                |
| `-C` | Create database before restoring               |
| `-t` | Dump the named table(s) only                   |
| `-F` | Format (`c`: custom, `d`: directory, `t`: tar) |

Use `pg_dump -?` to get the full list of options

### Restore

Restore a database with psql

```shell script
$ psql -U user mydb < mydb_backup.sql
```

Restore a database with pg_restore

```shell script
$ pg_restore -d mydb mydb_backup.sql -c
```

| -    | -                                                                            |
| ---- | :--------------------------------------------------------------------------- |
| `-U` | Specify a database user                                                      |
| `-c` | Drop database before recreating                                              |
| `-C` | Create database before restoring                                             |
| `-e` | Exit if an error has encountered                                             |
| `-F` | Format (`c`: custom, `d`: directory, `t`: tar, `p`: plain text sql(default)) |

{.marker-none}

Use `pg_restore -?` to get the full list of options

### Remote access

Get location of postgresql.conf

```shell script
$ psql -U postgres -c 'SHOW config_file'
```

Append to postgresql.conf

```shell script
listen_addresses = '*'
```

Append to pg_hba.conf (Same location as postgresql.conf)

```shell script
host  all  all  0.0.0.0/0  md5
host  all  all  ::/0       md5
```

Restart PostgreSQL server

```shell script
$ sudo systemctl restart postgresql
```

### Import/Export CSV

Export table into CSV file

```shell script
\copy table TO '<path>' CSV
\copy table(col1,col1) TO '<path>' CSV
\copy (SELECT...) TO '<path>' CSV
```

Import CSV file into table

```shell script
\copy table FROM '<path>' CSV
\copy table(col1,col1) FROM '<path>' CSV
```

See also: [Copy](https://www.postgresql.org/docs/current/sql-copy.html)

## Also see

- [Posgres-cheatsheet](https://gist.github.com/apolloclark/ea5466d5929e63043dcf#posgres-cheatsheet) _(gist.github.com)_
