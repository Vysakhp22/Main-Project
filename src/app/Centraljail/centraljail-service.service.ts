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

  addStock(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/productstock.php",data).toPromise();
  }

  getStock(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/getStockdetails.php",data).toPromise();
  }

  viewRates(){
    return this.http.get("http://localhost/Ex-Convict/Centraljail/viewProductrates.php").toPromise();
  }

  viewProductiondetails(){
    return this.http.get("http://localhost/Ex-Convict/Centraljail/viewProduction.php").toPromise();
  }

  viewStock(){
    return this.http.get("http://localhost/Ex-Convict/Centraljail/viewStock.php").toPromise();
  }

  getDistrict(){
    return this.http.get("http://localhost/Ex-Convict/Centraljail/getdistrict.php").toPromise();
  }

  getPlace(id: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/getplace.php",id).toPromise();
  }

  proofUpload(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/Proof.php",data).toPromise()
  }

  ImageUpload(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/Imageupload.php",data).toPromise()
  }

  jobSeekerRegister(data: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/Jobseekerregister.php", data).toPromise();
  }

  getPrisoner(id: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/getprisonername.php",id).toPromise();
  }

  jobSeekerValid(id: any){
    return this.http.post("http://localhost/Ex-Convict/Centraljail/jobSeekervalid.php", id).toPromise();
  }
}
