import { Component, OnInit } from '@angular/core';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-view-product-rates',
  templateUrl: './view-product-rates.component.html',
  styleUrls: ['./view-product-rates.component.css']
})
export class ViewProductRatesComponent implements OnInit {

  rateArray: any[]=[];

  constructor( private Jservice: CentraljailServiceService) { }

  ngOnInit(): void {
    this.Jservice.viewRates().then((data: any) => {
      this.rateArray=data;
      console.log(this.rateArray);
    });
  }

}
