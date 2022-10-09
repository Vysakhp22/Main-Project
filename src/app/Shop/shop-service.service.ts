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
}
