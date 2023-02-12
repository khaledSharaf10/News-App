import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api/api-service.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit{
  genDisplay: any = [];
  constructor(private api: ApiServiceService) { }
  
  ngOnInit() {
    this.api.generalApi().subscribe((result) => {
      console.log(result);
      this.genDisplay = result.articles;
    })
  }
}
