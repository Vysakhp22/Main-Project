import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-job-details',
  templateUrl: './view-job-details.component.html',
  styleUrls: ['./view-job-details.component.css']
})
export class ViewJobDetailsComponent implements OnInit {
 jArry: any[]=[];
  constructor( private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.viewJobDetails().then((data: any) => {
      console.log(data)
      this.jArry=data;
      console.log(this.jArry)
    });
  }

}
