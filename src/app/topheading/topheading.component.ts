import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit{



  topHeadingDisplay :any = [];
  constructor(private api : ApiServiceService){}
  ngOnInit() {
    this.api.topHeading().subscribe((result) =>{
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
    


  }

}
