import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http:HttpClient ) { }

  getUser(id:any){
    return this.http.post("http://localhost/Ex-Convict/User/getUser.php",id).toPromise();
  }
  updateUser(data:any){
    return this.http.post("http://localhost/Ex-Convict/User/updateUser.php",data).toPromise();
  }
}
