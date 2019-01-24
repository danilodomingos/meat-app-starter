import { Component, OnInit } from '@angular/core';

import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';
import { RadioOption } from 'app/shared/radio/radio-option.model';

@Component({
    selector: 'mt-order',
    templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

    delivery = 8;
    paymentOptions: RadioOption[] = [
        {label: 'Dinheiro', value: 'MON'},
        {label: 'Cartão de Débito', value: 'DEB'},
        {label: 'Vale Refeição', value: 'REF'}
    ];

    constructor(private orderService: OrderService) {}

    ngOnInit() {}

    itemsValue(): number {
        return this.orderService.itemsValue();
    }

    cartItems(): CartItem[] {
        return this.orderService.cartItems();
    }

    increaseQty(item: CartItem) {
        this.orderService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.orderService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.orderService.removeItem(item);
    }

    checkOrder(order: Order): void {
        order.orderItems = this.cartItems().map((item) =>
            new OrderItem(item.quantity, item.menuItem.id));

        this.orderService.checkOrder(order).subscribe(orderId => {
            console.log('Order ID: ', orderId);
            this.orderService.clear();
        });
    }
}
