import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor( private http: HttpClient ) { }

  getCompany(id:any){
    return this.http.post("http://localhost/Ex-Convict/Company/getCompany.php",id).toPromise();
  }

  updateCompany(data:any){
    return this.http.post("http://localhost/Ex-Convict/Company/updateCompany.php",data).toPromise();
  }

  changePassword(data:any){
    return this.http.post("http://localhost/Ex-Convict/Company/companyChangePassword.php",data).toPromise();
  }

  getJobdetails(){
    return this.http.get("http://localhost/Ex-Convict/Company/getJobdetails.php").toPromise();
  }

  addVaccancy(data: any){
    return this.http.post("http://localhost/Ex-Convict/Company/addVaccancy.php", data).toPromise();
  }

  onJobdetSelect(id: any){
    return this.http.post("http://localhost/Ex-Convict/Company/Jobdetselect.php", id).toPromise();
  }

  viewVacancy(id: any){
    return this.http.post("http://localhost/Ex-Convict/Company/viewVacancy.php",id).toPromise();
  }

  viewAllApplications(id: any){
    return this.http.post("http://localhost/Ex-Convict/Company/viewallApplications.php",id).toPromise();
  }

  approveApplication(id: any){
    return this.http.post("http://localhost/Ex-Convict/Company/approveapplication.php",id).toPromise();
  }

  rejectApplication(id: any){
    return this.http.post("http://localhost/Ex-Convict/Company/rejectapplication.php",id).toPromise();
  }

  viewApprovedApplications(id: any){
    return this.http.post("http://localhost/Ex-Convict/Company/viewacceptedapplications.php",id).toPromise();
  }

  viewRejectedApplications(id: any){
    return this.http.post("http://localhost/Ex-Convict/Company/rejectedapplications.php",id).toPromise();
  }


}
