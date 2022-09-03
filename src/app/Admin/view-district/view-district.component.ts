import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-district',
  templateUrl: './view-district.component.html',
  styleUrls: ['./view-district.component.css']
})
export class ViewDistrictComponent implements OnInit {
  dataarray:any[]=[]

  constructor(private adminsrvice:AdminServiceService) { }

  ngOnInit(): void {
    this.adminsrvice.viewdistrict().then((data:any)=>{
      this.dataarray=data
    })
  }
  deleteDist(id:any){
    console.log(id);
    this.adminsrvice.distDelete({id}).then((data:any)=>{
      if(data.alert==='Success'){
        alert("District deleted");
      }
      else{
        alert("Failed");
      }
    });
    window.location.reload();
  }
}
