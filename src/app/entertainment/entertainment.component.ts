import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent implements OnInit{
  entDisplay: any = [];
  constructor(private api: ApiServiceService) { }
  
  ngOnInit() {
    this.api.entApi().subscribe((result) => {
      console.log(result);
      this.entDisplay = result.articles;
    })
  }
}
