import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
    selector: 'mt-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    menu: Observable<MenuItem[]>;

    constructor(private restaurantsService: RestaurantsService,
        private route: ActivatedRoute) {}

    ngOnInit() {

        let restaurantId = this.route.parent.snapshot.params['id'];
        this.menu = this.restaurantsService.menuOfRestaurant(restaurantId);
    }

    addMenuItem(event: MenuItem): void {
        console.log(event);
    }
}
