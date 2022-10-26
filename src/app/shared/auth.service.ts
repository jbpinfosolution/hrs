import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
email:any;
password:any;

constructor() { }

  check(email:any,password:any){
    if(this.email=="admin@gmail.com" && this.password=="12345678"){
      localStorage.setItem('email',"admin@gmail.com");
      return true;
   }
     
     else{
      return false;
     }
  }
}
