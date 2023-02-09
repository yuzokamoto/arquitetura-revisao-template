export interface ProductDB {
    id: string,
    name: string,
    price: number,
    brand_id: string
}

export interface ProductBrand {
    id: string,
    name: string
}

export interface ProductModel {
    id: string,
    name: string,
    price: number,
    brand: {
        id: string,
        name: string
    }
}
