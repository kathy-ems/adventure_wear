/*
  Execute this file from the command line by typing:
  mysql -u root < app_server/schema.sql
  to create the database and the tables.
*/

/* This line needed if database already exists */
DROP DATABASE devlanguages;

CREATE DATABASE devlanguages;

USE devlanguages;

CREATE TABLE webInterfaces (
  interfaceId INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  interface text NOT NULL
);

CREATE TABLE languages (
  langId INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
  language TEXT NOT NULL,
  birthYear INTEGER(4),
  webInterfaceId INTEGER,
  FOREIGN KEY(webInterfaceId) REFERENCES webInterfaces(interfaceId)
);

INSERT INTO webInterfaces (interface) VALUES ('Front-end');
INSERT INTO webInterfaces (interface) VALUES ('Back-end');
INSERT INTO webInterfaces (interface) VALUES ('Front-end & Back-end');

INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('VBScript', 1996, 3);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('JavaScript', 1995, 3);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('Ruby', 1995, 2);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('PHP', 1995, 2);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('JAVA', 1995, 2);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('Perl', 1987, 2);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('ActionScript', 1998, 1);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('Typescript', 2012, 1);
INSERT INTO languages (language, birthYear, webInterfaceId) VALUES ('Python', 1991, 1);
