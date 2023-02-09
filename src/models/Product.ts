import { ProductDB, ProductModel } from "../types";

export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number,
        private brand: {
            id: string;
            name: string;
        }
    ) {}

    public toDBModel(): ProductDB {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            brand_id: this.brand.id
        }
    }

    public toBusinessModel(): ProductModel {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            brand: this.brand
        }
    }

    public getId(): string {
        return this.id
    }

    public setId(value: string) {
        this.id = value
    }

    public getName(): string {
        return this.name
    }

    public setName(value: string) {
        this.name = value
    }

    public getPrice(): number {
        return this.price
    }

    public setPrice(value: number) {
        this.price = value
    }

    public getBrand(): {
        id: string
        name: string
    } {
        return this.brand
    }

    public setBrand(value: {
        id: string
        name: string
    }) {
        this.brand = value;
    }
}