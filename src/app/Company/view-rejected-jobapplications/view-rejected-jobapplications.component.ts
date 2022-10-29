import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-view-rejected-jobapplications',
  templateUrl: './view-rejected-jobapplications.component.html',
  styleUrls: ['./view-rejected-jobapplications.component.css']
})
export class ViewRejectedJobapplicationsComponent implements OnInit {

  applyarr: any[]=[];

  constructor(private Cservice: CompanyServiceService) { }

  ngOnInit(): void {
    this.Cservice.viewRejectedApplications({id: localStorage.getItem('Id')}).then((data: any) =>{
      this.applyarr=data.data;
      console.log(data);
    });
  }

}
