import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private api: HttpClient) { }

  // ApiUrl
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=655100fee1224ee2ab0c9ff35d640f34";


  apiUrlTech = "https://newsapi.org/v2/top-headlines?country=eg&category=technology&apiKey=655100fee1224ee2ab0c9ff35d640f34";
  apiUrlSports = "https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=655100fee1224ee2ab0c9ff35d640f34";
  apiUrlGen = "https://newsapi.org/v2/top-headlines?country=eg&category=general&apiKey=655100fee1224ee2ab0c9ff35d640f34";
  apiUrlEnt = "https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=655100fee1224ee2ab0c9ff35d640f34";


  // topHeading
  topHeading(): Observable<any> {
    return this.api.get(this.newsApiUrl);
  }

  // TechHeading
  techApi(): Observable<any> {
    return this.api.get(this.apiUrlTech);
  }


  // sportHeading
  sportApi(): Observable<any> {
    return this.api.get(this.apiUrlSports);
  }


  // generalHeading
  generalApi(): Observable<any> {
    return this.api.get(this.apiUrlGen);
  }


  // entHeading
  entApi(): Observable<any> {
    return this.api.get(this.apiUrlEnt);
  }



}
