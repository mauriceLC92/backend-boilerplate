
DROP DATABASE IF EXISTS boilerplate;

CREATE DATABASE boilerplate;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE tariffs (
  id uuid UNIQUE DEFAULT uuid_generate_v4 (),
  country text,
  x CHAR (1),
  y VARCHAR (10),
  z TEXT
);
