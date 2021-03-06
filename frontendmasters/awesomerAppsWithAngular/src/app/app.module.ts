import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material.module';

import { ItemsService, WidgetsService, NotificationsService } from './shared';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { GizmoComponent } from './gizmo/gizmo.component';
import { WidgetsComponent } from './widgets/widgets-component';
import { ReviewComponent } from './review/review.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsDetailsComponent } from './widgets/widgets-details/widgets-details.component';
import { ItemsSearchComponent } from './items/items-search/items-search.component';
import { StatusComponent } from './status/status.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ItemComponent } from './item/item.component';
import { FriesComponent } from './fries/fries.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    ItemsListComponent,
    ItemDetailComponent,
    GizmoComponent,
    WidgetsComponent,
    ReviewComponent,
    WidgetsListComponent,
    WidgetsDetailsComponent,
    ItemsSearchComponent,
    StatusComponent,
    NewsletterComponent,
    ItemComponent,
    FriesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [ItemsService, WidgetsService, NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
