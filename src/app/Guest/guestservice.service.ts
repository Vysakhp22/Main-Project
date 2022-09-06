import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
