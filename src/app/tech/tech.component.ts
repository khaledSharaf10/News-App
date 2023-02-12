import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  techDisplay: any = [];
  constructor(private api: ApiServiceService) { }
  
  ngOnInit() {
    this.api.techApi().subscribe((result) => {
      console.log(result);
      this.techDisplay = result.articles;
    })
  }

}
