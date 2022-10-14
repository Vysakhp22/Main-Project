import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CentraljailServiceService {

  constructor(private http:HttpClient) { }

  prisonerImage(img:any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/prisonerImage.php",img).toPromise();
  }

  prisonerRegister(data:any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/prisonerRegister.php",data).toPromise();
  }

  prisonerCheck(mail:any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/prisonervalid.php",mail).toPromise();
  }

  superintendentImg(img:any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/superintendentImage.php",img).toPromise();
  }

  superIntendentRegister(data:any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/jailsuperintendentregister.php",data).toPromise()
  }

  getJail(id: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/getJail.php",id).toPromise();
  }

  updateJail(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/upadateJail.php",data).toPromise();
  }
  
  changePassword(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/changepasswordJail.php",data).toPromise();
  }

  viewProduct(){
    return this.http.get("http://localhost/Ex-Convict/Centraljail/viewproduct.php").toPromise()
  }
  addproductRate(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/productRate.php",data).toPromise();
  }

  addProductiondetails(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/productiondetails.php",data).toPromise();
  }
}
