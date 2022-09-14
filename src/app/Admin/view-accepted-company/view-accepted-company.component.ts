import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-accepted-company',
  templateUrl: './view-accepted-company.component.html',
  styleUrls: ['./view-accepted-company.component.css']
})
export class ViewAcceptedCompanyComponent implements OnInit {

  carray:any[]=[];

  constructor(private adminService:AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.viewAcceptedCompany().then((val:any)=>{
      this.carray=val;
    });
  }

}
