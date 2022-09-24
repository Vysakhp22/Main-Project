import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private client:HttpClient) { }
  districtRegister(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/District.php",data).toPromise();
  }
  viewdistrict(){
    return this.client.get("http://localhost/Ex-Convict/Admin/viewdistrict.php").toPromise();
  }
  placeRegister(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/Place.php",data).toPromise();
  }
  viewPlace(){
    return this.client.get("http://localhost/Ex-Convict/Admin/viewplace.php").toPromise();
  }
  editDist(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/editdistrict.php",data).toPromise();
  }
  updateDist(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/updatedist.php",data).toPromise();
  }
  delPlace(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/placedelete.php",data).toPromise();
  }
  addCategory(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/category.php",data).toPromise();
  }
  viewCategory(){
    return this.client.get("http://localhost/Ex-Convict/Admin/viewproductcategory.php").toPromise();
  }
  editCategory(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/editproductcategory.php",data).toPromise();
  }
  updateCategory(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/updatecategory.php",data).toPromise();
  }
  distDelete(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/districtdelete.php",data).toPromise();
  }
  productImg(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/ProductImage.php",data).toPromise();
  }
  productRegis(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/productregister.php",data).toPromise();
  }
  viewProduct(){
    return this.client.get("http://localhost/Ex-Convict/Admin/viewproduct.php").toPromise();
  }
  viewShop(){
    return this.client.get("http://localhost/Ex-Convict/Admin/viewShop.php").toPromise();
  }
  acceptShop(id:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/shopApprove.php",id).toPromise();
  }
  declineShop(id:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/shopReject.php",id).toPromise();
  }
  viewAcceptedShop(){
    return this.client.get("http://localhost/Ex-Convict/Admin/ApprovedShop.php").toPromise();
  }
  viewRejectedShop(){
    return this.client.get("http://localhost/Ex-Convict/Admin/Rejectedshop.php").toPromise();
  }
  viewNewCompany(){
    return this.client.get("http://localhost/Ex-Convict/Admin/viewCompany.php").toPromise();
  }
  acceptCompany(id:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/companyApprove.php",id).toPromise();
  }
  declineCompany(id:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/companyReject.php",id).toPromise();
  }
  viewAcceptedCompany(){
    return this.client.get("http://localhost/Ex-Convict/Admin/ApprovedCompany.php").toPromise();
  }
  viewRejectedCompany(){
    return this.client.get("http://localhost/Ex-Convict/Admin/RejectedCompany.php").toPromise();
  }
  getPlace(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/getPlace.php",data).toPromise();
  }
  centraljailRegister(data:any){
    return this.client.post("http://localhost/Ex-Convict/Admin/centraljail.php",data).toPromise();
  }
}
