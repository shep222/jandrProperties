import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HousesComponent } from './houses/houses.component';
import { ApplicationComponent } from './application/application.component';
import { HouseListComponent } from './houses/house-list/house-list.component';
import { HouseItemComponent } from './houses/house-list/house-item/house-item.component';
import { HouseDetailComponent } from './houses/house-detail/house-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HousesComponent,
    ApplicationComponent,
    HouseListComponent,
    HouseItemComponent,
    HouseDetailComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB80lk-p0362dX5fM2wVXLUo09m87vLe4Y'
  }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
