import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './shared/input/input.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { OrderComponent } from './order/order.component';
import { OrderItemsComponent } from './order/order-items/order-items.component';
import { OrderService } from './order/order.service';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RadioComponent } from './shared/radio/radio.component';
import { RatingComponent } from './shared/rating/rating.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/restaurants.service';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';

@NgModule({
    declarations: [
        AboutComponent,
        AppComponent,
        HeaderComponent,
        HomeComponent,
        InputComponent,
        MenuComponent,
        MenuItemComponent,
        OrderComponent,
        OrderItemsComponent,
        RadioComponent,
        RestaurantComponent,
        RestaurantDetailComponent,
        RestaurantsComponent,
        ReviewsComponent,
        ShoppingCartComponent,
        DeliveryCostsComponent,
        OrderSummaryComponent,
        RatingComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [
        OrderService,
        RestaurantsService,
        ShoppingCartService,
        {provide: LOCALE_ID, useValue: 'pt-BR'}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
