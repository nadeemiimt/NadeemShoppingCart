import {Product} from '../product/product';
export interface CartItem {
    product: Product;
    count: number;
    amount: number;
}
