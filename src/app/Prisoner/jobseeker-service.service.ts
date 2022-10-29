import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobseekerServiceService {

  constructor(private http: HttpClient) { }

  getallJobs(){
    return this.http.get("http://localhost/Ex-Convict/Jobseeker/getAllJobs.php").toPromise();
  }

  getjobCategory(){
    return this.http.get("http://localhost/Ex-Convict/Jobseeker/viewJobcategory.php").toPromise();
  }

  categoryBased(id: any){
    return this.http.post("http://localhost/Ex-Convict/Jobseeker/Jcategorybased.php",id).toPromise();
  }

  sendApplication(data: any){
    return this.http.post("http://localhost/Ex-Convict/Jobseeker/Applyjob.php",data).toPromise();
  }

}
