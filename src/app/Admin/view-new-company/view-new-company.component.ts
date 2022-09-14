import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-new-company',
  templateUrl: './view-new-company.component.html',
  styleUrls: ['./view-new-company.component.css']
})
export class ViewNewCompanyComponent implements OnInit {

  carray:any[]=[];

  constructor(
    private adminService:AdminServiceService
  ) { }

  ngOnInit(): void {
    this.adminService.viewNewCompany().then((res:any)=>{
      this.carray=res;
    });
  }

  approveCompany(id:any){
    console.log(id);
    this.adminService.acceptCompany({id}).then((res:any)=>{
      console.log(res);
      if(res.alert==='Success'){
        alert("Accepted");
        window.location.reload();
      }
    });
  }

  rejectCompany(id:any){
    console.log(id);
    this.adminService.declineCompany({id}).then((res:any)=>{
      console.log(res);
      if(res.alert==='Success'){
        alert("Rejected");
        window.location.reload();
      }
    });
  }
}
