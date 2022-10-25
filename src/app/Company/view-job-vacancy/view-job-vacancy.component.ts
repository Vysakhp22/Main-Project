import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-view-job-vacancy',
  templateUrl: './view-job-vacancy.component.html',
  styleUrls: ['./view-job-vacancy.component.css']
})
export class ViewJobVacancyComponent implements OnInit {

  vacArray: any[]=[];

  constructor( private Cservice: CompanyServiceService,
                ) { }

  ngOnInit(): void {
    this.Cservice.viewVacancy({id: localStorage.getItem('Id')}).then((res:any) => {
      this.vacArray=res.data;
      console.log(res.data)
    });
  }

}
