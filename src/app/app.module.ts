import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlatformsComponent,
    SolutionsComponent,
    CarouselHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: PathLocationStrategy  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
