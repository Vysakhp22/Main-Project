import { Component, OnInit } from '@angular/core';
import { JobseekerServiceService } from '../jobseeker-service.service';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.component.html',
  styleUrls: ['./application-status.component.css']
})
export class ApplicationStatusComponent implements OnInit {

  jarray: any[]=[];

  constructor( private Jservice: JobseekerServiceService ) { }

  ngOnInit(): void {
    this.Jservice.ApplicationStatus({id: localStorage.getItem('Id')}).then((data: any) => {
      console.log(data.data);
      this.jarray=data.data;
    });
  }

}
