import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifySessionService {

  constructor() { }

  public verifySession(){
    if(localStorage.getItem('session')==null){
      return false
    }
    else{
      return true
    }
  }
}
