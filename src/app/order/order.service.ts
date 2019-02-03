import 'rxjs/add/operator/map';
import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: HttpClient) { }

    cartItems(): CartItem[] {
        return this.cartService.items;
    }

    increaseQty(item: CartItem): void {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem): void {
        this.cartService.decreaseQty(item);
    }

    removeItem(item: CartItem): void {
        this.cartService.removeItem(item);
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    clear(): void {
        this.cartService.clear();
    }

    checkOrder(order: Order): Observable<string> {

        return this.http.post<Order>(`${MEAT_API}/orders`, order)
                        // tslint:disable-next-line:no-shadowed-variable
                        .map(order => order.id);
    }



}
