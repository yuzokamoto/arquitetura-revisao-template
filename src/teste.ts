const productDB = {
    "id": "p001",
    "name": "Arroz",
    "price": 29.99,
    "brand_id": "b001"
}

const product = {
    "id": "p005",
    "name": "Arroz",
    "price": 26.99,
    "brand": {
        "id": "b001",
        "name": "Tio Jorge"
    }
}

const postman = {
    "products": [
        {
            "id": "p001",
            "name": "Arroz",
            "price": 29.99,
            "brand": {
                "id": "b001",
                "name": "Tio Jorge"
            },
        },
        {
            "id": "p002",
            "name": "Feijão",
            "price": 9.56,
            "brand": {
                "id": "b002",
                "name": "Camil"
            },
        },
        {
            "id": "p003",
            "name": "Mouse",
            "price": 30,
            "brand": {
                "id": "b003",
                "name": "Multilaser"
            }
        },
        {
            "id": "p004",
            "name": "Teclado",
            "price": 44.5,
            "brand_id": "b003"
        },
        {
            "id": "p005",
            "name": "Arroz",
            "price": 26.99,
            "brand_id": "b002"
        }
    ],
    "brands": [
        {
            "id": "b001",
            "name": "Tio Jorge"
        },
        {
            "id": "b002",
            "name": "Camil"
        },
        {
            "id": "b003",
            "name": "Multilaser"
        }
    ]
}