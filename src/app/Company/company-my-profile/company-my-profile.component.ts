import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-company-my-profile',
  templateUrl: './company-my-profile.component.html',
  styleUrls: ['./company-my-profile.component.css']
})
export class CompanyMyProfileComponent implements OnInit {

  cArray:any[]=[];

  constructor( private companyService: CompanyServiceService,) { }

  ngOnInit(): void {
    this.companyService.getCompany({id:localStorage.getItem('Id')}).then((data:any) => {
      this.cArray=data.data;
    });
  }

}
