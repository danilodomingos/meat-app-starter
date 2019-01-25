import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

import { MEAT_API } from '../app.api';


@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService, private http: Http) { }

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

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post(`${MEAT_API}/orders`,
                        JSON.stringify(order),
                        new RequestOptions({headers: headers}))
                        .map(response => response.json())
                        // tslint:disable-next-line:no-shadowed-variable
                        .map(order => order.id);
    }



}
