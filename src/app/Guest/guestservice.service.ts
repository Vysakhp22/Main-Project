import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class GuestserviceService {

  constructor(private http:HttpClient) { }

  userRegister(data:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/newuserregister.php",data).toPromise();
  }
  userValidity(data:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/uservalidity.php",data).toPromise();
  }
  proofImage(data:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/Proofimage.php",data).toPromise();
  }
  logoImage(img:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/Logoimage.php",img).toPromise();
  }
  getDistrict(){
    return this.http.get("http://localhost/Ex-Convict/Guest/getdistrict.php").toPromise();
  }
  getPlace(pid:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/getplace.php",pid).toPromise();
  }
  companyValidity(id:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/companyValidity.php",id).toPromise();
  }
  companyRegister(data:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/companyregister.php",data).toPromise();
  }
  shopProof(data:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/Proofimage.php",data).toPromise();
  }
  shopLogo(data:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/Logoimage.php",data).toPromise();
  }
  shopValid(email:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/shopValid.php",email).toPromise();
  }
  shopRegister(val:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/shopRegister.php",val).toPromise();
  }
  guestLogin(data:any){
    return this.http.post("http://localhost/Ex-Convict/Guest/Guestlogin.php",data).toPromise();
  }
}
