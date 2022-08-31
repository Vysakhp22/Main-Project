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
}
