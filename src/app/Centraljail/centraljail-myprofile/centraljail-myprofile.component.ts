import { Component, OnInit } from '@angular/core';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-centraljail-myprofile',
  templateUrl: './centraljail-myprofile.component.html',
  styleUrls: ['./centraljail-myprofile.component.css']
})
export class CentraljailMyprofileComponent implements OnInit {

  dataArray: any[]=[];

  constructor( private Service: CentraljailServiceService ) { }

  ngOnInit(): void {
    this.Service.getJail({ id: localStorage.getItem('Id') }).then((data:any) => {
      this.dataArray=data.data;
      console.log(this.dataArray);
    });
  }

}
