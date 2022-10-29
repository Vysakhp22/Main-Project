import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-view-accepted-jobapplications',
  templateUrl: './view-accepted-jobapplications.component.html',
  styleUrls: ['./view-accepted-jobapplications.component.css']
})
export class ViewAcceptedJobapplicationsComponent implements OnInit {

  applyarr: any[]=[];

  constructor( private Cservice: CompanyServiceService) { }

  ngOnInit(): void {
    this.Cservice.viewApprovedApplications({id: localStorage.getItem('Id')}).then((data: any) =>{
      this.applyarr=data.data;
      console.log(data);
    });
  }

}
