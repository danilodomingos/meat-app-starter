import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Restaurant } from './../restaurants/restaurant/restaurant.model';
import { RestaurantsService } from './../restaurants/restaurants.service';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;

  constructor(private restaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }


  ngOnInit() {

      let id = this.route.snapshot.params['id'];

      this.restaurantsService
        .restaurantById(id)
            .subscribe(restaurant => this.restaurant = restaurant);

  }

}
