import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-place',
  templateUrl: './view-place.component.html',
  styleUrls: ['./view-place.component.css']
})
export class ViewPlaceComponent implements OnInit {
  placearray:any[]=[];

  constructor(private adminservice:AdminServiceService) { }

  ngOnInit(): void {
    this.adminservice.viewPlace().then((data:any)=>{
      this.placearray=data;
    })
  }
  placeDelete(id:any){
    this.adminservice.delPlace({id}).then((data:any)=>{
      console.log(data);
      if(data.alert==='Success'){
        alert("Data Deleted")
      }
    });
    window.location.reload();
  }

}
