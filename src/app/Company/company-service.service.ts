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
}