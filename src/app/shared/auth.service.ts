import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
email:any;
password:any;

constructor() { }

  check(){
    if(this.email=="admin@gmail.com" && this.password=="12345678"){
      localStorage.setItem('email',this.email);
      return true;
   }
     
     else{
      return false;
     }
  }
}
