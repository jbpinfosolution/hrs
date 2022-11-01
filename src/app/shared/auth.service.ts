import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


constructor() { }

  check(email:any,password:any){
      
    if(email=="admin@gmail.com" && password=="12345678"){
      localStorage.setItem('useremail',"admin");
      return true;
   }
     
     else{
      return false;
     }
  }

  
  
}
