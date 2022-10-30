import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-view-new-jobapplications',
  templateUrl: './view-new-jobapplications.component.html',
  styleUrls: ['./view-new-jobapplications.component.css']
})
export class ViewNewJobapplicationsComponent implements OnInit {

  applyarr: any[]=[];

  constructor( private Cservice: CompanyServiceService ) { }

  ngOnInit(): void {
    this.Cservice.viewAllApplications({id: localStorage.getItem('Id')}).then((data: any) =>{
      this.applyarr=data.data;
    });
  }

  approve(jid: any, vid: any){
    this.Cservice.approveApplication({id: jid, vacid: vid}).then((res: any) => {
      console.log(res);
      if(res.alert==='Success'){
        alert("Approved");
        window.location.reload();
      }
    });
  }

  reject(jid: any){
    this.Cservice.rejectApplication({id: jid}).then((res: any) => {
      console.log(res);
      if(res.alert==='Success'){
        alert("Rejected");
        window.location.reload();
      }
    });
  }

}
