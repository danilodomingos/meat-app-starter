import { ErrorHandler } from './../app.error-handler';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from './../app.api';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {
    constructor(private http: Http) {}

    restaurants(): Observable<Restaurant[]> {

        return this.http.get(`${MEAT_API}/restaurants`)
            .map(resp => resp.json())
                .catch(ErrorHandler.handleError);
    }

    restaurantById(id: string): Observable<Restaurant> {

        return this.http.get(`${MEAT_API}/restaurants/${id}`)
            .map(resp => resp.json())
                .catch(ErrorHandler.handleError);
    }

    reviews(id: string): Observable<any> {

        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(resp => resp.json())
                .catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {

        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
            .map(resp => resp.json())
                .catch(ErrorHandler.handleError);
    }
}
