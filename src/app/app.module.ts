import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiServiceService } from './api/api-service.service';
import { TechComponent } from './tech/tech.component';
import { SportComponent } from './sport/sport.component';
import { GeneralComponent } from './general/general.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechComponent,
    SportComponent,
    GeneralComponent,
    EntertainmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
