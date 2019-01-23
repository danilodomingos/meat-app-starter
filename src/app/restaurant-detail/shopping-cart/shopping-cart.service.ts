import { Injectable } from '@angular/core';

import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

@Injectable()
export class ShoppingCartService {

    items: CartItem[] = [];

    constructor() { }

    clear(): void {
        this.items = [];
    }

    total(): number {
        return this.items
            .map(item => item.value())
                .reduce((prev, value) => prev + value, 0);
    }

    addItem(item: MenuItem): void {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);

        if (foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem): void {
        this.items.splice(this.items.indexOf(item), 1);
    }

    increaseQty(item: CartItem): any {
        item.quantity = item.quantity + 1;
    }

    decreaseQty(item: CartItem): any {
        item.quantity = item.quantity - 1;

        if (item.quantity === 0) {
            this.removeItem(item);
        }
    }

}
