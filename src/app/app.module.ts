import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { SharedModule } from './shared/shared/shared.module';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        MenuComponent,
        MenuItemComponent,
        OrderComponent,
        OrderItemsComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        RestaurantsComponent,
        ReviewsComponent,
        ShoppingCartComponent,
    ],
    imports: [
        BrowserModule,
        SharedModule,
        HttpModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'pt-BR'},
        RestaurantsService,
        ShoppingCartService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
