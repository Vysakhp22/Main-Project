import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopServiceService {

  constructor( private http : HttpClient ) { }

  getShop(id:any){
    return this.http.post("http://localhost/Ex-Convict/Shop/getShop.php",id).toPromise();
  }

  updateShop(data:any){
    return this.http.post("http://localhost/Ex-Convict/Shop/updateShop.php",data).toPromise();
  }

  changePassword(data:any){
    return this.http.post("http://localhost/Ex-Convict/Shop/shopChangePassword.php",data).toPromise();
  }

  viewProduct(){
    return this.http.get("http://localhost/Ex-Convict/Shop/viewproduct.php").toPromise();
  }

  viewJailDistrict(){
    return this.http.get("http://localhost/Ex-Convict/Shop/jailSelect.php").toPromise();
  }

  viewJail(id: any){
   return this.http.post("http://localhost/Ex-Convict/Shop/Districtjail.php",id).toPromise();
  }

  jailProduct(id: any){
    return this.http.post("http://localhost/Ex-Convict/Shop/jailProduct.php",id).toPromise();
  }

  distBasedPr(id: any){
    return this.http.post("http://localhost/Ex-Convict/Shop/distbasedpr.php",id).toPromise();
  }

  productBased(id: any){
    return this.http.post("http://localhost/Ex-Convict/Shop/productbased.php",id).toPromise();
  }

  order(id: any){
    return this.http.post("http://localhost/Ex-Convict/Shop/Order.php",id).toPromise();
  }

  orderNow(id: any){
    return this.http.post("http://localhost/Ex-Convict/Shop/Ordernow.php",id).toPromise();
  }

}
