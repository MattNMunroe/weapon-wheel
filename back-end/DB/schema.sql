DROP DATABASE IF EXISTS weapon_wheel;
CREATE DATABASE weapon_wheel; 

\c weapon_wheel; 

CREATE TABLE weapon (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    origin TEXT,
    is_referenced BOOLEAN,
    notable_wielder BOOLEAN,
    description TEXT,
    image TEXT
);