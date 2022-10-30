import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CentraljailServiceService } from '../centraljail-service.service';

@Component({
  selector: 'app-view-prisoner',
  templateUrl: './view-prisoner.component.html',
  styleUrls: ['./view-prisoner.component.css']
})
export class ViewPrisonerComponent implements OnInit {

  prisonerarray: any[]=[];
  flag: boolean=true;

  constructor( private Cservice: CentraljailServiceService,
               private fb: FormBuilder) { }

    pForm=this.fb.group({
      pcode:['']
    });

  ngOnInit(): void {
    this.Cservice.viewPrisoner({id: localStorage.getItem('Id')}).then((data: any) =>{
      console.log(data);
      this.prisonerarray=data.data;
    });
  }

  onBlur(){
    this.flag=true;
    this.Cservice.searchPrisoner({id: localStorage.getItem('Id'), pid: this.pForm.value.pcode}).then((data: any) =>{
      console.log(data);
      if(data.alert === 'Success'){
        this.prisonerarray=data.data;
      }
      else{
        this.flag=false;
      }
    });
  }

}
