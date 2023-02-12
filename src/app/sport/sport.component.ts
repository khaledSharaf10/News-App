import { Component } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent {
  sportsDisplay: any = [];
  constructor(private api: ApiServiceService) { }
  
  ngOnInit() {
    this.api.sportApi().subscribe((result) => {
      console.log(result);
      this.sportsDisplay = result.articles;
    })
  }
}
