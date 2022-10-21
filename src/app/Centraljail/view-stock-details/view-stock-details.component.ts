import { Component, OnInit } from '@angular/core';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-view-stock-details',
  templateUrl: './view-stock-details.component.html',
  styleUrls: ['./view-stock-details.component.css']
})
export class ViewStockDetailsComponent implements OnInit {

  stockArray:any[]=[];
  constructor( private Jservice: CentraljailServiceService ) { }

  ngOnInit(): void {
    this.Jservice.viewStock().then((data: any) => {
      this.stockArray=data;
    });
  }

}
