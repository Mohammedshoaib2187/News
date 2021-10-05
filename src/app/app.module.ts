import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LogobarComponent } from './logobar/logobar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TrendingComponent } from './trending/trending.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { Weekly2Component } from './weekly2/weekly2.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { RecentComponent } from './recent/recent.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MapsComponent } from './maps/maps.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { LatestComponent } from './latest/latest.component';
import { LatestTrendingComponent } from './latest-trending/latest-trending.component';
import { DetailsComponent } from './details/details.component';
import { FollowComponent } from './follow/follow.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LogobarComponent,
    NavbarComponent,
    TrendingComponent,
    WeeklyComponent,
    WhatsnewComponent,
    Weekly2Component,
    YoutubeComponent,
    RecentComponent,
    PaginationComponent,
    FooterbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MapsComponent,
    GetintouchComponent,
    LatestComponent,
    LatestTrendingComponent,
    DetailsComponent,
    FollowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
