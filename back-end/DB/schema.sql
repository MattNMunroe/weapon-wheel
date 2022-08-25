DROP DATABASE IF EXISTS weapon wheel;
CREATE DATABASE weapon wheel; 

\c weapon wheel; 

CREATE TABLE weapon (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    origin TEXT,
    is_referenced BOOLEAN,
    notable_wielder BOOLEAN,
    description TEXT,
    image TEXT
);