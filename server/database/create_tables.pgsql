DROP TABLE IF EXISTS users;

CREATE TABLE IF NOT EXISTS
    "users" (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        full_name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        height_cm INTEGER,
        weight_kg NUMERIC(5, 2),
        xp INTEGER DEFAULT 0,
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
