import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


// Define headers
const headers = new HttpHeaders({
  'Content-Type': 'application/json', 
  'Access-Control-Allow-Origin': '*' 
});
@Injectable({
  providedIn: 'root'
})
export class RestService {
  public login_url:String="https://digitalprojex.dev/flutterdemo/rest/apiv1/Auth/login"
  public register_url:String="https://digitalprojex.dev/flutterdemo/rest/apiv1/Auth/user/create"
  
  constructor(private httpRequest:HttpClient) { }
  public login(body:any){
    const data= this.httpRequest.post(`${this.login_url}`,body)
    return data
  }
  public register(body:any){
    const data=this.httpRequest.post(`${this.register_url}`,body,)
    return data
  }
  
}
