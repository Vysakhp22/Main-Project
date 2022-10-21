import { Component, OnInit } from '@angular/core';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-view-production',
  templateUrl: './view-production.component.html',
  styleUrls: ['./view-production.component.css']
})
export class ViewProductionComponent implements OnInit {

  productArray:any[]=[];

  constructor( private Jservice: CentraljailServiceService) { }

  ngOnInit(): void {
    console.log('hai');
    this.Jservice.viewProductiondetails().then((val: any) => {
      this.productArray=val;
      console.log(this.productArray);
    });
  }

}
