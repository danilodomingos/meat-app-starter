import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MEAT_API } from './../app.api';
import { MenuItem } from './../restaurant-detail/menu-item/menu-item.model';
import { Restaurant } from './restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {
    constructor(private http: HttpClient) {}

    restaurants(): Observable<Restaurant[]> {

        return this.http
            .get<Restaurant[]>(`${MEAT_API}/restaurants`);

        /*
            let params: HttpParams = undefined;
            if (search) {
                params = new HttpParams();
                params.append('q', search);
            }
            return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params:params});
        */
    }

    restaurantById(id: string): Observable<Restaurant> {
        return this.http
            .get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }

    reviews(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    menuOfRestaurant(id: string): Observable<MenuItem[]> {
        return this.http
            .get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }
}
