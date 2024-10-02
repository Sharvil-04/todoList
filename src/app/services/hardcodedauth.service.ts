import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthService {

  constructor() { }

  authenticate(username: string, password: string){
    console.log(this.isUserLoggedIn());
    if(username==='sharvilp' && password==='dummy'){
      sessionStorage.setItem('authenticaterUser', username);
      console.log(this.isUserLoggedIn());
      return true
    }
    
    
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }

}
