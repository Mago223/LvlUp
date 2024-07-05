/**
 * This file can be used to represent mock schema and tables to provide an overall general structure of the data that will be stored in the backend and also used in the frontend
 * Michael-Andre Odusami
 */


CREATE TABLE "user"(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)