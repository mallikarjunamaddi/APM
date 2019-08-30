export interface IProduct {
    productID: number,
    name: string,
    code: string,
    available: string,
    price: number,
    starRating: number,
    imageURL: string
    description: string,
    category: string,
    tags: string[]
}

export interface IProductResolved {
    product: IProduct,
    error?: any
}

export interface IProductListResolved {
    products: IProduct[],
    error?: any
}

export class Product implements IProduct {
    productID: number;
    name: string;
    code: string;
    available: string;
    price: number;
    starRating: number;
    imageURL: string;
    description: string;
    category: string;
    tags: string[];
}