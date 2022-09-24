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
}
