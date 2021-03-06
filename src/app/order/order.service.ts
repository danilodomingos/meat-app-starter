import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CartItem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order } from './order.model';

import { LoginService } from './../security/login/login.service';
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service';

import { MEAT_API } from '../app.api';

@Injectable()
export class OrderService {

    constructor(private cartService: ShoppingCartService,
        private http: HttpClient,
        private loginService: LoginService) { }

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

        let headers = new HttpHeaders();

        if (this.loginService.isLoggedIn()) {
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`);
        }

        return this.http.post<Order>(`${MEAT_API}/orders`, order, {headers: headers})
                        // tslint:disable-next-line:no-shadowed-variable
                        .map(order => order.id);
    }



}
