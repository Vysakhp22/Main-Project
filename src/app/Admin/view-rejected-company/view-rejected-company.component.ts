import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-rejected-company',
  templateUrl: './view-rejected-company.component.html',
  styleUrls: ['./view-rejected-company.component.css']
})
export class ViewRejectedCompanyComponent implements OnInit {

  carray:any[]=[];

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.viewRejectedCompany().then((res:any)=>{
      this.carray=res;
    })
  }

}
