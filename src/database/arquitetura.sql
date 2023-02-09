-- Active: 1675946335822@@127.0.0.1@3306

CREATE TABLE brands (
    id TEXT UNIQUE PRIMARY KEY NOT NULL,
    name TEXT UNIQUE NOT NULL
);

CREATE TABLE products (
    id TEXT UNIQUE PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    brand_id TEXT NOT NULL,
    FOREIGN KEY (brand_id) REFERENCES brands (id)
);

INSERT INTO brands (id, name)
VALUES
    ("b001", "Tio Jorge"),
    ("b002", "Camil"),
    ("b003", "Multilaser");

INSERT INTO products (id, name, price, brand_id)
VALUES
    ("p001", "Arroz", 29.99, "b001"),
    ("p002", "Feijão", 9.56, "b002"),
    ("p003", "Mouse", 30.00, "b003"),
    ("p004", "Teclado", 44.50, "b003"),
    ("p005", "Arroz", 26.99, "b002");